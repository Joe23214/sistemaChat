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
var modeAda$2 = { exports: {} };
var hasRequiredModeAda;
function requireModeAda() {
  if (hasRequiredModeAda) return modeAda$2.exports;
  hasRequiredModeAda = 1;
  (function(module, exports) {
    ace.define("ace/mode/ada_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules"], function(require2, exports2, module2) {
      var oop = require2("../lib/oop");
      var TextHighlightRules = require2("./text_highlight_rules").TextHighlightRules;
      var AdaHighlightRules = function() {
        var keywords = "abort|else|new|return|abs|elsif|not|reverse|abstract|end|null|accept|entry|select|access|exception|of|separate|aliased|exit|or|some|all|others|subtype|and|for|out|synchronized|array|function|overriding|at|tagged|generic|package|task|begin|goto|pragma|terminate|body|private|then|if|procedure|type|case|in|protected|constant|interface|until||is|raise|use|declare|range|delay|limited|record|when|delta|loop|rem|while|digits|renames|with|do|mod|requeue|xor";
        var builtinConstants = "true|false|null";
        var builtinFunctions = "count|min|max|avg|sum|rank|now|coalesce|main";
        var keywordMapper = this.createKeywordMapper({
          "support.function": builtinFunctions,
          "keyword": keywords,
          "constant.language": builtinConstants
        }, "identifier", true);
        this.$rules = {
          "start": [{
            token: "comment",
            regex: "--.*$"
          }, {
            token: "string",
            regex: '".*?"'
          }, {
            token: "string",
            regex: "'.'"
          }, {
            token: "constant.numeric",
            regex: "[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"
          }, {
            token: keywordMapper,
            regex: "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
          }, {
            token: "keyword.operator",
            regex: "\\+|\\-|\\/|\\/\\/|%|<@>|@>|<@|&|\\^|~|<|>|<=|=>|==|!=|<>|="
          }, {
            token: "paren.lparen",
            regex: "[\\(]"
          }, {
            token: "paren.rparen",
            regex: "[\\)]"
          }, {
            token: "text",
            regex: "\\s+"
          }]
        };
      };
      oop.inherits(AdaHighlightRules, TextHighlightRules);
      exports2.AdaHighlightRules = AdaHighlightRules;
    });
    ace.define("ace/mode/ada", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/ada_highlight_rules", "ace/range"], function(require2, exports2, module2) {
      var oop = require2("../lib/oop");
      var TextMode = require2("./text").Mode;
      var AdaHighlightRules = require2("./ada_highlight_rules").AdaHighlightRules;
      var Range = require2("../range").Range;
      var Mode = function() {
        this.HighlightRules = AdaHighlightRules;
        this.$behaviour = this.$defaultBehaviour;
      };
      oop.inherits(Mode, TextMode);
      (function() {
        this.lineCommentStart = "--";
        this.getNextLineIndent = function(state, line, tab) {
          var indent = this.$getIndent(line);
          var tokenizedLine = this.getTokenizer().getLineTokens(line, state);
          var tokens = tokenizedLine.tokens;
          if (tokens.length && tokens[tokens.length - 1].type == "comment") {
            return indent;
          }
          if (state == "start") {
            var match = line.match(/^.*(begin|loop|then|is|do)\s*$/);
            if (match) {
              indent += tab;
            }
          }
          return indent;
        };
        this.checkOutdent = function(state, line, input) {
          var complete_line = line + input;
          if (complete_line.match(/^\s*(begin|end)$/)) {
            return true;
          }
          return false;
        };
        this.autoOutdent = function(state, session, row) {
          var line = session.getLine(row);
          var prevLine = session.getLine(row - 1);
          var prevIndent = this.$getIndent(prevLine).length;
          var indent = this.$getIndent(line).length;
          if (indent <= prevIndent) {
            return;
          }
          session.outdentRows(new Range(row, 0, row + 2, 0));
        };
        this.$id = "ace/mode/ada";
      }).call(Mode.prototype);
      exports2.Mode = Mode;
    });
    (function() {
      ace.require(["ace/mode/ada"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(modeAda$2);
  return modeAda$2.exports;
}
var modeAdaExports = requireModeAda();
const modeAda = /* @__PURE__ */ getDefaultExportFromCjs(modeAdaExports);
const modeAda$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: modeAda
}, [modeAdaExports]);
export {
  modeAda$1 as m
};
