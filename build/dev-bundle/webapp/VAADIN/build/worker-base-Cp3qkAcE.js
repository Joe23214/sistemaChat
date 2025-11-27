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
var workerBase$2 = {};
var hasRequiredWorkerBase;
function requireWorkerBase() {
  if (hasRequiredWorkerBase) return workerBase$2;
  hasRequiredWorkerBase = 1;
  !function(window) {
    if (typeof window.window != "undefined" && window.document)
      return;
    if (window.require && window.define)
      return;
    if (!window.console) {
      window.console = function() {
        var msgs = Array.prototype.slice.call(arguments, 0);
        postMessage({ type: "log", data: msgs });
      };
      window.console.error = window.console.warn = window.console.log = window.console.trace = window.console;
    }
    window.window = window;
    window.ace = window;
    window.onerror = function(message, file, line, col, err) {
      postMessage({ type: "error", data: {
        message,
        data: err && err.data,
        file,
        line,
        col,
        stack: err && err.stack
      } });
    };
    window.normalizeModule = function(parentId, moduleName) {
      if (moduleName.indexOf("!") !== -1) {
        var chunks = moduleName.split("!");
        return window.normalizeModule(parentId, chunks[0]) + "!" + window.normalizeModule(parentId, chunks[1]);
      }
      if (moduleName.charAt(0) == ".") {
        var base = parentId.split("/").slice(0, -1).join("/");
        moduleName = (base ? base + "/" : "") + moduleName;
        while (moduleName.indexOf(".") !== -1 && previous != moduleName) {
          var previous = moduleName;
          moduleName = moduleName.replace(/^\.\//, "").replace(/\/\.\//, "/").replace(/[^\/]+\/\.\.\//, "");
        }
      }
      return moduleName;
    };
    window.require = function require2(parentId, id) {
      if (!id) {
        id = parentId;
        parentId = null;
      }
      if (!id.charAt)
        throw new Error("worker.js require() accepts only (parentId, id) as arguments");
      id = window.normalizeModule(parentId, id);
      var module = window.require.modules[id];
      if (module) {
        if (!module.initialized) {
          module.initialized = true;
          module.exports = module.factory().exports;
        }
        return module.exports;
      }
      if (!window.require.tlns)
        return console.log("unable to load " + id);
      var path = resolveModuleId(id, window.require.tlns);
      if (path.slice(-3) != ".js") path += ".js";
      window.require.id = id;
      window.require.modules[id] = {};
      importScripts(path);
      return window.require(parentId, id);
    };
    function resolveModuleId(id, paths) {
      var testPath = id, tail = "";
      while (testPath) {
        var alias = paths[testPath];
        if (typeof alias == "string") {
          return alias + tail;
        } else if (alias) {
          return alias.location.replace(/\/*$/, "/") + (tail || alias.main || alias.name);
        } else if (alias === false) {
          return "";
        }
        var i = testPath.lastIndexOf("/");
        if (i === -1) break;
        tail = testPath.substr(i) + tail;
        testPath = testPath.slice(0, i);
      }
      return id;
    }
    window.require.modules = {};
    window.require.tlns = {};
    window.define = function(id, deps, factory) {
      if (arguments.length == 2) {
        factory = deps;
        if (typeof id != "string") {
          deps = id;
          id = window.require.id;
        }
      } else if (arguments.length == 1) {
        factory = id;
        deps = [];
        id = window.require.id;
      }
      if (typeof factory != "function") {
        window.require.modules[id] = {
          exports: factory,
          initialized: true
        };
        return;
      }
      if (!deps.length)
        deps = ["require", "exports", "module"];
      var req = function(childId) {
        return window.require(id, childId);
      };
      window.require.modules[id] = {
        exports: {},
        factory: function() {
          var module = this;
          var returnExports = factory.apply(this, deps.slice(0, factory.length).map(function(dep) {
            switch (dep) {
              // Because "require", "exports" and "module" aren't actual
              // dependencies, we must handle them seperately.
              case "require":
                return req;
              case "exports":
                return module.exports;
              case "module":
                return module;
              // But for all other dependencies, we can just go ahead and
              // require them.
              default:
                return req(dep);
            }
          }));
          if (returnExports)
            module.exports = returnExports;
          return module;
        }
      };
    };
    window.define.amd = {};
    window.require.tlns = {};
    window.initBaseUrls = function initBaseUrls(topLevelNamespaces) {
      for (var i in topLevelNamespaces)
        this.require.tlns[i] = topLevelNamespaces[i];
    };
    window.initSender = function initSender() {
      var EventEmitter = window.require("ace/lib/event_emitter").EventEmitter;
      var oop = window.require("ace/lib/oop");
      var Sender = function() {
      };
      (function() {
        oop.implement(this, EventEmitter);
        this.callback = function(data, callbackId) {
          postMessage({
            type: "call",
            id: callbackId,
            data
          });
        };
        this.emit = function(name, data) {
          postMessage({
            type: "event",
            name,
            data
          });
        };
      }).call(Sender.prototype);
      return new Sender();
    };
    var main = window.main = null;
    var sender = window.sender = null;
    window.onmessage = function(e) {
      var msg = e.data;
      if (msg.event && sender) {
        sender._signal(msg.event, msg.data);
      } else if (msg.command) {
        if (main[msg.command])
          main[msg.command].apply(main, msg.args);
        else if (window[msg.command])
          window[msg.command].apply(window, msg.args);
        else
          throw new Error("Unknown command:" + msg.command);
      } else if (msg.init) {
        window.initBaseUrls(msg.tlns);
        sender = window.sender = window.initSender();
        var clazz = this.require(msg.module)[msg.classname];
        main = window.main = new clazz(sender);
      }
    };
  }(workerBase$2);
  ace.define("ace/lib/oop", [], function(require2, exports, module) {
    exports.inherits = function(ctor, superCtor) {
      ctor.super_ = superCtor;
      ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
          value: ctor,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
    };
    exports.mixin = function(obj, mixin) {
      for (var key in mixin) {
        obj[key] = mixin[key];
      }
      return obj;
    };
    exports.implement = function(proto, mixin) {
      exports.mixin(proto, mixin);
    };
  });
  ace.define("ace/apply_delta", [], function(require2, exports, module) {
    exports.applyDelta = function(docLines, delta, doNotValidate) {
      var row = delta.start.row;
      var startColumn = delta.start.column;
      var line = docLines[row] || "";
      switch (delta.action) {
        case "insert":
          var lines = delta.lines;
          if (lines.length === 1) {
            docLines[row] = line.substring(0, startColumn) + delta.lines[0] + line.substring(startColumn);
          } else {
            var args = [row, 1].concat(delta.lines);
            docLines.splice.apply(docLines, args);
            docLines[row] = line.substring(0, startColumn) + docLines[row];
            docLines[row + delta.lines.length - 1] += line.substring(startColumn);
          }
          break;
        case "remove":
          var endColumn = delta.end.column;
          var endRow = delta.end.row;
          if (row === endRow) {
            docLines[row] = line.substring(0, startColumn) + line.substring(endColumn);
          } else {
            docLines.splice(row, endRow - row + 1, line.substring(0, startColumn) + docLines[endRow].substring(endColumn));
          }
          break;
      }
    };
  });
  ace.define("ace/lib/event_emitter", [], function(require2, exports, module) {
    var EventEmitter = {};
    var stopPropagation = function() {
      this.propagationStopped = true;
    };
    var preventDefault = function() {
      this.defaultPrevented = true;
    };
    EventEmitter._emit = EventEmitter._dispatchEvent = function(eventName, e) {
      this._eventRegistry || (this._eventRegistry = {});
      this._defaultHandlers || (this._defaultHandlers = {});
      var listeners = this._eventRegistry[eventName] || [];
      var defaultHandler = this._defaultHandlers[eventName];
      if (!listeners.length && !defaultHandler)
        return;
      if (typeof e != "object" || !e)
        e = {};
      if (!e.type)
        e.type = eventName;
      if (!e.stopPropagation)
        e.stopPropagation = stopPropagation;
      if (!e.preventDefault)
        e.preventDefault = preventDefault;
      listeners = listeners.slice();
      for (var i = 0; i < listeners.length; i++) {
        listeners[i](e, this);
        if (e.propagationStopped)
          break;
      }
      if (defaultHandler && !e.defaultPrevented)
        return defaultHandler(e, this);
    };
    EventEmitter._signal = function(eventName, e) {
      var listeners = (this._eventRegistry || {})[eventName];
      if (!listeners)
        return;
      listeners = listeners.slice();
      for (var i = 0; i < listeners.length; i++)
        listeners[i](e, this);
    };
    EventEmitter.once = function(eventName, callback) {
      var _self = this;
      this.on(eventName, function newCallback() {
        _self.off(eventName, newCallback);
        callback.apply(null, arguments);
      });
      if (!callback) {
        return new Promise(function(resolve) {
          callback = resolve;
        });
      }
    };
    EventEmitter.setDefaultHandler = function(eventName, callback) {
      var handlers = this._defaultHandlers;
      if (!handlers)
        handlers = this._defaultHandlers = { _disabled_: {} };
      if (handlers[eventName]) {
        var old = handlers[eventName];
        var disabled = handlers._disabled_[eventName];
        if (!disabled)
          handlers._disabled_[eventName] = disabled = [];
        disabled.push(old);
        var i = disabled.indexOf(callback);
        if (i != -1)
          disabled.splice(i, 1);
      }
      handlers[eventName] = callback;
    };
    EventEmitter.removeDefaultHandler = function(eventName, callback) {
      var handlers = this._defaultHandlers;
      if (!handlers)
        return;
      var disabled = handlers._disabled_[eventName];
      if (handlers[eventName] == callback) {
        if (disabled)
          this.setDefaultHandler(eventName, disabled.pop());
      } else if (disabled) {
        var i = disabled.indexOf(callback);
        if (i != -1)
          disabled.splice(i, 1);
      }
    };
    EventEmitter.on = EventEmitter.addEventListener = function(eventName, callback, capturing) {
      this._eventRegistry = this._eventRegistry || {};
      var listeners = this._eventRegistry[eventName];
      if (!listeners)
        listeners = this._eventRegistry[eventName] = [];
      if (listeners.indexOf(callback) == -1)
        listeners[capturing ? "unshift" : "push"](callback);
      return callback;
    };
    EventEmitter.off = EventEmitter.removeListener = EventEmitter.removeEventListener = function(eventName, callback) {
      this._eventRegistry = this._eventRegistry || {};
      var listeners = this._eventRegistry[eventName];
      if (!listeners)
        return;
      var index = listeners.indexOf(callback);
      if (index !== -1)
        listeners.splice(index, 1);
    };
    EventEmitter.removeAllListeners = function(eventName) {
      if (!eventName)
        this._eventRegistry = this._defaultHandlers = void 0;
      if (this._eventRegistry)
        this._eventRegistry[eventName] = void 0;
      if (this._defaultHandlers)
        this._defaultHandlers[eventName] = void 0;
    };
    exports.EventEmitter = EventEmitter;
  });
  ace.define("ace/range", [], function(require2, exports, module) {
    var comparePoints = function(p1, p2) {
      return p1.row - p2.row || p1.column - p2.column;
    };
    var Range = (
      /** @class */
      function() {
        function Range2(startRow, startColumn, endRow, endColumn) {
          this.start = {
            row: startRow,
            column: startColumn
          };
          this.end = {
            row: endRow,
            column: endColumn
          };
        }
        Range2.prototype.isEqual = function(range) {
          return this.start.row === range.start.row && this.end.row === range.end.row && this.start.column === range.start.column && this.end.column === range.end.column;
        };
        Range2.prototype.toString = function() {
          return "Range: [" + this.start.row + "/" + this.start.column + "] -> [" + this.end.row + "/" + this.end.column + "]";
        };
        Range2.prototype.contains = function(row, column) {
          return this.compare(row, column) == 0;
        };
        Range2.prototype.compareRange = function(range) {
          var cmp, end = range.end, start = range.start;
          cmp = this.compare(end.row, end.column);
          if (cmp == 1) {
            cmp = this.compare(start.row, start.column);
            if (cmp == 1) {
              return 2;
            } else if (cmp == 0) {
              return 1;
            } else {
              return 0;
            }
          } else if (cmp == -1) {
            return -2;
          } else {
            cmp = this.compare(start.row, start.column);
            if (cmp == -1) {
              return -1;
            } else if (cmp == 1) {
              return 42;
            } else {
              return 0;
            }
          }
        };
        Range2.prototype.comparePoint = function(p) {
          return this.compare(p.row, p.column);
        };
        Range2.prototype.containsRange = function(range) {
          return this.comparePoint(range.start) == 0 && this.comparePoint(range.end) == 0;
        };
        Range2.prototype.intersects = function(range) {
          var cmp = this.compareRange(range);
          return cmp == -1 || cmp == 0 || cmp == 1;
        };
        Range2.prototype.isEnd = function(row, column) {
          return this.end.row == row && this.end.column == column;
        };
        Range2.prototype.isStart = function(row, column) {
          return this.start.row == row && this.start.column == column;
        };
        Range2.prototype.setStart = function(row, column) {
          if (typeof row == "object") {
            this.start.column = row.column;
            this.start.row = row.row;
          } else {
            this.start.row = row;
            this.start.column = column;
          }
        };
        Range2.prototype.setEnd = function(row, column) {
          if (typeof row == "object") {
            this.end.column = row.column;
            this.end.row = row.row;
          } else {
            this.end.row = row;
            this.end.column = column;
          }
        };
        Range2.prototype.inside = function(row, column) {
          if (this.compare(row, column) == 0) {
            if (this.isEnd(row, column) || this.isStart(row, column)) {
              return false;
            } else {
              return true;
            }
          }
          return false;
        };
        Range2.prototype.insideStart = function(row, column) {
          if (this.compare(row, column) == 0) {
            if (this.isEnd(row, column)) {
              return false;
            } else {
              return true;
            }
          }
          return false;
        };
        Range2.prototype.insideEnd = function(row, column) {
          if (this.compare(row, column) == 0) {
            if (this.isStart(row, column)) {
              return false;
            } else {
              return true;
            }
          }
          return false;
        };
        Range2.prototype.compare = function(row, column) {
          if (!this.isMultiLine()) {
            if (row === this.start.row) {
              return column < this.start.column ? -1 : column > this.end.column ? 1 : 0;
            }
          }
          if (row < this.start.row)
            return -1;
          if (row > this.end.row)
            return 1;
          if (this.start.row === row)
            return column >= this.start.column ? 0 : -1;
          if (this.end.row === row)
            return column <= this.end.column ? 0 : 1;
          return 0;
        };
        Range2.prototype.compareStart = function(row, column) {
          if (this.start.row == row && this.start.column == column) {
            return -1;
          } else {
            return this.compare(row, column);
          }
        };
        Range2.prototype.compareEnd = function(row, column) {
          if (this.end.row == row && this.end.column == column) {
            return 1;
          } else {
            return this.compare(row, column);
          }
        };
        Range2.prototype.compareInside = function(row, column) {
          if (this.end.row == row && this.end.column == column) {
            return 1;
          } else if (this.start.row == row && this.start.column == column) {
            return -1;
          } else {
            return this.compare(row, column);
          }
        };
        Range2.prototype.clipRows = function(firstRow, lastRow) {
          if (this.end.row > lastRow)
            var end = { row: lastRow + 1, column: 0 };
          else if (this.end.row < firstRow)
            var end = { row: firstRow, column: 0 };
          if (this.start.row > lastRow)
            var start = { row: lastRow + 1, column: 0 };
          else if (this.start.row < firstRow)
            var start = { row: firstRow, column: 0 };
          return Range2.fromPoints(start || this.start, end || this.end);
        };
        Range2.prototype.extend = function(row, column) {
          var cmp = this.compare(row, column);
          if (cmp == 0)
            return this;
          else if (cmp == -1)
            var start = { row, column };
          else
            var end = { row, column };
          return Range2.fromPoints(start || this.start, end || this.end);
        };
        Range2.prototype.isEmpty = function() {
          return this.start.row === this.end.row && this.start.column === this.end.column;
        };
        Range2.prototype.isMultiLine = function() {
          return this.start.row !== this.end.row;
        };
        Range2.prototype.clone = function() {
          return Range2.fromPoints(this.start, this.end);
        };
        Range2.prototype.collapseRows = function() {
          if (this.end.column == 0)
            return new Range2(this.start.row, 0, Math.max(this.start.row, this.end.row - 1), 0);
          else
            return new Range2(this.start.row, 0, this.end.row, 0);
        };
        Range2.prototype.toScreenRange = function(session) {
          var screenPosStart = session.documentToScreenPosition(this.start);
          var screenPosEnd = session.documentToScreenPosition(this.end);
          return new Range2(screenPosStart.row, screenPosStart.column, screenPosEnd.row, screenPosEnd.column);
        };
        Range2.prototype.moveBy = function(row, column) {
          this.start.row += row;
          this.start.column += column;
          this.end.row += row;
          this.end.column += column;
        };
        return Range2;
      }()
    );
    Range.fromPoints = function(start, end) {
      return new Range(start.row, start.column, end.row, end.column);
    };
    Range.comparePoints = comparePoints;
    Range.comparePoints = function(p1, p2) {
      return p1.row - p2.row || p1.column - p2.column;
    };
    exports.Range = Range;
  });
  ace.define("ace/anchor", [], function(require2, exports, module) {
    var oop = require2("./lib/oop");
    var EventEmitter = require2("./lib/event_emitter").EventEmitter;
    var Anchor = (
      /** @class */
      function() {
        function Anchor2(doc, row, column) {
          this.$onChange = this.onChange.bind(this);
          this.attach(doc);
          if (typeof column == "undefined")
            this.setPosition(row.row, row.column);
          else
            this.setPosition(row, column);
        }
        Anchor2.prototype.getPosition = function() {
          return this.$clipPositionToDocument(this.row, this.column);
        };
        Anchor2.prototype.getDocument = function() {
          return this.document;
        };
        Anchor2.prototype.onChange = function(delta) {
          if (delta.start.row == delta.end.row && delta.start.row != this.row)
            return;
          if (delta.start.row > this.row)
            return;
          var point = $getTransformedPoint(delta, { row: this.row, column: this.column }, this.$insertRight);
          this.setPosition(point.row, point.column, true);
        };
        Anchor2.prototype.setPosition = function(row, column, noClip) {
          var pos;
          if (noClip) {
            pos = {
              row,
              column
            };
          } else {
            pos = this.$clipPositionToDocument(row, column);
          }
          if (this.row == pos.row && this.column == pos.column)
            return;
          var old = {
            row: this.row,
            column: this.column
          };
          this.row = pos.row;
          this.column = pos.column;
          this._signal("change", {
            old,
            value: pos
          });
        };
        Anchor2.prototype.detach = function() {
          this.document.off("change", this.$onChange);
        };
        Anchor2.prototype.attach = function(doc) {
          this.document = doc || this.document;
          this.document.on("change", this.$onChange);
        };
        Anchor2.prototype.$clipPositionToDocument = function(row, column) {
          var pos = {};
          if (row >= this.document.getLength()) {
            pos.row = Math.max(0, this.document.getLength() - 1);
            pos.column = this.document.getLine(pos.row).length;
          } else if (row < 0) {
            pos.row = 0;
            pos.column = 0;
          } else {
            pos.row = row;
            pos.column = Math.min(this.document.getLine(pos.row).length, Math.max(0, column));
          }
          if (column < 0)
            pos.column = 0;
          return pos;
        };
        return Anchor2;
      }()
    );
    Anchor.prototype.$insertRight = false;
    oop.implement(Anchor.prototype, EventEmitter);
    function $pointsInOrder(point1, point2, equalPointsInOrder) {
      var bColIsAfter = equalPointsInOrder ? point1.column <= point2.column : point1.column < point2.column;
      return point1.row < point2.row || point1.row == point2.row && bColIsAfter;
    }
    function $getTransformedPoint(delta, point, moveIfEqual) {
      var deltaIsInsert = delta.action == "insert";
      var deltaRowShift = (deltaIsInsert ? 1 : -1) * (delta.end.row - delta.start.row);
      var deltaColShift = (deltaIsInsert ? 1 : -1) * (delta.end.column - delta.start.column);
      var deltaStart = delta.start;
      var deltaEnd = deltaIsInsert ? deltaStart : delta.end;
      if ($pointsInOrder(point, deltaStart, moveIfEqual)) {
        return {
          row: point.row,
          column: point.column
        };
      }
      if ($pointsInOrder(deltaEnd, point, !moveIfEqual)) {
        return {
          row: point.row + deltaRowShift,
          column: point.column + (point.row == deltaEnd.row ? deltaColShift : 0)
        };
      }
      return {
        row: deltaStart.row,
        column: deltaStart.column
      };
    }
    exports.Anchor = Anchor;
  });
  ace.define("ace/document", [], function(require2, exports, module) {
    var oop = require2("./lib/oop");
    var applyDelta = require2("./apply_delta").applyDelta;
    var EventEmitter = require2("./lib/event_emitter").EventEmitter;
    var Range = require2("./range").Range;
    var Anchor = require2("./anchor").Anchor;
    var Document = (
      /** @class */
      function() {
        function Document2(textOrLines) {
          this.$lines = [""];
          if (textOrLines.length === 0) {
            this.$lines = [""];
          } else if (Array.isArray(textOrLines)) {
            this.insertMergedLines({ row: 0, column: 0 }, textOrLines);
          } else {
            this.insert({ row: 0, column: 0 }, textOrLines);
          }
        }
        Document2.prototype.setValue = function(text) {
          var len = this.getLength() - 1;
          this.remove(new Range(0, 0, len, this.getLine(len).length));
          this.insert({ row: 0, column: 0 }, text || "");
        };
        Document2.prototype.getValue = function() {
          return this.getAllLines().join(this.getNewLineCharacter());
        };
        Document2.prototype.createAnchor = function(row, column) {
          return new Anchor(this, row, column);
        };
        Document2.prototype.$detectNewLine = function(text) {
          var match = text.match(/^.*?(\r\n|\r|\n)/m);
          this.$autoNewLine = match ? match[1] : "\n";
          this._signal("changeNewLineMode");
        };
        Document2.prototype.getNewLineCharacter = function() {
          switch (this.$newLineMode) {
            case "windows":
              return "\r\n";
            case "unix":
              return "\n";
            default:
              return this.$autoNewLine || "\n";
          }
        };
        Document2.prototype.setNewLineMode = function(newLineMode) {
          if (this.$newLineMode === newLineMode)
            return;
          this.$newLineMode = newLineMode;
          this._signal("changeNewLineMode");
        };
        Document2.prototype.getNewLineMode = function() {
          return this.$newLineMode;
        };
        Document2.prototype.isNewLine = function(text) {
          return text == "\r\n" || text == "\r" || text == "\n";
        };
        Document2.prototype.getLine = function(row) {
          return this.$lines[row] || "";
        };
        Document2.prototype.getLines = function(firstRow, lastRow) {
          return this.$lines.slice(firstRow, lastRow + 1);
        };
        Document2.prototype.getAllLines = function() {
          return this.getLines(0, this.getLength());
        };
        Document2.prototype.getLength = function() {
          return this.$lines.length;
        };
        Document2.prototype.getTextRange = function(range) {
          return this.getLinesForRange(range).join(this.getNewLineCharacter());
        };
        Document2.prototype.getLinesForRange = function(range) {
          var lines;
          if (range.start.row === range.end.row) {
            lines = [this.getLine(range.start.row).substring(range.start.column, range.end.column)];
          } else {
            lines = this.getLines(range.start.row, range.end.row);
            lines[0] = (lines[0] || "").substring(range.start.column);
            var l = lines.length - 1;
            if (range.end.row - range.start.row == l)
              lines[l] = lines[l].substring(0, range.end.column);
          }
          return lines;
        };
        Document2.prototype.insertLines = function(row, lines) {
          console.warn("Use of document.insertLines is deprecated. Use the insertFullLines method instead.");
          return this.insertFullLines(row, lines);
        };
        Document2.prototype.removeLines = function(firstRow, lastRow) {
          console.warn("Use of document.removeLines is deprecated. Use the removeFullLines method instead.");
          return this.removeFullLines(firstRow, lastRow);
        };
        Document2.prototype.insertNewLine = function(position) {
          console.warn("Use of document.insertNewLine is deprecated. Use insertMergedLines(position, ['', '']) instead.");
          return this.insertMergedLines(position, ["", ""]);
        };
        Document2.prototype.insert = function(position, text) {
          if (this.getLength() <= 1)
            this.$detectNewLine(text);
          return this.insertMergedLines(position, this.$split(text));
        };
        Document2.prototype.insertInLine = function(position, text) {
          var start = this.clippedPos(position.row, position.column);
          var end = this.pos(position.row, position.column + text.length);
          this.applyDelta({
            start,
            end,
            action: "insert",
            lines: [text]
          }, true);
          return this.clonePos(end);
        };
        Document2.prototype.clippedPos = function(row, column) {
          var length = this.getLength();
          if (row === void 0) {
            row = length;
          } else if (row < 0) {
            row = 0;
          } else if (row >= length) {
            row = length - 1;
            column = void 0;
          }
          var line = this.getLine(row);
          if (column == void 0)
            column = line.length;
          column = Math.min(Math.max(column, 0), line.length);
          return { row, column };
        };
        Document2.prototype.clonePos = function(pos) {
          return { row: pos.row, column: pos.column };
        };
        Document2.prototype.pos = function(row, column) {
          return { row, column };
        };
        Document2.prototype.$clipPosition = function(position) {
          var length = this.getLength();
          if (position.row >= length) {
            position.row = Math.max(0, length - 1);
            position.column = this.getLine(length - 1).length;
          } else {
            position.row = Math.max(0, position.row);
            position.column = Math.min(Math.max(position.column, 0), this.getLine(position.row).length);
          }
          return position;
        };
        Document2.prototype.insertFullLines = function(row, lines) {
          row = Math.min(Math.max(row, 0), this.getLength());
          var column = 0;
          if (row < this.getLength()) {
            lines = lines.concat([""]);
            column = 0;
          } else {
            lines = [""].concat(lines);
            row--;
            column = this.$lines[row].length;
          }
          this.insertMergedLines({ row, column }, lines);
        };
        Document2.prototype.insertMergedLines = function(position, lines) {
          var start = this.clippedPos(position.row, position.column);
          var end = {
            row: start.row + lines.length - 1,
            column: (lines.length == 1 ? start.column : 0) + lines[lines.length - 1].length
          };
          this.applyDelta({
            start,
            end,
            action: "insert",
            lines
          });
          return this.clonePos(end);
        };
        Document2.prototype.remove = function(range) {
          var start = this.clippedPos(range.start.row, range.start.column);
          var end = this.clippedPos(range.end.row, range.end.column);
          this.applyDelta({
            start,
            end,
            action: "remove",
            lines: this.getLinesForRange({ start, end })
          });
          return this.clonePos(start);
        };
        Document2.prototype.removeInLine = function(row, startColumn, endColumn) {
          var start = this.clippedPos(row, startColumn);
          var end = this.clippedPos(row, endColumn);
          this.applyDelta({
            start,
            end,
            action: "remove",
            lines: this.getLinesForRange({ start, end })
          }, true);
          return this.clonePos(start);
        };
        Document2.prototype.removeFullLines = function(firstRow, lastRow) {
          firstRow = Math.min(Math.max(0, firstRow), this.getLength() - 1);
          lastRow = Math.min(Math.max(0, lastRow), this.getLength() - 1);
          var deleteFirstNewLine = lastRow == this.getLength() - 1 && firstRow > 0;
          var deleteLastNewLine = lastRow < this.getLength() - 1;
          var startRow = deleteFirstNewLine ? firstRow - 1 : firstRow;
          var startCol = deleteFirstNewLine ? this.getLine(startRow).length : 0;
          var endRow = deleteLastNewLine ? lastRow + 1 : lastRow;
          var endCol = deleteLastNewLine ? 0 : this.getLine(endRow).length;
          var range = new Range(startRow, startCol, endRow, endCol);
          var deletedLines = this.$lines.slice(firstRow, lastRow + 1);
          this.applyDelta({
            start: range.start,
            end: range.end,
            action: "remove",
            lines: this.getLinesForRange(range)
          });
          return deletedLines;
        };
        Document2.prototype.removeNewLine = function(row) {
          if (row < this.getLength() - 1 && row >= 0) {
            this.applyDelta({
              start: this.pos(row, this.getLine(row).length),
              end: this.pos(row + 1, 0),
              action: "remove",
              lines: ["", ""]
            });
          }
        };
        Document2.prototype.replace = function(range, text) {
          if (!(range instanceof Range))
            range = Range.fromPoints(range.start, range.end);
          if (text.length === 0 && range.isEmpty())
            return range.start;
          if (text == this.getTextRange(range))
            return range.end;
          this.remove(range);
          var end;
          if (text) {
            end = this.insert(range.start, text);
          } else {
            end = range.start;
          }
          return end;
        };
        Document2.prototype.applyDeltas = function(deltas) {
          for (var i = 0; i < deltas.length; i++) {
            this.applyDelta(deltas[i]);
          }
        };
        Document2.prototype.revertDeltas = function(deltas) {
          for (var i = deltas.length - 1; i >= 0; i--) {
            this.revertDelta(deltas[i]);
          }
        };
        Document2.prototype.applyDelta = function(delta, doNotValidate) {
          var isInsert = delta.action == "insert";
          if (isInsert ? delta.lines.length <= 1 && !delta.lines[0] : !Range.comparePoints(delta.start, delta.end)) {
            return;
          }
          if (isInsert && delta.lines.length > 2e4) {
            this.$splitAndapplyLargeDelta(delta, 2e4);
          } else {
            applyDelta(this.$lines, delta, doNotValidate);
            this._signal("change", delta);
          }
        };
        Document2.prototype.$safeApplyDelta = function(delta) {
          var docLength = this.$lines.length;
          if (delta.action == "remove" && delta.start.row < docLength && delta.end.row < docLength || delta.action == "insert" && delta.start.row <= docLength) {
            this.applyDelta(delta);
          }
        };
        Document2.prototype.$splitAndapplyLargeDelta = function(delta, MAX) {
          var lines = delta.lines;
          var l = lines.length - MAX + 1;
          var row = delta.start.row;
          var column = delta.start.column;
          for (var from = 0, to = 0; from < l; from = to) {
            to += MAX - 1;
            var chunk = lines.slice(from, to);
            chunk.push("");
            this.applyDelta({
              start: this.pos(row + from, column),
              end: this.pos(row + to, column = 0),
              action: delta.action,
              lines: chunk
            }, true);
          }
          delta.lines = lines.slice(from);
          delta.start.row = row + from;
          delta.start.column = column;
          this.applyDelta(delta, true);
        };
        Document2.prototype.revertDelta = function(delta) {
          this.$safeApplyDelta({
            start: this.clonePos(delta.start),
            end: this.clonePos(delta.end),
            action: delta.action == "insert" ? "remove" : "insert",
            lines: delta.lines.slice()
          });
        };
        Document2.prototype.indexToPosition = function(index, startRow) {
          var lines = this.$lines || this.getAllLines();
          var newlineLength = this.getNewLineCharacter().length;
          for (var i = startRow || 0, l = lines.length; i < l; i++) {
            index -= lines[i].length + newlineLength;
            if (index < 0)
              return { row: i, column: index + lines[i].length + newlineLength };
          }
          return { row: l - 1, column: index + lines[l - 1].length + newlineLength };
        };
        Document2.prototype.positionToIndex = function(pos, startRow) {
          var lines = this.$lines || this.getAllLines();
          var newlineLength = this.getNewLineCharacter().length;
          var index = 0;
          var row = Math.min(pos.row, lines.length);
          for (var i = startRow || 0; i < row; ++i)
            index += lines[i].length + newlineLength;
          return index + pos.column;
        };
        return Document2;
      }()
    );
    Document.prototype.$split = "aaa".split(/a/).length === 0 ? function(text) {
      return text.replace(/\r\n|\r/g, "\n").split("\n");
    } : function(text) {
      return text.split(/\r\n|\r|\n/);
    };
    Document.prototype.$autoNewLine = "";
    Document.prototype.$newLineMode = "auto";
    oop.implement(Document.prototype, EventEmitter);
    exports.Document = Document;
  });
  ace.define("ace/lib/lang", [], function(require2, exports, module) {
    exports.last = function(a) {
      return a[a.length - 1];
    };
    exports.stringReverse = function(string) {
      return string.split("").reverse().join("");
    };
    exports.stringRepeat = function(string, count) {
      var result = "";
      while (count > 0) {
        if (count & 1)
          result += string;
        if (count >>= 1)
          string += string;
      }
      return result;
    };
    var trimBeginRegexp = /^\s\s*/;
    var trimEndRegexp = /\s\s*$/;
    exports.stringTrimLeft = function(string) {
      return string.replace(trimBeginRegexp, "");
    };
    exports.stringTrimRight = function(string) {
      return string.replace(trimEndRegexp, "");
    };
    exports.copyObject = function(obj) {
      var copy = {};
      for (var key in obj) {
        copy[key] = obj[key];
      }
      return copy;
    };
    exports.copyArray = function(array) {
      var copy = [];
      for (var i = 0, l = array.length; i < l; i++) {
        if (array[i] && typeof array[i] == "object")
          copy[i] = this.copyObject(array[i]);
        else
          copy[i] = array[i];
      }
      return copy;
    };
    exports.deepCopy = function deepCopy(obj) {
      if (typeof obj !== "object" || !obj)
        return obj;
      var copy;
      if (Array.isArray(obj)) {
        copy = [];
        for (var key = 0; key < obj.length; key++) {
          copy[key] = deepCopy(obj[key]);
        }
        return copy;
      }
      if (Object.prototype.toString.call(obj) !== "[object Object]")
        return obj;
      copy = {};
      for (var key in obj)
        copy[key] = deepCopy(obj[key]);
      return copy;
    };
    exports.arrayToMap = function(arr) {
      var map = {};
      for (var i = 0; i < arr.length; i++) {
        map[arr[i]] = 1;
      }
      return map;
    };
    exports.createMap = function(props) {
      var map = /* @__PURE__ */ Object.create(null);
      for (var i in props) {
        map[i] = props[i];
      }
      return map;
    };
    exports.arrayRemove = function(array, value) {
      for (var i = 0; i <= array.length; i++) {
        if (value === array[i]) {
          array.splice(i, 1);
        }
      }
    };
    exports.escapeRegExp = function(str) {
      return str.replace(/([.*+?^${}()|[\]\/\\])/g, "\\$1");
    };
    exports.escapeHTML = function(str) {
      return ("" + str).replace(/&/g, "&#38;").replace(/"/g, "&#34;").replace(/'/g, "&#39;").replace(/</g, "&#60;");
    };
    exports.getMatchOffsets = function(string, regExp) {
      var matches = [];
      string.replace(regExp, function(str) {
        matches.push({
          offset: arguments[arguments.length - 2],
          length: str.length
        });
      });
      return matches;
    };
    exports.deferredCall = function(fcn) {
      var timer = null;
      var callback = function() {
        timer = null;
        fcn();
      };
      var deferred = function(timeout) {
        deferred.cancel();
        timer = setTimeout(callback, timeout || 0);
        return deferred;
      };
      deferred.schedule = deferred;
      deferred.call = function() {
        this.cancel();
        fcn();
        return deferred;
      };
      deferred.cancel = function() {
        clearTimeout(timer);
        timer = null;
        return deferred;
      };
      deferred.isPending = function() {
        return timer;
      };
      return deferred;
    };
    exports.delayedCall = function(fcn, defaultTimeout) {
      var timer = null;
      var callback = function() {
        timer = null;
        fcn();
      };
      var _self = function(timeout) {
        if (timer == null)
          timer = setTimeout(callback, timeout || defaultTimeout);
      };
      _self.delay = function(timeout) {
        timer && clearTimeout(timer);
        timer = setTimeout(callback, timeout || defaultTimeout);
      };
      _self.schedule = _self;
      _self.call = function() {
        this.cancel();
        fcn();
      };
      _self.cancel = function() {
        timer && clearTimeout(timer);
        timer = null;
      };
      _self.isPending = function() {
        return timer;
      };
      return _self;
    };
  });
  ace.define("ace/worker/mirror", [], function(require2, exports, module) {
    var Document = require2("../document").Document;
    var lang = require2("../lib/lang");
    var Mirror = exports.Mirror = function(sender) {
      this.sender = sender;
      var doc = this.doc = new Document("");
      var deferredUpdate = this.deferredUpdate = lang.delayedCall(this.onUpdate.bind(this));
      var _self = this;
      sender.on("change", function(e) {
        var data = e.data;
        if (data[0].start) {
          doc.applyDeltas(data);
        } else {
          for (var i = 0; i < data.length; i += 2) {
            var d, err;
            if (Array.isArray(data[i + 1])) {
              d = { action: "insert", start: data[i], lines: data[i + 1] };
            } else {
              d = { action: "remove", start: data[i], end: data[i + 1] };
            }
            if ((d.action == "insert" ? d.start : d.end).row >= doc.$lines.length) {
              err = new Error("Invalid delta");
              err.data = {
                path: _self.$path,
                linesLength: doc.$lines.length,
                start: d.start,
                end: d.end
              };
              throw err;
            }
            doc.applyDelta(d, true);
          }
        }
        if (_self.$timeout)
          return deferredUpdate.schedule(_self.$timeout);
        _self.onUpdate();
      });
    };
    (function() {
      this.$timeout = 500;
      this.setTimeout = function(timeout) {
        this.$timeout = timeout;
      };
      this.setValue = function(value) {
        this.doc.setValue(value);
        this.deferredUpdate.schedule(this.$timeout);
      };
      this.getValue = function(callbackId) {
        this.sender.callback(this.doc.getValue(), callbackId);
      };
      this.onUpdate = function() {
      };
      this.isPending = function() {
        return this.deferredUpdate.isPending();
      };
    }).call(Mirror.prototype);
  });
  return workerBase$2;
}
var workerBaseExports = requireWorkerBase();
const workerBase = /* @__PURE__ */ getDefaultExportFromCjs(workerBaseExports);
const workerBase$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: workerBase
}, [workerBaseExports]);
export {
  workerBase$1 as w
};
