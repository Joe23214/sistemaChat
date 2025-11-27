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
var logiql$2 = { exports: {} };
var hasRequiredLogiql;
function requireLogiql() {
  if (hasRequiredLogiql) return logiql$2.exports;
  hasRequiredLogiql = 1;
  (function(module, exports) {
    (function() {
      ace.require(["ace/snippets/logiql"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(logiql$2);
  return logiql$2.exports;
}
var logiqlExports = requireLogiql();
const logiql = /* @__PURE__ */ getDefaultExportFromCjs(logiqlExports);
const logiql$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: logiql
}, [logiqlExports]);
export {
  logiql$1 as l
};
