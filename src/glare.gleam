import glare/element.{type Node}

pub type HtmlElement

/// Mount a node to a dom element
///
///     fn content() {
///       return h1([text("hello world")])
///     }
///     render(content(), bodyelement)
@external(javascript, "./core.mjs", "create_render")
pub fn create_render(node: Node, elem: HtmlElement) -> Nil

/// Select a dom element
/// used for mounting to, see [`render`](#render)
@external(javascript, "./core.mjs", "doc_selector")
pub fn select(selector: String) -> HtmlElement

/// Wraps `Int` into [`Node`](./glare/element.html#Node)
@external(javascript, "./core.mjs", "wrap")
pub fn int(v: Int) -> Node

/// Wraps `String` into [`Node`](./glare/element.html#Node)
@external(javascript, "./core.mjs", "wrap")
fn text(v: String) -> Node

/// Wrap a signal getter into [`Node`](./glare/element.html#Node)
@external(javascript, "./core.mjs", "wrap")
fn signal(v: fn() -> a) -> Node
