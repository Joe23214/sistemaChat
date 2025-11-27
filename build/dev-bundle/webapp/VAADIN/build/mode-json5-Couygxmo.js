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
var modeJson5$2 = { exports: {} };
var hasRequiredModeJson5;
function requireModeJson5() {
  if (hasRequiredModeJson5) return modeJson5$2.exports;
  hasRequiredModeJson5 = 1;
  (function(module, exports) {
    ace.define("ace/mode/json_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules"], function(require2, exports2, module2) {
      var oop = require2("../lib/oop");
      var TextHighlightRules = require2("./text_highlight_rules").TextHighlightRules;
      var JsonHighlightRules = function() {
        this.$rules = {
          "start": [
            {
              token: "variable",
              regex: '["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]\\s*(?=:)'
            },
            {
              token: "string",
              regex: '"',
              next: "string"
            },
            {
              token: "constant.numeric",
              regex: "0[xX][0-9a-fA-F]+\\b"
            },
            {
              token: "constant.numeric",
              regex: "[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"
            },
            {
              token: "constant.language.boolean",
              regex: "(?:true|false)\\b"
            },
            {
              token: "text",
              regex: "['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"
            },
            {
              token: "comment",
              regex: "\\/\\/.*$"
            },
            {
              token: "comment.start",
              regex: "\\/\\*",
              next: "comment"
            },
            {
              token: "paren.lparen",
              regex: "[[({]"
            },
            {
              token: "paren.rparen",
              regex: "[\\])}]"
            },
            {
              token: "punctuation.operator",
              regex: /[,]/
            },
            {
              token: "text",
              regex: "\\s+"
            }
          ],
          "string": [
            {
              token: "constant.language.escape",
              regex: /\\(?:x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|["\\\/bfnrt])/
            },
            {
              token: "string",
              regex: '"|$',
              next: "start"
            },
            {
              defaultToken: "string"
            }
          ],
          "comment": [
            {
              token: "comment.end",
              regex: "\\*\\/",
              next: "start"
            },
            {
              defaultToken: "comment"
            }
          ]
        };
      };
      oop.inherits(JsonHighlightRules, TextHighlightRules);
      exports2.JsonHighlightRules = JsonHighlightRules;
    });
    ace.define("ace/mode/json5_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/json_highlight_rules"], function(require2, exports2, module2) {
      var oop = require2("../lib/oop");
      var JsonHighlightRules = require2("./json_highlight_rules").JsonHighlightRules;
      var Json5HighlightRules = function() {
        JsonHighlightRules.call(this);
        var startRules = [{
          token: "variable",
          regex: /[a-zA-Z$_\u00a1-\uffff][\w$\u00a1-\uffff]*\s*(?=:)/
        }, {
          token: "variable",
          regex: /['](?:(?:\\.)|(?:[^'\\]))*?[']\s*(?=:)/
        }, {
          token: "constant.language.boolean",
          regex: /(?:null)\b/
        }, {
          token: "string",
          regex: /'/,
          next: [{
            token: "constant.language.escape",
            regex: /\\(?:x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|["\/bfnrt]|$)/,
            consumeLineEnd: true
          }, {
            token: "string",
            regex: /'|$/,
            next: "start"
          }, {
            defaultToken: "string"
          }]
        }, {
          token: "string",
          regex: /"(?![^"]*":)/,
          next: [{
            token: "constant.language.escape",
            regex: /\\(?:x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|["\/bfnrt]|$)/,
            consumeLineEnd: true
          }, {
            token: "string",
            regex: /"|$/,
            next: "start"
          }, {
            defaultToken: "string"
          }]
        }, {
          token: "constant.numeric",
          regex: /[+-]?(?:Infinity|NaN)\b/
        }];
        for (var key in this.$rules)
          this.$rules[key].unshift.apply(this.$rules[key], startRules);
        this.normalizeRules();
      };
      oop.inherits(Json5HighlightRules, JsonHighlightRules);
      exports2.Json5HighlightRules = Json5HighlightRules;
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
    ace.define("ace/mode/folding/cstyle", ["require", "exports", "module", "ace/lib/oop", "ace/range", "ace/mode/folding/fold_mode"], function(require2, exports2, module2) {
      var oop = require2("../../lib/oop");
      var Range = require2("../../range").Range;
      var BaseFoldMode = require2("./fold_mode").FoldMode;
      var FoldMode = exports2.FoldMode = function(commentRegex) {
        if (commentRegex) {
          this.foldingStartMarker = new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/, "|" + commentRegex.start));
          this.foldingStopMarker = new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/, "|" + commentRegex.end));
        }
      };
      oop.inherits(FoldMode, BaseFoldMode);
      (function() {
        this.foldingStartMarker = /([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/;
        this.foldingStopMarker = /^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/;
        this.singleLineBlockCommentRe = /^\s*(\/\*).*\*\/\s*$/;
        this.tripleStarBlockCommentRe = /^\s*(\/\*\*\*).*\*\/\s*$/;
        this.startRegionRe = /^\s*(\/\*|\/\/)#?region\b/;
        this._getFoldWidgetBase = this.getFoldWidget;
        this.getFoldWidget = function(session, foldStyle, row) {
          var line = session.getLine(row);
          if (this.singleLineBlockCommentRe.test(line)) {
            if (!this.startRegionRe.test(line) && !this.tripleStarBlockCommentRe.test(line))
              return "";
          }
          var fw = this._getFoldWidgetBase(session, foldStyle, row);
          if (!fw && this.startRegionRe.test(line))
            return "start";
          return fw;
        };
        this.getFoldWidgetRange = function(session, foldStyle, row, forceMultiline) {
          var line = session.getLine(row);
          if (this.startRegionRe.test(line))
            return this.getCommentRegionBlock(session, line, row);
          var match = line.match(this.foldingStartMarker);
          if (match) {
            var i = match.index;
            if (match[1])
              return this.openingBracketBlock(session, match[1], row, i);
            var range = session.getCommentFoldRange(row, i + match[0].length, 1);
            if (range && !range.isMultiLine()) {
              if (forceMultiline) {
                range = this.getSectionRange(session, row);
              } else if (foldStyle != "all")
                range = null;
            }
            return range;
          }
          if (foldStyle === "markbegin")
            return;
          var match = line.match(this.foldingStopMarker);
          if (match) {
            var i = match.index + match[0].length;
            if (match[1])
              return this.closingBracketBlock(session, match[1], row, i);
            return session.getCommentFoldRange(row, i, -1);
          }
        };
        this.getSectionRange = function(session, row) {
          var line = session.getLine(row);
          var startIndent = line.search(/\S/);
          var startRow = row;
          var startColumn = line.length;
          row = row + 1;
          var endRow = row;
          var maxRow = session.getLength();
          while (++row < maxRow) {
            line = session.getLine(row);
            var indent = line.search(/\S/);
            if (indent === -1)
              continue;
            if (startIndent > indent)
              break;
            var subRange = this.getFoldWidgetRange(session, "all", row);
            if (subRange) {
              if (subRange.start.row <= startRow) {
                break;
              } else if (subRange.isMultiLine()) {
                row = subRange.end.row;
              } else if (startIndent == indent) {
                break;
              }
            }
            endRow = row;
          }
          return new Range(startRow, startColumn, endRow, session.getLine(endRow).length);
        };
        this.getCommentRegionBlock = function(session, line, row) {
          var startColumn = line.search(/\s*$/);
          var maxRow = session.getLength();
          var startRow = row;
          var re = /^\s*(?:\/\*|\/\/|--)#?(end)?region\b/;
          var depth = 1;
          while (++row < maxRow) {
            line = session.getLine(row);
            var m = re.exec(line);
            if (!m)
              continue;
            if (m[1])
              depth--;
            else
              depth++;
            if (!depth)
              break;
          }
          var endRow = row;
          if (endRow > startRow) {
            return new Range(startRow, startColumn, endRow, line.length);
          }
        };
      }).call(FoldMode.prototype);
    });
    ace.define("ace/mode/json5", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/json5_highlight_rules", "ace/mode/matching_brace_outdent", "ace/mode/behaviour/cstyle", "ace/mode/folding/cstyle"], function(require2, exports2, module2) {
      var oop = require2("../lib/oop");
      var TextMode = require2("./text").Mode;
      var HighlightRules = require2("./json5_highlight_rules").Json5HighlightRules;
      var MatchingBraceOutdent = require2("./matching_brace_outdent").MatchingBraceOutdent;
      var CstyleBehaviour = require2("./behaviour/cstyle").CstyleBehaviour;
      var CStyleFoldMode = require2("./folding/cstyle").FoldMode;
      var Mode = function() {
        this.HighlightRules = HighlightRules;
        this.$outdent = new MatchingBraceOutdent();
        this.$behaviour = new CstyleBehaviour();
        this.foldingRules = new CStyleFoldMode();
      };
      oop.inherits(Mode, TextMode);
      (function() {
        this.lineCommentStart = "//";
        this.blockComment = { start: "/*", end: "*/" };
        this.checkOutdent = function(state, line, input) {
          return this.$outdent.checkOutdent(line, input);
        };
        this.autoOutdent = function(state, doc, row) {
          this.$outdent.autoOutdent(doc, row);
        };
        this.$id = "ace/mode/json5";
      }).call(Mode.prototype);
      exports2.Mode = Mode;
    });
    (function() {
      ace.require(["ace/mode/json5"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(modeJson5$2);
  return modeJson5$2.exports;
}
var modeJson5Exports = requireModeJson5();
const modeJson5 = /* @__PURE__ */ getDefaultExportFromCjs(modeJson5Exports);
const modeJson5$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: modeJson5
}, [modeJson5Exports]);
export {
  modeJson5$1 as m
};
