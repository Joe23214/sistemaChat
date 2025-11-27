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
var mediawiki$2 = { exports: {} };
var hasRequiredMediawiki;
function requireMediawiki() {
  if (hasRequiredMediawiki) return mediawiki$2.exports;
  hasRequiredMediawiki = 1;
  (function(module, exports) {
    (function() {
      ace.require(["ace/snippets/mediawiki"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(mediawiki$2);
  return mediawiki$2.exports;
}
var mediawikiExports = requireMediawiki();
const mediawiki = /* @__PURE__ */ getDefaultExportFromCjs(mediawikiExports);
const mediawiki$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: mediawiki
}, [mediawikiExports]);
export {
  mediawiki$1 as m
};
