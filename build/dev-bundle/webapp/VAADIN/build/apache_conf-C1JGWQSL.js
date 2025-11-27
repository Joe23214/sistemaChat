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
var apache_conf$2 = { exports: {} };
var hasRequiredApache_conf;
function requireApache_conf() {
  if (hasRequiredApache_conf) return apache_conf$2.exports;
  hasRequiredApache_conf = 1;
  (function(module, exports) {
    (function() {
      ace.require(["ace/snippets/apache_conf"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(apache_conf$2);
  return apache_conf$2.exports;
}
var apache_confExports = requireApache_conf();
const apache_conf = /* @__PURE__ */ getDefaultExportFromCjs(apache_confExports);
const apache_conf$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: apache_conf
}, [apache_confExports]);
export {
  apache_conf$1 as a
};
