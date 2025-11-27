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
var nim$2 = { exports: {} };
var hasRequiredNim;
function requireNim() {
  if (hasRequiredNim) return nim$2.exports;
  hasRequiredNim = 1;
  (function(module, exports) {
    (function() {
      ace.require(["ace/snippets/nim"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(nim$2);
  return nim$2.exports;
}
var nimExports = requireNim();
const nim = /* @__PURE__ */ getDefaultExportFromCjs(nimExports);
const nim$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: nim
}, [nimExports]);
export {
  nim$1 as n
};
