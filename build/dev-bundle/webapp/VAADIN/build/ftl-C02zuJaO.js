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
var ftl$2 = { exports: {} };
var hasRequiredFtl;
function requireFtl() {
  if (hasRequiredFtl) return ftl$2.exports;
  hasRequiredFtl = 1;
  (function(module, exports) {
    (function() {
      ace.require(["ace/snippets/ftl"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(ftl$2);
  return ftl$2.exports;
}
var ftlExports = requireFtl();
const ftl = /* @__PURE__ */ getDefaultExportFromCjs(ftlExports);
const ftl$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: ftl
}, [ftlExports]);
export {
  ftl$1 as f
};
