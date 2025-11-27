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
var ocaml$2 = { exports: {} };
var hasRequiredOcaml;
function requireOcaml() {
  if (hasRequiredOcaml) return ocaml$2.exports;
  hasRequiredOcaml = 1;
  (function(module, exports) {
    (function() {
      ace.require(["ace/snippets/ocaml"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(ocaml$2);
  return ocaml$2.exports;
}
var ocamlExports = requireOcaml();
const ocaml = /* @__PURE__ */ getDefaultExportFromCjs(ocamlExports);
const ocaml$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: ocaml
}, [ocamlExports]);
export {
  ocaml$1 as o
};
