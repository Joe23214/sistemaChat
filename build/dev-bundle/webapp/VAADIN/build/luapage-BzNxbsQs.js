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
var luapage$2 = { exports: {} };
var hasRequiredLuapage;
function requireLuapage() {
  if (hasRequiredLuapage) return luapage$2.exports;
  hasRequiredLuapage = 1;
  (function(module, exports) {
    (function() {
      ace.require(["ace/snippets/luapage"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(luapage$2);
  return luapage$2.exports;
}
var luapageExports = requireLuapage();
const luapage = /* @__PURE__ */ getDefaultExportFromCjs(luapageExports);
const luapage$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: luapage
}, [luapageExports]);
export {
  luapage$1 as l
};
