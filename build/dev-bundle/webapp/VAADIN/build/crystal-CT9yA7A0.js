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
var crystal$2 = { exports: {} };
var hasRequiredCrystal;
function requireCrystal() {
  if (hasRequiredCrystal) return crystal$2.exports;
  hasRequiredCrystal = 1;
  (function(module, exports) {
    (function() {
      ace.require(["ace/snippets/crystal"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(crystal$2);
  return crystal$2.exports;
}
var crystalExports = requireCrystal();
const crystal = /* @__PURE__ */ getDefaultExportFromCjs(crystalExports);
const crystal$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: crystal
}, [crystalExports]);
export {
  crystal$1 as c
};
