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
var extElastic_tabstops_lite$2 = { exports: {} };
var hasRequiredExtElastic_tabstops_lite;
function requireExtElastic_tabstops_lite() {
  if (hasRequiredExtElastic_tabstops_lite) return extElastic_tabstops_lite$2.exports;
  hasRequiredExtElastic_tabstops_lite = 1;
  (function(module, exports) {
    ace.define("ace/ext/elastic_tabstops_lite", ["require", "exports", "module", "ace/editor", "ace/config"], function(require2, exports2, module2) {
      var ElasticTabstopsLite = (
        /** @class */
        function() {
          function ElasticTabstopsLite2(editor) {
            this.$editor = editor;
            var self = this;
            var changedRows = [];
            var recordChanges = false;
            this.onAfterExec = function() {
              recordChanges = false;
              self.processRows(changedRows);
              changedRows = [];
            };
            this.onExec = function() {
              recordChanges = true;
            };
            this.onChange = function(delta) {
              if (recordChanges) {
                if (changedRows.indexOf(delta.start.row) == -1)
                  changedRows.push(delta.start.row);
                if (delta.end.row != delta.start.row)
                  changedRows.push(delta.end.row);
              }
            };
          }
          ElasticTabstopsLite2.prototype.processRows = function(rows) {
            this.$inChange = true;
            var checkedRows = [];
            for (var r = 0, rowCount = rows.length; r < rowCount; r++) {
              var row = rows[r];
              if (checkedRows.indexOf(row) > -1)
                continue;
              var cellWidthObj = this.$findCellWidthsForBlock(row);
              var cellWidths = this.$setBlockCellWidthsToMax(cellWidthObj.cellWidths);
              var rowIndex = cellWidthObj.firstRow;
              for (var w = 0, l = cellWidths.length; w < l; w++) {
                var widths = cellWidths[w];
                checkedRows.push(rowIndex);
                this.$adjustRow(rowIndex, widths);
                rowIndex++;
              }
            }
            this.$inChange = false;
          };
          ElasticTabstopsLite2.prototype.$findCellWidthsForBlock = function(row) {
            var cellWidths = [], widths;
            var rowIter = row;
            while (rowIter >= 0) {
              widths = this.$cellWidthsForRow(rowIter);
              if (widths.length == 0)
                break;
              cellWidths.unshift(widths);
              rowIter--;
            }
            var firstRow = rowIter + 1;
            rowIter = row;
            var numRows = this.$editor.session.getLength();
            while (rowIter < numRows - 1) {
              rowIter++;
              widths = this.$cellWidthsForRow(rowIter);
              if (widths.length == 0)
                break;
              cellWidths.push(widths);
            }
            return { cellWidths, firstRow };
          };
          ElasticTabstopsLite2.prototype.$cellWidthsForRow = function(row) {
            var selectionColumns = this.$selectionColumnsForRow(row);
            var tabs = [-1].concat(this.$tabsForRow(row));
            var widths = tabs.map(function(el) {
              return 0;
            }).slice(1);
            var line = this.$editor.session.getLine(row);
            for (var i = 0, len = tabs.length - 1; i < len; i++) {
              var leftEdge = tabs[i] + 1;
              var rightEdge = tabs[i + 1];
              var rightmostSelection = this.$rightmostSelectionInCell(selectionColumns, rightEdge);
              var cell = line.substring(leftEdge, rightEdge);
              widths[i] = Math.max(cell.replace(/\s+$/g, "").length, rightmostSelection - leftEdge);
            }
            return widths;
          };
          ElasticTabstopsLite2.prototype.$selectionColumnsForRow = function(row) {
            var selections = [], cursor = this.$editor.getCursorPosition();
            if (this.$editor.session.getSelection().isEmpty()) {
              if (row == cursor.row)
                selections.push(cursor.column);
            }
            return selections;
          };
          ElasticTabstopsLite2.prototype.$setBlockCellWidthsToMax = function(cellWidths) {
            var startingNewBlock = true, blockStartRow, blockEndRow, maxWidth;
            var columnInfo = this.$izip_longest(cellWidths);
            for (var c = 0, l = columnInfo.length; c < l; c++) {
              var column = columnInfo[c];
              if (!column.push) {
                console.error(column);
                continue;
              }
              column.push(NaN);
              for (var r = 0, s = column.length; r < s; r++) {
                var width = column[r];
                if (startingNewBlock) {
                  blockStartRow = r;
                  maxWidth = 0;
                  startingNewBlock = false;
                }
                if (isNaN(width)) {
                  blockEndRow = r;
                  for (var j = blockStartRow; j < blockEndRow; j++) {
                    cellWidths[j][c] = maxWidth;
                  }
                  startingNewBlock = true;
                }
                maxWidth = Math.max(maxWidth, width);
              }
            }
            return cellWidths;
          };
          ElasticTabstopsLite2.prototype.$rightmostSelectionInCell = function(selectionColumns, cellRightEdge) {
            var rightmost = 0;
            if (selectionColumns.length) {
              var lengths = [];
              for (var s = 0, length = selectionColumns.length; s < length; s++) {
                if (selectionColumns[s] <= cellRightEdge)
                  lengths.push(s);
                else
                  lengths.push(0);
              }
              rightmost = Math.max.apply(Math, lengths);
            }
            return rightmost;
          };
          ElasticTabstopsLite2.prototype.$tabsForRow = function(row) {
            var rowTabs = [], line = this.$editor.session.getLine(row), re = /\t/g, match;
            while ((match = re.exec(line)) != null) {
              rowTabs.push(match.index);
            }
            return rowTabs;
          };
          ElasticTabstopsLite2.prototype.$adjustRow = function(row, widths) {
            var rowTabs = this.$tabsForRow(row);
            if (rowTabs.length == 0)
              return;
            var bias = 0, location = -1;
            var expandedSet = this.$izip(widths, rowTabs);
            for (var i = 0, l = expandedSet.length; i < l; i++) {
              var w = expandedSet[i][0], it = expandedSet[i][1];
              location += 1 + w;
              it += bias;
              var difference = location - it;
              if (difference == 0)
                continue;
              var partialLine = this.$editor.session.getLine(row).substr(0, it);
              var strippedPartialLine = partialLine.replace(/\s*$/g, "");
              var ispaces = partialLine.length - strippedPartialLine.length;
              if (difference > 0) {
                this.$editor.session.getDocument().insertInLine({ row, column: it + 1 }, Array(difference + 1).join(" ") + "	");
                this.$editor.session.getDocument().removeInLine(row, it, it + 1);
                bias += difference;
              }
              if (difference < 0 && ispaces >= -difference) {
                this.$editor.session.getDocument().removeInLine(row, it + difference, it);
                bias += difference;
              }
            }
          };
          ElasticTabstopsLite2.prototype.$izip_longest = function(iterables) {
            if (!iterables[0])
              return [];
            var longest = iterables[0].length;
            var iterablesLength = iterables.length;
            for (var i = 1; i < iterablesLength; i++) {
              var iLength = iterables[i].length;
              if (iLength > longest)
                longest = iLength;
            }
            var expandedSet = [];
            for (var l = 0; l < longest; l++) {
              var set = [];
              for (var i = 0; i < iterablesLength; i++) {
                if (iterables[i][l] === "")
                  set.push(NaN);
                else
                  set.push(iterables[i][l]);
              }
              expandedSet.push(set);
            }
            return expandedSet;
          };
          ElasticTabstopsLite2.prototype.$izip = function(widths, tabs) {
            var size = widths.length >= tabs.length ? tabs.length : widths.length;
            var expandedSet = [];
            for (var i = 0; i < size; i++) {
              var set = [widths[i], tabs[i]];
              expandedSet.push(set);
            }
            return expandedSet;
          };
          return ElasticTabstopsLite2;
        }()
      );
      exports2.ElasticTabstopsLite = ElasticTabstopsLite;
      var Editor = require2("../editor").Editor;
      require2("../config").defineOptions(Editor.prototype, "editor", {
        useElasticTabstops: {
          set: function(val) {
            if (val) {
              if (!this.elasticTabstops)
                this.elasticTabstops = new ElasticTabstopsLite(this);
              this.commands.on("afterExec", this.elasticTabstops.onAfterExec);
              this.commands.on("exec", this.elasticTabstops.onExec);
              this.on("change", this.elasticTabstops.onChange);
            } else if (this.elasticTabstops) {
              this.commands.removeListener("afterExec", this.elasticTabstops.onAfterExec);
              this.commands.removeListener("exec", this.elasticTabstops.onExec);
              this.removeListener("change", this.elasticTabstops.onChange);
            }
          }
        }
      });
    });
    (function() {
      ace.require(["ace/ext/elastic_tabstops_lite"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(extElastic_tabstops_lite$2);
  return extElastic_tabstops_lite$2.exports;
}
var extElastic_tabstops_liteExports = requireExtElastic_tabstops_lite();
const extElastic_tabstops_lite = /* @__PURE__ */ getDefaultExportFromCjs(extElastic_tabstops_liteExports);
const extElastic_tabstops_lite$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: extElastic_tabstops_lite
}, [extElastic_tabstops_liteExports]);
export {
  extElastic_tabstops_lite$1 as e
};
