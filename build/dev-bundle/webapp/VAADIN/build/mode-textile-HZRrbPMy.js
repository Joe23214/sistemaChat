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
var modeTextile$2 = { exports: {} };
var hasRequiredModeTextile;
function requireModeTextile() {
  if (hasRequiredModeTextile) return modeTextile$2.exports;
  hasRequiredModeTextile = 1;
  (function(module, exports) {
    ace.define("ace/mode/textile_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules"], function(require2, exports2, module2) {
      var oop = require2("../lib/oop");
      var TextHighlightRules = require2("./text_highlight_rules").TextHighlightRules;
      var TextileHighlightRules = function() {
        this.$rules = {
          "start": [
            {
              token: function(value) {
                if (value.charAt(0) == "h")
                  return "markup.heading." + value.charAt(1);
                else
                  return "markup.heading";
              },
              regex: "h1|h2|h3|h4|h5|h6|bq|p|bc|pre",
              next: "blocktag"
            },
            {
              token: "keyword",
              regex: "[\\*]+|[#]+"
            },
            {
              token: "text",
              regex: ".+"
            }
          ],
          "blocktag": [
            {
              token: "keyword",
              regex: "\\. ",
              next: "start"
            },
            {
              token: "keyword",
              regex: "\\(",
              next: "blocktagproperties"
            }
          ],
          "blocktagproperties": [
            {
              token: "keyword",
              regex: "\\)",
              next: "blocktag"
            },
            {
              token: "string",
              regex: "[a-zA-Z0-9\\-_]+"
            },
            {
              token: "keyword",
              regex: "#"
            }
          ]
        };
      };
      oop.inherits(TextileHighlightRules, TextHighlightRules);
      exports2.TextileHighlightRules = TextileHighlightRules;
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
    ace.define("ace/mode/textile", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/textile_highlight_rules", "ace/mode/matching_brace_outdent"], function(require2, exports2, module2) {
      var oop = require2("../lib/oop");
      var TextMode = require2("./text").Mode;
      var TextileHighlightRules = require2("./textile_highlight_rules").TextileHighlightRules;
      var MatchingBraceOutdent = require2("./matching_brace_outdent").MatchingBraceOutdent;
      var Mode = function() {
        this.HighlightRules = TextileHighlightRules;
        this.$outdent = new MatchingBraceOutdent();
        this.$behaviour = this.$defaultBehaviour;
      };
      oop.inherits(Mode, TextMode);
      (function() {
        this.type = "text";
        this.getNextLineIndent = function(state, line, tab) {
          if (state == "intag")
            return tab;
          return "";
        };
        this.checkOutdent = function(state, line, input) {
          return this.$outdent.checkOutdent(line, input);
        };
        this.autoOutdent = function(state, doc, row) {
          this.$outdent.autoOutdent(doc, row);
        };
        this.$id = "ace/mode/textile";
        this.snippetFileId = "ace/snippets/textile";
      }).call(Mode.prototype);
      exports2.Mode = Mode;
    });
    (function() {
      ace.require(["ace/mode/textile"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(modeTextile$2);
  return modeTextile$2.exports;
}
var modeTextileExports = requireModeTextile();
const modeTextile = /* @__PURE__ */ getDefaultExportFromCjs(modeTextileExports);
const modeTextile$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: modeTextile
}, [modeTextileExports]);
export {
  modeTextile$1 as m
};
