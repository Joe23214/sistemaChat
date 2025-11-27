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
var extLinking$2 = { exports: {} };
var hasRequiredExtLinking;
function requireExtLinking() {
  if (hasRequiredExtLinking) return extLinking$2.exports;
  hasRequiredExtLinking = 1;
  (function(module, exports) {
    ace.define("ace/ext/linking", ["require", "exports", "module", "ace/editor", "ace/config"], function(require2, exports2, module2) {
      var Editor = require2("../editor").Editor;
      require2("../config").defineOptions(Editor.prototype, "editor", {
        enableLinking: {
          set: function(val) {
            if (val) {
              this.on("click", onClick);
              this.on("mousemove", onMouseMove);
            } else {
              this.off("click", onClick);
              this.off("mousemove", onMouseMove);
            }
          },
          value: false
        }
      });
      exports2.previousLinkingHover = false;
      function onMouseMove(e) {
        var editor = e.editor;
        var ctrl = e.getAccelKey();
        if (ctrl) {
          var editor = e.editor;
          var docPos = e.getDocumentPosition();
          var session = editor.session;
          var token = session.getTokenAt(docPos.row, docPos.column);
          if (exports2.previousLinkingHover && exports2.previousLinkingHover != token) {
            editor._emit("linkHoverOut");
          }
          editor._emit("linkHover", { position: docPos, token });
          exports2.previousLinkingHover = token;
        } else if (exports2.previousLinkingHover) {
          editor._emit("linkHoverOut");
          exports2.previousLinkingHover = false;
        }
      }
      function onClick(e) {
        var ctrl = e.getAccelKey();
        var button = e.getButton();
        if (button == 0 && ctrl) {
          var editor = e.editor;
          var docPos = e.getDocumentPosition();
          var session = editor.session;
          var token = session.getTokenAt(docPos.row, docPos.column);
          editor._emit("linkClick", { position: docPos, token });
        }
      }
    });
    (function() {
      ace.require(["ace/ext/linking"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(extLinking$2);
  return extLinking$2.exports;
}
var extLinkingExports = requireExtLinking();
const extLinking = /* @__PURE__ */ getDefaultExportFromCjs(extLinkingExports);
const extLinking$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: extLinking
}, [extLinkingExports]);
export {
  extLinking$1 as e
};
