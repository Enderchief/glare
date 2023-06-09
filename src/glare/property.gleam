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
pub external fn attr(node: Node, k: String, v: String) -> Node =
  "../ffi_property.mjs" "attr"

/// Add custom styling on a node
///
///     div([])
///     |> style("border", "1px solid black")
///     |> style("borderRadius", "50%")
///     |> style("backgroundColor", "#ffaff3")
pub external fn style(node: Node, k: String, v: String) -> Node =
  "../ffi_property.mjs" "style"


pub external fn id(node: Node, v: string) -> Node =
  "../ffi_property.mjs" "id"

pub external fn src(node: Node, v: string) -> Node =
  "../ffi_property.mjs" "src"

pub external fn alt(node: Node, v: string) -> Node =
  "../ffi_property.mjs" "alt"

pub external fn href(node: Node, v: string) -> Node =
  "../ffi_property.mjs" "href"

pub external fn target(node: Node, v: string) -> Node =
  "../ffi_property.mjs" "target"

pub external fn class(node: Node, v: String) -> Node =
  "../ffi_property.mjs" "class"
pub external fn background(node: Node, v: String) -> Node =
  "../ffi_property.mjs" "background"

pub external fn bg_color(node: Node, v: String) -> Node =
  "../ffi_property.mjs" "bg_color"

pub external fn bg_img(node: Node, v: String) -> Node =
  "../ffi_property.mjs" "bg_img"

pub external fn border(node: Node, v: String) -> Node =
  "../ffi_property.mjs" "border"

pub external fn border_color(node: Node, v: String) -> Node =
  "../ffi_property.mjs" "border_color"

pub external fn radius(node: Node, v: String) -> Node =
  "../ffi_property.mjs" "radius"

pub external fn color(node: Node, v: String) -> Node =
  "../ffi_property.mjs" "color"

pub external fn cursor(node: Node, v: String) -> Node =
  "../ffi_property.mjs" "cursor"

pub external fn display(node: Node, v: String) -> Node =
  "../ffi_property.mjs" "display"

pub external fn flex(node: Node, v: String) -> Node =
  "../ffi_property.mjs" "flex"

pub external fn flex_basis(node: Node, v: String) -> Node =
  "../ffi_property.mjs" "flex_basis"

pub external fn flex_direction(node: Node, v: String) -> Node =
  "../ffi_property.mjs" "flex_direction"

pub external fn flex_grow(node: Node, v: String) -> Node =
  "../ffi_property.mjs" "flex_grow"

pub external fn flex_shrink(node: Node, v: String) -> Node =
  "../ffi_property.mjs" "flex_shrink"

pub external fn flex_wrap(node: Node, v: String) -> Node =
  "../ffi_property.mjs" "flex_wrap"

pub external fn font(node: Node, v: String) -> Node =
  "../ffi_property.mjs" "font"

pub external fn font_family(node: Node, v: String) -> Node =
  "../ffi_property.mjs" "font_family"

pub external fn size(node: Node, v: String) -> Node =
  "../ffi_property.mjs" "size"

pub external fn weight(node: Node, v: String) -> Node =
  "../ffi_property.mjs" "weight"

pub external fn gap(node: Node, v: String) -> Node =
  "../ffi_property.mjs" "gap"

pub external fn grid(node: Node, v: String) -> Node =
  "../ffi_property.mjs" "grid"

pub external fn grid_area(node: Node, v: String) -> Node =
  "../ffi_property.mjs" "grid_area"

pub external fn height(node: Node, v: String) -> Node =
  "../ffi_property.mjs" "height"

pub external fn margin(node: Node, v: String) -> Node =
  "../ffi_property.mjs" "margin"

pub external fn margin_bottom(node: Node, v: String) -> Node =
  "../ffi_property.mjs" "margin_bottom"

pub external fn margin_left(node: Node, v: String) -> Node =
  "../ffi_property.mjs" "margin_left"

pub external fn margin_right(node: Node, v: String) -> Node =
  "../ffi_property.mjs" "margin_right"

pub external fn margin_top(node: Node, v: String) -> Node =
  "../ffi_property.mjs" "margin_top"

pub external fn padding(node: Node, v: String) -> Node =
  "../ffi_property.mjs" "padding"

pub external fn padding_bottom(node: Node, v: String) -> Node =
  "../ffi_property.mjs" "padding_bottom"

pub external fn padding_left(node: Node, v: String) -> Node =
  "../ffi_property.mjs" "padding_left"

pub external fn padding_right(node: Node, v: String) -> Node =
  "../ffi_property.mjs" "padding_right"

pub external fn padding_top(node: Node, v: String) -> Node =
  "../ffi_property.mjs" "padding_top"

pub external fn position(node: Node, v: String) -> Node =
  "../ffi_property.mjs" "position"

pub external fn rotate(node: Node, v: String) -> Node =
  "../ffi_property.mjs" "rotate"

pub external fn text_align(node: Node, v: String) -> Node =
  "../ffi_property.mjs" "text_align"

pub external fn text_overflow(node: Node, v: String) -> Node =
  "../ffi_property.mjs" "text_overflow"

pub external fn text_shadow(node: Node, v: String) -> Node =
  "../ffi_property.mjs" "text_shadow"

pub external fn width(node: Node, v: String) -> Node =
  "../ffi_property.mjs" "width"

pub external fn z_index(node: Node, v: String) -> Node =
  "../ffi_property.mjs" "z_index"

