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
var csound_orchestra$2 = { exports: {} };
var hasRequiredCsound_orchestra;
function requireCsound_orchestra() {
  if (hasRequiredCsound_orchestra) return csound_orchestra$2.exports;
  hasRequiredCsound_orchestra = 1;
  (function(module, exports) {
    ace.define("ace/snippets/csound_orchestra.snippets", ["require", "exports", "module"], function(require2, exports2, module2) {
      module2.exports = "# else\nsnippet else\n	else\n		${1:/* statements */}\n# elseif\nsnippet elseif\n	elseif ${1:/* condition */} then\n		${2:/* statements */}\n# if\nsnippet if\n	if ${1:/* condition */} then\n		${2:/* statements */}\n	endif\n# instrument block\nsnippet instr\n	instr ${1:name}\n		${2:/* statements */}\n	endin\n# i-time while loop\nsnippet iwhile\n	i${1:Index} = ${2:0}\n	while i${1:Index} < ${3:/* count */} do\n		${4:/* statements */}\n		i${1:Index} += 1\n	od\n# k-rate while loop\nsnippet kwhile\n	k${1:Index} = ${2:0}\n	while k${1:Index} < ${3:/* count */} do\n		${4:/* statements */}\n		k${1:Index} += 1\n	od\n# opcode\nsnippet opcode\n	opcode ${1:name}, ${2:/* output types */ 0}, ${3:/* input types */ 0}\n		${4:/* statements */}\n	endop\n# until loop\nsnippet until\n	until ${1:/* condition */} do\n		${2:/* statements */}\n	od\n# while loop\nsnippet while\n	while ${1:/* condition */} do\n		${2:/* statements */}\n	od\n";
    });
    ace.define("ace/snippets/csound_orchestra", ["require", "exports", "module", "ace/snippets/csound_orchestra.snippets"], function(require2, exports2, module2) {
      exports2.snippetText = require2("./csound_orchestra.snippets");
      exports2.scope = "csound_orchestra";
    });
    (function() {
      ace.require(["ace/snippets/csound_orchestra"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(csound_orchestra$2);
  return csound_orchestra$2.exports;
}
var csound_orchestraExports = requireCsound_orchestra();
const csound_orchestra = /* @__PURE__ */ getDefaultExportFromCjs(csound_orchestraExports);
const csound_orchestra$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: csound_orchestra
}, [csound_orchestraExports]);
export {
  csound_orchestra$1 as c
};
