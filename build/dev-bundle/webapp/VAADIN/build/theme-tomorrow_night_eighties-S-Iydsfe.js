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
var themeTomorrow_night_eighties$2 = { exports: {} };
var hasRequiredThemeTomorrow_night_eighties;
function requireThemeTomorrow_night_eighties() {
  if (hasRequiredThemeTomorrow_night_eighties) return themeTomorrow_night_eighties$2.exports;
  hasRequiredThemeTomorrow_night_eighties = 1;
  (function(module, exports) {
    ace.define("ace/theme/tomorrow_night_eighties.css", ["require", "exports", "module"], function(require2, exports2, module2) {
      module2.exports = ".ace-tomorrow-night-eighties .ace_gutter {\n  background: #272727;\n  color: #CCC\n}\n\n.ace-tomorrow-night-eighties .ace_print-margin {\n  width: 1px;\n  background: #272727\n}\n\n.ace-tomorrow-night-eighties {\n  background-color: #2D2D2D;\n  color: #CCCCCC\n}\n\n.ace-tomorrow-night-eighties .ace_constant.ace_other,\n.ace-tomorrow-night-eighties .ace_cursor {\n  color: #CCCCCC\n}\n\n.ace-tomorrow-night-eighties .ace_marker-layer .ace_selection {\n  background: #515151\n}\n\n.ace-tomorrow-night-eighties.ace_multiselect .ace_selection.ace_start {\n  box-shadow: 0 0 3px 0px #2D2D2D;\n}\n\n.ace-tomorrow-night-eighties .ace_marker-layer .ace_step {\n  background: rgb(102, 82, 0)\n}\n\n.ace-tomorrow-night-eighties .ace_marker-layer .ace_bracket {\n  margin: -1px 0 0 -1px;\n  border: 1px solid #6A6A6A\n}\n\n.ace-tomorrow-night-bright .ace_stack {\n  background: rgb(66, 90, 44)\n}\n\n.ace-tomorrow-night-eighties .ace_marker-layer .ace_active-line {\n  background: #393939\n}\n\n.ace-tomorrow-night-eighties .ace_gutter-active-line {\n  background-color: #393939\n}\n\n.ace-tomorrow-night-eighties .ace_marker-layer .ace_selected-word {\n  border: 1px solid #515151\n}\n\n.ace-tomorrow-night-eighties .ace_invisible {\n  color: #6A6A6A\n}\n\n.ace-tomorrow-night-eighties .ace_keyword,\n.ace-tomorrow-night-eighties .ace_meta,\n.ace-tomorrow-night-eighties .ace_storage,\n.ace-tomorrow-night-eighties .ace_storage.ace_type,\n.ace-tomorrow-night-eighties .ace_support.ace_type {\n  color: #CC99CC\n}\n\n.ace-tomorrow-night-eighties .ace_keyword.ace_operator {\n  color: #66CCCC\n}\n\n.ace-tomorrow-night-eighties .ace_constant.ace_character,\n.ace-tomorrow-night-eighties .ace_constant.ace_language,\n.ace-tomorrow-night-eighties .ace_constant.ace_numeric,\n.ace-tomorrow-night-eighties .ace_keyword.ace_other.ace_unit,\n.ace-tomorrow-night-eighties .ace_support.ace_constant,\n.ace-tomorrow-night-eighties .ace_variable.ace_parameter {\n  color: #F99157\n}\n\n.ace-tomorrow-night-eighties .ace_invalid {\n  color: #CDCDCD;\n  background-color: #F2777A\n}\n\n.ace-tomorrow-night-eighties .ace_invalid.ace_deprecated {\n  color: #CDCDCD;\n  background-color: #CC99CC\n}\n\n.ace-tomorrow-night-eighties .ace_fold {\n  background-color: #6699CC;\n  border-color: #CCCCCC\n}\n\n.ace-tomorrow-night-eighties .ace_entity.ace_name.ace_function,\n.ace-tomorrow-night-eighties .ace_support.ace_function,\n.ace-tomorrow-night-eighties .ace_variable {\n  color: #6699CC\n}\n\n.ace-tomorrow-night-eighties .ace_support.ace_class,\n.ace-tomorrow-night-eighties .ace_support.ace_type {\n  color: #FFCC66\n}\n\n.ace-tomorrow-night-eighties .ace_heading,\n.ace-tomorrow-night-eighties .ace_markup.ace_heading,\n.ace-tomorrow-night-eighties .ace_string {\n  color: #99CC99\n}\n\n.ace-tomorrow-night-eighties .ace_comment {\n  color: #999999\n}\n\n.ace-tomorrow-night-eighties .ace_entity.ace_name.ace_tag,\n.ace-tomorrow-night-eighties .ace_entity.ace_other.ace_attribute-name,\n.ace-tomorrow-night-eighties .ace_meta.ace_tag,\n.ace-tomorrow-night-eighties .ace_variable {\n  color: #F2777A\n}\n\n.ace-tomorrow-night-eighties .ace_indent-guide {\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWPQ09NrYAgMjP4PAAtGAwchHMyAAAAAAElFTkSuQmCC) right repeat-y\n}\n\n.ace-tomorrow-night-eighties .ace_indent-guide-active {\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQIW2PQ1dX9zzBz5sz/ABCcBFFentLlAAAAAElFTkSuQmCC) right repeat-y;\n}\n";
    });
    ace.define("ace/theme/tomorrow_night_eighties", ["require", "exports", "module", "ace/theme/tomorrow_night_eighties.css", "ace/lib/dom"], function(require2, exports2, module2) {
      exports2.isDark = true;
      exports2.cssClass = "ace-tomorrow-night-eighties";
      exports2.cssText = require2("./tomorrow_night_eighties.css");
      var dom = require2("../lib/dom");
      dom.importCssString(exports2.cssText, exports2.cssClass, false);
    });
    (function() {
      ace.require(["ace/theme/tomorrow_night_eighties"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(themeTomorrow_night_eighties$2);
  return themeTomorrow_night_eighties$2.exports;
}
var themeTomorrow_night_eightiesExports = requireThemeTomorrow_night_eighties();
const themeTomorrow_night_eighties = /* @__PURE__ */ getDefaultExportFromCjs(themeTomorrow_night_eightiesExports);
const themeTomorrow_night_eighties$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: themeTomorrow_night_eighties
}, [themeTomorrow_night_eightiesExports]);
export {
  themeTomorrow_night_eighties$1 as t
};
