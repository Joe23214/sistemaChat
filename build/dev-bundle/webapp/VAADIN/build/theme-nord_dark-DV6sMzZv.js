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
var themeNord_dark$2 = { exports: {} };
var hasRequiredThemeNord_dark;
function requireThemeNord_dark() {
  if (hasRequiredThemeNord_dark) return themeNord_dark$2.exports;
  hasRequiredThemeNord_dark = 1;
  (function(module, exports) {
    ace.define("ace/theme/nord_dark.css", ["require", "exports", "module"], function(require2, exports2, module2) {
      module2.exports = ".ace-nord-dark .ace_gutter {\n  color: #616e88;\n}\n\n.ace-nord-dark .ace_print-margin {\n  width: 1px;\n  background: #4c566a;\n}\n\n.ace-nord-dark {\n  background-color: #2e3440;\n  color: #d8dee9;\n}\n\n.ace-nord-dark .ace_entity.ace_other.ace_attribute-name,\n.ace-nord-dark .ace_storage {\n  color: #d8dee9;\n}\n\n.ace-nord-dark .ace_cursor {\n  color: #d8dee9;\n}\n\n.ace-nord-dark .ace_string.ace_regexp {\n  color: #bf616a;\n}\n\n.ace-nord-dark .ace_marker-layer .ace_active-line {\n  background: #434c5ecc;\n}\n.ace-nord-dark .ace_marker-layer .ace_selection {\n  background: #434c5ecc;\n}\n\n.ace-nord-dark.ace_multiselect .ace_selection.ace_start {\n  box-shadow: 0 0 3px 0px #2e3440;\n}\n\n.ace-nord-dark .ace_marker-layer .ace_step {\n  background: #ebcb8b;\n}\n\n.ace-nord-dark .ace_marker-layer .ace_bracket {\n  margin: -1px 0 0 -1px;\n  border: 1px solid #88c0d066;\n}\n\n.ace-nord-dark .ace_gutter-active-line {\n  background-color: #434c5ecc;\n}\n\n.ace-nord-dark .ace_marker-layer .ace_selected-word {\n  border: 1px solid #88c0d066;\n}\n\n.ace-nord-dark .ace_invisible {\n  color: #4c566a;\n}\n\n.ace-nord-dark .ace_keyword,\n.ace-nord-dark .ace_meta,\n.ace-nord-dark .ace_support.ace_class,\n.ace-nord-dark .ace_support.ace_type {\n  color: #81a1c1;\n}\n\n.ace-nord-dark .ace_constant.ace_character,\n.ace-nord-dark .ace_constant.ace_other {\n  color: #d8dee9;\n}\n\n.ace-nord-dark .ace_constant.ace_language {\n  color: #5e81ac;\n}\n\n.ace-nord-dark .ace_constant.ace_escape {\n  color: #ebcB8b;\n}\n\n.ace-nord-dark .ace_constant.ace_numeric {\n  color: #b48ead;\n}\n\n.ace-nord-dark .ace_fold {\n  background-color: #4c566a;\n  border-color: #d8dee9;\n}\n\n.ace-nord-dark .ace_entity.ace_name.ace_function,\n.ace-nord-dark .ace_entity.ace_name.ace_tag,\n.ace-nord-dark .ace_support.ace_function,\n.ace-nord-dark .ace_variable,\n.ace-nord-dark .ace_variable.ace_language {\n  color: #8fbcbb;\n}\n\n.ace-nord-dark .ace_string {\n  color: #a3be8c;\n}\n\n.ace-nord-dark .ace_comment {\n  color: #616e88;\n}\n\n.ace-nord-dark .ace_indent-guide {\n  box-shadow: inset -1px 0 0 0 #434c5eb3;\n}\n\n.ace-nord-dark .ace_indent-guide-active {\n  box-shadow: inset -1px 0 0 0 #8395b8b3;\n}\n";
    });
    ace.define("ace/theme/nord_dark", ["require", "exports", "module", "ace/theme/nord_dark.css", "ace/lib/dom"], function(require2, exports2, module2) {
      exports2.isDark = true;
      exports2.cssClass = "ace-nord-dark";
      exports2.cssText = require2("./nord_dark.css");
      exports2.$selectionColorConflict = true;
      var dom = require2("../lib/dom");
      dom.importCssString(exports2.cssText, exports2.cssClass, false);
    });
    (function() {
      ace.require(["ace/theme/nord_dark"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(themeNord_dark$2);
  return themeNord_dark$2.exports;
}
var themeNord_darkExports = requireThemeNord_dark();
const themeNord_dark = /* @__PURE__ */ getDefaultExportFromCjs(themeNord_darkExports);
const themeNord_dark$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: themeNord_dark
}, [themeNord_darkExports]);
export {
  themeNord_dark$1 as t
};
