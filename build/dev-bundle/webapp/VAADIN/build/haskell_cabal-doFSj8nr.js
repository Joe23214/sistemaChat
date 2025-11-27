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
var haskell_cabal$2 = { exports: {} };
var hasRequiredHaskell_cabal;
function requireHaskell_cabal() {
  if (hasRequiredHaskell_cabal) return haskell_cabal$2.exports;
  hasRequiredHaskell_cabal = 1;
  (function(module, exports) {
    (function() {
      ace.require(["ace/snippets/haskell_cabal"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(haskell_cabal$2);
  return haskell_cabal$2.exports;
}
var haskell_cabalExports = requireHaskell_cabal();
const haskell_cabal = /* @__PURE__ */ getDefaultExportFromCjs(haskell_cabalExports);
const haskell_cabal$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: haskell_cabal
}, [haskell_cabalExports]);
export {
  haskell_cabal$1 as h
};
