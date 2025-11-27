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
var modePlain_text$2 = { exports: {} };
var hasRequiredModePlain_text;
function requireModePlain_text() {
  if (hasRequiredModePlain_text) return modePlain_text$2.exports;
  hasRequiredModePlain_text = 1;
  (function(module, exports) {
    ace.define("ace/mode/plain_text", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/text_highlight_rules", "ace/mode/behaviour"], function(require2, exports2, module2) {
      var oop = require2("../lib/oop");
      var TextMode = require2("./text").Mode;
      var TextHighlightRules = require2("./text_highlight_rules").TextHighlightRules;
      var Behaviour = require2("./behaviour").Behaviour;
      var Mode = function() {
        this.HighlightRules = TextHighlightRules;
        this.$behaviour = new Behaviour();
      };
      oop.inherits(Mode, TextMode);
      (function() {
        this.type = "text";
        this.getNextLineIndent = function(state, line, tab) {
          return "";
        };
        this.$id = "ace/mode/plain_text";
      }).call(Mode.prototype);
      exports2.Mode = Mode;
    });
    (function() {
      ace.require(["ace/mode/plain_text"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(modePlain_text$2);
  return modePlain_text$2.exports;
}
var modePlain_textExports = requireModePlain_text();
const modePlain_text = /* @__PURE__ */ getDefaultExportFromCjs(modePlain_textExports);
const modePlain_text$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: modePlain_text
}, [modePlain_textExports]);
export {
  modePlain_text$1 as m
};
