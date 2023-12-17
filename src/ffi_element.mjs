import h from "https://cdn.skypack.dev/solid-js/h";

export const $ELEMENT = Object.getOwnPropertySymbols(h("p", null, []))[0];

export function create_h(tag, props, children) {
  let foo;
  if(!props){
    foo = {}
  }
  else {
    foo = Object.fromEntries(props)
  }
  return h(tag, foo, Array.from(children));
}

export function a(children) {
  return create_h("a", null, Array.from(children));
}
export function abbr(children) {
  return create_h("abbr", null, Array.from(children));
}
export function address(children) {
  return create_h("address", null, Array.from(children));
}
export function area(children) {
  return create_h("area", null, Array.from(children));
}
export function article(children) {
  return create_h("article", null, Array.from(children));
}
export function aside(children) {
  return create_h("aside", null, Array.from(children));
}
export function audio(children) {
  return create_h("audio", null, Array.from(children));
}
export function b(children) {
  return create_h("b", null, Array.from(children));
}
export function base(children) {
  return create_h("base", null, Array.from(children));
}
export function bdi(children) {
  return create_h("bdi", null, Array.from(children));
}
export function bdo(children) {
  return create_h("bdo", null, Array.from(children));
}
export function blockquote(children) {
  return create_h("blockquote", null, Array.from(children));
}
export function body(children) {
  return create_h("body", null, Array.from(children));
}
export function br(children) {
  return create_h("br", null, Array.from(children));
}
export function button(children) {
  return create_h("button", null, Array.from(children));
}
export function canvas(children) {
  return create_h("canvas", null, Array.from(children));
}
export function caption(children) {
  return create_h("caption", null, Array.from(children));
}
export function cite(children) {
  return create_h("cite", null, Array.from(children));
}
export function code(children) {
  return create_h("code", null, Array.from(children));
}
export function col(children) {
  return create_h("col", null, Array.from(children));
}
export function colgroup(children) {
  return create_h("colgroup", null, Array.from(children));
}
export function data(children) {
  return create_h("data", null, Array.from(children));
}
export function datalist(children) {
  return create_h("datalist", null, Array.from(children));
}
export function dd(children) {
  return create_h("dd", null, Array.from(children));
}
export function del(children) {
  return create_h("del", null, Array.from(children));
}
export function details(children) {
  return create_h("details", null, Array.from(children));
}
export function dfn(children) {
  return create_h("dfn", null, Array.from(children));
}
export function dialog(children) {
  return create_h("dialog", null, Array.from(children));
}
export function dir(children) {
  return create_h("dir", null, Array.from(children));
}
export function div(children) {
  return create_h("div", null, Array.from(children));
}
export function dl(children) {
  return create_h("dl", null, Array.from(children));
}
export function dt(children) {
  return create_h("dt", null, Array.from(children));
}
export function em(children) {
  return create_h("em", null, Array.from(children));
}
export function embed(children) {
  return create_h("embed", null, Array.from(children));
}
export function fieldset(children) {
  return create_h("fieldset", null, Array.from(children));
}
export function figcaption(children) {
  return create_h("figcaption", null, Array.from(children));
}
export function figure(children) {
  return create_h("figure", null, Array.from(children));
}
export function font(children) {
  return create_h("font", null, Array.from(children));
}
export function footer(children) {
  return create_h("footer", null, Array.from(children));
}
export function form(children) {
  return create_h("form", null, Array.from(children));
}
export function frame(children) {
  return create_h("frame", null, Array.from(children));
}
export function frameset(children) {
  return create_h("frameset", null, Array.from(children));
}
export function h1(children) {
  return create_h("h1", null, Array.from(children));
}
export function h2(children) {
  return create_h("h2", null, Array.from(children));
}
export function h3(children) {
  return create_h("h3", null, Array.from(children));
}
export function h4(children) {
  return create_h("h4", null, Array.from(children));
}
export function h5(children) {
  return create_h("h5", null, Array.from(children));
}
export function h6(children) {
  return create_h("h6", null, Array.from(children));
}
export function head(children) {
  return create_h("head", null, Array.from(children));
}
export function header(children) {
  return create_h("header", null, Array.from(children));
}
export function hgroup(children) {
  return create_h("hgroup", null, Array.from(children));
}
export function hr(children) {
  return create_h("hr", null, Array.from(children));
}
export function html(children) {
  return create_h("html", null, Array.from(children));
}
export function i(children) {
  return create_h("i", null, Array.from(children));
}
export function iframe(children) {
  return create_h("iframe", null, Array.from(children));
}
export function img(children) {
  return create_h("img", null, Array.from(children));
}
export function input(children) {
  return create_h("input", null, Array.from(children));
}
export function ins(children) {
  return create_h("ins", null, Array.from(children));
}
export function kbd(children) {
  return create_h("kbd", null, Array.from(children));
}
export function label(children) {
  return create_h("label", null, Array.from(children));
}
export function legend(children) {
  return create_h("legend", null, Array.from(children));
}
export function li(children) {
  return create_h("li", null, Array.from(children));
}
export function link(children) {
  return create_h("link", null, Array.from(children));
}
export function main(children) {
  return create_h("main", null, Array.from(children));
}
export function map(children) {
  return create_h("map", null, Array.from(children));
}
export function mark(children) {
  return create_h("mark", null, Array.from(children));
}
export function marquee(children) {
  return create_h("marquee", null, Array.from(children));
}
export function menu(children) {
  return create_h("menu", null, Array.from(children));
}
export function meta(children) {
  return create_h("meta", null, Array.from(children));
}
export function meter(children) {
  return create_h("meter", null, Array.from(children));
}
export function nav(children) {
  return create_h("nav", null, Array.from(children));
}
export function noscript(children) {
  return create_h("noscript", null, Array.from(children));
}
export function object(children) {
  return create_h("object", null, Array.from(children));
}
export function ol(children) {
  return create_h("ol", null, Array.from(children));
}
export function optgroup(children) {
  return create_h("optgroup", null, Array.from(children));
}
export function option(children) {
  return create_h("option", null, Array.from(children));
}
export function output(children) {
  return create_h("output", null, Array.from(children));
}
export function p(children) {
  return create_h("p", null, Array.from(children));
}
export function param(children) {
  return create_h("param", null, Array.from(children));
}
export function picture(children) {
  return create_h("picture", null, Array.from(children));
}
export function pre(children) {
  return create_h("pre", null, Array.from(children));
}
export function progress(children) {
  return create_h("progress", null, Array.from(children));
}
export function q(children) {
  return create_h("q", null, Array.from(children));
}
export function rp(children) {
  return create_h("rp", null, Array.from(children));
}
export function rt(children) {
  return create_h("rt", null, Array.from(children));
}
export function ruby(children) {
  return create_h("ruby", null, Array.from(children));
}
export function s(children) {
  return create_h("s", null, Array.from(children));
}
export function samp(children) {
  return create_h("samp", null, Array.from(children));
}
export function script(children) {
  return create_h("script", null, Array.from(children));
}
export function section(children) {
  return create_h("section", null, Array.from(children));
}
export function select(children) {
  return create_h("select", null, Array.from(children));
}
export function slot(children) {
  return create_h("slot", null, Array.from(children));
}
export function small(children) {
  return create_h("small", null, Array.from(children));
}
export function source(children) {
  return create_h("source", null, Array.from(children));
}
export function span(children) {
  return create_h("span", null, Array.from(children));
}
export function strong(children) {
  return create_h("strong", null, Array.from(children));
}
export function style(children) {
  return create_h("style", null, Array.from(children));
}
export function sub(children) {
  return create_h("sub", null, Array.from(children));
}
export function summary(children) {
  return create_h("summary", null, Array.from(children));
}
export function sup(children) {
  return create_h("sup", null, Array.from(children));
}
export function table(children) {
  return create_h("table", null, Array.from(children));
}
export function tbody(children) {
  return create_h("tbody", null, Array.from(children));
}
export function td(children) {
  return create_h("td", null, Array.from(children));
}
export function template(children) {
  return create_h("template", null, Array.from(children));
}
export function textarea(children) {
  return create_h("textarea", null, Array.from(children));
}
export function tfoot(children) {
  return create_h("tfoot", null, Array.from(children));
}
export function th(children) {
  return create_h("th", null, Array.from(children));
}
export function thead(children) {
  return create_h("thead", null, Array.from(children));
}
export function time(children) {
  return create_h("time", null, Array.from(children));
}
export function title(children) {
  return create_h("title", null, Array.from(children));
}
export function tr(children) {
  return create_h("tr", null, Array.from(children));
}
export function track(children) {
  return create_h("track", null, Array.from(children));
}
export function u(children) {
  return create_h("u", null, Array.from(children));
}
export function ul(children) {
  return create_h("ul", null, Array.from(children));
}
export function video(children) {
  return create_h("video", null, Array.from(children));
}
export function wbr(children) {
  return create_h("wbr", null, Array.from(children));
}
