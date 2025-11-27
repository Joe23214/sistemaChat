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
var extTextarea$2 = { exports: {} };
var hasRequiredExtTextarea;
function requireExtTextarea() {
  if (hasRequiredExtTextarea) return extTextarea$2.exports;
  hasRequiredExtTextarea = 1;
  (function(module, exports) {
    ace.define("ace/ext/textarea", ["require", "exports", "module", "ace/lib/event", "ace/lib/useragent", "ace/lib/net", "ace/ace"], function(require2, exports2, module2) {
      var event = require2("../lib/event");
      var UA = require2("../lib/useragent");
      require2("../lib/net");
      var ace2 = require2("../ace");
      module2.exports = exports2 = ace2;
      var getCSSProperty = function(element, container, property) {
        var ret = element.style[property];
        if (!ret) {
          if (window.getComputedStyle) {
            ret = window.getComputedStyle(element, "").getPropertyValue(property);
          } else {
            ret = element.currentStyle[property];
          }
        }
        if (!ret || ret == "auto" || ret == "intrinsic") {
          ret = container.style[property];
        }
        return ret;
      };
      function applyStyles(elm, styles) {
        for (var style in styles) {
          elm.style[style] = styles[style];
        }
      }
      function setupContainer(element, getValue) {
        if (element.type != "textarea") {
          throw new Error("Textarea required!");
        }
        var parentNode = element.parentNode;
        var container = document.createElement("div");
        var resizeEvent = function() {
          var style = "position:relative;";
          [
            "margin-top",
            "margin-left",
            "margin-right",
            "margin-bottom"
          ].forEach(function(item) {
            style += item + ":" + getCSSProperty(element, container, item) + ";";
          });
          var width = getCSSProperty(element, container, "width") || element.clientWidth + "px";
          var height = getCSSProperty(element, container, "height") || element.clientHeight + "px";
          style += "height:" + height + ";width:" + width + ";";
          style += "display:inline-block;";
          container.setAttribute("style", style);
        };
        event.addListener(window, "resize", resizeEvent);
        resizeEvent();
        parentNode.insertBefore(container, element.nextSibling);
        while (parentNode !== document) {
          if (parentNode.tagName.toUpperCase() === "FORM") {
            var oldSumit = parentNode.onsubmit;
            parentNode.onsubmit = function(evt) {
              element.value = getValue();
              if (oldSumit) {
                oldSumit.call(this, evt);
              }
            };
            break;
          }
          parentNode = parentNode.parentNode;
        }
        return container;
      }
      exports2.transformTextarea = function(element, options) {
        var isFocused = element.autofocus || document.activeElement == element;
        var session;
        var container = setupContainer(element, function() {
          return session.getValue();
        });
        element.style.display = "none";
        container.style.background = "white";
        var editorDiv = document.createElement("div");
        applyStyles(editorDiv, {
          top: "0px",
          left: "0px",
          right: "0px",
          bottom: "0px",
          border: "1px solid gray",
          position: "absolute"
        });
        container.appendChild(editorDiv);
        var settingOpener = document.createElement("div");
        applyStyles(settingOpener, {
          position: "absolute",
          right: "0px",
          bottom: "0px",
          cursor: "nw-resize",
          border: "solid 9px",
          borderColor: "lightblue gray gray #ceade6",
          zIndex: 101
        });
        var settingDiv = document.createElement("div");
        var settingDivStyles = {
          top: "0px",
          left: "20%",
          right: "0px",
          bottom: "0px",
          position: "absolute",
          padding: "5px",
          zIndex: 100,
          color: "white",
          display: "none",
          overflow: "auto",
          fontSize: "14px",
          boxShadow: "-5px 2px 3px gray"
        };
        if (!UA.isOldIE) {
          settingDivStyles.backgroundColor = "rgba(0, 0, 0, 0.6)";
        } else {
          settingDivStyles.backgroundColor = "#333";
        }
        applyStyles(settingDiv, settingDivStyles);
        container.appendChild(settingDiv);
        options = options || exports2.defaultOptions;
        var editor = ace2.edit(editorDiv);
        session = editor.getSession();
        session.setValue(element.value || element.innerHTML);
        if (isFocused)
          editor.focus();
        container.appendChild(settingOpener);
        setupApi(editor, editorDiv, settingDiv, ace2, options);
        setupSettingPanel(settingDiv, settingOpener, editor);
        var state = "";
        event.addListener(settingOpener, "mousemove", function(e) {
          var rect = this.getBoundingClientRect();
          var x = e.clientX - rect.left, y = e.clientY - rect.top;
          if (x + y < (rect.width + rect.height) / 2) {
            this.style.cursor = "pointer";
            state = "toggle";
          } else {
            state = "resize";
            this.style.cursor = "nw-resize";
          }
        });
        event.addListener(settingOpener, "mousedown", function(e) {
          e.preventDefault();
          if (state == "toggle") {
            editor.setDisplaySettings();
            return;
          }
          container.style.zIndex = 1e5;
          var rect = container.getBoundingClientRect();
          var startX = rect.width + rect.left - e.clientX;
          var startY = rect.height + rect.top - e.clientY;
          event.capture(settingOpener, function(e2) {
            container.style.width = e2.clientX - rect.left + startX + "px";
            container.style.height = e2.clientY - rect.top + startY + "px";
            editor.resize();
          }, function() {
          });
        });
        return editor;
      };
      function setupApi(editor, editorDiv, settingDiv, ace3, options) {
        editor.getSession();
        editor.renderer;
        function toBool(value) {
          return value === "true" || value == true;
        }
        editor.setDisplaySettings = function(display) {
          if (display == null)
            display = settingDiv.style.display == "none";
          if (display) {
            settingDiv.style.display = "block";
            settingDiv.hideButton.focus();
            editor.on("focus", function onFocus() {
              editor.removeListener("focus", onFocus);
              settingDiv.style.display = "none";
            });
          } else {
            editor.focus();
          }
        };
        editor.$setOption = editor.setOption;
        editor.$getOption = editor.getOption;
        editor.setOption = function(key, value) {
          switch (key) {
            case "mode":
              editor.$setOption("mode", "ace/mode/" + value);
              break;
            case "theme":
              editor.$setOption("theme", "ace/theme/" + value);
              break;
            case "keybindings":
              switch (value) {
                case "vim":
                  editor.setKeyboardHandler("ace/keyboard/vim");
                  break;
                case "emacs":
                  editor.setKeyboardHandler("ace/keyboard/emacs");
                  break;
                default:
                  editor.setKeyboardHandler(null);
              }
              break;
            case "wrap":
            case "fontSize":
              editor.$setOption(key, value);
              break;
            default:
              editor.$setOption(key, toBool(value));
          }
        };
        editor.getOption = function(key) {
          switch (key) {
            case "mode":
              return editor.$getOption("mode").substr("ace/mode/".length);
            case "theme":
              return editor.$getOption("theme").substr("ace/theme/".length);
            case "keybindings":
              var value = editor.getKeyboardHandler();
              switch (value && value.$id) {
                case "ace/keyboard/vim":
                  return "vim";
                case "ace/keyboard/emacs":
                  return "emacs";
                default:
                  return "ace";
              }
            default:
              return editor.$getOption(key);
          }
        };
        editor.setOptions(options);
        return editor;
      }
      function setupSettingPanel(settingDiv, settingOpener, editor) {
        var BOOL = null;
        var desc = {
          mode: "Mode:",
          wrap: "Soft Wrap:",
          theme: "Theme:",
          fontSize: "Font Size:",
          showGutter: "Display Gutter:",
          keybindings: "Keyboard",
          showPrintMargin: "Show Print Margin:",
          useSoftTabs: "Use Soft Tabs:",
          showInvisibles: "Show Invisibles"
        };
        var optionValues = {
          mode: {
            text: "Plain",
            javascript: "JavaScript",
            xml: "XML",
            html: "HTML",
            css: "CSS",
            scss: "SCSS",
            python: "Python",
            php: "PHP",
            java: "Java",
            ruby: "Ruby",
            c_cpp: "C/C++",
            coffee: "CoffeeScript",
            json: "json",
            perl: "Perl",
            clojure: "Clojure",
            ocaml: "OCaml",
            csharp: "C#",
            haxe: "haXe",
            svg: "SVG",
            textile: "Textile",
            groovy: "Groovy",
            liquid: "Liquid",
            Scala: "Scala"
          },
          theme: {
            clouds: "Clouds",
            clouds_midnight: "Clouds Midnight",
            cobalt: "Cobalt",
            crimson_editor: "Crimson Editor",
            dawn: "Dawn",
            gob: "Green on Black",
            eclipse: "Eclipse",
            idle_fingers: "Idle Fingers",
            kr_theme: "Kr Theme",
            merbivore: "Merbivore",
            merbivore_soft: "Merbivore Soft",
            mono_industrial: "Mono Industrial",
            monokai: "Monokai",
            pastel_on_dark: "Pastel On Dark",
            solarized_dark: "Solarized Dark",
            solarized_light: "Solarized Light",
            textmate: "Textmate",
            twilight: "Twilight",
            vibrant_ink: "Vibrant Ink"
          },
          showGutter: BOOL,
          fontSize: {
            "10px": "10px",
            "11px": "11px",
            "12px": "12px",
            "14px": "14px",
            "16px": "16px"
          },
          wrap: {
            off: "Off",
            40: "40",
            80: "80",
            free: "Free"
          },
          keybindings: {
            ace: "ace",
            vim: "vim",
            emacs: "emacs"
          },
          showPrintMargin: BOOL,
          useSoftTabs: BOOL,
          showInvisibles: BOOL
        };
        var table = [];
        table.push("<table><tr><th>Setting</th><th>Value</th></tr>");
        function renderOption(builder, option2, obj, cValue) {
          if (!obj) {
            builder.push("<input type='checkbox' title='", option2, "' ", cValue + "" == "true" ? "checked='true'" : "", "'></input>");
            return;
          }
          builder.push("<select title='" + option2 + "'>");
          for (var value in obj) {
            builder.push("<option value='" + value + "' ");
            if (cValue == value) {
              builder.push(" selected ");
            }
            builder.push(">", obj[value], "</option>");
          }
          builder.push("</select>");
        }
        for (var option in exports2.defaultOptions) {
          table.push("<tr><td>", desc[option], "</td>");
          table.push("<td>");
          renderOption(table, option, optionValues[option], editor.getOption(option));
          table.push("</td></tr>");
        }
        table.push("</table>");
        settingDiv.innerHTML = table.join("");
        var onChange = function(e) {
          var select = e.currentTarget;
          editor.setOption(select.title, select.value);
        };
        var onClick = function(e) {
          var cb = e.currentTarget;
          editor.setOption(cb.title, cb.checked);
        };
        var selects = settingDiv.getElementsByTagName("select");
        for (var i = 0; i < selects.length; i++)
          selects[i].onchange = onChange;
        var cbs = settingDiv.getElementsByTagName("input");
        for (var i = 0; i < cbs.length; i++)
          cbs[i].onclick = onClick;
        var button = document.createElement("input");
        button.type = "button";
        button.value = "Hide";
        event.addListener(button, "click", function() {
          editor.setDisplaySettings(false);
        });
        settingDiv.appendChild(button);
        settingDiv.hideButton = button;
      }
      exports2.defaultOptions = {
        mode: "javascript",
        theme: "textmate",
        wrap: "off",
        fontSize: "12px",
        showGutter: "false",
        keybindings: "ace",
        showPrintMargin: "false",
        useSoftTabs: "true",
        showInvisibles: "false"
      };
    });
    (function() {
      ace.require(["ace/ext/textarea"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(extTextarea$2);
  return extTextarea$2.exports;
}
var extTextareaExports = requireExtTextarea();
const extTextarea = /* @__PURE__ */ getDefaultExportFromCjs(extTextareaExports);
const extTextarea$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: extTextarea
}, [extTextareaExports]);
export {
  extTextarea$1 as e
};
