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
var properties$2 = { exports: {} };
var hasRequiredProperties;
function requireProperties() {
  if (hasRequiredProperties) return properties$2.exports;
  hasRequiredProperties = 1;
  (function(module, exports) {
    (function() {
      ace.require(["ace/snippets/properties"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(properties$2);
  return properties$2.exports;
}
var propertiesExports = requireProperties();
const properties = /* @__PURE__ */ getDefaultExportFromCjs(propertiesExports);
const properties$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: properties
}, [propertiesExports]);
export {
  properties$1 as p
};
