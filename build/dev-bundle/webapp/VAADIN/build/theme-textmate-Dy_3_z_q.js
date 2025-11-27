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
var themeTextmate$2 = { exports: {} };
var hasRequiredThemeTextmate;
function requireThemeTextmate() {
  if (hasRequiredThemeTextmate) return themeTextmate$2.exports;
  hasRequiredThemeTextmate = 1;
  (function(module, exports) {
    ace.define("ace/theme/textmate", ["require", "exports", "module", "ace/theme/textmate.css", "ace/lib/dom"], function(require2, exports2, module2) {
      exports2.isDark = false;
      exports2.cssClass = "ace-tm";
      exports2.cssText = require2("./textmate.css");
      exports2.$id = "ace/theme/textmate";
      var dom = require2("../lib/dom");
      dom.importCssString(exports2.cssText, exports2.cssClass, false);
    });
    (function() {
      ace.require(["ace/theme/textmate"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(themeTextmate$2);
  return themeTextmate$2.exports;
}
var themeTextmateExports = requireThemeTextmate();
const themeTextmate = /* @__PURE__ */ getDefaultExportFromCjs(themeTextmateExports);
const themeTextmate$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: themeTextmate
}, [themeTextmateExports]);
export {
  themeTextmate$1 as t
};
