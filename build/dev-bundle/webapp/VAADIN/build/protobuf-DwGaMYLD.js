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
var protobuf$2 = { exports: {} };
var hasRequiredProtobuf;
function requireProtobuf() {
  if (hasRequiredProtobuf) return protobuf$2.exports;
  hasRequiredProtobuf = 1;
  (function(module, exports) {
    (function() {
      ace.require(["ace/snippets/protobuf"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(protobuf$2);
  return protobuf$2.exports;
}
var protobufExports = requireProtobuf();
const protobuf = /* @__PURE__ */ getDefaultExportFromCjs(protobufExports);
const protobuf$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: protobuf
}, [protobufExports]);
export {
  protobuf$1 as p
};
