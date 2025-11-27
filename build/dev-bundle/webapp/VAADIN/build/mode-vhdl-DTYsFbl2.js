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
var modeVhdl$2 = { exports: {} };
var hasRequiredModeVhdl;
function requireModeVhdl() {
  if (hasRequiredModeVhdl) return modeVhdl$2.exports;
  hasRequiredModeVhdl = 1;
  (function(module, exports) {
    ace.define("ace/mode/vhdl_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules"], function(require2, exports2, module2) {
      var oop = require2("../lib/oop");
      var TextHighlightRules = require2("./text_highlight_rules").TextHighlightRules;
      var VHDLHighlightRules = function() {
        var keywords = "access|after|alias|all|architecture|assert|attribute|begin|block|body|buffer|bus|case|component|configuration|context|disconnect|downto|else|elsif|end|entity|exit|file|for|force|function|generate|generic|group|guarded|if|impure|in|inertial|inout|is|label|library|linkage|literal|loop|map|new|next|of|on|or|open|others|out|package|parameter|port|postponed|procedure|process|protected|pure|range|record|register|reject|release|report|return|select|severity|shared|signal|subtype|then|to|transport|type|unaffected|units|until|use|variable|wait|when|while|with";
        var storageType = "bit|bit_vector|boolean|character|integer|line|natural|positive|real|register|signed|std_logic|std_logic_vector|string||text|time|unsigned";
        var storageModifiers = "array|constant";
        var keywordOperators = "abs|and|mod|nand|nor|not|rem|rol|ror|sla|sll|srasrl|xnor|xor";
        var builtinConstants = "true|false|null";
        var keywordMapper = this.createKeywordMapper({
          "keyword.operator": keywordOperators,
          "keyword": keywords,
          "constant.language": builtinConstants,
          "storage.modifier": storageModifiers,
          "storage.type": storageType
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
            regex: "'.*?'"
          }, {
            token: "constant.numeric",
            regex: "[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"
          }, {
            token: "keyword",
            regex: "\\s*(?:library|package|use)\\b"
          }, {
            token: keywordMapper,
            regex: "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
          }, {
            token: "keyword.operator",
            regex: "&|\\*|\\+|\\-|\\/|<|=|>|\\||=>|\\*\\*|:=|\\/=|>=|<=|<>"
          }, {
            token: "punctuation.operator",
            regex: "\\'|\\:|\\,|\\;|\\."
          }, {
            token: "paren.lparen",
            regex: "[[(]"
          }, {
            token: "paren.rparen",
            regex: "[\\])]"
          }, {
            token: "text",
            regex: "\\s+"
          }]
        };
      };
      oop.inherits(VHDLHighlightRules, TextHighlightRules);
      exports2.VHDLHighlightRules = VHDLHighlightRules;
    });
    ace.define("ace/mode/vhdl", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/vhdl_highlight_rules"], function(require2, exports2, module2) {
      var oop = require2("../lib/oop");
      var TextMode = require2("./text").Mode;
      var VHDLHighlightRules = require2("./vhdl_highlight_rules").VHDLHighlightRules;
      var Mode = function() {
        this.HighlightRules = VHDLHighlightRules;
        this.$behaviour = this.$defaultBehaviour;
      };
      oop.inherits(Mode, TextMode);
      (function() {
        this.lineCommentStart = "--";
        this.$id = "ace/mode/vhdl";
      }).call(Mode.prototype);
      exports2.Mode = Mode;
    });
    (function() {
      ace.require(["ace/mode/vhdl"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(modeVhdl$2);
  return modeVhdl$2.exports;
}
var modeVhdlExports = requireModeVhdl();
const modeVhdl = /* @__PURE__ */ getDefaultExportFromCjs(modeVhdlExports);
const modeVhdl$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: modeVhdl
}, [modeVhdlExports]);
export {
  modeVhdl$1 as m
};
