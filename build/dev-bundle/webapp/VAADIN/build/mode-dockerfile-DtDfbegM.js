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
var modeDockerfile$2 = { exports: {} };
var hasRequiredModeDockerfile;
function requireModeDockerfile() {
  if (hasRequiredModeDockerfile) return modeDockerfile$2.exports;
  hasRequiredModeDockerfile = 1;
  (function(module, exports) {
    ace.define("ace/mode/sh_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules"], function(require2, exports2, module2) {
      var oop = require2("../lib/oop");
      var TextHighlightRules = require2("./text_highlight_rules").TextHighlightRules;
      var reservedKeywords = exports2.reservedKeywords = "!|{|}|case|do|done|elif|else|esac|fi|for|if|in|then|until|while|&|;|export|local|read|typeset|unset|elif|select|set|function|declare|readonly";
      var languageConstructs = exports2.languageConstructs = "[|]|alias|bg|bind|break|builtin|cd|command|compgen|complete|continue|dirs|disown|echo|enable|eval|exec|exit|fc|fg|getopts|hash|help|history|jobs|kill|let|logout|popd|printf|pushd|pwd|return|set|shift|shopt|source|suspend|test|times|trap|type|ulimit|umask|unalias|wait";
      var ShHighlightRules = function() {
        var keywordMapper = this.createKeywordMapper({
          "keyword": reservedKeywords,
          "support.function.builtin": languageConstructs,
          "invalid.deprecated": "debugger"
        }, "identifier");
        var integer = "(?:(?:[1-9]\\d*)|(?:0))";
        var fraction = "(?:\\.\\d+)";
        var intPart = "(?:\\d+)";
        var pointFloat = "(?:(?:" + intPart + "?" + fraction + ")|(?:" + intPart + "\\.))";
        var exponentFloat = "(?:(?:" + pointFloat + "|" + intPart + "))";
        var floatNumber = "(?:" + exponentFloat + "|" + pointFloat + ")";
        var fileDescriptor = "(?:&" + intPart + ")";
        var variableName = "[a-zA-Z_][a-zA-Z0-9_]*";
        var variable = "(?:" + variableName + "(?==))";
        var builtinVariable = "(?:\\$(?:SHLVL|\\$|\\!|\\?))";
        var func = "(?:" + variableName + "\\s*\\(\\))";
        this.$rules = {
          "start": [{
            token: "constant",
            regex: /\\./
          }, {
            token: ["text", "comment"],
            regex: /(^|\s)(#.*)$/
          }, {
            token: "string.start",
            regex: '"',
            push: [{
              token: "constant.language.escape",
              regex: /\\(?:[$`"\\]|$)/
            }, {
              include: "variables"
            }, {
              token: "keyword.operator",
              regex: /`/
              // TODO highlight `
            }, {
              token: "string.end",
              regex: '"',
              next: "pop"
            }, {
              defaultToken: "string"
            }]
          }, {
            token: "string",
            regex: "\\$'",
            push: [{
              token: "constant.language.escape",
              regex: /\\(?:[abeEfnrtv\\'"]|x[a-fA-F\d]{1,2}|u[a-fA-F\d]{4}([a-fA-F\d]{4})?|c.|\d{1,3})/
            }, {
              token: "string",
              regex: "'",
              next: "pop"
            }, {
              defaultToken: "string"
            }]
          }, {
            regex: "<<<",
            token: "keyword.operator"
          }, {
            stateName: "heredoc",
            regex: "(<<-?)(\\s*)(['\"`]?)([\\w\\-]+)(['\"`]?)",
            onMatch: function(value, currentState, stack) {
              var next = value[2] == "-" ? "indentedHeredoc" : "heredoc";
              var tokens = value.split(this.splitRegex);
              stack.push(next, tokens[4]);
              return [
                { type: "constant", value: tokens[1] },
                { type: "text", value: tokens[2] },
                { type: "string", value: tokens[3] },
                { type: "support.class", value: tokens[4] },
                { type: "string", value: tokens[5] }
              ];
            },
            rules: {
              heredoc: [{
                onMatch: function(value, currentState, stack) {
                  if (value === stack[1]) {
                    stack.shift();
                    stack.shift();
                    this.next = stack[0] || "start";
                    return "support.class";
                  }
                  this.next = "";
                  return "string";
                },
                regex: ".*$",
                next: "start"
              }],
              indentedHeredoc: [{
                token: "string",
                regex: "^	+"
              }, {
                onMatch: function(value, currentState, stack) {
                  if (value === stack[1]) {
                    stack.shift();
                    stack.shift();
                    this.next = stack[0] || "start";
                    return "support.class";
                  }
                  this.next = "";
                  return "string";
                },
                regex: ".*$",
                next: "start"
              }]
            }
          }, {
            regex: "$",
            token: "empty",
            next: function(currentState, stack) {
              if (stack[0] === "heredoc" || stack[0] === "indentedHeredoc")
                return stack[0];
              return currentState;
            }
          }, {
            token: ["keyword", "text", "text", "text", "variable"],
            regex: /(declare|local|readonly)(\s+)(?:(-[fixar]+)(\s+))?([a-zA-Z_][a-zA-Z0-9_]*\b)/
          }, {
            token: "variable.language",
            regex: builtinVariable
          }, {
            token: "variable",
            regex: variable
          }, {
            include: "variables"
          }, {
            token: "support.function",
            regex: func
          }, {
            token: "support.function",
            regex: fileDescriptor
          }, {
            token: "string",
            start: "'",
            end: "'"
          }, {
            token: "constant.numeric",
            regex: floatNumber
          }, {
            token: "constant.numeric",
            regex: integer + "\\b"
          }, {
            token: keywordMapper,
            regex: "[a-zA-Z_][a-zA-Z0-9_]*\\b"
          }, {
            token: "keyword.operator",
            regex: "\\+|\\-|\\*|\\*\\*|\\/|\\/\\/|~|<|>|<=|=>|=|!=|[%&|`]"
          }, {
            token: "punctuation.operator",
            regex: ";"
          }, {
            token: "paren.lparen",
            regex: "[\\[\\(\\{]"
          }, {
            token: "paren.rparen",
            regex: "[\\]]"
          }, {
            token: "paren.rparen",
            regex: "[\\)\\}]",
            next: "pop"
          }],
          variables: [{
            token: "variable",
            regex: /(\$)(\w+)/
          }, {
            token: ["variable", "paren.lparen"],
            regex: /(\$)(\()/,
            push: "start"
          }, {
            token: ["variable", "paren.lparen", "keyword.operator", "variable", "keyword.operator"],
            regex: /(\$)(\{)([#!]?)(\w+|[*@#?\-$!0_])(:[?+\-=]?|##?|%%?|,,?\/|\^\^?)?/,
            push: "start"
          }, {
            token: "variable",
            regex: /\$[*@#?\-$!0_]/
          }, {
            token: ["variable", "paren.lparen"],
            regex: /(\$)(\{)/,
            push: "start"
          }]
        };
        this.normalizeRules();
      };
      oop.inherits(ShHighlightRules, TextHighlightRules);
      exports2.ShHighlightRules = ShHighlightRules;
    });
    ace.define("ace/mode/folding/cstyle", ["require", "exports", "module", "ace/lib/oop", "ace/range", "ace/mode/folding/fold_mode"], function(require2, exports2, module2) {
      var oop = require2("../../lib/oop");
      var Range = require2("../../range").Range;
      var BaseFoldMode = require2("./fold_mode").FoldMode;
      var FoldMode = exports2.FoldMode = function(commentRegex) {
        if (commentRegex) {
          this.foldingStartMarker = new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/, "|" + commentRegex.start));
          this.foldingStopMarker = new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/, "|" + commentRegex.end));
        }
      };
      oop.inherits(FoldMode, BaseFoldMode);
      (function() {
        this.foldingStartMarker = /([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/;
        this.foldingStopMarker = /^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/;
        this.singleLineBlockCommentRe = /^\s*(\/\*).*\*\/\s*$/;
        this.tripleStarBlockCommentRe = /^\s*(\/\*\*\*).*\*\/\s*$/;
        this.startRegionRe = /^\s*(\/\*|\/\/)#?region\b/;
        this._getFoldWidgetBase = this.getFoldWidget;
        this.getFoldWidget = function(session, foldStyle, row) {
          var line = session.getLine(row);
          if (this.singleLineBlockCommentRe.test(line)) {
            if (!this.startRegionRe.test(line) && !this.tripleStarBlockCommentRe.test(line))
              return "";
          }
          var fw = this._getFoldWidgetBase(session, foldStyle, row);
          if (!fw && this.startRegionRe.test(line))
            return "start";
          return fw;
        };
        this.getFoldWidgetRange = function(session, foldStyle, row, forceMultiline) {
          var line = session.getLine(row);
          if (this.startRegionRe.test(line))
            return this.getCommentRegionBlock(session, line, row);
          var match = line.match(this.foldingStartMarker);
          if (match) {
            var i = match.index;
            if (match[1])
              return this.openingBracketBlock(session, match[1], row, i);
            var range = session.getCommentFoldRange(row, i + match[0].length, 1);
            if (range && !range.isMultiLine()) {
              if (forceMultiline) {
                range = this.getSectionRange(session, row);
              } else if (foldStyle != "all")
                range = null;
            }
            return range;
          }
          if (foldStyle === "markbegin")
            return;
          var match = line.match(this.foldingStopMarker);
          if (match) {
            var i = match.index + match[0].length;
            if (match[1])
              return this.closingBracketBlock(session, match[1], row, i);
            return session.getCommentFoldRange(row, i, -1);
          }
        };
        this.getSectionRange = function(session, row) {
          var line = session.getLine(row);
          var startIndent = line.search(/\S/);
          var startRow = row;
          var startColumn = line.length;
          row = row + 1;
          var endRow = row;
          var maxRow = session.getLength();
          while (++row < maxRow) {
            line = session.getLine(row);
            var indent = line.search(/\S/);
            if (indent === -1)
              continue;
            if (startIndent > indent)
              break;
            var subRange = this.getFoldWidgetRange(session, "all", row);
            if (subRange) {
              if (subRange.start.row <= startRow) {
                break;
              } else if (subRange.isMultiLine()) {
                row = subRange.end.row;
              } else if (startIndent == indent) {
                break;
              }
            }
            endRow = row;
          }
          return new Range(startRow, startColumn, endRow, session.getLine(endRow).length);
        };
        this.getCommentRegionBlock = function(session, line, row) {
          var startColumn = line.search(/\s*$/);
          var maxRow = session.getLength();
          var startRow = row;
          var re = /^\s*(?:\/\*|\/\/|--)#?(end)?region\b/;
          var depth = 1;
          while (++row < maxRow) {
            line = session.getLine(row);
            var m = re.exec(line);
            if (!m)
              continue;
            if (m[1])
              depth--;
            else
              depth++;
            if (!depth)
              break;
          }
          var endRow = row;
          if (endRow > startRow) {
            return new Range(startRow, startColumn, endRow, line.length);
          }
        };
      }).call(FoldMode.prototype);
    });
    ace.define("ace/mode/sh", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/sh_highlight_rules", "ace/range", "ace/mode/folding/cstyle", "ace/mode/behaviour/cstyle"], function(require2, exports2, module2) {
      var oop = require2("../lib/oop");
      var TextMode = require2("./text").Mode;
      var ShHighlightRules = require2("./sh_highlight_rules").ShHighlightRules;
      var Range = require2("../range").Range;
      var CStyleFoldMode = require2("./folding/cstyle").FoldMode;
      var CstyleBehaviour = require2("./behaviour/cstyle").CstyleBehaviour;
      var Mode = function() {
        this.HighlightRules = ShHighlightRules;
        this.foldingRules = new CStyleFoldMode();
        this.$behaviour = new CstyleBehaviour();
      };
      oop.inherits(Mode, TextMode);
      (function() {
        this.lineCommentStart = "#";
        this.getNextLineIndent = function(state, line, tab) {
          var indent = this.$getIndent(line);
          var tokenizedLine = this.getTokenizer().getLineTokens(line, state);
          var tokens = tokenizedLine.tokens;
          if (tokens.length && tokens[tokens.length - 1].type == "comment") {
            return indent;
          }
          if (state == "start") {
            var match = line.match(/^.*[\{\(\[:]\s*$/);
            if (match) {
              indent += tab;
            }
          }
          return indent;
        };
        var outdents = {
          "pass": 1,
          "return": 1,
          "raise": 1,
          "break": 1,
          "continue": 1
        };
        this.checkOutdent = function(state, line, input) {
          if (input !== "\r\n" && input !== "\r" && input !== "\n")
            return false;
          var tokens = this.getTokenizer().getLineTokens(line.trim(), state).tokens;
          if (!tokens)
            return false;
          do {
            var last = tokens.pop();
          } while (last && (last.type == "comment" || last.type == "text" && last.value.match(/^\s+$/)));
          if (!last)
            return false;
          return last.type == "keyword" && outdents[last.value];
        };
        this.autoOutdent = function(state, doc, row) {
          row += 1;
          var indent = this.$getIndent(doc.getLine(row));
          var tab = doc.getTabString();
          if (indent.slice(-tab.length) == tab)
            doc.remove(new Range(row, indent.length - tab.length, row, indent.length));
        };
        this.$id = "ace/mode/sh";
        this.snippetFileId = "ace/snippets/sh";
      }).call(Mode.prototype);
      exports2.Mode = Mode;
    });
    ace.define("ace/mode/dockerfile_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/sh_highlight_rules"], function(require2, exports2, module2) {
      var oop = require2("../lib/oop");
      var ShHighlightRules = require2("./sh_highlight_rules").ShHighlightRules;
      var DockerfileHighlightRules = function() {
        ShHighlightRules.call(this);
        var startRules = this.$rules.start;
        for (var i = 0; i < startRules.length; i++) {
          if (startRules[i].token == "variable.language") {
            startRules.splice(i, 0, {
              token: "constant.language",
              regex: "(?:^(?:FROM|MAINTAINER|RUN|CMD|EXPOSE|ENV|ADD|ENTRYPOINT|VOLUME|USER|WORKDIR|ONBUILD|COPY|LABEL)\\b)",
              caseInsensitive: true
            });
            break;
          }
        }
      };
      oop.inherits(DockerfileHighlightRules, ShHighlightRules);
      exports2.DockerfileHighlightRules = DockerfileHighlightRules;
    });
    ace.define("ace/mode/dockerfile", ["require", "exports", "module", "ace/lib/oop", "ace/mode/sh", "ace/mode/dockerfile_highlight_rules", "ace/mode/folding/cstyle"], function(require2, exports2, module2) {
      var oop = require2("../lib/oop");
      var ShMode = require2("./sh").Mode;
      var DockerfileHighlightRules = require2("./dockerfile_highlight_rules").DockerfileHighlightRules;
      var CStyleFoldMode = require2("./folding/cstyle").FoldMode;
      var Mode = function() {
        ShMode.call(this);
        this.HighlightRules = DockerfileHighlightRules;
        this.foldingRules = new CStyleFoldMode();
      };
      oop.inherits(Mode, ShMode);
      (function() {
        this.$id = "ace/mode/dockerfile";
      }).call(Mode.prototype);
      exports2.Mode = Mode;
    });
    (function() {
      ace.require(["ace/mode/dockerfile"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(modeDockerfile$2);
  return modeDockerfile$2.exports;
}
var modeDockerfileExports = requireModeDockerfile();
const modeDockerfile = /* @__PURE__ */ getDefaultExportFromCjs(modeDockerfileExports);
const modeDockerfile$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: modeDockerfile
}, [modeDockerfileExports]);
export {
  modeDockerfile$1 as m
};
