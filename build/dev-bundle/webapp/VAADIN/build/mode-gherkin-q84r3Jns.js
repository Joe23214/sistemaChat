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
var modeGherkin$2 = { exports: {} };
var hasRequiredModeGherkin;
function requireModeGherkin() {
  if (hasRequiredModeGherkin) return modeGherkin$2.exports;
  hasRequiredModeGherkin = 1;
  (function(module, exports) {
    ace.define("ace/mode/gherkin_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules"], function(require2, exports2, module2) {
      var oop = require2("../lib/oop");
      var TextHighlightRules = require2("./text_highlight_rules").TextHighlightRules;
      var stringEscape = `\\\\(x[0-9A-Fa-f]{2}|[0-7]{3}|[\\\\abfnrtv'"]|U[0-9A-Fa-f]{8}|u[0-9A-Fa-f]{4})`;
      var GherkinHighlightRules = function() {
        var languages = [
          {
            name: "en",
            labels: "Feature|Background|Scenario(?: Outline)?|Examples",
            keywords: "Given|When|Then|And|But"
          }
        ];
        var labels = languages.map(function(l) {
          return l.labels;
        }).join("|");
        var keywords = languages.map(function(l) {
          return l.keywords;
        }).join("|");
        this.$rules = {
          start: [{
            token: "constant.numeric",
            regex: "(?:(?:[1-9]\\d*)|(?:0))"
          }, {
            token: "comment",
            regex: "#.*$"
          }, {
            token: "keyword",
            regex: "(?:" + labels + "):|(?:" + keywords + ")\\b"
          }, {
            token: "keyword",
            regex: "\\*"
          }, {
            token: "string",
            regex: '"{3}',
            next: "qqstring3"
          }, {
            token: "string",
            regex: '"',
            next: "qqstring"
          }, {
            token: "text",
            regex: "^\\s*(?=@[\\w])",
            next: [{
              token: "text",
              regex: "\\s+"
            }, {
              token: "variable.parameter",
              regex: "@[\\w]+"
            }, {
              token: "empty",
              regex: "",
              next: "start"
            }]
          }, {
            token: "comment",
            regex: "<[^>]+>"
          }, {
            token: "comment",
            regex: "\\|(?=.)",
            next: "table-item"
          }, {
            token: "comment",
            regex: "\\|$",
            next: "start"
          }],
          "qqstring3": [{
            token: "constant.language.escape",
            regex: stringEscape
          }, {
            token: "string",
            regex: '"{3}',
            next: "start"
          }, {
            defaultToken: "string"
          }],
          "qqstring": [{
            token: "constant.language.escape",
            regex: stringEscape
          }, {
            token: "string",
            regex: "\\\\$",
            next: "qqstring"
          }, {
            token: "string",
            regex: '"|$',
            next: "start"
          }, {
            defaultToken: "string"
          }],
          "table-item": [{
            token: "comment",
            regex: /$/,
            next: "start"
          }, {
            token: "comment",
            regex: /\|/
          }, {
            token: "string",
            regex: /\\./
          }, {
            defaultToken: "string"
          }]
        };
        this.normalizeRules();
      };
      oop.inherits(GherkinHighlightRules, TextHighlightRules);
      exports2.GherkinHighlightRules = GherkinHighlightRules;
    });
    ace.define("ace/mode/gherkin", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/gherkin_highlight_rules"], function(require2, exports2, module2) {
      var oop = require2("../lib/oop");
      var TextMode = require2("./text").Mode;
      var GherkinHighlightRules = require2("./gherkin_highlight_rules").GherkinHighlightRules;
      var Mode = function() {
        this.HighlightRules = GherkinHighlightRules;
        this.$behaviour = this.$defaultBehaviour;
      };
      oop.inherits(Mode, TextMode);
      (function() {
        this.lineCommentStart = "#";
        this.$id = "ace/mode/gherkin";
        this.getNextLineIndent = function(state, line, tab) {
          var indent = this.$getIndent(line);
          var space2 = "  ";
          var tokenizedLine = this.getTokenizer().getLineTokens(line, state);
          var tokens = tokenizedLine.tokens;
          if (line.match("[ ]*\\|")) {
            indent += "| ";
          }
          if (tokens.length && tokens[tokens.length - 1].type == "comment") {
            return indent;
          }
          if (state == "start") {
            if (line.match("Scenario:|Feature:|Scenario Outline:|Background:")) {
              indent += space2;
            } else if (line.match("(Given|Then).+(:)$|Examples:")) {
              indent += space2;
            } else if (line.match("\\*.+")) {
              indent += "* ";
            }
          }
          return indent;
        };
      }).call(Mode.prototype);
      exports2.Mode = Mode;
    });
    (function() {
      ace.require(["ace/mode/gherkin"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(modeGherkin$2);
  return modeGherkin$2.exports;
}
var modeGherkinExports = requireModeGherkin();
const modeGherkin = /* @__PURE__ */ getDefaultExportFromCjs(modeGherkinExports);
const modeGherkin$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: modeGherkin
}, [modeGherkinExports]);
export {
  modeGherkin$1 as m
};
