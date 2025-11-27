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
var modeIni$2 = { exports: {} };
var hasRequiredModeIni;
function requireModeIni() {
  if (hasRequiredModeIni) return modeIni$2.exports;
  hasRequiredModeIni = 1;
  (function(module, exports) {
    ace.define("ace/mode/ini_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules"], function(require2, exports2, module2) {
      var oop = require2("../lib/oop");
      var TextHighlightRules = require2("./text_highlight_rules").TextHighlightRules;
      var escapeRe = "\\\\(?:[\\\\0abtrn;#=:]|x[a-fA-F\\d]{4})";
      var IniHighlightRules = function() {
        this.$rules = {
          start: [{
            token: "punctuation.definition.comment.ini",
            regex: "#.*",
            push_: [{
              token: "comment.line.number-sign.ini",
              regex: "$|^",
              next: "pop"
            }, {
              defaultToken: "comment.line.number-sign.ini"
            }]
          }, {
            token: "punctuation.definition.comment.ini",
            regex: ";.*",
            push_: [{
              token: "comment.line.semicolon.ini",
              regex: "$|^",
              next: "pop"
            }, {
              defaultToken: "comment.line.semicolon.ini"
            }]
          }, {
            token: ["keyword.other.definition.ini", "text", "punctuation.separator.key-value.ini"],
            regex: "\\b([a-zA-Z0-9_.-]+)\\b(\\s*)(=)"
          }, {
            token: ["punctuation.definition.entity.ini", "constant.section.group-title.ini", "punctuation.definition.entity.ini"],
            regex: "^(\\[)(.*?)(\\])"
          }, {
            token: "punctuation.definition.string.begin.ini",
            regex: "'",
            push: [{
              token: "punctuation.definition.string.end.ini",
              regex: "'",
              next: "pop"
            }, {
              token: "constant.language.escape",
              regex: escapeRe
            }, {
              defaultToken: "string.quoted.single.ini"
            }]
          }, {
            token: "punctuation.definition.string.begin.ini",
            regex: '"',
            push: [{
              token: "constant.language.escape",
              regex: escapeRe
            }, {
              token: "punctuation.definition.string.end.ini",
              regex: '"',
              next: "pop"
            }, {
              defaultToken: "string.quoted.double.ini"
            }]
          }]
        };
        this.normalizeRules();
      };
      IniHighlightRules.metaData = {
        fileTypes: ["ini", "conf"],
        keyEquivalent: "^~I",
        name: "Ini",
        scopeName: "source.ini"
      };
      oop.inherits(IniHighlightRules, TextHighlightRules);
      exports2.IniHighlightRules = IniHighlightRules;
    });
    ace.define("ace/mode/folding/ini", ["require", "exports", "module", "ace/lib/oop", "ace/range", "ace/mode/folding/fold_mode"], function(require2, exports2, module2) {
      var oop = require2("../../lib/oop");
      var Range = require2("../../range").Range;
      var BaseFoldMode = require2("./fold_mode").FoldMode;
      var FoldMode = exports2.FoldMode = function() {
      };
      oop.inherits(FoldMode, BaseFoldMode);
      (function() {
        this.foldingStartMarker = /^\s*\[([^\])]*)]\s*(?:$|[;#])/;
        this.getFoldWidgetRange = function(session, foldStyle, row) {
          var re = this.foldingStartMarker;
          var line = session.getLine(row);
          var m = line.match(re);
          if (!m)
            return;
          var startName = m[1] + ".";
          var startColumn = line.length;
          var maxRow = session.getLength();
          var startRow = row;
          var endRow = row;
          while (++row < maxRow) {
            line = session.getLine(row);
            if (/^\s*$/.test(line))
              continue;
            m = line.match(re);
            if (m && m[1].lastIndexOf(startName, 0) !== 0)
              break;
            endRow = row;
          }
          if (endRow > startRow) {
            var endColumn = session.getLine(endRow).length;
            return new Range(startRow, startColumn, endRow, endColumn);
          }
        };
      }).call(FoldMode.prototype);
    });
    ace.define("ace/mode/ini", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/ini_highlight_rules", "ace/mode/folding/ini"], function(require2, exports2, module2) {
      var oop = require2("../lib/oop");
      var TextMode = require2("./text").Mode;
      var IniHighlightRules = require2("./ini_highlight_rules").IniHighlightRules;
      var FoldMode = require2("./folding/ini").FoldMode;
      var Mode = function() {
        this.HighlightRules = IniHighlightRules;
        this.foldingRules = new FoldMode();
        this.$behaviour = this.$defaultBehaviour;
      };
      oop.inherits(Mode, TextMode);
      (function() {
        this.lineCommentStart = ";";
        this.blockComment = null;
        this.$id = "ace/mode/ini";
      }).call(Mode.prototype);
      exports2.Mode = Mode;
    });
    (function() {
      ace.require(["ace/mode/ini"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(modeIni$2);
  return modeIni$2.exports;
}
var modeIniExports = requireModeIni();
const modeIni = /* @__PURE__ */ getDefaultExportFromCjs(modeIniExports);
const modeIni$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: modeIni
}, [modeIniExports]);
export {
  modeIni$1 as m
};
