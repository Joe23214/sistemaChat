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
var modeTex$2 = { exports: {} };
var hasRequiredModeTex;
function requireModeTex() {
  if (hasRequiredModeTex) return modeTex$2.exports;
  hasRequiredModeTex = 1;
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
    ace.define("ace/mode/tex", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/text_highlight_rules", "ace/mode/tex_highlight_rules", "ace/mode/matching_brace_outdent"], function(require2, exports2, module2) {
      var oop = require2("../lib/oop");
      var TextMode = require2("./text").Mode;
      var TextHighlightRules = require2("./text_highlight_rules").TextHighlightRules;
      var TexHighlightRules = require2("./tex_highlight_rules").TexHighlightRules;
      var MatchingBraceOutdent = require2("./matching_brace_outdent").MatchingBraceOutdent;
      var Mode = function(suppressHighlighting) {
        if (suppressHighlighting)
          this.HighlightRules = TextHighlightRules;
        else
          this.HighlightRules = TexHighlightRules;
        this.$outdent = new MatchingBraceOutdent();
        this.$behaviour = this.$defaultBehaviour;
      };
      oop.inherits(Mode, TextMode);
      (function() {
        this.lineCommentStart = "%";
        this.getNextLineIndent = function(state, line, tab) {
          return this.$getIndent(line);
        };
        this.allowAutoInsert = function() {
          return false;
        };
        this.$id = "ace/mode/tex";
        this.snippetFileId = "ace/snippets/tex";
      }).call(Mode.prototype);
      exports2.Mode = Mode;
    });
    (function() {
      ace.require(["ace/mode/tex"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(modeTex$2);
  return modeTex$2.exports;
}
var modeTexExports = requireModeTex();
const modeTex = /* @__PURE__ */ getDefaultExportFromCjs(modeTexExports);
const modeTex$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: modeTex
}, [modeTexExports]);
export {
  modeTex$1 as m
};
