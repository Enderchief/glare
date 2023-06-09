import { $ELEMENT } from "./ffi_element.mjs";

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
export function background(node, v) {
  return style(node, "background", v);
}

export function bg_color(node, v) {
  return style(node, "backgroundColor", v);
}

export function bg_img(node, v) {
  return style(node, "backgroundImage", v);
}

export function border(node, v) {
  return style(node, "border", v);
}

export function border_color(node, v) {
  return style(node, "borderColor", v);
}

export function radius(node, v) {
  return style(node, "borderRadius", v);
}

export function color(node, v) {
  return style(node, "color", v);
}

export function cursor(node, v) {
  return style(node, "cursor", v);
}

export function display(node, v) {
  return style(node, "display", v);
}

export function flex(node, v) {
  return style(node, "flex", v);
}

export function flex_basis(node, v) {
  return style(node, "flexBasis", v);
}

export function flex_direction(node, v) {
  return style(node, "flexDirection", v);
}

export function flex_grow(node, v) {
  return style(node, "flexGrow", v);
}

export function flex_shrink(node, v) {
  return style(node, "flexShrink", v);
}

export function flex_wrap(node, v) {
  return style(node, "flexWrap", v);
}

export function font(node, v) {
  return style(node, "font", v);
}

export function font_family(node, v) {
  return style(node, "fontFamily", v);
}

export function size(node, v) {
  return style(node, "fontSize", v);
}

export function weight(node, v) {
  return style(node, "fontWeight", v);
}

export function gap(node, v) {
  return style(node, "gap", v);
}

export function grid(node, v) {
  return style(node, "grid", v);
}

export function grid_area(node, v) {
  return style(node, "gridArea", v);
}

export function height(node, v) {
  return style(node, "height", v);
}

export function margin(node, v) {
  return style(node, "margin", v);
}

export function margin_bottom(node, v) {
  return style(node, "marginBottom", v);
}

export function margin_left(node, v) {
  return style(node, "marginLeft", v);
}

export function margin_right(node, v) {
  return style(node, "marginRight", v);
}

export function margin_top(node, v) {
  return style(node, "marginTop", v);
}

export function padding(node, v) {
  return style(node, "padding", v);
}

export function padding_bottom(node, v) {
  return style(node, "paddingBottom", v);
}

export function padding_left(node, v) {
  return style(node, "paddingLeft", v);
}

export function padding_right(node, v) {
  return style(node, "paddingRight", v);
}

export function padding_top(node, v) {
  return style(node, "paddingTop", v);
}

export function position(node, v) {
  return style(node, "position", v);
}

export function rotate(node, v) {
  return style(node, "rotate", v);
}

export function text_align(node, v) {
  return style(node, "textAlign", v);
}

export function text_overflow(node, v) {
  return style(node, "textOverflow", v);
}

export function text_shadow(node, v) {
  return style(node, "textShadow", v);
}

export function width(node, v) {
  return style(node, "width", v);
}

export function z_index(node, v) {
  return style(node, "zIndex", v);
}

