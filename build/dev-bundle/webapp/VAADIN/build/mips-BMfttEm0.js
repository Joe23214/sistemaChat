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
var mips$2 = { exports: {} };
var hasRequiredMips;
function requireMips() {
  if (hasRequiredMips) return mips$2.exports;
  hasRequiredMips = 1;
  (function(module, exports) {
    (function() {
      ace.require(["ace/snippets/mips"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(mips$2);
  return mips$2.exports;
}
var mipsExports = requireMips();
const mips = /* @__PURE__ */ getDefaultExportFromCjs(mipsExports);
const mips$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: mips
}, [mipsExports]);
export {
  mips$1 as m
};
