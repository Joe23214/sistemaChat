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
var scss$2 = { exports: {} };
var hasRequiredScss;
function requireScss() {
  if (hasRequiredScss) return scss$2.exports;
  hasRequiredScss = 1;
  (function(module, exports) {
    (function() {
      ace.require(["ace/snippets/scss"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(scss$2);
  return scss$2.exports;
}
var scssExports = requireScss();
const scss = /* @__PURE__ */ getDefaultExportFromCjs(scssExports);
const scss$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: scss
}, [scssExports]);
export {
  scss$1 as s
};
