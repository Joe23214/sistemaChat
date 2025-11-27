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
var batchfile$2 = { exports: {} };
var hasRequiredBatchfile;
function requireBatchfile() {
  if (hasRequiredBatchfile) return batchfile$2.exports;
  hasRequiredBatchfile = 1;
  (function(module, exports) {
    (function() {
      ace.require(["ace/snippets/batchfile"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(batchfile$2);
  return batchfile$2.exports;
}
var batchfileExports = requireBatchfile();
const batchfile = /* @__PURE__ */ getDefaultExportFromCjs(batchfileExports);
const batchfile$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: batchfile
}, [batchfileExports]);
export {
  batchfile$1 as b
};
