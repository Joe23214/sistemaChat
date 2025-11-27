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
var themeTomorrow_night_blue$2 = { exports: {} };
var hasRequiredThemeTomorrow_night_blue;
function requireThemeTomorrow_night_blue() {
  if (hasRequiredThemeTomorrow_night_blue) return themeTomorrow_night_blue$2.exports;
  hasRequiredThemeTomorrow_night_blue = 1;
  (function(module, exports) {
    ace.define("ace/theme/tomorrow_night_blue.css", ["require", "exports", "module"], function(require2, exports2, module2) {
      module2.exports = ".ace-tomorrow-night-blue .ace_gutter {\n  background: #00204b;\n  color: #7388b5\n}\n\n.ace-tomorrow-night-blue .ace_print-margin {\n  width: 1px;\n  background: #00204b\n}\n\n.ace-tomorrow-night-blue {\n  background-color: #002451;\n  color: #FFFFFF\n}\n\n.ace-tomorrow-night-blue .ace_constant.ace_other,\n.ace-tomorrow-night-blue .ace_cursor {\n  color: #FFFFFF\n}\n\n.ace-tomorrow-night-blue .ace_marker-layer .ace_selection {\n  background: #003F8E\n}\n\n.ace-tomorrow-night-blue.ace_multiselect .ace_selection.ace_start {\n  box-shadow: 0 0 3px 0px #002451;\n}\n\n.ace-tomorrow-night-blue .ace_marker-layer .ace_step {\n  background: rgb(127, 111, 19)\n}\n\n.ace-tomorrow-night-blue .ace_marker-layer .ace_bracket {\n  margin: -1px 0 0 -1px;\n  border: 1px solid #404F7D\n}\n\n.ace-tomorrow-night-blue .ace_marker-layer .ace_active-line {\n  background: #00346E\n}\n\n.ace-tomorrow-night-blue .ace_gutter-active-line {\n  background-color: #022040\n}\n\n.ace-tomorrow-night-blue .ace_marker-layer .ace_selected-word {\n  border: 1px solid #003F8E\n}\n\n.ace-tomorrow-night-blue .ace_invisible {\n  color: #404F7D\n}\n\n.ace-tomorrow-night-blue .ace_keyword,\n.ace-tomorrow-night-blue .ace_meta,\n.ace-tomorrow-night-blue .ace_storage,\n.ace-tomorrow-night-blue .ace_storage.ace_type,\n.ace-tomorrow-night-blue .ace_support.ace_type {\n  color: #EBBBFF\n}\n\n.ace-tomorrow-night-blue .ace_keyword.ace_operator {\n  color: #99FFFF\n}\n\n.ace-tomorrow-night-blue .ace_constant.ace_character,\n.ace-tomorrow-night-blue .ace_constant.ace_language,\n.ace-tomorrow-night-blue .ace_constant.ace_numeric,\n.ace-tomorrow-night-blue .ace_keyword.ace_other.ace_unit,\n.ace-tomorrow-night-blue .ace_support.ace_constant,\n.ace-tomorrow-night-blue .ace_variable.ace_parameter {\n  color: #FFC58F\n}\n\n.ace-tomorrow-night-blue .ace_invalid {\n  color: #FFFFFF;\n  background-color: #F99DA5\n}\n\n.ace-tomorrow-night-blue .ace_invalid.ace_deprecated {\n  color: #FFFFFF;\n  background-color: #EBBBFF\n}\n\n.ace-tomorrow-night-blue .ace_fold {\n  background-color: #BBDAFF;\n  border-color: #FFFFFF\n}\n\n.ace-tomorrow-night-blue .ace_entity.ace_name.ace_function,\n.ace-tomorrow-night-blue .ace_support.ace_function,\n.ace-tomorrow-night-blue .ace_variable {\n  color: #BBDAFF\n}\n\n.ace-tomorrow-night-blue .ace_support.ace_class,\n.ace-tomorrow-night-blue .ace_support.ace_type {\n  color: #FFEEAD\n}\n\n.ace-tomorrow-night-blue .ace_heading,\n.ace-tomorrow-night-blue .ace_markup.ace_heading,\n.ace-tomorrow-night-blue .ace_string {\n  color: #D1F1A9\n}\n\n.ace-tomorrow-night-blue .ace_entity.ace_name.ace_tag,\n.ace-tomorrow-night-blue .ace_entity.ace_other.ace_attribute-name,\n.ace-tomorrow-night-blue .ace_meta.ace_tag,\n.ace-tomorrow-night-blue .ace_string.ace_regexp,\n.ace-tomorrow-night-blue .ace_variable {\n  color: #FF9DA4\n}\n\n.ace-tomorrow-night-blue .ace_comment {\n  color: #7285B7\n}\n\n.ace-tomorrow-night-blue .ace_indent-guide {\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNgYGBgYJDzqfwPAANXAeNsiA+ZAAAAAElFTkSuQmCC) right repeat-y\n}\n\n.ace-tomorrow-night-blue .ace_indent-guide-active {\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQIW2PQ1dX9zzBz5sz/ABCcBFFentLlAAAAAElFTkSuQmCC) right repeat-y;\n}\n";
    });
    ace.define("ace/theme/tomorrow_night_blue", ["require", "exports", "module", "ace/theme/tomorrow_night_blue.css", "ace/lib/dom"], function(require2, exports2, module2) {
      exports2.isDark = true;
      exports2.cssClass = "ace-tomorrow-night-blue";
      exports2.cssText = require2("./tomorrow_night_blue.css");
      var dom = require2("../lib/dom");
      dom.importCssString(exports2.cssText, exports2.cssClass, false);
    });
    (function() {
      ace.require(["ace/theme/tomorrow_night_blue"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(themeTomorrow_night_blue$2);
  return themeTomorrow_night_blue$2.exports;
}
var themeTomorrow_night_blueExports = requireThemeTomorrow_night_blue();
const themeTomorrow_night_blue = /* @__PURE__ */ getDefaultExportFromCjs(themeTomorrow_night_blueExports);
const themeTomorrow_night_blue$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: themeTomorrow_night_blue
}, [themeTomorrow_night_blueExports]);
export {
  themeTomorrow_night_blue$1 as t
};
