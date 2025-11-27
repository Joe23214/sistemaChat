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
var velocity$2 = { exports: {} };
var hasRequiredVelocity;
function requireVelocity() {
  if (hasRequiredVelocity) return velocity$2.exports;
  hasRequiredVelocity = 1;
  (function(module, exports) {
    ace.define("ace/snippets/velocity.snippets", ["require", "exports", "module"], function(require2, exports2, module2) {
      module2.exports = '# macro\nsnippet #macro\n	#macro ( ${1:macroName} ${2:\\$var1, [\\$var2, ...]} )\n		${3:## macro code}\n	#end\n# foreach\nsnippet #foreach\n	#foreach ( ${1:\\$item} in ${2:\\$collection} )\n		${3:## foreach code}\n	#end\n# if\nsnippet #if\n	#if ( ${1:true} )\n		${0}\n	#end\n# if ... else\nsnippet #ife\n	#if ( ${1:true} )\n		${2}\n	#else\n		${0}\n	#end\n#import\nsnippet #import\n	#import ( "${1:path/to/velocity/format}" )\n# set\nsnippet #set\n	#set ( $${1:var} = ${0} )\n';
    });
    ace.define("ace/snippets/velocity", ["require", "exports", "module", "ace/snippets/velocity.snippets"], function(require2, exports2, module2) {
      exports2.snippetText = require2("./velocity.snippets");
      exports2.scope = "velocity";
      exports2.includeScopes = ["html", "javascript", "css"];
    });
    (function() {
      ace.require(["ace/snippets/velocity"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(velocity$2);
  return velocity$2.exports;
}
var velocityExports = requireVelocity();
const velocity = /* @__PURE__ */ getDefaultExportFromCjs(velocityExports);
const velocity$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: velocity
}, [velocityExports]);
export {
  velocity$1 as v
};
