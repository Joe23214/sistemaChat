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
var less$2 = { exports: {} };
var hasRequiredLess;
function requireLess() {
  if (hasRequiredLess) return less$2.exports;
  hasRequiredLess = 1;
  (function(module, exports) {
    (function() {
      ace.require(["ace/snippets/less"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(less$2);
  return less$2.exports;
}
var lessExports = requireLess();
const less = /* @__PURE__ */ getDefaultExportFromCjs(lessExports);
const less$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: less
}, [lessExports]);
export {
  less$1 as l
};
