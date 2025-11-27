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
var modeScheme$2 = { exports: {} };
var hasRequiredModeScheme;
function requireModeScheme() {
  if (hasRequiredModeScheme) return modeScheme$2.exports;
  hasRequiredModeScheme = 1;
  (function(module, exports) {
    ace.define("ace/mode/scheme_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules"], function(require2, exports2, module2) {
      var oop = require2("../lib/oop");
      var TextHighlightRules = require2("./text_highlight_rules").TextHighlightRules;
      var SchemeHighlightRules = function() {
        var keywordControl = "case|do|let|loop|if|else|when";
        var keywordOperator = "eq?|eqv?|equal?|and|or|not|null?";
        var constantLanguage = "#t|#f";
        var supportFunctions = "cons|car|cdr|cond|lambda|lambda*|syntax-rules|format|set!|quote|eval|append|list|list?|member?|load";
        var keywordMapper = this.createKeywordMapper({
          "keyword.control": keywordControl,
          "keyword.operator": keywordOperator,
          "constant.language": constantLanguage,
          "support.function": supportFunctions
        }, "identifier", true);
        this.$rules = {
          "start": [
            {
              token: "comment",
              regex: ";.*$"
            },
            {
              "token": ["storage.type.function-type.scheme", "text", "entity.name.function.scheme"],
              "regex": "(?:\\b(?:(define|define-syntax|define-macro))\\b)(\\s+)((?:\\w|\\-|\\!|\\?)*)"
            },
            {
              "token": "punctuation.definition.constant.character.scheme",
              "regex": "#:\\S+"
            },
            {
              "token": ["punctuation.definition.variable.scheme", "variable.other.global.scheme", "punctuation.definition.variable.scheme"],
              "regex": "(\\*)(\\S*)(\\*)"
            },
            {
              "token": "constant.numeric",
              "regex": "#[xXoObB][0-9a-fA-F]+"
            },
            {
              "token": "constant.numeric",
              "regex": "[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?"
            },
            {
              "token": keywordMapper,
              "regex": "[a-zA-Z_#][a-zA-Z0-9_\\-\\?\\!\\*]*"
            },
            {
              "token": "string",
              "regex": '"(?=.)',
              "next": "qqstring"
            }
          ],
          "qqstring": [
            {
              "token": "constant.character.escape.scheme",
              "regex": "\\\\."
            },
            {
              "token": "string",
              "regex": '[^"\\\\]+',
              "merge": true
            },
            {
              "token": "string",
              "regex": "\\\\$",
              "next": "qqstring",
              "merge": true
            },
            {
              "token": "string",
              "regex": '"|$',
              "next": "start",
              "merge": true
            }
          ]
        };
      };
      oop.inherits(SchemeHighlightRules, TextHighlightRules);
      exports2.SchemeHighlightRules = SchemeHighlightRules;
    });
    ace.define("ace/mode/matching_parens_outdent", ["require", "exports", "module", "ace/range"], function(require2, exports2, module2) {
      var Range = require2("../range").Range;
      var MatchingParensOutdent = function() {
      };
      (function() {
        this.checkOutdent = function(line, input) {
          if (!/^\s+$/.test(line))
            return false;
          return /^\s*\)/.test(input);
        };
        this.autoOutdent = function(doc, row) {
          var line = doc.getLine(row);
          var match = line.match(/^(\s*\))/);
          if (!match)
            return 0;
          var column = match[1].length;
          var openBracePos = doc.findMatchingBracket({ row, column });
          if (!openBracePos || openBracePos.row == row)
            return 0;
          var indent = this.$getIndent(doc.getLine(openBracePos.row));
          doc.replace(new Range(row, 0, row, column - 1), indent);
        };
        this.$getIndent = function(line) {
          var match = line.match(/^(\s+)/);
          if (match) {
            return match[1];
          }
          return "";
        };
      }).call(MatchingParensOutdent.prototype);
      exports2.MatchingParensOutdent = MatchingParensOutdent;
    });
    ace.define("ace/mode/scheme", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/scheme_highlight_rules", "ace/mode/matching_parens_outdent"], function(require2, exports2, module2) {
      var oop = require2("../lib/oop");
      var TextMode = require2("./text").Mode;
      var SchemeHighlightRules = require2("./scheme_highlight_rules").SchemeHighlightRules;
      var MatchingParensOutdent = require2("./matching_parens_outdent").MatchingParensOutdent;
      var Mode = function() {
        this.HighlightRules = SchemeHighlightRules;
        this.$outdent = new MatchingParensOutdent();
        this.$behaviour = this.$defaultBehaviour;
      };
      oop.inherits(Mode, TextMode);
      (function() {
        this.lineCommentStart = ";";
        this.minorIndentFunctions = ["define", "lambda", "define-macro", "define-syntax", "syntax-rules", "define-record-type", "define-structure"];
        this.$toIndent = function(str) {
          return str.split("").map(function(ch) {
            if (/\s/.exec(ch)) {
              return ch;
            } else {
              return " ";
            }
          }).join("");
        };
        this.$calculateIndent = function(line, tab) {
          var baseIndent = this.$getIndent(line);
          var delta = 0;
          var isParen, ch;
          for (var i = line.length - 1; i >= 0; i--) {
            ch = line[i];
            if (ch === "(") {
              delta--;
              isParen = true;
            } else if (ch === "(" || ch === "[" || ch === "{") {
              delta--;
              isParen = false;
            } else if (ch === ")" || ch === "]" || ch === "}") {
              delta++;
            }
            if (delta < 0) {
              break;
            }
          }
          if (delta < 0 && isParen) {
            i += 1;
            var iBefore = i;
            var fn = "";
            while (true) {
              ch = line[i];
              if (ch === " " || ch === "	") {
                if (this.minorIndentFunctions.indexOf(fn) !== -1) {
                  return this.$toIndent(line.substring(0, iBefore - 1) + tab);
                } else {
                  return this.$toIndent(line.substring(0, i + 1));
                }
              } else if (ch === void 0) {
                return this.$toIndent(line.substring(0, iBefore - 1) + tab);
              }
              fn += line[i];
              i++;
            }
          } else if (delta < 0 && !isParen) {
            return this.$toIndent(line.substring(0, i + 1));
          } else if (delta > 0) {
            baseIndent = baseIndent.substring(0, baseIndent.length - tab.length);
            return baseIndent;
          } else {
            return baseIndent;
          }
        };
        this.getNextLineIndent = function(state, line, tab) {
          return this.$calculateIndent(line, tab);
        };
        this.checkOutdent = function(state, line, input) {
          return this.$outdent.checkOutdent(line, input);
        };
        this.autoOutdent = function(state, doc, row) {
          this.$outdent.autoOutdent(doc, row);
        };
        this.$id = "ace/mode/scheme";
      }).call(Mode.prototype);
      exports2.Mode = Mode;
    });
    (function() {
      ace.require(["ace/mode/scheme"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(modeScheme$2);
  return modeScheme$2.exports;
}
var modeSchemeExports = requireModeScheme();
const modeScheme = /* @__PURE__ */ getDefaultExportFromCjs(modeSchemeExports);
const modeScheme$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: modeScheme
}, [modeSchemeExports]);
export {
  modeScheme$1 as m
};
