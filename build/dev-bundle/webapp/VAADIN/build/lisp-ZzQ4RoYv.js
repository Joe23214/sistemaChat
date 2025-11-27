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
var lisp$2 = { exports: {} };
var hasRequiredLisp;
function requireLisp() {
  if (hasRequiredLisp) return lisp$2.exports;
  hasRequiredLisp = 1;
  (function(module, exports) {
    (function() {
      ace.require(["ace/snippets/lisp"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(lisp$2);
  return lisp$2.exports;
}
var lispExports = requireLisp();
const lisp = /* @__PURE__ */ getDefaultExportFromCjs(lispExports);
const lisp$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: lisp
}, [lispExports]);
export {
  lisp$1 as l
};
