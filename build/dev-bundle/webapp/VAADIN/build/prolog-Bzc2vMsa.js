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
var prolog$2 = { exports: {} };
var hasRequiredProlog;
function requireProlog() {
  if (hasRequiredProlog) return prolog$2.exports;
  hasRequiredProlog = 1;
  (function(module, exports) {
    (function() {
      ace.require(["ace/snippets/prolog"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(prolog$2);
  return prolog$2.exports;
}
var prologExports = requireProlog();
const prolog = /* @__PURE__ */ getDefaultExportFromCjs(prologExports);
const prolog$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: prolog
}, [prologExports]);
export {
  prolog$1 as p
};
