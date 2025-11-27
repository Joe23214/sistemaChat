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
var themeKr_theme$2 = { exports: {} };
var hasRequiredThemeKr_theme;
function requireThemeKr_theme() {
  if (hasRequiredThemeKr_theme) return themeKr_theme$2.exports;
  hasRequiredThemeKr_theme = 1;
  (function(module, exports) {
    ace.define("ace/theme/kr_theme.css", ["require", "exports", "module"], function(require2, exports2, module2) {
      module2.exports = ".ace-kr-theme .ace_gutter {\n  background: #1c1917;\n  color: #FCFFE0\n}\n\n.ace-kr-theme .ace_print-margin {\n  width: 1px;\n  background: #1c1917\n}\n\n.ace-kr-theme {\n  background-color: #0B0A09;\n  color: #FCFFE0\n}\n\n.ace-kr-theme .ace_cursor {\n  color: #FF9900\n}\n\n.ace-kr-theme .ace_marker-layer .ace_selection {\n  background: rgba(170, 0, 255, 0.45)\n}\n\n.ace-kr-theme.ace_multiselect .ace_selection.ace_start {\n  box-shadow: 0 0 3px 0px #0B0A09;\n}\n\n.ace-kr-theme .ace_marker-layer .ace_step {\n  background: rgb(102, 82, 0)\n}\n\n.ace-kr-theme .ace_marker-layer .ace_bracket {\n  margin: -1px 0 0 -1px;\n  border: 1px solid rgba(255, 177, 111, 0.32)\n}\n\n.ace-kr-theme .ace_marker-layer .ace_active-line {\n  background: #38403D\n}\n\n.ace-kr-theme .ace_gutter-active-line {\n  background-color : #38403D\n}\n\n.ace-kr-theme .ace_marker-layer .ace_selected-word {\n  border: 1px solid rgba(170, 0, 255, 0.45)\n}\n\n.ace-kr-theme .ace_invisible {\n  color: rgba(255, 177, 111, 0.32)\n}\n\n.ace-kr-theme .ace_keyword,\n.ace-kr-theme .ace_meta {\n  color: #949C8B\n}\n\n.ace-kr-theme .ace_constant,\n.ace-kr-theme .ace_constant.ace_character,\n.ace-kr-theme .ace_constant.ace_character.ace_escape,\n.ace-kr-theme .ace_constant.ace_other {\n  color: rgba(210, 117, 24, 0.76)\n}\n\n.ace-kr-theme .ace_invalid {\n  color: #F8F8F8;\n  background-color: #A41300\n}\n\n.ace-kr-theme .ace_support {\n  color: #9FC28A\n}\n\n.ace-kr-theme .ace_support.ace_constant {\n  color: #C27E66\n}\n\n.ace-kr-theme .ace_fold {\n  background-color: #949C8B;\n  border-color: #FCFFE0\n}\n\n.ace-kr-theme .ace_support.ace_function {\n  color: #85873A\n}\n\n.ace-kr-theme .ace_storage {\n  color: #FFEE80\n}\n\n.ace-kr-theme .ace_string {\n  color: rgba(164, 161, 181, 0.8)\n}\n\n.ace-kr-theme .ace_string.ace_regexp {\n  color: rgba(125, 255, 192, 0.65)\n}\n\n.ace-kr-theme .ace_comment {\n  font-style: italic;\n  color: #706D5B\n}\n\n.ace-kr-theme .ace_variable {\n  color: #D1A796\n}\n\n.ace-kr-theme .ace_list,\n.ace-kr-theme .ace_markup.ace_list {\n  background-color: #0F0040\n}\n\n.ace-kr-theme .ace_variable.ace_language {\n  color: #FF80E1\n}\n\n.ace-kr-theme .ace_meta.ace_tag {\n  color: #BABD9C\n}\n\n.ace-kr-theme .ace_indent-guide {\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNgYGBgYFBXV/8PAAJoAXX4kT2EAAAAAElFTkSuQmCC) right repeat-y\n}\n\n.ace-kr-theme .ace_indent-guide-active {\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQIW2PQ1dX9zzBz5sz/ABCcBFFentLlAAAAAElFTkSuQmCC) right repeat-y;\n}\n";
    });
    ace.define("ace/theme/kr_theme", ["require", "exports", "module", "ace/theme/kr_theme.css", "ace/lib/dom"], function(require2, exports2, module2) {
      exports2.isDark = true;
      exports2.cssClass = "ace-kr-theme";
      exports2.cssText = require2("./kr_theme.css");
      var dom = require2("../lib/dom");
      dom.importCssString(exports2.cssText, exports2.cssClass, false);
    });
    (function() {
      ace.require(["ace/theme/kr_theme"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(themeKr_theme$2);
  return themeKr_theme$2.exports;
}
var themeKr_themeExports = requireThemeKr_theme();
const themeKr_theme = /* @__PURE__ */ getDefaultExportFromCjs(themeKr_themeExports);
const themeKr_theme$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: themeKr_theme
}, [themeKr_themeExports]);
export {
  themeKr_theme$1 as t
};
