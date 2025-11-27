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
var modePlsql$2 = { exports: {} };
var hasRequiredModePlsql;
function requireModePlsql() {
  if (hasRequiredModePlsql) return modePlsql$2.exports;
  hasRequiredModePlsql = 1;
  (function(module, exports) {
    ace.define("ace/mode/plsql_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules"], function(require2, exports2, module2) {
      var oop = require2("../lib/oop");
      var TextHighlightRules = require2("./text_highlight_rules").TextHighlightRules;
      var plsqlHighlightRules = function() {
        var keywords = "all|alter|and|any|array|arrow|as|asc|at|begin|between|by|case|check|clusters|cluster|colauth|columns|compress|connect|crash|create|cross|current|database|declare|default|delete|desc|distinct|drop|else|end|exception|exclusive|exists|fetch|form|for|foreign|from|goto|grant|group|having|identified|if|in|inner|indexes|index|insert|intersect|into|is|join|key|left|like|lock|minus|mode|natural|nocompress|not|nowait|null|of|on|option|or|order,overlaps|outer|primary|prior|procedure|public|range|record|references|resource|revoke|right|select|share|size|sql|start|subtype|tabauth|table|then|to|type|union|unique|update|use|values|view|views|when|where|with";
        var builtinConstants = "true|false";
        var builtinFunctions = "abs|acos|add_months|ascii|asciistr|asin|atan|atan2|avg|bfilename|bin_to_num|bitand|cardinality|case|cast|ceil|chartorowid|chr|coalesce|compose|concat|convert|corr|cos|cosh|count|covar_pop|covar_samp|cume_dist|current_date|current_timestamp|dbtimezone|decode|decompose|dense_rank|dump|empty_blob|empty_clob|exp|extract|first_value|floor|from_tz|greatest|group_id|hextoraw|initcap|instr|instr2|instr4|instrb|instrc|lag|last_day|last_value|lead|least|length|length2|length4|lengthb|lengthc|listagg|ln|lnnvl|localtimestamp|log|lower|lpad|ltrim|max|median|min|mod|months_between|nanvl|nchr|new_time|next_day|nth_value|nullif|numtodsinterval|numtoyminterval|nvl|nvl2|power|rank|rawtohex|regexp_count|regexp_instr|regexp_replace|regexp_substr|remainder|replace|round|rownum|rpad|rtrim|sessiontimezone|sign|sin|sinh|soundex|sqrt|stddev|substr|sum|sys_context|sysdate|systimestamp|tan|tanh|to_char|to_clob|to_date|to_dsinterval|to_lob|to_multi_byte|to_nclob|to_number|to_single_byte|to_timestamp|to_timestamp_tz|to_yminterval|translate|trim|trunc|tz_offset|uid|upper|user|userenv|var_pop|var_samp|variance|vsize";
        var dataTypes = "char|nchar|nvarchar2|varchar2|long|raw|number|numeric|float|dec|decimal|integer|int|smallint|real|double|precision|date|timestamp|interval|year|day|bfile|blob|clob|nclob|rowid|urowid";
        var keywordMapper = this.createKeywordMapper({
          "support.function": builtinFunctions,
          "keyword": keywords,
          "constant.language": builtinConstants,
          "storage.type": dataTypes
        }, "identifier", true);
        this.$rules = {
          "start": [{
            token: "comment",
            regex: "--.*$"
          }, {
            token: "comment",
            start: "/\\*",
            end: "\\*/"
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
        this.normalizeRules();
      };
      oop.inherits(plsqlHighlightRules, TextHighlightRules);
      exports2.plsqlHighlightRules = plsqlHighlightRules;
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
    ace.define("ace/mode/folding/sql", ["require", "exports", "module", "ace/lib/oop", "ace/mode/folding/cstyle"], function(require2, exports2, module2) {
      var oop = require2("../../lib/oop");
      var BaseFoldMode = require2("./cstyle").FoldMode;
      var FoldMode = exports2.FoldMode = function() {
      };
      oop.inherits(FoldMode, BaseFoldMode);
      (function() {
      }).call(FoldMode.prototype);
    });
    ace.define("ace/mode/plsql", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/plsql_highlight_rules", "ace/mode/folding/sql"], function(require2, exports2, module2) {
      var oop = require2("../lib/oop");
      var TextMode = require2("./text").Mode;
      var PLSqlHighlightRules = require2("./plsql_highlight_rules").plsqlHighlightRules;
      var FoldMode = require2("./folding/sql").FoldMode;
      var Mode = function() {
        this.HighlightRules = PLSqlHighlightRules;
        this.foldingRules = new FoldMode();
      };
      oop.inherits(Mode, TextMode);
      (function() {
        this.lineCommentStart = "--";
        this.blockComment = { start: "/*", end: "*/" };
        this.$id = "ace/mode/plsql";
      }).call(Mode.prototype);
      exports2.Mode = Mode;
    });
    (function() {
      ace.require(["ace/mode/plsql"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(modePlsql$2);
  return modePlsql$2.exports;
}
var modePlsqlExports = requireModePlsql();
const modePlsql = /* @__PURE__ */ getDefaultExportFromCjs(modePlsqlExports);
const modePlsql$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: modePlsql
}, [modePlsqlExports]);
export {
  modePlsql$1 as m
};
