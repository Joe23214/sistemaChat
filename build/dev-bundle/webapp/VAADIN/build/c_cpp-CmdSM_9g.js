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
var c_cpp$2 = { exports: {} };
var hasRequiredC_cpp;
function requireC_cpp() {
  if (hasRequiredC_cpp) return c_cpp$2.exports;
  hasRequiredC_cpp = 1;
  (function(module, exports) {
    ace.define("ace/snippets/c_cpp.snippets", ["require", "exports", "module"], function(require2, exports2, module2) {
      module2.exports = "## STL Collections\n# std::array\nsnippet array\n	std::array<${1:T}, ${2:N}> ${3};${4}\n# std::vector\nsnippet vector\n	std::vector<${1:T}> ${2};${3}\n# std::deque\nsnippet deque\n	std::deque<${1:T}> ${2};${3}\n# std::forward_list\nsnippet flist\n	std::forward_list<${1:T}> ${2};${3}\n# std::list\nsnippet list\n	std::list<${1:T}> ${2};${3}\n# std::set\nsnippet set\n	std::set<${1:T}> ${2};${3}\n# std::map\nsnippet map\n	std::map<${1:Key}, ${2:T}> ${3};${4}\n# std::multiset\nsnippet mset\n	std::multiset<${1:T}> ${2};${3}\n# std::multimap\nsnippet mmap\n	std::multimap<${1:Key}, ${2:T}> ${3};${4}\n# std::unordered_set\nsnippet uset\n	std::unordered_set<${1:T}> ${2};${3}\n# std::unordered_map\nsnippet umap\n	std::unordered_map<${1:Key}, ${2:T}> ${3};${4}\n# std::unordered_multiset\nsnippet umset\n	std::unordered_multiset<${1:T}> ${2};${3}\n# std::unordered_multimap\nsnippet ummap\n	std::unordered_multimap<${1:Key}, ${2:T}> ${3};${4}\n# std::stack\nsnippet stack\n	std::stack<${1:T}> ${2};${3}\n# std::queue\nsnippet queue\n	std::queue<${1:T}> ${2};${3}\n# std::priority_queue\nsnippet pqueue\n	std::priority_queue<${1:T}> ${2};${3}\n##\n## Access Modifiers\n# private\nsnippet pri\n	private\n# protected\nsnippet pro\n	protected\n# public\nsnippet pub\n	public\n# friend\nsnippet fr\n	friend\n# mutable\nsnippet mu\n	mutable\n## \n## Class\n# class\nsnippet cl\n	class ${1:`Filename('$1', 'name')`} \n	{\n	public:\n		$1(${2});\n		~$1();\n\n	private:\n		${3:/* data */}\n	};\n# member function implementation\nsnippet mfun\n	${4:void} ${1:`Filename('$1', 'ClassName')`}::${2:memberFunction}(${3}) {\n		${5:/* code */}\n	}\n# namespace\nsnippet ns\n	namespace ${1:`Filename('', 'my')`} {\n		${2}\n	} /* namespace $1 */\n##\n## Input/Output\n# std::cout\nsnippet cout\n	std::cout << ${1} << std::endl;${2}\n# std::cin\nsnippet cin\n	std::cin >> ${1};${2}\n##\n## Iteration\n# for i \nsnippet fori\n	for (int ${2:i} = 0; $2 < ${1:count}; $2${3:++}) {\n		${4:/* code */}\n	}${5}\n\n# foreach\nsnippet fore\n	for (${1:auto} ${2:i} : ${3:container}) {\n		${4:/* code */}\n	}${5}\n# iterator\nsnippet iter\n	for (${1:std::vector}<${2:type}>::${3:const_iterator} ${4:i} = ${5:container}.begin(); $4 != $5.end(); ++$4) {\n		${6}\n	}${7}\n\n# auto iterator\nsnippet itera\n	for (auto ${1:i} = $1.begin(); $1 != $1.end(); ++$1) {\n		${2:std::cout << *$1 << std::endl;}\n	}${3}\n##\n## Lambdas\n# lamda (one line)\nsnippet ld\n	[${1}](${2}){${3:/* code */}}${4}\n# lambda (multi-line)\nsnippet lld\n	[${1}](${2}){\n		${3:/* code */}\n	}${4}\n";
    });
    ace.define("ace/snippets/c_cpp", ["require", "exports", "module", "ace/snippets/c_cpp.snippets"], function(require2, exports2, module2) {
      exports2.snippetText = require2("./c_cpp.snippets");
      exports2.scope = "c_cpp";
    });
    (function() {
      ace.require(["ace/snippets/c_cpp"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(c_cpp$2);
  return c_cpp$2.exports;
}
var c_cppExports = requireC_cpp();
const c_cpp = /* @__PURE__ */ getDefaultExportFromCjs(c_cppExports);
const c_cpp$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: c_cpp
}, [c_cppExports]);
export {
  c_cpp$1 as c
};
