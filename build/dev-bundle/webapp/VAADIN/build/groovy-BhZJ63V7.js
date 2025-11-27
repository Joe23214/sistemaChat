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
var groovy$2 = { exports: {} };
var hasRequiredGroovy;
function requireGroovy() {
  if (hasRequiredGroovy) return groovy$2.exports;
  hasRequiredGroovy = 1;
  (function(module, exports) {
    (function() {
      ace.require(["ace/snippets/groovy"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(groovy$2);
  return groovy$2.exports;
}
var groovyExports = requireGroovy();
const groovy = /* @__PURE__ */ getDefaultExportFromCjs(groovyExports);
const groovy$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: groovy
}, [groovyExports]);
export {
  groovy$1 as g
};
