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
var elm$2 = { exports: {} };
var hasRequiredElm;
function requireElm() {
  if (hasRequiredElm) return elm$2.exports;
  hasRequiredElm = 1;
  (function(module, exports) {
    (function() {
      ace.require(["ace/snippets/elm"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(elm$2);
  return elm$2.exports;
}
var elmExports = requireElm();
const elm = /* @__PURE__ */ getDefaultExportFromCjs(elmExports);
const elm$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: elm
}, [elmExports]);
export {
  elm$1 as e
};
