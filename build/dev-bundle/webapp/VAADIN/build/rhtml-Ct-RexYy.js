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
var rhtml$2 = { exports: {} };
var hasRequiredRhtml;
function requireRhtml() {
  if (hasRequiredRhtml) return rhtml$2.exports;
  hasRequiredRhtml = 1;
  (function(module, exports) {
    (function() {
      ace.require(["ace/snippets/rhtml"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(rhtml$2);
  return rhtml$2.exports;
}
var rhtmlExports = requireRhtml();
const rhtml = /* @__PURE__ */ getDefaultExportFromCjs(rhtmlExports);
const rhtml$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: rhtml
}, [rhtmlExports]);
export {
  rhtml$1 as r
};
