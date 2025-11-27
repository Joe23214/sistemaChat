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
var modeDiff$2 = { exports: {} };
var hasRequiredModeDiff;
function requireModeDiff() {
  if (hasRequiredModeDiff) return modeDiff$2.exports;
  hasRequiredModeDiff = 1;
  (function(module, exports) {
    ace.define("ace/mode/diff_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules"], function(require2, exports2, module2) {
      var oop = require2("../lib/oop");
      var TextHighlightRules = require2("./text_highlight_rules").TextHighlightRules;
      var DiffHighlightRules = function() {
        this.$rules = {
          "start": [
            {
              regex: "^(?:\\*{15}|={67}|-{3}|\\+{3})$",
              token: "punctuation.definition.separator.diff",
              "name": "keyword"
            },
            {
              regex: "^(@@)(\\s*.+?\\s*)(@@)(.*)$",
              token: [
                "constant",
                "constant.numeric",
                "constant",
                "comment.doc.tag"
              ]
            },
            {
              regex: "^(\\d+)([,\\d]+)(a|d|c)(\\d+)([,\\d]+)(.*)$",
              token: [
                "constant.numeric",
                "punctuation.definition.range.diff",
                "constant.function",
                "constant.numeric",
                "punctuation.definition.range.diff",
                "invalid"
              ],
              "name": "meta."
            },
            {
              regex: "^(\\-{3}|\\+{3}|\\*{3})( .+)$",
              token: [
                "constant.numeric",
                "meta.tag"
              ]
            },
            {
              regex: "^([!+>])(.*?)(\\s*)$",
              token: [
                "support.constant",
                "text",
                "invalid"
              ]
            },
            {
              regex: "^([<\\-])(.*?)(\\s*)$",
              token: [
                "support.function",
                "string",
                "invalid"
              ]
            },
            {
              regex: "^(diff)(\\s+--\\w+)?(.+?)( .+)?$",
              token: ["variable", "variable", "keyword", "variable"]
            },
            {
              regex: "^Index.+$",
              token: "variable"
            },
            {
              regex: "^\\s+$",
              token: "text"
            },
            {
              regex: "\\s*$",
              token: "invalid"
            },
            {
              defaultToken: "invisible",
              caseInsensitive: true
            }
          ]
        };
      };
      oop.inherits(DiffHighlightRules, TextHighlightRules);
      exports2.DiffHighlightRules = DiffHighlightRules;
    });
    ace.define("ace/mode/folding/diff", ["require", "exports", "module", "ace/lib/oop", "ace/mode/folding/fold_mode", "ace/range"], function(require2, exports2, module2) {
      var oop = require2("../../lib/oop");
      var BaseFoldMode = require2("./fold_mode").FoldMode;
      var Range = require2("../../range").Range;
      var FoldMode = exports2.FoldMode = function(levels, flag) {
        this.regExpList = levels;
        this.flag = flag;
        this.foldingStartMarker = RegExp("^(" + levels.join("|") + ")", this.flag);
      };
      oop.inherits(FoldMode, BaseFoldMode);
      (function() {
        this.getFoldWidgetRange = function(session, foldStyle, row) {
          var line = session.getLine(row);
          var start = { row, column: line.length };
          var regList = this.regExpList;
          for (var i = 1; i <= regList.length; i++) {
            var re = RegExp("^(" + regList.slice(0, i).join("|") + ")", this.flag);
            if (re.test(line))
              break;
          }
          for (var l = session.getLength(); ++row < l; ) {
            line = session.getLine(row);
            if (re.test(line))
              break;
          }
          if (row == start.row + 1)
            return;
          return new Range(start.row, start.column, row - 1, line.length);
        };
      }).call(FoldMode.prototype);
    });
    ace.define("ace/mode/diff", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/diff_highlight_rules", "ace/mode/folding/diff"], function(require2, exports2, module2) {
      var oop = require2("../lib/oop");
      var TextMode = require2("./text").Mode;
      var HighlightRules = require2("./diff_highlight_rules").DiffHighlightRules;
      var FoldMode = require2("./folding/diff").FoldMode;
      var Mode = function() {
        this.HighlightRules = HighlightRules;
        this.foldingRules = new FoldMode(["diff", "@@|\\*{5}"], "i");
      };
      oop.inherits(Mode, TextMode);
      (function() {
        this.$id = "ace/mode/diff";
        this.snippetFileId = "ace/snippets/diff";
      }).call(Mode.prototype);
      exports2.Mode = Mode;
    });
    (function() {
      ace.require(["ace/mode/diff"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(modeDiff$2);
  return modeDiff$2.exports;
}
var modeDiffExports = requireModeDiff();
const modeDiff = /* @__PURE__ */ getDefaultExportFromCjs(modeDiffExports);
const modeDiff$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: modeDiff
}, [modeDiffExports]);
export {
  modeDiff$1 as m
};
