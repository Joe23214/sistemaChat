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
var rust$2 = { exports: {} };
var hasRequiredRust;
function requireRust() {
  if (hasRequiredRust) return rust$2.exports;
  hasRequiredRust = 1;
  (function(module, exports) {
    (function() {
      ace.require(["ace/snippets/rust"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(rust$2);
  return rust$2.exports;
}
var rustExports = requireRust();
const rust = /* @__PURE__ */ getDefaultExportFromCjs(rustExports);
const rust$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: rust
}, [rustExports]);
export {
  rust$1 as r
};
