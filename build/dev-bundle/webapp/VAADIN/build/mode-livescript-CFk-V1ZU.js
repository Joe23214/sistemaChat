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
var modeLivescript$2 = { exports: {} };
var hasRequiredModeLivescript;
function requireModeLivescript() {
  if (hasRequiredModeLivescript) return modeLivescript$2.exports;
  hasRequiredModeLivescript = 1;
  (function(module, exports) {
    ace.define("ace/mode/matching_brace_outdent", ["require", "exports", "module", "ace/range"], function(require2, exports2, module2) {
      var Range = require2("../range").Range;
      var MatchingBraceOutdent = function() {
      };
      (function() {
        this.checkOutdent = function(line, input) {
          if (!/^\s+$/.test(line))
            return false;
          return /^\s*\}/.test(input);
        };
        this.autoOutdent = function(doc, row) {
          var line = doc.getLine(row);
          var match = line.match(/^(\s*\})/);
          if (!match)
            return 0;
          var column = match[1].length;
          var openBracePos = doc.findMatchingBracket({ row, column });
          if (!openBracePos || openBracePos.row == row)
            return 0;
          var indent = this.$getIndent(doc.getLine(openBracePos.row));
          doc.replace(new Range(row, 0, row, column - 1), indent);
        };
        this.$getIndent = function(line) {
          return line.match(/^\s*/)[0];
        };
      }).call(MatchingBraceOutdent.prototype);
      exports2.MatchingBraceOutdent = MatchingBraceOutdent;
    });
    ace.define("ace/mode/livescript", ["require", "exports", "module", "ace/tokenizer", "ace/mode/matching_brace_outdent", "ace/mode/behaviour/cstyle", "ace/mode/text"], function(require2, exports2, module2) {
      var identifier, LiveScriptMode, keywordend, stringfill;
      identifier = "(?![\\d\\s])[$\\w\\xAA-\\uFFDC](?:(?!\\s)[$\\w\\xAA-\\uFFDC]|-[A-Za-z])*";
      exports2.Mode = LiveScriptMode = function(superclass) {
        var indenter, prototype = extend$((import$(LiveScriptMode2, superclass).displayName = "LiveScriptMode", LiveScriptMode2), superclass).prototype;
        function LiveScriptMode2() {
          var that;
          this.$tokenizer = new (require2("../tokenizer")).Tokenizer(LiveScriptMode2.Rules);
          if (that = require2("../mode/matching_brace_outdent")) {
            this.$outdent = new that.MatchingBraceOutdent();
          }
          this.$id = "ace/mode/livescript";
          this.$behaviour = new (require2("./behaviour/cstyle")).CstyleBehaviour();
        }
        indenter = RegExp("(?:[({[=:]|[-~]>|\\b(?:e(?:lse|xport)|d(?:o|efault)|t(?:ry|hen)|finally|import(?:\\s*all)?|const|var|let|new|catch(?:\\s*" + identifier + ")?))\\s*$");
        prototype.getNextLineIndent = function(state, line, tab) {
          var indent, tokens;
          indent = this.$getIndent(line);
          tokens = this.$tokenizer.getLineTokens(line, state).tokens;
          if (!(tokens.length && tokens[tokens.length - 1].type === "comment")) {
            if (state === "start" && indenter.test(line)) {
              indent += tab;
            }
          }
          return indent;
        };
        prototype.lineCommentStart = "#";
        prototype.blockComment = { start: "###", end: "###" };
        prototype.checkOutdent = function(state, line, input) {
          var ref$;
          return (ref$ = this.$outdent) != null ? ref$.checkOutdent(line, input) : void 0;
        };
        prototype.autoOutdent = function(state, doc, row) {
          var ref$;
          return (ref$ = this.$outdent) != null ? ref$.autoOutdent(doc, row) : void 0;
        };
        return LiveScriptMode2;
      }(require2("../mode/text").Mode);
      keywordend = "(?![$\\w]|-[A-Za-z]|\\s*:(?![:=]))";
      stringfill = {
        defaultToken: "string"
      };
      LiveScriptMode.Rules = {
        start: [
          {
            token: "keyword",
            regex: "(?:t(?:h(?:is|row|en)|ry|ypeof!?)|c(?:on(?:tinue|st)|a(?:se|tch)|lass)|i(?:n(?:stanceof)?|mp(?:ort(?:\\s+all)?|lements)|[fs])|d(?:e(?:fault|lete|bugger)|o)|f(?:or(?:\\s+own)?|inally|unction)|s(?:uper|witch)|e(?:lse|x(?:tends|port)|val)|a(?:nd|rguments)|n(?:ew|ot)|un(?:less|til)|w(?:hile|ith)|o[fr]|return|break|let|var|loop)" + keywordend
          },
          {
            token: "constant.language",
            regex: "(?:true|false|yes|no|on|off|null|void|undefined)" + keywordend
          },
          {
            token: "invalid.illegal",
            regex: "(?:p(?:ackage|r(?:ivate|otected)|ublic)|i(?:mplements|nterface)|enum|static|yield)" + keywordend
          },
          {
            token: "language.support.class",
            regex: "(?:R(?:e(?:gExp|ferenceError)|angeError)|S(?:tring|yntaxError)|E(?:rror|valError)|Array|Boolean|Date|Function|Number|Object|TypeError|URIError)" + keywordend
          },
          {
            token: "language.support.function",
            regex: "(?:is(?:NaN|Finite)|parse(?:Int|Float)|Math|JSON|(?:en|de)codeURI(?:Component)?)" + keywordend
          },
          {
            token: "variable.language",
            regex: "(?:t(?:hat|il|o)|f(?:rom|allthrough)|it|by|e)" + keywordend
          },
          {
            token: "identifier",
            regex: identifier + "\\s*:(?![:=])"
          },
          {
            token: "variable",
            regex: identifier
          },
          {
            token: "keyword.operator",
            regex: "(?:\\.{3}|\\s+\\?)"
          },
          {
            token: "keyword.variable",
            regex: "(?:@+|::|\\.\\.)",
            next: "key"
          },
          {
            token: "keyword.operator",
            regex: "\\.\\s*",
            next: "key"
          },
          {
            token: "string",
            regex: "\\\\\\S[^\\s,;)}\\]]*"
          },
          {
            token: "string.doc",
            regex: "'''",
            next: "qdoc"
          },
          {
            token: "string.doc",
            regex: '"""',
            next: "qqdoc"
          },
          {
            token: "string",
            regex: "'",
            next: "qstring"
          },
          {
            token: "string",
            regex: '"',
            next: "qqstring"
          },
          {
            token: "string",
            regex: "`",
            next: "js"
          },
          {
            token: "string",
            regex: "<\\[",
            next: "words"
          },
          {
            token: "string.regex",
            regex: "//",
            next: "heregex"
          },
          {
            token: "comment.doc",
            regex: "/\\*",
            next: "comment"
          },
          {
            token: "comment",
            regex: "#.*"
          },
          {
            token: "string.regex",
            regex: "\\/(?:[^[\\/\\n\\\\]*(?:(?:\\\\.|\\[[^\\]\\n\\\\]*(?:\\\\.[^\\]\\n\\\\]*)*\\])[^[\\/\\n\\\\]*)*)\\/[gimy$]{0,4}",
            next: "key"
          },
          {
            token: "constant.numeric",
            regex: "(?:0x[\\da-fA-F][\\da-fA-F_]*|(?:[2-9]|[12]\\d|3[0-6])r[\\da-zA-Z][\\da-zA-Z_]*|(?:\\d[\\d_]*(?:\\.\\d[\\d_]*)?|\\.\\d[\\d_]*)(?:e[+-]?\\d[\\d_]*)?[\\w$]*)"
          },
          {
            token: "lparen",
            regex: "[({[]"
          },
          {
            token: "rparen",
            regex: "[)}\\]]",
            next: "key"
          },
          {
            token: "keyword.operator",
            regex: "[\\^!|&%+\\-]+"
          },
          {
            token: "text",
            regex: "\\s+"
          }
        ],
        heregex: [
          {
            token: "string.regex",
            regex: ".*?//[gimy$?]{0,4}",
            next: "start"
          },
          {
            token: "string.regex",
            regex: "\\s*#{"
          },
          {
            token: "comment.regex",
            regex: "\\s+(?:#.*)?"
          },
          {
            defaultToken: "string.regex"
          }
        ],
        key: [
          {
            token: "keyword.operator",
            regex: "[.?@!]+"
          },
          {
            token: "identifier",
            regex: identifier,
            next: "start"
          },
          {
            token: "text",
            regex: "",
            next: "start"
          }
        ],
        comment: [
          {
            token: "comment.doc",
            regex: ".*?\\*/",
            next: "start"
          },
          {
            defaultToken: "comment.doc"
          }
        ],
        qdoc: [
          {
            token: "string",
            regex: ".*?'''",
            next: "key"
          },
          stringfill
        ],
        qqdoc: [
          {
            token: "string",
            regex: '.*?"""',
            next: "key"
          },
          stringfill
        ],
        qstring: [
          {
            token: "string",
            regex: "[^\\\\']*(?:\\\\.[^\\\\']*)*'",
            next: "key"
          },
          stringfill
        ],
        qqstring: [
          {
            token: "string",
            regex: '[^\\\\"]*(?:\\\\.[^\\\\"]*)*"',
            next: "key"
          },
          stringfill
        ],
        js: [
          {
            token: "string",
            regex: "[^\\\\`]*(?:\\\\.[^\\\\`]*)*`",
            next: "key"
          },
          stringfill
        ],
        words: [
          {
            token: "string",
            regex: ".*?\\]>",
            next: "key"
          },
          stringfill
        ]
      };
      function extend$(sub, sup) {
        function fun() {
        }
        fun.prototype = (sub.superclass = sup).prototype;
        (sub.prototype = new fun()).constructor = sub;
        if (typeof sup.extended == "function")
          sup.extended(sub);
        return sub;
      }
      function import$(obj, src) {
        var own = {}.hasOwnProperty;
        for (var key in src)
          if (own.call(src, key))
            obj[key] = src[key];
        return obj;
      }
    });
    (function() {
      ace.require(["ace/mode/livescript"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(modeLivescript$2);
  return modeLivescript$2.exports;
}
var modeLivescriptExports = requireModeLivescript();
const modeLivescript = /* @__PURE__ */ getDefaultExportFromCjs(modeLivescriptExports);
const modeLivescript$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: modeLivescript
}, [modeLivescriptExports]);
export {
  modeLivescript$1 as m
};
