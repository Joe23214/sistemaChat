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
var modeEdifact$2 = { exports: {} };
var hasRequiredModeEdifact;
function requireModeEdifact() {
  if (hasRequiredModeEdifact) return modeEdifact$2.exports;
  hasRequiredModeEdifact = 1;
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
    ace.define("ace/mode/edifact_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/doc_comment_highlight_rules", "ace/mode/text_highlight_rules"], function(require2, exports2, module2) {
      var oop = require2("../lib/oop");
      var DocCommentHighlightRules = require2("./doc_comment_highlight_rules").DocCommentHighlightRules;
      var TextHighlightRules = require2("./text_highlight_rules").TextHighlightRules;
      var EdifactHighlightRules = function() {
        var header = "UNH";
        var segment = "ADR|AGR|AJT|ALC|ALI|APP|APR|ARD|ARR|ASI|ATT|AUT|BAS|BGM|BII|BUS|CAV|CCD|CCI|CDI|CDS|CDV|CED|CIN|CLA|CLI|CMP|CNI|CNT|COD|COM|COT|CPI|CPS|CPT|CST|CTA|CUX|DAM|DFN|DGS|DII|DIM|DLI|DLM|DMS|DOC|DRD|DSG|DSI|DTM|EDT|EFI|ELM|ELU|ELV|EMP|EQA|EQD|EQN|ERC|ERP|EVE|FCA|FII|FNS|FNT|FOR|FSQ|FTX|GDS|GEI|GID|GIN|GIR|GOR|GPO|GRU|HAN|HYN|ICD|IDE|IFD|IHC|IMD|IND|INP|INV|IRQ|LAN|LIN|LOC|MEA|MEM|MKS|MOA|MSG|MTD|NAD|NAT|PAC|PAI|PAS|PCC|PCD|PCI|PDI|PER|PGI|PIA|PNA|POC|PRC|PRI|PRV|PSD|PTY|PYT|QRS|QTY|QUA|QVR|RCS|REL|RFF|RJL|RNG|ROD|RSL|RTE|SAL|SCC|SCD|SEG|SEL|SEQ|SFI|SGP|SGU|SPR|SPS|STA|STC|STG|STS|TAX|TCC|TDT|TEM|TMD|TMP|TOD|TPL|TRU|TSR|UNB|UNZ|UNT|UGH|UGT|UNS|VLI";
        var header = "UNH";
        var buildinConstants = "null|Infinity|NaN|undefined";
        var langClasses = "";
        var keywords = "BY|SE|ON|INV|JP|UNOA";
        var keywordMapper = this.createKeywordMapper({
          "variable.language": "this",
          "keyword": keywords,
          "entity.name.segment": segment,
          "entity.name.header": header,
          "constant.language": buildinConstants,
          "support.function": langClasses
        }, "identifier");
        this.$rules = {
          "start": [
            {
              token: "punctuation.operator",
              regex: "\\+.\\+"
            },
            {
              token: "constant.language.boolean",
              regex: "(?:true|false)\\b"
            },
            {
              token: keywordMapper,
              regex: "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
            },
            {
              token: "keyword.operator",
              regex: "\\+"
            },
            {
              token: "punctuation.operator",
              regex: "\\:|'"
            },
            {
              token: "identifier",
              regex: "\\:D\\:"
            }
          ]
        };
        this.embedRules(DocCommentHighlightRules, "doc-", [DocCommentHighlightRules.getEndRule("start")]);
      };
      EdifactHighlightRules.metaData = {
        fileTypes: ["edi"],
        keyEquivalent: "^~E",
        name: "Edifact",
        scopeName: "source.edifact"
      };
      oop.inherits(EdifactHighlightRules, TextHighlightRules);
      exports2.EdifactHighlightRules = EdifactHighlightRules;
    });
    ace.define("ace/mode/edifact", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/edifact_highlight_rules"], function(require2, exports2, module2) {
      var oop = require2("../lib/oop");
      var TextMode = require2("./text").Mode;
      var EdifactHighlightRules = require2("./edifact_highlight_rules").EdifactHighlightRules;
      var Mode = function() {
        this.HighlightRules = EdifactHighlightRules;
      };
      oop.inherits(Mode, TextMode);
      (function() {
        this.$id = "ace/mode/edifact";
        this.snippetFileId = "ace/snippets/edifact";
      }).call(Mode.prototype);
      exports2.Mode = Mode;
    });
    (function() {
      ace.require(["ace/mode/edifact"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(modeEdifact$2);
  return modeEdifact$2.exports;
}
var modeEdifactExports = requireModeEdifact();
const modeEdifact = /* @__PURE__ */ getDefaultExportFromCjs(modeEdifactExports);
const modeEdifact$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: modeEdifact
}, [modeEdifactExports]);
export {
  modeEdifact$1 as m
};
