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
var drools$2 = { exports: {} };
var hasRequiredDrools;
function requireDrools() {
  if (hasRequiredDrools) return drools$2.exports;
  hasRequiredDrools = 1;
  (function(module, exports) {
    ace.define("ace/snippets/drools.snippets", ["require", "exports", "module"], function(require2, exports2, module2) {
      module2.exports = '\nsnippet rule\n	rule "${1?:rule_name}"\n	when\n		${2:// when...} \n	then\n		${3:// then...}\n	end\n\nsnippet query\n	query ${1?:query_name}\n		${2:// find} \n	end\n	\nsnippet declare\n	declare ${1?:type_name}\n		${2:// attributes} \n	end\n\n';
    });
    ace.define("ace/snippets/drools", ["require", "exports", "module", "ace/snippets/drools.snippets"], function(require2, exports2, module2) {
      exports2.snippetText = require2("./drools.snippets");
      exports2.scope = "drools";
    });
    (function() {
      ace.require(["ace/snippets/drools"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(drools$2);
  return drools$2.exports;
}
var droolsExports = requireDrools();
const drools = /* @__PURE__ */ getDefaultExportFromCjs(droolsExports);
const drools$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: drools
}, [droolsExports]);
export {
  drools$1 as d
};
