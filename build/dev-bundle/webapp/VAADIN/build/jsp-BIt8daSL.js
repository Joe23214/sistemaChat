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
var jsp$2 = { exports: {} };
var hasRequiredJsp;
function requireJsp() {
  if (hasRequiredJsp) return jsp$2.exports;
  hasRequiredJsp = 1;
  (function(module, exports) {
    ace.define("ace/snippets/jsp.snippets", ["require", "exports", "module"], function(require2, exports2, module2) {
      module2.exports = 'snippet @page\n	<%@page contentType="text/html" pageEncoding="UTF-8"%>\nsnippet jstl\n	<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>\n	<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>\nsnippet jstl:c\n	<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>\nsnippet jstl:fn\n	<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>\nsnippet cpath\n	${pageContext.request.contextPath}\nsnippet cout\n	<c:out value="${1}" default="${2}" />\nsnippet cset\n	<c:set var="${1}" value="${2}" />\nsnippet cremove\n	<c:remove var="${1}" scope="${2:page}" />\nsnippet ccatch\n	<c:catch var="${1}" />\nsnippet cif\n	<c:if test="${${1}}">\n		${2}\n	</c:if>\nsnippet cchoose\n	<c:choose>\n		${1}\n	</c:choose>\nsnippet cwhen\n	<c:when test="${${1}}">\n		${2}\n	</c:when>\nsnippet cother\n	<c:otherwise>\n		${1}\n	</c:otherwise>\nsnippet cfore\n	<c:forEach items="${${1}}" var="${2}" varStatus="${3}">\n		${4:<c:out value="$2" />}\n	</c:forEach>\nsnippet cfort\n	<c:set var="${1}">${2:item1,item2,item3}</c:set>\n	<c:forTokens var="${3}" items="${$1}" delims="${4:,}">\n		${5:<c:out value="$3" />}\n	</c:forTokens>\nsnippet cparam\n	<c:param name="${1}" value="${2}" />\nsnippet cparam+\n	<c:param name="${1}" value="${2}" />\n	cparam+${3}\nsnippet cimport\n	<c:import url="${1}" />\nsnippet cimport+\n	<c:import url="${1}">\n		<c:param name="${2}" value="${3}" />\n		cparam+${4}\n	</c:import>\nsnippet curl\n	<c:url value="${1}" var="${2}" />\n	<a href="${$2}">${3}</a>\nsnippet curl+\n	<c:url value="${1}" var="${2}">\n		<c:param name="${4}" value="${5}" />\n		cparam+${6}\n	</c:url>\n	<a href="${$2}">${3}</a>\nsnippet credirect\n	<c:redirect url="${1}" />\nsnippet contains\n	${fn:contains(${1:string}, ${2:substr})}\nsnippet contains:i\n	${fn:containsIgnoreCase(${1:string}, ${2:substr})}\nsnippet endswith\n	${fn:endsWith(${1:string}, ${2:suffix})}\nsnippet escape\n	${fn:escapeXml(${1:string})}\nsnippet indexof\n	${fn:indexOf(${1:string}, ${2:substr})}\nsnippet join\n	${fn:join(${1:collection}, ${2:delims})}\nsnippet length\n	${fn:length(${1:collection_or_string})}\nsnippet replace\n	${fn:replace(${1:string}, ${2:substr}, ${3:replace})}\nsnippet split\n	${fn:split(${1:string}, ${2:delims})}\nsnippet startswith\n	${fn:startsWith(${1:string}, ${2:prefix})}\nsnippet substr\n	${fn:substring(${1:string}, ${2:begin}, ${3:end})}\nsnippet substr:a\n	${fn:substringAfter(${1:string}, ${2:substr})}\nsnippet substr:b\n	${fn:substringBefore(${1:string}, ${2:substr})}\nsnippet lc\n	${fn:toLowerCase(${1:string})}\nsnippet uc\n	${fn:toUpperCase(${1:string})}\nsnippet trim\n	${fn:trim(${1:string})}\n';
    });
    ace.define("ace/snippets/jsp", ["require", "exports", "module", "ace/snippets/jsp.snippets"], function(require2, exports2, module2) {
      exports2.snippetText = require2("./jsp.snippets");
      exports2.scope = "jsp";
    });
    (function() {
      ace.require(["ace/snippets/jsp"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(jsp$2);
  return jsp$2.exports;
}
var jspExports = requireJsp();
const jsp = /* @__PURE__ */ getDefaultExportFromCjs(jspExports);
const jsp$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: jsp
}, [jspExports]);
export {
  jsp$1 as j
};
