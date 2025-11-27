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
var space$2 = { exports: {} };
var hasRequiredSpace;
function requireSpace() {
  if (hasRequiredSpace) return space$2.exports;
  hasRequiredSpace = 1;
  (function(module, exports) {
    (function() {
      ace.require(["ace/snippets/space"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(space$2);
  return space$2.exports;
}
var spaceExports = requireSpace();
const space = /* @__PURE__ */ getDefaultExportFromCjs(spaceExports);
const space$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: space
}, [spaceExports]);
export {
  space$1 as s
};
