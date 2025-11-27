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
var themeIdle_fingers$2 = { exports: {} };
var hasRequiredThemeIdle_fingers;
function requireThemeIdle_fingers() {
  if (hasRequiredThemeIdle_fingers) return themeIdle_fingers$2.exports;
  hasRequiredThemeIdle_fingers = 1;
  (function(module, exports) {
    ace.define("ace/theme/idle_fingers.css", ["require", "exports", "module"], function(require2, exports2, module2) {
      module2.exports = ".ace-idle-fingers .ace_gutter {\n  background: #3b3b3b;\n  color: rgb(153,153,153)\n}\n\n.ace-idle-fingers .ace_print-margin {\n  width: 1px;\n  background: #3b3b3b\n}\n\n.ace-idle-fingers {\n  background-color: #323232;\n  color: #FFFFFF\n}\n\n.ace-idle-fingers .ace_cursor {\n  color: #91FF00\n}\n\n.ace-idle-fingers .ace_marker-layer .ace_selection {\n  background: rgba(90, 100, 126, 0.88)\n}\n\n.ace-idle-fingers.ace_multiselect .ace_selection.ace_start {\n  box-shadow: 0 0 3px 0px #323232;\n}\n\n.ace-idle-fingers .ace_marker-layer .ace_step {\n  background: rgb(102, 82, 0)\n}\n\n.ace-idle-fingers .ace_marker-layer .ace_bracket {\n  margin: -1px 0 0 -1px;\n  border: 1px solid #404040\n}\n\n.ace-idle-fingers .ace_marker-layer .ace_active-line {\n  background: #353637\n}\n\n.ace-idle-fingers .ace_gutter-active-line {\n  background-color: #353637\n}\n\n.ace-idle-fingers .ace_marker-layer .ace_selected-word {\n  border: 1px solid rgba(90, 100, 126, 0.88)\n}\n\n.ace-idle-fingers .ace_invisible {\n  color: #404040\n}\n\n.ace-idle-fingers .ace_keyword,\n.ace-idle-fingers .ace_meta {\n  color: #CC7833\n}\n\n.ace-idle-fingers .ace_constant,\n.ace-idle-fingers .ace_constant.ace_character,\n.ace-idle-fingers .ace_constant.ace_character.ace_escape,\n.ace-idle-fingers .ace_constant.ace_other,\n.ace-idle-fingers .ace_support.ace_constant {\n  color: #6C99BB\n}\n\n.ace-idle-fingers .ace_invalid {\n  color: #FFFFFF;\n  background-color: #FF0000\n}\n\n.ace-idle-fingers .ace_fold {\n  background-color: #CC7833;\n  border-color: #FFFFFF\n}\n\n.ace-idle-fingers .ace_support.ace_function {\n  color: #B83426\n}\n\n.ace-idle-fingers .ace_variable.ace_parameter {\n  font-style: italic\n}\n\n.ace-idle-fingers .ace_string {\n  color: #A5C261\n}\n\n.ace-idle-fingers .ace_string.ace_regexp {\n  color: #CCCC33\n}\n\n.ace-idle-fingers .ace_comment {\n  font-style: italic;\n  color: #BC9458\n}\n\n.ace-idle-fingers .ace_meta.ace_tag {\n  color: #FFE5BB\n}\n\n.ace-idle-fingers .ace_entity.ace_name {\n  color: #FFC66D\n}\n\n.ace-idle-fingers .ace_collab.ace_user1 {\n  color: #323232;\n  background-color: #FFF980\n}\n\n.ace-idle-fingers .ace_indent-guide {\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWMwMjLyZYiPj/8PAAreAwAI1+g0AAAAAElFTkSuQmCC) right repeat-y\n}\n\n.ace-idle-fingers .ace_indent-guide-active {\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQIW2PQ1dX9zzBz5sz/ABCcBFFentLlAAAAAElFTkSuQmCC) right repeat-y;\n}\n";
    });
    ace.define("ace/theme/idle_fingers", ["require", "exports", "module", "ace/theme/idle_fingers.css", "ace/lib/dom"], function(require2, exports2, module2) {
      exports2.isDark = true;
      exports2.cssClass = "ace-idle-fingers";
      exports2.cssText = require2("./idle_fingers.css");
      var dom = require2("../lib/dom");
      dom.importCssString(exports2.cssText, exports2.cssClass, false);
    });
    (function() {
      ace.require(["ace/theme/idle_fingers"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(themeIdle_fingers$2);
  return themeIdle_fingers$2.exports;
}
var themeIdle_fingersExports = requireThemeIdle_fingers();
const themeIdle_fingers = /* @__PURE__ */ getDefaultExportFromCjs(themeIdle_fingersExports);
const themeIdle_fingers$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: themeIdle_fingers
}, [themeIdle_fingersExports]);
export {
  themeIdle_fingers$1 as t
};
