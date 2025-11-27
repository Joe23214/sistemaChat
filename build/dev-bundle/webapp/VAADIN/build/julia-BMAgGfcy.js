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
var julia$2 = { exports: {} };
var hasRequiredJulia;
function requireJulia() {
  if (hasRequiredJulia) return julia$2.exports;
  hasRequiredJulia = 1;
  (function(module, exports) {
    (function() {
      ace.require(["ace/snippets/julia"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(julia$2);
  return julia$2.exports;
}
var juliaExports = requireJulia();
const julia = /* @__PURE__ */ getDefaultExportFromCjs(juliaExports);
const julia$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: julia
}, [juliaExports]);
export {
  julia$1 as j
};
