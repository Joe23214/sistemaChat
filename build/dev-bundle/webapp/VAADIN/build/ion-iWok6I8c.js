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
var ion$2 = { exports: {} };
var hasRequiredIon;
function requireIon() {
  if (hasRequiredIon) return ion$2.exports;
  hasRequiredIon = 1;
  (function(module, exports) {
    (function() {
      ace.require(["ace/snippets/ion"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(ion$2);
  return ion$2.exports;
}
var ionExports = requireIon();
const ion = /* @__PURE__ */ getDefaultExportFromCjs(ionExports);
const ion$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: ion
}, [ionExports]);
export {
  ion$1 as i
};
