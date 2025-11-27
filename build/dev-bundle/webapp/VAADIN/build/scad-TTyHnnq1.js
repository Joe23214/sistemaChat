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
var scad$2 = { exports: {} };
var hasRequiredScad;
function requireScad() {
  if (hasRequiredScad) return scad$2.exports;
  hasRequiredScad = 1;
  (function(module, exports) {
    (function() {
      ace.require(["ace/snippets/scad"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(scad$2);
  return scad$2.exports;
}
var scadExports = requireScad();
const scad = /* @__PURE__ */ getDefaultExportFromCjs(scadExports);
const scad$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: scad
}, [scadExports]);
export {
  scad$1 as s
};
