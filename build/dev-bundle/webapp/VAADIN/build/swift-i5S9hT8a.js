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
var swift$2 = { exports: {} };
var hasRequiredSwift;
function requireSwift() {
  if (hasRequiredSwift) return swift$2.exports;
  hasRequiredSwift = 1;
  (function(module, exports) {
    (function() {
      ace.require(["ace/snippets/swift"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(swift$2);
  return swift$2.exports;
}
var swiftExports = requireSwift();
const swift = /* @__PURE__ */ getDefaultExportFromCjs(swiftExports);
const swift$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: swift
}, [swiftExports]);
export {
  swift$1 as s
};
