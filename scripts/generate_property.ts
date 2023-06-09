
const styles = [
  ["background"],
  ["bg_color", "backgroundColor"],
  ["bg_img", "backgroundImage"],
  ["border"],
  ["border_color", "borderColor"],
  ["radius", "borderRadius"],
  ["color"],
  ["cursor"],
  ["display"],
  ["flex"],
  ["flex_basis", "flexBasis"],
  ["flex_direction", "flexDirection"],
  ["flex_grow", "flexGrow"],
  ["flex_shrink", "flexShrink"],
  ["flex_wrap", "flexWrap"],
  ["font"],
  ["font_family", "fontFamily"],
  ["size", "fontSize"],
  ["weight", "fontWeight"],
  ["gap"],
  ["grid"],
  ["grid_area", "gridArea"],
  ["height"],
  ["margin"],
  ["margin_bottom", "marginBottom"],
  ["margin_left", "marginLeft"],
  ["margin_right", "marginRight"],
  ["margin_top", "marginTop"],
  ["padding"],
  ["padding_bottom", "paddingBottom"],
  ["padding_left", "paddingLeft"],
  ["padding_right", "paddingRight"],
  ["padding_top", "paddingTop"],
  ["position"],
  ["rotate"],
  ["text_align", "textAlign"],
  ["text_overflow", "textOverflow"],
  ["text_shadow", "textShadow"],
  ["width"],
  ["z_index", "zIndex"],
];

let outJs = `import { $ELEMENT } from "./ffi_element.mjs";

function class_(node, v) {
  return attr(node, "className", v);
}

export { class_ as class };

export function id(node, v) {
  return attr(node, "id", v) 
}

export function src(node, v) {
  return attr(node, "src", v) 
}

export function alt(node, v) {
  return attr(node, "alt", v) 
}

export function href(node, v) {
  return attr(node, "href", v) 
}

export function target(node, v) {
  return attr(node, "target", v) 
}

export function attr(node, k, v) {
  if (!node[$ELEMENT]) return node;

  const o = (...args) => {
    const elem = node();
    if (!elem) return elem;
    for (const key in o.props) {
      if (Object.hasOwnProperty.call(o.props, key)) {
        if (key === "style") {
          for (const s in o.props[key]) {
            elem.style[s] = o.props.style[s];
          }
          continue;
        }
        elem[key] = o.props[key];
      }
    }
    return elem;
  };

  o[$ELEMENT] = true;
  o.props = {};
  o.props[k] = v;
  return o;
}

export function style(node, k, v) {
  if (!(node[$ELEMENT] && node.props && node.props.style)) {
    node = attr(node, "style", {});
  }
  node.props.style[k] = v;
  return node;
}
`;

let outGleam =
  `//// Property functions are used to add properties to an element such as styling or classes.
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

pub external fn class(node: Node, v: String) -> Node =
  "../ffi_property.mjs" "class"
`;

for (const style of styles) {
  if (style.length === 2) {
    outJs += `export function ${style[0]}(node, v) {
  return style(node, "${style[1]}", v);
}\n\n`;
    outGleam += `pub external fn ${style[0]}(node: Node, v: String) -> Node =
  "../ffi_property.mjs" "${style[0]}"\n\n`;
  } else {
    outJs += `export function ${style}(node, v) {
  return style(node, "${style}", v);
}\n\n`;
    outGleam += `pub external fn ${style}(node: Node, v: String) -> Node =
  "../ffi_property.mjs" "${style}"\n\n`;
  }
}

await Promise.all([
  Deno.writeTextFile("src/ffi_property.mjs", outJs),
  Deno.writeTextFile("src/glare/property.gleam", outGleam),
]);
