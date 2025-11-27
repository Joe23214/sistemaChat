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
var textile$2 = { exports: {} };
var hasRequiredTextile;
function requireTextile() {
  if (hasRequiredTextile) return textile$2.exports;
  hasRequiredTextile = 1;
  (function(module, exports) {
    ace.define("ace/snippets/textile.snippets", ["require", "exports", "module"], function(require2, exports2, module2) {
      module2.exports = '# Jekyll post header\nsnippet header\n	---\n	title: ${1:title}\n	layout: post\n	date: ${2:date} ${3:hour:minute:second} -05:00\n	---\n\n# Image\nsnippet img\n	!${1:url}(${2:title}):${3:link}!\n\n# Table\nsnippet |\n	|${1}|${2}\n\n# Link\nsnippet link\n	"${1:link text}":${2:url}\n\n# Acronym\nsnippet (\n	(${1:Expand acronym})${2}\n\n# Footnote\nsnippet fn\n	[${1:ref number}] ${3}\n\n	fn$1. ${2:footnote}\n	\n';
    });
    ace.define("ace/snippets/textile", ["require", "exports", "module", "ace/snippets/textile.snippets"], function(require2, exports2, module2) {
      exports2.snippetText = require2("./textile.snippets");
      exports2.scope = "textile";
    });
    (function() {
      ace.require(["ace/snippets/textile"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(textile$2);
  return textile$2.exports;
}
var textileExports = requireTextile();
const textile = /* @__PURE__ */ getDefaultExportFromCjs(textileExports);
const textile$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: textile
}, [textileExports]);
export {
  textile$1 as t
};
