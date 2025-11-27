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
var asl$2 = { exports: {} };
var hasRequiredAsl;
function requireAsl() {
  if (hasRequiredAsl) return asl$2.exports;
  hasRequiredAsl = 1;
  (function(module, exports) {
    (function() {
      ace.require(["ace/snippets/asl"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(asl$2);
  return asl$2.exports;
}
var aslExports = requireAsl();
const asl = /* @__PURE__ */ getDefaultExportFromCjs(aslExports);
const asl$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: asl
}, [aslExports]);
export {
  asl$1 as a
};
