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
var sql$2 = { exports: {} };
var hasRequiredSql;
function requireSql() {
  if (hasRequiredSql) return sql$2.exports;
  hasRequiredSql = 1;
  (function(module, exports) {
    ace.define("ace/snippets/sql.snippets", ["require", "exports", "module"], function(require2, exports2, module2) {
      module2.exports = "snippet tbl\n	create table ${1:table} (\n		${2:columns}\n	);\nsnippet col\n	${1:name}	${2:type}	${3:default ''}	${4:not null}\nsnippet ccol\n	${1:name}	varchar2(${2:size})	${3:default ''}	${4:not null}\nsnippet ncol\n	${1:name}	number	${3:default 0}	${4:not null}\nsnippet dcol\n	${1:name}	date	${3:default sysdate}	${4:not null}\nsnippet ind\n	create index ${3:$1_$2} on ${1:table}(${2:column});\nsnippet uind\n	create unique index ${1:name} on ${2:table}(${3:column});\nsnippet tblcom\n	comment on table ${1:table} is '${2:comment}';\nsnippet colcom\n	comment on column ${1:table}.${2:column} is '${3:comment}';\nsnippet addcol\n	alter table ${1:table} add (${2:column} ${3:type});\nsnippet seq\n	create sequence ${1:name} start with ${2:1} increment by ${3:1} minvalue ${4:1};\nsnippet s*\n	select * from ${1:table}\n";
    });
    ace.define("ace/snippets/sql", ["require", "exports", "module", "ace/snippets/sql.snippets"], function(require2, exports2, module2) {
      exports2.snippetText = require2("./sql.snippets");
      exports2.scope = "sql";
    });
    (function() {
      ace.require(["ace/snippets/sql"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(sql$2);
  return sql$2.exports;
}
var sqlExports = requireSql();
const sql = /* @__PURE__ */ getDefaultExportFromCjs(sqlExports);
const sql$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: sql
}, [sqlExports]);
export {
  sql$1 as s
};
