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
var abap$2 = { exports: {} };
var hasRequiredAbap;
function requireAbap() {
  if (hasRequiredAbap) return abap$2.exports;
  hasRequiredAbap = 1;
  (function(module, exports) {
    (function() {
      ace.require(["ace/snippets/abap"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(abap$2);
  return abap$2.exports;
}
var abapExports = requireAbap();
const abap = /* @__PURE__ */ getDefaultExportFromCjs(abapExports);
const abap$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: abap
}, [abapExports]);
export {
  abap$1 as a
};
