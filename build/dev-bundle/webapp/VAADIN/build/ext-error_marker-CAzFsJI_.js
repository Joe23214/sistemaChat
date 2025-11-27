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
var extError_marker$2 = { exports: {} };
var hasRequiredExtError_marker;
function requireExtError_marker() {
  if (hasRequiredExtError_marker) return extError_marker$2.exports;
  hasRequiredExtError_marker = 1;
  (function(module, exports) {
    (function() {
      ace.require(["ace/ext/error_marker"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(extError_marker$2);
  return extError_marker$2.exports;
}
var extError_markerExports = requireExtError_marker();
const extError_marker = /* @__PURE__ */ getDefaultExportFromCjs(extError_markerExports);
const extError_marker$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: extError_marker
}, [extError_markerExports]);
export {
  extError_marker$1 as e
};
