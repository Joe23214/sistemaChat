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
var yaml$2 = { exports: {} };
var hasRequiredYaml;
function requireYaml() {
  if (hasRequiredYaml) return yaml$2.exports;
  hasRequiredYaml = 1;
  (function(module, exports) {
    (function() {
      ace.require(["ace/snippets/yaml"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(yaml$2);
  return yaml$2.exports;
}
var yamlExports = requireYaml();
const yaml = /* @__PURE__ */ getDefaultExportFromCjs(yamlExports);
const yaml$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: yaml
}, [yamlExports]);
export {
  yaml$1 as y
};
