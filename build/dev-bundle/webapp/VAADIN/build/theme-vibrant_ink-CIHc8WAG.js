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
var themeVibrant_ink$2 = { exports: {} };
var hasRequiredThemeVibrant_ink;
function requireThemeVibrant_ink() {
  if (hasRequiredThemeVibrant_ink) return themeVibrant_ink$2.exports;
  hasRequiredThemeVibrant_ink = 1;
  (function(module, exports) {
    ace.define("ace/theme/vibrant_ink.css", ["require", "exports", "module"], function(require2, exports2, module2) {
      module2.exports = ".ace-vibrant-ink .ace_gutter {\n  background: #1a1a1a;\n  color: #BEBEBE\n}\n\n.ace-vibrant-ink .ace_print-margin {\n  width: 1px;\n  background: #1a1a1a\n}\n\n.ace-vibrant-ink {\n  background-color: #0F0F0F;\n  color: #FFFFFF\n}\n\n.ace-vibrant-ink .ace_cursor {\n  color: #FFFFFF\n}\n\n.ace-vibrant-ink .ace_marker-layer .ace_selection {\n  background: #6699CC\n}\n\n.ace-vibrant-ink.ace_multiselect .ace_selection.ace_start {\n  box-shadow: 0 0 3px 0px #0F0F0F;\n}\n\n.ace-vibrant-ink .ace_marker-layer .ace_step {\n  background: rgb(102, 82, 0)\n}\n\n.ace-vibrant-ink .ace_marker-layer .ace_bracket {\n  margin: -1px 0 0 -1px;\n  border: 1px solid #404040\n}\n\n.ace-vibrant-ink .ace_marker-layer .ace_active-line {\n  background: #333333\n}\n\n.ace-vibrant-ink .ace_gutter-active-line {\n  background-color: #333333\n}\n\n.ace-vibrant-ink .ace_marker-layer .ace_selected-word {\n  border: 1px solid #6699CC\n}\n\n.ace-vibrant-ink .ace_invisible {\n  color: #404040\n}\n\n.ace-vibrant-ink .ace_keyword,\n.ace-vibrant-ink .ace_meta {\n  color: #FF6600\n}\n\n.ace-vibrant-ink .ace_constant,\n.ace-vibrant-ink .ace_constant.ace_character,\n.ace-vibrant-ink .ace_constant.ace_character.ace_escape,\n.ace-vibrant-ink .ace_constant.ace_other {\n  color: #339999\n}\n\n.ace-vibrant-ink .ace_constant.ace_numeric {\n  color: #99CC99\n}\n\n.ace-vibrant-ink .ace_invalid,\n.ace-vibrant-ink .ace_invalid.ace_deprecated {\n  color: #CCFF33;\n  background-color: #000000\n}\n\n.ace-vibrant-ink .ace_fold {\n  background-color: #FFCC00;\n  border-color: #FFFFFF\n}\n\n.ace-vibrant-ink .ace_entity.ace_name.ace_function,\n.ace-vibrant-ink .ace_support.ace_function,\n.ace-vibrant-ink .ace_variable {\n  color: #FFCC00\n}\n\n.ace-vibrant-ink .ace_variable.ace_parameter {\n  font-style: italic\n}\n\n.ace-vibrant-ink .ace_string {\n  color: #66FF00\n}\n\n.ace-vibrant-ink .ace_string.ace_regexp {\n  color: #44B4CC\n}\n\n.ace-vibrant-ink .ace_comment {\n  color: #9933CC\n}\n\n.ace-vibrant-ink .ace_entity.ace_other.ace_attribute-name {\n  font-style: italic;\n  color: #99CC99\n}\n\n.ace-vibrant-ink .ace_indent-guide {\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNgYGBgYNDTc/oPAALPAZ7hxlbYAAAAAElFTkSuQmCC) right repeat-y\n}\n\n.ace-vibrant-ink .ace_indent-guide-active {\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQIW2PQ1dX9zzBz5sz/ABCcBFFentLlAAAAAElFTkSuQmCC) right repeat-y;\n}\n";
    });
    ace.define("ace/theme/vibrant_ink", ["require", "exports", "module", "ace/theme/vibrant_ink.css", "ace/lib/dom"], function(require2, exports2, module2) {
      exports2.isDark = true;
      exports2.cssClass = "ace-vibrant-ink";
      exports2.cssText = require2("./vibrant_ink.css");
      var dom = require2("../lib/dom");
      dom.importCssString(exports2.cssText, exports2.cssClass, false);
    });
    (function() {
      ace.require(["ace/theme/vibrant_ink"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(themeVibrant_ink$2);
  return themeVibrant_ink$2.exports;
}
var themeVibrant_inkExports = requireThemeVibrant_ink();
const themeVibrant_ink = /* @__PURE__ */ getDefaultExportFromCjs(themeVibrant_inkExports);
const themeVibrant_ink$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: themeVibrant_ink
}, [themeVibrant_inkExports]);
export {
  themeVibrant_ink$1 as t
};
