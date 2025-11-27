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
var nsis$2 = { exports: {} };
var hasRequiredNsis;
function requireNsis() {
  if (hasRequiredNsis) return nsis$2.exports;
  hasRequiredNsis = 1;
  (function(module, exports) {
    (function() {
      ace.require(["ace/snippets/nsis"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(nsis$2);
  return nsis$2.exports;
}
var nsisExports = requireNsis();
const nsis = /* @__PURE__ */ getDefaultExportFromCjs(nsisExports);
const nsis$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: nsis
}, [nsisExports]);
export {
  nsis$1 as n
};
