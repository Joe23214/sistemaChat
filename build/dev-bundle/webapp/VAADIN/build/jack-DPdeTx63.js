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
var jack$2 = { exports: {} };
var hasRequiredJack;
function requireJack() {
  if (hasRequiredJack) return jack$2.exports;
  hasRequiredJack = 1;
  (function(module, exports) {
    (function() {
      ace.require(["ace/snippets/jack"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(jack$2);
  return jack$2.exports;
}
var jackExports = requireJack();
const jack = /* @__PURE__ */ getDefaultExportFromCjs(jackExports);
const jack$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: jack
}, [jackExports]);
export {
  jack$1 as j
};
