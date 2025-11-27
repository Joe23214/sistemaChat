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
var fsharp$2 = { exports: {} };
var hasRequiredFsharp;
function requireFsharp() {
  if (hasRequiredFsharp) return fsharp$2.exports;
  hasRequiredFsharp = 1;
  (function(module, exports) {
    (function() {
      ace.require(["ace/snippets/fsharp"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(fsharp$2);
  return fsharp$2.exports;
}
var fsharpExports = requireFsharp();
const fsharp = /* @__PURE__ */ getDefaultExportFromCjs(fsharpExports);
const fsharp$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: fsharp
}, [fsharpExports]);
export {
  fsharp$1 as f
};
