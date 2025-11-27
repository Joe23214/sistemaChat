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
var cobol$2 = { exports: {} };
var hasRequiredCobol;
function requireCobol() {
  if (hasRequiredCobol) return cobol$2.exports;
  hasRequiredCobol = 1;
  (function(module, exports) {
    (function() {
      ace.require(["ace/snippets/cobol"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(cobol$2);
  return cobol$2.exports;
}
var cobolExports = requireCobol();
const cobol = /* @__PURE__ */ getDefaultExportFromCjs(cobolExports);
const cobol$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: cobol
}, [cobolExports]);
export {
  cobol$1 as c
};
