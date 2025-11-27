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
var modeProperties$2 = { exports: {} };
var hasRequiredModeProperties;
function requireModeProperties() {
  if (hasRequiredModeProperties) return modeProperties$2.exports;
  hasRequiredModeProperties = 1;
  (function(module, exports) {
    ace.define("ace/mode/properties_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules"], function(require2, exports2, module2) {
      var oop = require2("../lib/oop");
      var TextHighlightRules = require2("./text_highlight_rules").TextHighlightRules;
      var PropertiesHighlightRules = function() {
        var escapeRe = /\\u[0-9a-fA-F]{4}|\\/;
        this.$rules = {
          "start": [
            {
              token: "comment",
              regex: /[!#].*$/
            },
            {
              token: "keyword",
              regex: /[=:]$/
            },
            {
              token: "keyword",
              regex: /[=:]/,
              next: "value"
            },
            {
              token: "constant.language.escape",
              regex: escapeRe
            },
            {
              defaultToken: "variable"
            }
          ],
          "value": [
            {
              regex: /\\$/,
              token: "string",
              next: "value"
            },
            {
              regex: /$/,
              token: "string",
              next: "start"
            },
            {
              token: "constant.language.escape",
              regex: escapeRe
            },
            {
              defaultToken: "string"
            }
          ]
        };
      };
      oop.inherits(PropertiesHighlightRules, TextHighlightRules);
      exports2.PropertiesHighlightRules = PropertiesHighlightRules;
    });
    ace.define("ace/mode/properties", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/properties_highlight_rules"], function(require2, exports2, module2) {
      var oop = require2("../lib/oop");
      var TextMode = require2("./text").Mode;
      var PropertiesHighlightRules = require2("./properties_highlight_rules").PropertiesHighlightRules;
      var Mode = function() {
        this.HighlightRules = PropertiesHighlightRules;
        this.$behaviour = this.$defaultBehaviour;
      };
      oop.inherits(Mode, TextMode);
      (function() {
        this.$id = "ace/mode/properties";
      }).call(Mode.prototype);
      exports2.Mode = Mode;
    });
    (function() {
      ace.require(["ace/mode/properties"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(modeProperties$2);
  return modeProperties$2.exports;
}
var modePropertiesExports = requireModeProperties();
const modeProperties = /* @__PURE__ */ getDefaultExportFromCjs(modePropertiesExports);
const modeProperties$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: modeProperties
}, [modePropertiesExports]);
export {
  modeProperties$1 as m
};
