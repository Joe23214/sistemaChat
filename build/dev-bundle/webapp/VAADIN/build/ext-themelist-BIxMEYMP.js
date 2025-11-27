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
var extThemelist$2 = { exports: {} };
var hasRequiredExtThemelist;
function requireExtThemelist() {
  if (hasRequiredExtThemelist) return extThemelist$2.exports;
  hasRequiredExtThemelist = 1;
  (function(module, exports) {
    ace.define("ace/ext/themelist", ["require", "exports", "module"], function(require2, exports2, module2) {
      var themeData = [
        ["Chrome"],
        ["Clouds"],
        ["Crimson Editor"],
        ["Dawn"],
        ["Dreamweaver"],
        ["Eclipse"],
        ["GitHub"],
        ["IPlastic"],
        ["Solarized Light"],
        ["TextMate"],
        ["Tomorrow"],
        ["XCode"],
        ["Kuroir"],
        ["KatzenMilch"],
        ["SQL Server", "sqlserver", "light"],
        ["Ambiance", "ambiance", "dark"],
        ["Chaos", "chaos", "dark"],
        ["Clouds Midnight", "clouds_midnight", "dark"],
        ["Dracula", "", "dark"],
        ["Cobalt", "cobalt", "dark"],
        ["Gruvbox", "gruvbox", "dark"],
        ["Green on Black", "gob", "dark"],
        ["idle Fingers", "idle_fingers", "dark"],
        ["krTheme", "kr_theme", "dark"],
        ["Merbivore", "merbivore", "dark"],
        ["Merbivore Soft", "merbivore_soft", "dark"],
        ["Mono Industrial", "mono_industrial", "dark"],
        ["Monokai", "monokai", "dark"],
        ["Nord Dark", "nord_dark", "dark"],
        ["One Dark", "one_dark", "dark"],
        ["Pastel on dark", "pastel_on_dark", "dark"],
        ["Solarized Dark", "solarized_dark", "dark"],
        ["Terminal", "terminal", "dark"],
        ["Tomorrow Night", "tomorrow_night", "dark"],
        ["Tomorrow Night Blue", "tomorrow_night_blue", "dark"],
        ["Tomorrow Night Bright", "tomorrow_night_bright", "dark"],
        ["Tomorrow Night 80s", "tomorrow_night_eighties", "dark"],
        ["Twilight", "twilight", "dark"],
        ["Vibrant Ink", "vibrant_ink", "dark"]
      ];
      exports2.themesByName = {};
      exports2.themes = themeData.map(function(data) {
        var name = data[1] || data[0].replace(/ /g, "_").toLowerCase();
        var theme = {
          caption: data[0],
          theme: "ace/theme/" + name,
          isDark: data[2] == "dark",
          name
        };
        exports2.themesByName[name] = theme;
        return theme;
      });
    });
    (function() {
      ace.require(["ace/ext/themelist"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(extThemelist$2);
  return extThemelist$2.exports;
}
var extThemelistExports = requireExtThemelist();
const extThemelist = /* @__PURE__ */ getDefaultExportFromCjs(extThemelistExports);
const extThemelist$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: extThemelist
}, [extThemelistExports]);
export {
  extThemelist$1 as e
};
