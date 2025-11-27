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
var hjson$2 = { exports: {} };
var hasRequiredHjson;
function requireHjson() {
  if (hasRequiredHjson) return hjson$2.exports;
  hasRequiredHjson = 1;
  (function(module, exports) {
    (function() {
      ace.require(["ace/snippets/hjson"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(hjson$2);
  return hjson$2.exports;
}
var hjsonExports = requireHjson();
const hjson = /* @__PURE__ */ getDefaultExportFromCjs(hjsonExports);
const hjson$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: hjson
}, [hjsonExports]);
export {
  hjson$1 as h
};
