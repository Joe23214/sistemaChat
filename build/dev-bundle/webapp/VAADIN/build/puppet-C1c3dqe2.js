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
var puppet$2 = { exports: {} };
var hasRequiredPuppet;
function requirePuppet() {
  if (hasRequiredPuppet) return puppet$2.exports;
  hasRequiredPuppet = 1;
  (function(module, exports) {
    (function() {
      ace.require(["ace/snippets/puppet"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(puppet$2);
  return puppet$2.exports;
}
var puppetExports = requirePuppet();
const puppet = /* @__PURE__ */ getDefaultExportFromCjs(puppetExports);
const puppet$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: puppet
}, [puppetExports]);
export {
  puppet$1 as p
};
