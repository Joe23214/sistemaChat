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
var rst$2 = { exports: {} };
var hasRequiredRst;
function requireRst() {
  if (hasRequiredRst) return rst$2.exports;
  hasRequiredRst = 1;
  (function(module, exports) {
    ace.define("ace/snippets/rst.snippets", ["require", "exports", "module"], function(require2, exports2, module2) {
      module2.exports = "# rst\n\nsnippet :\n	:${1:field name}: ${2:field body}\nsnippet *\n	*${1:Emphasis}*\nsnippet **\n	**${1:Strong emphasis}**\nsnippet _\n	\\`${1:hyperlink-name}\\`_\n	.. _\\`$1\\`: ${2:link-block}\nsnippet =\n	${1:Title}\n	=====${2:=}\n	${3}\nsnippet -\n	${1:Title}\n	-----${2:-}\n	${3}\nsnippet cont:\n	.. contents::\n	\n";
    });
    ace.define("ace/snippets/rst", ["require", "exports", "module", "ace/snippets/rst.snippets"], function(require2, exports2, module2) {
      exports2.snippetText = require2("./rst.snippets");
      exports2.scope = "rst";
    });
    (function() {
      ace.require(["ace/snippets/rst"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(rst$2);
  return rst$2.exports;
}
var rstExports = requireRst();
const rst = /* @__PURE__ */ getDefaultExportFromCjs(rstExports);
const rst$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: rst
}, [rstExports]);
export {
  rst$1 as r
};
