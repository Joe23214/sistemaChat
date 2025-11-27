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
var modeToml$2 = { exports: {} };
var hasRequiredModeToml;
function requireModeToml() {
  if (hasRequiredModeToml) return modeToml$2.exports;
  hasRequiredModeToml = 1;
  (function(module, exports) {
    ace.define("ace/mode/toml_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules"], function(require2, exports2, module2) {
      var oop = require2("../lib/oop");
      var TextHighlightRules = require2("./text_highlight_rules").TextHighlightRules;
      var TomlHighlightRules = function() {
        var keywordMapper = this.createKeywordMapper({
          "constant.language.boolean": "true|false"
        }, "identifier");
        var identifierRe = "[a-zA-Z\\$_¡-￿][a-zA-Z\\d\\$_¡-￿]*\\b";
        this.$rules = {
          "start": [
            {
              token: "comment.toml",
              regex: /#.*$/
            },
            {
              token: "string",
              regex: '"(?=.)',
              next: "qqstring"
            },
            {
              token: ["variable.keygroup.toml"],
              regex: "(?:^\\s*)(\\[\\[([^\\]]+)\\]\\])"
            },
            {
              token: ["variable.keygroup.toml"],
              regex: "(?:^\\s*)(\\[([^\\]]+)\\])"
            },
            {
              token: keywordMapper,
              regex: identifierRe
            },
            {
              token: "support.date.toml",
              regex: "\\d{4}-\\d{2}-\\d{2}(T)\\d{2}:\\d{2}:\\d{2}(Z)"
            },
            {
              token: "constant.numeric.toml",
              regex: "-?\\d+(\\.?\\d+)?"
            }
          ],
          "qqstring": [
            {
              token: "string",
              regex: "\\\\$",
              next: "qqstring"
            },
            {
              token: "constant.language.escape",
              regex: '\\\\[0tnr"\\\\]'
            },
            {
              token: "string",
              regex: '"|$',
              next: "start"
            },
            {
              defaultToken: "string"
            }
          ]
        };
      };
      oop.inherits(TomlHighlightRules, TextHighlightRules);
      exports2.TomlHighlightRules = TomlHighlightRules;
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
    ace.define("ace/mode/toml", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/toml_highlight_rules", "ace/mode/folding/ini"], function(require2, exports2, module2) {
      var oop = require2("../lib/oop");
      var TextMode = require2("./text").Mode;
      var TomlHighlightRules = require2("./toml_highlight_rules").TomlHighlightRules;
      var FoldMode = require2("./folding/ini").FoldMode;
      var Mode = function() {
        this.HighlightRules = TomlHighlightRules;
        this.foldingRules = new FoldMode();
        this.$behaviour = this.$defaultBehaviour;
      };
      oop.inherits(Mode, TextMode);
      (function() {
        this.lineCommentStart = "#";
        this.$id = "ace/mode/toml";
      }).call(Mode.prototype);
      exports2.Mode = Mode;
    });
    (function() {
      ace.require(["ace/mode/toml"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(modeToml$2);
  return modeToml$2.exports;
}
var modeTomlExports = requireModeToml();
const modeToml = /* @__PURE__ */ getDefaultExportFromCjs(modeTomlExports);
const modeToml$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: modeToml
}, [modeTomlExports]);
export {
  modeToml$1 as m
};
