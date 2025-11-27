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
var text$2 = { exports: {} };
var hasRequiredText;
function requireText() {
  if (hasRequiredText) return text$2.exports;
  hasRequiredText = 1;
  (function(module, exports) {
    (function() {
      ace.require(["ace/snippets/text"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(text$2);
  return text$2.exports;
}
var textExports = requireText();
const text = /* @__PURE__ */ getDefaultExportFromCjs(textExports);
const text$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: text
}, [textExports]);
export {
  text$1 as t
};
