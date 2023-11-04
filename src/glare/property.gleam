//// Property functions are used to add properties to an element such as styling or classes.
//// Standard usage unless specified is as follows
////
////    h2([text("hello world")])
////    |> font("Lexend")
////    |> PROPERTY_FUNCTION("STRINGED VALUE")

import glare/element.{Node}

/// Add an attribute on a node
/// 
///     html([
///       p([text("שלום")])
///       |> attr("dir", "rtl")
///     ])
///     |> attr("lang", "he")
@external(javascript, "../ffi_property.mjs", "attr")
pub fn attr(node: Node, k: String, v: String) -> Node

/// Add custom styling on a node
///
///     div([])
///     |> style("border", "1px solid black")
///     |> style("borderRadius", "50%")
///     |> style("backgroundColor", "#ffaff3")
@external(javascript, "../ffi_property.mjs", "style")
pub fn style(node: Node, k: String, v: String) -> Node

@external(javascript, "../ffi_property.mjs", "id")
pub fn id(node: Node, v: string) -> Node

@external(javascript, "../ffi_property.mjs", "src")
pub fn src(node: Node, v: string) -> Node

@external(javascript, "../ffi_property.mjs", "alt")
pub fn alt(node: Node, v: string) -> Node

@external(javascript, "../ffi_property.mjs", "href")
pub fn href(node: Node, v: string) -> Node

@external(javascript, "../ffi_property.mjs", "target")
pub fn target(node: Node, v: string) -> Node

@external(javascript, "../ffi_property.mjs", "class")
pub fn class(node: Node, v: String) -> Node

@external(javascript, "../ffi_property.mjs", "background")
pub fn background(node: Node, v: String) -> Node

@external(javascript, "../ffi_property.mjs", "bg_color")
pub fn bg_color(node: Node, v: String) -> Node

@external(javascript, "../ffi_property.mjs", "bg_img")
pub fn bg_img(node: Node, v: String) -> Node

@external(javascript, "../ffi_property.mjs", "border")
pub fn border(node: Node, v: String) -> Node

@external(javascript, "../ffi_property.mjs", "border_color")
pub fn border_color(node: Node, v: String) -> Node

@external(javascript, "../ffi_property.mjs", "radius")
pub fn radius(node: Node, v: String) -> Node

@external(javascript, "../ffi_property.mjs", "color")
pub fn color(node: Node, v: String) -> Node

@external(javascript, "../ffi_property.mjs", "cursor")
pub fn cursor(node: Node, v: String) -> Node

@external(javascript, "../ffi_property.mjs", "display")
pub fn display(node: Node, v: String) -> Node

@external(javascript, "../ffi_property.mjs", "flex")
pub fn flex(node: Node, v: String) -> Node

@external(javascript, "../ffi_property.mjs", "flex_basis")
pub fn flex_basis(node: Node, v: String) -> Node

@external(javascript, "../ffi_property.mjs", "flex_direction")
pub fn flex_direction(node: Node, v: String) -> Node

@external(javascript, "../ffi_property.mjs", "flex_grow")
pub fn flex_grow(node: Node, v: String) -> Node

@external(javascript, "../ffi_property.mjs", "flex_shrink")
pub fn flex_shrink(node: Node, v: String) -> Node

@external(javascript, "../ffi_property.mjs", "flex_wrap")
pub fn flex_wrap(node: Node, v: String) -> Node

@external(javascript, "../ffi_property.mjs", "font")
pub fn font(node: Node, v: String) -> Node

@external(javascript, "../ffi_property.mjs", "font_family")
pub fn font_family(node: Node, v: String) -> Node

@external(javascript, "../ffi_property.mjs", "size")
pub fn size(node: Node, v: String) -> Node

@external(javascript, "../ffi_property.mjs", "weight")
pub fn weight(node: Node, v: String) -> Node

@external(javascript, "../ffi_property.mjs", "gap")
pub fn gap(node: Node, v: String) -> Node

@external(javascript, "../ffi_property.mjs", "grid")
pub fn grid(node: Node, v: String) -> Node

@external(javascript, "../ffi_property.mjs", "grid_area")
pub fn grid_area(node: Node, v: String) -> Node

@external(javascript, "../ffi_property.mjs", "height")
pub fn height(node: Node, v: String) -> Node

@external(javascript, "../ffi_property.mjs", "margin")
pub fn margin(node: Node, v: String) -> Node

@external(javascript, "../ffi_property.mjs", "margin_bottom")
pub fn margin_bottom(node: Node, v: String) -> Node

@external(javascript, "../ffi_property.mjs", "margin_left")
pub fn margin_left(node: Node, v: String) -> Node

@external(javascript, "../ffi_property.mjs", "margin_right")
pub fn margin_right(node: Node, v: String) -> Node

@external(javascript, "../ffi_property.mjs", "margin_top")
pub fn margin_top(node: Node, v: String) -> Node

@external(javascript, "../ffi_property.mjs", "padding")
pub fn padding(node: Node, v: String) -> Node

@external(javascript, "../ffi_property.mjs", "padding_bottom")
pub fn padding_bottom(node: Node, v: String) -> Node

@external(javascript, "../ffi_property.mjs", "padding_left")
pub fn padding_left(node: Node, v: String) -> Node

@external(javascript, "../ffi_property.mjs", "padding_right")
pub fn padding_right(node: Node, v: String) -> Node

@external(javascript, "../ffi_property.mjs", "padding_top")
pub fn padding_top(node: Node, v: String) -> Node

@external(javascript, "../ffi_property.mjs", "position")
pub fn position(node: Node, v: String) -> Node

@external(javascript, "../ffi_property.mjs", "rotate")
pub fn rotate(node: Node, v: String) -> Node

@external(javascript, "../ffi_property.mjs", "text_align")
pub fn text_align(node: Node, v: String) -> Node

@external(javascript, "../ffi_property.mjs", "text_overflow")
pub fn text_overflow(node: Node, v: String) -> Node

@external(javascript, "../ffi_property.mjs", "text_shadow")
pub fn text_shadow(node: Node, v: String) -> Node

@external(javascript, "../ffi_property.mjs", "width")
pub fn width(node: Node, v: String) -> Node

@external(javascript, "../ffi_property.mjs", "z_index")
pub fn z_index(node: Node, v: String) -> Node
