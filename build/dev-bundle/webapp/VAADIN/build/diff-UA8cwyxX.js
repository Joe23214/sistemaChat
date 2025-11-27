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
var diff$2 = { exports: {} };
var hasRequiredDiff;
function requireDiff() {
  if (hasRequiredDiff) return diff$2.exports;
  hasRequiredDiff = 1;
  (function(module, exports) {
    ace.define("ace/snippets/diff.snippets", ["require", "exports", "module"], function(require2, exports2, module2) {
      module2.exports = '# DEP-3 (http://dep.debian.net/deps/dep3/) style patch header\nsnippet header DEP-3 style header\n	Description: ${1}\n	Origin: ${2:vendor|upstream|other}, ${3:url of the original patch}\n	Bug: ${4:url in upstream bugtracker}\n	Forwarded: ${5:no|not-needed|url}\n	Author: ${6:`g:snips_author`}\n	Reviewed-by: ${7:name and email}\n	Last-Update: ${8:`strftime("%Y-%m-%d")`}\n	Applied-Upstream: ${9:upstream version|url|commit}\n\n';
    });
    ace.define("ace/snippets/diff", ["require", "exports", "module", "ace/snippets/diff.snippets"], function(require2, exports2, module2) {
      exports2.snippetText = require2("./diff.snippets");
      exports2.scope = "diff";
    });
    (function() {
      ace.require(["ace/snippets/diff"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(diff$2);
  return diff$2.exports;
}
var diffExports = requireDiff();
const diff = /* @__PURE__ */ getDefaultExportFromCjs(diffExports);
const diff$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: diff
}, [diffExports]);
export {
  diff$1 as d
};
