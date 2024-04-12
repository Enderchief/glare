import glare/element.{type Node}

@external(javascript, "../ffi_event.mjs", "onclick")
pub fn onclick(node: Node, handler: fn() -> Nil) -> Node

@external(javascript, "../ffi_event.mjs", "event")
pub fn on(node: Node, event: String, handler: fn() -> Nil) -> Node
