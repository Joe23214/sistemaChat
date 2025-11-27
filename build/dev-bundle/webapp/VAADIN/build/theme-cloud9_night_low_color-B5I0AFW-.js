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
var themeCloud9_night_low_color$2 = { exports: {} };
var hasRequiredThemeCloud9_night_low_color;
function requireThemeCloud9_night_low_color() {
  if (hasRequiredThemeCloud9_night_low_color) return themeCloud9_night_low_color$2.exports;
  hasRequiredThemeCloud9_night_low_color = 1;
  (function(module, exports) {
    ace.define("ace/theme/cloud9_night_low_color.css", ["require", "exports", "module"], function(require2, exports2, module2) {
      module2.exports = ".ace-cloud9-night-low-color .ace_gutter {\n    background: #303130;\n    color: #eee\n}\n\n.ace-cloud9-night-low-color .ace_print-margin {\n    width: 1px;\n    background: #222\n}\n\n.ace-cloud9-night-low-color {\n    background-color: #181818;\n    color: #EBEBEB\n}\n\n.ace-cloud9-night-low-color .ace_cursor {\n    color: #9F9F9F\n}\n\n.ace-cloud9-night-low-color .ace_marker-layer .ace_selection {\n    background: #424242\n}\n\n.ace-cloud9-night-low-color.ace_multiselect .ace_selection.ace_start {\n    box-shadow: 0 0 3px 0px #000000;\n    border-radius: 2px\n}\n\n.ace-cloud9-night-low-color .ace_marker-layer .ace_step {\n    background: rgb(102, 82, 0)\n}\n\n.ace-cloud9-night-low-color .ace_marker-layer .ace_bracket {\n    margin: -1px 0 0 -1px;\n    border: 1px solid #888888\n}\n\n.ace-cloud9-night-low-color .ace_marker-layer .ace_highlight {\n    border: 1px solid rgb(110, 119, 0);\n    border-bottom: 0;\n    box-shadow: inset 0 -1px rgb(110, 119, 0);\n    margin: -1px 0 0 -1px;\n    background: rgba(255, 235, 0, 0.1);\n}\n\n.ace-cloud9-night-low-color .ace_marker-layer .ace_active-line {\n    background: #292929\n}\n\n.ace-cloud9-night-low-color .ace_gutter-active-line {\n    background-color: #3D3D3D\n}\n\n.ace-cloud9-night-low-color .ace_stack {\n    background-color: rgb(66, 90, 44)\n}\n\n.ace-cloud9-night-low-color .ace_marker-layer .ace_selected-word {\n    border: 1px solid #888888\n}\n\n.ace-cloud9-night-low-color .ace_invisible {\n    color: #343434\n}\n\n.ace-cloud9-night-low-color .ace_keyword,\n.ace-cloud9-night-low-color .ace_meta,\n.ace-cloud9-night-low-color .ace_storage {\n    color: #C397D8\n}\n\n.ace-cloud9-night-low-color .ace_keyword.ace_operator {\n    color: #70C0B1\n}\n\n.ace-cloud9-night-low-color .ace_constant.ace_character,\n.ace-cloud9-night-low-color .ace_constant.ace_language,\n.ace-cloud9-night-low-color .ace_constant.ace_numeric,\n.ace-cloud9-night-low-color .ace_keyword.ace_other.ace_unit {\n    color: #DAA637\n}\n\n.ace-cloud9-night-low-color .ace_constant.ace_other {\n    color: #EEEEEE\n}\n\n.ace-cloud9-night-low-color .ace_invalid {\n    color: #CED2CF;\n    background-color: #DF5F5F\n}\n\n.ace-cloud9-night-low-color .ace_invalid.ace_deprecated {\n    color: #CED2CF;\n    background-color: #B798BF\n}\n\n.ace-cloud9-night-low-color .ace_fold {\n    background-color: #7AA6DA;\n    border-color: #DEDEDE\n}\n\n.ace-cloud9-night-low-color .ace_entity.ace_name.ace_function,\n.ace-cloud9-night-low-color .ace_support.ace_function,\n.ace-cloud9-night-low-color .ace_variable:not(.ace_parameter),\n.ace-cloud9-night-low-color .ace_constant:not(.ace_numeric) {\n    color: #7AA6DA\n}\n\n.ace-cloud9-night-low-color .ace_support.ace_class,\n.ace-cloud9-night-low-color .ace_support.ace_type {\n    color: #E7C547\n}\n\n.ace-cloud9-night-low-color .ace_heading,\n.ace-cloud9-night-low-color .ace_markup.ace_heading,\n.ace-cloud9-night-low-color .ace_string {\n    color: #B9CA4A\n}\n\n.ace-cloud9-night-low-color .ace_comment {\n    color: #969896\n}\n\n.ace-cloud9-night-low-color .ace_c9searchresults.ace_keyword {\n    color: #C2C280;\n}\n\n.ace-cloud9-night-low-color .ace_indent-guide {\n    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNgYGBgYFBXV/8PAAJoAXX4kT2EAAAAAElFTkSuQmCC) right repeat-y\n}\n\n.ace-cloud9-night-low-color .ace_indent-guide-active {\n    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQIW2PQ1dX9zzBz5sz/ABCcBFFentLlAAAAAElFTkSuQmCC) right repeat-y;\n}\n";
    });
    ace.define("ace/theme/cloud9_night_low_color", ["require", "exports", "module", "ace/theme/cloud9_night_low_color.css", "ace/lib/dom"], function(require2, exports2, module2) {
      exports2.isDark = true;
      exports2.cssClass = "ace-cloud9-night-low-color";
      exports2.cssText = require2("./cloud9_night_low_color.css");
      var dom = require2("../lib/dom");
      dom.importCssString(exports2.cssText, exports2.cssClass);
    });
    (function() {
      ace.require(["ace/theme/cloud9_night_low_color"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(themeCloud9_night_low_color$2);
  return themeCloud9_night_low_color$2.exports;
}
var themeCloud9_night_low_colorExports = requireThemeCloud9_night_low_color();
const themeCloud9_night_low_color = /* @__PURE__ */ getDefaultExportFromCjs(themeCloud9_night_low_colorExports);
const themeCloud9_night_low_color$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: themeCloud9_night_low_color
}, [themeCloud9_night_low_colorExports]);
export {
  themeCloud9_night_low_color$1 as t
};
