import glare/element.{Node}

@external(javascript, "../ffi_event.mjs", "onclick")
pub fn onclick(node: Node, handler: fn() -> Nil) -> Node
