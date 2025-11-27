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
var partiql$2 = { exports: {} };
var hasRequiredPartiql;
function requirePartiql() {
  if (hasRequiredPartiql) return partiql$2.exports;
  hasRequiredPartiql = 1;
  (function(module, exports) {
    (function() {
      ace.require(["ace/snippets/partiql"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(partiql$2);
  return partiql$2.exports;
}
var partiqlExports = requirePartiql();
const partiql = /* @__PURE__ */ getDefaultExportFromCjs(partiqlExports);
const partiql$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: partiql
}, [partiqlExports]);
export {
  partiql$1 as p
};
