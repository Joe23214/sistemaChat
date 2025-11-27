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
var snippets$2 = { exports: {} };
var hasRequiredSnippets;
function requireSnippets() {
  if (hasRequiredSnippets) return snippets$2.exports;
  hasRequiredSnippets = 1;
  (function(module, exports) {
    ace.define("ace/snippets/snippets.snippets", ["require", "exports", "module"], function(require2, exports2, module2) {
      module2.exports = "# snippets for making snippets :)\nsnippet snip\n	snippet ${1:trigger}\n		${2}\nsnippet msnip\n	snippet ${1:trigger} ${2:description}\n		${3}\nsnippet v\n	{VISUAL}\n";
    });
    ace.define("ace/snippets/snippets", ["require", "exports", "module", "ace/snippets/snippets.snippets"], function(require2, exports2, module2) {
      exports2.snippetText = require2("./snippets.snippets");
      exports2.scope = "snippets";
    });
    (function() {
      ace.require(["ace/snippets/snippets"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(snippets$2);
  return snippets$2.exports;
}
var snippetsExports = requireSnippets();
const snippets = /* @__PURE__ */ getDefaultExportFromCjs(snippetsExports);
const snippets$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: snippets
}, [snippetsExports]);
export {
  snippets$1 as s
};
