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
var toml$2 = { exports: {} };
var hasRequiredToml;
function requireToml() {
  if (hasRequiredToml) return toml$2.exports;
  hasRequiredToml = 1;
  (function(module, exports) {
    (function() {
      ace.require(["ace/snippets/toml"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(toml$2);
  return toml$2.exports;
}
var tomlExports = requireToml();
const toml = /* @__PURE__ */ getDefaultExportFromCjs(tomlExports);
const toml$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: toml
}, [tomlExports]);
export {
  toml$1 as t
};
