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
var modeLucene$2 = { exports: {} };
var hasRequiredModeLucene;
function requireModeLucene() {
  if (hasRequiredModeLucene) return modeLucene$2.exports;
  hasRequiredModeLucene = 1;
  (function(module, exports) {
    ace.define("ace/mode/lucene_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules"], function(require2, exports2, module2) {
      var oop = require2("../lib/oop");
      var TextHighlightRules = require2("./text_highlight_rules").TextHighlightRules;
      var LuceneHighlightRules = function() {
        this.$rules = {
          "start": [
            {
              token: "constant.language.escape",
              regex: /\\[\-+&|!(){}\[\]^"~*?:\\]/
            },
            {
              token: "constant.character.negation",
              regex: "\\-"
            },
            {
              token: "constant.character.interro",
              regex: "\\?"
            },
            {
              token: "constant.character.required",
              regex: "\\+"
            },
            {
              token: "constant.character.asterisk",
              regex: "\\*"
            },
            {
              token: "constant.character.proximity",
              regex: "~(?:0\\.[0-9]+|[0-9]+)?"
            },
            {
              token: "keyword.operator",
              regex: "(AND|OR|NOT|TO)\\b"
            },
            {
              token: "paren.lparen",
              regex: "[\\(\\{\\[]"
            },
            {
              token: "paren.rparen",
              regex: "[\\)\\}\\]]"
            },
            {
              token: "keyword.operator",
              regex: /[><=^]/
            },
            {
              token: "constant.numeric",
              regex: /\d[\d.-]*/
            },
            {
              token: "string",
              regex: /"(?:\\"|[^"])*"/
            },
            {
              token: "keyword",
              regex: /(?:\\.|[^\s\-+&|!(){}\[\]^"~*?:\\])+:/,
              next: "maybeRegex"
            },
            {
              token: "term",
              regex: /\w+/
            },
            {
              token: "text",
              regex: /\s+/
            }
          ],
          "maybeRegex": [{
            token: "text",
            regex: /\s+/
          }, {
            token: "string.regexp.start",
            regex: "/",
            next: "regex"
          }, {
            regex: "",
            next: "start"
          }],
          "regex": [
            {
              token: "regexp.keyword.operator",
              regex: "\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)"
            },
            {
              token: "string.regexp.end",
              regex: "/[sxngimy]*",
              next: "no_regex"
            },
            {
              token: "invalid",
              regex: /\{\d+\b,?\d*\}[+*]|[+*$^?][+*]|[$^][?]|\?{3,}/
            },
            {
              token: "constant.language.escape",
              regex: /\(\?[:=!]|\)|\{\d+\b,?\d*\}|[+*]\?|[()$^+*?.]/
            },
            {
              token: "constant.language.escape",
              regex: "<d+-d+>|[~&@]"
            },
            {
              token: "constant.language.delimiter",
              regex: /\|/
            },
            {
              token: "constant.language.escape",
              regex: /\[\^?/,
              next: "regex_character_class"
            },
            {
              token: "empty",
              regex: "$",
              next: "no_regex"
            },
            {
              defaultToken: "string.regexp"
            }
          ],
          "regex_character_class": [
            {
              token: "regexp.charclass.keyword.operator",
              regex: "\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)"
            },
            {
              token: "constant.language.escape",
              regex: "]",
              next: "regex"
            },
            {
              token: "constant.language.escape",
              regex: "-"
            },
            {
              token: "empty",
              regex: "$",
              next: "no_regex"
            },
            {
              defaultToken: "string.regexp.charachterclass"
            }
          ]
        };
      };
      oop.inherits(LuceneHighlightRules, TextHighlightRules);
      exports2.LuceneHighlightRules = LuceneHighlightRules;
    });
    ace.define("ace/mode/lucene", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/lucene_highlight_rules"], function(require2, exports2, module2) {
      var oop = require2("../lib/oop");
      var TextMode = require2("./text").Mode;
      var LuceneHighlightRules = require2("./lucene_highlight_rules").LuceneHighlightRules;
      var Mode = function() {
        this.HighlightRules = LuceneHighlightRules;
        this.$behaviour = this.$defaultBehaviour;
      };
      oop.inherits(Mode, TextMode);
      (function() {
        this.$id = "ace/mode/lucene";
      }).call(Mode.prototype);
      exports2.Mode = Mode;
    });
    (function() {
      ace.require(["ace/mode/lucene"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(modeLucene$2);
  return modeLucene$2.exports;
}
var modeLuceneExports = requireModeLucene();
const modeLucene = /* @__PURE__ */ getDefaultExportFromCjs(modeLuceneExports);
const modeLucene$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: modeLucene
}, [modeLuceneExports]);
export {
  modeLucene$1 as m
};
