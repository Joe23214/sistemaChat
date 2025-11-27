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
var themeMerbivore$2 = { exports: {} };
var hasRequiredThemeMerbivore;
function requireThemeMerbivore() {
  if (hasRequiredThemeMerbivore) return themeMerbivore$2.exports;
  hasRequiredThemeMerbivore = 1;
  (function(module, exports) {
    ace.define("ace/theme/merbivore.css", ["require", "exports", "module"], function(require2, exports2, module2) {
      module2.exports = ".ace-merbivore .ace_gutter {\n  background: #202020;\n  color: #E6E1DC\n}\n\n.ace-merbivore .ace_print-margin {\n  width: 1px;\n  background: #555651\n}\n\n.ace-merbivore {\n  background-color: #161616;\n  color: #E6E1DC\n}\n\n.ace-merbivore .ace_cursor {\n  color: #FFFFFF\n}\n\n.ace-merbivore .ace_marker-layer .ace_selection {\n  background: #454545\n}\n\n.ace-merbivore.ace_multiselect .ace_selection.ace_start {\n  box-shadow: 0 0 3px 0px #161616;\n}\n\n.ace-merbivore .ace_marker-layer .ace_step {\n  background: rgb(102, 82, 0)\n}\n\n.ace-merbivore .ace_marker-layer .ace_bracket {\n  margin: -1px 0 0 -1px;\n  border: 1px solid #404040\n}\n\n.ace-merbivore .ace_marker-layer .ace_active-line {\n  background: #333435\n}\n\n.ace-merbivore .ace_gutter-active-line {\n  background-color: #333435\n}\n\n.ace-merbivore .ace_marker-layer .ace_selected-word {\n  border: 1px solid #454545\n}\n\n.ace-merbivore .ace_invisible {\n  color: #404040\n}\n\n.ace-merbivore .ace_entity.ace_name.ace_tag,\n.ace-merbivore .ace_keyword,\n.ace-merbivore .ace_meta,\n.ace-merbivore .ace_meta.ace_tag,\n.ace-merbivore .ace_storage,\n.ace-merbivore .ace_support.ace_function {\n  color: #FC6F09\n}\n\n.ace-merbivore .ace_constant,\n.ace-merbivore .ace_constant.ace_character,\n.ace-merbivore .ace_constant.ace_character.ace_escape,\n.ace-merbivore .ace_constant.ace_other,\n.ace-merbivore .ace_support.ace_type {\n  color: #1EDAFB\n}\n\n.ace-merbivore .ace_constant.ace_character.ace_escape {\n  color: #519F50\n}\n\n.ace-merbivore .ace_constant.ace_language {\n  color: #FDC251\n}\n\n.ace-merbivore .ace_constant.ace_library,\n.ace-merbivore .ace_string,\n.ace-merbivore .ace_support.ace_constant {\n  color: #8DFF0A\n}\n\n.ace-merbivore .ace_constant.ace_numeric {\n  color: #58C554\n}\n\n.ace-merbivore .ace_invalid {\n  color: #FFFFFF;\n  background-color: #990000\n}\n\n.ace-merbivore .ace_fold {\n  background-color: #FC6F09;\n  border-color: #E6E1DC\n}\n\n.ace-merbivore .ace_comment {\n  font-style: italic;\n  color: #AD2EA4\n}\n\n.ace-merbivore .ace_entity.ace_other.ace_attribute-name {\n  color: #FFFF89\n}\n\n.ace-merbivore .ace_indent-guide {\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWMQFxf3ZXB1df0PAAdsAmERTkEHAAAAAElFTkSuQmCC) right repeat-y\n}\n\n.ace-merbivore .ace_indent-guide-active {\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQIW2PQ1dX9zzBz5sz/ABCcBFFentLlAAAAAElFTkSuQmCC) right repeat-y;\n}\n";
    });
    ace.define("ace/theme/merbivore", ["require", "exports", "module", "ace/theme/merbivore.css", "ace/lib/dom"], function(require2, exports2, module2) {
      exports2.isDark = true;
      exports2.cssClass = "ace-merbivore";
      exports2.cssText = require2("./merbivore.css");
      var dom = require2("../lib/dom");
      dom.importCssString(exports2.cssText, exports2.cssClass, false);
    });
    (function() {
      ace.require(["ace/theme/merbivore"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(themeMerbivore$2);
  return themeMerbivore$2.exports;
}
var themeMerbivoreExports = requireThemeMerbivore();
const themeMerbivore = /* @__PURE__ */ getDefaultExportFromCjs(themeMerbivoreExports);
const themeMerbivore$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: themeMerbivore
}, [themeMerbivoreExports]);
export {
  themeMerbivore$1 as t
};
