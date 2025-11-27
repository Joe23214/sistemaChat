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
var rdoc$2 = { exports: {} };
var hasRequiredRdoc;
function requireRdoc() {
  if (hasRequiredRdoc) return rdoc$2.exports;
  hasRequiredRdoc = 1;
  (function(module, exports) {
    (function() {
      ace.require(["ace/snippets/rdoc"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(rdoc$2);
  return rdoc$2.exports;
}
var rdocExports = requireRdoc();
const rdoc = /* @__PURE__ */ getDefaultExportFromCjs(rdocExports);
const rdoc$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: rdoc
}, [rdocExports]);
export {
  rdoc$1 as r
};
