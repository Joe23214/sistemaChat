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
var razor$2 = { exports: {} };
var hasRequiredRazor;
function requireRazor() {
  if (hasRequiredRazor) return razor$2.exports;
  hasRequiredRazor = 1;
  (function(module, exports) {
    ace.define("ace/snippets/razor.snippets", ["require", "exports", "module"], function(require2, exports2, module2) {
      module2.exports = "snippet if\n(${1} == ${2}) {\n	${3}\n}";
    });
    ace.define("ace/snippets/razor", ["require", "exports", "module", "ace/snippets/razor.snippets"], function(require2, exports2, module2) {
      exports2.snippetText = require2("./razor.snippets");
      exports2.scope = "razor";
    });
    (function() {
      ace.require(["ace/snippets/razor"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(razor$2);
  return razor$2.exports;
}
var razorExports = requireRazor();
const razor = /* @__PURE__ */ getDefaultExportFromCjs(razorExports);
const razor$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: razor
}, [razorExports]);
export {
  razor$1 as r
};
