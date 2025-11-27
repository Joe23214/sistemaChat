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
var json5$2 = { exports: {} };
var hasRequiredJson5;
function requireJson5() {
  if (hasRequiredJson5) return json5$2.exports;
  hasRequiredJson5 = 1;
  (function(module, exports) {
    (function() {
      ace.require(["ace/snippets/json5"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(json5$2);
  return json5$2.exports;
}
var json5Exports = requireJson5();
const json5 = /* @__PURE__ */ getDefaultExportFromCjs(json5Exports);
const json5$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: json5
}, [json5Exports]);
export {
  json5$1 as j
};
