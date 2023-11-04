import h from "https://cdn.skypack.dev/solid-js/h";

export const $ELEMENT = Object.getOwnPropertySymbols(h("p", null, []))[0];

export function create_h(tag, props, children) {
  return h(tag, Object.fromEntries(props), ...children.toArray());
}

export function a(children) {
  return create_h("a", null, ...children.toArray());
}
export function abbr(children) {
  return create_h("abbr", null, ...children.toArray());
}
export function address(children) {
  return create_h("address", null, ...children.toArray());
}
export function area(children) {
  return create_h("area", null, ...children.toArray());
}
export function article(children) {
  return create_h("article", null, ...children.toArray());
}
export function aside(children) {
  return create_h("aside", null, ...children.toArray());
}
export function audio(children) {
  return create_h("audio", null, ...children.toArray());
}
export function b(children) {
  return create_h("b", null, ...children.toArray());
}
export function base(children) {
  return create_h("base", null, ...children.toArray());
}
export function bdi(children) {
  return create_h("bdi", null, ...children.toArray());
}
export function bdo(children) {
  return create_h("bdo", null, ...children.toArray());
}
export function blockquote(children) {
  return create_h("blockquote", null, ...children.toArray());
}
export function body(children) {
  return create_h("body", null, ...children.toArray());
}
export function br(children) {
  return create_h("br", null, ...children.toArray());
}
export function button(children) {
  return create_h("button", null, ...children.toArray());
}
export function canvas(children) {
  return create_h("canvas", null, ...children.toArray());
}
export function caption(children) {
  return create_h("caption", null, ...children.toArray());
}
export function cite(children) {
  return create_h("cite", null, ...children.toArray());
}
export function code(children) {
  return create_h("code", null, ...children.toArray());
}
export function col(children) {
  return create_h("col", null, ...children.toArray());
}
export function colgroup(children) {
  return create_h("colgroup", null, ...children.toArray());
}
export function data(children) {
  return create_h("data", null, ...children.toArray());
}
export function datalist(children) {
  return create_h("datalist", null, ...children.toArray());
}
export function dd(children) {
  return create_h("dd", null, ...children.toArray());
}
export function del(children) {
  return create_h("del", null, ...children.toArray());
}
export function details(children) {
  return create_h("details", null, ...children.toArray());
}
export function dfn(children) {
  return create_h("dfn", null, ...children.toArray());
}
export function dialog(children) {
  return create_h("dialog", null, ...children.toArray());
}
export function dir(children) {
  return create_h("dir", null, ...children.toArray());
}
export function div(children) {
  return create_h("div", null, ...children.toArray());
}
export function dl(children) {
  return create_h("dl", null, ...children.toArray());
}
export function dt(children) {
  return create_h("dt", null, ...children.toArray());
}
export function em(children) {
  return create_h("em", null, ...children.toArray());
}
export function embed(children) {
  return create_h("embed", null, ...children.toArray());
}
export function fieldset(children) {
  return create_h("fieldset", null, ...children.toArray());
}
export function figcaption(children) {
  return create_h("figcaption", null, ...children.toArray());
}
export function figure(children) {
  return create_h("figure", null, ...children.toArray());
}
export function font(children) {
  return create_h("font", null, ...children.toArray());
}
export function footer(children) {
  return create_h("footer", null, ...children.toArray());
}
export function form(children) {
  return create_h("form", null, ...children.toArray());
}
export function frame(children) {
  return create_h("frame", null, ...children.toArray());
}
export function frameset(children) {
  return create_h("frameset", null, ...children.toArray());
}
export function h1(children) {
  return create_h("h1", null, ...children.toArray());
}
export function h2(children) {
  return create_h("h2", null, ...children.toArray());
}
export function h3(children) {
  return create_h("h3", null, ...children.toArray());
}
export function h4(children) {
  return create_h("h4", null, ...children.toArray());
}
export function h5(children) {
  return create_h("h5", null, ...children.toArray());
}
export function h6(children) {
  return create_h("h6", null, ...children.toArray());
}
export function head(children) {
  return create_h("head", null, ...children.toArray());
}
export function header(children) {
  return create_h("header", null, ...children.toArray());
}
export function hgroup(children) {
  return create_h("hgroup", null, ...children.toArray());
}
export function hr(children) {
  return create_h("hr", null, ...children.toArray());
}
export function html(children) {
  return create_h("html", null, ...children.toArray());
}
export function i(children) {
  return create_h("i", null, ...children.toArray());
}
export function iframe(children) {
  return create_h("iframe", null, ...children.toArray());
}
export function img(children) {
  return create_h("img", null, ...children.toArray());
}
export function input(children) {
  return create_h("input", null, ...children.toArray());
}
export function ins(children) {
  return create_h("ins", null, ...children.toArray());
}
export function kbd(children) {
  return create_h("kbd", null, ...children.toArray());
}
export function label(children) {
  return create_h("label", null, ...children.toArray());
}
export function legend(children) {
  return create_h("legend", null, ...children.toArray());
}
export function li(children) {
  return create_h("li", null, ...children.toArray());
}
export function link(children) {
  return create_h("link", null, ...children.toArray());
}
export function main(children) {
  return create_h("main", null, ...children.toArray());
}
export function map(children) {
  return create_h("map", null, ...children.toArray());
}
export function mark(children) {
  return create_h("mark", null, ...children.toArray());
}
export function marquee(children) {
  return create_h("marquee", null, ...children.toArray());
}
export function menu(children) {
  return create_h("menu", null, ...children.toArray());
}
export function meta(children) {
  return create_h("meta", null, ...children.toArray());
}
export function meter(children) {
  return create_h("meter", null, ...children.toArray());
}
export function nav(children) {
  return create_h("nav", null, ...children.toArray());
}
export function noscript(children) {
  return create_h("noscript", null, ...children.toArray());
}
export function object(children) {
  return create_h("object", null, ...children.toArray());
}
export function ol(children) {
  return create_h("ol", null, ...children.toArray());
}
export function optgroup(children) {
  return create_h("optgroup", null, ...children.toArray());
}
export function option(children) {
  return create_h("option", null, ...children.toArray());
}
export function output(children) {
  return create_h("output", null, ...children.toArray());
}
export function p(children) {
  return create_h("p", null, ...children.toArray());
}
export function param(children) {
  return create_h("param", null, ...children.toArray());
}
export function picture(children) {
  return create_h("picture", null, ...children.toArray());
}
export function pre(children) {
  return create_h("pre", null, ...children.toArray());
}
export function progress(children) {
  return create_h("progress", null, ...children.toArray());
}
export function q(children) {
  return create_h("q", null, ...children.toArray());
}
export function rp(children) {
  return create_h("rp", null, ...children.toArray());
}
export function rt(children) {
  return create_h("rt", null, ...children.toArray());
}
export function ruby(children) {
  return create_h("ruby", null, ...children.toArray());
}
export function s(children) {
  return create_h("s", null, ...children.toArray());
}
export function samp(children) {
  return create_h("samp", null, ...children.toArray());
}
export function script(children) {
  return create_h("script", null, ...children.toArray());
}
export function section(children) {
  return create_h("section", null, ...children.toArray());
}
export function select(children) {
  return create_h("select", null, ...children.toArray());
}
export function slot(children) {
  return create_h("slot", null, ...children.toArray());
}
export function small(children) {
  return create_h("small", null, ...children.toArray());
}
export function source(children) {
  return create_h("source", null, ...children.toArray());
}
export function span(children) {
  return create_h("span", null, ...children.toArray());
}
export function strong(children) {
  return create_h("strong", null, ...children.toArray());
}
export function style(children) {
  return create_h("style", null, ...children.toArray());
}
export function sub(children) {
  return create_h("sub", null, ...children.toArray());
}
export function summary(children) {
  return create_h("summary", null, ...children.toArray());
}
export function sup(children) {
  return create_h("sup", null, ...children.toArray());
}
export function table(children) {
  return create_h("table", null, ...children.toArray());
}
export function tbody(children) {
  return create_h("tbody", null, ...children.toArray());
}
export function td(children) {
  return create_h("td", null, ...children.toArray());
}
export function template(children) {
  return create_h("template", null, ...children.toArray());
}
export function textarea(children) {
  return create_h("textarea", null, ...children.toArray());
}
export function tfoot(children) {
  return create_h("tfoot", null, ...children.toArray());
}
export function th(children) {
  return create_h("th", null, ...children.toArray());
}
export function thead(children) {
  return create_h("thead", null, ...children.toArray());
}
export function time(children) {
  return create_h("time", null, ...children.toArray());
}
export function title(children) {
  return create_h("title", null, ...children.toArray());
}
export function tr(children) {
  return create_h("tr", null, ...children.toArray());
}
export function track(children) {
  return create_h("track", null, ...children.toArray());
}
export function u(children) {
  return create_h("u", null, ...children.toArray());
}
export function ul(children) {
  return create_h("ul", null, ...children.toArray());
}
export function video(children) {
  return create_h("video", null, ...children.toArray());
}
export function wbr(children) {
  return create_h("wbr", null, ...children.toArray());
}
