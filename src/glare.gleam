import glare/element.{Node}

pub external type HtmlElement

/// Mount a node to a dom element
///
///     fn content() {
///       return h1([text("hello world")])
///     }
///     render(content(), bodyelement)
pub external fn render(node: Node, elem: HtmlElement) -> Nil =
  "./core.mjs" "$render"

/// Select a dom element
/// used for mounting to, see [`render`](#render)
pub external fn select(selector: String) -> HtmlElement =
  "./core.mjs" "doc_selector"

/// Wraps `Int` into [`Node`](./glare/element.html#Node)
pub external fn int(v: Int) -> Node =
  "./core.mjs" "wrap"

/// Wraps `String` into [`Node`](./glare/element.html#Node)
pub external fn text(v: String) -> Node =
  "./core.mjs" "wrap"

/// Wrap a signal getter into [`Node`](./glare/element.html#Node)
pub external fn signal(v: fn() -> a) -> Node =
  "./core.mjs" "wrap"
