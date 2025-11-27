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
var io$2 = { exports: {} };
var hasRequiredIo;
function requireIo() {
  if (hasRequiredIo) return io$2.exports;
  hasRequiredIo = 1;
  (function(module, exports) {
    ace.define("ace/snippets/io", ["require", "exports", "module"], function(require2, exports2, module2) {
      exports2.snippets = [
        {
          "content": "assertEquals(${1:expected}, ${2:expr})",
          "name": "assertEquals",
          "scope": "io",
          "tabTrigger": "ae"
        },
        {
          "content": "${1:${2:newValue} := ${3:Object} }clone do(\n	$0\n)",
          "name": "clone do",
          "scope": "io",
          "tabTrigger": "cdo"
        },
        {
          "content": 'docSlot("${1:slotName}", "${2:documentation}")',
          "name": "docSlot",
          "scope": "io",
          "tabTrigger": "ds"
        },
        {
          "content": "(${1:header,}\n	${2:body}\n)$0",
          "keyEquivalent": "@(",
          "name": "Indented Bracketed Line",
          "scope": "io",
          "tabTrigger": "("
        },
        {
          "content": "\n	$0\n",
          "keyEquivalent": "\r",
          "name": "Special: Return Inside Empty Parenthesis",
          "scope": "io meta.empty-parenthesis.io, io meta.comma-parenthesis.io"
        },
        {
          "content": "${1:methodName} := method(${2:args,}\n	$0\n)",
          "name": "method",
          "scope": "io",
          "tabTrigger": "m"
        },
        {
          "content": 'newSlot("${1:slotName}", ${2:defaultValue}, "${3:docString}")$0',
          "name": "newSlot",
          "scope": "io",
          "tabTrigger": "ns"
        },
        {
          "content": "${1:name} := Object clone do(\n	$0\n)",
          "name": "Object clone do",
          "scope": "io",
          "tabTrigger": "ocdo"
        },
        {
          "content": "test${1:SomeFeature} := method(\n	$0\n)",
          "name": "testMethod",
          "scope": "io",
          "tabTrigger": "ts"
        },
        {
          "content": "${1:Something}Test := ${2:UnitTest} clone do(\n	$0\n)",
          "name": "UnitTest",
          "scope": "io",
          "tabTrigger": "ut"
        }
      ];
      exports2.scope = "io";
    });
    (function() {
      ace.require(["ace/snippets/io"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(io$2);
  return io$2.exports;
}
var ioExports = requireIo();
const io = /* @__PURE__ */ getDefaultExportFromCjs(ioExports);
const io$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: io
}, [ioExports]);
export {
  io$1 as i
};
