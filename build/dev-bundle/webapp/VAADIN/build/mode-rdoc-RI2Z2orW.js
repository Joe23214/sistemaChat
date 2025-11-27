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
var modeRdoc$2 = { exports: {} };
var hasRequiredModeRdoc;
function requireModeRdoc() {
  if (hasRequiredModeRdoc) return modeRdoc$2.exports;
  hasRequiredModeRdoc = 1;
  (function(module, exports) {
    ace.define("ace/mode/latex_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules"], function(require2, exports2, module2) {
      var oop = require2("../lib/oop");
      var TextHighlightRules = require2("./text_highlight_rules").TextHighlightRules;
      var LatexHighlightRules = function() {
        this.$rules = {
          "start": [{
            token: "comment",
            regex: "%.*$"
          }, {
            token: ["keyword", "lparen", "variable.parameter", "rparen", "lparen", "storage.type", "rparen"],
            regex: "(\\\\(?:documentclass|usepackage|input))(?:(\\[)([^\\]]*)(\\]))?({)([^}]*)(})"
          }, {
            token: ["keyword", "lparen", "variable.parameter", "rparen"],
            regex: "(\\\\(?:label|v?ref|cite(?:[^{]*)))(?:({)([^}]*)(}))?"
          }, {
            token: ["storage.type", "lparen", "variable.parameter", "rparen"],
            regex: "(\\\\begin)({)(verbatim)(})",
            next: "verbatim"
          }, {
            token: ["storage.type", "lparen", "variable.parameter", "rparen"],
            regex: "(\\\\begin)({)(lstlisting)(})",
            next: "lstlisting"
          }, {
            token: ["storage.type", "lparen", "variable.parameter", "rparen"],
            regex: "(\\\\(?:begin|end))({)([\\w*]*)(})"
          }, {
            token: "storage.type",
            regex: /\\verb\b\*?/,
            next: [{
              token: ["keyword.operator", "string", "keyword.operator"],
              regex: "(.)(.*?)(\\1|$)|",
              next: "start"
            }]
          }, {
            token: "storage.type",
            regex: "\\\\[a-zA-Z]+"
          }, {
            token: "lparen",
            regex: "[[({]"
          }, {
            token: "rparen",
            regex: "[\\])}]"
          }, {
            token: "constant.character.escape",
            regex: "\\\\[^a-zA-Z]?"
          }, {
            token: "string",
            regex: "\\${1,2}",
            next: "equation"
          }],
          "equation": [{
            token: "comment",
            regex: "%.*$"
          }, {
            token: "string",
            regex: "\\${1,2}",
            next: "start"
          }, {
            token: "constant.character.escape",
            regex: "\\\\(?:[^a-zA-Z]|[a-zA-Z]+)"
          }, {
            token: "error",
            regex: "^\\s*$",
            next: "start"
          }, {
            defaultToken: "string"
          }],
          "verbatim": [{
            token: ["storage.type", "lparen", "variable.parameter", "rparen"],
            regex: "(\\\\end)({)(verbatim)(})",
            next: "start"
          }, {
            defaultToken: "text"
          }],
          "lstlisting": [{
            token: ["storage.type", "lparen", "variable.parameter", "rparen"],
            regex: "(\\\\end)({)(lstlisting)(})",
            next: "start"
          }, {
            defaultToken: "text"
          }]
        };
        this.normalizeRules();
      };
      oop.inherits(LatexHighlightRules, TextHighlightRules);
      exports2.LatexHighlightRules = LatexHighlightRules;
    });
    ace.define("ace/mode/rdoc_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/lib/lang", "ace/mode/text_highlight_rules", "ace/mode/latex_highlight_rules"], function(require2, exports2, module2) {
      var oop = require2("../lib/oop");
      require2("../lib/lang");
      var TextHighlightRules = require2("./text_highlight_rules").TextHighlightRules;
      require2("./latex_highlight_rules");
      var RDocHighlightRules = function() {
        this.$rules = {
          "start": [
            {
              token: "comment",
              regex: "%.*$"
            },
            {
              token: "text",
              regex: "\\\\[$&%#\\{\\}]"
            },
            {
              token: "keyword",
              regex: "\\\\(?:name|alias|method|S3method|S4method|item|code|preformatted|kbd|pkg|var|env|option|command|author|email|url|source|cite|acronym|href|code|preformatted|link|eqn|deqn|keyword|usage|examples|dontrun|dontshow|figure|if|ifelse|Sexpr|RdOpts|inputencoding|usepackage)\\b",
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
              token: "text",
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
              token: "nospell.text",
              regex: "\\\\[$&%#\\{\\}]"
            },
            {
              token: "keyword",
              regex: "\\\\(?:name|alias|method|S3method|S4method|item|code|preformatted|kbd|pkg|var|env|option|command|author|email|url|source|cite|acronym|href|code|preformatted|link|eqn|deqn|keyword|usage|examples|dontrun|dontshow|figure|if|ifelse|Sexpr|RdOpts|inputencoding|usepackage)\\b"
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
              token: "nospell.text",
              regex: "\\s+"
            },
            {
              token: "nospell.text",
              regex: "\\w+"
            }
          ]
        };
      };
      oop.inherits(RDocHighlightRules, TextHighlightRules);
      exports2.RDocHighlightRules = RDocHighlightRules;
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
    ace.define("ace/mode/rdoc", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/rdoc_highlight_rules", "ace/mode/matching_brace_outdent"], function(require2, exports2, module2) {
      var oop = require2("../lib/oop");
      var TextMode = require2("./text").Mode;
      var RDocHighlightRules = require2("./rdoc_highlight_rules").RDocHighlightRules;
      var MatchingBraceOutdent = require2("./matching_brace_outdent").MatchingBraceOutdent;
      var Mode = function(suppressHighlighting) {
        this.HighlightRules = RDocHighlightRules;
        this.$outdent = new MatchingBraceOutdent();
        this.$behaviour = this.$defaultBehaviour;
      };
      oop.inherits(Mode, TextMode);
      (function() {
        this.getNextLineIndent = function(state, line, tab) {
          return this.$getIndent(line);
        };
        this.$id = "ace/mode/rdoc";
      }).call(Mode.prototype);
      exports2.Mode = Mode;
    });
    (function() {
      ace.require(["ace/mode/rdoc"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(modeRdoc$2);
  return modeRdoc$2.exports;
}
var modeRdocExports = requireModeRdoc();
const modeRdoc = /* @__PURE__ */ getDefaultExportFromCjs(modeRdocExports);
const modeRdoc$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: modeRdoc
}, [modeRdocExports]);
export {
  modeRdoc$1 as m
};
