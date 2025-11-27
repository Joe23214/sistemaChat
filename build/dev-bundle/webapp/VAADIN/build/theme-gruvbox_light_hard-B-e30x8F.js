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
var themeGruvbox_light_hard$2 = { exports: {} };
var hasRequiredThemeGruvbox_light_hard;
function requireThemeGruvbox_light_hard() {
  if (hasRequiredThemeGruvbox_light_hard) return themeGruvbox_light_hard$2.exports;
  hasRequiredThemeGruvbox_light_hard = 1;
  (function(module, exports) {
    ace.define("ace/theme/gruvbox_light_hard.css", ["require", "exports", "module"], function(require2, exports2, module2) {
      module2.exports = '.ace-gruvbox-light-hard .ace_gutter {\n  background: #f9f5d7;\n  color: rgb(155,151,135)\n}\n\n.ace-gruvbox-light-hard .ace_print-margin {\n  width: 1px;\n  background: #e8e8e8\n}\n\n.ace-gruvbox-light-hard {\n  background-color: #f9f5d7;\n  color: rgba(60, 56, 54, 0.50)\n}\n\n.ace-gruvbox-light-hard .ace_cursor {\n  color: #7c6f64\n}\n\n.ace-gruvbox-light-hard .ace_marker-layer .ace_selection {\n  background: #ebdbb2\n}\n\n.ace-gruvbox-light-hard.ace_multiselect .ace_selection.ace_start {\n  box-shadow: 0 0 3px 0px #f9f5d7;\n  border-radius: 2px\n}\n\n.ace-gruvbox-light-hard .ace_marker-layer .ace_step {\n  background: rgb(198, 219, 174)\n}\n\n.ace-gruvbox-light-hard .ace_marker-layer .ace_bracket {\n  margin: -1px 0 0 -1px;\n  border: 1px solid rgba(60, 56, 54, 0.15)\n}\n\n.ace-gruvbox-light-hard .ace_marker-layer .ace_active-line {\n  background: #ebdbb2\n}\n\n.ace-gruvbox-light-hard .ace_gutter-active-line {\n  background-color: #ebdbb2\n}\n\n.ace-gruvbox-light-hard .ace_marker-layer .ace_selected-word {\n  border: 1px solid #ebdbb2\n}\n\n.ace-gruvbox-light-hard .ace_fold {\n  background-color: #79740e;\n  border-color: rgba(60, 56, 54, 0.50)\n}\n\n.ace-gruvbox-light-hard .ace_keyword {\n  color: #9d0006\n}\n\n.ace-gruvbox-light-hard .ace_keyword.ace_operator {\n  color: #427b58\n}\n\n.ace-gruvbox-light-hard .ace_keyword.ace_other.ace_unit {\n  color: #b16286\n}\n\n.ace-gruvbox-light-hard .ace_constant {\n  color: #8f3f71\n}\n\n.ace-gruvbox-light-hard .ace_constant.ace_numeric {\n  color: #8f3f71\n}\n\n.ace-gruvbox-light-hard .ace_constant.ace_character.ace_escape {\n  color: #9d0006\n}\n\n.ace-gruvbox-light-hard .ace_constant.ace_other {\n  color: #8f3f71\n}\n\n.ace-gruvbox-light-hard .ace_support.ace_function {\n  color: #427b58\n}\n\n.ace-gruvbox-light-hard .ace_support.ace_constant {\n  color: #8f3f71\n}\n\n.ace-gruvbox-light-hard .ace_support.ace_constant.ace_property-value {\n  color: #1d2021\n}\n\n.ace-gruvbox-light-hard .ace_support.ace_class {\n  color: #b57614\n}\n\n.ace-gruvbox-light-hard .ace_support.ace_type {\n  color: #b57614\n}\n\n.ace-gruvbox-light-hard .ace_storage {\n  color: #9d0006\n}\n\n.ace-gruvbox-light-hard .ace_invalid {\n  color: #1d2021;\n  background-color: #9d0006\n}\n\n.ace-gruvbox-light-hard .ace_string {\n  color: #79740e\n}\n\n.ace-gruvbox-light-hard .ace_string.ace_regexp {\n  color: #79740e\n}\n\n.ace-gruvbox-light-hard .ace_comment {\n  font-style: italic;\n  color: #928374\n}\n\n.ace-gruvbox-light-hard .ace_variable {\n  color: #076678\n}\n\n.ace-gruvbox-light-hard .ace_variable.ace_language {\n  color: #8f3f71\n}\n\n.ace-gruvbox-light-hard .ace_variable.ace_parameter {\n  color: #1d2021\n}\n\n.ace-gruvbox-light-hard .ace_meta.ace_tag {\n  color: #1d2021\n}\n\n.ace-gruvbox-light-hard .ace_entity.ace_other.ace_attribute-name {\n  color: #b57614\n}\n\n.ace-gruvbox-light-hard .ace_entity.ace_name.ace_function {\n  color: #79740e\n}\n\n.ace-gruvbox-light-hard .ace_entity.ace_name.ace_tag {\n  color: #076678\n}\n\n.ace-gruvbox-light-hard .ace_markup.ace_heading {\n  color: #79740e\n}\n\n.ace-gruvbox-light-hard .ace_markup.ace_list {\n  color: #076678\n}\n\n.ace-gruvbox-light-hard .ace_indent-guide {\n    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==") right repeat-y;\n}\n\n.ace-gruvbox-light-hard .ace_indent-guide-active {\n  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAZSURBVHjaYvj///9/hivKyv8BAAAA//8DACLqBhbvk+/eAAAAAElFTkSuQmCC") right repeat-y;\n} \n';
    });
    ace.define("ace/theme/gruvbox_light_hard", ["require", "exports", "module", "ace/theme/gruvbox_light_hard.css", "ace/lib/dom"], function(require2, exports2, module2) {
      exports2.isDark = false;
      exports2.cssClass = "ace-gruvbox-light-hard";
      exports2.cssText = require2("./gruvbox_light_hard.css");
      var dom = require2("../lib/dom");
      dom.importCssString(exports2.cssText, exports2.cssClass);
    });
    (function() {
      ace.require(["ace/theme/gruvbox_light_hard"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(themeGruvbox_light_hard$2);
  return themeGruvbox_light_hard$2.exports;
}
var themeGruvbox_light_hardExports = requireThemeGruvbox_light_hard();
const themeGruvbox_light_hard = /* @__PURE__ */ getDefaultExportFromCjs(themeGruvbox_light_hardExports);
const themeGruvbox_light_hard$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: themeGruvbox_light_hard
}, [themeGruvbox_light_hardExports]);
export {
  themeGruvbox_light_hard$1 as t
};
