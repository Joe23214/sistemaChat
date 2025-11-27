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
var modeCobol$2 = { exports: {} };
var hasRequiredModeCobol;
function requireModeCobol() {
  if (hasRequiredModeCobol) return modeCobol$2.exports;
  hasRequiredModeCobol = 1;
  (function(module, exports) {
    ace.define("ace/mode/cobol_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules"], function(require2, exports2, module2) {
      var oop = require2("../lib/oop");
      var TextHighlightRules = require2("./text_highlight_rules").TextHighlightRules;
      var CobolHighlightRules = function() {
        var keywords = "ACCEPT|MERGE|SUM|ADD||MESSAGE|TABLE|ADVANCING|MODE|TAPE|AFTER|MULTIPLY|TEST|ALL|NEGATIVE|TEXT|ALPHABET|NEXT|THAN|ALSO|NO|THEN|ALTERNATE|NOT|THROUGH|AND|NUMBER|THRU|ANY|OCCURS|TIME|ARE|OF|TO|AREA|OFF|TOP||ASCENDING|OMITTED|TRUE|ASSIGN|ON|TYPE|AT|OPEN|UNIT|AUTHOR|OR|UNTIL|BEFORE|OTHER|UP|BLANK|OUTPUT|USE|BLOCK|PAGE|USING|BOTTOM|PERFORM|VALUE|BY|PIC|VALUES|CALL|PICTURE|WHEN|CANCEL|PLUS|WITH|CD|POINTER|WRITE|CHARACTER|POSITION||ZERO|CLOSE|POSITIVE|ZEROS|COLUMN|PROCEDURE|ZEROES|COMMA|PROGRAM|COMMON|PROGRAM-ID|COMMUNICATION|QUOTE|COMP|RANDOM|COMPUTE|READ|CONTAINS|RECEIVE|CONFIGURATION|RECORD|CONTINUE|REDEFINES|CONTROL|REFERENCE|COPY|REMAINDER|COUNT|REPLACE|DATA|REPORT|DATE|RESERVE|DAY|RESET|DELETE|RETURN|DESTINATION|REWIND|DISABLE|REWRITE|DISPLAY|RIGHT|DIVIDE|RUN|DOWN|SAME|ELSE|SEARCH|ENABLE|SECTION|END|SELECT|ENVIRONMENT|SENTENCE|EQUAL|SET|ERROR|SIGN|EXIT|SEQUENTIAL|EXTERNAL|SIZE|FLASE|SORT|FILE|SOURCE|LENGTH|SPACE|LESS|STANDARD|LIMIT|START|LINE|STOP|LOCK|STRING|LOW-VALUE|SUBTRACT";
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
            regex: "\\*.*$"
          }, {
            token: "string",
            regex: '".*?"'
          }, {
            token: "string",
            regex: "'.*?'"
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
      oop.inherits(CobolHighlightRules, TextHighlightRules);
      exports2.CobolHighlightRules = CobolHighlightRules;
    });
    ace.define("ace/mode/cobol", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/cobol_highlight_rules"], function(require2, exports2, module2) {
      var oop = require2("../lib/oop");
      var TextMode = require2("./text").Mode;
      var CobolHighlightRules = require2("./cobol_highlight_rules").CobolHighlightRules;
      var Mode = function() {
        this.HighlightRules = CobolHighlightRules;
        this.$behaviour = this.$defaultBehaviour;
      };
      oop.inherits(Mode, TextMode);
      (function() {
        this.lineCommentStart = "*";
        this.$id = "ace/mode/cobol";
      }).call(Mode.prototype);
      exports2.Mode = Mode;
    });
    (function() {
      ace.require(["ace/mode/cobol"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(modeCobol$2);
  return modeCobol$2.exports;
}
var modeCobolExports = requireModeCobol();
const modeCobol = /* @__PURE__ */ getDefaultExportFromCjs(modeCobolExports);
const modeCobol$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: modeCobol
}, [modeCobolExports]);
export {
  modeCobol$1 as m
};
