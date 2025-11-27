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
var modeRst$2 = { exports: {} };
var hasRequiredModeRst;
function requireModeRst() {
  if (hasRequiredModeRst) return modeRst$2.exports;
  hasRequiredModeRst = 1;
  (function(module, exports) {
    ace.define("ace/mode/rst_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/lib/lang", "ace/mode/text_highlight_rules"], function(require2, exports2, module2) {
      var oop = require2("../lib/oop");
      require2("../lib/lang");
      var TextHighlightRules = require2("./text_highlight_rules").TextHighlightRules;
      var RSTHighlightRules = function() {
        var tokens = {
          title: "markup.heading",
          list: "markup.heading",
          table: "constant",
          directive: "keyword.operator",
          entity: "string",
          link: "markup.underline.list",
          bold: "markup.bold",
          italic: "markup.italic",
          literal: "support.function",
          comment: "comment"
        };
        var startStringPrefix = `(^|\\s|["'(<\\[{\\-/:])`;
        var endStringSuffix = `(?:$|(?=\\s|[\\\\.,;!?\\-/:"')>\\]}]))`;
        this.$rules = {
          "start": [
            {
              token: tokens.title,
              regex: "(^)([\\=\\-`:\\.'\"~\\^_\\*\\+#])(\\2{2,}\\s*$)"
            },
            {
              token: ["text", tokens.directive, tokens.literal],
              regex: "(^\\s*\\.\\. )([^: ]+::)(.*$)",
              next: "codeblock"
            },
            {
              token: tokens.directive,
              regex: "::$",
              next: "codeblock"
            },
            {
              token: [tokens.entity, tokens.link],
              regex: "(^\\.\\. _[^:]+:)(.*$)"
            },
            {
              token: [tokens.entity, tokens.link],
              regex: "(^__ )(https?://.*$)"
            },
            {
              token: tokens.entity,
              regex: "^\\.\\. \\[[^\\]]+\\] "
            },
            {
              token: tokens.comment,
              regex: "^\\.\\. .*$",
              next: "comment"
            },
            {
              token: tokens.list,
              regex: "^\\s*[\\*\\+-] "
            },
            {
              token: tokens.list,
              regex: "^\\s*(?:[A-Za-z]|[0-9]+|[ivxlcdmIVXLCDM]+)\\. "
            },
            {
              token: tokens.list,
              regex: "^\\s*\\(?(?:[A-Za-z]|[0-9]+|[ivxlcdmIVXLCDM]+)\\) "
            },
            {
              token: tokens.table,
              regex: "^={2,}(?: +={2,})+$"
            },
            {
              token: tokens.table,
              regex: "^\\+-{2,}(?:\\+-{2,})+\\+$"
            },
            {
              token: tokens.table,
              regex: "^\\+={2,}(?:\\+={2,})+\\+$"
            },
            {
              token: ["text", tokens.literal],
              regex: startStringPrefix + "(``)(?=\\S)",
              next: "code"
            },
            {
              token: ["text", tokens.bold],
              regex: startStringPrefix + "(\\*\\*)(?=\\S)",
              next: "bold"
            },
            {
              token: ["text", tokens.italic],
              regex: startStringPrefix + "(\\*)(?=\\S)",
              next: "italic"
            },
            {
              token: tokens.entity,
              regex: "\\|[\\w\\-]+?\\|"
            },
            {
              token: tokens.entity,
              regex: ":[\\w-:]+:`\\S",
              next: "entity"
            },
            {
              token: ["text", tokens.entity],
              regex: startStringPrefix + "(_`)(?=\\S)",
              next: "entity"
            },
            {
              token: tokens.entity,
              regex: "_[A-Za-z0-9\\-]+?"
            },
            {
              token: ["text", tokens.link],
              regex: startStringPrefix + "(`)(?=\\S)",
              next: "link"
            },
            {
              token: tokens.link,
              regex: "[A-Za-z0-9\\-]+?__?"
            },
            {
              token: tokens.link,
              regex: "\\[[^\\]]+?\\]_"
            },
            {
              token: tokens.link,
              regex: "https?://\\S+"
            },
            {
              token: tokens.table,
              regex: "\\|"
            }
          ],
          "codeblock": [
            {
              token: tokens.literal,
              regex: "^ +.+$",
              next: "codeblock"
            },
            {
              token: tokens.literal,
              regex: "^$",
              next: "codeblock"
            },
            {
              token: "empty",
              regex: "",
              next: "start"
            }
          ],
          "code": [
            {
              token: tokens.literal,
              regex: "\\S``" + endStringSuffix,
              next: "start"
            },
            {
              defaultToken: tokens.literal
            }
          ],
          "bold": [
            {
              token: tokens.bold,
              regex: "\\S\\*\\*" + endStringSuffix,
              next: "start"
            },
            {
              defaultToken: tokens.bold
            }
          ],
          "italic": [
            {
              token: tokens.italic,
              regex: "\\S\\*" + endStringSuffix,
              next: "start"
            },
            {
              defaultToken: tokens.italic
            }
          ],
          "entity": [
            {
              token: tokens.entity,
              regex: "\\S`" + endStringSuffix,
              next: "start"
            },
            {
              defaultToken: tokens.entity
            }
          ],
          "link": [
            {
              token: tokens.link,
              regex: "\\S`__?" + endStringSuffix,
              next: "start"
            },
            {
              defaultToken: tokens.link
            }
          ],
          "comment": [
            {
              token: tokens.comment,
              regex: "^ +.+$",
              next: "comment"
            },
            {
              token: tokens.comment,
              regex: "^$",
              next: "comment"
            },
            {
              token: "empty",
              regex: "",
              next: "start"
            }
          ]
        };
      };
      oop.inherits(RSTHighlightRules, TextHighlightRules);
      exports2.RSTHighlightRules = RSTHighlightRules;
    });
    ace.define("ace/mode/rst", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/rst_highlight_rules"], function(require2, exports2, module2) {
      var oop = require2("../lib/oop");
      var TextMode = require2("./text").Mode;
      var RSTHighlightRules = require2("./rst_highlight_rules").RSTHighlightRules;
      var Mode = function() {
        this.HighlightRules = RSTHighlightRules;
      };
      oop.inherits(Mode, TextMode);
      (function() {
        this.type = "text";
        this.$id = "ace/mode/rst";
        this.snippetFileId = "ace/snippets/rst";
      }).call(Mode.prototype);
      exports2.Mode = Mode;
    });
    (function() {
      ace.require(["ace/mode/rst"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(modeRst$2);
  return modeRst$2.exports;
}
var modeRstExports = requireModeRst();
const modeRst = /* @__PURE__ */ getDefaultExportFromCjs(modeRstExports);
const modeRst$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: modeRst
}, [modeRstExports]);
export {
  modeRst$1 as m
};
