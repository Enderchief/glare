import { attr } from "./ffi_property.mjs";

/**
 * @param {() => HTMLElement} node
 * @param {((...arg0: any[]) => any)} handler
 */
export function onclick(node, handler) {
  return event(node, "click", handler);
}

/**
 * @param {() => HTMLElement} node
 * @param {keyof HTMLElementEventMap} event
 * @param {(...arg0: any[]) => any} handler
 */
export function event(node, event, handler) {
  return attr(node, `on${event}`, handler);
}
