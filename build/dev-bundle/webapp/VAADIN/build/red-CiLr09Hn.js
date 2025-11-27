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
var red$2 = { exports: {} };
var hasRequiredRed;
function requireRed() {
  if (hasRequiredRed) return red$2.exports;
  hasRequiredRed = 1;
  (function(module, exports) {
    (function() {
      ace.require(["ace/snippets/red"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(red$2);
  return red$2.exports;
}
var redExports = requireRed();
const red = /* @__PURE__ */ getDefaultExportFromCjs(redExports);
const red$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: red
}, [redExports]);
export {
  red$1 as r
};
