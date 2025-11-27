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
var plsql$2 = { exports: {} };
var hasRequiredPlsql;
function requirePlsql() {
  if (hasRequiredPlsql) return plsql$2.exports;
  hasRequiredPlsql = 1;
  (function(module, exports) {
    (function() {
      ace.require(["ace/snippets/plsql"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(plsql$2);
  return plsql$2.exports;
}
var plsqlExports = requirePlsql();
const plsql = /* @__PURE__ */ getDefaultExportFromCjs(plsqlExports);
const plsql$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: plsql
}, [plsqlExports]);
export {
  plsql$1 as p
};
