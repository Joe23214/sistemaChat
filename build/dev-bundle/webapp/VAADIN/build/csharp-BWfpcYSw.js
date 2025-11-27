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
var csharp$2 = { exports: {} };
var hasRequiredCsharp;
function requireCsharp() {
  if (hasRequiredCsharp) return csharp$2.exports;
  hasRequiredCsharp = 1;
  (function(module, exports) {
    (function() {
      ace.require(["ace/snippets/csharp"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(csharp$2);
  return csharp$2.exports;
}
var csharpExports = requireCsharp();
const csharp = /* @__PURE__ */ getDefaultExportFromCjs(csharpExports);
const csharp$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: csharp
}, [csharpExports]);
export {
  csharp$1 as c
};
