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
var zeek$2 = { exports: {} };
var hasRequiredZeek;
function requireZeek() {
  if (hasRequiredZeek) return zeek$2.exports;
  hasRequiredZeek = 1;
  (function(module, exports) {
    (function() {
      ace.require(["ace/snippets/zeek"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(zeek$2);
  return zeek$2.exports;
}
var zeekExports = requireZeek();
const zeek = /* @__PURE__ */ getDefaultExportFromCjs(zeekExports);
const zeek$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: zeek
}, [zeekExports]);
export {
  zeek$1 as z
};
