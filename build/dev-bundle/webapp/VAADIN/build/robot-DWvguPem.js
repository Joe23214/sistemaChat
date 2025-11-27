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
var robot$2 = { exports: {} };
var hasRequiredRobot;
function requireRobot() {
  if (hasRequiredRobot) return robot$2.exports;
  hasRequiredRobot = 1;
  (function(module, exports) {
    ace.define("ace/snippets/robot.snippets", ["require", "exports", "module"], function(require2, exports2, module2) {
      module2.exports = "# scope: robot\n### Sections\nsnippet settingssection\ndescription *** Settings *** section\n	*** Settings ***\n	Library    ${1}\n\nsnippet keywordssection\ndescription *** Keywords *** section\n	*** Keywords ***\n	${1:Keyword Name}\n	    [Arguments]    \\${${2:Example Arg 1}}\n	\nsnippet testcasessection\ndescription *** Test Cases *** section\n	*** Test Cases ***\n	${1:First Test Case}\n	    ${2:Log    Example Arg}\n\nsnippet variablessection\ndescription *** Variables *** section\n	*** Variables ***\n	\\${${1:Variable Name}}=    ${2:Variable Value}\n\n### Helpful keywords\nsnippet testcase\ndescription A test case\n	${1:Test Case Name}\n	    ${2:Log    Example log message}\n	\nsnippet keyword\ndescription A keyword\n	${1:Example Keyword}\n	    [Arguments]    \\${${2:Example Arg 1}}\n\n### Built Ins\nsnippet forinr\ndescription For In Range Loop\n	FOR    \\${${1:Index}}    IN RANGE     \\${${2:10}}\n	    Log     \\${${1:Index}}\n	END\n\nsnippet forin\ndescription For In Loop\n	FOR    \\${${1:Item}}    IN     @{${2:List Variable}}\n	    Log     \\${${1:Item}}\n	END\n\nsnippet if\ndescription If Statement\n	IF    ${1:condition}\n	    ${2:Do something}\n	END\n\nsnippet else\ndescription If Statement\n	IF    ${1:Condition}\n	    ${2:Do something}\n	ELSE\n	    ${3:Otherwise do this}\n	END\n\nsnippet elif\ndescription Else-If Statement\n	IF    ${1:Condition 1}\n	    ${2:Do something}\n	ELSE IF    ${3:Condition 2}\n	    ${4:Do something else}\n	END\n";
    });
    ace.define("ace/snippets/robot", ["require", "exports", "module", "ace/snippets/robot.snippets"], function(require2, exports2, module2) {
      exports2.snippetText = require2("./robot.snippets");
      exports2.scope = "robot";
    });
    (function() {
      ace.require(["ace/snippets/robot"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(robot$2);
  return robot$2.exports;
}
var robotExports = requireRobot();
const robot = /* @__PURE__ */ getDefaultExportFromCjs(robotExports);
const robot$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: robot
}, [robotExports]);
export {
  robot$1 as r
};
