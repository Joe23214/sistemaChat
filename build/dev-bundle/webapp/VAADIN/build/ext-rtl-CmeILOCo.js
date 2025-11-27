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
var extRtl$2 = { exports: {} };
var hasRequiredExtRtl;
function requireExtRtl() {
  if (hasRequiredExtRtl) return extRtl$2.exports;
  hasRequiredExtRtl = 1;
  (function(module, exports) {
    ace.define("ace/ext/rtl", ["require", "exports", "module", "ace/editor", "ace/config"], function(require2, exports2, module2) {
      var commands = [{
        name: "leftToRight",
        bindKey: { win: "Ctrl-Alt-Shift-L", mac: "Command-Alt-Shift-L" },
        exec: function(editor) {
          editor.session.$bidiHandler.setRtlDirection(editor, false);
        },
        readOnly: true
      }, {
        name: "rightToLeft",
        bindKey: { win: "Ctrl-Alt-Shift-R", mac: "Command-Alt-Shift-R" },
        exec: function(editor) {
          editor.session.$bidiHandler.setRtlDirection(editor, true);
        },
        readOnly: true
      }];
      var Editor = require2("../editor").Editor;
      require2("../config").defineOptions(Editor.prototype, "editor", {
        rtlText: {
          set: function(val) {
            if (val) {
              this.on("change", onChange);
              this.on("changeSelection", onChangeSelection);
              this.renderer.on("afterRender", updateLineDirection);
              this.commands.on("exec", onCommandEmitted);
              this.commands.addCommands(commands);
            } else {
              this.off("change", onChange);
              this.off("changeSelection", onChangeSelection);
              this.renderer.off("afterRender", updateLineDirection);
              this.commands.off("exec", onCommandEmitted);
              this.commands.removeCommands(commands);
              clearTextLayer(this.renderer);
            }
            this.renderer.updateFull();
          }
        },
        rtl: {
          set: function(val) {
            this.session.$bidiHandler.$isRtl = val;
            if (val) {
              this.setOption("rtlText", false);
              this.renderer.on("afterRender", updateLineDirection);
              this.session.$bidiHandler.seenBidi = true;
            } else {
              this.renderer.off("afterRender", updateLineDirection);
              clearTextLayer(this.renderer);
            }
            this.renderer.updateFull();
          }
        }
      });
      function onChangeSelection(e, editor) {
        var lead = editor.getSelection().lead;
        if (editor.session.$bidiHandler.isRtlLine(lead.row)) {
          if (lead.column === 0) {
            if (editor.session.$bidiHandler.isMoveLeftOperation && lead.row > 0) {
              editor.getSelection().moveCursorTo(lead.row - 1, editor.session.getLine(lead.row - 1).length);
            } else {
              if (editor.getSelection().isEmpty())
                lead.column += 1;
              else
                lead.setPosition(lead.row, lead.column + 1);
            }
          }
        }
      }
      function onCommandEmitted(commadEvent) {
        commadEvent.editor.session.$bidiHandler.isMoveLeftOperation = /gotoleft|selectleft|backspace|removewordleft/.test(commadEvent.command.name);
      }
      function onChange(delta, editor) {
        var session = editor.session;
        session.$bidiHandler.currentRow = null;
        if (session.$bidiHandler.isRtlLine(delta.start.row) && delta.action === "insert" && delta.lines.length > 1) {
          for (var row = delta.start.row; row < delta.end.row; row++) {
            if (session.getLine(row + 1).charAt(0) !== session.$bidiHandler.RLE)
              session.doc.$lines[row + 1] = session.$bidiHandler.RLE + session.getLine(row + 1);
          }
        }
      }
      function updateLineDirection(e, renderer) {
        var session = renderer.session;
        var $bidiHandler = session.$bidiHandler;
        var cells = renderer.$textLayer.$lines.cells;
        var width = renderer.layerConfig.width - renderer.layerConfig.padding + "px";
        cells.forEach(function(cell) {
          var style = cell.element.style;
          if ($bidiHandler && $bidiHandler.isRtlLine(cell.row)) {
            style.direction = "rtl";
            style.textAlign = "right";
            style.width = width;
          } else {
            style.direction = "";
            style.textAlign = "";
            style.width = "";
          }
        });
      }
      function clearTextLayer(renderer) {
        var lines = renderer.$textLayer.$lines;
        lines.cells.forEach(clear);
        lines.cellCache.forEach(clear);
        function clear(cell) {
          var style = cell.element.style;
          style.direction = style.textAlign = style.width = "";
        }
      }
    });
    (function() {
      ace.require(["ace/ext/rtl"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(extRtl$2);
  return extRtl$2.exports;
}
var extRtlExports = requireExtRtl();
const extRtl = /* @__PURE__ */ getDefaultExportFromCjs(extRtlExports);
const extRtl$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: extRtl
}, [extRtlExports]);
export {
  extRtl$1 as e
};
