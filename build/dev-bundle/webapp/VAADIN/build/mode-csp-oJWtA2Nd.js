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
var modeCsp$2 = { exports: {} };
var hasRequiredModeCsp;
function requireModeCsp() {
  if (hasRequiredModeCsp) return modeCsp$2.exports;
  hasRequiredModeCsp = 1;
  (function(module, exports) {
    ace.define("ace/mode/csp_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules"], function(require2, exports2, module2) {
      var oop = require2("../lib/oop");
      var TextHighlightRules = require2("./text_highlight_rules").TextHighlightRules;
      var CspHighlightRules = function() {
        var keywordMapper = this.createKeywordMapper({
          "constant.language": "child-src|connect-src|default-src|font-src|frame-src|img-src|manifest-src|media-src|object-src|script-src|style-src|worker-src|base-uri|plugin-types|sandbox|disown-opener|form-action|frame-ancestors|report-uri|report-to|upgrade-insecure-requests|block-all-mixed-content|require-sri-for|reflected-xss|referrer|policy-uri",
          "variable": "'none'|'self'|'unsafe-inline'|'unsafe-eval'|'strict-dynamic'|'unsafe-hashed-attributes'"
        }, "identifier", true);
        this.$rules = {
          start: [{
            token: "string.link",
            regex: /https?:[^;\s]*/
          }, {
            token: "operator.punctuation",
            regex: /;/
          }, {
            token: keywordMapper,
            regex: /[^\s;]+/
          }]
        };
      };
      oop.inherits(CspHighlightRules, TextHighlightRules);
      exports2.CspHighlightRules = CspHighlightRules;
    });
    ace.define("ace/mode/csp", ["require", "exports", "module", "ace/mode/text", "ace/mode/csp_highlight_rules", "ace/lib/oop"], function(require2, exports2, module2) {
      var TextMode = require2("./text").Mode;
      var CspHighlightRules = require2("./csp_highlight_rules").CspHighlightRules;
      var oop = require2("../lib/oop");
      var Mode = function() {
        this.HighlightRules = CspHighlightRules;
      };
      oop.inherits(Mode, TextMode);
      (function() {
        this.$id = "ace/mode/csp";
      }).call(Mode.prototype);
      exports2.Mode = Mode;
    });
    (function() {
      ace.require(["ace/mode/csp"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(modeCsp$2);
  return modeCsp$2.exports;
}
var modeCspExports = requireModeCsp();
const modeCsp = /* @__PURE__ */ getDefaultExportFromCjs(modeCspExports);
const modeCsp$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: modeCsp
}, [modeCspExports]);
export {
  modeCsp$1 as m
};
