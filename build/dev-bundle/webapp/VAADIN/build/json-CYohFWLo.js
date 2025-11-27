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
var json$2 = { exports: {} };
var hasRequiredJson;
function requireJson() {
  if (hasRequiredJson) return json$2.exports;
  hasRequiredJson = 1;
  (function(module, exports) {
    (function() {
      ace.require(["ace/snippets/json"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(json$2);
  return json$2.exports;
}
var jsonExports = requireJson();
const json = /* @__PURE__ */ getDefaultExportFromCjs(jsonExports);
const json$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: json
}, [jsonExports]);
export {
  json$1 as j
};
