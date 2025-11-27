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
var modeText$2 = { exports: {} };
var hasRequiredModeText;
function requireModeText() {
  if (hasRequiredModeText) return modeText$2.exports;
  hasRequiredModeText = 1;
  (function(module, exports) {
    (function() {
      ace.require(["ace/mode/text"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(modeText$2);
  return modeText$2.exports;
}
var modeTextExports = requireModeText();
const modeText = /* @__PURE__ */ getDefaultExportFromCjs(modeTextExports);
const modeText$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: modeText
}, [modeTextExports]);
export {
  modeText$1 as m
};
