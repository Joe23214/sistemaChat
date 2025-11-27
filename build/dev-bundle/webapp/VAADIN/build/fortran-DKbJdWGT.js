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
var fortran$2 = { exports: {} };
var hasRequiredFortran;
function requireFortran() {
  if (hasRequiredFortran) return fortran$2.exports;
  hasRequiredFortran = 1;
  (function(module, exports) {
    (function() {
      ace.require(["ace/snippets/fortran"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(fortran$2);
  return fortran$2.exports;
}
var fortranExports = requireFortran();
const fortran = /* @__PURE__ */ getDefaultExportFromCjs(fortranExports);
const fortran$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: fortran
}, [fortranExports]);
export {
  fortran$1 as f
};
