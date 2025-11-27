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
var haml$2 = { exports: {} };
var hasRequiredHaml;
function requireHaml() {
  if (hasRequiredHaml) return haml$2.exports;
  hasRequiredHaml = 1;
  (function(module, exports) {
    ace.define("ace/snippets/haml.snippets", ["require", "exports", "module"], function(require2, exports2, module2) {
      module2.exports = "snippet t\n	%table\n		%tr\n			%th\n				${1:headers}\n		%tr\n			%td\n				${2:headers}\nsnippet ul\n	%ul\n		%li\n			${1:item}\n		%li\nsnippet =rp\n	= render :partial => '${1:partial}'\nsnippet =rpl\n	= render :partial => '${1:partial}', :locals => {}\nsnippet =rpc\n	= render :partial => '${1:partial}', :collection => @$1\n\n";
    });
    ace.define("ace/snippets/haml", ["require", "exports", "module", "ace/snippets/haml.snippets"], function(require2, exports2, module2) {
      exports2.snippetText = require2("./haml.snippets");
      exports2.scope = "haml";
    });
    (function() {
      ace.require(["ace/snippets/haml"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(haml$2);
  return haml$2.exports;
}
var hamlExports = requireHaml();
const haml = /* @__PURE__ */ getDefaultExportFromCjs(hamlExports);
const haml$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: haml
}, [hamlExports]);
export {
  haml$1 as h
};
