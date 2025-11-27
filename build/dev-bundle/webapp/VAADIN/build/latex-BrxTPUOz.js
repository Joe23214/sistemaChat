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
var latex$2 = { exports: {} };
var hasRequiredLatex;
function requireLatex() {
  if (hasRequiredLatex) return latex$2.exports;
  hasRequiredLatex = 1;
  (function(module, exports) {
    (function() {
      ace.require(["ace/snippets/latex"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(latex$2);
  return latex$2.exports;
}
var latexExports = requireLatex();
const latex = /* @__PURE__ */ getDefaultExportFromCjs(latexExports);
const latex$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: latex
}, [latexExports]);
export {
  latex$1 as l
};
