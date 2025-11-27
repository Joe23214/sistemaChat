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
var jsx$2 = { exports: {} };
var hasRequiredJsx;
function requireJsx() {
  if (hasRequiredJsx) return jsx$2.exports;
  hasRequiredJsx = 1;
  (function(module, exports) {
    (function() {
      ace.require(["ace/snippets/jsx"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(jsx$2);
  return jsx$2.exports;
}
var jsxExports = requireJsx();
const jsx = /* @__PURE__ */ getDefaultExportFromCjs(jsxExports);
const jsx$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: jsx
}, [jsxExports]);
export {
  jsx$1 as j
};
