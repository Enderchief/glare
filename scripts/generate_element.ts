const elements = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "font",
  "footer",
  "form",
  "frame",
  "frameset",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "slot",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "template",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  //   'var', #TODO: fixme
  "video",
  "wbr",
];

const js = (name: string) =>
  `export function ${name}(children) {
  return h("${name}", null, ...children.toArray());
}
`;

const gleam = (
  name: string,
) =>
  `pub external fn ${name}(children: List(Node)) -> Node = "../ffi_element.mjs" "${name}"
`;

let outGleam =
  `pub external fn h(tag: String, props: #(String, String), children: List(Node)) -> Node = "../ffi_element.mjs" "$h"
pub external type Node
`;

let outJs = `import h from "https://cdn.skypack.dev/solid-js/h";

export const $ELEMENT = Object.getOwnPropertySymbols(h("p", null, []))[0];

export function $h(tag, props, children) {
  return h(tag, Object.fromEntries(props), ...children.toArray());
}

`;

for (const element of elements) {
  outGleam += gleam(element);
  outJs += js(element);
}

await Promise.all([
  Deno.writeTextFile("src/glare/element.gleam", outGleam),
  Deno.writeTextFile("src/ffi_element.mjs", outJs),
]);
