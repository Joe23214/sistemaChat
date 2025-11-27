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
var xml$2 = { exports: {} };
var hasRequiredXml;
function requireXml() {
  if (hasRequiredXml) return xml$2.exports;
  hasRequiredXml = 1;
  (function(module, exports) {
    (function() {
      ace.require(["ace/snippets/xml"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(xml$2);
  return xml$2.exports;
}
var xmlExports = requireXml();
const xml = /* @__PURE__ */ getDefaultExportFromCjs(xmlExports);
const xml$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: xml
}, [xmlExports]);
export {
  xml$1 as x
};
