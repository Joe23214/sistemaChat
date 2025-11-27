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
var soy_template$2 = { exports: {} };
var hasRequiredSoy_template;
function requireSoy_template() {
  if (hasRequiredSoy_template) return soy_template$2.exports;
  hasRequiredSoy_template = 1;
  (function(module, exports) {
    (function() {
      ace.require(["ace/snippets/soy_template"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(soy_template$2);
  return soy_template$2.exports;
}
var soy_templateExports = requireSoy_template();
const soy_template = /* @__PURE__ */ getDefaultExportFromCjs(soy_templateExports);
const soy_template$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: soy_template
}, [soy_templateExports]);
export {
  soy_template$1 as s
};
