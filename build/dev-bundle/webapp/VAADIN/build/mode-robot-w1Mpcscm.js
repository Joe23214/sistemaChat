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
var modeRobot$2 = { exports: {} };
var hasRequiredModeRobot;
function requireModeRobot() {
  if (hasRequiredModeRobot) return modeRobot$2.exports;
  hasRequiredModeRobot = 1;
  (function(module, exports) {
    ace.define("ace/mode/robot_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules"], function(require2, exports2, module2) {
      var oop = require2("../lib/oop");
      var TextHighlightRules = require2("./text_highlight_rules").TextHighlightRules;
      var RobotHighlightRules = function() {
        var builtinConstantsRegex = new RegExp(/\$\{CURDIR\}|\$\{TEMPDIR\}|\$\{EXECDIR\}|\$\{\/\}|\$\{\:\}|\$\{\\n\}|\$\{true\}|\$\{false\}|\$\{none\}|\$\{null\}|\$\{space(?:\s*\*\s+[0-9]+)?\}|\$\{empty\}|&\{empty\}|@\{empty\}|\$\{TEST NAME\}|@\{TEST[\s_]TAGS\}|\$\{TEST[\s_]DOCUMENTATION\}|\$\{TEST[\s_]STATUS\}|\$\{TEST[\s_]MESSAGE\}|\$\{PREV[\s_]TEST[\s_]NAME\}|\$\{PREV[\s_]TEST[\s_]STATUS\}|\$\{PREV[\s_]TEST[\s_]MESSAGE\}|\$\{SUITE[\s_]NAME\}|\$\{SUITE[\s_]SOURCE\}|\$\{SUITE[\s_]DOCUMENTATION\}|&\{SUITE[\s_]METADATA\}|\$\{SUITE[\s_]STATUS\}|\$\{SUITE[\s_]MESSAGE\}|\$\{KEYWORD[\s_]STATUS\}|\$\{KEYWORD[\s_]MESSAGE\}|\$\{LOG[\s_]LEVEL\}|\$\{OUTPUT[\s_]FILE\}|\$\{LOG[\s_]FILE\}|\$\{REPORT[\s_]FILE\}|\$\{DEBUG[\s_]FILE\}|\$\{OUTPUT[\s_]DIR\}/);
        this.$rules = {
          "start": [{
            token: "string.robot.header",
            regex: /^\*{3}\s+(?:settings?|metadata|(?:user )?keywords?|test ?cases?|tasks?|variables?)/,
            caseInsensitive: true,
            push: [{
              token: "string.robot.header",
              regex: /$/,
              next: "pop"
            }, {
              defaultToken: "string.robot.header"
            }],
            comment: "start of a table"
          }, {
            token: "comment.robot",
            regex: /(?:^|\s{2,}|\t|\|\s{1,})(?=[^\\])#/,
            push: [{
              token: "comment.robot",
              regex: /$/,
              next: "pop"
            }, {
              defaultToken: "comment.robot"
            }]
          }, {
            token: "comment",
            regex: /^\s*\[?Documentation\]?/,
            caseInsensitive: true,
            push: [{
              token: "comment",
              regex: /^(?!\s*\.\.\.)/,
              next: "pop"
            }, {
              defaultToken: "comment"
            }]
          }, {
            token: "storage.type.method.robot",
            regex: /\[(?:Arguments|Setup|Teardown|Precondition|Postcondition|Template|Return|Timeout)\]/,
            caseInsensitive: true,
            comment: "testcase settings"
          }, {
            token: "storage.type.method.robot",
            regex: /\[Tags\]/,
            caseInsensitive: true,
            push: [{
              token: "storage.type.method.robot",
              regex: /^(?!\s*\.\.\.)/,
              next: "pop"
            }, {
              token: "comment",
              regex: /^\s*\.\.\./
            }, {
              defaultToken: "storage.type.method.robot"
            }],
            comment: "test tags"
          }, {
            token: "constant.language",
            regex: builtinConstantsRegex,
            caseInsensitive: true
          }, {
            token: "entity.name.variable.wrapper",
            regex: /[$@&%]\{\{?/,
            push: [{
              token: "entity.name.variable.wrapper",
              regex: /\}\}?(\s?=)?/,
              next: "pop"
            }, {
              include: "$self"
            }, {
              token: "entity.name.variable",
              regex: /./
            }, {
              defaultToken: "entity.name.variable"
            }]
          }, {
            token: "keyword.control.robot",
            regex: /^[^\s\t*$|]+|(?=^\|)\s+[^\s\t*$|]+/,
            push: [{
              token: "keyword.control.robot",
              regex: /(?=\s{2})|\t|$|\s+(?=\|)/,
              next: "pop"
            }, {
              defaultToken: "keyword.control.robot"
            }]
          }, {
            token: "constant.numeric.robot",
            regex: /\b[0-9]+(?:\.[0-9]+)?\b/
          }, {
            token: "keyword",
            regex: /\s{2,}(for|in range|in|end|else if|if|else|with name)(\s{2,}|$)/,
            caseInsensitive: true
          }, {
            token: "storage.type.function",
            regex: /^(?:\s{2,}\s+)[^ \t*$@&%[.|]+/,
            push: [{
              token: "storage.type.function",
              regex: /(?=\s{2})|\t|$|\s+(?=\|)/,
              next: "pop"
            }, {
              defaultToken: "storage.type.function"
            }]
          }]
        };
        this.normalizeRules();
      };
      RobotHighlightRules.metadata = {
        fileTypes: ["robot"],
        name: "Robot",
        scopeName: "source.robot"
      };
      oop.inherits(RobotHighlightRules, TextHighlightRules);
      exports2.RobotHighlightRules = RobotHighlightRules;
    });
    ace.define("ace/mode/folding/pythonic", ["require", "exports", "module", "ace/lib/oop", "ace/mode/folding/fold_mode"], function(require2, exports2, module2) {
      var oop = require2("../../lib/oop");
      var BaseFoldMode = require2("./fold_mode").FoldMode;
      var FoldMode = exports2.FoldMode = function(markers) {
        this.foldingStartMarker = new RegExp("([\\[{])(?:\\s*)$|(" + markers + ")(?:\\s*)(?:#.*)?$");
      };
      oop.inherits(FoldMode, BaseFoldMode);
      (function() {
        this.getFoldWidgetRange = function(session, foldStyle, row) {
          var line = session.getLine(row);
          var match = line.match(this.foldingStartMarker);
          if (match) {
            if (match[1])
              return this.openingBracketBlock(session, match[1], row, match.index);
            if (match[2])
              return this.indentationBlock(session, row, match.index + match[2].length);
            return this.indentationBlock(session, row);
          }
        };
      }).call(FoldMode.prototype);
    });
    ace.define("ace/mode/robot", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/robot_highlight_rules", "ace/mode/folding/pythonic"], function(require2, exports2, module2) {
      var oop = require2("../lib/oop");
      var TextMode = require2("./text").Mode;
      var RobotHighlightRules = require2("./robot_highlight_rules").RobotHighlightRules;
      var FoldMode = require2("./folding/pythonic").FoldMode;
      var Mode = function() {
        this.HighlightRules = RobotHighlightRules;
        this.foldingRules = new FoldMode();
        this.$behaviour = this.$defaultBehaviour;
      };
      oop.inherits(Mode, TextMode);
      (function() {
        this.lineCommentStart = "#";
        this.$id = "ace/mode/robot";
        this.snippetFileId = "ace/snippets/robot";
      }).call(Mode.prototype);
      exports2.Mode = Mode;
    });
    (function() {
      ace.require(["ace/mode/robot"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(modeRobot$2);
  return modeRobot$2.exports;
}
var modeRobotExports = requireModeRobot();
const modeRobot = /* @__PURE__ */ getDefaultExportFromCjs(modeRobotExports);
const modeRobot$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: modeRobot
}, [modeRobotExports]);
export {
  modeRobot$1 as m
};
