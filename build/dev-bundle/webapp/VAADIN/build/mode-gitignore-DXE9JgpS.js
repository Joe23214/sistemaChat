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
var modeGitignore$2 = { exports: {} };
var hasRequiredModeGitignore;
function requireModeGitignore() {
  if (hasRequiredModeGitignore) return modeGitignore$2.exports;
  hasRequiredModeGitignore = 1;
  (function(module, exports) {
    ace.define("ace/mode/gitignore_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules"], function(require2, exports2, module2) {
      var oop = require2("../lib/oop");
      var TextHighlightRules = require2("./text_highlight_rules").TextHighlightRules;
      var GitignoreHighlightRules = function() {
        this.$rules = {
          "start": [
            {
              token: "comment",
              regex: /^\s*#.*$/
            },
            {
              token: "keyword",
              regex: /^\s*!.*$/
            }
          ]
        };
        this.normalizeRules();
      };
      GitignoreHighlightRules.metaData = {
        fileTypes: ["gitignore"],
        name: "Gitignore"
      };
      oop.inherits(GitignoreHighlightRules, TextHighlightRules);
      exports2.GitignoreHighlightRules = GitignoreHighlightRules;
    });
    ace.define("ace/mode/gitignore", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/gitignore_highlight_rules"], function(require2, exports2, module2) {
      var oop = require2("../lib/oop");
      var TextMode = require2("./text").Mode;
      var GitignoreHighlightRules = require2("./gitignore_highlight_rules").GitignoreHighlightRules;
      var Mode = function() {
        this.HighlightRules = GitignoreHighlightRules;
        this.$behaviour = this.$defaultBehaviour;
      };
      oop.inherits(Mode, TextMode);
      (function() {
        this.lineCommentStart = "#";
        this.$id = "ace/mode/gitignore";
      }).call(Mode.prototype);
      exports2.Mode = Mode;
    });
    (function() {
      ace.require(["ace/mode/gitignore"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(modeGitignore$2);
  return modeGitignore$2.exports;
}
var modeGitignoreExports = requireModeGitignore();
const modeGitignore = /* @__PURE__ */ getDefaultExportFromCjs(modeGitignoreExports);
const modeGitignore$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: modeGitignore
}, [modeGitignoreExports]);
export {
  modeGitignore$1 as m
};
