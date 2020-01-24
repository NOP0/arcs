(function() {var implementors = {};
implementors["hashbrown"] = [{"text":"impl&lt;'_, '_, T, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;&amp;'_ <a class=\"struct\" href=\"hashbrown/struct.HashSet.html\" title=\"struct hashbrown::HashSet\">HashSet</a>&lt;T, S&gt;&gt; for &amp;'_ <a class=\"struct\" href=\"hashbrown/struct.HashSet.html\" title=\"struct hashbrown::HashSet\">HashSet</a>&lt;T, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html\" title=\"trait core::hash::BuildHasher\">BuildHasher</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,&nbsp;</span>","synthetic":false,"types":["hashbrown::set::HashSet"]}];
implementors["hibitset"] = [{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;T&gt; for <a class=\"struct\" href=\"hibitset/struct.BitSet.html\" title=\"struct hibitset::BitSet\">BitSet</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"hibitset/trait.BitSetLike.html\" title=\"trait hibitset::BitSetLike\">BitSetLike</a>,&nbsp;</span>","synthetic":false,"types":["hibitset::BitSet"]},{"text":"impl&lt;'a, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;T&gt; for &amp;'a <a class=\"struct\" href=\"hibitset/struct.BitSet.html\" title=\"struct hibitset::BitSet\">BitSet</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"hibitset/trait.BitSetLike.html\" title=\"trait hibitset::BitSetLike\">BitSetLike</a>,&nbsp;</span>","synthetic":false,"types":["hibitset::BitSet"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;T&gt; for <a class=\"struct\" href=\"hibitset/struct.AtomicBitSet.html\" title=\"struct hibitset::AtomicBitSet\">AtomicBitSet</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"hibitset/trait.BitSetLike.html\" title=\"trait hibitset::BitSetLike\">BitSetLike</a>,&nbsp;</span>","synthetic":false,"types":["hibitset::atomic::AtomicBitSet"]},{"text":"impl&lt;'a, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;T&gt; for &amp;'a <a class=\"struct\" href=\"hibitset/struct.AtomicBitSet.html\" title=\"struct hibitset::AtomicBitSet\">AtomicBitSet</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"hibitset/trait.BitSetLike.html\" title=\"trait hibitset::BitSetLike\">BitSetLike</a>,&nbsp;</span>","synthetic":false,"types":["hibitset::atomic::AtomicBitSet"]},{"text":"impl&lt;A, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;T&gt; for <a class=\"struct\" href=\"hibitset/struct.BitSetNot.html\" title=\"struct hibitset::BitSetNot\">BitSetNot</a>&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"hibitset/trait.BitSetLike.html\" title=\"trait hibitset::BitSetLike\">BitSetLike</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"hibitset/trait.BitSetLike.html\" title=\"trait hibitset::BitSetLike\">BitSetLike</a>,&nbsp;</span>","synthetic":false,"types":["hibitset::ops::BitSetNot"]},{"text":"impl&lt;'a, A, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;T&gt; for &amp;'a <a class=\"struct\" href=\"hibitset/struct.BitSetNot.html\" title=\"struct hibitset::BitSetNot\">BitSetNot</a>&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"hibitset/trait.BitSetLike.html\" title=\"trait hibitset::BitSetLike\">BitSetLike</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"hibitset/trait.BitSetLike.html\" title=\"trait hibitset::BitSetLike\">BitSetLike</a>,&nbsp;</span>","synthetic":false,"types":["hibitset::ops::BitSetNot"]},{"text":"impl&lt;A, B, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;T&gt; for <a class=\"struct\" href=\"hibitset/struct.BitSetAnd.html\" title=\"struct hibitset::BitSetAnd\">BitSetAnd</a>&lt;A, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"hibitset/trait.BitSetLike.html\" title=\"trait hibitset::BitSetLike\">BitSetLike</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"hibitset/trait.BitSetLike.html\" title=\"trait hibitset::BitSetLike\">BitSetLike</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"hibitset/trait.BitSetLike.html\" title=\"trait hibitset::BitSetLike\">BitSetLike</a>,&nbsp;</span>","synthetic":false,"types":["hibitset::ops::BitSetAnd"]},{"text":"impl&lt;'a, A, B, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;T&gt; for &amp;'a <a class=\"struct\" href=\"hibitset/struct.BitSetAnd.html\" title=\"struct hibitset::BitSetAnd\">BitSetAnd</a>&lt;A, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"hibitset/trait.BitSetLike.html\" title=\"trait hibitset::BitSetLike\">BitSetLike</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"hibitset/trait.BitSetLike.html\" title=\"trait hibitset::BitSetLike\">BitSetLike</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"hibitset/trait.BitSetLike.html\" title=\"trait hibitset::BitSetLike\">BitSetLike</a>,&nbsp;</span>","synthetic":false,"types":["hibitset::ops::BitSetAnd"]},{"text":"impl&lt;A, B, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;T&gt; for <a class=\"struct\" href=\"hibitset/struct.BitSetOr.html\" title=\"struct hibitset::BitSetOr\">BitSetOr</a>&lt;A, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"hibitset/trait.BitSetLike.html\" title=\"trait hibitset::BitSetLike\">BitSetLike</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"hibitset/trait.BitSetLike.html\" title=\"trait hibitset::BitSetLike\">BitSetLike</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"hibitset/trait.BitSetLike.html\" title=\"trait hibitset::BitSetLike\">BitSetLike</a>,&nbsp;</span>","synthetic":false,"types":["hibitset::ops::BitSetOr"]},{"text":"impl&lt;'a, A, B, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;T&gt; for &amp;'a <a class=\"struct\" href=\"hibitset/struct.BitSetOr.html\" title=\"struct hibitset::BitSetOr\">BitSetOr</a>&lt;A, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"hibitset/trait.BitSetLike.html\" title=\"trait hibitset::BitSetLike\">BitSetLike</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"hibitset/trait.BitSetLike.html\" title=\"trait hibitset::BitSetLike\">BitSetLike</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"hibitset/trait.BitSetLike.html\" title=\"trait hibitset::BitSetLike\">BitSetLike</a>,&nbsp;</span>","synthetic":false,"types":["hibitset::ops::BitSetOr"]},{"text":"impl&lt;A, B, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;T&gt; for <a class=\"struct\" href=\"hibitset/struct.BitSetXor.html\" title=\"struct hibitset::BitSetXor\">BitSetXor</a>&lt;A, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"hibitset/trait.BitSetLike.html\" title=\"trait hibitset::BitSetLike\">BitSetLike</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"hibitset/trait.BitSetLike.html\" title=\"trait hibitset::BitSetLike\">BitSetLike</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"hibitset/trait.BitSetLike.html\" title=\"trait hibitset::BitSetLike\">BitSetLike</a>,&nbsp;</span>","synthetic":false,"types":["hibitset::ops::BitSetXor"]},{"text":"impl&lt;'a, A, B, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;T&gt; for &amp;'a <a class=\"struct\" href=\"hibitset/struct.BitSetXor.html\" title=\"struct hibitset::BitSetXor\">BitSetXor</a>&lt;A, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"hibitset/trait.BitSetLike.html\" title=\"trait hibitset::BitSetLike\">BitSetLike</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"hibitset/trait.BitSetLike.html\" title=\"trait hibitset::BitSetLike\">BitSetLike</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"hibitset/trait.BitSetLike.html\" title=\"trait hibitset::BitSetLike\">BitSetLike</a>,&nbsp;</span>","synthetic":false,"types":["hibitset::ops::BitSetXor"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;T&gt; for <a class=\"struct\" href=\"hibitset/struct.BitSetAll.html\" title=\"struct hibitset::BitSetAll\">BitSetAll</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"hibitset/trait.BitSetLike.html\" title=\"trait hibitset::BitSetLike\">BitSetLike</a>,&nbsp;</span>","synthetic":false,"types":["hibitset::ops::BitSetAll"]},{"text":"impl&lt;'a, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;T&gt; for &amp;'a <a class=\"struct\" href=\"hibitset/struct.BitSetAll.html\" title=\"struct hibitset::BitSetAll\">BitSetAll</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"hibitset/trait.BitSetLike.html\" title=\"trait hibitset::BitSetLike\">BitSetLike</a>,&nbsp;</span>","synthetic":false,"types":["hibitset::ops::BitSetAll"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()