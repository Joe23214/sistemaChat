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
var modeSpace$2 = { exports: {} };
var hasRequiredModeSpace;
function requireModeSpace() {
  if (hasRequiredModeSpace) return modeSpace$2.exports;
  hasRequiredModeSpace = 1;
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
    ace.define("ace/mode/space_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules"], function(require2, exports2, module2) {
      var oop = require2("../lib/oop");
      var TextHighlightRules = require2("./text_highlight_rules").TextHighlightRules;
      var SpaceHighlightRules = function() {
        this.$rules = {
          "start": [
            {
              token: "empty_line",
              regex: / */,
              next: "key"
            },
            {
              token: "empty_line",
              regex: /$/,
              next: "key"
            }
          ],
          "key": [
            {
              token: "variable",
              regex: /\S+/
            },
            {
              token: "empty_line",
              regex: /$/,
              next: "start"
            },
            {
              token: "keyword.operator",
              regex: / /,
              next: "value"
            }
          ],
          "value": [
            {
              token: "keyword.operator",
              regex: /$/,
              next: "start"
            },
            {
              token: "string",
              regex: /[^$]/
            }
          ]
        };
      };
      oop.inherits(SpaceHighlightRules, TextHighlightRules);
      exports2.SpaceHighlightRules = SpaceHighlightRules;
    });
    ace.define("ace/mode/space", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/folding/coffee", "ace/mode/space_highlight_rules"], function(require2, exports2, module2) {
      var oop = require2("../lib/oop");
      var TextMode = require2("./text").Mode;
      var FoldMode = require2("./folding/coffee").FoldMode;
      var SpaceHighlightRules = require2("./space_highlight_rules").SpaceHighlightRules;
      var Mode = function() {
        this.HighlightRules = SpaceHighlightRules;
        this.foldingRules = new FoldMode();
        this.$behaviour = this.$defaultBehaviour;
      };
      oop.inherits(Mode, TextMode);
      (function() {
        this.$id = "ace/mode/space";
      }).call(Mode.prototype);
      exports2.Mode = Mode;
    });
    (function() {
      ace.require(["ace/mode/space"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(modeSpace$2);
  return modeSpace$2.exports;
}
var modeSpaceExports = requireModeSpace();
const modeSpace = /* @__PURE__ */ getDefaultExportFromCjs(modeSpaceExports);
const modeSpace$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: modeSpace
}, [modeSpaceExports]);
export {
  modeSpace$1 as m
};
