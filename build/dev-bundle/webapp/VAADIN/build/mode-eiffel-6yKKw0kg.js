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
var modeEiffel$2 = { exports: {} };
var hasRequiredModeEiffel;
function requireModeEiffel() {
  if (hasRequiredModeEiffel) return modeEiffel$2.exports;
  hasRequiredModeEiffel = 1;
  (function(module, exports) {
    ace.define("ace/mode/eiffel_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules"], function(require2, exports2, module2) {
      var oop = require2("../lib/oop");
      var TextHighlightRules = require2("./text_highlight_rules").TextHighlightRules;
      var EiffelHighlightRules = function() {
        var keywords = "across|agent|alias|all|attached|as|assign|attribute|check|class|convert|create|debug|deferred|detachable|do|else|elseif|end|ensure|expanded|export|external|feature|from|frozen|if|inherit|inspect|invariant|like|local|loop|not|note|obsolete|old|once|Precursor|redefine|rename|require|rescue|retry|select|separate|some|then|undefine|until|variant|when";
        var operatorKeywords = "and|implies|or|xor";
        var languageConstants = "Void";
        var booleanConstants = "True|False";
        var languageVariables = "Current|Result";
        var keywordMapper = this.createKeywordMapper({
          "constant.language": languageConstants,
          "constant.language.boolean": booleanConstants,
          "variable.language": languageVariables,
          "keyword.operator": operatorKeywords,
          "keyword": keywords
        }, "identifier", true);
        var simpleString = /(?:[^"%\b\f\v]|%[A-DFHLNQR-V%'"()<>]|%\/(?:0[xX][\da-fA-F](?:_*[\da-fA-F])*|0[cC][0-7](?:_*[0-7])*|0[bB][01](?:_*[01])*|\d(?:_*\d)*)\/)+?/;
        this.$rules = {
          "start": [
            {
              token: "string.quoted.other",
              regex: /"\[/,
              next: "aligned_verbatim_string"
            },
            {
              token: "string.quoted.other",
              regex: /"\{/,
              next: "non-aligned_verbatim_string"
            },
            {
              token: "string.quoted.double",
              regex: /"(?:[^%\b\f\n\r\v]|%[A-DFHLNQR-V%'"()<>]|%\/(?:0[xX][\da-fA-F](?:_*[\da-fA-F])*|0[cC][0-7](?:_*[0-7])*|0[bB][01](?:_*[01])*|\d(?:_*\d)*)\/)*?"/
            },
            {
              token: "comment.line.double-dash",
              regex: /--.*/
            },
            {
              token: "constant.character",
              regex: /'(?:[^%\b\f\n\r\t\v]|%[A-DFHLNQR-V%'"()<>]|%\/(?:0[xX][\da-fA-F](?:_*[\da-fA-F])*|0[cC][0-7](?:_*[0-7])*|0[bB][01](?:_*[01])*|\d(?:_*\d)*)\/)'/
            },
            {
              token: "constant.numeric",
              regex: /\b0(?:[xX][\da-fA-F](?:_*[\da-fA-F])*|[cC][0-7](?:_*[0-7])*|[bB][01](?:_*[01])*)\b/
            },
            {
              token: "constant.numeric",
              regex: /(?:\d(?:_*\d)*)?\.(?:(?:\d(?:_*\d)*)?[eE][+-]?)?\d(?:_*\d)*|\d(?:_*\d)*\.?/
            },
            {
              token: "paren.lparen",
              regex: /[\[({]|<<|\|\(/
            },
            {
              token: "paren.rparen",
              regex: /[\])}]|>>|\|\)/
            },
            {
              token: "keyword.operator",
              regex: /:=|->|\.(?=\w)|[;,:?]/
            },
            {
              token: "keyword.operator",
              regex: /\\\\|\|\.\.\||\.\.|\/[~\/]?|[><\/]=?|[-+*^=~]/
            },
            {
              token: function(v) {
                var result = keywordMapper(v);
                if (result === "identifier" && v === v.toUpperCase()) {
                  result = "entity.name.type";
                }
                return result;
              },
              regex: /[a-zA-Z][a-zA-Z\d_]*\b/
            },
            {
              token: "text",
              regex: /\s+/
            }
          ],
          "aligned_verbatim_string": [
            {
              token: "string",
              regex: /]"/,
              next: "start"
            },
            {
              token: "string",
              regex: simpleString
            }
          ],
          "non-aligned_verbatim_string": [
            {
              token: "string.quoted.other",
              regex: /}"/,
              next: "start"
            },
            {
              token: "string.quoted.other",
              regex: simpleString
            }
          ]
        };
      };
      oop.inherits(EiffelHighlightRules, TextHighlightRules);
      exports2.EiffelHighlightRules = EiffelHighlightRules;
    });
    ace.define("ace/mode/eiffel", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/eiffel_highlight_rules"], function(require2, exports2, module2) {
      var oop = require2("../lib/oop");
      var TextMode = require2("./text").Mode;
      var EiffelHighlightRules = require2("./eiffel_highlight_rules").EiffelHighlightRules;
      var Mode = function() {
        this.HighlightRules = EiffelHighlightRules;
        this.$behaviour = this.$defaultBehaviour;
      };
      oop.inherits(Mode, TextMode);
      (function() {
        this.lineCommentStart = "--";
        this.$id = "ace/mode/eiffel";
      }).call(Mode.prototype);
      exports2.Mode = Mode;
    });
    (function() {
      ace.require(["ace/mode/eiffel"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(modeEiffel$2);
  return modeEiffel$2.exports;
}
var modeEiffelExports = requireModeEiffel();
const modeEiffel = /* @__PURE__ */ getDefaultExportFromCjs(modeEiffelExports);
const modeEiffel$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: modeEiffel
}, [modeEiffelExports]);
export {
  modeEiffel$1 as m
};
