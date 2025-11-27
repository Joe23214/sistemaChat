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
var autohotkey$2 = { exports: {} };
var hasRequiredAutohotkey;
function requireAutohotkey() {
  if (hasRequiredAutohotkey) return autohotkey$2.exports;
  hasRequiredAutohotkey = 1;
  (function(module, exports) {
    (function() {
      ace.require(["ace/snippets/autohotkey"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(autohotkey$2);
  return autohotkey$2.exports;
}
var autohotkeyExports = requireAutohotkey();
const autohotkey = /* @__PURE__ */ getDefaultExportFromCjs(autohotkeyExports);
const autohotkey$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: autohotkey
}, [autohotkeyExports]);
export {
  autohotkey$1 as a
};
