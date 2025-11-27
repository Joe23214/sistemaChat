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
var pig$2 = { exports: {} };
var hasRequiredPig;
function requirePig() {
  if (hasRequiredPig) return pig$2.exports;
  hasRequiredPig = 1;
  (function(module, exports) {
    (function() {
      ace.require(["ace/snippets/pig"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(pig$2);
  return pig$2.exports;
}
var pigExports = requirePig();
const pig = /* @__PURE__ */ getDefaultExportFromCjs(pigExports);
const pig$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: pig
}, [pigExports]);
export {
  pig$1 as p
};
