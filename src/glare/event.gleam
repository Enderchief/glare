import glare/element.{Node}

pub external fn onclick(node: Node, handler: fn() -> Nil) -> Node =
  "../ffi_event.mjs" "onclick"
