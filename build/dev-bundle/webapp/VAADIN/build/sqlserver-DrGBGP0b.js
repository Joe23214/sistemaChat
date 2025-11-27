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
var sqlserver$2 = { exports: {} };
var hasRequiredSqlserver;
function requireSqlserver() {
  if (hasRequiredSqlserver) return sqlserver$2.exports;
  hasRequiredSqlserver = 1;
  (function(module, exports) {
    ace.define("ace/snippets/sqlserver.snippets", ["require", "exports", "module"], function(require2, exports2, module2) {
      module2.exports = "# ISNULL\nsnippet isnull\n	ISNULL(${1:check_expression}, ${2:replacement_value})\n# FORMAT\nsnippet format\n	FORMAT(${1:value}, ${2:format})\n# CAST\nsnippet cast\n	CAST(${1:expression} AS ${2:data_type})\n# CONVERT\nsnippet convert\n	CONVERT(${1:data_type}, ${2:expression})\n# DATEPART\nsnippet datepart\n	DATEPART(${1:datepart}, ${2:date})\n# DATEDIFF\nsnippet datediff\n	DATEDIFF(${1:datepart}, ${2:startdate}, ${3:enddate})\n# DATEADD\nsnippet dateadd\n	DATEADD(${1:datepart}, ${2:number}, ${3:date})\n# DATEFROMPARTS \nsnippet datefromparts\n	DATEFROMPARTS(${1:year}, ${2:month}, ${3:day})\n# OBJECT_DEFINITION\nsnippet objectdef\n	SELECT OBJECT_DEFINITION(OBJECT_ID('${1:sys.server_permissions /*object name*/}'))\n# STUFF XML\nsnippet stuffxml\n	STUFF((SELECT ', ' + ${1:ColumnName}\n		FROM ${2:TableName}\n		WHERE ${3:WhereClause}\n		FOR XML PATH('')), 1, 1, '') AS ${4:Alias}\n	${5:/*https://msdn.microsoft.com/en-us/library/ms188043.aspx*/}\n# Create Procedure\nsnippet createproc\n	-- =============================================\n	-- Author:		${1:Author}\n	-- Create date: ${2:Date}\n	-- Description:	${3:Description}\n	-- =============================================\n	CREATE PROCEDURE ${4:Procedure_Name}\n		${5:/*Add the parameters for the stored procedure here*/}\n	AS\n	BEGIN\n		-- SET NOCOUNT ON added to prevent extra result sets from interfering with SELECT statements.\n		SET NOCOUNT ON;\n		\n		${6:/*Add the T-SQL statements to compute the return value here*/}\n		\n	END\n	GO\n# Create Scalar Function\nsnippet createfn\n	-- =============================================\n	-- Author:		${1:Author}\n	-- Create date: ${2:Date}\n	-- Description:	${3:Description}\n	-- =============================================\n	CREATE FUNCTION ${4:Scalar_Function_Name}\n		-- Add the parameters for the function here\n	RETURNS ${5:Function_Data_Type}\n	AS\n	BEGIN\n		DECLARE @Result ${5:Function_Data_Type}\n		\n		${6:/*Add the T-SQL statements to compute the return value here*/}\n		\n	END\n	GO";
    });
    ace.define("ace/snippets/sqlserver", ["require", "exports", "module", "ace/snippets/sqlserver.snippets"], function(require2, exports2, module2) {
      exports2.snippetText = require2("./sqlserver.snippets");
      exports2.scope = "sqlserver";
    });
    (function() {
      ace.require(["ace/snippets/sqlserver"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(sqlserver$2);
  return sqlserver$2.exports;
}
var sqlserverExports = requireSqlserver();
const sqlserver = /* @__PURE__ */ getDefaultExportFromCjs(sqlserverExports);
const sqlserver$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: sqlserver
}, [sqlserverExports]);
export {
  sqlserver$1 as s
};
