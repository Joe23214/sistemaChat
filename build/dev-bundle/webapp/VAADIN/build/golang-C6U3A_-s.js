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
var golang$2 = { exports: {} };
var hasRequiredGolang;
function requireGolang() {
  if (hasRequiredGolang) return golang$2.exports;
  hasRequiredGolang = 1;
  (function(module, exports) {
    (function() {
      ace.require(["ace/snippets/golang"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(golang$2);
  return golang$2.exports;
}
var golangExports = requireGolang();
const golang = /* @__PURE__ */ getDefaultExportFromCjs(golangExports);
const golang$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: golang
}, [golangExports]);
export {
  golang$1 as g
};
