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
var abc$2 = { exports: {} };
var hasRequiredAbc;
function requireAbc() {
  if (hasRequiredAbc) return abc$2.exports;
  hasRequiredAbc = 1;
  (function(module, exports) {
    ace.define("ace/snippets/abc.snippets", ["require", "exports", "module"], function(require2, exports2, module2) {
      module2.exports = '\nsnippet zupfnoter.print\n	%%%%hn.print {"startpos": ${1:pos_y}, "t":"${2:title}", "v":[${3:voices}], "s":[[${4:syncvoices}1,2]], "f":[${5:flowlines}],  "sf":[${6:subflowlines}], "j":[${7:jumplines}]}\n\nsnippet zupfnoter.note\n	%%%%hn.note {"pos": [${1:pos_x},${2:pos_y}], "text": "${3:text}", "style": "${4:style}"}\n\nsnippet zupfnoter.annotation\n	%%%%hn.annotation {"id": "${1:id}", "pos": [${2:pos}], "text": "${3:text}"}\n\nsnippet zupfnoter.lyrics\n	%%%%hn.lyrics {"pos": [${1:x_pos},${2:y_pos}]}\n\nsnippet zupfnoter.legend\n	%%%%hn.legend {"pos": [${1:x_pos},${2:y_pos}]}\n\n\n\nsnippet zupfnoter.target\n	"^:${1:target}"\n\nsnippet zupfnoter.goto\n	"^@${1:target}@${2:distance}"\n\nsnippet zupfnoter.annotationref\n	"^#${1:target}"\n\nsnippet zupfnoter.annotation\n	"^!${1:text}@${2:x_offset},${3:y_offset}"\n\n\n';
    });
    ace.define("ace/snippets/abc", ["require", "exports", "module", "ace/snippets/abc.snippets"], function(require2, exports2, module2) {
      exports2.snippetText = require2("./abc.snippets");
      exports2.scope = "abc";
    });
    (function() {
      ace.require(["ace/snippets/abc"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(abc$2);
  return abc$2.exports;
}
var abcExports = requireAbc();
const abc = /* @__PURE__ */ getDefaultExportFromCjs(abcExports);
const abc$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: abc
}, [abcExports]);
export {
  abc$1 as a
};
