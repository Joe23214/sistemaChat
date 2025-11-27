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
var scheme$2 = { exports: {} };
var hasRequiredScheme;
function requireScheme() {
  if (hasRequiredScheme) return scheme$2.exports;
  hasRequiredScheme = 1;
  (function(module, exports) {
    (function() {
      ace.require(["ace/snippets/scheme"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(scheme$2);
  return scheme$2.exports;
}
var schemeExports = requireScheme();
const scheme = /* @__PURE__ */ getDefaultExportFromCjs(schemeExports);
const scheme$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: scheme
}, [schemeExports]);
export {
  scheme$1 as s
};
