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
var themeClouds_midnight$2 = { exports: {} };
var hasRequiredThemeClouds_midnight;
function requireThemeClouds_midnight() {
  if (hasRequiredThemeClouds_midnight) return themeClouds_midnight$2.exports;
  hasRequiredThemeClouds_midnight = 1;
  (function(module, exports) {
    ace.define("ace/theme/clouds_midnight.css", ["require", "exports", "module"], function(require2, exports2, module2) {
      module2.exports = ".ace-clouds-midnight .ace_gutter {\n  background: #232323;\n  color: #929292\n}\n\n.ace-clouds-midnight .ace_print-margin {\n  width: 1px;\n  background: #232323\n}\n\n.ace-clouds-midnight {\n  background-color: #191919;\n  color: #929292\n}\n\n.ace-clouds-midnight .ace_cursor {\n  color: #7DA5DC\n}\n\n.ace-clouds-midnight .ace_marker-layer .ace_selection {\n  background: #000000\n}\n\n.ace-clouds-midnight.ace_multiselect .ace_selection.ace_start {\n  box-shadow: 0 0 3px 0px #191919;\n}\n\n.ace-clouds-midnight .ace_marker-layer .ace_step {\n  background: rgb(102, 82, 0)\n}\n\n.ace-clouds-midnight .ace_marker-layer .ace_bracket {\n  margin: -1px 0 0 -1px;\n  border: 1px solid #BFBFBF\n}\n\n.ace-clouds-midnight .ace_marker-layer .ace_active-line {\n  background: rgba(215, 215, 215, 0.031)\n}\n\n.ace-clouds-midnight .ace_gutter-active-line {\n  background-color: rgba(215, 215, 215, 0.031)\n}\n\n.ace-clouds-midnight .ace_marker-layer .ace_selected-word {\n  border: 1px solid #000000\n}\n\n.ace-clouds-midnight .ace_invisible {\n  color: #666\n}\n\n.ace-clouds-midnight .ace_keyword,\n.ace-clouds-midnight .ace_meta,\n.ace-clouds-midnight .ace_support.ace_constant.ace_property-value {\n  color: #927C5D\n}\n\n.ace-clouds-midnight .ace_keyword.ace_operator {\n  color: #4B4B4B\n}\n\n.ace-clouds-midnight .ace_keyword.ace_other.ace_unit {\n  color: #366F1A\n}\n\n.ace-clouds-midnight .ace_constant.ace_language {\n  color: #39946A\n}\n\n.ace-clouds-midnight .ace_constant.ace_numeric {\n  color: #46A609\n}\n\n.ace-clouds-midnight .ace_constant.ace_character.ace_entity {\n  color: #A165AC\n}\n\n.ace-clouds-midnight .ace_invalid {\n  color: #FFFFFF;\n  background-color: #E92E2E\n}\n\n.ace-clouds-midnight .ace_fold {\n  background-color: #927C5D;\n  border-color: #929292\n}\n\n.ace-clouds-midnight .ace_storage,\n.ace-clouds-midnight .ace_support.ace_class,\n.ace-clouds-midnight .ace_support.ace_function,\n.ace-clouds-midnight .ace_support.ace_other,\n.ace-clouds-midnight .ace_support.ace_type {\n  color: #E92E2E\n}\n\n.ace-clouds-midnight .ace_string {\n  color: #5D90CD\n}\n\n.ace-clouds-midnight .ace_comment {\n  color: #3C403B\n}\n\n.ace-clouds-midnight .ace_entity.ace_name.ace_tag,\n.ace-clouds-midnight .ace_entity.ace_other.ace_attribute-name {\n  color: #606060\n}\n\n.ace-clouds-midnight .ace_indent-guide {\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNgYGBgYHB3d/8PAAOIAdULw8qMAAAAAElFTkSuQmCC) right repeat-y\n}\n\n.ace-clouds-midnight .ace_indent-guide-active {\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQIW2PQ1dX9zzBz5sz/ABCcBFFentLlAAAAAElFTkSuQmCC) right repeat-y;\n}\n";
    });
    ace.define("ace/theme/clouds_midnight", ["require", "exports", "module", "ace/theme/clouds_midnight.css", "ace/lib/dom"], function(require2, exports2, module2) {
      exports2.isDark = true;
      exports2.cssClass = "ace-clouds-midnight";
      exports2.cssText = require2("./clouds_midnight.css");
      var dom = require2("../lib/dom");
      dom.importCssString(exports2.cssText, exports2.cssClass, false);
    });
    (function() {
      ace.require(["ace/theme/clouds_midnight"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(themeClouds_midnight$2);
  return themeClouds_midnight$2.exports;
}
var themeClouds_midnightExports = requireThemeClouds_midnight();
const themeClouds_midnight = /* @__PURE__ */ getDefaultExportFromCjs(themeClouds_midnightExports);
const themeClouds_midnight$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: themeClouds_midnight
}, [themeClouds_midnightExports]);
export {
  themeClouds_midnight$1 as t
};
