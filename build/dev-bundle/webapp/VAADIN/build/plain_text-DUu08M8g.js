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
var plain_text$2 = { exports: {} };
var hasRequiredPlain_text;
function requirePlain_text() {
  if (hasRequiredPlain_text) return plain_text$2.exports;
  hasRequiredPlain_text = 1;
  (function(module, exports) {
    (function() {
      ace.require(["ace/snippets/plain_text"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(plain_text$2);
  return plain_text$2.exports;
}
var plain_textExports = requirePlain_text();
const plain_text = /* @__PURE__ */ getDefaultExportFromCjs(plain_textExports);
const plain_text$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: plain_text
}, [plain_textExports]);
export {
  plain_text$1 as p
};
