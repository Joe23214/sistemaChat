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
var jade$2 = { exports: {} };
var hasRequiredJade;
function requireJade() {
  if (hasRequiredJade) return jade$2.exports;
  hasRequiredJade = 1;
  (function(module, exports) {
    (function() {
      ace.require(["ace/snippets/jade"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(jade$2);
  return jade$2.exports;
}
var jadeExports = requireJade();
const jade = /* @__PURE__ */ getDefaultExportFromCjs(jadeExports);
const jade$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: jade
}, [jadeExports]);
export {
  jade$1 as j
};
