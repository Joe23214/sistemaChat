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
var modeTcl$2 = { exports: {} };
var hasRequiredModeTcl;
function requireModeTcl() {
  if (hasRequiredModeTcl) return modeTcl$2.exports;
  hasRequiredModeTcl = 1;
  (function(module, exports) {
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
    ace.define("ace/mode/tcl_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules"], function(require2, exports2, module2) {
      var oop = require2("../lib/oop");
      var TextHighlightRules = require2("./text_highlight_rules").TextHighlightRules;
      var TclHighlightRules = function() {
        this.$rules = {
          "start": [
            {
              token: "comment",
              regex: "#.*\\\\$",
              next: "commentfollow"
            },
            {
              token: "comment",
              regex: "#.*$"
            },
            {
              token: "support.function",
              regex: "[\\\\]$",
              next: "splitlineStart"
            },
            {
              token: "text",
              regex: /\\(?:["{}\[\]$\\])/
            },
            {
              token: "text",
              regex: "^|[^{][;][^}]|[/\r/]",
              next: "commandItem"
            },
            {
              token: "string",
              regex: '[ ]*["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'
            },
            {
              token: "string",
              regex: '[ ]*["]',
              next: "qqstring"
            },
            {
              token: "variable.instance",
              regex: "[$]",
              next: "variable"
            },
            {
              token: "support.function",
              regex: "!|\\$|%|&|\\*|\\-\\-|\\-|\\+\\+|\\+|~|===|==|=|!=|!==|<=|>=|<<=|>>=|>>>=|<>|<|>|!|&&|\\|\\||\\?\\:|\\*=|%=|\\+=|\\-=|&=|\\^=|{\\*}|;|::"
            },
            {
              token: "identifier",
              regex: "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
            },
            {
              token: "paren.lparen",
              regex: "[[{]",
              next: "commandItem"
            },
            {
              token: "paren.lparen",
              regex: "[(]"
            },
            {
              token: "paren.rparen",
              regex: "[\\])}]"
            },
            {
              token: "text",
              regex: "\\s+"
            }
          ],
          "commandItem": [
            {
              token: "comment",
              regex: "#.*\\\\$",
              next: "commentfollow"
            },
            {
              token: "comment",
              regex: "#.*$",
              next: "start"
            },
            {
              token: "string",
              regex: '[ ]*["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'
            },
            {
              token: "variable.instance",
              regex: "[$]",
              next: "variable"
            },
            {
              token: "support.function",
              regex: "(?:[:][:])[a-zA-Z0-9_/]+(?:[:][:])",
              next: "commandItem"
            },
            {
              token: "support.function",
              regex: "[a-zA-Z0-9_/]+(?:[:][:])",
              next: "commandItem"
            },
            {
              token: "support.function",
              regex: "(?:[:][:])",
              next: "commandItem"
            },
            {
              token: "paren.rparen",
              regex: "[\\])}]"
            },
            {
              token: "paren.lparen",
              regex: "[[({]"
            },
            {
              token: "support.function",
              regex: "!|\\$|%|&|\\*|\\-\\-|\\-|\\+\\+|\\+|~|===|==|=|!=|!==|<=|>=|<<=|>>=|>>>=|<>|<|>|!|&&|\\|\\||\\?\\:|\\*=|%=|\\+=|\\-=|&=|\\^=|{\\*}|;|::"
            },
            {
              token: "keyword",
              regex: "[a-zA-Z0-9_/]+",
              next: "start"
            }
          ],
          "commentfollow": [
            {
              token: "comment",
              regex: ".*\\\\$",
              next: "commentfollow"
            },
            {
              token: "comment",
              regex: ".+",
              next: "start"
            }
          ],
          "splitlineStart": [
            {
              token: "text",
              regex: "^.",
              next: "start"
            }
          ],
          "variable": [
            {
              token: "variable.instance",
              regex: "[a-zA-Z_\\d]+(?:[(][a-zA-Z_\\d]+[)])?",
              next: "start"
            },
            {
              token: "variable.instance",
              regex: "{?[a-zA-Z_\\d]+}?",
              next: "start"
            }
          ],
          "qqstring": [{
            token: "string",
            regex: '(?:[^\\\\]|\\\\.)*?["]',
            next: "start"
          }, {
            token: "string",
            regex: ".+"
          }]
        };
      };
      oop.inherits(TclHighlightRules, TextHighlightRules);
      exports2.TclHighlightRules = TclHighlightRules;
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
    ace.define("ace/mode/tcl", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/folding/cstyle", "ace/mode/tcl_highlight_rules", "ace/mode/matching_brace_outdent", "ace/range"], function(require2, exports2, module2) {
      var oop = require2("../lib/oop");
      var TextMode = require2("./text").Mode;
      var CStyleFoldMode = require2("./folding/cstyle").FoldMode;
      var TclHighlightRules = require2("./tcl_highlight_rules").TclHighlightRules;
      var MatchingBraceOutdent = require2("./matching_brace_outdent").MatchingBraceOutdent;
      require2("../range").Range;
      var Mode = function() {
        this.HighlightRules = TclHighlightRules;
        this.$outdent = new MatchingBraceOutdent();
        this.foldingRules = new CStyleFoldMode();
        this.$behaviour = this.$defaultBehaviour;
      };
      oop.inherits(Mode, TextMode);
      (function() {
        this.lineCommentStart = "#";
        this.getNextLineIndent = function(state, line, tab) {
          var indent = this.$getIndent(line);
          var tokenizedLine = this.getTokenizer().getLineTokens(line, state);
          var tokens = tokenizedLine.tokens;
          if (tokens.length && tokens[tokens.length - 1].type == "comment") {
            return indent;
          }
          if (state == "start") {
            var match = line.match(/^.*[\{\(\[]\s*$/);
            if (match) {
              indent += tab;
            }
          }
          return indent;
        };
        this.checkOutdent = function(state, line, input) {
          return this.$outdent.checkOutdent(line, input);
        };
        this.autoOutdent = function(state, doc, row) {
          this.$outdent.autoOutdent(doc, row);
        };
        this.$id = "ace/mode/tcl";
        this.snippetFileId = "ace/snippets/tcl";
      }).call(Mode.prototype);
      exports2.Mode = Mode;
    });
    (function() {
      ace.require(["ace/mode/tcl"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(modeTcl$2);
  return modeTcl$2.exports;
}
var modeTclExports = requireModeTcl();
const modeTcl = /* @__PURE__ */ getDefaultExportFromCjs(modeTclExports);
const modeTcl$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: modeTcl
}, [modeTclExports]);
export {
  modeTcl$1 as m
};
