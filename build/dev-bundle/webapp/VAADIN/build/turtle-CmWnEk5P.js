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
var turtle$2 = { exports: {} };
var hasRequiredTurtle;
function requireTurtle() {
  if (hasRequiredTurtle) return turtle$2.exports;
  hasRequiredTurtle = 1;
  (function(module, exports) {
    (function() {
      ace.require(["ace/snippets/turtle"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(turtle$2);
  return turtle$2.exports;
}
var turtleExports = requireTurtle();
const turtle = /* @__PURE__ */ getDefaultExportFromCjs(turtleExports);
const turtle$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: turtle
}, [turtleExports]);
export {
  turtle$1 as t
};
