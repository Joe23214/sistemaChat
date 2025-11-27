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
var apex$2 = { exports: {} };
var hasRequiredApex;
function requireApex() {
  if (hasRequiredApex) return apex$2.exports;
  hasRequiredApex = 1;
  (function(module, exports) {
    (function() {
      ace.require(["ace/snippets/apex"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(apex$2);
  return apex$2.exports;
}
var apexExports = requireApex();
const apex = /* @__PURE__ */ getDefaultExportFromCjs(apexExports);
const apex$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: apex
}, [apexExports]);
export {
  apex$1 as a
};
