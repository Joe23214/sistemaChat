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
var keybindingVscode$2 = { exports: {} };
var hasRequiredKeybindingVscode;
function requireKeybindingVscode() {
  if (hasRequiredKeybindingVscode) return keybindingVscode$2.exports;
  hasRequiredKeybindingVscode = 1;
  (function(module, exports) {
    ace.define("ace/keyboard/vscode", ["require", "exports", "module", "ace/keyboard/hash_handler", "ace/config"], function(require2, exports2, module2) {
      var HashHandler = require2("../keyboard/hash_handler").HashHandler;
      var config = require2("../config");
      exports2.handler = new HashHandler();
      exports2.handler.$id = "ace/keyboard/vscode";
      exports2.handler.addCommands([{
        name: "toggleWordWrap",
        exec: function(editor) {
          var wrapUsed = editor.session.getUseWrapMode();
          editor.session.setUseWrapMode(!wrapUsed);
        },
        readOnly: true
      }, {
        name: "navigateToLastEditLocation",
        exec: function(editor) {
          var lastDelta = editor.session.getUndoManager().$lastDelta;
          var range = lastDelta.action == "remove" ? lastDelta.start : lastDelta.end;
          editor.moveCursorTo(range.row, range.column);
          editor.clearSelection();
        }
      }, {
        name: "replaceAll",
        exec: function(editor) {
          if (!editor.searchBox) {
            config.loadModule("ace/ext/searchbox", function(e) {
              e.Search(editor, true);
            });
          } else {
            if (editor.searchBox.active === true && editor.searchBox.replaceOption.checked === true) {
              editor.searchBox.replaceAll();
            }
          }
        }
      }, {
        name: "replaceOne",
        exec: function(editor) {
          if (!editor.searchBox) {
            config.loadModule("ace/ext/searchbox", function(e) {
              e.Search(editor, true);
            });
          } else {
            if (editor.searchBox.active === true && editor.searchBox.replaceOption.checked === true) {
              editor.searchBox.replace();
            }
          }
        }
      }, {
        name: "selectAllMatches",
        exec: function(editor) {
          if (!editor.searchBox) {
            config.loadModule("ace/ext/searchbox", function(e) {
              e.Search(editor, false);
            });
          } else {
            if (editor.searchBox.active === true) {
              editor.searchBox.findAll();
            }
          }
        }
      }, {
        name: "toggleFindCaseSensitive",
        exec: function(editor) {
          config.loadModule("ace/ext/searchbox", function(e) {
            e.Search(editor, false);
            var sb = editor.searchBox;
            sb.caseSensitiveOption.checked = !sb.caseSensitiveOption.checked;
            sb.$syncOptions();
          });
        }
      }, {
        name: "toggleFindInSelection",
        exec: function(editor) {
          config.loadModule("ace/ext/searchbox", function(e) {
            e.Search(editor, false);
            var sb = editor.searchBox;
            sb.searchOption.checked = !sb.searchRange;
            sb.setSearchRange(sb.searchOption.checked && sb.editor.getSelectionRange());
            sb.$syncOptions();
          });
        }
      }, {
        name: "toggleFindRegex",
        exec: function(editor) {
          config.loadModule("ace/ext/searchbox", function(e) {
            e.Search(editor, false);
            var sb = editor.searchBox;
            sb.regExpOption.checked = !sb.regExpOption.checked;
            sb.$syncOptions();
          });
        }
      }, {
        name: "toggleFindWholeWord",
        exec: function(editor) {
          config.loadModule("ace/ext/searchbox", function(e) {
            e.Search(editor, false);
            var sb = editor.searchBox;
            sb.wholeWordOption.checked = !sb.wholeWordOption.checked;
            sb.$syncOptions();
          });
        }
      }, {
        name: "removeSecondaryCursors",
        exec: function(editor) {
          var ranges = editor.selection.ranges;
          if (ranges && ranges.length > 1)
            editor.selection.toSingleRange(ranges[ranges.length - 1]);
          else
            editor.selection.clearSelection();
        }
      }]);
      [
        {
          bindKey: { mac: "Ctrl-G", win: "Ctrl-G" },
          name: "gotoline"
        },
        {
          bindKey: { mac: "Command-Shift-L|Command-F2", win: "Ctrl-Shift-L|Ctrl-F2" },
          name: "findAll"
        },
        {
          bindKey: { mac: "Shift-F8|Shift-Option-F8", win: "Shift-F8|Shift-Alt-F8" },
          name: "goToPreviousError"
        },
        {
          bindKey: { mac: "F8|Option-F8", win: "F8|Alt-F8" },
          name: "goToNextError"
        },
        {
          bindKey: { mac: "Command-Shift-P|F1", win: "Ctrl-Shift-P|F1" },
          name: "openCommandPallete"
        },
        {
          bindKey: { mac: "Shift-Option-Up", win: "Alt-Shift-Up" },
          name: "copylinesup"
        },
        {
          bindKey: { mac: "Shift-Option-Down", win: "Alt-Shift-Down" },
          name: "copylinesdown"
        },
        {
          bindKey: { mac: "Command-Shift-K", win: "Ctrl-Shift-K" },
          name: "removeline"
        },
        {
          bindKey: { mac: "Command-Enter", win: "Ctrl-Enter" },
          name: "addLineAfter"
        },
        {
          bindKey: { mac: "Command-Shift-Enter", win: "Ctrl-Shift-Enter" },
          name: "addLineBefore"
        },
        {
          bindKey: { mac: "Command-Shift-\\", win: "Ctrl-Shift-\\" },
          name: "jumptomatching"
        },
        {
          bindKey: { mac: "Command-]", win: "Ctrl-]" },
          name: "blockindent"
        },
        {
          bindKey: { mac: "Command-[", win: "Ctrl-[" },
          name: "blockoutdent"
        },
        {
          bindKey: { mac: "Ctrl-PageDown", win: "Alt-PageDown" },
          name: "pagedown"
        },
        {
          bindKey: { mac: "Ctrl-PageUp", win: "Alt-PageUp" },
          name: "pageup"
        },
        {
          bindKey: { mac: "Shift-Option-A", win: "Shift-Alt-A" },
          name: "toggleBlockComment"
        },
        {
          bindKey: { mac: "Option-Z", win: "Alt-Z" },
          name: "toggleWordWrap"
        },
        {
          bindKey: { mac: "Command-G", win: "F3|Ctrl-K Ctrl-D" },
          name: "findnext"
        },
        {
          bindKey: { mac: "Command-Shift-G", win: "Shift-F3" },
          name: "findprevious"
        },
        {
          bindKey: { mac: "Option-Enter", win: "Alt-Enter" },
          name: "selectAllMatches"
        },
        {
          bindKey: { mac: "Command-D", win: "Ctrl-D" },
          name: "selectMoreAfter"
        },
        {
          bindKey: { mac: "Command-K Command-D", win: "Ctrl-K Ctrl-D" },
          name: "selectOrFindNext"
        },
        {
          bindKey: { mac: "Shift-Option-I", win: "Shift-Alt-I" },
          name: "splitSelectionIntoLines"
        },
        {
          bindKey: { mac: "Command-K M", win: "Ctrl-K M" },
          name: "modeSelect"
        },
        {
          bindKey: { mac: "Command-Option-[", win: "Ctrl-Shift-[" },
          name: "toggleFoldWidget"
        },
        {
          bindKey: { mac: "Command-Option-]", win: "Ctrl-Shift-]" },
          name: "toggleFoldWidget"
        },
        {
          bindKey: { mac: "Command-K Command-0", win: "Ctrl-K Ctrl-0" },
          name: "foldall"
        },
        {
          bindKey: { mac: "Command-K Command-J", win: "Ctrl-K Ctrl-J" },
          name: "unfoldall"
        },
        {
          bindKey: { mac: "Command-K Command-1", win: "Ctrl-K Ctrl-1" },
          name: "foldOther"
        },
        {
          bindKey: { mac: "Command-K Command-Q", win: "Ctrl-K Ctrl-Q" },
          name: "navigateToLastEditLocation"
        },
        {
          bindKey: { mac: "Command-K Command-R|Command-K Command-S", win: "Ctrl-K Ctrl-R|Ctrl-K Ctrl-S" },
          name: "showKeyboardShortcuts"
        },
        {
          bindKey: { mac: "Command-K Command-X", win: "Ctrl-K Ctrl-X" },
          name: "trimTrailingSpace"
        },
        {
          bindKey: { mac: "Shift-Down|Command-Shift-Down", win: "Shift-Down|Ctrl-Shift-Down" },
          name: "selectdown"
        },
        {
          bindKey: { mac: "Shift-Up|Command-Shift-Up", win: "Shift-Up|Ctrl-Shift-Up" },
          name: "selectup"
        },
        {
          bindKey: { mac: "Command-Alt-Enter", win: "Ctrl-Alt-Enter" },
          name: "replaceAll"
        },
        {
          bindKey: { mac: "Command-Shift-1", win: "Ctrl-Shift-1" },
          name: "replaceOne"
        },
        {
          bindKey: { mac: "Option-C", win: "Alt-C" },
          name: "toggleFindCaseSensitive"
        },
        {
          bindKey: { mac: "Option-L", win: "Alt-L" },
          name: "toggleFindInSelection"
        },
        {
          bindKey: { mac: "Option-R", win: "Alt-R" },
          name: "toggleFindRegex"
        },
        {
          bindKey: { mac: "Option-W", win: "Alt-W" },
          name: "toggleFindWholeWord"
        },
        {
          bindKey: { mac: "Command-L", win: "Ctrl-L" },
          name: "expandtoline"
        },
        {
          bindKey: { mac: "Shift-Esc", win: "Shift-Esc" },
          name: "removeSecondaryCursors"
        }
      ].forEach(function(binding) {
        var command = exports2.handler.commands[binding.name];
        if (command)
          command.bindKey = binding.bindKey;
        exports2.handler.bindKey(binding.bindKey, command || binding.name);
      });
    });
    (function() {
      ace.require(["ace/keyboard/vscode"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(keybindingVscode$2);
  return keybindingVscode$2.exports;
}
var keybindingVscodeExports = requireKeybindingVscode();
const keybindingVscode = /* @__PURE__ */ getDefaultExportFromCjs(keybindingVscodeExports);
const keybindingVscode$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: keybindingVscode
}, [keybindingVscodeExports]);
export {
  keybindingVscode$1 as k
};
