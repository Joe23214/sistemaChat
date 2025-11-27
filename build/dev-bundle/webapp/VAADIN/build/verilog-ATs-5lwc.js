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
var verilog$2 = { exports: {} };
var hasRequiredVerilog;
function requireVerilog() {
  if (hasRequiredVerilog) return verilog$2.exports;
  hasRequiredVerilog = 1;
  (function(module, exports) {
    (function() {
      ace.require(["ace/snippets/verilog"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(verilog$2);
  return verilog$2.exports;
}
var verilogExports = requireVerilog();
const verilog = /* @__PURE__ */ getDefaultExportFromCjs(verilogExports);
const verilog$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: verilog
}, [verilogExports]);
export {
  verilog$1 as v
};
