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
var scrypt$2 = { exports: {} };
var hasRequiredScrypt;
function requireScrypt() {
  if (hasRequiredScrypt) return scrypt$2.exports;
  hasRequiredScrypt = 1;
  (function(module, exports) {
    (function() {
      ace.require(["ace/snippets/scrypt"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(scrypt$2);
  return scrypt$2.exports;
}
var scryptExports = requireScrypt();
const scrypt = /* @__PURE__ */ getDefaultExportFromCjs(scryptExports);
const scrypt$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: scrypt
}, [scryptExports]);
export {
  scrypt$1 as s
};
