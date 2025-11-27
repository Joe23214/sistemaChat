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
var vhdl$2 = { exports: {} };
var hasRequiredVhdl;
function requireVhdl() {
  if (hasRequiredVhdl) return vhdl$2.exports;
  hasRequiredVhdl = 1;
  (function(module, exports) {
    (function() {
      ace.require(["ace/snippets/vhdl"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(vhdl$2);
  return vhdl$2.exports;
}
var vhdlExports = requireVhdl();
const vhdl = /* @__PURE__ */ getDefaultExportFromCjs(vhdlExports);
const vhdl$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: vhdl
}, [vhdlExports]);
export {
  vhdl$1 as v
};
