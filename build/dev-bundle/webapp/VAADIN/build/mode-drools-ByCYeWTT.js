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
var modeDrools$2 = { exports: {} };
var hasRequiredModeDrools;
function requireModeDrools() {
  if (hasRequiredModeDrools) return modeDrools$2.exports;
  hasRequiredModeDrools = 1;
  (function(module, exports) {
    ace.define("ace/mode/doc_comment_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules"], function(require2, exports2, module2) {
      var oop = require2("../lib/oop");
      var TextHighlightRules = require2("./text_highlight_rules").TextHighlightRules;
      var DocCommentHighlightRules = function() {
        this.$rules = {
          "start": [
            {
              token: "comment.doc.tag",
              regex: "@[\\w\\d_]+"
              // TODO: fix email addresses
            },
            DocCommentHighlightRules.getTagRule(),
            {
              defaultToken: "comment.doc",
              caseInsensitive: true
            }
          ]
        };
      };
      oop.inherits(DocCommentHighlightRules, TextHighlightRules);
      DocCommentHighlightRules.getTagRule = function(start) {
        return {
          token: "comment.doc.tag.storage.type",
          regex: "\\b(?:TODO|FIXME|XXX|HACK)\\b"
        };
      };
      DocCommentHighlightRules.getStartRule = function(start) {
        return {
          token: "comment.doc",
          regex: "\\/\\*(?=\\*)",
          next: start
        };
      };
      DocCommentHighlightRules.getEndRule = function(start) {
        return {
          token: "comment.doc",
          regex: "\\*\\/",
          next: start
        };
      };
      exports2.DocCommentHighlightRules = DocCommentHighlightRules;
    });
    ace.define("ace/mode/java_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/doc_comment_highlight_rules", "ace/mode/text_highlight_rules"], function(require2, exports2, module2) {
      var oop = require2("../lib/oop");
      var DocCommentHighlightRules = require2("./doc_comment_highlight_rules").DocCommentHighlightRules;
      var TextHighlightRules = require2("./text_highlight_rules").TextHighlightRules;
      var JavaHighlightRules = function() {
        var keywords = "abstract|continue|for|new|switch|assert|default|goto|package|synchronized|boolean|do|if|private|this|break|double|implements|protected|throw|byte|else|import|public|throws|case|enum|instanceof|return|transient|catch|extends|int|short|try|char|final|interface|static|void|class|finally|long|strictfp|volatile|const|float|native|super|while|var";
        var buildinConstants = "null|Infinity|NaN|undefined";
        var langClasses = "AbstractMethodError|AssertionError|ClassCircularityError|ClassFormatError|Deprecated|EnumConstantNotPresentException|ExceptionInInitializerError|IllegalAccessError|IllegalThreadStateException|InstantiationError|InternalError|NegativeArraySizeException|NoSuchFieldError|Override|Process|ProcessBuilder|SecurityManager|StringIndexOutOfBoundsException|SuppressWarnings|TypeNotPresentException|UnknownError|UnsatisfiedLinkError|UnsupportedClassVersionError|VerifyError|InstantiationException|IndexOutOfBoundsException|ArrayIndexOutOfBoundsException|CloneNotSupportedException|NoSuchFieldException|IllegalArgumentException|NumberFormatException|SecurityException|Void|InheritableThreadLocal|IllegalStateException|InterruptedException|NoSuchMethodException|IllegalAccessException|UnsupportedOperationException|Enum|StrictMath|Package|Compiler|Readable|Runtime|StringBuilder|Math|IncompatibleClassChangeError|NoSuchMethodError|ThreadLocal|RuntimePermission|ArithmeticException|NullPointerException|Long|Integer|Short|Byte|Double|Number|Float|Character|Boolean|StackTraceElement|Appendable|StringBuffer|Iterable|ThreadGroup|Runnable|Thread|IllegalMonitorStateException|StackOverflowError|OutOfMemoryError|VirtualMachineError|ArrayStoreException|ClassCastException|LinkageError|NoClassDefFoundError|ClassNotFoundException|RuntimeException|Exception|ThreadDeath|Error|Throwable|System|ClassLoader|Cloneable|Class|CharSequence|Comparable|String|Object";
        var keywordMapper = this.createKeywordMapper({
          "variable.language": "this",
          "keyword": keywords,
          "constant.language": buildinConstants,
          "support.function": langClasses
        }, "identifier");
        this.$rules = {
          "start": [
            {
              token: "comment",
              regex: "\\/\\/.*$"
            },
            DocCommentHighlightRules.getStartRule("doc-start"),
            {
              token: "comment",
              regex: "\\/\\*",
              next: "comment"
            },
            {
              token: "string",
              regex: '["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'
            },
            {
              token: "string",
              regex: "['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"
            },
            {
              token: "constant.numeric",
              regex: /0(?:[xX][0-9a-fA-F][0-9a-fA-F_]*|[bB][01][01_]*)[LlSsDdFfYy]?\b/
            },
            {
              token: "constant.numeric",
              regex: /[+-]?\d[\d_]*(?:(?:\.[\d_]*)?(?:[eE][+-]?[\d_]+)?)?[LlSsDdFfYy]?\b/
            },
            {
              token: "constant.language.boolean",
              regex: "(?:true|false)\\b"
            },
            {
              regex: "(open(?:\\s+))?module(?=\\s*\\w)",
              token: "keyword",
              next: [{
                regex: "{",
                token: "paren.lparen",
                next: [{
                  regex: "}",
                  token: "paren.rparen",
                  next: "start"
                }, {
                  regex: "\\b(requires|transitive|exports|opens|to|uses|provides|with)\\b",
                  token: "keyword"
                }]
              }, {
                token: "text",
                regex: "\\s+"
              }, {
                token: "identifier",
                regex: "\\w+"
              }, {
                token: "punctuation.operator",
                regex: "."
              }, {
                token: "text",
                regex: "\\s+"
              }, {
                regex: "",
                next: "start"
              }]
            },
            {
              token: keywordMapper,
              regex: "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
            },
            {
              token: "keyword.operator",
              regex: "!|\\$|%|&|\\||\\^|\\*|\\/|\\-\\-|\\-|\\+\\+|\\+|~|===|==|=|!=|!==|<=|>=|<<=|>>=|>>>=|<>|<|>|!|&&|\\|\\||\\?|\\:|\\*=|\\/=|%=|\\+=|\\-=|&=|\\|=|\\^=|\\b(?:in|instanceof|new|delete|typeof|void)"
            },
            {
              token: "lparen",
              regex: "[[({]"
            },
            {
              token: "rparen",
              regex: "[\\])}]"
            },
            {
              token: "text",
              regex: "\\s+"
            }
          ],
          "comment": [
            {
              token: "comment",
              regex: "\\*\\/",
              next: "start"
            },
            {
              defaultToken: "comment"
            }
          ]
        };
        this.embedRules(DocCommentHighlightRules, "doc-", [DocCommentHighlightRules.getEndRule("start")]);
        this.normalizeRules();
      };
      oop.inherits(JavaHighlightRules, TextHighlightRules);
      exports2.JavaHighlightRules = JavaHighlightRules;
    });
    ace.define("ace/mode/drools_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules", "ace/mode/java_highlight_rules", "ace/mode/doc_comment_highlight_rules"], function(require2, exports2, module2) {
      var oop = require2("../lib/oop");
      var TextHighlightRules = require2("./text_highlight_rules").TextHighlightRules;
      var JavaHighlightRules = require2("./java_highlight_rules").JavaHighlightRules;
      var DocCommentHighlightRules = require2("./doc_comment_highlight_rules").DocCommentHighlightRules;
      var identifierRe = "[a-zA-Z\\$_¡-￿][a-zA-Z\\d\\$_¡-￿]*";
      var packageIdentifierRe = "[a-zA-Z\\$_¡-￿][\\.a-zA-Z\\d\\$_¡-￿]*";
      var DroolsHighlightRules = function() {
        var keywords = "date|effective|expires|lock|on|active|no|loop|auto|focus|activation|group|agenda|ruleflow|duration|timer|calendars|refract|direct|dialect|salience|enabled|attributes|extends|template|function|contains|matches|eval|excludes|soundslike|memberof|not|in|or|and|exists|forall|over|from|entry|point|accumulate|acc|collect|action|reverse|result|end|init|instanceof|extends|super|boolean|char|byte|short|int|long|float|double|this|void|class|new|case|final|if|else|for|while|do|default|try|catch|finally|switch|synchronized|return|throw|break|continue|assert|modify|static|public|protected|private|abstract|native|transient|volatile|strictfp|throws|interface|enum|implements|type|window|trait|no-loop|str";
        var langClasses = "AbstractMethodError|AssertionError|ClassCircularityError|ClassFormatError|Deprecated|EnumConstantNotPresentException|ExceptionInInitializerError|IllegalAccessError|IllegalThreadStateException|InstantiationError|InternalError|NegativeArraySizeException|NoSuchFieldError|Override|Process|ProcessBuilder|SecurityManager|StringIndexOutOfBoundsException|SuppressWarnings|TypeNotPresentException|UnknownError|UnsatisfiedLinkError|UnsupportedClassVersionError|VerifyError|InstantiationException|IndexOutOfBoundsException|ArrayIndexOutOfBoundsException|CloneNotSupportedException|NoSuchFieldException|IllegalArgumentException|NumberFormatException|SecurityException|Void|InheritableThreadLocal|IllegalStateException|InterruptedException|NoSuchMethodException|IllegalAccessException|UnsupportedOperationException|Enum|StrictMath|Package|Compiler|Readable|Runtime|StringBuilder|Math|IncompatibleClassChangeError|NoSuchMethodError|ThreadLocal|RuntimePermission|ArithmeticException|NullPointerException|Long|Integer|Short|Byte|Double|Number|Float|Character|Boolean|StackTraceElement|Appendable|StringBuffer|Iterable|ThreadGroup|Runnable|Thread|IllegalMonitorStateException|StackOverflowError|OutOfMemoryError|VirtualMachineError|ArrayStoreException|ClassCastException|LinkageError|NoClassDefFoundError|ClassNotFoundException|RuntimeException|Exception|ThreadDeath|Error|Throwable|System|ClassLoader|Cloneable|Class|CharSequence|Comparable|String|Object";
        var keywordMapper = this.createKeywordMapper({
          "variable.language": "this",
          "keyword": keywords,
          "constant.language": "null",
          "support.class": langClasses,
          "support.function": "retract|update|modify|insert"
        }, "identifier");
        var stringRules = function() {
          return [{
            token: "string",
            regex: '["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'
          }, {
            token: "string",
            regex: "['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"
          }];
        };
        var basicPreRules = function(blockCommentRules2) {
          return [
            {
              token: "comment",
              regex: "\\/\\/.*$"
            },
            DocCommentHighlightRules.getStartRule("doc-start"),
            {
              token: "comment",
              regex: "\\/\\*",
              next: blockCommentRules2
            },
            {
              token: "constant.numeric",
              regex: "0[xX][0-9a-fA-F]+\\b"
            },
            {
              token: "constant.numeric",
              regex: "[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"
            },
            {
              token: "constant.language.boolean",
              regex: "(?:true|false)\\b"
            }
          ];
        };
        var blockCommentRules = function(returnRule) {
          return [
            {
              token: "comment.block",
              regex: "\\*\\/",
              next: returnRule
            },
            {
              defaultToken: "comment.block"
            }
          ];
        };
        var basicPostRules = function() {
          return [{
            token: keywordMapper,
            regex: "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
          }, {
            token: "keyword.operator",
            regex: "!|\\$|%|&|\\*|\\-\\-|\\-|\\+\\+|\\+|~|===|==|=|!=|!==|<=|>=|<<=|>>=|>>>=|<>|<|>|!|&&|\\|\\||\\?\\:|\\*=|%=|\\+=|\\-=|&=|\\^=|\\b(?:in|instanceof|new|delete|typeof|void)"
          }, {
            token: "lparen",
            regex: "[[({]"
          }, {
            token: "rparen",
            regex: "[\\])}]"
          }, {
            token: "text",
            regex: "\\s+"
          }];
        };
        this.$rules = {
          "start": [].concat(basicPreRules("block.comment"), [
            {
              token: "entity.name.type",
              regex: "@[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
            },
            {
              token: ["keyword", "text", "entity.name.type"],
              regex: "(package)(\\s+)(" + packageIdentifierRe + ")"
            },
            {
              token: ["keyword", "text", "keyword", "text", "entity.name.type"],
              regex: "(import)(\\s+)(function)(\\s+)(" + packageIdentifierRe + ")"
            },
            {
              token: ["keyword", "text", "entity.name.type"],
              regex: "(import)(\\s+)(" + packageIdentifierRe + ")"
            },
            {
              token: ["keyword", "text", "entity.name.type", "text", "variable"],
              regex: "(global)(\\s+)(" + packageIdentifierRe + ")(\\s+)(" + identifierRe + ")"
            },
            {
              token: ["keyword", "text", "keyword", "text", "entity.name.type"],
              regex: "(declare)(\\s+)(trait)(\\s+)(" + identifierRe + ")"
            },
            {
              token: ["keyword", "text", "entity.name.type"],
              regex: "(declare)(\\s+)(" + identifierRe + ")"
            },
            {
              token: ["keyword", "text", "entity.name.type"],
              regex: "(extends)(\\s+)(" + packageIdentifierRe + ")"
            },
            {
              token: ["keyword", "text"],
              regex: "(rule)(\\s+)",
              next: "asset.name"
            }
          ], stringRules(), [{
            token: ["variable.other", "text", "text"],
            regex: "(" + identifierRe + ")(\\s*)(:)"
          }, {
            token: ["keyword", "text"],
            regex: "(query)(\\s+)",
            next: "asset.name"
          }, {
            token: ["keyword", "text"],
            regex: "(when)(\\s*)"
          }, {
            token: ["keyword", "text"],
            regex: "(then)(\\s*)",
            next: "java-start"
          }, {
            token: "paren.lparen",
            regex: /[\[({]/
          }, {
            token: "paren.rparen",
            regex: /[\])}]/
          }], basicPostRules()),
          "block.comment": blockCommentRules("start"),
          "asset.name": [
            {
              token: "entity.name",
              regex: '["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'
            },
            {
              token: "entity.name",
              regex: "['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"
            },
            {
              token: "entity.name",
              regex: identifierRe
            },
            {
              regex: "",
              token: "empty",
              next: "start"
            }
          ]
        };
        this.embedRules(DocCommentHighlightRules, "doc-", [DocCommentHighlightRules.getEndRule("start")]);
        this.embedRules(JavaHighlightRules, "java-", [
          {
            token: "support.function",
            regex: "\\b(insert|modify|retract|update)\\b"
          },
          {
            token: "keyword",
            regex: "\\bend\\b",
            next: "start"
          }
        ]);
      };
      oop.inherits(DroolsHighlightRules, TextHighlightRules);
      exports2.DroolsHighlightRules = DroolsHighlightRules;
    });
    ace.define("ace/mode/folding/drools", ["require", "exports", "module", "ace/lib/oop", "ace/range", "ace/mode/folding/fold_mode", "ace/token_iterator"], function(require2, exports2, module2) {
      var oop = require2("../../lib/oop");
      var Range = require2("../../range").Range;
      var BaseFoldMode = require2("./fold_mode").FoldMode;
      var TokenIterator = require2("../../token_iterator").TokenIterator;
      var FoldMode = exports2.FoldMode = function() {
      };
      oop.inherits(FoldMode, BaseFoldMode);
      (function() {
        this.foldingStartMarker = /\b(rule|declare|query|when|then)\b/;
        this.foldingStopMarker = /\bend\b/;
        this.getFoldWidgetRange = function(session, foldStyle, row) {
          var line = session.getLine(row);
          var match = line.match(this.foldingStartMarker);
          if (match) {
            match.index;
            if (match[1]) {
              var position = { row, column: line.length };
              var iterator = new TokenIterator(session, position.row, position.column);
              var seek = "end";
              var token = iterator.getCurrentToken();
              if (token.value == "when") {
                seek = "then";
              }
              while (token) {
                if (token.value == seek) {
                  return Range.fromPoints(position, {
                    row: iterator.getCurrentTokenRow(),
                    column: iterator.getCurrentTokenColumn()
                  });
                }
                token = iterator.stepForward();
              }
            }
          }
        };
      }).call(FoldMode.prototype);
    });
    ace.define("ace/mode/drools", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/drools_highlight_rules", "ace/mode/folding/drools"], function(require2, exports2, module2) {
      var oop = require2("../lib/oop");
      var TextMode = require2("./text").Mode;
      var DroolsHighlightRules = require2("./drools_highlight_rules").DroolsHighlightRules;
      var DroolsFoldMode = require2("./folding/drools").FoldMode;
      var Mode = function() {
        this.HighlightRules = DroolsHighlightRules;
        this.foldingRules = new DroolsFoldMode();
        this.$behaviour = this.$defaultBehaviour;
      };
      oop.inherits(Mode, TextMode);
      (function() {
        this.lineCommentStart = "//";
        this.$id = "ace/mode/drools";
        this.snippetFileId = "ace/snippets/drools";
      }).call(Mode.prototype);
      exports2.Mode = Mode;
    });
    (function() {
      ace.require(["ace/mode/drools"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(modeDrools$2);
  return modeDrools$2.exports;
}
var modeDroolsExports = requireModeDrools();
const modeDrools = /* @__PURE__ */ getDefaultExportFromCjs(modeDroolsExports);
const modeDrools$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: modeDrools
}, [modeDroolsExports]);
export {
  modeDrools$1 as m
};
