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
var fsl$2 = { exports: {} };
var hasRequiredFsl;
function requireFsl() {
  if (hasRequiredFsl) return fsl$2.exports;
  hasRequiredFsl = 1;
  (function(module, exports) {
    ace.define("ace/snippets/fsl.snippets", ["require", "exports", "module"], function(require2, exports2, module2) {
      module2.exports = 'snippet header\n	machine_name     : "";\n	machine_author   : "";\n	machine_license  : MIT;\n	machine_comment  : "";\n	machine_language : en;\n	machine_version  : 1.0.0;\n	fsl_version      : 1.0.0;\n	start_states     : [];\n';
    });
    ace.define("ace/snippets/fsl", ["require", "exports", "module", "ace/snippets/fsl.snippets"], function(require2, exports2, module2) {
      exports2.snippetText = require2("./fsl.snippets");
      exports2.scope = "fsl";
    });
    (function() {
      ace.require(["ace/snippets/fsl"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(fsl$2);
  return fsl$2.exports;
}
var fslExports = requireFsl();
const fsl = /* @__PURE__ */ getDefaultExportFromCjs(fslExports);
const fsl$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: fsl
}, [fslExports]);
export {
  fsl$1 as f
};
