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
var dot$2 = { exports: {} };
var hasRequiredDot;
function requireDot() {
  if (hasRequiredDot) return dot$2.exports;
  hasRequiredDot = 1;
  (function(module, exports) {
    (function() {
      ace.require(["ace/snippets/dot"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(dot$2);
  return dot$2.exports;
}
var dotExports = requireDot();
const dot = /* @__PURE__ */ getDefaultExportFromCjs(dotExports);
const dot$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: dot
}, [dotExports]);
export {
  dot$1 as d
};
