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
var extWhitespace$2 = { exports: {} };
var hasRequiredExtWhitespace;
function requireExtWhitespace() {
  if (hasRequiredExtWhitespace) return extWhitespace$2.exports;
  hasRequiredExtWhitespace = 1;
  (function(module, exports) {
    ace.define("ace/ext/whitespace", ["require", "exports", "module", "ace/lib/lang"], function(require2, exports2, module2) {
      var lang = require2("../lib/lang");
      exports2.$detectIndentation = function(lines, fallback) {
        var stats = [];
        var changes = [];
        var tabIndents = 0;
        var prevSpaces = 0;
        var max = Math.min(lines.length, 1e3);
        for (var i = 0; i < max; i++) {
          var line = lines[i];
          if (!/^\s*[^*+\-\s]/.test(line))
            continue;
          if (line[0] == "	") {
            tabIndents++;
            prevSpaces = -Number.MAX_VALUE;
          } else {
            var spaces = line.match(/^ */)[0].length;
            if (spaces && line[spaces] != "	") {
              var diff = spaces - prevSpaces;
              if (diff > 0 && !(prevSpaces % diff) && !(spaces % diff))
                changes[diff] = (changes[diff] || 0) + 1;
              stats[spaces] = (stats[spaces] || 0) + 1;
            }
            prevSpaces = spaces;
          }
          while (i < max && line[line.length - 1] == "\\")
            line = lines[i++];
        }
        function getScore(indent) {
          var score2 = 0;
          for (var i2 = indent; i2 < stats.length; i2 += indent)
            score2 += stats[i2] || 0;
          return score2;
        }
        var changesTotal = changes.reduce(function(a, b) {
          return a + b;
        }, 0);
        var first = { score: 0, length: 0 };
        var spaceIndents = 0;
        for (var i = 1; i < 12; i++) {
          var score = getScore(i);
          if (i == 1) {
            spaceIndents = score;
            score = stats[1] ? 0.9 : 0.8;
            if (!stats.length)
              score = 0;
          } else
            score /= spaceIndents;
          if (changes[i])
            score += changes[i] / changesTotal;
          if (score > first.score)
            first = { score, length: i };
        }
        if (first.score && first.score > 1.4)
          var tabLength = first.length;
        if (tabIndents > spaceIndents + 1) {
          if (tabLength == 1 || spaceIndents < tabIndents / 4 || first.score < 1.8)
            tabLength = void 0;
          return { ch: "	", length: tabLength };
        }
        if (spaceIndents > tabIndents + 1)
          return { ch: " ", length: tabLength };
      };
      exports2.detectIndentation = function(session) {
        var lines = session.getLines(0, 1e3);
        var indent = exports2.$detectIndentation(lines) || {};
        if (indent.ch)
          session.setUseSoftTabs(indent.ch == " ");
        if (indent.length)
          session.setTabSize(indent.length);
        return indent;
      };
      exports2.trimTrailingSpace = function(session, options) {
        var doc = session.getDocument();
        var lines = doc.getAllLines();
        var min = options && options.trimEmpty ? -1 : 0;
        var cursors = [], ci = -1;
        if (options && options.keepCursorPosition) {
          if (session.selection.rangeCount) {
            session.selection.rangeList.ranges.forEach(function(x, i2, ranges) {
              var next = ranges[i2 + 1];
              if (next && next.cursor.row == x.cursor.row)
                return;
              cursors.push(x.cursor);
            });
          } else {
            cursors.push(session.selection.getCursor());
          }
          ci = 0;
        }
        var cursorRow = cursors[ci] && cursors[ci].row;
        for (var i = 0, l = lines.length; i < l; i++) {
          var line = lines[i];
          var index = line.search(/\s+$/);
          if (i == cursorRow) {
            if (index < cursors[ci].column && index > min)
              index = cursors[ci].column;
            ci++;
            cursorRow = cursors[ci] ? cursors[ci].row : -1;
          }
          if (index > min)
            doc.removeInLine(i, index, line.length);
        }
      };
      exports2.convertIndentation = function(session, ch, len) {
        var oldCh = session.getTabString()[0];
        var oldLen = session.getTabSize();
        if (!len)
          len = oldLen;
        if (!ch)
          ch = oldCh;
        var tab = ch == "	" ? ch : lang.stringRepeat(ch, len);
        var doc = session.doc;
        var lines = doc.getAllLines();
        var cache = {};
        var spaceCache = {};
        for (var i = 0, l = lines.length; i < l; i++) {
          var line = lines[i];
          var match = line.match(/^\s*/)[0];
          if (match) {
            var w = session.$getStringScreenWidth(match)[0];
            var tabCount = Math.floor(w / oldLen);
            var reminder = w % oldLen;
            var toInsert = cache[tabCount] || (cache[tabCount] = lang.stringRepeat(tab, tabCount));
            toInsert += spaceCache[reminder] || (spaceCache[reminder] = lang.stringRepeat(" ", reminder));
            if (toInsert != match) {
              doc.removeInLine(i, 0, match.length);
              doc.insertInLine({ row: i, column: 0 }, toInsert);
            }
          }
        }
        session.setTabSize(len);
        session.setUseSoftTabs(ch == " ");
      };
      exports2.$parseStringArg = function(text) {
        var indent = {};
        if (/t/.test(text))
          indent.ch = "	";
        else if (/s/.test(text))
          indent.ch = " ";
        var m = text.match(/\d+/);
        if (m)
          indent.length = parseInt(m[0], 10);
        return indent;
      };
      exports2.$parseArg = function(arg) {
        if (!arg)
          return {};
        if (typeof arg == "string")
          return exports2.$parseStringArg(arg);
        if (typeof arg.text == "string")
          return exports2.$parseStringArg(arg.text);
        return arg;
      };
      exports2.commands = [{
        name: "detectIndentation",
        description: "Detect indentation from content",
        exec: function(editor) {
          exports2.detectIndentation(editor.session);
        }
      }, {
        name: "trimTrailingSpace",
        description: "Trim trailing whitespace",
        exec: function(editor, args) {
          exports2.trimTrailingSpace(editor.session, args);
        }
      }, {
        name: "convertIndentation",
        description: "Convert indentation to ...",
        exec: function(editor, arg) {
          var indent = exports2.$parseArg(arg);
          exports2.convertIndentation(editor.session, indent.ch, indent.length);
        }
      }, {
        name: "setIndentation",
        description: "Set indentation",
        exec: function(editor, arg) {
          var indent = exports2.$parseArg(arg);
          indent.length && editor.session.setTabSize(indent.length);
          indent.ch && editor.session.setUseSoftTabs(indent.ch == " ");
        }
      }];
    });
    (function() {
      ace.require(["ace/ext/whitespace"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(extWhitespace$2);
  return extWhitespace$2.exports;
}
var extWhitespaceExports = requireExtWhitespace();
const extWhitespace = /* @__PURE__ */ getDefaultExportFromCjs(extWhitespaceExports);
const extWhitespace$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: extWhitespace
}, [extWhitespaceExports]);
export {
  extWhitespace$1 as e
};
