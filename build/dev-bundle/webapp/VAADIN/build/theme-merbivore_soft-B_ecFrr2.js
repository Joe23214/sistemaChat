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
var themeMerbivore_soft$2 = { exports: {} };
var hasRequiredThemeMerbivore_soft;
function requireThemeMerbivore_soft() {
  if (hasRequiredThemeMerbivore_soft) return themeMerbivore_soft$2.exports;
  hasRequiredThemeMerbivore_soft = 1;
  (function(module, exports) {
    ace.define("ace/theme/merbivore_soft.css", ["require", "exports", "module"], function(require2, exports2, module2) {
      module2.exports = ".ace-merbivore-soft .ace_gutter {\n  background: #262424;\n  color: #E6E1DC\n}\n\n.ace-merbivore-soft .ace_print-margin {\n  width: 1px;\n  background: #262424\n}\n\n.ace-merbivore-soft {\n  background-color: #1C1C1C;\n  color: #E6E1DC\n}\n\n.ace-merbivore-soft .ace_cursor {\n  color: #FFFFFF\n}\n\n.ace-merbivore-soft .ace_marker-layer .ace_selection {\n  background: #494949\n}\n\n.ace-merbivore-soft.ace_multiselect .ace_selection.ace_start {\n  box-shadow: 0 0 3px 0px #1C1C1C;\n}\n\n.ace-merbivore-soft .ace_marker-layer .ace_step {\n  background: rgb(102, 82, 0)\n}\n\n.ace-merbivore-soft .ace_marker-layer .ace_bracket {\n  margin: -1px 0 0 -1px;\n  border: 1px solid #404040\n}\n\n.ace-merbivore-soft .ace_marker-layer .ace_active-line {\n  background: #333435\n}\n\n.ace-merbivore-soft .ace_gutter-active-line {\n  background-color: #333435\n}\n\n.ace-merbivore-soft .ace_marker-layer .ace_selected-word {\n  border: 1px solid #494949\n}\n\n.ace-merbivore-soft .ace_invisible {\n  color: #404040\n}\n\n.ace-merbivore-soft .ace_entity.ace_name.ace_tag,\n.ace-merbivore-soft .ace_keyword,\n.ace-merbivore-soft .ace_meta,\n.ace-merbivore-soft .ace_meta.ace_tag,\n.ace-merbivore-soft .ace_storage {\n  color: #FC803A\n}\n\n.ace-merbivore-soft .ace_constant,\n.ace-merbivore-soft .ace_constant.ace_character,\n.ace-merbivore-soft .ace_constant.ace_character.ace_escape,\n.ace-merbivore-soft .ace_constant.ace_other,\n.ace-merbivore-soft .ace_support.ace_type {\n  color: #68C1D8\n}\n\n.ace-merbivore-soft .ace_constant.ace_character.ace_escape {\n  color: #B3E5B4\n}\n\n.ace-merbivore-soft .ace_constant.ace_language {\n  color: #E1C582\n}\n\n.ace-merbivore-soft .ace_constant.ace_library,\n.ace-merbivore-soft .ace_string,\n.ace-merbivore-soft .ace_support.ace_constant {\n  color: #8EC65F\n}\n\n.ace-merbivore-soft .ace_constant.ace_numeric {\n  color: #7FC578\n}\n\n.ace-merbivore-soft .ace_invalid,\n.ace-merbivore-soft .ace_invalid.ace_deprecated {\n  color: #FFFFFF;\n  background-color: #FE3838\n}\n\n.ace-merbivore-soft .ace_fold {\n  background-color: #FC803A;\n  border-color: #E6E1DC\n}\n\n.ace-merbivore-soft .ace_comment,\n.ace-merbivore-soft .ace_meta {\n  font-style: italic;\n  color: #AC4BB8\n}\n\n.ace-merbivore-soft .ace_entity.ace_other.ace_attribute-name {\n  color: #EAF1A3\n}\n\n.ace-merbivore-soft .ace_indent-guide {\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWOQkpLyZfD09PwPAAfYAnaStpHRAAAAAElFTkSuQmCC) right repeat-y\n}\n\n.ace-merbivore-soft .ace_indent-guide-active {\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQIW2PQ1dX9zzBz5sz/ABCcBFFentLlAAAAAElFTkSuQmCC) right repeat-y;\n}\n";
    });
    ace.define("ace/theme/merbivore_soft", ["require", "exports", "module", "ace/theme/merbivore_soft.css", "ace/lib/dom"], function(require2, exports2, module2) {
      exports2.isDark = true;
      exports2.cssClass = "ace-merbivore-soft";
      exports2.cssText = require2("./merbivore_soft.css");
      var dom = require2("../lib/dom");
      dom.importCssString(exports2.cssText, exports2.cssClass, false);
    });
    (function() {
      ace.require(["ace/theme/merbivore_soft"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(themeMerbivore_soft$2);
  return themeMerbivore_soft$2.exports;
}
var themeMerbivore_softExports = requireThemeMerbivore_soft();
const themeMerbivore_soft = /* @__PURE__ */ getDefaultExportFromCjs(themeMerbivore_softExports);
const themeMerbivore_soft$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: themeMerbivore_soft
}, [themeMerbivore_softExports]);
export {
  themeMerbivore_soft$1 as t
};
