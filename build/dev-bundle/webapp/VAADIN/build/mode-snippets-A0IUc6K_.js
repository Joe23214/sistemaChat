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
var modeSnippets$2 = { exports: {} };
var hasRequiredModeSnippets;
function requireModeSnippets() {
  if (hasRequiredModeSnippets) return modeSnippets$2.exports;
  hasRequiredModeSnippets = 1;
  (function(module, exports) {
    ace.define("ace/mode/folding/coffee", ["require", "exports", "module", "ace/lib/oop", "ace/mode/folding/fold_mode", "ace/range"], function(require2, exports2, module2) {
      var oop = require2("../../lib/oop");
      var BaseFoldMode = require2("./fold_mode").FoldMode;
      var Range = require2("../../range").Range;
      var FoldMode = exports2.FoldMode = function() {
      };
      oop.inherits(FoldMode, BaseFoldMode);
      (function() {
        this.getFoldWidgetRange = function(session, foldStyle, row) {
          var range = this.indentationBlock(session, row);
          if (range)
            return range;
          var re = /\S/;
          var line = session.getLine(row);
          var startLevel = line.search(re);
          if (startLevel == -1 || line[startLevel] != "#")
            return;
          var startColumn = line.length;
          var maxRow = session.getLength();
          var startRow = row;
          var endRow = row;
          while (++row < maxRow) {
            line = session.getLine(row);
            var level = line.search(re);
            if (level == -1)
              continue;
            if (line[level] != "#")
              break;
            endRow = row;
          }
          if (endRow > startRow) {
            var endColumn = session.getLine(endRow).length;
            return new Range(startRow, startColumn, endRow, endColumn);
          }
        };
        this.getFoldWidget = function(session, foldStyle, row) {
          var line = session.getLine(row);
          var indent = line.search(/\S/);
          var next = session.getLine(row + 1);
          var prev = session.getLine(row - 1);
          var prevIndent = prev.search(/\S/);
          var nextIndent = next.search(/\S/);
          if (indent == -1) {
            session.foldWidgets[row - 1] = prevIndent != -1 && prevIndent < nextIndent ? "start" : "";
            return "";
          }
          if (prevIndent == -1) {
            if (indent == nextIndent && line[indent] == "#" && next[indent] == "#") {
              session.foldWidgets[row - 1] = "";
              session.foldWidgets[row + 1] = "";
              return "start";
            }
          } else if (prevIndent == indent && line[indent] == "#" && prev[indent] == "#") {
            if (session.getLine(row - 2).search(/\S/) == -1) {
              session.foldWidgets[row - 1] = "start";
              session.foldWidgets[row + 1] = "";
              return "";
            }
          }
          if (prevIndent != -1 && prevIndent < indent)
            session.foldWidgets[row - 1] = "start";
          else
            session.foldWidgets[row - 1] = "";
          if (indent < nextIndent)
            return "start";
          else
            return "";
        };
      }).call(FoldMode.prototype);
    });
    ace.define("ace/mode/snippets", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/text_highlight_rules", "ace/mode/folding/coffee"], function(require2, exports2, module2) {
      var oop = require2("../lib/oop");
      var TextMode = require2("./text").Mode;
      var TextHighlightRules = require2("./text_highlight_rules").TextHighlightRules;
      var SnippetHighlightRules = function() {
        var builtins = "SELECTION|CURRENT_WORD|SELECTED_TEXT|CURRENT_LINE|LINE_INDEX|LINE_NUMBER|SOFT_TABS|TAB_SIZE|FILENAME|FILEPATH|FULLNAME";
        this.$rules = {
          "start": [
            { token: "constant.language.escape", regex: /\\[\$}`\\]/ },
            { token: "keyword", regex: "\\$(?:TM_)?(?:" + builtins + ")\\b" },
            { token: "variable", regex: "\\$\\w+" },
            { onMatch: function(value, state, stack) {
              if (stack[1])
                stack[1]++;
              else
                stack.unshift(state, 1);
              return this.tokenName;
            }, tokenName: "markup.list", regex: "\\${", next: "varDecl" },
            { onMatch: function(value, state, stack) {
              if (!stack[1])
                return "text";
              stack[1]--;
              if (!stack[1])
                stack.splice(0, 2);
              return this.tokenName;
            }, tokenName: "markup.list", regex: "}" },
            { token: "doc.comment", regex: /^\${2}-{5,}$/ }
          ],
          "varDecl": [
            { regex: /\d+\b/, token: "constant.numeric" },
            { token: "keyword", regex: "(?:TM_)?(?:" + builtins + ")\\b" },
            { token: "variable", regex: "\\w+" },
            { regex: /:/, token: "punctuation.operator", next: "start" },
            { regex: /\//, token: "string.regex", next: "regexp" },
            { regex: "", next: "start" }
          ],
          "regexp": [
            { regex: /\\./, token: "escape" },
            { regex: /\[/, token: "regex.start", next: "charClass" },
            { regex: "/", token: "string.regex", next: "format" },
            { "token": "string.regex", regex: "." }
          ],
          charClass: [
            { regex: "\\.", token: "escape" },
            { regex: "\\]", token: "regex.end", next: "regexp" },
            { "token": "string.regex", regex: "." }
          ],
          "format": [
            { regex: /\\[ulULE]/, token: "keyword" },
            { regex: /\$\d+/, token: "variable" },
            { regex: "/[gim]*:?", token: "string.regex", next: "start" },
            { "token": "string", regex: "." }
          ]
        };
      };
      oop.inherits(SnippetHighlightRules, TextHighlightRules);
      exports2.SnippetHighlightRules = SnippetHighlightRules;
      var SnippetGroupHighlightRules = function() {
        this.$rules = {
          "start": [
            { token: "text", regex: "^\\t", next: "sn-start" },
            { token: "invalid", regex: /^ \s*/ },
            { token: "comment", regex: /^#.*/ },
            { token: "constant.language.escape", regex: "^regex ", next: "regex" },
            { token: "constant.language.escape", regex: "^(trigger|endTrigger|name|snippet|guard|endGuard|tabTrigger|key)\\b" }
          ],
          "regex": [
            { token: "text", regex: "\\." },
            { token: "keyword", regex: "/" },
            { token: "empty", regex: "$", next: "start" }
          ]
        };
        this.embedRules(SnippetHighlightRules, "sn-", [
          { token: "text", regex: "^\\t", next: "sn-start" },
          { onMatch: function(value, state, stack) {
            stack.splice(stack.length);
            return this.tokenName;
          }, tokenName: "text", regex: "^(?!	)", next: "start" }
        ]);
      };
      oop.inherits(SnippetGroupHighlightRules, TextHighlightRules);
      exports2.SnippetGroupHighlightRules = SnippetGroupHighlightRules;
      var FoldMode = require2("./folding/coffee").FoldMode;
      var Mode = function() {
        this.HighlightRules = SnippetGroupHighlightRules;
        this.foldingRules = new FoldMode();
        this.$behaviour = this.$defaultBehaviour;
      };
      oop.inherits(Mode, TextMode);
      (function() {
        this.$indentWithTabs = true;
        this.lineCommentStart = "#";
        this.$id = "ace/mode/snippets";
        this.snippetFileId = "ace/snippets/snippets";
      }).call(Mode.prototype);
      exports2.Mode = Mode;
    });
    (function() {
      ace.require(["ace/mode/snippets"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(modeSnippets$2);
  return modeSnippets$2.exports;
}
var modeSnippetsExports = requireModeSnippets();
const modeSnippets = /* @__PURE__ */ getDefaultExportFromCjs(modeSnippetsExports);
const modeSnippets$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: modeSnippets
}, [modeSnippetsExports]);
export {
  modeSnippets$1 as m
};
