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
var modeHaskell_cabal$2 = { exports: {} };
var hasRequiredModeHaskell_cabal;
function requireModeHaskell_cabal() {
  if (hasRequiredModeHaskell_cabal) return modeHaskell_cabal$2.exports;
  hasRequiredModeHaskell_cabal = 1;
  (function(module, exports) {
    ace.define("ace/mode/haskell_cabal_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules"], function(require2, exports2, module2) {
      var oop = require2("../lib/oop");
      var TextHighlightRules = require2("./text_highlight_rules").TextHighlightRules;
      var CabalHighlightRules = function() {
        this.$rules = {
          "start": [
            {
              token: "comment",
              regex: "^\\s*--.*$"
            },
            {
              token: ["keyword"],
              regex: /^(\s*\w.*?)(:(?:\s+|$))/
            },
            {
              token: "constant.numeric",
              regex: /[\d_]+(?:(?:[\.\d_]*)?)/
            },
            {
              token: "constant.language.boolean",
              regex: "(?:true|false|TRUE|FALSE|True|False|yes|no)\\b"
            },
            {
              token: "markup.heading",
              regex: /^(\w.*)$/
            }
          ]
        };
      };
      oop.inherits(CabalHighlightRules, TextHighlightRules);
      exports2.CabalHighlightRules = CabalHighlightRules;
    });
    ace.define("ace/mode/folding/haskell_cabal", ["require", "exports", "module", "ace/lib/oop", "ace/mode/folding/fold_mode", "ace/range"], function(require2, exports2, module2) {
      var oop = require2("../../lib/oop");
      var BaseFoldMode = require2("./fold_mode").FoldMode;
      var Range = require2("../../range").Range;
      var FoldMode = exports2.FoldMode = function() {
      };
      oop.inherits(FoldMode, BaseFoldMode);
      (function() {
        this.isHeading = function(session, row) {
          var heading = "markup.heading";
          var token = session.getTokens(row)[0];
          return row == 0 || token && token.type.lastIndexOf(heading, 0) === 0;
        };
        this.getFoldWidget = function(session, foldStyle, row) {
          if (this.isHeading(session, row)) {
            return "start";
          } else if (foldStyle === "markbeginend" && !/^\s*$/.test(session.getLine(row))) {
            var maxRow = session.getLength();
            while (++row < maxRow) {
              if (!/^\s*$/.test(session.getLine(row))) {
                break;
              }
            }
            if (row == maxRow || this.isHeading(session, row)) {
              return "end";
            }
          }
          return "";
        };
        this.getFoldWidgetRange = function(session, foldStyle, row) {
          var line = session.getLine(row);
          var startColumn = line.length;
          var maxRow = session.getLength();
          var startRow = row;
          var endRow = row;
          if (this.isHeading(session, row)) {
            while (++row < maxRow) {
              if (this.isHeading(session, row)) {
                row--;
                break;
              }
            }
            endRow = row;
            if (endRow > startRow) {
              while (endRow > startRow && /^\s*$/.test(session.getLine(endRow)))
                endRow--;
            }
            if (endRow > startRow) {
              var endColumn = session.getLine(endRow).length;
              return new Range(startRow, startColumn, endRow, endColumn);
            }
          } else if (this.getFoldWidget(session, foldStyle, row) === "end") {
            var endRow = row;
            var endColumn = session.getLine(endRow).length;
            while (--row >= 0) {
              if (this.isHeading(session, row)) {
                break;
              }
            }
            var line = session.getLine(row);
            var startColumn = line.length;
            return new Range(row, startColumn, endRow, endColumn);
          }
        };
      }).call(FoldMode.prototype);
    });
    ace.define("ace/mode/haskell_cabal", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/haskell_cabal_highlight_rules", "ace/mode/folding/haskell_cabal"], function(require2, exports2, module2) {
      var oop = require2("../lib/oop");
      var TextMode = require2("./text").Mode;
      var CabalHighlightRules = require2("./haskell_cabal_highlight_rules").CabalHighlightRules;
      var FoldMode = require2("./folding/haskell_cabal").FoldMode;
      var Mode = function() {
        this.HighlightRules = CabalHighlightRules;
        this.foldingRules = new FoldMode();
        this.$behaviour = this.$defaultBehaviour;
      };
      oop.inherits(Mode, TextMode);
      (function() {
        this.lineCommentStart = "--";
        this.blockComment = null;
        this.$id = "ace/mode/haskell_cabal";
      }).call(Mode.prototype);
      exports2.Mode = Mode;
    });
    (function() {
      ace.require(["ace/mode/haskell_cabal"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(modeHaskell_cabal$2);
  return modeHaskell_cabal$2.exports;
}
var modeHaskell_cabalExports = requireModeHaskell_cabal();
const modeHaskell_cabal = /* @__PURE__ */ getDefaultExportFromCjs(modeHaskell_cabalExports);
const modeHaskell_cabal$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: modeHaskell_cabal
}, [modeHaskell_cabalExports]);
export {
  modeHaskell_cabal$1 as m
};
