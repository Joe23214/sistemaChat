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
var modeJssm$2 = { exports: {} };
var hasRequiredModeJssm;
function requireModeJssm() {
  if (hasRequiredModeJssm) return modeJssm$2.exports;
  hasRequiredModeJssm = 1;
  (function(module, exports) {
    ace.define("ace/mode/jssm_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules"], function(require2, exports2, module2) {
      var oop = require2("../lib/oop");
      var TextHighlightRules = require2("./text_highlight_rules").TextHighlightRules;
      var JSSMHighlightRules = function() {
        this.$rules = {
          start: [{
            token: "punctuation.definition.comment.mn",
            regex: /\/\*/,
            push: [{
              token: "punctuation.definition.comment.mn",
              regex: /\*\//,
              next: "pop"
            }, {
              defaultToken: "comment.block.jssm"
            }],
            comment: "block comment"
          }, {
            token: "comment.line.jssm",
            regex: /\/\//,
            push: [{
              token: "comment.line.jssm",
              regex: /$/,
              next: "pop"
            }, {
              defaultToken: "comment.line.jssm"
            }],
            comment: "block comment"
          }, {
            token: "entity.name.function",
            regex: /\${/,
            push: [{
              token: "entity.name.function",
              regex: /}/,
              next: "pop"
            }, {
              defaultToken: "keyword.other"
            }],
            comment: "js outcalls"
          }, {
            token: "constant.numeric",
            regex: /[0-9]*\.[0-9]*\.[0-9]*/,
            comment: "semver"
          }, {
            token: "constant.language.jssmLanguage",
            regex: /graph_layout\s*:/,
            comment: "jssm language tokens"
          }, {
            token: "constant.language.jssmLanguage",
            regex: /machine_name\s*:/,
            comment: "jssm language tokens"
          }, {
            token: "constant.language.jssmLanguage",
            regex: /machine_version\s*:/,
            comment: "jssm language tokens"
          }, {
            token: "constant.language.jssmLanguage",
            regex: /jssm_version\s*:/,
            comment: "jssm language tokens"
          }, {
            token: "keyword.control.transition.jssmArrow.legal_legal",
            regex: /<->/,
            comment: "transitions"
          }, {
            token: "keyword.control.transition.jssmArrow.legal_none",
            regex: /<-/,
            comment: "transitions"
          }, {
            token: "keyword.control.transition.jssmArrow.none_legal",
            regex: /->/,
            comment: "transitions"
          }, {
            token: "keyword.control.transition.jssmArrow.main_main",
            regex: /<=>/,
            comment: "transitions"
          }, {
            token: "keyword.control.transition.jssmArrow.none_main",
            regex: /=>/,
            comment: "transitions"
          }, {
            token: "keyword.control.transition.jssmArrow.main_none",
            regex: /<=/,
            comment: "transitions"
          }, {
            token: "keyword.control.transition.jssmArrow.forced_forced",
            regex: /<~>/,
            comment: "transitions"
          }, {
            token: "keyword.control.transition.jssmArrow.none_forced",
            regex: /~>/,
            comment: "transitions"
          }, {
            token: "keyword.control.transition.jssmArrow.forced_none",
            regex: /<~/,
            comment: "transitions"
          }, {
            token: "keyword.control.transition.jssmArrow.legal_main",
            regex: /<-=>/,
            comment: "transitions"
          }, {
            token: "keyword.control.transition.jssmArrow.main_legal",
            regex: /<=->/,
            comment: "transitions"
          }, {
            token: "keyword.control.transition.jssmArrow.legal_forced",
            regex: /<-~>/,
            comment: "transitions"
          }, {
            token: "keyword.control.transition.jssmArrow.forced_legal",
            regex: /<~->/,
            comment: "transitions"
          }, {
            token: "keyword.control.transition.jssmArrow.main_forced",
            regex: /<=~>/,
            comment: "transitions"
          }, {
            token: "keyword.control.transition.jssmArrow.forced_main",
            regex: /<~=>/,
            comment: "transitions"
          }, {
            token: "constant.numeric.jssmProbability",
            regex: /[0-9]+%/,
            comment: "edge probability annotation"
          }, {
            token: "constant.character.jssmAction",
            regex: /\'[^']*\'/,
            comment: "action annotation"
          }, {
            token: "entity.name.tag.jssmLabel.doublequoted",
            regex: /\"[^"]*\"/,
            comment: "jssm label annotation"
          }, {
            token: "entity.name.tag.jssmLabel.atom",
            regex: /[a-zA-Z0-9_.+&()#@!?,]/,
            comment: "jssm label annotation"
          }]
        };
        this.normalizeRules();
      };
      JSSMHighlightRules.metaData = {
        fileTypes: ["jssm", "jssm_state"],
        name: "JSSM",
        scopeName: "source.jssm"
      };
      oop.inherits(JSSMHighlightRules, TextHighlightRules);
      exports2.JSSMHighlightRules = JSSMHighlightRules;
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
    ace.define("ace/mode/jssm", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/jssm_highlight_rules", "ace/mode/folding/cstyle"], function(require2, exports2, module2) {
      var oop = require2("../lib/oop");
      var TextMode = require2("./text").Mode;
      var JSSMHighlightRules = require2("./jssm_highlight_rules").JSSMHighlightRules;
      var FoldMode = require2("./folding/cstyle").FoldMode;
      var Mode = function() {
        this.HighlightRules = JSSMHighlightRules;
        this.foldingRules = new FoldMode();
      };
      oop.inherits(Mode, TextMode);
      (function() {
        this.lineCommentStart = "//";
        this.blockComment = { start: "/*", end: "*/" };
        this.$id = "ace/mode/jssm";
      }).call(Mode.prototype);
      exports2.Mode = Mode;
    });
    (function() {
      ace.require(["ace/mode/jssm"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(modeJssm$2);
  return modeJssm$2.exports;
}
var modeJssmExports = requireModeJssm();
const modeJssm = /* @__PURE__ */ getDefaultExportFromCjs(modeJssmExports);
const modeJssm$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: modeJssm
}, [modeJssmExports]);
export {
  modeJssm$1 as m
};
