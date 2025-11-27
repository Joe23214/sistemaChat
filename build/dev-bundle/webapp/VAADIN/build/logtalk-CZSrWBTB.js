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
var logtalk$2 = { exports: {} };
var hasRequiredLogtalk;
function requireLogtalk() {
  if (hasRequiredLogtalk) return logtalk$2.exports;
  hasRequiredLogtalk = 1;
  (function(module, exports) {
    (function() {
      ace.require(["ace/snippets/logtalk"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(logtalk$2);
  return logtalk$2.exports;
}
var logtalkExports = requireLogtalk();
const logtalk = /* @__PURE__ */ getDefaultExportFromCjs(logtalkExports);
const logtalk$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: logtalk
}, [logtalkExports]);
export {
  logtalk$1 as l
};
