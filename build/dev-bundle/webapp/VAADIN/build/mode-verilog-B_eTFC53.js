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
var modeVerilog$2 = { exports: {} };
var hasRequiredModeVerilog;
function requireModeVerilog() {
  if (hasRequiredModeVerilog) return modeVerilog$2.exports;
  hasRequiredModeVerilog = 1;
  (function(module, exports) {
    ace.define("ace/mode/verilog_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules"], function(require2, exports2, module2) {
      var oop = require2("../lib/oop");
      var TextHighlightRules = require2("./text_highlight_rules").TextHighlightRules;
      var VerilogHighlightRules = function() {
        var keywords = "always|and|assign|automatic|begin|buf|bufif0|bufif1|case|casex|casez|cell|cmos|config|deassign|default|defparam|design|disable|edge|else|end|endcase|endconfig|endfunction|endgenerate|endmodule|endprimitive|endspecify|endtable|endtask|event|for|force|forever|fork|function|generate|genvar|highz0|highz1|if|ifnone|incdir|include|initial|inout|input|instance|integer|join|large|liblist|library|localparam|macromodule|medium|module|nand|negedge|nmos|nor|noshowcancelled|not|notif0|notif1|or|output|parameter|pmos|posedge|primitive|pull0|pull1|pulldown|pullup|pulsestyle_onevent|pulsestyle_ondetect|rcmos|real|realtime|reg|release|repeat|rnmos|rpmos|rtran|rtranif0|rtranif1|scalared|showcancelled|signed|small|specify|specparam|strong0|strong1|supply0|supply1|table|task|time|tran|tranif0|tranif1|tri|tri0|tri1|triand|trior|trireg|unsigned|use|vectored|wait|wand|weak0|weak1|while|wire|wor|xnor|xorbegin|bufif0|bufif1|case|casex|casez|config|else|end|endcase|endconfig|endfunction|endgenerate|endmodule|endprimitive|endspecify|endtable|endtask|for|forever|function|generate|if|ifnone|macromodule|module|primitive|repeat|specify|table|task|while";
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
            regex: "//.*$"
          }, {
            token: "comment.start",
            regex: "/\\*",
            next: [
              { token: "comment.end", regex: "\\*/", next: "start" },
              { defaultToken: "comment" }
            ]
          }, {
            token: "string.start",
            regex: '"',
            next: [
              { token: "constant.language.escape", regex: /\\(?:[ntvfa\\"]|[0-7]{1,3}|\x[a-fA-F\d]{1,2}|)/, consumeLineEnd: true },
              { token: "string.end", regex: '"|$', next: "start" },
              { defaultToken: "string" }
            ]
          }, {
            token: "string",
            regex: "'^[']'"
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
        this.normalizeRules();
      };
      oop.inherits(VerilogHighlightRules, TextHighlightRules);
      exports2.VerilogHighlightRules = VerilogHighlightRules;
    });
    ace.define("ace/mode/verilog", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/verilog_highlight_rules", "ace/range"], function(require2, exports2, module2) {
      var oop = require2("../lib/oop");
      var TextMode = require2("./text").Mode;
      var VerilogHighlightRules = require2("./verilog_highlight_rules").VerilogHighlightRules;
      require2("../range").Range;
      var Mode = function() {
        this.HighlightRules = VerilogHighlightRules;
        this.$behaviour = this.$defaultBehaviour;
      };
      oop.inherits(Mode, TextMode);
      (function() {
        this.lineCommentStart = "//";
        this.blockComment = { start: "/*", end: "*/" };
        this.$quotes = { '"': '"' };
        this.$id = "ace/mode/verilog";
      }).call(Mode.prototype);
      exports2.Mode = Mode;
    });
    (function() {
      ace.require(["ace/mode/verilog"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(modeVerilog$2);
  return modeVerilog$2.exports;
}
var modeVerilogExports = requireModeVerilog();
const modeVerilog = /* @__PURE__ */ getDefaultExportFromCjs(modeVerilogExports);
const modeVerilog$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: modeVerilog
}, [modeVerilogExports]);
export {
  modeVerilog$1 as m
};
