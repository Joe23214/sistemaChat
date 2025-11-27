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
var themeSolarized_dark$2 = { exports: {} };
var hasRequiredThemeSolarized_dark;
function requireThemeSolarized_dark() {
  if (hasRequiredThemeSolarized_dark) return themeSolarized_dark$2.exports;
  hasRequiredThemeSolarized_dark = 1;
  (function(module, exports) {
    ace.define("ace/theme/solarized_dark.css", ["require", "exports", "module"], function(require2, exports2, module2) {
      module2.exports = ".ace-solarized-dark .ace_gutter {\n  background: #01313f;\n  color: #d0edf7\n}\n\n.ace-solarized-dark .ace_print-margin {\n  width: 1px;\n  background: #33555E\n}\n\n.ace-solarized-dark {\n  background-color: #002B36;\n  color: #93A1A1\n}\n\n.ace-solarized-dark .ace_entity.ace_other.ace_attribute-name,\n.ace-solarized-dark .ace_storage {\n  color: #93A1A1\n}\n\n.ace-solarized-dark .ace_cursor,\n.ace-solarized-dark .ace_string.ace_regexp {\n  color: #D30102\n}\n\n.ace-solarized-dark .ace_marker-layer .ace_active-line,\n.ace-solarized-dark .ace_marker-layer .ace_selection {\n  background: rgba(255, 255, 255, 0.1)\n}\n\n.ace-solarized-dark.ace_multiselect .ace_selection.ace_start {\n  box-shadow: 0 0 3px 0px #002B36;\n}\n\n.ace-solarized-dark .ace_marker-layer .ace_step {\n  background: rgb(102, 82, 0)\n}\n\n.ace-solarized-dark .ace_marker-layer .ace_bracket {\n  margin: -1px 0 0 -1px;\n  border: 1px solid rgba(147, 161, 161, 0.50)\n}\n\n.ace-solarized-dark .ace_gutter-active-line {\n  background-color: #0d3440\n}\n\n.ace-solarized-dark .ace_marker-layer .ace_selected-word {\n  border: 1px solid #073642\n}\n\n.ace-solarized-dark .ace_invisible {\n  color: rgba(147, 161, 161, 0.50)\n}\n\n.ace-solarized-dark .ace_keyword,\n.ace-solarized-dark .ace_meta,\n.ace-solarized-dark .ace_support.ace_class,\n.ace-solarized-dark .ace_support.ace_type {\n  color: #859900\n}\n\n.ace-solarized-dark .ace_constant.ace_character,\n.ace-solarized-dark .ace_constant.ace_other {\n  color: #CB4B16\n}\n\n.ace-solarized-dark .ace_constant.ace_language {\n  color: #B58900\n}\n\n.ace-solarized-dark .ace_constant.ace_numeric {\n  color: #D33682\n}\n\n.ace-solarized-dark .ace_fold {\n  background-color: #268BD2;\n  border-color: #93A1A1\n}\n\n.ace-solarized-dark .ace_entity.ace_name.ace_function,\n.ace-solarized-dark .ace_entity.ace_name.ace_tag,\n.ace-solarized-dark .ace_support.ace_function,\n.ace-solarized-dark .ace_variable,\n.ace-solarized-dark .ace_variable.ace_language {\n  color: #268BD2\n}\n\n.ace-solarized-dark .ace_string {\n  color: #2AA198\n}\n\n.ace-solarized-dark .ace_comment {\n  font-style: italic;\n  color: #657B83\n}\n\n.ace-solarized-dark .ace_indent-guide {\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNg0Db1ZVCxc/sPAAd4AlUHlLenAAAAAElFTkSuQmCC) right repeat-y\n}\n\n.ace-solarized-dark .ace_indent-guide-active {\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQIW2PQ1dX9zzBz5sz/ABCcBFFentLlAAAAAElFTkSuQmCC) right repeat-y;\n}\n";
    });
    ace.define("ace/theme/solarized_dark", ["require", "exports", "module", "ace/theme/solarized_dark.css", "ace/lib/dom"], function(require2, exports2, module2) {
      exports2.isDark = true;
      exports2.cssClass = "ace-solarized-dark";
      exports2.cssText = require2("./solarized_dark.css");
      var dom = require2("../lib/dom");
      dom.importCssString(exports2.cssText, exports2.cssClass, false);
    });
    (function() {
      ace.require(["ace/theme/solarized_dark"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(themeSolarized_dark$2);
  return themeSolarized_dark$2.exports;
}
var themeSolarized_darkExports = requireThemeSolarized_dark();
const themeSolarized_dark = /* @__PURE__ */ getDefaultExportFromCjs(themeSolarized_darkExports);
const themeSolarized_dark$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: themeSolarized_dark
}, [themeSolarized_darkExports]);
export {
  themeSolarized_dark$1 as t
};
