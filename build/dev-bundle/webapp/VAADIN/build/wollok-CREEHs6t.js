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
var wollok$2 = { exports: {} };
var hasRequiredWollok;
function requireWollok() {
  if (hasRequiredWollok) return wollok$2.exports;
  hasRequiredWollok = 1;
  (function(module, exports) {
    ace.define("ace/snippets/wollok.snippets", ["require", "exports", "module"], function(require2, exports2, module2) {
      module2.exports = '##\n## Basic Java packages and import\nsnippet im\n	import\nsnippet w.l\n	wollok.lang\nsnippet w.i\n	wollok.lib\n\n## Class and object\nsnippet cl\n	class ${1:`Filename("", "untitled")`} ${2}\nsnippet obj\n	object ${1:`Filename("", "untitled")`} ${2:inherits Parent}${3}\nsnippet te\n	test ${1:`Filename("", "untitled")`}\n\n##\n## Enhancements\nsnippet inh\n	inherits\n\n##\n## Comments\nsnippet /*\n	/*\n	 * ${1}\n	 */\n\n##\n## Control Statements\nsnippet el\n	else\nsnippet if\n	if (${1}) ${2}\n\n##\n## Create a Method\nsnippet m\n	method ${1:method}(${2}) ${5}\n\n##  \n## Tests\nsnippet as\n	assert.equals(${1:expected}, ${2:actual})\n\n##\n## Exceptions\nsnippet ca\n	catch ${1:e} : (${2:Exception} ) ${3}\nsnippet thr\n	throw\nsnippet try\n	try {\n		${3}\n	} catch ${1:e} : ${2:Exception} {\n	}\n\n##\n## Javadocs\nsnippet /**\n	/**\n	 * ${1}\n	 */\n\n##\n## Print Methods\nsnippet print\n	console.println("${1:Message}")\n\n##\n## Setter and Getter Methods\nsnippet set\n	method set${1:}(${2:}) {\n		$1 = $2\n	}\nsnippet get\n	method get${1:}() {\n		return ${1:};\n	}\n\n##\n## Terminate Methods or Loops\nsnippet re\n	return';
    });
    ace.define("ace/snippets/wollok", ["require", "exports", "module", "ace/snippets/wollok.snippets"], function(require2, exports2, module2) {
      exports2.snippetText = require2("./wollok.snippets");
      exports2.scope = "wollok";
    });
    (function() {
      ace.require(["ace/snippets/wollok"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(wollok$2);
  return wollok$2.exports;
}
var wollokExports = requireWollok();
const wollok = /* @__PURE__ */ getDefaultExportFromCjs(wollokExports);
const wollok$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: wollok
}, [wollokExports]);
export {
  wollok$1 as w
};
