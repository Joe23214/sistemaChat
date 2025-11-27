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
var mysql$2 = { exports: {} };
var hasRequiredMysql;
function requireMysql() {
  if (hasRequiredMysql) return mysql$2.exports;
  hasRequiredMysql = 1;
  (function(module, exports) {
    (function() {
      ace.require(["ace/snippets/mysql"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(mysql$2);
  return mysql$2.exports;
}
var mysqlExports = requireMysql();
const mysql = /* @__PURE__ */ getDefaultExportFromCjs(mysqlExports);
const mysql$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: mysql
}, [mysqlExports]);
export {
  mysql$1 as m
};
