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
var assembly_x86$2 = { exports: {} };
var hasRequiredAssembly_x86;
function requireAssembly_x86() {
  if (hasRequiredAssembly_x86) return assembly_x86$2.exports;
  hasRequiredAssembly_x86 = 1;
  (function(module, exports) {
    (function() {
      ace.require(["ace/snippets/assembly_x86"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(assembly_x86$2);
  return assembly_x86$2.exports;
}
var assembly_x86Exports = requireAssembly_x86();
const assembly_x86 = /* @__PURE__ */ getDefaultExportFromCjs(assembly_x86Exports);
const assembly_x86$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: assembly_x86
}, [assembly_x86Exports]);
export {
  assembly_x86$1 as a
};
