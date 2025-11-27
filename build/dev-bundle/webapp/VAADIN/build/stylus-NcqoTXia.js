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
var stylus$2 = { exports: {} };
var hasRequiredStylus;
function requireStylus() {
  if (hasRequiredStylus) return stylus$2.exports;
  hasRequiredStylus = 1;
  (function(module, exports) {
    (function() {
      ace.require(["ace/snippets/stylus"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(stylus$2);
  return stylus$2.exports;
}
var stylusExports = requireStylus();
const stylus = /* @__PURE__ */ getDefaultExportFromCjs(stylusExports);
const stylus$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: stylus
}, [stylusExports]);
export {
  stylus$1 as s
};
