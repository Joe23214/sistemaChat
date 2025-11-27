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
var coffee$2 = { exports: {} };
var hasRequiredCoffee;
function requireCoffee() {
  if (hasRequiredCoffee) return coffee$2.exports;
  hasRequiredCoffee = 1;
  (function(module, exports) {
    ace.define("ace/snippets/coffee.snippets", ["require", "exports", "module"], function(require2, exports2, module2) {
      module2.exports = "# Closure loop\nsnippet forindo\n	for ${1:name} in ${2:array}\n		do ($1) ->\n			${3:// body}\n# Array comprehension\nsnippet fora\n	for ${1:name} in ${2:array}\n		${3:// body...}\n# Object comprehension\nsnippet foro\n	for ${1:key}, ${2:value} of ${3:object}\n		${4:// body...}\n# Range comprehension (inclusive)\nsnippet forr\n	for ${1:name} in [${2:start}..${3:finish}]\n		${4:// body...}\nsnippet forrb\n	for ${1:name} in [${2:start}..${3:finish}] by ${4:step}\n		${5:// body...}\n# Range comprehension (exclusive)\nsnippet forrex\n	for ${1:name} in [${2:start}...${3:finish}]\n		${4:// body...}\nsnippet forrexb\n	for ${1:name} in [${2:start}...${3:finish}] by ${4:step}\n		${5:// body...}\n# Function\nsnippet fun\n	(${1:args}) ->\n		${2:// body...}\n# Function (bound)\nsnippet bfun\n	(${1:args}) =>\n		${2:// body...}\n# Class\nsnippet cla class ..\n	class ${1:`substitute(Filename(), '\\(_\\|^\\)\\(.\\)', '\\u\\2', 'g')`}\n		${2}\nsnippet cla class .. constructor: ..\n	class ${1:`substitute(Filename(), '\\(_\\|^\\)\\(.\\)', '\\u\\2', 'g')`}\n		constructor: (${2:args}) ->\n			${3}\n\n		${4}\nsnippet cla class .. extends ..\n	class ${1:`substitute(Filename(), '\\(_\\|^\\)\\(.\\)', '\\u\\2', 'g')`} extends ${2:ParentClass}\n		${3}\nsnippet cla class .. extends .. constructor: ..\n	class ${1:`substitute(Filename(), '\\(_\\|^\\)\\(.\\)', '\\u\\2', 'g')`} extends ${2:ParentClass}\n		constructor: (${3:args}) ->\n			${4}\n\n		${5}\n# If\nsnippet if\n	if ${1:condition}\n		${2:// body...}\n# If __ Else\nsnippet ife\n	if ${1:condition}\n		${2:// body...}\n	else\n		${3:// body...}\n# Else if\nsnippet elif\n	else if ${1:condition}\n		${2:// body...}\n# Ternary If\nsnippet ifte\n	if ${1:condition} then ${2:value} else ${3:other}\n# Unless\nsnippet unl\n	${1:action} unless ${2:condition}\n# Switch\nsnippet swi\n	switch ${1:object}\n		when ${2:value}\n			${3:// body...}\n\n# Log\nsnippet log\n	console.log ${1}\n# Try __ Catch\nsnippet try\n	try\n		${1}\n	catch ${2:error}\n		${3}\n# Require\nsnippet req\n	${2:$1} = require '${1:sys}'${3}\n# Export\nsnippet exp\n	${1:root} = exports ? this\n";
    });
    ace.define("ace/snippets/coffee", ["require", "exports", "module", "ace/snippets/coffee.snippets"], function(require2, exports2, module2) {
      exports2.snippetText = require2("./coffee.snippets");
      exports2.scope = "coffee";
    });
    (function() {
      ace.require(["ace/snippets/coffee"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(coffee$2);
  return coffee$2.exports;
}
var coffeeExports = requireCoffee();
const coffee = /* @__PURE__ */ getDefaultExportFromCjs(coffeeExports);
const coffee$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: coffee
}, [coffeeExports]);
export {
  coffee$1 as c
};
