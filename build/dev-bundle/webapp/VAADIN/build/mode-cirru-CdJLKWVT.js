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
var modeCirru$2 = { exports: {} };
var hasRequiredModeCirru;
function requireModeCirru() {
  if (hasRequiredModeCirru) return modeCirru$2.exports;
  hasRequiredModeCirru = 1;
  (function(module, exports) {
    ace.define("ace/mode/cirru_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules"], function(require2, exports2, module2) {
      var oop = require2("../lib/oop");
      var TextHighlightRules = require2("./text_highlight_rules").TextHighlightRules;
      var CirruHighlightRules = function() {
        this.$rules = {
          start: [{
            token: "constant.numeric",
            regex: /[\d\.]+/
          }, {
            token: "comment.line.double-dash",
            regex: /--/,
            next: "comment"
          }, {
            token: "storage.modifier",
            regex: /\(/
          }, {
            token: "storage.modifier",
            regex: /,/,
            next: "line"
          }, {
            token: "support.function",
            regex: /[^\(\)"\s{}\[\]]+/,
            next: "line"
          }, {
            token: "string.quoted.double",
            regex: /"/,
            next: "string"
          }, {
            token: "storage.modifier",
            regex: /\)/
          }],
          comment: [{
            token: "comment.line.double-dash",
            regex: / +[^\n]+/,
            next: "start"
          }],
          string: [{
            token: "string.quoted.double",
            regex: /"/,
            next: "line"
          }, {
            token: "constant.character.escape",
            regex: /\\/,
            next: "escape"
          }, {
            token: "string.quoted.double",
            regex: /[^\\"]+/
          }],
          escape: [{
            token: "constant.character.escape",
            regex: /./,
            next: "string"
          }],
          line: [{
            token: "constant.numeric",
            regex: /[\d\.]+/
          }, {
            token: "markup.raw",
            regex: /^\s*/,
            next: "start"
          }, {
            token: "storage.modifier",
            regex: /\$/,
            next: "start"
          }, {
            token: "variable.parameter",
            regex: /[^\(\)"\s{}\[\]]+/
          }, {
            token: "storage.modifier",
            regex: /\(/,
            next: "start"
          }, {
            token: "storage.modifier",
            regex: /\)/
          }, {
            token: "markup.raw",
            regex: /^ */,
            next: "start"
          }, {
            token: "string.quoted.double",
            regex: /"/,
            next: "string"
          }]
        };
      };
      oop.inherits(CirruHighlightRules, TextHighlightRules);
      exports2.CirruHighlightRules = CirruHighlightRules;
    });
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
    ace.define("ace/mode/cirru", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/cirru_highlight_rules", "ace/mode/folding/coffee"], function(require2, exports2, module2) {
      var oop = require2("../lib/oop");
      var TextMode = require2("./text").Mode;
      var CirruHighlightRules = require2("./cirru_highlight_rules").CirruHighlightRules;
      var CoffeeFoldMode = require2("./folding/coffee").FoldMode;
      var Mode = function() {
        this.HighlightRules = CirruHighlightRules;
        this.foldingRules = new CoffeeFoldMode();
        this.$behaviour = this.$defaultBehaviour;
      };
      oop.inherits(Mode, TextMode);
      (function() {
        this.lineCommentStart = "--";
        this.$id = "ace/mode/cirru";
      }).call(Mode.prototype);
      exports2.Mode = Mode;
    });
    (function() {
      ace.require(["ace/mode/cirru"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(modeCirru$2);
  return modeCirru$2.exports;
}
var modeCirruExports = requireModeCirru();
const modeCirru = /* @__PURE__ */ getDefaultExportFromCjs(modeCirruExports);
const modeCirru$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: modeCirru
}, [modeCirruExports]);
export {
  modeCirru$1 as m
};
