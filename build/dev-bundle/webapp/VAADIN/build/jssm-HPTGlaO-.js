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
var jssm$2 = { exports: {} };
var hasRequiredJssm;
function requireJssm() {
  if (hasRequiredJssm) return jssm$2.exports;
  hasRequiredJssm = 1;
  (function(module, exports) {
    (function() {
      ace.require(["ace/snippets/jssm"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(jssm$2);
  return jssm$2.exports;
}
var jssmExports = requireJssm();
const jssm = /* @__PURE__ */ getDefaultExportFromCjs(jssmExports);
const jssm$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: jssm
}, [jssmExports]);
export {
  jssm$1 as j
};
