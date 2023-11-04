// @ts-check
import { render } from "https://cdn.skypack.dev/solid-js/web";
import h from "https://cdn.skypack.dev/solid-js/h";
import { createSignal } from "https://cdn.skypack.dev/solid-js";

export const create_render = (
  /** @type {() => HTMLElement} */ node,
  /** @type {HTMLElement} */ element,
) => {
  render(node, element);
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
