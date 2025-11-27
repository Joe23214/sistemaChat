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
var lua$2 = { exports: {} };
var hasRequiredLua;
function requireLua() {
  if (hasRequiredLua) return lua$2.exports;
  hasRequiredLua = 1;
  (function(module, exports) {
    ace.define("ace/snippets/lua.snippets", ["require", "exports", "module"], function(require2, exports2, module2) {
      module2.exports = "snippet #!\n	#!/usr/bin/env lua\n	$1\nsnippet local\n	local ${1:x} = ${2:1}\nsnippet fun\n	function ${1:fname}(${2:...})\n		${3:-- body}\n	end\nsnippet for\n	for ${1:i}=${2:1},${3:10} do\n		${4:print(i)}\n	end\nsnippet forp\n	for ${1:i},${2:v} in pairs(${3:table_name}) do\n	   ${4:-- body}\n	end\nsnippet fori\n	for ${1:i},${2:v} in ipairs(${3:table_name}) do\n	   ${4:-- body}\n	end\n";
    });
    ace.define("ace/snippets/lua", ["require", "exports", "module", "ace/snippets/lua.snippets"], function(require2, exports2, module2) {
      exports2.snippetText = require2("./lua.snippets");
      exports2.scope = "lua";
    });
    (function() {
      ace.require(["ace/snippets/lua"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(lua$2);
  return lua$2.exports;
}
var luaExports = requireLua();
const lua = /* @__PURE__ */ getDefaultExportFromCjs(luaExports);
const lua$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: lua
}, [luaExports]);
export {
  lua$1 as l
};
