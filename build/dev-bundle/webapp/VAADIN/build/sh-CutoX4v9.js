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
var sh$2 = { exports: {} };
var hasRequiredSh;
function requireSh() {
  if (hasRequiredSh) return sh$2.exports;
  hasRequiredSh = 1;
  (function(module, exports) {
    ace.define("ace/snippets/sh.snippets", ["require", "exports", "module"], function(require2, exports2, module2) {
      module2.exports = '# Shebang. Executing bash via /usr/bin/env makes scripts more portable.\nsnippet #!\n	#!/usr/bin/env bash\n	\nsnippet if\n	if [[ ${1:condition} ]]; then\n		${2:#statements}\n	fi\nsnippet elif\n	elif [[ ${1:condition} ]]; then\n		${2:#statements}\nsnippet for\n	for (( ${2:i} = 0; $2 < ${1:count}; $2++ )); do\n		${3:#statements}\n	done\nsnippet fori\n	for ${1:needle} in ${2:haystack} ; do\n		${3:#statements}\n	done\nsnippet wh\n	while [[ ${1:condition} ]]; do\n		${2:#statements}\n	done\nsnippet until\n	until [[ ${1:condition} ]]; do\n		${2:#statements}\n	done\nsnippet case\n	case ${1:word} in\n		${2:pattern})\n			${3};;\n	esac\nsnippet go \n	while getopts \'${1:o}\' ${2:opts} \n	do \n		case $$2 in\n		${3:o0})\n			${4:#staments};;\n		esac\n	done\n# Set SCRIPT_DIR variable to directory script is located.\nsnippet sdir\n	SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"\n# getopt\nsnippet getopt\n	__ScriptVersion="${1:version}"\n\n	#===  FUNCTION  ================================================================\n	#         NAME:  usage\n	#  DESCRIPTION:  Display usage information.\n	#===============================================================================\n	function usage ()\n	{\n			cat <<- EOT\n\n	  Usage :  $${0:0} [options] [--] \n\n	  Options: \n	  -h|help       Display this message\n	  -v|version    Display script version\n\n	EOT\n	}    # ----------  end of function usage  ----------\n\n	#-----------------------------------------------------------------------\n	#  Handle command line arguments\n	#-----------------------------------------------------------------------\n\n	while getopts ":hv" opt\n	do\n	  case $opt in\n\n		h|help     )  usage; exit 0   ;;\n\n		v|version  )  echo "$${0:0} -- Version $__ScriptVersion"; exit 0   ;;\n\n		\\? )  echo -e "\\n  Option does not exist : $OPTARG\\n"\n			  usage; exit 1   ;;\n\n	  esac    # --- end of case ---\n	done\n	shift $(($OPTIND-1))\n\n';
    });
    ace.define("ace/snippets/sh", ["require", "exports", "module", "ace/snippets/sh.snippets"], function(require2, exports2, module2) {
      exports2.snippetText = require2("./sh.snippets");
      exports2.scope = "sh";
    });
    (function() {
      ace.require(["ace/snippets/sh"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(sh$2);
  return sh$2.exports;
}
var shExports = requireSh();
const sh = /* @__PURE__ */ getDefaultExportFromCjs(shExports);
const sh$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: sh
}, [shExports]);
export {
  sh$1 as s
};
