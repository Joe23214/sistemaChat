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
var tsx$2 = { exports: {} };
var hasRequiredTsx;
function requireTsx() {
  if (hasRequiredTsx) return tsx$2.exports;
  hasRequiredTsx = 1;
  (function(module, exports) {
    (function() {
      ace.require(["ace/snippets/tsx"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(tsx$2);
  return tsx$2.exports;
}
var tsxExports = requireTsx();
const tsx = /* @__PURE__ */ getDefaultExportFromCjs(tsxExports);
const tsx$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: tsx
}, [tsxExports]);
export {
  tsx$1 as t
};
