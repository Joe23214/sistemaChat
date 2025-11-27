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
var csp$2 = { exports: {} };
var hasRequiredCsp;
function requireCsp() {
  if (hasRequiredCsp) return csp$2.exports;
  hasRequiredCsp = 1;
  (function(module, exports) {
    (function() {
      ace.require(["ace/snippets/csp"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(csp$2);
  return csp$2.exports;
}
var cspExports = requireCsp();
const csp = /* @__PURE__ */ getDefaultExportFromCjs(cspExports);
const csp$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: csp
}, [cspExports]);
export {
  csp$1 as c
};
