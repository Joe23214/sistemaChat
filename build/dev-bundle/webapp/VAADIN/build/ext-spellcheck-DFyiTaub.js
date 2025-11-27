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
var extSpellcheck$2 = { exports: {} };
var hasRequiredExtSpellcheck;
function requireExtSpellcheck() {
  if (hasRequiredExtSpellcheck) return extSpellcheck$2.exports;
  hasRequiredExtSpellcheck = 1;
  (function(module, exports) {
    ace.define("ace/ext/spellcheck", ["require", "exports", "module", "ace/lib/event", "ace/editor", "ace/config"], function(require2, exports2, module2) {
      var event = require2("../lib/event");
      exports2.contextMenuHandler = function(e) {
        var host = e.target;
        var text = host.textInput.getElement();
        if (!host.selection.isEmpty())
          return;
        var c = host.getCursorPosition();
        var r = host.session.getWordRange(c.row, c.column);
        var w = host.session.getTextRange(r);
        host.session.tokenRe.lastIndex = 0;
        if (!host.session.tokenRe.test(w))
          return;
        var PLACEHOLDER = "";
        var value = w + " " + PLACEHOLDER;
        text.value = value;
        text.setSelectionRange(w.length, w.length + 1);
        text.setSelectionRange(0, 0);
        text.setSelectionRange(0, w.length);
        var afterKeydown = false;
        event.addListener(text, "keydown", function onKeydown() {
          event.removeListener(text, "keydown", onKeydown);
          afterKeydown = true;
        });
        host.textInput.setInputHandler(function(newVal) {
          if (newVal == value)
            return "";
          if (newVal.lastIndexOf(value, 0) === 0)
            return newVal.slice(value.length);
          if (newVal.substr(text.selectionEnd) == value)
            return newVal.slice(0, -value.length);
          if (newVal.slice(-2) == PLACEHOLDER) {
            var val = newVal.slice(0, -2);
            if (val.slice(-1) == " ") {
              if (afterKeydown)
                return val.substring(0, text.selectionEnd);
              val = val.slice(0, -1);
              host.session.replace(r, val);
              return "";
            }
          }
          return newVal;
        });
      };
      var Editor = require2("../editor").Editor;
      require2("../config").defineOptions(Editor.prototype, "editor", {
        spellcheck: {
          set: function(val) {
            var text = this.textInput.getElement();
            text.spellcheck = !!val;
            if (!val)
              this.removeListener("nativecontextmenu", exports2.contextMenuHandler);
            else
              this.on("nativecontextmenu", exports2.contextMenuHandler);
          },
          value: true
        }
      });
    });
    (function() {
      ace.require(["ace/ext/spellcheck"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(extSpellcheck$2);
  return extSpellcheck$2.exports;
}
var extSpellcheckExports = requireExtSpellcheck();
const extSpellcheck = /* @__PURE__ */ getDefaultExportFromCjs(extSpellcheckExports);
const extSpellcheck$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: extSpellcheck
}, [extSpellcheckExports]);
export {
  extSpellcheck$1 as e
};
