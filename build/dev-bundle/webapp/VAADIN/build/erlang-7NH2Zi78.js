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
var erlang$2 = { exports: {} };
var hasRequiredErlang;
function requireErlang() {
  if (hasRequiredErlang) return erlang$2.exports;
  hasRequiredErlang = 1;
  (function(module, exports) {
    ace.define("ace/snippets/erlang.snippets", ["require", "exports", "module"], function(require2, exports2, module2) {
      module2.exports = "# module and export all\nsnippet mod\n	-module(${1:`Filename('', 'my')`}).\n	\n	-compile([export_all]).\n	\n	start() ->\n	    ${2}\n	\n	stop() ->\n	    ok.\n# define directive\nsnippet def\n	-define(${1:macro}, ${2:body}).${3}\n# export directive\nsnippet exp\n	-export([${1:function}/${2:arity}]).\n# include directive\nsnippet inc\n	-include(\"${1:file}\").${2}\n# behavior directive\nsnippet beh\n	-behaviour(${1:behaviour}).${2}\n# if expression\nsnippet if\n	if\n	    ${1:guard} ->\n	        ${2:body}\n	end\n# case expression\nsnippet case\n	case ${1:expression} of\n	    ${2:pattern} ->\n	        ${3:body};\n	end\n# anonymous function\nsnippet fun\n	fun (${1:Parameters}) -> ${2:body} end${3}\n# try...catch\nsnippet try\n	try\n	    ${1}\n	catch\n	    ${2:_:_} -> ${3:got_some_exception}\n	end\n# record directive\nsnippet rec\n	-record(${1:record}, {\n	    ${2:field}=${3:value}}).${4}\n# todo comment\nsnippet todo\n	%% TODO: ${1}\n## Snippets below (starting with '%') are in EDoc format.\n## See http://www.erlang.org/doc/apps/edoc/chapter.html#id56887 for more details\n# doc comment\nsnippet %d\n	%% @doc ${1}\n# end of doc comment\nsnippet %e\n	%% @end\n# specification comment\nsnippet %s\n	%% @spec ${1}\n# private function marker\nsnippet %p\n	%% @private\n# OTP application\nsnippet application\n	-module(${1:`Filename('', 'my')`}).\n\n	-behaviour(application).\n\n	-export([start/2, stop/1]).\n\n	start(_Type, _StartArgs) ->\n	    case ${2:root_supervisor}:start_link() of\n	        {ok, Pid} ->\n	            {ok, Pid};\n	        Other ->\n		          {error, Other}\n	    end.\n\n	stop(_State) ->\n	    ok.	\n# OTP supervisor\nsnippet supervisor\n	-module(${1:`Filename('', 'my')`}).\n\n	-behaviour(supervisor).\n\n	%% API\n	-export([start_link/0]).\n\n	%% Supervisor callbacks\n	-export([init/1]).\n\n	-define(SERVER, ?MODULE).\n\n	start_link() ->\n	    supervisor:start_link({local, ?SERVER}, ?MODULE, []).\n\n	init([]) ->\n	    Server = {${2:my_server}, {$2, start_link, []},\n	      permanent, 2000, worker, [$2]},\n	    Children = [Server],\n	    RestartStrategy = {one_for_one, 0, 1},\n	    {ok, {RestartStrategy, Children}}.\n# OTP gen_server\nsnippet gen_server\n	-module(${1:`Filename('', 'my')`}).\n\n	-behaviour(gen_server).\n\n	%% API\n	-export([\n	         start_link/0\n	        ]).\n\n	%% gen_server callbacks\n	-export([init/1, handle_call/3, handle_cast/2, handle_info/2,\n	         terminate/2, code_change/3]).\n\n	-define(SERVER, ?MODULE).\n\n	-record(state, {}).\n\n	%%%===================================================================\n	%%% API\n	%%%===================================================================\n\n	start_link() ->\n	    gen_server:start_link({local, ?SERVER}, ?MODULE, [], []).\n\n	%%%===================================================================\n	%%% gen_server callbacks\n	%%%===================================================================\n\n	init([]) ->\n	    {ok, #state{}}.\n\n	handle_call(_Request, _From, State) ->\n	    Reply = ok,\n	    {reply, Reply, State}.\n\n	handle_cast(_Msg, State) ->\n	    {noreply, State}.\n\n	handle_info(_Info, State) ->\n	    {noreply, State}.\n\n	terminate(_Reason, _State) ->\n	    ok.\n\n	code_change(_OldVsn, State, _Extra) ->\n	    {ok, State}.\n\n	%%%===================================================================\n	%%% Internal functions\n	%%%===================================================================\n\n";
    });
    ace.define("ace/snippets/erlang", ["require", "exports", "module", "ace/snippets/erlang.snippets"], function(require2, exports2, module2) {
      exports2.snippetText = require2("./erlang.snippets");
      exports2.scope = "erlang";
    });
    (function() {
      ace.require(["ace/snippets/erlang"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(erlang$2);
  return erlang$2.exports;
}
var erlangExports = requireErlang();
const erlang = /* @__PURE__ */ getDefaultExportFromCjs(erlangExports);
const erlang$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: erlang
}, [erlangExports]);
export {
  erlang$1 as e
};
