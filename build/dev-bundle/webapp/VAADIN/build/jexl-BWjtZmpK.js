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
var jexl$2 = { exports: {} };
var hasRequiredJexl;
function requireJexl() {
  if (hasRequiredJexl) return jexl$2.exports;
  hasRequiredJexl = 1;
  (function(module, exports) {
    (function() {
      ace.require(["ace/snippets/jexl"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(jexl$2);
  return jexl$2.exports;
}
var jexlExports = requireJexl();
const jexl = /* @__PURE__ */ getDefaultExportFromCjs(jexlExports);
const jexl$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: jexl
}, [jexlExports]);
export {
  jexl$1 as j
};
