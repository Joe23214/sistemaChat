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
var alda$2 = { exports: {} };
var hasRequiredAlda;
function requireAlda() {
  if (hasRequiredAlda) return alda$2.exports;
  hasRequiredAlda = 1;
  (function(module, exports) {
    (function() {
      ace.require(["ace/snippets/alda"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(alda$2);
  return alda$2.exports;
}
var aldaExports = requireAlda();
const alda = /* @__PURE__ */ getDefaultExportFromCjs(aldaExports);
const alda$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: alda
}, [aldaExports]);
export {
  alda$1 as a
};
