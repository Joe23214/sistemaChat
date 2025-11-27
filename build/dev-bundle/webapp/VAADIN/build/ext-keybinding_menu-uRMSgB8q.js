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
var extKeybinding_menu$2 = { exports: {} };
var hasRequiredExtKeybinding_menu;
function requireExtKeybinding_menu() {
  if (hasRequiredExtKeybinding_menu) return extKeybinding_menu$2.exports;
  hasRequiredExtKeybinding_menu = 1;
  (function(module, exports) {
    ace.define("ace/ext/menu_tools/settings_menu.css", ["require", "exports", "module"], function(require2, exports2, module2) {
      module2.exports = "#ace_settingsmenu, #kbshortcutmenu {\n    background-color: #F7F7F7;\n    color: black;\n    box-shadow: -5px 4px 5px rgba(126, 126, 126, 0.55);\n    padding: 1em 0.5em 2em 1em;\n    overflow: auto;\n    position: absolute;\n    margin: 0;\n    bottom: 0;\n    right: 0;\n    top: 0;\n    z-index: 9991;\n    cursor: default;\n}\n\n.ace_dark #ace_settingsmenu, .ace_dark #kbshortcutmenu {\n    box-shadow: -20px 10px 25px rgba(126, 126, 126, 0.25);\n    background-color: rgba(255, 255, 255, 0.6);\n    color: black;\n}\n\n.ace_optionsMenuEntry:hover {\n    background-color: rgba(100, 100, 100, 0.1);\n    transition: all 0.3s\n}\n\n.ace_closeButton {\n    background: rgba(245, 146, 146, 0.5);\n    border: 1px solid #F48A8A;\n    border-radius: 50%;\n    padding: 7px;\n    position: absolute;\n    right: -8px;\n    top: -8px;\n    z-index: 100000;\n}\n.ace_closeButton{\n    background: rgba(245, 146, 146, 0.9);\n}\n.ace_optionsMenuKey {\n    color: darkslateblue;\n    font-weight: bold;\n}\n.ace_optionsMenuCommand {\n    color: darkcyan;\n    font-weight: normal;\n}\n.ace_optionsMenuEntry input, .ace_optionsMenuEntry button {\n    vertical-align: middle;\n}\n\n.ace_optionsMenuEntry button[ace_selected_button=true] {\n    background: #e7e7e7;\n    box-shadow: 1px 0px 2px 0px #adadad inset;\n    border-color: #adadad;\n}\n.ace_optionsMenuEntry button {\n    background: white;\n    border: 1px solid lightgray;\n    margin: 0px;\n}\n.ace_optionsMenuEntry button:hover{\n    background: #f0f0f0;\n}";
    });
    ace.define("ace/ext/menu_tools/overlay_page", ["require", "exports", "module", "ace/lib/dom", "ace/ext/menu_tools/settings_menu.css"], function(require2, exports2, module2) {
      var dom = require2("../../lib/dom");
      var cssText = require2("./settings_menu.css");
      dom.importCssString(cssText, "settings_menu.css", false);
      module2.exports.overlayPage = function overlayPage(editor, contentElement, callback) {
        var closer = document.createElement("div");
        var ignoreFocusOut = false;
        function documentEscListener(e) {
          if (e.keyCode === 27) {
            close();
          }
        }
        function close() {
          if (!closer)
            return;
          document.removeEventListener("keydown", documentEscListener);
          closer.parentNode.removeChild(closer);
          if (editor) {
            editor.focus();
          }
          closer = null;
          callback && callback();
        }
        function setIgnoreFocusOut(ignore) {
          ignoreFocusOut = ignore;
          if (ignore) {
            closer.style.pointerEvents = "none";
            contentElement.style.pointerEvents = "auto";
          }
        }
        closer.style.cssText = "margin: 0; padding: 0; position: fixed; top:0; bottom:0; left:0; right:0;z-index: 9990; " + (editor ? "background-color: rgba(0, 0, 0, 0.3);" : "");
        closer.addEventListener("click", function(e) {
          if (!ignoreFocusOut) {
            close();
          }
        });
        document.addEventListener("keydown", documentEscListener);
        contentElement.addEventListener("click", function(e) {
          e.stopPropagation();
        });
        closer.appendChild(contentElement);
        document.body.appendChild(closer);
        if (editor) {
          editor.blur();
        }
        return {
          close,
          setIgnoreFocusOut
        };
      };
    });
    ace.define("ace/ext/menu_tools/get_editor_keyboard_shortcuts", ["require", "exports", "module", "ace/lib/keys"], function(require2, exports2, module2) {
      var keys = require2("../../lib/keys");
      module2.exports.getEditorKeybordShortcuts = function(editor) {
        keys.KEY_MODS;
        var keybindings = [];
        var commandMap = {};
        editor.keyBinding.$handlers.forEach(function(handler) {
          var ckb = handler.commandKeyBinding;
          for (var i in ckb) {
            var key = i.replace(/(^|-)\w/g, function(x) {
              return x.toUpperCase();
            });
            var commands = ckb[i];
            if (!Array.isArray(commands))
              commands = [commands];
            commands.forEach(function(command) {
              if (typeof command != "string")
                command = command.name;
              if (commandMap[command]) {
                commandMap[command].key += "|" + key;
              } else {
                commandMap[command] = { key, command };
                keybindings.push(commandMap[command]);
              }
            });
          }
        });
        return keybindings;
      };
    });
    ace.define("ace/ext/keybinding_menu", ["require", "exports", "module", "ace/editor", "ace/ext/menu_tools/overlay_page", "ace/ext/menu_tools/get_editor_keyboard_shortcuts"], function(require2, exports2, module2) {
      var Editor = require2("../editor").Editor;
      function showKeyboardShortcuts(editor) {
        if (!document.getElementById("kbshortcutmenu")) {
          var overlayPage = require2("./menu_tools/overlay_page").overlayPage;
          var getEditorKeybordShortcuts = require2("./menu_tools/get_editor_keyboard_shortcuts").getEditorKeybordShortcuts;
          var kb = getEditorKeybordShortcuts(editor);
          var el = document.createElement("div");
          var commands = kb.reduce(function(previous, current) {
            return previous + '<div class="ace_optionsMenuEntry"><span class="ace_optionsMenuCommand">' + current.command + '</span> : <span class="ace_optionsMenuKey">' + current.key + "</span></div>";
          }, "");
          el.id = "kbshortcutmenu";
          el.innerHTML = "<h1>Keyboard Shortcuts</h1>" + commands + "</div>";
          overlayPage(editor, el);
        }
      }
      module2.exports.init = function(editor) {
        Editor.prototype.showKeyboardShortcuts = function() {
          showKeyboardShortcuts(this);
        };
        editor.commands.addCommands([{
          name: "showKeyboardShortcuts",
          bindKey: { win: "Ctrl-Alt-h", mac: "Command-Alt-h" },
          exec: function(editor2, line) {
            editor2.showKeyboardShortcuts();
          }
        }]);
      };
    });
    (function() {
      ace.require(["ace/ext/keybinding_menu"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(extKeybinding_menu$2);
  return extKeybinding_menu$2.exports;
}
var extKeybinding_menuExports = requireExtKeybinding_menu();
const extKeybinding_menu = /* @__PURE__ */ getDefaultExportFromCjs(extKeybinding_menuExports);
const extKeybinding_menu$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: extKeybinding_menu
}, [extKeybinding_menuExports]);
export {
  extKeybinding_menu$1 as e
};
