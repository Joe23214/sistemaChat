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
var elixir$2 = { exports: {} };
var hasRequiredElixir;
function requireElixir() {
  if (hasRequiredElixir) return elixir$2.exports;
  hasRequiredElixir = 1;
  (function(module, exports) {
    (function() {
      ace.require(["ace/snippets/elixir"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(elixir$2);
  return elixir$2.exports;
}
var elixirExports = requireElixir();
const elixir = /* @__PURE__ */ getDefaultExportFromCjs(elixirExports);
const elixir$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: elixir
}, [elixirExports]);
export {
  elixir$1 as e
};
