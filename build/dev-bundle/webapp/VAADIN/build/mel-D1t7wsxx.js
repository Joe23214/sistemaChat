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
var mel$2 = { exports: {} };
var hasRequiredMel;
function requireMel() {
  if (hasRequiredMel) return mel$2.exports;
  hasRequiredMel = 1;
  (function(module, exports) {
    (function() {
      ace.require(["ace/snippets/mel"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(mel$2);
  return mel$2.exports;
}
var melExports = requireMel();
const mel = /* @__PURE__ */ getDefaultExportFromCjs(melExports);
const mel$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: mel
}, [melExports]);
export {
  mel$1 as m
};
