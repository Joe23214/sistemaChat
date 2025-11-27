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
var svg$2 = { exports: {} };
var hasRequiredSvg;
function requireSvg() {
  if (hasRequiredSvg) return svg$2.exports;
  hasRequiredSvg = 1;
  (function(module, exports) {
    (function() {
      ace.require(["ace/snippets/svg"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(svg$2);
  return svg$2.exports;
}
var svgExports = requireSvg();
const svg = /* @__PURE__ */ getDefaultExportFromCjs(svgExports);
const svg$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: svg
}, [svgExports]);
export {
  svg$1 as s
};
