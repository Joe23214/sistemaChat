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
var dart$2 = { exports: {} };
var hasRequiredDart;
function requireDart() {
  if (hasRequiredDart) return dart$2.exports;
  hasRequiredDart = 1;
  (function(module, exports) {
    ace.define("ace/snippets/dart.snippets", ["require", "exports", "module"], function(require2, exports2, module2) {
      module2.exports = "snippet lib\n	library ${1};\n	${2}\nsnippet im\n	import '${1}';\n	${2}\nsnippet pa\n	part '${1}';\n	${2}\nsnippet pao\n	part of ${1};\n	${2}\nsnippet main\n	void main() {\n	  ${1:/* code */}\n	}\nsnippet st\n	static ${1}\nsnippet fi\n	final ${1}\nsnippet re\n	return ${1}\nsnippet br\n	break;\nsnippet th\n	throw ${1}\nsnippet cl\n	class ${1:`Filename(\"\", \"untitled\")`} ${2}\nsnippet imp\n	implements ${1}\nsnippet ext\n	extends ${1}\nsnippet if\n	if (${1:true}) {\n	  ${2}\n	}\nsnippet ife\n	if (${1:true}) {\n	  ${2}\n	} else {\n	  ${3}\n	}\nsnippet el\n	else\nsnippet sw\n	switch (${1}) {\n	  ${2}\n	}\nsnippet cs\n	case ${1}:\n	  ${2}\nsnippet de\n	default:\n	  ${1}\nsnippet for\n	for (var ${2:i} = 0, len = ${1:things}.length; $2 < len; ${3:++}$2) {\n	  ${4:$1[$2]}\n	}\nsnippet fore\n	for (final ${2:item} in ${1:itemList}) {\n	  ${3:/* code */}\n	}\nsnippet wh\n	while (${1:/* condition */}) {\n	  ${2:/* code */}\n	}\nsnippet dowh\n	do {\n	  ${2:/* code */}\n	} while (${1:/* condition */});\nsnippet as\n	assert(${1:/* condition */});\nsnippet try\n	try {\n	  ${2}\n	} catch (${1:Exception e}) {\n	}\nsnippet tryf\n	try {\n	  ${2}\n	} catch (${1:Exception e}) {\n	} finally {\n	}\n";
    });
    ace.define("ace/snippets/dart", ["require", "exports", "module", "ace/snippets/dart.snippets"], function(require2, exports2, module2) {
      exports2.snippetText = require2("./dart.snippets");
      exports2.scope = "dart";
    });
    (function() {
      ace.require(["ace/snippets/dart"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(dart$2);
  return dart$2.exports;
}
var dartExports = requireDart();
const dart = /* @__PURE__ */ getDefaultExportFromCjs(dartExports);
const dart$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: dart
}, [dartExports]);
export {
  dart$1 as d
};
