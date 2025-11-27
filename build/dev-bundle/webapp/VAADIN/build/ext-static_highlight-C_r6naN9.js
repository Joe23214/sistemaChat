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
var extStatic_highlight$2 = { exports: {} };
var hasRequiredExtStatic_highlight;
function requireExtStatic_highlight() {
  if (hasRequiredExtStatic_highlight) return extStatic_highlight$2.exports;
  hasRequiredExtStatic_highlight = 1;
  (function(module, exports) {
    ace.define("ace/ext/static.css", ["require", "exports", "module"], function(require2, exports2, module2) {
      module2.exports = ".ace_static_highlight {\n    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'Source Code Pro', 'source-code-pro', 'Droid Sans Mono', monospace;\n    font-size: 12px;\n    white-space: pre-wrap\n}\n\n.ace_static_highlight .ace_gutter {\n    width: 2em;\n    text-align: right;\n    padding: 0 3px 0 0;\n    margin-right: 3px;\n    contain: none;\n}\n\n.ace_static_highlight.ace_show_gutter .ace_line {\n    padding-left: 2.6em;\n}\n\n.ace_static_highlight .ace_line { position: relative; }\n\n.ace_static_highlight .ace_gutter-cell {\n    -moz-user-select: -moz-none;\n    -khtml-user-select: none;\n    -webkit-user-select: none;\n    user-select: none;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    position: absolute;\n}\n\n\n.ace_static_highlight .ace_gutter-cell:before {\n    content: counter(ace_line, decimal);\n    counter-increment: ace_line;\n}\n.ace_static_highlight {\n    counter-reset: ace_line;\n}\n";
    });
    ace.define("ace/ext/static_highlight", ["require", "exports", "module", "ace/edit_session", "ace/layer/text", "ace/ext/static.css", "ace/config", "ace/lib/dom", "ace/lib/lang"], function(require2, exports2, module2) {
      var EditSession = require2("../edit_session").EditSession;
      var TextLayer = require2("../layer/text").Text;
      var baseStyles = require2("./static.css");
      var config = require2("../config");
      var dom = require2("../lib/dom");
      var escapeHTML = require2("../lib/lang").escapeHTML;
      var Element = (
        /** @class */
        function() {
          function Element2(type) {
            this.type = type;
            this.style = {};
            this.textContent = "";
          }
          Element2.prototype.cloneNode = function() {
            return this;
          };
          Element2.prototype.appendChild = function(child) {
            this.textContent += child.toString();
          };
          Element2.prototype.toString = function() {
            var stringBuilder = [];
            if (this.type != "fragment") {
              stringBuilder.push("<", this.type);
              if (this.className)
                stringBuilder.push(" class='", this.className, "'");
              var styleStr = [];
              for (var key in this.style) {
                styleStr.push(key, ":", this.style[key]);
              }
              if (styleStr.length)
                stringBuilder.push(" style='", styleStr.join(""), "'");
              stringBuilder.push(">");
            }
            if (this.textContent) {
              stringBuilder.push(this.textContent);
            }
            if (this.type != "fragment") {
              stringBuilder.push("</", this.type, ">");
            }
            return stringBuilder.join("");
          };
          return Element2;
        }()
      );
      var simpleDom = {
        createTextNode: function(textContent, element) {
          return escapeHTML(textContent);
        },
        createElement: function(type) {
          return new Element(type);
        },
        createFragment: function() {
          return new Element("fragment");
        }
      };
      var SimpleTextLayer = function() {
        this.config = {};
        this.dom = simpleDom;
      };
      SimpleTextLayer.prototype = TextLayer.prototype;
      var highlight = function(el, opts, callback) {
        var m = el.className.match(/lang-(\w+)/);
        var mode = opts.mode || m && "ace/mode/" + m[1];
        if (!mode)
          return false;
        var theme = opts.theme || "ace/theme/textmate";
        var data = "";
        var nodes = [];
        if (el.firstElementChild) {
          var textLen = 0;
          for (var i = 0; i < el.childNodes.length; i++) {
            var ch = el.childNodes[i];
            if (ch.nodeType == 3) {
              textLen += ch.data.length;
              data += ch.data;
            } else {
              nodes.push(textLen, ch);
            }
          }
        } else {
          data = el.textContent;
          if (opts.trim)
            data = data.trim();
        }
        highlight.render(data, mode, theme, opts.firstLineNumber, !opts.showGutter, function(highlighted) {
          dom.importCssString(highlighted.css, "ace_highlight");
          el.innerHTML = highlighted.html;
          var container = el.firstChild.firstChild;
          for (var i2 = 0; i2 < nodes.length; i2 += 2) {
            var pos = highlighted.session.doc.indexToPosition(nodes[i2]);
            var node = nodes[i2 + 1];
            var lineEl = container.children[pos.row];
            lineEl && lineEl.appendChild(node);
          }
          callback && callback();
        });
      };
      highlight.render = function(input, mode, theme, lineStart, disableGutter, callback) {
        var waiting = 1;
        var modeCache = EditSession.prototype.$modes;
        if (typeof theme == "string") {
          waiting++;
          config.loadModule(["theme", theme], function(m) {
            theme = m;
            --waiting || done();
          });
        }
        var modeOptions;
        if (mode && typeof mode === "object" && !mode.getTokenizer) {
          modeOptions = mode;
          mode = modeOptions.path;
        }
        if (typeof mode == "string") {
          waiting++;
          config.loadModule(["mode", mode], function(m) {
            if (!modeCache[mode] || modeOptions)
              modeCache[mode] = new m.Mode(modeOptions);
            mode = modeCache[mode];
            --waiting || done();
          });
        }
        function done() {
          var result = highlight.renderSync(input, mode, theme, lineStart, disableGutter);
          return callback ? callback(result) : result;
        }
        return --waiting || done();
      };
      highlight.renderSync = function(input, mode, theme, lineStart, disableGutter) {
        lineStart = parseInt(lineStart || 1, 10);
        var session = new EditSession("");
        session.setUseWorker(false);
        session.setMode(mode);
        var textLayer = new SimpleTextLayer();
        textLayer.setSession(session);
        Object.keys(textLayer.$tabStrings).forEach(function(k) {
          if (typeof textLayer.$tabStrings[k] == "string") {
            var el = simpleDom.createFragment();
            el.textContent = textLayer.$tabStrings[k];
            textLayer.$tabStrings[k] = el;
          }
        });
        session.setValue(input);
        var length = session.getLength();
        var outerEl = simpleDom.createElement("div");
        outerEl.className = theme.cssClass;
        var innerEl = simpleDom.createElement("div");
        innerEl.className = "ace_static_highlight" + (disableGutter ? "" : " ace_show_gutter");
        innerEl.style["counter-reset"] = "ace_line " + (lineStart - 1);
        for (var ix = 0; ix < length; ix++) {
          var lineEl = simpleDom.createElement("div");
          lineEl.className = "ace_line";
          if (!disableGutter) {
            var gutterEl = simpleDom.createElement("span");
            gutterEl.className = "ace_gutter ace_gutter-cell";
            gutterEl.textContent = "";
            lineEl.appendChild(gutterEl);
          }
          textLayer.$renderLine(lineEl, ix, false);
          lineEl.textContent += "\n";
          innerEl.appendChild(lineEl);
        }
        outerEl.appendChild(innerEl);
        return {
          css: baseStyles + theme.cssText,
          html: outerEl.toString(),
          session
        };
      };
      module2.exports = highlight;
      module2.exports.highlight = highlight;
    });
    (function() {
      ace.require(["ace/ext/static_highlight"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(extStatic_highlight$2);
  return extStatic_highlight$2.exports;
}
var extStatic_highlightExports = requireExtStatic_highlight();
const extStatic_highlight = /* @__PURE__ */ getDefaultExportFromCjs(extStatic_highlightExports);
const extStatic_highlight$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: extStatic_highlight
}, [extStatic_highlightExports]);
export {
  extStatic_highlight$1 as e
};
