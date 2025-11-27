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
var extStatusbar$2 = { exports: {} };
var hasRequiredExtStatusbar;
function requireExtStatusbar() {
  if (hasRequiredExtStatusbar) return extStatusbar$2.exports;
  hasRequiredExtStatusbar = 1;
  (function(module, exports) {
    ace.define("ace/ext/statusbar", ["require", "exports", "module", "ace/lib/dom", "ace/lib/lang"], function(require2, exports2, module2) {
      var dom = require2("../lib/dom");
      var lang = require2("../lib/lang");
      var StatusBar = (
        /** @class */
        function() {
          function StatusBar2(editor, parentNode) {
            this.element = dom.createElement("div");
            this.element.className = "ace_status-indicator";
            this.element.style.cssText = "display: inline-block;";
            parentNode.appendChild(this.element);
            var statusUpdate = lang.delayedCall((function() {
              this.updateStatus(editor);
            }).bind(this)).schedule.bind(null, 100);
            editor.on("changeStatus", statusUpdate);
            editor.on("changeSelection", statusUpdate);
            editor.on("keyboardActivity", statusUpdate);
          }
          StatusBar2.prototype.updateStatus = function(editor) {
            var status = [];
            function add(str, separator) {
              str && status.push(str, separator || "|");
            }
            add(editor.keyBinding.getStatusText(editor));
            if (editor.commands.recording)
              add("REC");
            var sel = editor.selection;
            var c = sel.lead;
            if (!sel.isEmpty()) {
              var r = editor.getSelectionRange();
              add("(" + (r.end.row - r.start.row) + ":" + (r.end.column - r.start.column) + ")", " ");
            }
            add(c.row + ":" + c.column, " ");
            if (sel.rangeCount)
              add("[" + sel.rangeCount + "]", " ");
            status.pop();
            this.element.textContent = status.join("");
          };
          return StatusBar2;
        }()
      );
      exports2.StatusBar = StatusBar;
    });
    (function() {
      ace.require(["ace/ext/statusbar"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(extStatusbar$2);
  return extStatusbar$2.exports;
}
var extStatusbarExports = requireExtStatusbar();
const extStatusbar = /* @__PURE__ */ getDefaultExportFromCjs(extStatusbarExports);
const extStatusbar$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: extStatusbar
}, [extStatusbarExports]);
export {
  extStatusbar$1 as e
};
