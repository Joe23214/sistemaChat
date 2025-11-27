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
var gcode$2 = { exports: {} };
var hasRequiredGcode;
function requireGcode() {
  if (hasRequiredGcode) return gcode$2.exports;
  hasRequiredGcode = 1;
  (function(module, exports) {
    (function() {
      ace.require(["ace/snippets/gcode"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(gcode$2);
  return gcode$2.exports;
}
var gcodeExports = requireGcode();
const gcode = /* @__PURE__ */ getDefaultExportFromCjs(gcodeExports);
const gcode$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: gcode
}, [gcodeExports]);
export {
  gcode$1 as g
};
