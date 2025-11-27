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
var matlab$2 = { exports: {} };
var hasRequiredMatlab;
function requireMatlab() {
  if (hasRequiredMatlab) return matlab$2.exports;
  hasRequiredMatlab = 1;
  (function(module, exports) {
    (function() {
      ace.require(["ace/snippets/matlab"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(matlab$2);
  return matlab$2.exports;
}
var matlabExports = requireMatlab();
const matlab = /* @__PURE__ */ getDefaultExportFromCjs(matlabExports);
const matlab$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: matlab
}, [matlabExports]);
export {
  matlab$1 as m
};
