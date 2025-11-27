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
var modeJexl$2 = { exports: {} };
var hasRequiredModeJexl;
function requireModeJexl() {
  if (hasRequiredModeJexl) return modeJexl$2.exports;
  hasRequiredModeJexl = 1;
  (function(module, exports) {
    ace.define("ace/mode/jexl_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules"], function(require2, exports2, module2) {
      var oop = require2("../lib/oop");
      var TextHighlightRules = require2("./text_highlight_rules").TextHighlightRules;
      var JexlHighlightRules = function() {
        var keywords = "return|var|function|and|or|not|if|for|while|do|continue|break";
        var buildinConstants = "null";
        var supportFunc = "empty|size|new";
        var keywordMapper = this.createKeywordMapper({
          "keyword": keywords,
          "constant.language": buildinConstants,
          "support.function": supportFunc
        }, "identifier");
        var escapedRe = "\\\\(?:x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|u{[0-9a-fA-F]{1,6}}||.)";
        this.$rules = {
          "start": [
            {
              token: "comment",
              regex: "\\/\\/.*$"
            },
            {
              token: "comment",
              regex: "##.*$"
            },
            {
              token: "comment",
              regex: "\\/\\*",
              next: "comment"
            },
            {
              token: ["comment", "text"],
              regex: "(#pragma)(\\s.*$)"
            },
            {
              token: "string",
              regex: '["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'
            },
            {
              token: "string",
              regex: "['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"
            },
            {
              token: "string",
              regex: "`",
              push: [
                {
                  token: "constant.language.escape",
                  regex: escapedRe
                },
                {
                  token: "string",
                  regex: "`",
                  next: "pop"
                },
                {
                  token: "lparen",
                  regex: "\\${",
                  push: [
                    {
                      token: "rparen",
                      regex: "}",
                      next: "pop"
                    },
                    {
                      include: "start"
                    }
                  ]
                },
                {
                  defaultToken: "string"
                }
              ]
            },
            {
              token: "constant.numeric",
              regex: /0(?:[xX][0-9a-fA-F][0-9a-fA-F_]*|[bB][01][01_]*)[LlSsDdFfYy]?\b/
            },
            {
              token: "constant.numeric",
              regex: /[+-]?\d[\d_]*(?:(?:\.[\d_]*)?(?:[eE][+-]?[\d_]+)?)?[LlSsDdFfYy]?\b/
            },
            {
              token: "constant.language.boolean",
              regex: "(?:true|false)\\b"
            },
            {
              token: "string.regexp",
              regex: "~/",
              push: [
                {
                  token: "constant.language.escape",
                  regex: "\\\\/"
                },
                {
                  token: "string.regexp",
                  regex: "$|/",
                  next: "pop"
                },
                {
                  defaultToken: "string.regexp"
                }
              ]
            },
            {
              token: keywordMapper,
              regex: "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
            },
            {
              token: "keyword.operator",
              regex: "&&|\\|\\||!|&|\\||\\^|~|\\?|:|\\?\\?|==|!=|<|<=|>|>=|=~|!~|=\\^|=\\$|!\\$|\\+|\\-|\\*|%|\\/|="
            },
            {
              token: "lparen",
              regex: "[[({]"
            },
            {
              token: "rparen",
              regex: "[\\])}]"
            },
            {
              token: "text",
              regex: "\\s+"
            },
            {
              token: "punctuation",
              regex: "[,.]"
            },
            {
              token: "storage.type.annotation",
              regex: "@[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
            }
          ],
          "comment": [
            {
              token: "comment",
              regex: "\\*\\/",
              next: "start"
            },
            {
              defaultToken: "comment"
            }
          ]
        };
        this.normalizeRules();
      };
      oop.inherits(JexlHighlightRules, TextHighlightRules);
      exports2.JexlHighlightRules = JexlHighlightRules;
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
    ace.define("ace/mode/jexl", ["require", "exports", "module", "ace/lib/oop", "ace/mode/jexl_highlight_rules", "ace/mode/text", "ace/mode/behaviour/cstyle", "ace/mode/folding/cstyle"], function(require2, exports2, module2) {
      var oop = require2("../lib/oop");
      var JexlHighlightRules = require2("./jexl_highlight_rules").JexlHighlightRules;
      var TextMode = require2("./text").Mode;
      var CstyleBehaviour = require2("./behaviour/cstyle").CstyleBehaviour;
      var CStyleFoldMode = require2("./folding/cstyle").FoldMode;
      var Mode = function() {
        this.HighlightRules = JexlHighlightRules;
        this.$behaviour = new CstyleBehaviour();
        this.foldingRules = new CStyleFoldMode();
      };
      oop.inherits(Mode, TextMode);
      (function() {
        this.lineCommentStart = ["//", "##"];
        this.blockComment = { start: "/*", end: "*/" };
        this.$id = "ace/mode/jexl";
      }).call(Mode.prototype);
      exports2.Mode = Mode;
    });
    (function() {
      ace.require(["ace/mode/jexl"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(modeJexl$2);
  return modeJexl$2.exports;
}
var modeJexlExports = requireModeJexl();
const modeJexl = /* @__PURE__ */ getDefaultExportFromCjs(modeJexlExports);
const modeJexl$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: modeJexl
}, [modeJexlExports]);
export {
  modeJexl$1 as m
};
