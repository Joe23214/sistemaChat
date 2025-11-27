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
var extHardwrap$2 = { exports: {} };
var hasRequiredExtHardwrap;
function requireExtHardwrap() {
  if (hasRequiredExtHardwrap) return extHardwrap$2.exports;
  hasRequiredExtHardwrap = 1;
  (function(module, exports) {
    ace.define("ace/ext/hardwrap", ["require", "exports", "module", "ace/range", "ace/editor", "ace/config"], function(require2, exports2, module2) {
      var Range = require2("../range").Range;
      function hardWrap(editor, options) {
        var max = options.column || editor.getOption("printMarginColumn");
        var allowMerge = options.allowMerge != false;
        var row = Math.min(options.startRow, options.endRow);
        var endRow = Math.max(options.startRow, options.endRow);
        var session = editor.session;
        while (row <= endRow) {
          var line = session.getLine(row);
          if (line.length > max) {
            var space = findSpace(line, max, 5);
            if (space) {
              var indentation = /^\s*/.exec(line)[0];
              session.replace(new Range(row, space.start, row, space.end), "\n" + indentation);
            }
            endRow++;
          } else if (allowMerge && /\S/.test(line) && row != endRow) {
            var nextLine = session.getLine(row + 1);
            if (nextLine && /\S/.test(nextLine)) {
              var trimmedLine = line.replace(/\s+$/, "");
              var trimmedNextLine = nextLine.replace(/^\s+/, "");
              var mergedLine = trimmedLine + " " + trimmedNextLine;
              var space = findSpace(mergedLine, max, 5);
              if (space && space.start > trimmedLine.length || mergedLine.length < max) {
                var replaceRange = new Range(row, trimmedLine.length, row + 1, nextLine.length - trimmedNextLine.length);
                session.replace(replaceRange, " ");
                row--;
                endRow--;
              } else if (trimmedLine.length < line.length) {
                session.remove(new Range(row, trimmedLine.length, row, line.length));
              }
            }
          }
          row++;
        }
        function findSpace(line2, max2, min) {
          if (line2.length < max2)
            return;
          var before = line2.slice(0, max2);
          var after = line2.slice(max2);
          var spaceAfter = /^(?:(\s+)|(\S+)(\s+))/.exec(after);
          var spaceBefore = /(?:(\s+)|(\s+)(\S+))$/.exec(before);
          var start = 0;
          var end = 0;
          if (spaceBefore && !spaceBefore[2]) {
            start = max2 - spaceBefore[1].length;
            end = max2;
          }
          if (spaceAfter && !spaceAfter[2]) {
            if (!start)
              start = max2;
            end = max2 + spaceAfter[1].length;
          }
          if (start) {
            return {
              start,
              end
            };
          }
          if (spaceBefore && spaceBefore[2] && spaceBefore.index > min) {
            return {
              start: spaceBefore.index,
              end: spaceBefore.index + spaceBefore[2].length
            };
          }
          if (spaceAfter && spaceAfter[2]) {
            start = max2 + spaceAfter[2].length;
            return {
              start,
              end: start + spaceAfter[3].length
            };
          }
        }
      }
      function wrapAfterInput(e) {
        if (e.command.name == "insertstring" && /\S/.test(e.args)) {
          var editor = e.editor;
          var cursor = editor.selection.cursor;
          if (cursor.column <= editor.renderer.$printMarginColumn)
            return;
          var lastDelta = editor.session.$undoManager.$lastDelta;
          hardWrap(editor, {
            startRow: cursor.row,
            endRow: cursor.row,
            allowMerge: false
          });
          if (lastDelta != editor.session.$undoManager.$lastDelta)
            editor.session.markUndoGroup();
        }
      }
      var Editor = require2("../editor").Editor;
      require2("../config").defineOptions(Editor.prototype, "editor", {
        hardWrap: {
          set: function(val) {
            if (val) {
              this.commands.on("afterExec", wrapAfterInput);
            } else {
              this.commands.off("afterExec", wrapAfterInput);
            }
          },
          value: false
        }
      });
      exports2.hardWrap = hardWrap;
    });
    (function() {
      ace.require(["ace/ext/hardwrap"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(extHardwrap$2);
  return extHardwrap$2.exports;
}
var extHardwrapExports = requireExtHardwrap();
const extHardwrap = /* @__PURE__ */ getDefaultExportFromCjs(extHardwrapExports);
const extHardwrap$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: extHardwrap
}, [extHardwrapExports]);
export {
  extHardwrap$1 as e
};
