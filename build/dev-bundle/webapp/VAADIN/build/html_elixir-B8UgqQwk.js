import { o as getDefaultExportFromCjs } from "./indexhtml-CZN4FFew.js";
function _mergeNamespaces(n, m) {
  for (var i = 0; i < m.length; i++) {
    const e = m[i];
    if (typeof e !== "string" && !Array.isArray(e)) {
      for (const k in e) {
        if (k !== "default" && !(k in n)) {
          const d = Object.getOwnPropertyDescriptor(e, k);
          if (d) {
            Object.defineProperty(n, k, d.get ? d : {
              enumerable: true,
              get: () => e[k]
            });
          }
        }
      }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var html_elixir$2 = { exports: {} };
var hasRequiredHtml_elixir;
function requireHtml_elixir() {
  if (hasRequiredHtml_elixir) return html_elixir$2.exports;
  hasRequiredHtml_elixir = 1;
  (function(module, exports) {
    (function() {
      ace.require(["ace/snippets/html_elixir"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(html_elixir$2);
  return html_elixir$2.exports;
}
var html_elixirExports = requireHtml_elixir();
const html_elixir = /* @__PURE__ */ getDefaultExportFromCjs(html_elixirExports);
const html_elixir$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: html_elixir
}, [html_elixirExports]);
export {
  html_elixir$1 as h
};
