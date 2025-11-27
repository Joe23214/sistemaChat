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
var csound_document$2 = { exports: {} };
var hasRequiredCsound_document;
function requireCsound_document() {
  if (hasRequiredCsound_document) return csound_document$2.exports;
  hasRequiredCsound_document = 1;
  (function(module, exports) {
    ace.define("ace/snippets/csound_document.snippets", ["require", "exports", "module"], function(require2, exports2, module2) {
      module2.exports = "# <CsoundSynthesizer>\nsnippet synth\n	<CsoundSynthesizer>\n	<CsInstruments>\n	${1}\n	</CsInstruments>\n	<CsScore>\n	e\n	</CsScore>\n	</CsoundSynthesizer>\n";
    });
    ace.define("ace/snippets/csound_document", ["require", "exports", "module", "ace/snippets/csound_document.snippets"], function(require2, exports2, module2) {
      exports2.snippetText = require2("./csound_document.snippets");
      exports2.scope = "csound_document";
    });
    (function() {
      ace.require(["ace/snippets/csound_document"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(csound_document$2);
  return csound_document$2.exports;
}
var csound_documentExports = requireCsound_document();
const csound_document = /* @__PURE__ */ getDefaultExportFromCjs(csound_documentExports);
const csound_document$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: csound_document
}, [csound_documentExports]);
export {
  csound_document$1 as c
};
