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
var nix$2 = { exports: {} };
var hasRequiredNix;
function requireNix() {
  if (hasRequiredNix) return nix$2.exports;
  hasRequiredNix = 1;
  (function(module, exports) {
    (function() {
      ace.require(["ace/snippets/nix"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(nix$2);
  return nix$2.exports;
}
var nixExports = requireNix();
const nix = /* @__PURE__ */ getDefaultExportFromCjs(nixExports);
const nix$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: nix
}, [nixExports]);
export {
  nix$1 as n
};
