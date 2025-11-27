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
var coldfusion$2 = { exports: {} };
var hasRequiredColdfusion;
function requireColdfusion() {
  if (hasRequiredColdfusion) return coldfusion$2.exports;
  hasRequiredColdfusion = 1;
  (function(module, exports) {
    (function() {
      ace.require(["ace/snippets/coldfusion"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(coldfusion$2);
  return coldfusion$2.exports;
}
var coldfusionExports = requireColdfusion();
const coldfusion = /* @__PURE__ */ getDefaultExportFromCjs(coldfusionExports);
const coldfusion$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: coldfusion
}, [coldfusionExports]);
export {
  coldfusion$1 as c
};
