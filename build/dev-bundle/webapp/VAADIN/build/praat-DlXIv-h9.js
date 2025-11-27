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
var praat$2 = { exports: {} };
var hasRequiredPraat;
function requirePraat() {
  if (hasRequiredPraat) return praat$2.exports;
  hasRequiredPraat = 1;
  (function(module, exports) {
    (function() {
      ace.require(["ace/snippets/praat"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(praat$2);
  return praat$2.exports;
}
var praatExports = requirePraat();
const praat = /* @__PURE__ */ getDefaultExportFromCjs(praatExports);
const praat$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: praat
}, [praatExports]);
export {
  praat$1 as p
};
