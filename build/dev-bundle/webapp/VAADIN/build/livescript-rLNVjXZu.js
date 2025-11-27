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
var livescript$2 = { exports: {} };
var hasRequiredLivescript;
function requireLivescript() {
  if (hasRequiredLivescript) return livescript$2.exports;
  hasRequiredLivescript = 1;
  (function(module, exports) {
    (function() {
      ace.require(["ace/snippets/livescript"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(livescript$2);
  return livescript$2.exports;
}
var livescriptExports = requireLivescript();
const livescript = /* @__PURE__ */ getDefaultExportFromCjs(livescriptExports);
const livescript$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: livescript
}, [livescriptExports]);
export {
  livescript$1 as l
};
