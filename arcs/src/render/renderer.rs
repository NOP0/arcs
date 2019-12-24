use crate::{
    algorithms::{Bounded, BoundingBox},
    components::{DrawingObject, Geometry, Layer, LineStyle, PointStyle},
    primitives::Point,
    render::Viewport,
    Vector,
};
use kurbo::{Circle, Rect};
use piet::{Color, RenderContext};
use shred_derive::SystemData;
use specs::{join::MaybeJoin, prelude::*};
use std::{cmp::Reverse, collections::BTreeMap};

/// Long-lived state used when rendering.
#[derive(Debug, Clone)]
#[non_exhaustive]
pub struct Renderer {
    pub viewport: Viewport,
    pub background: Color,
}

impl Renderer {
    pub fn new(viewport: Viewport, background: Color) -> Self {
        Renderer {
            viewport,
            background,
        }
    }

    /// Get a [`System`] which will render using a particular [`RenderContext`].
    pub fn system<'a, R>(
        &'a mut self,
        backend: R,
        window_size: Rect,
    ) -> impl System<'a> + 'a
    where
        R: RenderContext + 'a,
    {
        RenderSystem {
            backend,
            window_size,
            renderer: self,
        }
    }
}

/// The [`System`] which actually renders things. This needs to be a temporary
/// object "closing over" the [`Renderer`] and some [`RenderContext`] due to
/// lifetimes.
///
/// The `RenderContext` for the `piet_web` crate takes the HTML5 canvas by
/// `&mut` reference instead of owning it, and we don't want to tie our
/// [`Renderer`] to a particular stack frame because it's so long lived (we'd
/// end up fighting the borrow checker and have self-referential types).
#[derive(Debug)]
struct RenderSystem<'renderer, B> {
    backend: B,
    window_size: Rect,
    renderer: &'renderer mut Renderer,
}

impl<'world, 'renderer, B> RenderSystem<'renderer, B> {
    /// Calculate the area of the drawing displayed by the viewport.
    fn viewport_dimensions(&self) -> BoundingBox {
        let scale = self.renderer.viewport.pixels_per_drawing_unit;
        let width = scale * self.window_size.width();
        let height = scale * self.window_size.height();

        BoundingBox::from_centre_and_dimensions(
            self.renderer.viewport.centre,
            width,
            height,
        )
    }
}

impl<'world, 'renderer, B: RenderContext> RenderSystem<'renderer, B> {
    fn render(
        &mut self,
        ent: Entity,
        drawing_object: &DrawingObject,
        styles: &Styling,
    ) {
        match drawing_object.geometry {
            Geometry::Point(ref point) => {
                self.render_point(ent, point, drawing_object.layer, styles)
            },
            _ => unimplemented!(),
        }
    }

    /// Draw a [`Point`] as a circle on the canvas.
    fn render_point(
        &mut self,
        entity: Entity,
        point: &Point,
        layer: Entity,
        styles: &Styling,
    ) {
        let fallback = PointStyle::default();
        let style = styles
            .point_styles
            .get(entity)
            .or_else(|| styles.point_styles.get(layer))
            .unwrap_or(&fallback);

        let radius = style
            .radius
            .in_pixels(self.renderer.viewport.pixels_per_drawing_unit);
        let point = Circle {
            center: self.to_viewport_coordinates(point.location),
            radius,
        };

        self.backend.fill(point, &style.colour);
    }

    /// Translates a [`Vector`] from drawing space to a [`kurbo::Point`] on the
    /// canvas.
    fn to_viewport_coordinates(&self, point: Vector) -> kurbo::Point {
        to_viewport_coordinates(
            point,
            self.viewport_dimensions(),
            self.window_size,
        )
    }
}

fn to_viewport_coordinates(
    point: Vector,
    viewport: BoundingBox,
    window: Rect,
) -> kurbo::Point {
    // From the ratio:
    //
    //   point.x - bottom_left.x   X - window.bottom_left.x
    //   ----------------------- = ------------------------
    //      viewport.width()           window.width()

    let bl = viewport.bottom_left();
    let dx = point.x - bl.x;
    let dy = point.y - bl.y;

    kurbo::Point {
        x: dx * window.width() / viewport.width(),
        y: dy * window.height() / viewport.height(),
    }
}

impl<'world, 'renderer, B: RenderContext> System<'world>
    for RenderSystem<'renderer, B>
{
    type SystemData = (DrawOrder<'world>, Styling<'world>);

    fn run(&mut self, data: Self::SystemData) {
        // make sure we're working with a blank screen
        self.backend.clear(self.renderer.background.clone());

        let (draw_order, styling) = data;

        let viewport_dimensions = self.viewport_dimensions();

        for (ent, obj) in draw_order.calculate(viewport_dimensions) {
            self.render(ent, obj, &styling);
        }
    }
}

/// Styling information.
#[derive(SystemData)]
struct Styling<'world> {
    line_styles: ReadStorage<'world, LineStyle>,
    point_styles: ReadStorage<'world, PointStyle>,
}

/// The state needed when calculating which order to draw things in so z-levels
/// are implemented correctly.
#[derive(SystemData)]
struct DrawOrder<'world> {
    entities: Entities<'world>,
    drawing_objects: ReadStorage<'world, DrawingObject>,
    layers: ReadStorage<'world, Layer>,
    bounding_boxes: ReadStorage<'world, BoundingBox>,
}

impl<'world> DrawOrder<'world> {
    fn calculate(
        &self,
        viewport_dimensions: BoundingBox,
    ) -> impl Iterator<Item = (Entity, &'_ DrawingObject)> + '_ {
        // Iterate through all drawing objects, grouping them by the parent
        // layer's z-level in reverse order (we want to yield higher z-levels
        // first)
        let mut drawing_objects: BTreeMap<
            Reverse<usize>,
            Vec<(Entity, &DrawingObject)>,
        > = BTreeMap::new();

        // PERF: This function has a massive impact on render times
        // Some ideas:
        //   - Use a pre-calculated quad-tree so we just need to check items
        //     within the viewport bounds
        //   - use a entities-to-layers cache so we can skip checking whether to
        //     draw an object on a hidden layer

        for (ent, obj, bounds) in (
            &self.entities,
            &self.drawing_objects,
            MaybeJoin(&self.bounding_boxes),
        )
            .join()
        {
            let Layer { z_level, visible } =
                self.layers.get(obj.layer).unwrap();

            let bounds = bounds
                .copied()
                .unwrap_or_else(|| obj.geometry.bounding_box());

            if *visible && viewport_dimensions.intersects_with(bounds) {
                drawing_objects
                    .entry(Reverse(*z_level))
                    .or_default()
                    .push((ent, obj));
            }
        }

        drawing_objects.into_iter().flat_map(|(_, items)| items)
    }
}
