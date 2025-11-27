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
var modeMips$2 = { exports: {} };
var hasRequiredModeMips;
function requireModeMips() {
  if (hasRequiredModeMips) return modeMips$2.exports;
  hasRequiredModeMips = 1;
  (function(module, exports) {
    ace.define("ace/mode/mips_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules"], function(require2, exports2, module2) {
      var oop = require2("../lib/oop");
      var TextHighlightRules = require2("./text_highlight_rules").TextHighlightRules;
      var MIPSHighlightRules = function() {
        var escapeRe = /\\(?:['"?\\abfnrtv]|[0-7]{1,3}|x[a-fA-F\d]{2}|u[a-fA-F\d]{4}U[a-fA-F\d]{8}|.)/.source;
        this.$rules = {
          start: [{
            token: "storage.modifier.mips",
            regex: /\.\b(?:align|ascii|asciiz|byte|double|extern|float|globl|space|word)\b/,
            comment: "Assembler directives for data storage"
          }, {
            token: "entity.name.section.mips",
            regex: /\.\b(?:data|text|kdata|ktext|)\b/,
            comment: "Segements: .data .text"
          }, {
            token: "variable.parameter.mips",
            regex: /\$(?:(?:3[01]|[12]?[0-9]|[0-9])|zero|at|v[01]|a[0-3]|s[0-7]|t[0-9]|k[01]|gp|sp|fp|ra)/,
            comment: "Registers by id $1, $2, ..."
          }, {
            token: "variable.parameter.mips",
            regex: /\$f(?:[0-9]|[1-2][0-9]|3[0-1])/,
            comment: "Floating point registers"
          }, {
            token: "support.function.source.mips",
            regex: /\b(?:(?:add|sub|div|l|mov|mult|neg|s|c\.eq|c\.le|c\.lt)\.[ds]|cvt\.s\.[dw]|cvt\.d\.[sw]|cvt\.w\.[ds]|bc1[tf])\b/,
            comment: "The MIPS floating-point instruction set"
          }, {
            token: "support.function.source.mips",
            regex: /\b(?:add|addu|addi|addiu|sub|subu|and|andi|or|not|ori|nor|xor|xori|slt|sltu|slti|sltiu|sll|sllv|rol|srl|sra|srlv|ror|j|jr|jal|beq|bne|lw|sw|lb|sb|lui|move|mfhi|mflo|mthi|mtlo)\b/,
            comment: "Just the hardcoded instructions provided by the MIPS assembly language"
          }, {
            token: "support.function.other.mips",
            regex: /\b(?:abs|b|beqz|bge|bgt|bgtu|ble|bleu|blt|bltu|bnez|div|divu|la|li|move|mul|neg|not|rem|remu|seq|sge|sgt|sle|sne)\b/,
            comment: "Pseudo instructions"
          }, {
            token: "entity.name.function.mips",
            regex: /\bsyscall\b/,
            comment: "Other"
          }, {
            token: "string",
            regex: `(?:'")(?:` + escapeRe + `|.)?(?:'")`
          }, {
            token: "string.start",
            regex: "'",
            stateName: "qstring",
            next: [
              { token: "string", regex: /\\\s*$/, next: "qqstring" },
              { token: "constant.language.escape", regex: escapeRe },
              { token: "string.end", regex: "'|$", next: "start" },
              { defaultToken: "string" }
            ]
          }, {
            token: "string.start",
            regex: '"',
            stateName: "qqstring",
            next: [
              { token: "string", regex: /\\\s*$/, next: "qqstring" },
              { token: "constant.language.escape", regex: escapeRe },
              { token: "string.end", regex: '"|$', next: "start" },
              { defaultToken: "string" }
            ]
          }, {
            token: "constant.numeric.mips",
            regex: /\b(?:\d+|0(?:x|X)[a-fA-F0-9]+)\b/,
            comment: "Numbers like +12, -3, 55, 0x3F"
          }, {
            token: "entity.name.tag.mips",
            regex: /\b[\w]+\b:/,
            comment: "Labels at line start: begin_repeat: add ..."
          }, {
            token: "comment.assembly",
            regex: /#.*$/,
            comment: "Single line comments"
          }]
        };
        this.normalizeRules();
      };
      MIPSHighlightRules.metaData = {
        fileTypes: ["s", "asm"],
        name: "MIPS",
        scopeName: "source.mips"
      };
      oop.inherits(MIPSHighlightRules, TextHighlightRules);
      exports2.MIPSHighlightRules = MIPSHighlightRules;
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
    ace.define("ace/mode/mips", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/mips_highlight_rules", "ace/mode/folding/cstyle"], function(require2, exports2, module2) {
      var oop = require2("../lib/oop");
      var TextMode = require2("./text").Mode;
      var MIPSHighlightRules = require2("./mips_highlight_rules").MIPSHighlightRules;
      var FoldMode = require2("./folding/cstyle").FoldMode;
      var Mode = function() {
        this.HighlightRules = MIPSHighlightRules;
        this.foldingRules = new FoldMode();
      };
      oop.inherits(Mode, TextMode);
      (function() {
        this.lineCommentStart = ["#"];
        this.$id = "ace/mode/mips";
      }).call(Mode.prototype);
      exports2.Mode = Mode;
    });
    (function() {
      ace.require(["ace/mode/mips"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(modeMips$2);
  return modeMips$2.exports;
}
var modeMipsExports = requireModeMips();
const modeMips = /* @__PURE__ */ getDefaultExportFromCjs(modeMipsExports);
const modeMips$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: modeMips
}, [modeMipsExports]);
export {
  modeMips$1 as m
};
