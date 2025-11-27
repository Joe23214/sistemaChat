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
var extBeautify$2 = { exports: {} };
var hasRequiredExtBeautify;
function requireExtBeautify() {
  if (hasRequiredExtBeautify) return extBeautify$2.exports;
  hasRequiredExtBeautify = 1;
  (function(module, exports) {
    ace.define("ace/ext/beautify", ["require", "exports", "module", "ace/token_iterator"], function(require2, exports2, module2) {
      var TokenIterator = require2("../token_iterator").TokenIterator;
      function is(token, type) {
        return token.type.lastIndexOf(type + ".xml") > -1;
      }
      exports2.singletonTags = ["area", "base", "br", "col", "command", "embed", "hr", "html", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr"];
      exports2.blockTags = ["article", "aside", "blockquote", "body", "div", "dl", "fieldset", "footer", "form", "head", "header", "html", "nav", "ol", "p", "script", "section", "style", "table", "tbody", "tfoot", "thead", "ul"];
      exports2.formatOptions = {
        lineBreaksAfterCommasInCurlyBlock: true
      };
      exports2.beautify = function(session) {
        var iterator = new TokenIterator(session, 0, 0);
        var token = iterator.getCurrentToken();
        var tabString = session.getTabString();
        var singletonTags = exports2.singletonTags;
        var blockTags = exports2.blockTags;
        var formatOptions = exports2.formatOptions || {};
        var nextToken;
        var breakBefore = false;
        var spaceBefore = false;
        var spaceAfter = false;
        var code = "";
        var value = "";
        var tagName = "";
        var depth = 0;
        var lastDepth = 0;
        var lastIndent = 0;
        var indent = 0;
        var unindent = 0;
        var roundDepth = 0;
        var curlyDepth = 0;
        var row;
        var curRow = 0;
        var rowsToAdd = 0;
        var i;
        var indentNextLine = false;
        var inTag = false;
        var inCSS = false;
        var inBlock = false;
        var levels = { 0: 0 };
        var parents = [];
        var caseBody = false;
        var trimNext = function() {
          if (nextToken && nextToken.value && nextToken.type !== "string.regexp")
            nextToken.value = nextToken.value.replace(/^\s*/, "");
        };
        var trimLine = function() {
          var end = code.length - 1;
          while (true) {
            if (end == 0)
              break;
            if (code[end] !== " ")
              break;
            end = end - 1;
          }
          code = code.slice(0, end + 1);
        };
        var trimCode = function() {
          code = code.trimRight();
          breakBefore = false;
        };
        while (token !== null) {
          curRow = iterator.getCurrentTokenRow();
          iterator.$rowTokens;
          nextToken = iterator.stepForward();
          if (typeof token !== "undefined") {
            value = token.value;
            unindent = 0;
            inCSS = tagName === "style" || session.$modeId === "ace/mode/css";
            if (is(token, "tag-open")) {
              inTag = true;
              if (nextToken)
                inBlock = blockTags.indexOf(nextToken.value) !== -1;
              if (value === "</") {
                if (inBlock && !breakBefore && rowsToAdd < 1)
                  rowsToAdd++;
                if (inCSS)
                  rowsToAdd = 1;
                unindent = 1;
                inBlock = false;
              }
            } else if (is(token, "tag-close")) {
              inTag = false;
            } else if (is(token, "comment.start")) {
              inBlock = true;
            } else if (is(token, "comment.end")) {
              inBlock = false;
            }
            if (!inTag && !rowsToAdd && token.type === "paren.rparen" && token.value.substr(0, 1) === "}") {
              rowsToAdd++;
            }
            if (curRow !== row) {
              rowsToAdd = curRow;
              if (row)
                rowsToAdd -= row;
            }
            if (rowsToAdd) {
              trimCode();
              for (; rowsToAdd > 0; rowsToAdd--)
                code += "\n";
              breakBefore = true;
              if (!is(token, "comment") && !token.type.match(/^(comment|string)$/))
                value = value.trimLeft();
            }
            if (value) {
              if (token.type === "keyword" && value.match(/^(if|else|elseif|for|foreach|while|switch)$/)) {
                parents[depth] = value;
                trimNext();
                spaceAfter = true;
                if (value.match(/^(else|elseif)$/)) {
                  if (code.match(/\}[\s]*$/)) {
                    trimCode();
                    spaceBefore = true;
                  }
                }
              } else if (token.type === "paren.lparen") {
                trimNext();
                if (value.substr(-1) === "{") {
                  spaceAfter = true;
                  indentNextLine = false;
                  if (!inTag)
                    rowsToAdd = 1;
                }
                if (value.substr(0, 1) === "{") {
                  spaceBefore = true;
                  if (code.substr(-1) !== "[" && code.trimRight().substr(-1) === "[") {
                    trimCode();
                    spaceBefore = false;
                  } else if (code.trimRight().substr(-1) === ")") {
                    trimCode();
                  } else {
                    trimLine();
                  }
                }
              } else if (token.type === "paren.rparen") {
                unindent = 1;
                if (value.substr(0, 1) === "}") {
                  if (parents[depth - 1] === "case")
                    unindent++;
                  if (code.trimRight().substr(-1) === "{") {
                    trimCode();
                  } else {
                    spaceBefore = true;
                    if (inCSS)
                      rowsToAdd += 2;
                  }
                }
                if (value.substr(0, 1) === "]") {
                  if (code.substr(-1) !== "}" && code.trimRight().substr(-1) === "}") {
                    spaceBefore = false;
                    indent++;
                    trimCode();
                  }
                }
                if (value.substr(0, 1) === ")") {
                  if (code.substr(-1) !== "(" && code.trimRight().substr(-1) === "(") {
                    spaceBefore = false;
                    indent++;
                    trimCode();
                  }
                }
                trimLine();
              } else if ((token.type === "keyword.operator" || token.type === "keyword") && value.match(/^(=|==|===|!=|!==|&&|\|\||and|or|xor|\+=|.=|>|>=|<|<=|=>)$/)) {
                trimCode();
                trimNext();
                spaceBefore = true;
                spaceAfter = true;
              } else if (token.type === "punctuation.operator" && value === ";") {
                trimCode();
                trimNext();
                spaceAfter = true;
                if (inCSS)
                  rowsToAdd++;
              } else if (token.type === "punctuation.operator" && value.match(/^(:|,)$/)) {
                trimCode();
                trimNext();
                if (value.match(/^(,)$/) && curlyDepth > 0 && roundDepth === 0 && formatOptions.lineBreaksAfterCommasInCurlyBlock) {
                  rowsToAdd++;
                } else {
                  spaceAfter = true;
                  breakBefore = false;
                }
              } else if (token.type === "support.php_tag" && value === "?>" && !breakBefore) {
                trimCode();
                spaceBefore = true;
              } else if (is(token, "attribute-name") && code.substr(-1).match(/^\s$/)) {
                spaceBefore = true;
              } else if (is(token, "attribute-equals")) {
                trimLine();
                trimNext();
              } else if (is(token, "tag-close")) {
                trimLine();
                if (value === "/>")
                  spaceBefore = true;
              } else if (token.type === "keyword" && value.match(/^(case|default)$/)) {
                if (caseBody)
                  unindent = 1;
              }
              if (breakBefore && !(token.type.match(/^(comment)$/) && !value.substr(0, 1).match(/^[/#]$/)) && !(token.type.match(/^(string)$/) && !value.substr(0, 1).match(/^['"@]$/))) {
                indent = lastIndent;
                if (depth > lastDepth) {
                  indent++;
                  for (i = depth; i > lastDepth; i--)
                    levels[i] = indent;
                } else if (depth < lastDepth)
                  indent = levels[depth];
                lastDepth = depth;
                lastIndent = indent;
                if (unindent)
                  indent -= unindent;
                if (indentNextLine && !roundDepth) {
                  indent++;
                  indentNextLine = false;
                }
                for (i = 0; i < indent; i++)
                  code += tabString;
              }
              if (token.type === "keyword" && value.match(/^(case|default)$/)) {
                if (caseBody === false) {
                  parents[depth] = value;
                  depth++;
                  caseBody = true;
                }
              } else if (token.type === "keyword" && value.match(/^(break)$/)) {
                if (parents[depth - 1] && parents[depth - 1].match(/^(case|default)$/)) {
                  depth--;
                  caseBody = false;
                }
              }
              if (token.type === "paren.lparen") {
                roundDepth += (value.match(/\(/g) || []).length;
                curlyDepth += (value.match(/\{/g) || []).length;
                depth += value.length;
              }
              if (token.type === "keyword" && value.match(/^(if|else|elseif|for|while)$/)) {
                indentNextLine = true;
                roundDepth = 0;
              } else if (!roundDepth && value.trim() && token.type !== "comment")
                indentNextLine = false;
              if (token.type === "paren.rparen") {
                roundDepth -= (value.match(/\)/g) || []).length;
                curlyDepth -= (value.match(/\}/g) || []).length;
                for (i = 0; i < value.length; i++) {
                  depth--;
                  if (value.substr(i, 1) === "}" && parents[depth] === "case") {
                    depth--;
                  }
                }
              }
              if (token.type == "text")
                value = value.replace(/\s+$/, " ");
              if (spaceBefore && !breakBefore) {
                trimLine();
                if (code.substr(-1) !== "\n")
                  code += " ";
              }
              code += value;
              if (spaceAfter)
                code += " ";
              breakBefore = false;
              spaceBefore = false;
              spaceAfter = false;
              if (is(token, "tag-close") && (inBlock || blockTags.indexOf(tagName) !== -1) || is(token, "doctype") && value === ">") {
                if (inBlock && nextToken && nextToken.value === "</")
                  rowsToAdd = -1;
                else
                  rowsToAdd = 1;
              }
              if (nextToken && singletonTags.indexOf(nextToken.value) === -1) {
                if (is(token, "tag-open") && value === "</") {
                  depth--;
                } else if (is(token, "tag-open") && value === "<") {
                  depth++;
                } else if (is(token, "tag-close") && value === "/>") {
                  depth--;
                }
              }
              if (is(token, "tag-name")) {
                tagName = value;
              }
              row = curRow;
            }
          }
          token = nextToken;
        }
        code = code.trim();
        session.doc.setValue(code);
      };
      exports2.commands = [{
        name: "beautify",
        description: "Format selection (Beautify)",
        exec: function(editor) {
          exports2.beautify(editor.session);
        },
        bindKey: "Ctrl-Shift-B"
      }];
    });
    (function() {
      ace.require(["ace/ext/beautify"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(extBeautify$2);
  return extBeautify$2.exports;
}
var extBeautifyExports = requireExtBeautify();
const extBeautify = /* @__PURE__ */ getDefaultExportFromCjs(extBeautifyExports);
const extBeautify$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: extBeautify
}, [extBeautifyExports]);
export {
  extBeautify$1 as e
};
