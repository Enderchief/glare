import h from "https://cdn.skypack.dev/solid-js/h";

export const $ELEMENT = Object.getOwnPropertySymbols(h("p", null, []))[0];

export function $h(tag, props, children) {
  return h(tag, Object.fromEntries(props), ...children.toArray());
}

export function a(children) {
  return h("a", null, ...children.toArray());
}
export function abbr(children) {
  return h("abbr", null, ...children.toArray());
}
export function address(children) {
  return h("address", null, ...children.toArray());
}
export function area(children) {
  return h("area", null, ...children.toArray());
}
export function article(children) {
  return h("article", null, ...children.toArray());
}
export function aside(children) {
  return h("aside", null, ...children.toArray());
}
export function audio(children) {
  return h("audio", null, ...children.toArray());
}
export function b(children) {
  return h("b", null, ...children.toArray());
}
export function base(children) {
  return h("base", null, ...children.toArray());
}
export function bdi(children) {
  return h("bdi", null, ...children.toArray());
}
export function bdo(children) {
  return h("bdo", null, ...children.toArray());
}
export function blockquote(children) {
  return h("blockquote", null, ...children.toArray());
}
export function body(children) {
  return h("body", null, ...children.toArray());
}
export function br(children) {
  return h("br", null, ...children.toArray());
}
export function button(children) {
  return h("button", null, ...children.toArray());
}
export function canvas(children) {
  return h("canvas", null, ...children.toArray());
}
export function caption(children) {
  return h("caption", null, ...children.toArray());
}
export function cite(children) {
  return h("cite", null, ...children.toArray());
}
export function code(children) {
  return h("code", null, ...children.toArray());
}
export function col(children) {
  return h("col", null, ...children.toArray());
}
export function colgroup(children) {
  return h("colgroup", null, ...children.toArray());
}
export function data(children) {
  return h("data", null, ...children.toArray());
}
export function datalist(children) {
  return h("datalist", null, ...children.toArray());
}
export function dd(children) {
  return h("dd", null, ...children.toArray());
}
export function del(children) {
  return h("del", null, ...children.toArray());
}
export function details(children) {
  return h("details", null, ...children.toArray());
}
export function dfn(children) {
  return h("dfn", null, ...children.toArray());
}
export function dialog(children) {
  return h("dialog", null, ...children.toArray());
}
export function dir(children) {
  return h("dir", null, ...children.toArray());
}
export function div(children) {
  return h("div", null, ...children.toArray());
}
export function dl(children) {
  return h("dl", null, ...children.toArray());
}
export function dt(children) {
  return h("dt", null, ...children.toArray());
}
export function em(children) {
  return h("em", null, ...children.toArray());
}
export function embed(children) {
  return h("embed", null, ...children.toArray());
}
export function fieldset(children) {
  return h("fieldset", null, ...children.toArray());
}
export function figcaption(children) {
  return h("figcaption", null, ...children.toArray());
}
export function figure(children) {
  return h("figure", null, ...children.toArray());
}
export function font(children) {
  return h("font", null, ...children.toArray());
}
export function footer(children) {
  return h("footer", null, ...children.toArray());
}
export function form(children) {
  return h("form", null, ...children.toArray());
}
export function frame(children) {
  return h("frame", null, ...children.toArray());
}
export function frameset(children) {
  return h("frameset", null, ...children.toArray());
}
export function h1(children) {
  return h("h1", null, ...children.toArray());
}
export function h2(children) {
  return h("h2", null, ...children.toArray());
}
export function h3(children) {
  return h("h3", null, ...children.toArray());
}
export function h4(children) {
  return h("h4", null, ...children.toArray());
}
export function h5(children) {
  return h("h5", null, ...children.toArray());
}
export function h6(children) {
  return h("h6", null, ...children.toArray());
}
export function head(children) {
  return h("head", null, ...children.toArray());
}
export function header(children) {
  return h("header", null, ...children.toArray());
}
export function hgroup(children) {
  return h("hgroup", null, ...children.toArray());
}
export function hr(children) {
  return h("hr", null, ...children.toArray());
}
export function html(children) {
  return h("html", null, ...children.toArray());
}
export function i(children) {
  return h("i", null, ...children.toArray());
}
export function iframe(children) {
  return h("iframe", null, ...children.toArray());
}
export function img(children) {
  return h("img", null, ...children.toArray());
}
export function input(children) {
  return h("input", null, ...children.toArray());
}
export function ins(children) {
  return h("ins", null, ...children.toArray());
}
export function kbd(children) {
  return h("kbd", null, ...children.toArray());
}
export function label(children) {
  return h("label", null, ...children.toArray());
}
export function legend(children) {
  return h("legend", null, ...children.toArray());
}
export function li(children) {
  return h("li", null, ...children.toArray());
}
export function link(children) {
  return h("link", null, ...children.toArray());
}
export function main(children) {
  return h("main", null, ...children.toArray());
}
export function map(children) {
  return h("map", null, ...children.toArray());
}
export function mark(children) {
  return h("mark", null, ...children.toArray());
}
export function marquee(children) {
  return h("marquee", null, ...children.toArray());
}
export function menu(children) {
  return h("menu", null, ...children.toArray());
}
export function meta(children) {
  return h("meta", null, ...children.toArray());
}
export function meter(children) {
  return h("meter", null, ...children.toArray());
}
export function nav(children) {
  return h("nav", null, ...children.toArray());
}
export function noscript(children) {
  return h("noscript", null, ...children.toArray());
}
export function object(children) {
  return h("object", null, ...children.toArray());
}
export function ol(children) {
  return h("ol", null, ...children.toArray());
}
export function optgroup(children) {
  return h("optgroup", null, ...children.toArray());
}
export function option(children) {
  return h("option", null, ...children.toArray());
}
export function output(children) {
  return h("output", null, ...children.toArray());
}
export function p(children) {
  return h("p", null, ...children.toArray());
}
export function param(children) {
  return h("param", null, ...children.toArray());
}
export function picture(children) {
  return h("picture", null, ...children.toArray());
}
export function pre(children) {
  return h("pre", null, ...children.toArray());
}
export function progress(children) {
  return h("progress", null, ...children.toArray());
}
export function q(children) {
  return h("q", null, ...children.toArray());
}
export function rp(children) {
  return h("rp", null, ...children.toArray());
}
export function rt(children) {
  return h("rt", null, ...children.toArray());
}
export function ruby(children) {
  return h("ruby", null, ...children.toArray());
}
export function s(children) {
  return h("s", null, ...children.toArray());
}
export function samp(children) {
  return h("samp", null, ...children.toArray());
}
export function script(children) {
  return h("script", null, ...children.toArray());
}
export function section(children) {
  return h("section", null, ...children.toArray());
}
export function select(children) {
  return h("select", null, ...children.toArray());
}
export function slot(children) {
  return h("slot", null, ...children.toArray());
}
export function small(children) {
  return h("small", null, ...children.toArray());
}
export function source(children) {
  return h("source", null, ...children.toArray());
}
export function span(children) {
  return h("span", null, ...children.toArray());
}
export function strong(children) {
  return h("strong", null, ...children.toArray());
}
export function style(children) {
  return h("style", null, ...children.toArray());
}
export function sub(children) {
  return h("sub", null, ...children.toArray());
}
export function summary(children) {
  return h("summary", null, ...children.toArray());
}
export function sup(children) {
  return h("sup", null, ...children.toArray());
}
export function table(children) {
  return h("table", null, ...children.toArray());
}
export function tbody(children) {
  return h("tbody", null, ...children.toArray());
}
export function td(children) {
  return h("td", null, ...children.toArray());
}
export function template(children) {
  return h("template", null, ...children.toArray());
}
export function textarea(children) {
  return h("textarea", null, ...children.toArray());
}
export function tfoot(children) {
  return h("tfoot", null, ...children.toArray());
}
export function th(children) {
  return h("th", null, ...children.toArray());
}
export function thead(children) {
  return h("thead", null, ...children.toArray());
}
export function time(children) {
  return h("time", null, ...children.toArray());
}
export function title(children) {
  return h("title", null, ...children.toArray());
}
export function tr(children) {
  return h("tr", null, ...children.toArray());
}
export function track(children) {
  return h("track", null, ...children.toArray());
}
export function u(children) {
  return h("u", null, ...children.toArray());
}
export function ul(children) {
  return h("ul", null, ...children.toArray());
}
export function video(children) {
  return h("video", null, ...children.toArray());
}
export function wbr(children) {
  return h("wbr", null, ...children.toArray());
}
