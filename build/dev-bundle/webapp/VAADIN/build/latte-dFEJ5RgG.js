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
var latte$2 = { exports: {} };
var hasRequiredLatte;
function requireLatte() {
  if (hasRequiredLatte) return latte$2.exports;
  hasRequiredLatte = 1;
  (function(module, exports) {
    (function() {
      ace.require(["ace/snippets/latte"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(latte$2);
  return latte$2.exports;
}
var latteExports = requireLatte();
const latte = /* @__PURE__ */ getDefaultExportFromCjs(latteExports);
const latte$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: latte
}, [latteExports]);
export {
  latte$1 as l
};
