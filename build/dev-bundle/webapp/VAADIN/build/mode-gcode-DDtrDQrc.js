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
var modeGcode$2 = { exports: {} };
var hasRequiredModeGcode;
function requireModeGcode() {
  if (hasRequiredModeGcode) return modeGcode$2.exports;
  hasRequiredModeGcode = 1;
  (function(module, exports) {
    ace.define("ace/mode/gcode_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules"], function(require2, exports2, module2) {
      var oop = require2("../lib/oop");
      var TextHighlightRules = require2("./text_highlight_rules").TextHighlightRules;
      var GcodeHighlightRules = function() {
        var keywords = "IF|DO|WHILE|ENDWHILE|CALL|ENDIF|SUB|ENDSUB|GOTO|REPEAT|ENDREPEAT|CALL";
        var builtinConstants = "PI";
        var builtinFunctions = "ATAN|ABS|ACOS|ASIN|SIN|COS|EXP|FIX|FUP|ROUND|LN|TAN";
        var keywordMapper = this.createKeywordMapper({
          "support.function": builtinFunctions,
          "keyword": keywords,
          "constant.language": builtinConstants
        }, "identifier", true);
        this.$rules = {
          "start": [{
            token: "comment",
            regex: "\\(.*\\)"
          }, {
            token: "comment",
            regex: "([N])([0-9]+)"
          }, {
            token: "string",
            regex: "([G])([0-9]+\\.?[0-9]?)"
          }, {
            token: "string",
            regex: "([M])([0-9]+\\.?[0-9]?)"
          }, {
            token: "constant.numeric",
            regex: "([-+]?([0-9]*\\.?[0-9]+\\.?))|(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)"
          }, {
            token: keywordMapper,
            regex: "[A-Z]"
          }, {
            token: "keyword.operator",
            regex: "EQ|LT|GT|NE|GE|LE|OR|XOR"
          }, {
            token: "paren.lparen",
            regex: "[\\[]"
          }, {
            token: "paren.rparen",
            regex: "[\\]]"
          }, {
            token: "text",
            regex: "\\s+"
          }]
        };
      };
      oop.inherits(GcodeHighlightRules, TextHighlightRules);
      exports2.GcodeHighlightRules = GcodeHighlightRules;
    });
    ace.define("ace/mode/gcode", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/gcode_highlight_rules", "ace/range"], function(require2, exports2, module2) {
      var oop = require2("../lib/oop");
      var TextMode = require2("./text").Mode;
      var GcodeHighlightRules = require2("./gcode_highlight_rules").GcodeHighlightRules;
      require2("../range").Range;
      var Mode = function() {
        this.HighlightRules = GcodeHighlightRules;
        this.$behaviour = this.$defaultBehaviour;
      };
      oop.inherits(Mode, TextMode);
      (function() {
        this.$id = "ace/mode/gcode";
      }).call(Mode.prototype);
      exports2.Mode = Mode;
    });
    (function() {
      ace.require(["ace/mode/gcode"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(modeGcode$2);
  return modeGcode$2.exports;
}
var modeGcodeExports = requireModeGcode();
const modeGcode = /* @__PURE__ */ getDefaultExportFromCjs(modeGcodeExports);
const modeGcode$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: modeGcode
}, [modeGcodeExports]);
export {
  modeGcode$1 as m
};
