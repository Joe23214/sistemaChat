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
var graphqlschema$2 = { exports: {} };
var hasRequiredGraphqlschema;
function requireGraphqlschema() {
  if (hasRequiredGraphqlschema) return graphqlschema$2.exports;
  hasRequiredGraphqlschema = 1;
  (function(module, exports) {
    ace.define("ace/snippets/graphqlschema.snippets", ["require", "exports", "module"], function(require2, exports2, module2) {
      module2.exports = "# Type Snippet\ntrigger type\nsnippet type\n	type ${1:type_name} {\n		${2:type_siblings}\n	}\n\n# Input Snippet\ntrigger input\nsnippet input\n	input ${1:input_name} {\n		${2:input_siblings}\n	}\n\n# Interface Snippet\ntrigger interface\nsnippet interface\n	interface ${1:interface_name} {\n		${2:interface_siblings}\n	}\n\n# Interface Snippet\ntrigger union\nsnippet union\n	union ${1:union_name} = ${2:type} | ${3: type}\n\n# Enum Snippet\ntrigger enum\nsnippet enum\n	enum ${1:enum_name} {\n		${2:enum_siblings}\n	}\n";
    });
    ace.define("ace/snippets/graphqlschema", ["require", "exports", "module", "ace/snippets/graphqlschema.snippets"], function(require2, exports2, module2) {
      exports2.snippetText = require2("./graphqlschema.snippets");
      exports2.scope = "graphqlschema";
    });
    (function() {
      ace.require(["ace/snippets/graphqlschema"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(graphqlschema$2);
  return graphqlschema$2.exports;
}
var graphqlschemaExports = requireGraphqlschema();
const graphqlschema = /* @__PURE__ */ getDefaultExportFromCjs(graphqlschemaExports);
const graphqlschema$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: graphqlschema
}, [graphqlschemaExports]);
export {
  graphqlschema$1 as g
};
