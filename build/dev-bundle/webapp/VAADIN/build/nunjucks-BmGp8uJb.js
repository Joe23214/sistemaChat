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
var nunjucks$2 = { exports: {} };
var hasRequiredNunjucks;
function requireNunjucks() {
  if (hasRequiredNunjucks) return nunjucks$2.exports;
  hasRequiredNunjucks = 1;
  (function(module, exports) {
    (function() {
      ace.require(["ace/snippets/nunjucks"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(nunjucks$2);
  return nunjucks$2.exports;
}
var nunjucksExports = requireNunjucks();
const nunjucks = /* @__PURE__ */ getDefaultExportFromCjs(nunjucksExports);
const nunjucks$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: nunjucks
}, [nunjucksExports]);
export {
  nunjucks$1 as n
};
