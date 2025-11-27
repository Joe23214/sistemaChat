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
var objectivec$2 = { exports: {} };
var hasRequiredObjectivec;
function requireObjectivec() {
  if (hasRequiredObjectivec) return objectivec$2.exports;
  hasRequiredObjectivec = 1;
  (function(module, exports) {
    (function() {
      ace.require(["ace/snippets/objectivec"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(objectivec$2);
  return objectivec$2.exports;
}
var objectivecExports = requireObjectivec();
const objectivec = /* @__PURE__ */ getDefaultExportFromCjs(objectivecExports);
const objectivec$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: objectivec
}, [objectivecExports]);
export {
  objectivec$1 as o
};
