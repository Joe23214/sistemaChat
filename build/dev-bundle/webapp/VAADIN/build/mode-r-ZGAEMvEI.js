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
var modeR$2 = { exports: {} };
var hasRequiredModeR;
function requireModeR() {
  if (hasRequiredModeR) return modeR$2.exports;
  hasRequiredModeR = 1;
  (function(module, exports) {
    ace.define("ace/mode/tex_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/lib/lang", "ace/mode/text_highlight_rules"], function(require2, exports2, module2) {
      var oop = require2("../lib/oop");
      require2("../lib/lang");
      var TextHighlightRules = require2("./text_highlight_rules").TextHighlightRules;
      var TexHighlightRules = function(textClass) {
        if (!textClass)
          textClass = "text";
        this.$rules = {
          "start": [
            {
              token: "comment",
              regex: "%.*$"
            },
            {
              token: textClass,
              regex: "\\\\[$&%#\\{\\}]"
            },
            {
              token: "keyword",
              regex: "\\\\(?:documentclass|usepackage|newcounter|setcounter|addtocounter|value|arabic|stepcounter|newenvironment|renewenvironment|ref|vref|eqref|pageref|label|cite[a-zA-Z]*|tag|begin|end|bibitem)\\b",
              next: "nospell"
            },
            {
              token: "keyword",
              regex: "\\\\(?:[a-zA-Z0-9]+|[^a-zA-Z0-9])"
            },
            {
              token: "paren.keyword.operator",
              regex: "[[({]"
            },
            {
              token: "paren.keyword.operator",
              regex: "[\\])}]"
            },
            {
              token: textClass,
              regex: "\\s+"
            }
          ],
          "nospell": [
            {
              token: "comment",
              regex: "%.*$",
              next: "start"
            },
            {
              token: "nospell." + textClass,
              regex: "\\\\[$&%#\\{\\}]"
            },
            {
              token: "keyword",
              regex: "\\\\(?:documentclass|usepackage|newcounter|setcounter|addtocounter|value|arabic|stepcounter|newenvironment|renewenvironment|ref|vref|eqref|pageref|label|cite[a-zA-Z]*|tag|begin|end|bibitem)\\b"
            },
            {
              token: "keyword",
              regex: "\\\\(?:[a-zA-Z0-9]+|[^a-zA-Z0-9])",
              next: "start"
            },
            {
              token: "paren.keyword.operator",
              regex: "[[({]"
            },
            {
              token: "paren.keyword.operator",
              regex: "[\\])]"
            },
            {
              token: "paren.keyword.operator",
              regex: "}",
              next: "start"
            },
            {
              token: "nospell." + textClass,
              regex: "\\s+"
            },
            {
              token: "nospell." + textClass,
              regex: "\\w+"
            }
          ]
        };
      };
      oop.inherits(TexHighlightRules, TextHighlightRules);
      exports2.TexHighlightRules = TexHighlightRules;
    });
    ace.define("ace/mode/r_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/lib/lang", "ace/mode/text_highlight_rules", "ace/mode/tex_highlight_rules"], function(require2, exports2, module2) {
      var oop = require2("../lib/oop");
      var lang = require2("../lib/lang");
      var TextHighlightRules = require2("./text_highlight_rules").TextHighlightRules;
      var TexHighlightRules = require2("./tex_highlight_rules").TexHighlightRules;
      var RHighlightRules = function() {
        var keywords = lang.arrayToMap("function|if|in|break|next|repeat|else|for|return|switch|while|try|tryCatch|stop|warning|require|library|attach|detach|source|setMethod|setGeneric|setGroupGeneric|setClass".split("|"));
        var buildinConstants = lang.arrayToMap("NULL|NA|TRUE|FALSE|T|F|Inf|NaN|NA_integer_|NA_real_|NA_character_|NA_complex_".split("|"));
        this.$rules = {
          "start": [
            {
              token: "comment.sectionhead",
              regex: "#+(?!').*(?:----|====|####)\\s*$"
            },
            {
              token: "comment",
              regex: "#+'",
              next: "rd-start"
            },
            {
              token: "comment",
              regex: "#.*$"
            },
            {
              token: "string",
              regex: '["]',
              next: "qqstring"
            },
            {
              token: "string",
              regex: "[']",
              next: "qstring"
            },
            {
              token: "constant.numeric",
              regex: "0[xX][0-9a-fA-F]+[Li]?\\b"
            },
            {
              token: "constant.numeric",
              regex: "\\d+L\\b"
            },
            {
              token: "constant.numeric",
              regex: "\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d*)?i?\\b"
            },
            {
              token: "constant.numeric",
              regex: "\\.\\d+(?:[eE][+\\-]?\\d*)?i?\\b"
            },
            {
              token: "constant.language.boolean",
              regex: "(?:TRUE|FALSE|T|F)\\b"
            },
            {
              token: "identifier",
              regex: "`.*?`"
            },
            {
              onMatch: function(value) {
                if (keywords[value])
                  return "keyword";
                else if (buildinConstants[value])
                  return "constant.language";
                else if (value == "..." || value.match(/^\.\.\d+$/))
                  return "variable.language";
                else
                  return "identifier";
              },
              regex: "[a-zA-Z.][a-zA-Z0-9._]*\\b"
            },
            {
              token: "keyword.operator",
              regex: "%%|>=|<=|==|!=|\\->|<\\-|\\|\\||&&|=|\\+|\\-|\\*|/|\\^|>|<|!|&|\\||~|\\$|:"
            },
            {
              token: "keyword.operator",
              regex: "%.*?%"
            },
            {
              token: "paren.keyword.operator",
              regex: "[[({]"
            },
            {
              token: "paren.keyword.operator",
              regex: "[\\])}]"
            },
            {
              token: "text",
              regex: "\\s+"
            }
          ],
          "qqstring": [
            {
              token: "string",
              regex: '(?:(?:\\\\.)|(?:[^"\\\\]))*?"',
              next: "start"
            },
            {
              token: "string",
              regex: ".+"
            }
          ],
          "qstring": [
            {
              token: "string",
              regex: "(?:(?:\\\\.)|(?:[^'\\\\]))*?'",
              next: "start"
            },
            {
              token: "string",
              regex: ".+"
            }
          ]
        };
        var rdRules = new TexHighlightRules("comment").getRules();
        for (var i = 0; i < rdRules["start"].length; i++) {
          rdRules["start"][i].token += ".virtual-comment";
        }
        this.addRules(rdRules, "rd-");
        this.$rules["rd-start"].unshift({
          token: "text",
          regex: "^",
          next: "start"
        });
        this.$rules["rd-start"].unshift({
          token: "keyword",
          regex: "@(?!@)[^ ]*"
        });
        this.$rules["rd-start"].unshift({
          token: "comment",
          regex: "@@"
        });
        this.$rules["rd-start"].push({
          token: "comment",
          regex: "[^%\\\\[({\\])}]+"
        });
      };
      oop.inherits(RHighlightRules, TextHighlightRules);
      exports2.RHighlightRules = RHighlightRules;
    });
    ace.define("ace/mode/matching_brace_outdent", ["require", "exports", "module", "ace/range"], function(require2, exports2, module2) {
      var Range = require2("../range").Range;
      var MatchingBraceOutdent = function() {
      };
      (function() {
        this.checkOutdent = function(line, input) {
          if (!/^\s+$/.test(line))
            return false;
          return /^\s*\}/.test(input);
        };
        this.autoOutdent = function(doc, row) {
          var line = doc.getLine(row);
          var match = line.match(/^(\s*\})/);
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
          return line.match(/^\s*/)[0];
        };
      }).call(MatchingBraceOutdent.prototype);
      exports2.MatchingBraceOutdent = MatchingBraceOutdent;
    });
    ace.define("ace/mode/r", ["require", "exports", "module", "ace/unicode", "ace/range", "ace/lib/oop", "ace/mode/text", "ace/mode/text_highlight_rules", "ace/mode/r_highlight_rules", "ace/mode/matching_brace_outdent"], function(require2, exports2, module2) {
      var unicode = require2("../unicode");
      require2("../range").Range;
      var oop = require2("../lib/oop");
      var TextMode = require2("./text").Mode;
      require2("./text_highlight_rules").TextHighlightRules;
      var RHighlightRules = require2("./r_highlight_rules").RHighlightRules;
      var MatchingBraceOutdent = require2("./matching_brace_outdent").MatchingBraceOutdent;
      var Mode = function() {
        this.HighlightRules = RHighlightRules;
        this.$outdent = new MatchingBraceOutdent();
        this.$behaviour = this.$defaultBehaviour;
      };
      oop.inherits(Mode, TextMode);
      (function() {
        this.lineCommentStart = "#";
        this.tokenRe = new RegExp("^[" + unicode.wordChars + "._]+", "g");
        this.nonTokenRe = new RegExp("^(?:[^" + unicode.wordChars + "._]|s])+", "g");
        this.$id = "ace/mode/r";
        this.snippetFileId = "ace/snippets/r";
      }).call(Mode.prototype);
      exports2.Mode = Mode;
    });
    (function() {
      ace.require(["ace/mode/r"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(modeR$2);
  return modeR$2.exports;
}
var modeRExports = requireModeR();
const modeR = /* @__PURE__ */ getDefaultExportFromCjs(modeRExports);
const modeR$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: modeR
}, [modeRExports]);
export {
  modeR$1 as m
};
