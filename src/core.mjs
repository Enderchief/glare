// @ts-check
// @ts-ignore
import { render, renderToString } from "https://cdn.skypack.dev/solid-js/web";
// @ts-ignore
import h from "https://cdn.skypack.dev/solid-js/h";
// @ts-ignore
import { createSignal } from "https://cdn.skypack.dev/solid-js";

export const create_render = (
  /** @type {() => HTMLElement} */ node,
  /** @type {HTMLElement} */ element,
) => {
  render(node, element);
};
export const create_render_to_string = (
  /** @type {() => HTMLElement} */ node,
) => {
  renderToString(() => node);
};
export const $h = h.bind(h);
export const create_signal = createSignal;
export const doc_selector = document.querySelector.bind(document);

/**
 * @param {any} v
 */
export function wrap(v) {
  return v;
}
