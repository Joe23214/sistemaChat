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
var php_laravel_blade$2 = { exports: {} };
var hasRequiredPhp_laravel_blade;
function requirePhp_laravel_blade() {
  if (hasRequiredPhp_laravel_blade) return php_laravel_blade$2.exports;
  hasRequiredPhp_laravel_blade = 1;
  (function(module, exports) {
    (function() {
      ace.require(["ace/snippets/php_laravel_blade"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(php_laravel_blade$2);
  return php_laravel_blade$2.exports;
}
var php_laravel_bladeExports = requirePhp_laravel_blade();
const php_laravel_blade = /* @__PURE__ */ getDefaultExportFromCjs(php_laravel_bladeExports);
const php_laravel_blade$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: php_laravel_blade
}, [php_laravel_bladeExports]);
export {
  php_laravel_blade$1 as p
};
