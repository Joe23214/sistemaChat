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
var smithy$2 = { exports: {} };
var hasRequiredSmithy;
function requireSmithy() {
  if (hasRequiredSmithy) return smithy$2.exports;
  hasRequiredSmithy = 1;
  (function(module, exports) {
    (function() {
      ace.require(["ace/snippets/smithy"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(smithy$2);
  return smithy$2.exports;
}
var smithyExports = requireSmithy();
const smithy = /* @__PURE__ */ getDefaultExportFromCjs(smithyExports);
const smithy$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: smithy
}, [smithyExports]);
export {
  smithy$1 as s
};
