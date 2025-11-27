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
var modeFsharp$2 = { exports: {} };
var hasRequiredModeFsharp;
function requireModeFsharp() {
  if (hasRequiredModeFsharp) return modeFsharp$2.exports;
  hasRequiredModeFsharp = 1;
  (function(module, exports) {
    ace.define("ace/mode/fsharp_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules"], function(require2, exports2, module2) {
      var oop = require2("../lib/oop");
      var TextHighlightRules = require2("./text_highlight_rules").TextHighlightRules;
      var FSharpHighlightRules = function() {
        var keywordMapper = this.createKeywordMapper({
          "variable": "this",
          "keyword": "abstract|assert|base|begin|class|default|delegate|done|downcast|downto|elif		|else|exception|extern|false|finally|function|global|inherit|inline|interface|internal|lazy|match		|member|module|mutable|namespace|open|or|override|private|public|rec|return|return!|select|static		|struct|then|to|true|try|typeof|upcast|use|use!|val|void|when|while|with|yield|yield!|__SOURCE_DIRECTORY__		|as|asr|land|lor|lsl|lsr|lxor|mod|sig|atomic|break|checked|component|const|constraint|constructor|continue		|eager|event|external|fixed|functor|include|method|mixin|object|parallel|process|protected|pure|sealed|tailcall		|trait|virtual|volatile|and|do|end|for|fun|if|in|let|let!|new|not|null|of|endif",
          "constant": "true|false"
        }, "identifier");
        var floatNumber = "(?:(?:(?:(?:(?:(?:\\d+)?(?:\\.\\d+))|(?:(?:\\d+)\\.))|(?:\\d+))(?:[eE][+-]?\\d+))|(?:(?:(?:\\d+)?(?:\\.\\d+))|(?:(?:\\d+)\\.)))";
        this.$rules = {
          "start": [
            {
              token: "variable.classes",
              regex: "\\[\\<[.]*\\>\\]"
            },
            {
              token: "comment",
              regex: "//.*$"
            },
            {
              token: "comment.start",
              regex: /\(\*(?!\))/,
              push: "blockComment"
            },
            {
              token: "string",
              regex: "'.'"
            },
            {
              token: "string",
              regex: '"""',
              next: [{
                token: "constant.language.escape",
                regex: /\\./,
                next: "qqstring"
              }, {
                token: "string",
                regex: '"""',
                next: "start"
              }, {
                defaultToken: "string"
              }]
            },
            {
              token: "string",
              regex: '"',
              next: [{
                token: "constant.language.escape",
                regex: /\\./,
                next: "qqstring"
              }, {
                token: "string",
                regex: '"',
                next: "start"
              }, {
                defaultToken: "string"
              }]
            },
            {
              token: ["verbatim.string", "string"],
              regex: '(@?)(")',
              stateName: "qqstring",
              next: [{
                token: "constant.language.escape",
                regex: '""'
              }, {
                token: "string",
                regex: '"',
                next: "start"
              }, {
                defaultToken: "string"
              }]
            },
            {
              token: "constant.float",
              regex: "(?:" + floatNumber + "|\\d+)[jJ]\\b"
            },
            {
              token: "constant.float",
              regex: floatNumber
            },
            {
              token: "constant.integer",
              regex: "(?:(?:(?:[1-9]\\d*)|(?:0))|(?:0[oO]?[0-7]+)|(?:0[xX][\\dA-Fa-f]+)|(?:0[bB][01]+))\\b"
            },
            {
              token: ["keyword.type", "variable"],
              regex: "(type\\s)([a-zA-Z0-9_$-]*\\b)"
            },
            {
              token: keywordMapper,
              regex: "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
            },
            {
              token: "keyword.operator",
              regex: "\\+\\.|\\-\\.|\\*\\.|\\/\\.|#|;;|\\+|\\-|\\*|\\*\\*\\/|\\/\\/|%|<<|>>|&|\\||\\^|~|<|>|<=|=>|==|!=|<>|<-|=|\\(\\*\\)"
            },
            {
              token: "paren.lparen",
              regex: "[[({]"
            },
            {
              token: "paren.rparen",
              regex: "[\\])}]"
            }
          ],
          blockComment: [{
            regex: /\(\*\)/,
            token: "comment"
          }, {
            regex: /\(\*(?!\))/,
            token: "comment.start",
            push: "blockComment"
          }, {
            regex: /\*\)/,
            token: "comment.end",
            next: "pop"
          }, {
            defaultToken: "comment"
          }]
        };
        this.normalizeRules();
      };
      oop.inherits(FSharpHighlightRules, TextHighlightRules);
      exports2.FSharpHighlightRules = FSharpHighlightRules;
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
    ace.define("ace/mode/fsharp", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/fsharp_highlight_rules", "ace/mode/folding/cstyle"], function(require2, exports2, module2) {
      var oop = require2("../lib/oop");
      var TextMode = require2("./text").Mode;
      var FSharpHighlightRules = require2("./fsharp_highlight_rules").FSharpHighlightRules;
      var CStyleFoldMode = require2("./folding/cstyle").FoldMode;
      var Mode = function() {
        TextMode.call(this);
        this.HighlightRules = FSharpHighlightRules;
        this.foldingRules = new CStyleFoldMode();
      };
      oop.inherits(Mode, TextMode);
      (function() {
        this.lineCommentStart = "//";
        this.blockComment = { start: "(*", end: "*)", nestable: true };
        this.$id = "ace/mode/fsharp";
      }).call(Mode.prototype);
      exports2.Mode = Mode;
    });
    (function() {
      ace.require(["ace/mode/fsharp"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(modeFsharp$2);
  return modeFsharp$2.exports;
}
var modeFsharpExports = requireModeFsharp();
const modeFsharp = /* @__PURE__ */ getDefaultExportFromCjs(modeFsharpExports);
const modeFsharp$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: modeFsharp
}, [modeFsharpExports]);
export {
  modeFsharp$1 as m
};
