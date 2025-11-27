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
var extSplit$2 = { exports: {} };
var hasRequiredExtSplit;
function requireExtSplit() {
  if (hasRequiredExtSplit) return extSplit$2.exports;
  hasRequiredExtSplit = 1;
  (function(module, exports) {
    ace.define("ace/split", ["require", "exports", "module", "ace/lib/oop", "ace/lib/lang", "ace/lib/event_emitter", "ace/editor", "ace/virtual_renderer", "ace/edit_session"], function(require2, exports2, module2) {
      var oop = require2("./lib/oop");
      require2("./lib/lang");
      var EventEmitter = require2("./lib/event_emitter").EventEmitter;
      var Editor = require2("./editor").Editor;
      var Renderer = require2("./virtual_renderer").VirtualRenderer;
      var EditSession = require2("./edit_session").EditSession;
      var Split = function(container, theme, splits) {
        this.BELOW = 1;
        this.BESIDE = 0;
        this.$container = container;
        this.$theme = theme;
        this.$splits = 0;
        this.$editorCSS = "";
        this.$editors = [];
        this.$orientation = this.BESIDE;
        this.setSplits(splits || 1);
        this.$cEditor = this.$editors[0];
        this.on("focus", (function(editor) {
          this.$cEditor = editor;
        }).bind(this));
      };
      (function() {
        oop.implement(this, EventEmitter);
        this.$createEditor = function() {
          var el = document.createElement("div");
          el.className = this.$editorCSS;
          el.style.cssText = "position: absolute; top:0px; bottom:0px";
          this.$container.appendChild(el);
          var editor = new Editor(new Renderer(el, this.$theme));
          editor.on("focus", (function() {
            this._emit("focus", editor);
          }).bind(this));
          this.$editors.push(editor);
          editor.setFontSize(this.$fontSize);
          return editor;
        };
        this.setSplits = function(splits) {
          var editor;
          if (splits < 1) {
            throw "The number of splits have to be > 0!";
          }
          if (splits == this.$splits) {
            return;
          } else if (splits > this.$splits) {
            while (this.$splits < this.$editors.length && this.$splits < splits) {
              editor = this.$editors[this.$splits];
              this.$container.appendChild(editor.container);
              editor.setFontSize(this.$fontSize);
              this.$splits++;
            }
            while (this.$splits < splits) {
              this.$createEditor();
              this.$splits++;
            }
          } else {
            while (this.$splits > splits) {
              editor = this.$editors[this.$splits - 1];
              this.$container.removeChild(editor.container);
              this.$splits--;
            }
          }
          this.resize();
        };
        this.getSplits = function() {
          return this.$splits;
        };
        this.getEditor = function(idx) {
          return this.$editors[idx];
        };
        this.getCurrentEditor = function() {
          return this.$cEditor;
        };
        this.focus = function() {
          this.$cEditor.focus();
        };
        this.blur = function() {
          this.$cEditor.blur();
        };
        this.setTheme = function(theme) {
          this.$editors.forEach(function(editor) {
            editor.setTheme(theme);
          });
        };
        this.setKeyboardHandler = function(keybinding) {
          this.$editors.forEach(function(editor) {
            editor.setKeyboardHandler(keybinding);
          });
        };
        this.forEach = function(callback, scope) {
          this.$editors.forEach(callback, scope);
        };
        this.$fontSize = "";
        this.setFontSize = function(size) {
          this.$fontSize = size;
          this.forEach(function(editor) {
            editor.setFontSize(size);
          });
        };
        this.$cloneSession = function(session) {
          var s = new EditSession(session.getDocument(), session.getMode());
          var undoManager = session.getUndoManager();
          s.setUndoManager(undoManager);
          s.setTabSize(session.getTabSize());
          s.setUseSoftTabs(session.getUseSoftTabs());
          s.setOverwrite(session.getOverwrite());
          s.setBreakpoints(session.getBreakpoints());
          s.setUseWrapMode(session.getUseWrapMode());
          s.setUseWorker(session.getUseWorker());
          s.setWrapLimitRange(session.$wrapLimitRange.min, session.$wrapLimitRange.max);
          s.$foldData = session.$cloneFoldData();
          return s;
        };
        this.setSession = function(session, idx) {
          var editor;
          if (idx == null) {
            editor = this.$cEditor;
          } else {
            editor = this.$editors[idx];
          }
          var isUsed = this.$editors.some(function(editor2) {
            return editor2.session === session;
          });
          if (isUsed) {
            session = this.$cloneSession(session);
          }
          editor.setSession(session);
          return session;
        };
        this.getOrientation = function() {
          return this.$orientation;
        };
        this.setOrientation = function(orientation) {
          if (this.$orientation == orientation) {
            return;
          }
          this.$orientation = orientation;
          this.resize();
        };
        this.resize = function() {
          var width = this.$container.clientWidth;
          var height = this.$container.clientHeight;
          var editor;
          if (this.$orientation == this.BESIDE) {
            var editorWidth = width / this.$splits;
            for (var i = 0; i < this.$splits; i++) {
              editor = this.$editors[i];
              editor.container.style.width = editorWidth + "px";
              editor.container.style.top = "0px";
              editor.container.style.left = i * editorWidth + "px";
              editor.container.style.height = height + "px";
              editor.resize();
            }
          } else {
            var editorHeight = height / this.$splits;
            for (var i = 0; i < this.$splits; i++) {
              editor = this.$editors[i];
              editor.container.style.width = width + "px";
              editor.container.style.top = i * editorHeight + "px";
              editor.container.style.left = "0px";
              editor.container.style.height = editorHeight + "px";
              editor.resize();
            }
          }
        };
      }).call(Split.prototype);
      exports2.Split = Split;
    });
    ace.define("ace/ext/split", ["require", "exports", "module", "ace/split"], function(require2, exports2, module2) {
      module2.exports = require2("../split");
    });
    (function() {
      ace.require(["ace/ext/split"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(extSplit$2);
  return extSplit$2.exports;
}
var extSplitExports = requireExtSplit();
const extSplit = /* @__PURE__ */ getDefaultExportFromCjs(extSplitExports);
const extSplit$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: extSplit
}, [extSplitExports]);
export {
  extSplit$1 as e
};
