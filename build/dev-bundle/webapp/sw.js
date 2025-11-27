var _a;
try {
  self["workbox:core:7.2.0"] && _();
} catch (e) {
}
const logger = null;
const fallback = (code, ...args) => {
  let msg = code;
  if (args.length > 0) {
    msg += ` :: ${JSON.stringify(args)}`;
  }
  return msg;
};
const messageGenerator = fallback;
class WorkboxError extends Error {
  /**
   *
   * @param {string} errorCode The error code that
   * identifies this particular error.
   * @param {Object=} details Any relevant arguments
   * that will help developers identify issues should
   * be added as a key on the context object.
   */
  constructor(errorCode, details) {
    const message = messageGenerator(errorCode, details);
    super(message);
    this.name = errorCode;
    this.details = details;
  }
}
const quotaErrorCallbacks = /* @__PURE__ */ new Set();
const _cacheNameDetails = {
  googleAnalytics: "googleAnalytics",
  precache: "precache-v2",
  prefix: "workbox",
  runtime: "runtime",
  suffix: typeof registration !== "undefined" ? registration.scope : ""
};
const _createCacheName = (cacheName) => {
  return [_cacheNameDetails.prefix, cacheName, _cacheNameDetails.suffix].filter((value) => value && value.length > 0).join("-");
};
const eachCacheNameDetail = (fn) => {
  for (const key of Object.keys(_cacheNameDetails)) {
    fn(key);
  }
};
const cacheNames = {
  updateDetails: (details) => {
    eachCacheNameDetail((key) => {
      if (typeof details[key] === "string") {
        _cacheNameDetails[key] = details[key];
      }
    });
  },
  getGoogleAnalyticsName: (userCacheName) => {
    return userCacheName || _createCacheName(_cacheNameDetails.googleAnalytics);
  },
  getPrecacheName: (userCacheName) => {
    return userCacheName || _createCacheName(_cacheNameDetails.precache);
  },
  getPrefix: () => {
    return _cacheNameDetails.prefix;
  },
  getRuntimeName: (userCacheName) => {
    return userCacheName || _createCacheName(_cacheNameDetails.runtime);
  },
  getSuffix: () => {
    return _cacheNameDetails.suffix;
  }
};
function stripParams(fullURL, ignoreParams) {
  const strippedURL = new URL(fullURL);
  for (const param of ignoreParams) {
    strippedURL.searchParams.delete(param);
  }
  return strippedURL.href;
}
async function cacheMatchIgnoreParams(cache, request, ignoreParams, matchOptions) {
  const strippedRequestURL = stripParams(request.url, ignoreParams);
  if (request.url === strippedRequestURL) {
    return cache.match(request, matchOptions);
  }
  const keysOptions = Object.assign(Object.assign({}, matchOptions), { ignoreSearch: true });
  const cacheKeys = await cache.keys(request, keysOptions);
  for (const cacheKey of cacheKeys) {
    const strippedCacheKeyURL = stripParams(cacheKey.url, ignoreParams);
    if (strippedRequestURL === strippedCacheKeyURL) {
      return cache.match(cacheKey, matchOptions);
    }
  }
  return;
}
let supportStatus;
function canConstructResponseFromBodyStream() {
  if (supportStatus === void 0) {
    const testResponse = new Response("");
    if ("body" in testResponse) {
      try {
        new Response(testResponse.body);
        supportStatus = true;
      } catch (error) {
        supportStatus = false;
      }
    }
    supportStatus = false;
  }
  return supportStatus;
}
class Deferred {
  /**
   * Creates a promise and exposes its resolve and reject functions as methods.
   */
  constructor() {
    this.promise = new Promise((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    });
  }
}
async function executeQuotaErrorCallbacks() {
  for (const callback of quotaErrorCallbacks) {
    await callback();
  }
}
const getFriendlyURL = (url) => {
  const urlObj = new URL(String(url), location.href);
  return urlObj.href.replace(new RegExp(`^${location.origin}`), "");
};
function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function waitUntil(event, asyncFn) {
  const returnPromise = asyncFn();
  event.waitUntil(returnPromise);
  return returnPromise;
}
async function copyResponse(response, modifier) {
  let origin = null;
  if (response.url) {
    const responseURL = new URL(response.url);
    origin = responseURL.origin;
  }
  if (origin !== self.location.origin) {
    throw new WorkboxError("cross-origin-copy-response", { origin });
  }
  const clonedResponse = response.clone();
  const responseInit = {
    headers: new Headers(clonedResponse.headers),
    status: clonedResponse.status,
    statusText: clonedResponse.statusText
  };
  const modifiedResponseInit = responseInit;
  const body = canConstructResponseFromBodyStream() ? clonedResponse.body : await clonedResponse.blob();
  return new Response(body, modifiedResponseInit);
}
function clientsClaim() {
  self.addEventListener("activate", () => self.clients.claim());
}
try {
  self["workbox:precaching:7.2.0"] && _();
} catch (e) {
}
const REVISION_SEARCH_PARAM = "__WB_REVISION__";
function createCacheKey(entry) {
  if (!entry) {
    throw new WorkboxError("add-to-cache-list-unexpected-type", { entry });
  }
  if (typeof entry === "string") {
    const urlObject = new URL(entry, location.href);
    return {
      cacheKey: urlObject.href,
      url: urlObject.href
    };
  }
  const { revision, url } = entry;
  if (!url) {
    throw new WorkboxError("add-to-cache-list-unexpected-type", { entry });
  }
  if (!revision) {
    const urlObject = new URL(url, location.href);
    return {
      cacheKey: urlObject.href,
      url: urlObject.href
    };
  }
  const cacheKeyURL = new URL(url, location.href);
  const originalURL = new URL(url, location.href);
  cacheKeyURL.searchParams.set(REVISION_SEARCH_PARAM, revision);
  return {
    cacheKey: cacheKeyURL.href,
    url: originalURL.href
  };
}
class PrecacheInstallReportPlugin {
  constructor() {
    this.updatedURLs = [];
    this.notUpdatedURLs = [];
    this.handlerWillStart = async ({ request, state }) => {
      if (state) {
        state.originalRequest = request;
      }
    };
    this.cachedResponseWillBeUsed = async ({ event, state, cachedResponse }) => {
      if (event.type === "install") {
        if (state && state.originalRequest && state.originalRequest instanceof Request) {
          const url = state.originalRequest.url;
          if (cachedResponse) {
            this.notUpdatedURLs.push(url);
          } else {
            this.updatedURLs.push(url);
          }
        }
      }
      return cachedResponse;
    };
  }
}
class PrecacheCacheKeyPlugin {
  constructor({ precacheController: precacheController2 }) {
    this.cacheKeyWillBeUsed = async ({ request, params }) => {
      const cacheKey = (params === null || params === void 0 ? void 0 : params.cacheKey) || this._precacheController.getCacheKeyForURL(request.url);
      return cacheKey ? new Request(cacheKey, { headers: request.headers }) : request;
    };
    this._precacheController = precacheController2;
  }
}
try {
  self["workbox:strategies:7.2.0"] && _();
} catch (e) {
}
function toRequest(input) {
  return typeof input === "string" ? new Request(input) : input;
}
class StrategyHandler {
  /**
   * Creates a new instance associated with the passed strategy and event
   * that's handling the request.
   *
   * The constructor also initializes the state that will be passed to each of
   * the plugins handling this request.
   *
   * @param {workbox-strategies.Strategy} strategy
   * @param {Object} options
   * @param {Request|string} options.request A request to run this strategy for.
   * @param {ExtendableEvent} options.event The event associated with the
   *     request.
   * @param {URL} [options.url]
   * @param {*} [options.params] The return value from the
   *     {@link workbox-routing~matchCallback} (if applicable).
   */
  constructor(strategy, options) {
    this._cacheKeys = {};
    Object.assign(this, options);
    this.event = options.event;
    this._strategy = strategy;
    this._handlerDeferred = new Deferred();
    this._extendLifetimePromises = [];
    this._plugins = [...strategy.plugins];
    this._pluginStateMap = /* @__PURE__ */ new Map();
    for (const plugin of this._plugins) {
      this._pluginStateMap.set(plugin, {});
    }
    this.event.waitUntil(this._handlerDeferred.promise);
  }
  /**
   * Fetches a given request (and invokes any applicable plugin callback
   * methods) using the `fetchOptions` (for non-navigation requests) and
   * `plugins` defined on the `Strategy` object.
   *
   * The following plugin lifecycle methods are invoked when using this method:
   * - `requestWillFetch()`
   * - `fetchDidSucceed()`
   * - `fetchDidFail()`
   *
   * @param {Request|string} input The URL or request to fetch.
   * @return {Promise<Response>}
   */
  async fetch(input) {
    const { event } = this;
    let request = toRequest(input);
    if (request.mode === "navigate" && event instanceof FetchEvent && event.preloadResponse) {
      const possiblePreloadResponse = await event.preloadResponse;
      if (possiblePreloadResponse) {
        return possiblePreloadResponse;
      }
    }
    const originalRequest = this.hasCallback("fetchDidFail") ? request.clone() : null;
    try {
      for (const cb of this.iterateCallbacks("requestWillFetch")) {
        request = await cb({ request: request.clone(), event });
      }
    } catch (err) {
      if (err instanceof Error) {
        throw new WorkboxError("plugin-error-request-will-fetch", {
          thrownErrorMessage: err.message
        });
      }
    }
    const pluginFilteredRequest = request.clone();
    try {
      let fetchResponse;
      fetchResponse = await fetch(request, request.mode === "navigate" ? void 0 : this._strategy.fetchOptions);
      if (false) ;
      for (const callback of this.iterateCallbacks("fetchDidSucceed")) {
        fetchResponse = await callback({
          event,
          request: pluginFilteredRequest,
          response: fetchResponse
        });
      }
      return fetchResponse;
    } catch (error) {
      if (originalRequest) {
        await this.runCallbacks("fetchDidFail", {
          error,
          event,
          originalRequest: originalRequest.clone(),
          request: pluginFilteredRequest.clone()
        });
      }
      throw error;
    }
  }
  /**
   * Calls `this.fetch()` and (in the background) runs `this.cachePut()` on
   * the response generated by `this.fetch()`.
   *
   * The call to `this.cachePut()` automatically invokes `this.waitUntil()`,
   * so you do not have to manually call `waitUntil()` on the event.
   *
   * @param {Request|string} input The request or URL to fetch and cache.
   * @return {Promise<Response>}
   */
  async fetchAndCachePut(input) {
    const response = await this.fetch(input);
    const responseClone = response.clone();
    void this.waitUntil(this.cachePut(input, responseClone));
    return response;
  }
  /**
   * Matches a request from the cache (and invokes any applicable plugin
   * callback methods) using the `cacheName`, `matchOptions`, and `plugins`
   * defined on the strategy object.
   *
   * The following plugin lifecycle methods are invoked when using this method:
   * - cacheKeyWillBeUsed()
   * - cachedResponseWillBeUsed()
   *
   * @param {Request|string} key The Request or URL to use as the cache key.
   * @return {Promise<Response|undefined>} A matching response, if found.
   */
  async cacheMatch(key) {
    const request = toRequest(key);
    let cachedResponse;
    const { cacheName, matchOptions } = this._strategy;
    const effectiveRequest = await this.getCacheKey(request, "read");
    const multiMatchOptions = Object.assign(Object.assign({}, matchOptions), { cacheName });
    cachedResponse = await caches.match(effectiveRequest, multiMatchOptions);
    for (const callback of this.iterateCallbacks("cachedResponseWillBeUsed")) {
      cachedResponse = await callback({
        cacheName,
        matchOptions,
        cachedResponse,
        request: effectiveRequest,
        event: this.event
      }) || void 0;
    }
    return cachedResponse;
  }
  /**
   * Puts a request/response pair in the cache (and invokes any applicable
   * plugin callback methods) using the `cacheName` and `plugins` defined on
   * the strategy object.
   *
   * The following plugin lifecycle methods are invoked when using this method:
   * - cacheKeyWillBeUsed()
   * - cacheWillUpdate()
   * - cacheDidUpdate()
   *
   * @param {Request|string} key The request or URL to use as the cache key.
   * @param {Response} response The response to cache.
   * @return {Promise<boolean>} `false` if a cacheWillUpdate caused the response
   * not be cached, and `true` otherwise.
   */
  async cachePut(key, response) {
    const request = toRequest(key);
    await timeout(0);
    const effectiveRequest = await this.getCacheKey(request, "write");
    if (!response) {
      throw new WorkboxError("cache-put-with-no-response", {
        url: getFriendlyURL(effectiveRequest.url)
      });
    }
    const responseToCache = await this._ensureResponseSafeToCache(response);
    if (!responseToCache) {
      return false;
    }
    const { cacheName, matchOptions } = this._strategy;
    const cache = await self.caches.open(cacheName);
    const hasCacheUpdateCallback = this.hasCallback("cacheDidUpdate");
    const oldResponse = hasCacheUpdateCallback ? await cacheMatchIgnoreParams(
      // TODO(philipwalton): the `__WB_REVISION__` param is a precaching
      // feature. Consider into ways to only add this behavior if using
      // precaching.
      cache,
      effectiveRequest.clone(),
      ["__WB_REVISION__"],
      matchOptions
    ) : null;
    try {
      await cache.put(effectiveRequest, hasCacheUpdateCallback ? responseToCache.clone() : responseToCache);
    } catch (error) {
      if (error instanceof Error) {
        if (error.name === "QuotaExceededError") {
          await executeQuotaErrorCallbacks();
        }
        throw error;
      }
    }
    for (const callback of this.iterateCallbacks("cacheDidUpdate")) {
      await callback({
        cacheName,
        oldResponse,
        newResponse: responseToCache.clone(),
        request: effectiveRequest,
        event: this.event
      });
    }
    return true;
  }
  /**
   * Checks the list of plugins for the `cacheKeyWillBeUsed` callback, and
   * executes any of those callbacks found in sequence. The final `Request`
   * object returned by the last plugin is treated as the cache key for cache
   * reads and/or writes. If no `cacheKeyWillBeUsed` plugin callbacks have
   * been registered, the passed request is returned unmodified
   *
   * @param {Request} request
   * @param {string} mode
   * @return {Promise<Request>}
   */
  async getCacheKey(request, mode) {
    const key = `${request.url} | ${mode}`;
    if (!this._cacheKeys[key]) {
      let effectiveRequest = request;
      for (const callback of this.iterateCallbacks("cacheKeyWillBeUsed")) {
        effectiveRequest = toRequest(await callback({
          mode,
          request: effectiveRequest,
          event: this.event,
          // params has a type any can't change right now.
          params: this.params
          // eslint-disable-line
        }));
      }
      this._cacheKeys[key] = effectiveRequest;
    }
    return this._cacheKeys[key];
  }
  /**
   * Returns true if the strategy has at least one plugin with the given
   * callback.
   *
   * @param {string} name The name of the callback to check for.
   * @return {boolean}
   */
  hasCallback(name) {
    for (const plugin of this._strategy.plugins) {
      if (name in plugin) {
        return true;
      }
    }
    return false;
  }
  /**
   * Runs all plugin callbacks matching the given name, in order, passing the
   * given param object (merged ith the current plugin state) as the only
   * argument.
   *
   * Note: since this method runs all plugins, it's not suitable for cases
   * where the return value of a callback needs to be applied prior to calling
   * the next callback. See
   * {@link workbox-strategies.StrategyHandler#iterateCallbacks}
   * below for how to handle that case.
   *
   * @param {string} name The name of the callback to run within each plugin.
   * @param {Object} param The object to pass as the first (and only) param
   *     when executing each callback. This object will be merged with the
   *     current plugin state prior to callback execution.
   */
  async runCallbacks(name, param) {
    for (const callback of this.iterateCallbacks(name)) {
      await callback(param);
    }
  }
  /**
   * Accepts a callback and returns an iterable of matching plugin callbacks,
   * where each callback is wrapped with the current handler state (i.e. when
   * you call each callback, whatever object parameter you pass it will
   * be merged with the plugin's current state).
   *
   * @param {string} name The name fo the callback to run
   * @return {Array<Function>}
   */
  *iterateCallbacks(name) {
    for (const plugin of this._strategy.plugins) {
      if (typeof plugin[name] === "function") {
        const state = this._pluginStateMap.get(plugin);
        const statefulCallback = (param) => {
          const statefulParam = Object.assign(Object.assign({}, param), { state });
          return plugin[name](statefulParam);
        };
        yield statefulCallback;
      }
    }
  }
  /**
   * Adds a promise to the
   * [extend lifetime promises]{@link https://w3c.github.io/ServiceWorker/#extendableevent-extend-lifetime-promises}
   * of the event event associated with the request being handled (usually a
   * `FetchEvent`).
   *
   * Note: you can await
   * {@link workbox-strategies.StrategyHandler~doneWaiting}
   * to know when all added promises have settled.
   *
   * @param {Promise} promise A promise to add to the extend lifetime promises
   *     of the event that triggered the request.
   */
  waitUntil(promise) {
    this._extendLifetimePromises.push(promise);
    return promise;
  }
  /**
   * Returns a promise that resolves once all promises passed to
   * {@link workbox-strategies.StrategyHandler~waitUntil}
   * have settled.
   *
   * Note: any work done after `doneWaiting()` settles should be manually
   * passed to an event's `waitUntil()` method (not this handler's
   * `waitUntil()` method), otherwise the service worker thread my be killed
   * prior to your work completing.
   */
  async doneWaiting() {
    let promise;
    while (promise = this._extendLifetimePromises.shift()) {
      await promise;
    }
  }
  /**
   * Stops running the strategy and immediately resolves any pending
   * `waitUntil()` promises.
   */
  destroy() {
    this._handlerDeferred.resolve(null);
  }
  /**
   * This method will call cacheWillUpdate on the available plugins (or use
   * status === 200) to determine if the Response is safe and valid to cache.
   *
   * @param {Request} options.request
   * @param {Response} options.response
   * @return {Promise<Response|undefined>}
   *
   * @private
   */
  async _ensureResponseSafeToCache(response) {
    let responseToCache = response;
    let pluginsUsed = false;
    for (const callback of this.iterateCallbacks("cacheWillUpdate")) {
      responseToCache = await callback({
        request: this.request,
        response: responseToCache,
        event: this.event
      }) || void 0;
      pluginsUsed = true;
      if (!responseToCache) {
        break;
      }
    }
    if (!pluginsUsed) {
      if (responseToCache && responseToCache.status !== 200) {
        responseToCache = void 0;
      }
    }
    return responseToCache;
  }
}
class Strategy {
  /**
   * Creates a new instance of the strategy and sets all documented option
   * properties as public instance properties.
   *
   * Note: if a custom strategy class extends the base Strategy class and does
   * not need more than these properties, it does not need to define its own
   * constructor.
   *
   * @param {Object} [options]
   * @param {string} [options.cacheName] Cache name to store and retrieve
   * requests. Defaults to the cache names provided by
   * {@link workbox-core.cacheNames}.
   * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
   * to use in conjunction with this caching strategy.
   * @param {Object} [options.fetchOptions] Values passed along to the
   * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
   * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
   * `fetch()` requests made by this strategy.
   * @param {Object} [options.matchOptions] The
   * [`CacheQueryOptions`]{@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions}
   * for any `cache.match()` or `cache.put()` calls made by this strategy.
   */
  constructor(options = {}) {
    this.cacheName = cacheNames.getRuntimeName(options.cacheName);
    this.plugins = options.plugins || [];
    this.fetchOptions = options.fetchOptions;
    this.matchOptions = options.matchOptions;
  }
  /**
   * Perform a request strategy and returns a `Promise` that will resolve with
   * a `Response`, invoking all relevant plugin callbacks.
   *
   * When a strategy instance is registered with a Workbox
   * {@link workbox-routing.Route}, this method is automatically
   * called when the route matches.
   *
   * Alternatively, this method can be used in a standalone `FetchEvent`
   * listener by passing it to `event.respondWith()`.
   *
   * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
   *     properties listed below.
   * @param {Request|string} options.request A request to run this strategy for.
   * @param {ExtendableEvent} options.event The event associated with the
   *     request.
   * @param {URL} [options.url]
   * @param {*} [options.params]
   */
  handle(options) {
    const [responseDone] = this.handleAll(options);
    return responseDone;
  }
  /**
   * Similar to {@link workbox-strategies.Strategy~handle}, but
   * instead of just returning a `Promise` that resolves to a `Response` it
   * it will return an tuple of `[response, done]` promises, where the former
   * (`response`) is equivalent to what `handle()` returns, and the latter is a
   * Promise that will resolve once any promises that were added to
   * `event.waitUntil()` as part of performing the strategy have completed.
   *
   * You can await the `done` promise to ensure any extra work performed by
   * the strategy (usually caching responses) completes successfully.
   *
   * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
   *     properties listed below.
   * @param {Request|string} options.request A request to run this strategy for.
   * @param {ExtendableEvent} options.event The event associated with the
   *     request.
   * @param {URL} [options.url]
   * @param {*} [options.params]
   * @return {Array<Promise>} A tuple of [response, done]
   *     promises that can be used to determine when the response resolves as
   *     well as when the handler has completed all its work.
   */
  handleAll(options) {
    if (options instanceof FetchEvent) {
      options = {
        event: options,
        request: options.request
      };
    }
    const event = options.event;
    const request = typeof options.request === "string" ? new Request(options.request) : options.request;
    const params = "params" in options ? options.params : void 0;
    const handler = new StrategyHandler(this, { event, request, params });
    const responseDone = this._getResponse(handler, request, event);
    const handlerDone = this._awaitComplete(responseDone, handler, request, event);
    return [responseDone, handlerDone];
  }
  async _getResponse(handler, request, event) {
    await handler.runCallbacks("handlerWillStart", { event, request });
    let response = void 0;
    try {
      response = await this._handle(request, handler);
      if (!response || response.type === "error") {
        throw new WorkboxError("no-response", { url: request.url });
      }
    } catch (error) {
      if (error instanceof Error) {
        for (const callback of handler.iterateCallbacks("handlerDidError")) {
          response = await callback({ error, event, request });
          if (response) {
            break;
          }
        }
      }
      if (!response) {
        throw error;
      }
    }
    for (const callback of handler.iterateCallbacks("handlerWillRespond")) {
      response = await callback({ event, request, response });
    }
    return response;
  }
  async _awaitComplete(responseDone, handler, request, event) {
    let response;
    let error;
    try {
      response = await responseDone;
    } catch (error2) {
    }
    try {
      await handler.runCallbacks("handlerDidRespond", {
        event,
        request,
        response
      });
      await handler.doneWaiting();
    } catch (waitUntilError) {
      if (waitUntilError instanceof Error) {
        error = waitUntilError;
      }
    }
    await handler.runCallbacks("handlerDidComplete", {
      event,
      request,
      response,
      error
    });
    handler.destroy();
    if (error) {
      throw error;
    }
  }
}
class PrecacheStrategy extends Strategy {
  /**
   *
   * @param {Object} [options]
   * @param {string} [options.cacheName] Cache name to store and retrieve
   * requests. Defaults to the cache names provided by
   * {@link workbox-core.cacheNames}.
   * @param {Array<Object>} [options.plugins] {@link https://developers.google.com/web/tools/workbox/guides/using-plugins|Plugins}
   * to use in conjunction with this caching strategy.
   * @param {Object} [options.fetchOptions] Values passed along to the
   * {@link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters|init}
   * of all fetch() requests made by this strategy.
   * @param {Object} [options.matchOptions] The
   * {@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions|CacheQueryOptions}
   * for any `cache.match()` or `cache.put()` calls made by this strategy.
   * @param {boolean} [options.fallbackToNetwork=true] Whether to attempt to
   * get the response from the network if there's a precache miss.
   */
  constructor(options = {}) {
    options.cacheName = cacheNames.getPrecacheName(options.cacheName);
    super(options);
    this._fallbackToNetwork = options.fallbackToNetwork === false ? false : true;
    this.plugins.push(PrecacheStrategy.copyRedirectedCacheableResponsesPlugin);
  }
  /**
   * @private
   * @param {Request|string} request A request to run this strategy for.
   * @param {workbox-strategies.StrategyHandler} handler The event that
   *     triggered the request.
   * @return {Promise<Response>}
   */
  async _handle(request, handler) {
    const response = await handler.cacheMatch(request);
    if (response) {
      return response;
    }
    if (handler.event && handler.event.type === "install") {
      return await this._handleInstall(request, handler);
    }
    return await this._handleFetch(request, handler);
  }
  async _handleFetch(request, handler) {
    let response;
    const params = handler.params || {};
    if (this._fallbackToNetwork) {
      const integrityInManifest = params.integrity;
      const integrityInRequest = request.integrity;
      const noIntegrityConflict = !integrityInRequest || integrityInRequest === integrityInManifest;
      response = await handler.fetch(new Request(request, {
        integrity: request.mode !== "no-cors" ? integrityInRequest || integrityInManifest : void 0
      }));
      if (integrityInManifest && noIntegrityConflict && request.mode !== "no-cors") {
        this._useDefaultCacheabilityPluginIfNeeded();
        await handler.cachePut(request, response.clone());
      }
    } else {
      throw new WorkboxError("missing-precache-entry", {
        cacheName: this.cacheName,
        url: request.url
      });
    }
    return response;
  }
  async _handleInstall(request, handler) {
    this._useDefaultCacheabilityPluginIfNeeded();
    const response = await handler.fetch(request);
    const wasCached = await handler.cachePut(request, response.clone());
    if (!wasCached) {
      throw new WorkboxError("bad-precaching-response", {
        url: request.url,
        status: response.status
      });
    }
    return response;
  }
  /**
   * This method is complex, as there a number of things to account for:
   *
   * The `plugins` array can be set at construction, and/or it might be added to
   * to at any time before the strategy is used.
   *
   * At the time the strategy is used (i.e. during an `install` event), there
   * needs to be at least one plugin that implements `cacheWillUpdate` in the
   * array, other than `copyRedirectedCacheableResponsesPlugin`.
   *
   * - If this method is called and there are no suitable `cacheWillUpdate`
   * plugins, we need to add `defaultPrecacheCacheabilityPlugin`.
   *
   * - If this method is called and there is exactly one `cacheWillUpdate`, then
   * we don't have to do anything (this might be a previously added
   * `defaultPrecacheCacheabilityPlugin`, or it might be a custom plugin).
   *
   * - If this method is called and there is more than one `cacheWillUpdate`,
   * then we need to check if one is `defaultPrecacheCacheabilityPlugin`. If so,
   * we need to remove it. (This situation is unlikely, but it could happen if
   * the strategy is used multiple times, the first without a `cacheWillUpdate`,
   * and then later on after manually adding a custom `cacheWillUpdate`.)
   *
   * See https://github.com/GoogleChrome/workbox/issues/2737 for more context.
   *
   * @private
   */
  _useDefaultCacheabilityPluginIfNeeded() {
    let defaultPluginIndex = null;
    let cacheWillUpdatePluginCount = 0;
    for (const [index, plugin] of this.plugins.entries()) {
      if (plugin === PrecacheStrategy.copyRedirectedCacheableResponsesPlugin) {
        continue;
      }
      if (plugin === PrecacheStrategy.defaultPrecacheCacheabilityPlugin) {
        defaultPluginIndex = index;
      }
      if (plugin.cacheWillUpdate) {
        cacheWillUpdatePluginCount++;
      }
    }
    if (cacheWillUpdatePluginCount === 0) {
      this.plugins.push(PrecacheStrategy.defaultPrecacheCacheabilityPlugin);
    } else if (cacheWillUpdatePluginCount > 1 && defaultPluginIndex !== null) {
      this.plugins.splice(defaultPluginIndex, 1);
    }
  }
}
PrecacheStrategy.defaultPrecacheCacheabilityPlugin = {
  async cacheWillUpdate({ response }) {
    if (!response || response.status >= 400) {
      return null;
    }
    return response;
  }
};
PrecacheStrategy.copyRedirectedCacheableResponsesPlugin = {
  async cacheWillUpdate({ response }) {
    return response.redirected ? await copyResponse(response) : response;
  }
};
class PrecacheController {
  /**
   * Create a new PrecacheController.
   *
   * @param {Object} [options]
   * @param {string} [options.cacheName] The cache to use for precaching.
   * @param {string} [options.plugins] Plugins to use when precaching as well
   * as responding to fetch events for precached assets.
   * @param {boolean} [options.fallbackToNetwork=true] Whether to attempt to
   * get the response from the network if there's a precache miss.
   */
  constructor({ cacheName, plugins = [], fallbackToNetwork = true } = {}) {
    this._urlsToCacheKeys = /* @__PURE__ */ new Map();
    this._urlsToCacheModes = /* @__PURE__ */ new Map();
    this._cacheKeysToIntegrities = /* @__PURE__ */ new Map();
    this._strategy = new PrecacheStrategy({
      cacheName: cacheNames.getPrecacheName(cacheName),
      plugins: [
        ...plugins,
        new PrecacheCacheKeyPlugin({ precacheController: this })
      ],
      fallbackToNetwork
    });
    this.install = this.install.bind(this);
    this.activate = this.activate.bind(this);
  }
  /**
   * @type {workbox-precaching.PrecacheStrategy} The strategy created by this controller and
   * used to cache assets and respond to fetch events.
   */
  get strategy() {
    return this._strategy;
  }
  /**
   * Adds items to the precache list, removing any duplicates and
   * stores the files in the
   * {@link workbox-core.cacheNames|"precache cache"} when the service
   * worker installs.
   *
   * This method can be called multiple times.
   *
   * @param {Array<Object|string>} [entries=[]] Array of entries to precache.
   */
  precache(entries) {
    this.addToCacheList(entries);
    if (!this._installAndActiveListenersAdded) {
      self.addEventListener("install", this.install);
      self.addEventListener("activate", this.activate);
      this._installAndActiveListenersAdded = true;
    }
  }
  /**
   * This method will add items to the precache list, removing duplicates
   * and ensuring the information is valid.
   *
   * @param {Array<workbox-precaching.PrecacheController.PrecacheEntry|string>} entries
   *     Array of entries to precache.
   */
  addToCacheList(entries) {
    const urlsToWarnAbout = [];
    for (const entry of entries) {
      if (typeof entry === "string") {
        urlsToWarnAbout.push(entry);
      } else if (entry && entry.revision === void 0) {
        urlsToWarnAbout.push(entry.url);
      }
      const { cacheKey, url } = createCacheKey(entry);
      const cacheMode = typeof entry !== "string" && entry.revision ? "reload" : "default";
      if (this._urlsToCacheKeys.has(url) && this._urlsToCacheKeys.get(url) !== cacheKey) {
        throw new WorkboxError("add-to-cache-list-conflicting-entries", {
          firstEntry: this._urlsToCacheKeys.get(url),
          secondEntry: cacheKey
        });
      }
      if (typeof entry !== "string" && entry.integrity) {
        if (this._cacheKeysToIntegrities.has(cacheKey) && this._cacheKeysToIntegrities.get(cacheKey) !== entry.integrity) {
          throw new WorkboxError("add-to-cache-list-conflicting-integrities", {
            url
          });
        }
        this._cacheKeysToIntegrities.set(cacheKey, entry.integrity);
      }
      this._urlsToCacheKeys.set(url, cacheKey);
      this._urlsToCacheModes.set(url, cacheMode);
      if (urlsToWarnAbout.length > 0) {
        const warningMessage = `Workbox is precaching URLs without revision info: ${urlsToWarnAbout.join(", ")}
This is generally NOT safe. Learn more at https://bit.ly/wb-precache`;
        {
          console.warn(warningMessage);
        }
      }
    }
  }
  /**
   * Precaches new and updated assets. Call this method from the service worker
   * install event.
   *
   * Note: this method calls `event.waitUntil()` for you, so you do not need
   * to call it yourself in your event handlers.
   *
   * @param {ExtendableEvent} event
   * @return {Promise<workbox-precaching.InstallResult>}
   */
  install(event) {
    return waitUntil(event, async () => {
      const installReportPlugin = new PrecacheInstallReportPlugin();
      this.strategy.plugins.push(installReportPlugin);
      for (const [url, cacheKey] of this._urlsToCacheKeys) {
        const integrity = this._cacheKeysToIntegrities.get(cacheKey);
        const cacheMode = this._urlsToCacheModes.get(url);
        const request = new Request(url, {
          integrity,
          cache: cacheMode,
          credentials: "same-origin"
        });
        await Promise.all(this.strategy.handleAll({
          params: { cacheKey },
          request,
          event
        }));
      }
      const { updatedURLs, notUpdatedURLs } = installReportPlugin;
      return { updatedURLs, notUpdatedURLs };
    });
  }
  /**
   * Deletes assets that are no longer present in the current precache manifest.
   * Call this method from the service worker activate event.
   *
   * Note: this method calls `event.waitUntil()` for you, so you do not need
   * to call it yourself in your event handlers.
   *
   * @param {ExtendableEvent} event
   * @return {Promise<workbox-precaching.CleanupResult>}
   */
  activate(event) {
    return waitUntil(event, async () => {
      const cache = await self.caches.open(this.strategy.cacheName);
      const currentlyCachedRequests = await cache.keys();
      const expectedCacheKeys = new Set(this._urlsToCacheKeys.values());
      const deletedURLs = [];
      for (const request of currentlyCachedRequests) {
        if (!expectedCacheKeys.has(request.url)) {
          await cache.delete(request);
          deletedURLs.push(request.url);
        }
      }
      return { deletedURLs };
    });
  }
  /**
   * Returns a mapping of a precached URL to the corresponding cache key, taking
   * into account the revision information for the URL.
   *
   * @return {Map<string, string>} A URL to cache key mapping.
   */
  getURLsToCacheKeys() {
    return this._urlsToCacheKeys;
  }
  /**
   * Returns a list of all the URLs that have been precached by the current
   * service worker.
   *
   * @return {Array<string>} The precached URLs.
   */
  getCachedURLs() {
    return [...this._urlsToCacheKeys.keys()];
  }
  /**
   * Returns the cache key used for storing a given URL. If that URL is
   * unversioned, like `/index.html', then the cache key will be the original
   * URL with a search parameter appended to it.
   *
   * @param {string} url A URL whose cache key you want to look up.
   * @return {string} The versioned URL that corresponds to a cache key
   * for the original URL, or undefined if that URL isn't precached.
   */
  getCacheKeyForURL(url) {
    const urlObject = new URL(url, location.href);
    return this._urlsToCacheKeys.get(urlObject.href);
  }
  /**
   * @param {string} url A cache key whose SRI you want to look up.
   * @return {string} The subresource integrity associated with the cache key,
   * or undefined if it's not set.
   */
  getIntegrityForCacheKey(cacheKey) {
    return this._cacheKeysToIntegrities.get(cacheKey);
  }
  /**
   * This acts as a drop-in replacement for
   * [`cache.match()`](https://developer.mozilla.org/en-US/docs/Web/API/Cache/match)
   * with the following differences:
   *
   * - It knows what the name of the precache is, and only checks in that cache.
   * - It allows you to pass in an "original" URL without versioning parameters,
   * and it will automatically look up the correct cache key for the currently
   * active revision of that URL.
   *
   * E.g., `matchPrecache('index.html')` will find the correct precached
   * response for the currently active service worker, even if the actual cache
   * key is `'/index.html?__WB_REVISION__=1234abcd'`.
   *
   * @param {string|Request} request The key (without revisioning parameters)
   * to look up in the precache.
   * @return {Promise<Response|undefined>}
   */
  async matchPrecache(request) {
    const url = request instanceof Request ? request.url : request;
    const cacheKey = this.getCacheKeyForURL(url);
    if (cacheKey) {
      const cache = await self.caches.open(this.strategy.cacheName);
      return cache.match(cacheKey);
    }
    return void 0;
  }
  /**
   * Returns a function that looks up `url` in the precache (taking into
   * account revision information), and returns the corresponding `Response`.
   *
   * @param {string} url The precached URL which will be used to lookup the
   * `Response`.
   * @return {workbox-routing~handlerCallback}
   */
  createHandlerBoundToURL(url) {
    const cacheKey = this.getCacheKeyForURL(url);
    if (!cacheKey) {
      throw new WorkboxError("non-precached-url", { url });
    }
    return (options) => {
      options.request = new Request(url);
      options.params = Object.assign({ cacheKey }, options.params);
      return this.strategy.handle(options);
    };
  }
}
let precacheController;
const getOrCreatePrecacheController = () => {
  if (!precacheController) {
    precacheController = new PrecacheController();
  }
  return precacheController;
};
try {
  self["workbox:routing:7.2.0"] && _();
} catch (e) {
}
const defaultMethod = "GET";
const normalizeHandler = (handler) => {
  if (handler && typeof handler === "object") {
    return handler;
  } else {
    return { handle: handler };
  }
};
class Route {
  /**
   * Constructor for Route class.
   *
   * @param {workbox-routing~matchCallback} match
   * A callback function that determines whether the route matches a given
   * `fetch` event by returning a non-falsy value.
   * @param {workbox-routing~handlerCallback} handler A callback
   * function that returns a Promise resolving to a Response.
   * @param {string} [method='GET'] The HTTP method to match the Route
   * against.
   */
  constructor(match, handler, method = defaultMethod) {
    this.handler = normalizeHandler(handler);
    this.match = match;
    this.method = method;
  }
  /**
   *
   * @param {workbox-routing-handlerCallback} handler A callback
   * function that returns a Promise resolving to a Response
   */
  setCatchHandler(handler) {
    this.catchHandler = normalizeHandler(handler);
  }
}
class RegExpRoute extends Route {
  /**
   * If the regular expression contains
   * [capture groups]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#grouping-back-references},
   * the captured values will be passed to the
   * {@link workbox-routing~handlerCallback} `params`
   * argument.
   *
   * @param {RegExp} regExp The regular expression to match against URLs.
   * @param {workbox-routing~handlerCallback} handler A callback
   * function that returns a Promise resulting in a Response.
   * @param {string} [method='GET'] The HTTP method to match the Route
   * against.
   */
  constructor(regExp, handler, method) {
    const match = ({ url }) => {
      const result = regExp.exec(url.href);
      if (!result) {
        return;
      }
      if (url.origin !== location.origin && result.index !== 0) {
        return;
      }
      return result.slice(1);
    };
    super(match, handler, method);
  }
}
class Router {
  /**
   * Initializes a new Router.
   */
  constructor() {
    this._routes = /* @__PURE__ */ new Map();
    this._defaultHandlerMap = /* @__PURE__ */ new Map();
  }
  /**
   * @return {Map<string, Array<workbox-routing.Route>>} routes A `Map` of HTTP
   * method name ('GET', etc.) to an array of all the corresponding `Route`
   * instances that are registered.
   */
  get routes() {
    return this._routes;
  }
  /**
   * Adds a fetch event listener to respond to events when a route matches
   * the event's request.
   */
  addFetchListener() {
    self.addEventListener("fetch", (event) => {
      const { request } = event;
      const responsePromise = this.handleRequest({ request, event });
      if (responsePromise) {
        event.respondWith(responsePromise);
      }
    });
  }
  /**
   * Adds a message event listener for URLs to cache from the window.
   * This is useful to cache resources loaded on the page prior to when the
   * service worker started controlling it.
   *
   * The format of the message data sent from the window should be as follows.
   * Where the `urlsToCache` array may consist of URL strings or an array of
   * URL string + `requestInit` object (the same as you'd pass to `fetch()`).
   *
   * ```
   * {
   *   type: 'CACHE_URLS',
   *   payload: {
   *     urlsToCache: [
   *       './script1.js',
   *       './script2.js',
   *       ['./script3.js', {mode: 'no-cors'}],
   *     ],
   *   },
   * }
   * ```
   */
  addCacheListener() {
    self.addEventListener("message", (event) => {
      if (event.data && event.data.type === "CACHE_URLS") {
        const { payload } = event.data;
        const requestPromises = Promise.all(payload.urlsToCache.map((entry) => {
          if (typeof entry === "string") {
            entry = [entry];
          }
          const request = new Request(...entry);
          return this.handleRequest({ request, event });
        }));
        event.waitUntil(requestPromises);
        if (event.ports && event.ports[0]) {
          void requestPromises.then(() => event.ports[0].postMessage(true));
        }
      }
    });
  }
  /**
   * Apply the routing rules to a FetchEvent object to get a Response from an
   * appropriate Route's handler.
   *
   * @param {Object} options
   * @param {Request} options.request The request to handle.
   * @param {ExtendableEvent} options.event The event that triggered the
   *     request.
   * @return {Promise<Response>|undefined} A promise is returned if a
   *     registered route can handle the request. If there is no matching
   *     route and there's no `defaultHandler`, `undefined` is returned.
   */
  handleRequest({ request, event }) {
    const url = new URL(request.url, location.href);
    if (!url.protocol.startsWith("http")) {
      return;
    }
    const sameOrigin = url.origin === location.origin;
    const { params, route } = this.findMatchingRoute({
      event,
      request,
      sameOrigin,
      url
    });
    let handler = route && route.handler;
    const method = request.method;
    if (!handler && this._defaultHandlerMap.has(method)) {
      handler = this._defaultHandlerMap.get(method);
    }
    if (!handler) {
      return;
    }
    let responsePromise;
    try {
      responsePromise = handler.handle({ url, request, event, params });
    } catch (err) {
      responsePromise = Promise.reject(err);
    }
    const catchHandler = route && route.catchHandler;
    if (responsePromise instanceof Promise && (this._catchHandler || catchHandler)) {
      responsePromise = responsePromise.catch(async (err) => {
        if (catchHandler) {
          try {
            return await catchHandler.handle({ url, request, event, params });
          } catch (catchErr) {
            if (catchErr instanceof Error) {
              err = catchErr;
            }
          }
        }
        if (this._catchHandler) {
          return this._catchHandler.handle({ url, request, event });
        }
        throw err;
      });
    }
    return responsePromise;
  }
  /**
   * Checks a request and URL (and optionally an event) against the list of
   * registered routes, and if there's a match, returns the corresponding
   * route along with any params generated by the match.
   *
   * @param {Object} options
   * @param {URL} options.url
   * @param {boolean} options.sameOrigin The result of comparing `url.origin`
   *     against the current origin.
   * @param {Request} options.request The request to match.
   * @param {Event} options.event The corresponding event.
   * @return {Object} An object with `route` and `params` properties.
   *     They are populated if a matching route was found or `undefined`
   *     otherwise.
   */
  findMatchingRoute({ url, sameOrigin, request, event }) {
    const routes = this._routes.get(request.method) || [];
    for (const route of routes) {
      let params;
      const matchResult = route.match({ url, sameOrigin, request, event });
      if (matchResult) {
        params = matchResult;
        if (Array.isArray(params) && params.length === 0) {
          params = void 0;
        } else if (matchResult.constructor === Object && // eslint-disable-line
        Object.keys(matchResult).length === 0) {
          params = void 0;
        } else if (typeof matchResult === "boolean") {
          params = void 0;
        }
        return { route, params };
      }
    }
    return {};
  }
  /**
   * Define a default `handler` that's called when no routes explicitly
   * match the incoming request.
   *
   * Each HTTP method ('GET', 'POST', etc.) gets its own default handler.
   *
   * Without a default handler, unmatched requests will go against the
   * network as if there were no service worker present.
   *
   * @param {workbox-routing~handlerCallback} handler A callback
   * function that returns a Promise resulting in a Response.
   * @param {string} [method='GET'] The HTTP method to associate with this
   * default handler. Each method has its own default.
   */
  setDefaultHandler(handler, method = defaultMethod) {
    this._defaultHandlerMap.set(method, normalizeHandler(handler));
  }
  /**
   * If a Route throws an error while handling a request, this `handler`
   * will be called and given a chance to provide a response.
   *
   * @param {workbox-routing~handlerCallback} handler A callback
   * function that returns a Promise resulting in a Response.
   */
  setCatchHandler(handler) {
    this._catchHandler = normalizeHandler(handler);
  }
  /**
   * Registers a route with the router.
   *
   * @param {workbox-routing.Route} route The route to register.
   */
  registerRoute(route) {
    if (!this._routes.has(route.method)) {
      this._routes.set(route.method, []);
    }
    this._routes.get(route.method).push(route);
  }
  /**
   * Unregisters a route with the router.
   *
   * @param {workbox-routing.Route} route The route to unregister.
   */
  unregisterRoute(route) {
    if (!this._routes.has(route.method)) {
      throw new WorkboxError("unregister-route-but-not-found-with-method", {
        method: route.method
      });
    }
    const routeIndex = this._routes.get(route.method).indexOf(route);
    if (routeIndex > -1) {
      this._routes.get(route.method).splice(routeIndex, 1);
    } else {
      throw new WorkboxError("unregister-route-route-not-registered");
    }
  }
}
let defaultRouter;
const getOrCreateDefaultRouter = () => {
  if (!defaultRouter) {
    defaultRouter = new Router();
    defaultRouter.addFetchListener();
    defaultRouter.addCacheListener();
  }
  return defaultRouter;
};
function registerRoute(capture, handler, method) {
  let route;
  if (typeof capture === "string") {
    const captureUrl = new URL(capture, location.href);
    const matchCallback = ({ url }) => {
      return url.href === captureUrl.href;
    };
    route = new Route(matchCallback, handler, method);
  } else if (capture instanceof RegExp) {
    route = new RegExpRoute(capture, handler, method);
  } else if (typeof capture === "function") {
    route = new Route(capture, handler, method);
  } else if (capture instanceof Route) {
    route = capture;
  } else {
    throw new WorkboxError("unsupported-route-type", {
      moduleName: "workbox-routing",
      funcName: "registerRoute",
      paramName: "capture"
    });
  }
  const defaultRouter2 = getOrCreateDefaultRouter();
  defaultRouter2.registerRoute(route);
  return route;
}
function removeIgnoredSearchParams(urlObject, ignoreURLParametersMatching = []) {
  for (const paramName of [...urlObject.searchParams.keys()]) {
    if (ignoreURLParametersMatching.some((regExp) => regExp.test(paramName))) {
      urlObject.searchParams.delete(paramName);
    }
  }
  return urlObject;
}
function* generateURLVariations(url, { ignoreURLParametersMatching = [/^utm_/, /^fbclid$/], directoryIndex = "index.html", cleanURLs = true, urlManipulation } = {}) {
  const urlObject = new URL(url, location.href);
  urlObject.hash = "";
  yield urlObject.href;
  const urlWithoutIgnoredParams = removeIgnoredSearchParams(urlObject, ignoreURLParametersMatching);
  yield urlWithoutIgnoredParams.href;
  if (directoryIndex && urlWithoutIgnoredParams.pathname.endsWith("/")) {
    const directoryURL = new URL(urlWithoutIgnoredParams.href);
    directoryURL.pathname += directoryIndex;
    yield directoryURL.href;
  }
  if (cleanURLs) {
    const cleanURL = new URL(urlWithoutIgnoredParams.href);
    cleanURL.pathname += ".html";
    yield cleanURL.href;
  }
  if (urlManipulation) {
    const additionalURLs = urlManipulation({ url: urlObject });
    for (const urlToAttempt of additionalURLs) {
      yield urlToAttempt.href;
    }
  }
}
class PrecacheRoute extends Route {
  /**
   * @param {PrecacheController} precacheController A `PrecacheController`
   * instance used to both match requests and respond to fetch events.
   * @param {Object} [options] Options to control how requests are matched
   * against the list of precached URLs.
   * @param {string} [options.directoryIndex=index.html] The `directoryIndex` will
   * check cache entries for a URLs ending with '/' to see if there is a hit when
   * appending the `directoryIndex` value.
   * @param {Array<RegExp>} [options.ignoreURLParametersMatching=[/^utm_/, /^fbclid$/]] An
   * array of regex's to remove search params when looking for a cache match.
   * @param {boolean} [options.cleanURLs=true] The `cleanURLs` option will
   * check the cache for the URL with a `.html` added to the end of the end.
   * @param {workbox-precaching~urlManipulation} [options.urlManipulation]
   * This is a function that should take a URL and return an array of
   * alternative URLs that should be checked for precache matches.
   */
  constructor(precacheController2, options) {
    const match = ({ request }) => {
      const urlsToCacheKeys = precacheController2.getURLsToCacheKeys();
      for (const possibleURL of generateURLVariations(request.url, options)) {
        const cacheKey = urlsToCacheKeys.get(possibleURL);
        if (cacheKey) {
          const integrity = precacheController2.getIntegrityForCacheKey(cacheKey);
          return { cacheKey, integrity };
        }
      }
      return;
    };
    super(match, precacheController2.strategy);
  }
}
function addRoute(options) {
  const precacheController2 = getOrCreatePrecacheController();
  const precacheRoute = new PrecacheRoute(precacheController2, options);
  registerRoute(precacheRoute);
}
function getCacheKeyForURL(url) {
  const precacheController2 = getOrCreatePrecacheController();
  return precacheController2.getCacheKeyForURL(url);
}
function matchPrecache(request) {
  const precacheController2 = getOrCreatePrecacheController();
  return precacheController2.matchPrecache(request);
}
function precache(entries) {
  const precacheController2 = getOrCreatePrecacheController();
  precacheController2.precache(entries);
}
function precacheAndRoute(entries, options) {
  precache(entries);
  addRoute(options);
}
class NavigationRoute extends Route {
  /**
   * If both `denylist` and `allowlist` are provided, the `denylist` will
   * take precedence and the request will not match this route.
   *
   * The regular expressions in `allowlist` and `denylist`
   * are matched against the concatenated
   * [`pathname`]{@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/pathname}
   * and [`search`]{@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/search}
   * portions of the requested URL.
   *
   * *Note*: These RegExps may be evaluated against every destination URL during
   * a navigation. Avoid using
   * [complex RegExps](https://github.com/GoogleChrome/workbox/issues/3077),
   * or else your users may see delays when navigating your site.
   *
   * @param {workbox-routing~handlerCallback} handler A callback
   * function that returns a Promise resulting in a Response.
   * @param {Object} options
   * @param {Array<RegExp>} [options.denylist] If any of these patterns match,
   * the route will not handle the request (even if a allowlist RegExp matches).
   * @param {Array<RegExp>} [options.allowlist=[/./]] If any of these patterns
   * match the URL's pathname and search parameter, the route will handle the
   * request (assuming the denylist doesn't match).
   */
  constructor(handler, { allowlist = [/./], denylist = [] } = {}) {
    super((options) => this._match(options), handler);
    this._allowlist = allowlist;
    this._denylist = denylist;
  }
  /**
   * Routes match handler.
   *
   * @param {Object} options
   * @param {URL} options.url
   * @param {Request} options.request
   * @return {boolean}
   *
   * @private
   */
  _match({ url, request }) {
    if (request && request.mode !== "navigate") {
      return false;
    }
    const pathnameAndSearch = url.pathname + url.search;
    for (const regExp of this._denylist) {
      if (regExp.test(pathnameAndSearch)) {
        return false;
      }
    }
    if (this._allowlist.some((regExp) => regExp.test(pathnameAndSearch))) {
      return true;
    }
    return false;
  }
}
const cacheOkAndOpaquePlugin = {
  /**
   * Returns a valid response (to allow caching) if the status is 200 (OK) or
   * 0 (opaque).
   *
   * @param {Object} options
   * @param {Response} options.response
   * @return {Response|null}
   *
   * @private
   */
  cacheWillUpdate: async ({ response }) => {
    if (response.status === 200 || response.status === 0) {
      return response;
    }
    return null;
  }
};
class NetworkFirst extends Strategy {
  /**
   * @param {Object} [options]
   * @param {string} [options.cacheName] Cache name to store and retrieve
   * requests. Defaults to cache names provided by
   * {@link workbox-core.cacheNames}.
   * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
   * to use in conjunction with this caching strategy.
   * @param {Object} [options.fetchOptions] Values passed along to the
   * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
   * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
   * `fetch()` requests made by this strategy.
   * @param {Object} [options.matchOptions] [`CacheQueryOptions`](https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions)
   * @param {number} [options.networkTimeoutSeconds] If set, any network requests
   * that fail to respond within the timeout will fallback to the cache.
   *
   * This option can be used to combat
   * "[lie-fi]{@link https://developers.google.com/web/fundamentals/performance/poor-connectivity/#lie-fi}"
   * scenarios.
   */
  constructor(options = {}) {
    super(options);
    if (!this.plugins.some((p) => "cacheWillUpdate" in p)) {
      this.plugins.unshift(cacheOkAndOpaquePlugin);
    }
    this._networkTimeoutSeconds = options.networkTimeoutSeconds || 0;
  }
  /**
   * @private
   * @param {Request|string} request A request to run this strategy for.
   * @param {workbox-strategies.StrategyHandler} handler The event that
   *     triggered the request.
   * @return {Promise<Response>}
   */
  async _handle(request, handler) {
    const logs = [];
    const promises = [];
    let timeoutId;
    if (this._networkTimeoutSeconds) {
      const { id, promise } = this._getTimeoutPromise({ request, logs, handler });
      timeoutId = id;
      promises.push(promise);
    }
    const networkPromise = this._getNetworkPromise({
      timeoutId,
      request,
      logs,
      handler
    });
    promises.push(networkPromise);
    const response = await handler.waitUntil((async () => {
      return await handler.waitUntil(Promise.race(promises)) || // If Promise.race() resolved with null, it might be due to a network
      // timeout + a cache miss. If that were to happen, we'd rather wait until
      // the networkPromise resolves instead of returning null.
      // Note that it's fine to await an already-resolved promise, so we don't
      // have to check to see if it's still "in flight".
      await networkPromise;
    })());
    if (!response) {
      throw new WorkboxError("no-response", { url: request.url });
    }
    return response;
  }
  /**
   * @param {Object} options
   * @param {Request} options.request
   * @param {Array} options.logs A reference to the logs array
   * @param {Event} options.event
   * @return {Promise<Response>}
   *
   * @private
   */
  _getTimeoutPromise({ request, logs, handler }) {
    let timeoutId;
    const timeoutPromise = new Promise((resolve) => {
      const onNetworkTimeout = async () => {
        resolve(await handler.cacheMatch(request));
      };
      timeoutId = setTimeout(onNetworkTimeout, this._networkTimeoutSeconds * 1e3);
    });
    return {
      promise: timeoutPromise,
      id: timeoutId
    };
  }
  /**
   * @param {Object} options
   * @param {number|undefined} options.timeoutId
   * @param {Request} options.request
   * @param {Array} options.logs A reference to the logs Array.
   * @param {Event} options.event
   * @return {Promise<Response>}
   *
   * @private
   */
  async _getNetworkPromise({ timeoutId, request, logs, handler }) {
    let error;
    let response;
    try {
      response = await handler.fetchAndCachePut(request);
    } catch (fetchError) {
      if (fetchError instanceof Error) {
        error = fetchError;
      }
    }
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    if (error || !response) {
      response = await handler.cacheMatch(request);
    }
    return response;
  }
}
class NetworkOnly extends Strategy {
  /**
   * @param {Object} [options]
   * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
   * to use in conjunction with this caching strategy.
   * @param {Object} [options.fetchOptions] Values passed along to the
   * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
   * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
   * `fetch()` requests made by this strategy.
   * @param {number} [options.networkTimeoutSeconds] If set, any network requests
   * that fail to respond within the timeout will result in a network error.
   */
  constructor(options = {}) {
    super(options);
    this._networkTimeoutSeconds = options.networkTimeoutSeconds || 0;
  }
  /**
   * @private
   * @param {Request|string} request A request to run this strategy for.
   * @param {workbox-strategies.StrategyHandler} handler The event that
   *     triggered the request.
   * @return {Promise<Response>}
   */
  async _handle(request, handler) {
    let error = void 0;
    let response;
    try {
      const promises = [
        handler.fetch(request)
      ];
      if (this._networkTimeoutSeconds) {
        const timeoutPromise = timeout(this._networkTimeoutSeconds * 1e3);
        promises.push(timeoutPromise);
      }
      response = await Promise.race(promises);
      if (!response) {
        throw new Error(`Timed out the network response after ${this._networkTimeoutSeconds} seconds.`);
      }
    } catch (err) {
      if (err instanceof Error) {
        error = err;
      }
    }
    if (!response) {
      throw new WorkboxError("no-response", { url: request.url, error });
    }
    return response;
  }
}
self.__WB_DISABLE_DEV_LOGS = true;
importScripts("sw-runtime-resources-precache.js");
self.skipWaiting();
clientsClaim();
let manifestEntries = [{ "url": ".", "revision": "8172a8bed57243019cb987df845e416c" }, { "url": "VAADIN/build/abap-CQhWkCV4.js", "revision": "482a86da34e00ff9e6a38a929e52f8b4" }, { "url": "VAADIN/build/abc-BfAayo3i.js", "revision": "8ab675f078c57a7c67253eed337fa516" }, { "url": "VAADIN/build/actionscript-Cuppree9.js", "revision": "494bf389f06fc6b857e85c0b99128ab4" }, { "url": "VAADIN/build/ada-D6MlU_LM.js", "revision": "e01bd4c6d74517deb09113fca8661725" }, { "url": "VAADIN/build/alda-hkSvCfHF.js", "revision": "bfc68f44c482a40373fbf1e87a993b65" }, { "url": "VAADIN/build/apache_conf-C1JGWQSL.js", "revision": "d19d8fe5aa6ff1b6a07cfb55e3492f7c" }, { "url": "VAADIN/build/apex-DnWQPykR.js", "revision": "e18c4a92a678a947084217646d7e858a" }, { "url": "VAADIN/build/applescript-PniTTyxH.js", "revision": "1e17b8e819dacfce284ded17c25e58e7" }, { "url": "VAADIN/build/aql-u5s1XnSJ.js", "revision": "3fb3b79a5a6b394182a4749be6243be4" }, { "url": "VAADIN/build/asciidoc-BAirR055.js", "revision": "c02269d9e674152ba6078f6c4d3e8a2c" }, { "url": "VAADIN/build/asl-DkuHnmc9.js", "revision": "e0ea75c04c8b45286b1db174aa5d64d3" }, { "url": "VAADIN/build/assembly_x86-DztwdwUp.js", "revision": "b791a06a431ddfa8a36a791d15ad1fc1" }, { "url": "VAADIN/build/autohotkey-0qs8wFyF.js", "revision": "805eaa705c6e344a5224c9c1214321f7" }, { "url": "VAADIN/build/batchfile-DcOqQ-ww.js", "revision": "12690ebbff402c7fee78ba0b1bfc5216" }, { "url": "VAADIN/build/bibtex-BHhwEYXE.js", "revision": "014d33e8fe69e18db1f03b5c380932d6" }, { "url": "VAADIN/build/c_cpp-CmdSM_9g.js", "revision": "c8e27d0459a9b089a00ac2ffde15fdb5" }, { "url": "VAADIN/build/c9search-DFMF04ol.js", "revision": "7ff529f99e8ce0397fd6c920b84eec5b" }, { "url": "VAADIN/build/cirru-hAwxA3-n.js", "revision": "02095bbd7b7cd7bf848ac895ef419046" }, { "url": "VAADIN/build/clojure--o2Mh2js.js", "revision": "246c1761234a8840c9b362227c628a9c" }, { "url": "VAADIN/build/cobol-BON2izTO.js", "revision": "105e2af74bbab96567d836608471c86c" }, { "url": "VAADIN/build/coffee-IYVS36aL.js", "revision": "664a8a5a9921da91cfc0a546cb10d07c" }, { "url": "VAADIN/build/coldfusion-AdqPAIZp.js", "revision": "7097864cad7943d878d5617be5af0886" }, { "url": "VAADIN/build/crystal-CT9yA7A0.js", "revision": "116467f60ddae90f4683744530c97389" }, { "url": "VAADIN/build/csharp-BWfpcYSw.js", "revision": "9aa092f6441f0d5cf0502bf7c740c13d" }, { "url": "VAADIN/build/csound_document-BGozi3rh.js", "revision": "3cf66e26953fe74b61cd0692e30e9a7d" }, { "url": "VAADIN/build/csound_orchestra-BibuxuIJ.js", "revision": "db6b4fb78f0f490f944a9b5da5193947" }, { "url": "VAADIN/build/csound_score-BrLpjMdU.js", "revision": "bdda5ece36425b1fd8fa3040d7293afc" }, { "url": "VAADIN/build/csp-DeuO0he9.js", "revision": "689378a97350d212fde7be2a84d3d05f" }, { "url": "VAADIN/build/css-CLJCjoXu.js", "revision": "ba4661e5133db7710fdf8b58b2335a4e" }, { "url": "VAADIN/build/curly-BFoQ8u9P.js", "revision": "e971c7ae81e7b5113ebbf640b86e8a58" }, { "url": "VAADIN/build/d-IO0B_rHl.js", "revision": "f052d2bc139dbab9149d762b74222bab" }, { "url": "VAADIN/build/dart-rc5TPtqO.js", "revision": "2d9e98de776896b977004b0de166d28d" }, { "url": "VAADIN/build/diff-UA8cwyxX.js", "revision": "d05d2cdc2b09dad2cf5ac31c2b7174f2" }, { "url": "VAADIN/build/django-DPjfoJwD.js", "revision": "9efd09775e3c4e411d9430e21ccdbbdc" }, { "url": "VAADIN/build/dockerfile-BqMerw18.js", "revision": "265f3d6470099c895b454e20f1437083" }, { "url": "VAADIN/build/dot-D8eFie3Q.js", "revision": "424c22eac1fab42db16b7655540121d1" }, { "url": "VAADIN/build/drools-DLXJ7RXg.js", "revision": "fb76cf3b17c81e54718e6dd21f75e82c" }, { "url": "VAADIN/build/edifact-VCkPDO08.js", "revision": "a21f9fe138ce5245abdc844cee0c8115" }, { "url": "VAADIN/build/eiffel-DxbzGXMy.js", "revision": "da0d8959d1c247183659a2e5409bf88d" }, { "url": "VAADIN/build/ejs-wc9MGPoq.js", "revision": "9231562eed79858a2229726e3a3c0e97" }, { "url": "VAADIN/build/elixir-C2kM8AnP.js", "revision": "0c06870acb971233a966214d3976d757" }, { "url": "VAADIN/build/elm-BelFdgDD.js", "revision": "29edb6ebdae60e6783e4d797a263236a" }, { "url": "VAADIN/build/erlang-7NH2Zi78.js", "revision": "147cf8d4fecc09684f702ad4a4655ed5" }, { "url": "VAADIN/build/ext-beautify-Bl4UIYY5.js", "revision": "7913f261a5a4cce7a5f42486b021dd60" }, { "url": "VAADIN/build/ext-code_lens-zp_Jrd7O.js", "revision": "bc95e9c5be7bb542c3de58a198e277a9" }, { "url": "VAADIN/build/ext-elastic_tabstops_lite-CrQnS-0b.js", "revision": "c19c92ea452041cfe02ba3184c6902a7" }, { "url": "VAADIN/build/ext-emmet-Bn0dJKy_.js", "revision": "8a139c3e98a05e9b6c135620aabdc96a" }, { "url": "VAADIN/build/ext-error_marker-CAzFsJI_.js", "revision": "720caeacadb5552f4900cff878337faa" }, { "url": "VAADIN/build/ext-hardwrap-DSIYQwtL.js", "revision": "587b8fe71041d4d2c61ce6515d741340" }, { "url": "VAADIN/build/ext-inline_autocomplete-DwGtl8eG.js", "revision": "169216cd018fefdfa975056dec0166dd" }, { "url": "VAADIN/build/ext-keybinding_menu-uRMSgB8q.js", "revision": "5e00863f3887bddd6d8b5ad48bcafeea" }, { "url": "VAADIN/build/ext-language_tools-DFH2SkEI.js", "revision": "3020507d233f7e75c78eaaff63d26f7f" }, { "url": "VAADIN/build/ext-linking-BqFt5Kos.js", "revision": "2df990c398acc1786cce1fc6b404efc3" }, { "url": "VAADIN/build/ext-modelist-DNZrndZC.js", "revision": "5aacc06bb1654433675a2f4f0be057b1" }, { "url": "VAADIN/build/ext-options-DH68X38J.js", "revision": "ab31d3503ae45501fe4a35f65f8b9284" }, { "url": "VAADIN/build/ext-prompt-BQXOgj1V.js", "revision": "9d23f6a1e7ee02aa686144937f076ba6" }, { "url": "VAADIN/build/ext-rtl-CmeILOCo.js", "revision": "32be56919b09f2ae853a625d296247e1" }, { "url": "VAADIN/build/ext-searchbox-C8IgkQnQ.js", "revision": "448d88c0d7e5551ed89f4af74b9f5368" }, { "url": "VAADIN/build/ext-settings_menu-DJEG3xpi.js", "revision": "3d1f8af06c0f1cd845a4581ecba113f8" }, { "url": "VAADIN/build/ext-spellcheck-DFyiTaub.js", "revision": "917c0d5306f71244aebe885aec668161" }, { "url": "VAADIN/build/ext-split-BpzoqkDt.js", "revision": "203947e24f47bc42146824fce0cc28d2" }, { "url": "VAADIN/build/ext-static_highlight-C_r6naN9.js", "revision": "9a8f46b9a146e5543e9f843cf78446e0" }, { "url": "VAADIN/build/ext-statusbar-D5OGo5Ax.js", "revision": "cd36486d447b303bd209375a98a01c23" }, { "url": "VAADIN/build/ext-textarea-BxA4uTdl.js", "revision": "b4d28979c374708678d2744c32c82fdb" }, { "url": "VAADIN/build/ext-themelist-BIxMEYMP.js", "revision": "6150478a94f50734aa2027f5551c5141" }, { "url": "VAADIN/build/ext-whitespace-qL81zKpG.js", "revision": "232f430990c37825badae7877bf46c4e" }, { "url": "VAADIN/build/FlowBootstrap-BStXjIWo.js", "revision": "96ef8de8a8f605c3d8b92695f797601d" }, { "url": "VAADIN/build/FlowClient-47MUjvEM.js", "revision": "68c7b762c4070e839b3297c446747fd6" }, { "url": "VAADIN/build/forth-DgBVs0hr.js", "revision": "676711f429fcab0e4909151059edcdec" }, { "url": "VAADIN/build/fortran-DKbJdWGT.js", "revision": "8e766d0c09994a0c5f6e789dcf51a6be" }, { "url": "VAADIN/build/fsharp-DY4e83J1.js", "revision": "4e9b72b336a2c9654c322389455e9826" }, { "url": "VAADIN/build/fsl-BTiGTgyX.js", "revision": "34aca1c30663cc3be4581c0f9531aa1e" }, { "url": "VAADIN/build/ftl-C02zuJaO.js", "revision": "23f81f0897192a94c0b9aad35d139eff" }, { "url": "VAADIN/build/gcode-CtNeyaSb.js", "revision": "2b16cc8edcd89cc87c2cce2e15489234" }, { "url": "VAADIN/build/generated-flow-imports-cyFHOmt-.js", "revision": "64a6a2ad895bdbdf4a28a8809a81e97a" }, { "url": "VAADIN/build/gherkin-B-Hfwwf3.js", "revision": "8a7fbeb78684cc9fe0b06dfac534ee9e" }, { "url": "VAADIN/build/gitignore-BpWXbyQD.js", "revision": "978593b7340383afe5d015226e677c6c" }, { "url": "VAADIN/build/glsl-Dp15ygTb.js", "revision": "5a9128b9c24b6776c252becde544ccbf" }, { "url": "VAADIN/build/gobstones-Cox5jR5a.js", "revision": "2e38940d409ce57aac31d493b49376f5" }, { "url": "VAADIN/build/golang-C6U3A_-s.js", "revision": "de755f4cb03bb2a55ba63294380940f0" }, { "url": "VAADIN/build/graphqlschema-CYS1Lngd.js", "revision": "8668b3d90ca83870595aa80eb56d8044" }, { "url": "VAADIN/build/groovy-BhZJ63V7.js", "revision": "b2a3c2419ab8c5764cdee144c893b385" }, { "url": "VAADIN/build/haml-BMMJJnWW.js", "revision": "55041ce682c781f879a3f7f804d9c54f" }, { "url": "VAADIN/build/handlebars-BkdwWSgU.js", "revision": "b72ddaaacd64fc98f117834a154ceb3d" }, { "url": "VAADIN/build/haskell_cabal-doFSj8nr.js", "revision": "b48623825ba485712cd04e1b73ede313" }, { "url": "VAADIN/build/haskell-CDLXUlZN.js", "revision": "ee6660f194d59ac1ff8fb777af5a7a98" }, { "url": "VAADIN/build/haxe-Dw5dtnqV.js", "revision": "325a568768038bc444ecb113c2337f63" }, { "url": "VAADIN/build/hjson-DauMxlhg.js", "revision": "c1090f0b94b83f8098b5581b3dd6428c" }, { "url": "VAADIN/build/html_elixir-B8UgqQwk.js", "revision": "f9a9266f7173bcb9ad0ab559e97b6922" }, { "url": "VAADIN/build/html_ruby-v3BRHgTn.js", "revision": "b13eca66e240eedfab589e6cabf46573" }, { "url": "VAADIN/build/html-bmxSy6kQ.js", "revision": "db34656f5f58506fa754474c9e8a99bb" }, { "url": "VAADIN/build/indexhtml-CZN4FFew.js", "revision": "fac4e91e23a6113b26028f79ca470b79" }, { "url": "VAADIN/build/ini-DiWylNnH.js", "revision": "f23672cf9accbfd390da3ef2b0e59042" }, { "url": "VAADIN/build/io-B2cu-2tn.js", "revision": "0edbc2dd5fa3c6b4a287d35ced16cbe4" }, { "url": "VAADIN/build/ion-iWok6I8c.js", "revision": "cfaf7e4d5f79d8dc3cafc49d2f50b694" }, { "url": "VAADIN/build/jack-DPdeTx63.js", "revision": "7b3852408ae6083e8c0f22cb60123311" }, { "url": "VAADIN/build/jade-CDFpDcYN.js", "revision": "226ebcfa77ef21d573fd04f0cdb7b66e" }, { "url": "VAADIN/build/java-3PHpNCdL.js", "revision": "bcc42a24ba6335e19b2ca872925889d3" }, { "url": "VAADIN/build/javascript-CWVHIP20.js", "revision": "a4fac1bf323ac722976db0061d84bc11" }, { "url": "VAADIN/build/jexl-BWjtZmpK.js", "revision": "653bcb9d0d38bcc51d2c736b345b1384" }, { "url": "VAADIN/build/json-CYohFWLo.js", "revision": "a140cbe0e1b620401d1ca9128fb1b688" }, { "url": "VAADIN/build/json5-KDH9oCu5.js", "revision": "15bdc1023de5f0df37907cf9453fa4a7" }, { "url": "VAADIN/build/jsoniq-Ca1bfrSw.js", "revision": "7547a1739a03f46359eb9ab751e24105" }, { "url": "VAADIN/build/jsp-BIt8daSL.js", "revision": "c2309ad5adae81e00a054f4437edc79c" }, { "url": "VAADIN/build/jssm-HPTGlaO-.js", "revision": "f7ab5e68e6f6fbe442fb649429935bd4" }, { "url": "VAADIN/build/jsx-BNhmvr7z.js", "revision": "c6270946552f5e1a2d395cd89d6ea40d" }, { "url": "VAADIN/build/julia-BMAgGfcy.js", "revision": "b9437389ee413e8a6cc9805c7e482051" }, { "url": "VAADIN/build/keybinding-emacs-BR869GU8.js", "revision": "4dbeb36105d5bb9bd5d8a7c26437a1b9" }, { "url": "VAADIN/build/keybinding-sublime-BiXnYQp1.js", "revision": "df4ccbe8185d2313d2cd55b9b63e494e" }, { "url": "VAADIN/build/keybinding-vim-M9v5ztZu.js", "revision": "3ac114223d608382d6056d71748f46b6" }, { "url": "VAADIN/build/keybinding-vscode-BlTmeuWD.js", "revision": "85c9a4479fd7d95da779bd69f801303d" }, { "url": "VAADIN/build/kotlin-no9dsc7D.js", "revision": "7557381e12b7dd7d3a1143ac71102699" }, { "url": "VAADIN/build/latex-BrxTPUOz.js", "revision": "965f0e1432c531df01992001b496e64f" }, { "url": "VAADIN/build/latte-dFEJ5RgG.js", "revision": "46b4bf65ee04192dae6c06cf2709fc0f" }, { "url": "VAADIN/build/less-Bq7fb7SI.js", "revision": "99145dfa425ee73e54d6d04f950b998b" }, { "url": "VAADIN/build/liquid-C5iBz_l3.js", "revision": "21eac6864504dffb7a81473423af8b3d" }, { "url": "VAADIN/build/lisp-ZzQ4RoYv.js", "revision": "1fdd9787f2f76a94d394a59e3e767c96" }, { "url": "VAADIN/build/livescript-rLNVjXZu.js", "revision": "750ca7552d7a0f6af74ac06669dd7c9f" }, { "url": "VAADIN/build/logiql-D0PXcPYz.js", "revision": "eaa026bff5fac7dd3853b62d7226c42c" }, { "url": "VAADIN/build/logtalk-CZSrWBTB.js", "revision": "b90e45676f9a85000a18c77f65b6f0ba" }, { "url": "VAADIN/build/lsl-Dcc6jqQw.js", "revision": "d3c7fd1d38f99ce5c9bffb0c362843de" }, { "url": "VAADIN/build/lua-B0WUwTJ8.js", "revision": "99c98f25fcf5a0c314f7502e6fc13cc2" }, { "url": "VAADIN/build/luapage-BzNxbsQs.js", "revision": "fdcc4c67c79f3ce1f77bc1b8846650d7" }, { "url": "VAADIN/build/lucene-D0lV7Q-Y.js", "revision": "2d1650a03c957e0223ab068c71d6bac6" }, { "url": "VAADIN/build/makefile-CS8UTZwe.js", "revision": "2bf882d7fb50ad5c68b04c151416dc53" }, { "url": "VAADIN/build/markdown-C_RrYBd9.js", "revision": "34c12341af4a96e722e1b9c1dfd21c30" }, { "url": "VAADIN/build/mask-CB6YpQQf.js", "revision": "3e91c2c8a37de11a1c64171dc43dda62" }, { "url": "VAADIN/build/matlab-BOC7Ig2j.js", "revision": "3985949620fccd823e4480af2d64b174" }, { "url": "VAADIN/build/maze-BzM7hSGX.js", "revision": "e3025f80048d1d6d9484874819e537e3" }, { "url": "VAADIN/build/mediawiki-DkN3iI2P.js", "revision": "de5886bcd40562affe4970249468ae27" }, { "url": "VAADIN/build/mel-D1t7wsxx.js", "revision": "edbf4ade80a953af22570b6d2313df0e" }, { "url": "VAADIN/build/mips-BMfttEm0.js", "revision": "ad9f99ae3e7efa9f61eea2a286cdccea" }, { "url": "VAADIN/build/mixal-8CvOb139.js", "revision": "90a8cf7d1af31811b7529d45487c7989" }, { "url": "VAADIN/build/mode-abap-LSMRErxv.js", "revision": "b0b1f05d34e3b0c979fcd5472c2e86b8" }, { "url": "VAADIN/build/mode-abc-CDanRr3a.js", "revision": "55c94c490391b5e14b6b8479af2616b2" }, { "url": "VAADIN/build/mode-actionscript-khiSETbt.js", "revision": "9732ece2a61a2c4f27bf6547edee55f8" }, { "url": "VAADIN/build/mode-ada-IplFx3CU.js", "revision": "c4bac50764fbe85c06d0523f05c3a20f" }, { "url": "VAADIN/build/mode-alda-BmwQeGV3.js", "revision": "45f5164c30b36ce551910ed5ac8cdad5" }, { "url": "VAADIN/build/mode-apache_conf-CJlK_IyE.js", "revision": "f6f2e39b4ec1ffb790c4c955ec13d0c5" }, { "url": "VAADIN/build/mode-apex-C-aOJYP7.js", "revision": "3749dd57bce18f7da92a66b1e6d0bc27" }, { "url": "VAADIN/build/mode-applescript-D1mK8Y3_.js", "revision": "517e327e8d3f7e7b72f661cf8762913d" }, { "url": "VAADIN/build/mode-aql-CKZZsFHp.js", "revision": "290b6997c3693a8bb9af8d1fb1f88cdd" }, { "url": "VAADIN/build/mode-asciidoc-DNlO5PUQ.js", "revision": "d341d77b0fbe684df6ba1f286e6eca9d" }, { "url": "VAADIN/build/mode-asl-D2dec_se.js", "revision": "4da6f2a5abfe517305bd894f33b5fab3" }, { "url": "VAADIN/build/mode-assembly_x86-DVRgqhKn.js", "revision": "2b4b2f00742112928490ababed58a0ec" }, { "url": "VAADIN/build/mode-autohotkey-ZqZEUwrb.js", "revision": "9a0146120831563746a4f11ed9bd387f" }, { "url": "VAADIN/build/mode-batchfile-BXiIlRyN.js", "revision": "174972da485766539f93fd965cb609ad" }, { "url": "VAADIN/build/mode-bibtex-gm_TFOfw.js", "revision": "5ca5118b6371133c3c80803978c00b2d" }, { "url": "VAADIN/build/mode-c_cpp-D4neFh6p.js", "revision": "89683ca3ee547526c1f639f3f5f03bf2" }, { "url": "VAADIN/build/mode-c9search-BKLdkY_g.js", "revision": "16e100b52702a889b3a12b8aa32d1951" }, { "url": "VAADIN/build/mode-cirru-CdJLKWVT.js", "revision": "0af32f8cf3dc2ec062d35e8f395f72e2" }, { "url": "VAADIN/build/mode-clojure-rUKfUuiJ.js", "revision": "d929339d5f50489e4d9a8571f2cd56e6" }, { "url": "VAADIN/build/mode-cobol-CXLapLJ6.js", "revision": "2fe28fd98ba40685ea50144ef3f9c370" }, { "url": "VAADIN/build/mode-coffee-CiYtcywu.js", "revision": "cd03624c0423e9166ed399e3efaf2212" }, { "url": "VAADIN/build/mode-coldfusion-Edzt-NEx.js", "revision": "200b71d59c5aeefe34e0382d17c1634a" }, { "url": "VAADIN/build/mode-crystal-DlA--ws9.js", "revision": "0a311017265b2a90f8ed15852f099b51" }, { "url": "VAADIN/build/mode-csharp-Dxp_xjf0.js", "revision": "7c4f50a2626033274d344229e7c56cd4" }, { "url": "VAADIN/build/mode-csound_document-Cm4xtRuM.js", "revision": "5279f9ef327f9078c69e9891a218d192" }, { "url": "VAADIN/build/mode-csound_orchestra-gbCzylHM.js", "revision": "d84c1aa0c9df00441c10ff2376fb4609" }, { "url": "VAADIN/build/mode-csound_score-CyZcOBOB.js", "revision": "51c99271258b6bab925ad67a5b9fa5cf" }, { "url": "VAADIN/build/mode-csp-oJWtA2Nd.js", "revision": "34aa7a2f051915e5532b2494ea779b2b" }, { "url": "VAADIN/build/mode-css-dS99lnbd.js", "revision": "d0a9b2d67c371681c485480f20eea856" }, { "url": "VAADIN/build/mode-curly-dpmpq_tL.js", "revision": "df98e2ac53d8cadaaf239f200ebc60dd" }, { "url": "VAADIN/build/mode-d-D0pm-P23.js", "revision": "c1b719372e1b821ae8961f9a5416f855" }, { "url": "VAADIN/build/mode-dart-bCQ-FLFx.js", "revision": "0888b8dfea7c31d4a602d40fe536f141" }, { "url": "VAADIN/build/mode-diff-DBn-n86z.js", "revision": "192a262980808144e0d4b339f3a78448" }, { "url": "VAADIN/build/mode-django-DMf23lm1.js", "revision": "e0362a3e5e75cc8b5ddfb1b8748b0514" }, { "url": "VAADIN/build/mode-dockerfile-DtDfbegM.js", "revision": "6fcc84a300527dca5c491223fdc6d73c" }, { "url": "VAADIN/build/mode-dot-Clbk1dCa.js", "revision": "958b209a487cf2b6cd36ba2e3891b118" }, { "url": "VAADIN/build/mode-drools-ByCYeWTT.js", "revision": "af8adbf3022c2f3b7593cd34bdf22914" }, { "url": "VAADIN/build/mode-edifact-C4SIh0YJ.js", "revision": "0baefef0ab37f36bcc07f4b03f609d5e" }, { "url": "VAADIN/build/mode-eiffel-6yKKw0kg.js", "revision": "8eadb48ff3ba3fabbd1fa0090b72842d" }, { "url": "VAADIN/build/mode-ejs-CvuYO0A0.js", "revision": "6e72c46ee1f129d1f971f0034355e091" }, { "url": "VAADIN/build/mode-elixir-Cn0cRNR2.js", "revision": "e9619f5604e2ead39aa88c415483d853" }, { "url": "VAADIN/build/mode-elm-eGwZtfgr.js", "revision": "f14e0a571e955f529aa70725c752aff2" }, { "url": "VAADIN/build/mode-erlang-CwKOYcK5.js", "revision": "aad548f72ad8399aa319d494275e9d95" }, { "url": "VAADIN/build/mode-forth-DL8cTaG3.js", "revision": "0387c5a820361d62aa84030fbf86f146" }, { "url": "VAADIN/build/mode-fortran-DJD3hEjZ.js", "revision": "06e2d3598eaf802dfcfa202d66a1546c" }, { "url": "VAADIN/build/mode-fsharp-DLwWaKjV.js", "revision": "08f2349545b421e37ff8b4910655b5d6" }, { "url": "VAADIN/build/mode-fsl-BilXBZyx.js", "revision": "fa7c7b912a21dcd6b4de6f91a4a8b8c2" }, { "url": "VAADIN/build/mode-ftl-C0dzUVrC.js", "revision": "cbae9e4a120c8a3dbe1f6b9a512118bf" }, { "url": "VAADIN/build/mode-gcode-DDtrDQrc.js", "revision": "75acff9b51a80060fcd8f74755fda334" }, { "url": "VAADIN/build/mode-gherkin-q84r3Jns.js", "revision": "8e13dd6325cfce0c6704acba70e8bbe7" }, { "url": "VAADIN/build/mode-gitignore-DXE9JgpS.js", "revision": "2dfaaebf78b3f16252602a691b8bf72a" }, { "url": "VAADIN/build/mode-glsl-DD8dklnZ.js", "revision": "df4bd3de58fde399e45e269d795d25e2" }, { "url": "VAADIN/build/mode-gobstones-u9aK6veD.js", "revision": "2c15f399cc1d7a3d0cbed2c77eb6cdeb" }, { "url": "VAADIN/build/mode-golang-RcvKWYaA.js", "revision": "e85363919fb5ccabcf7a3c8867cedf78" }, { "url": "VAADIN/build/mode-graphqlschema-DOvOuz_7.js", "revision": "172d584180e7c5960b96ce306d6f6914" }, { "url": "VAADIN/build/mode-groovy-Ba2YkjJ0.js", "revision": "cd5c322b713fcb04565ee4f71625de85" }, { "url": "VAADIN/build/mode-haml-uzJDn9qj.js", "revision": "94aac3ee5970a1abfb00e59310231773" }, { "url": "VAADIN/build/mode-handlebars-DavDL8Lv.js", "revision": "fd9127af2d15e78c9583f9d4dd6478bb" }, { "url": "VAADIN/build/mode-haskell_cabal-BB3ZFDf_.js", "revision": "fb545e579d81439439ebe640e69c05b9" }, { "url": "VAADIN/build/mode-haskell-S6L4gaK9.js", "revision": "6b376aa7ee7dc9a78b61b5997cbcc866" }, { "url": "VAADIN/build/mode-haxe-BC7J2kmd.js", "revision": "8ff29bb916fbbaef82b12ebf0774f385" }, { "url": "VAADIN/build/mode-hjson-BqpqDAb2.js", "revision": "82ebfad74441ce0ed7bc8ab8af389b46" }, { "url": "VAADIN/build/mode-html_elixir-Dt1TS-pM.js", "revision": "8c07f1cbb95d87d069647cf6e2399178" }, { "url": "VAADIN/build/mode-html_ruby-CF9krD16.js", "revision": "48587294e7b51b60af9924fa441dbab4" }, { "url": "VAADIN/build/mode-html-BEo135UA.js", "revision": "b13eec1946b15e5639b03b3db685cfef" }, { "url": "VAADIN/build/mode-ini-BvIaj1JX.js", "revision": "e3deb91c179771730eac6e960b65afbd" }, { "url": "VAADIN/build/mode-io-BI4VZhIM.js", "revision": "f9cd116ab89258f474efda993a012d06" }, { "url": "VAADIN/build/mode-ion--qLLW0c5.js", "revision": "64017fe5a32f8542c2bdbdb78bef3e95" }, { "url": "VAADIN/build/mode-jack-BeLCS0r2.js", "revision": "9e1dd601f918e70697483a6c996afc43" }, { "url": "VAADIN/build/mode-jade-eiwFEdml.js", "revision": "c1e1a08a70a888480b6a90478f764d5c" }, { "url": "VAADIN/build/mode-java-Cp3KyZeJ.js", "revision": "bcfd807d23b43a71117eb9e0058d1b86" }, { "url": "VAADIN/build/mode-javascript-Cm4Irm3G.js", "revision": "d3c55e84632c17267c39131b8fa23208" }, { "url": "VAADIN/build/mode-jexl-DJ2OgJm1.js", "revision": "84d36b4e1c52ba1664ae845cd362f0d2" }, { "url": "VAADIN/build/mode-json-DtVhm52p.js", "revision": "883c47d39c7143055902189e2dac3797" }, { "url": "VAADIN/build/mode-json5-Couygxmo.js", "revision": "ce02ef90c765377237fc8df868b11ee0" }, { "url": "VAADIN/build/mode-jsoniq-DqKjQw4O.js", "revision": "edc57bcd5f18c38b8f77de4f02a435f1" }, { "url": "VAADIN/build/mode-jsp-BGFt4x-7.js", "revision": "de40a98210ad0ad85ffe102e1dd8359a" }, { "url": "VAADIN/build/mode-jssm-DqOIIn4c.js", "revision": "38c80006dbfd306120cd64c06c9981bf" }, { "url": "VAADIN/build/mode-jsx-B6xW1X2s.js", "revision": "c647b89e46ba41153064a846c09e8b06" }, { "url": "VAADIN/build/mode-julia-DET3zi82.js", "revision": "684f27c9f079c89cf25dac16c2de81b1" }, { "url": "VAADIN/build/mode-kotlin-CpW-msFb.js", "revision": "56c5c491d3be446a1b5b26bed0ce1ecb" }, { "url": "VAADIN/build/mode-latex-BG-tPzKc.js", "revision": "d2cc8ce5387a95cdc7683a910a32c277" }, { "url": "VAADIN/build/mode-latte-q0-NGoJf.js", "revision": "442a3c3c343b948a8d6b03ea0a32bca0" }, { "url": "VAADIN/build/mode-less-C44BTWFo.js", "revision": "097c11e3ca888f649bc92a3f1df7110b" }, { "url": "VAADIN/build/mode-liquid-BNhkbWSh.js", "revision": "33747355e4aa8d7b269914ce44e9f90e" }, { "url": "VAADIN/build/mode-lisp-3qwd8y9E.js", "revision": "4c277104fbe537d09697a3778f508996" }, { "url": "VAADIN/build/mode-livescript-CFk-V1ZU.js", "revision": "ab6e15408396c54c29942d171f34f015" }, { "url": "VAADIN/build/mode-logiql-CLT7cUJZ.js", "revision": "17aab2558acdaa209adb19d1b7a245b6" }, { "url": "VAADIN/build/mode-logtalk-CDzvQe0x.js", "revision": "b8b5e2dc1ef7a5d9348547f483ca7476" }, { "url": "VAADIN/build/mode-lsl-CE0w2XMe.js", "revision": "92c86ce531bd4b268cd740ee03d19a06" }, { "url": "VAADIN/build/mode-lua-CVWuXvXd.js", "revision": "dc510afbc8a45778fa2a881c61635b09" }, { "url": "VAADIN/build/mode-luapage-BYqCxhad.js", "revision": "99b05f766fd8ac7111bf44ccee343c55" }, { "url": "VAADIN/build/mode-lucene-Cw17_w6Z.js", "revision": "4630b1ada91a5c59c18723d05af6ea9b" }, { "url": "VAADIN/build/mode-makefile-BoRmhmzp.js", "revision": "c3e188397a764e17e342a3fa1d41bc11" }, { "url": "VAADIN/build/mode-markdown-B2XghzYv.js", "revision": "d181b2bf26c961d127d475ed347b01e1" }, { "url": "VAADIN/build/mode-mask-CpN_KRZr.js", "revision": "45219839308c79e1788d02b6085df606" }, { "url": "VAADIN/build/mode-matlab-CBKjego4.js", "revision": "18361833da486bdd1cb37dca84c577e3" }, { "url": "VAADIN/build/mode-maze-BFN3jsBf.js", "revision": "3436479559e831cc4b44e814c8825e74" }, { "url": "VAADIN/build/mode-mediawiki-IU1xZ63R.js", "revision": "82e416495a1644d6d20305f52071791b" }, { "url": "VAADIN/build/mode-mel-D9NLbYxZ.js", "revision": "bd99af0a4d4279bd1af56cc11f982f47" }, { "url": "VAADIN/build/mode-mips-DE2sEAgX.js", "revision": "e6e71eaf260bb4688f3b8b35f3dd1940" }, { "url": "VAADIN/build/mode-mixal-Dwgbqb_v.js", "revision": "ba467cf0e7b71eb92d37ec1b5e9a723d" }, { "url": "VAADIN/build/mode-mushcode-CicMRKIp.js", "revision": "bd197af19166681707793ab096069b5a" }, { "url": "VAADIN/build/mode-mysql-BP-wg6zx.js", "revision": "069891a274dbf0a82add0690689bb485" }, { "url": "VAADIN/build/mode-nginx-D0YbYZCU.js", "revision": "382b73a7dba5e7b8411dbbe40c435ad6" }, { "url": "VAADIN/build/mode-nim-Dqr72uyZ.js", "revision": "48a7df0b8918accf2a77367d6c9a39b0" }, { "url": "VAADIN/build/mode-nix-DJE8iMFW.js", "revision": "4cd5f55f63253cb52bd0777a940510e3" }, { "url": "VAADIN/build/mode-nsis-BHZEBVHW.js", "revision": "3f9c4c6c398bd43f5af6c8312b3e8075" }, { "url": "VAADIN/build/mode-nunjucks-x8e3KZHF.js", "revision": "be323d23a55210a9f19668247ace26bd" }, { "url": "VAADIN/build/mode-objectivec-BgtLGhv_.js", "revision": "e0dc329e299459106c150e71ac2c65bf" }, { "url": "VAADIN/build/mode-ocaml-ZCcGQ6Wj.js", "revision": "ae622d2089baaf4c4f4563f27d2dc191" }, { "url": "VAADIN/build/mode-partiql-BUU7XgnZ.js", "revision": "35907ebaaaa5a3afde161865a088ad1b" }, { "url": "VAADIN/build/mode-pascal-DLuHWSq-.js", "revision": "35be24850bdfbad586385fe13d6d9992" }, { "url": "VAADIN/build/mode-perl-DQRC-I8H.js", "revision": "76b09995571e918b60e718eb6f933455" }, { "url": "VAADIN/build/mode-pgsql-Dj_unk-M.js", "revision": "7535cb680dd9e740d59d604c34de9bec" }, { "url": "VAADIN/build/mode-php_laravel_blade-Bmz4uMZZ.js", "revision": "0006c90bc7291396e23dfd3d5be12044" }, { "url": "VAADIN/build/mode-php-CHVKVMdm.js", "revision": "7c0c9fee9ef1a381cca05a57944cd2b4" }, { "url": "VAADIN/build/mode-pig-BsZ7O_lo.js", "revision": "7e6c674f0ef524cdf103feeae5acf950" }, { "url": "VAADIN/build/mode-plain_text-cYfsD50R.js", "revision": "15331ae8b55fbfd2865b24f8f384165b" }, { "url": "VAADIN/build/mode-plsql-BkkwDk4R.js", "revision": "c634726eb4bbfe4c417d78268e842db4" }, { "url": "VAADIN/build/mode-powershell-BC1jfTxL.js", "revision": "88dc068da6d31175e1bf20770eab9eb2" }, { "url": "VAADIN/build/mode-praat-ByADQcI9.js", "revision": "0c6943ea8534ff0b967112ee09b1fff2" }, { "url": "VAADIN/build/mode-prisma-AiIb97-9.js", "revision": "ca84829888a3b3f0babd1ee8ecb9c972" }, { "url": "VAADIN/build/mode-prolog-BWn6ubNl.js", "revision": "7f1261c39caaf76bcbcdc5d6e566f6e3" }, { "url": "VAADIN/build/mode-properties-N7kWwPys.js", "revision": "c9c2293226d37c87c1654284e4dceecf" }, { "url": "VAADIN/build/mode-protobuf-DKPH0PPR.js", "revision": "eca5361ecd0f1c20f6994dca406530e3" }, { "url": "VAADIN/build/mode-puppet-CkMxuRI0.js", "revision": "0e337c9cb20dfc654fba6ac1ab217b7e" }, { "url": "VAADIN/build/mode-python-DRTuLIlP.js", "revision": "cdb9c2eb86528a113f26314b4c72f2cb" }, { "url": "VAADIN/build/mode-qml-B2FVUTJt.js", "revision": "15ae8cbb84da62d8e866b098eff32267" }, { "url": "VAADIN/build/mode-r-ZGAEMvEI.js", "revision": "8e549174b04f2c3888121f10dda1b543" }, { "url": "VAADIN/build/mode-raku-M72NY58r.js", "revision": "12cf24eb0e8f1958a1de053f35ba23a2" }, { "url": "VAADIN/build/mode-razor-G9rlB7xo.js", "revision": "7e7c88b4551a4ed12308f9b370591d48" }, { "url": "VAADIN/build/mode-rdoc-RI2Z2orW.js", "revision": "b607dcac845c14234d03680135f8134c" }, { "url": "VAADIN/build/mode-red-2Px-TMS4.js", "revision": "fa97293a51f1ca49d9f2fea8a0b035f9" }, { "url": "VAADIN/build/mode-redshift-DQNrC3EC.js", "revision": "ce35055f6c459db615eb1081eb1b6255" }, { "url": "VAADIN/build/mode-rhtml-VtFFFU9Y.js", "revision": "66cf6f9ddd3d1ebcbf9ad58ca26cd655" }, { "url": "VAADIN/build/mode-robot-w1Mpcscm.js", "revision": "0e1c2e450f366e6380220e32c2cb3a6c" }, { "url": "VAADIN/build/mode-rst-B3BrV3ug.js", "revision": "307de3e8f19965b76c0cb60871b9b38e" }, { "url": "VAADIN/build/mode-ruby-B71vhOEC.js", "revision": "34374c6377f98f891035b2248dfe30d8" }, { "url": "VAADIN/build/mode-rust-Am9xy-MP.js", "revision": "7793443552097a78f64e95b187be1af8" }, { "url": "VAADIN/build/mode-sac-CKG6Wu8b.js", "revision": "ec5688166addfb6f8ca7605d75f03853" }, { "url": "VAADIN/build/mode-sass-BpU7vDwI.js", "revision": "c9fd45ef0d31a2c363c9d001ead6e68b" }, { "url": "VAADIN/build/mode-scad-BSefktAM.js", "revision": "d6010096a4bafc3d01ba7d25238b69ea" }, { "url": "VAADIN/build/mode-scala-51GQ_5c0.js", "revision": "2750718c6553484a1b6f8e36bc892bf7" }, { "url": "VAADIN/build/mode-scheme-C322MR_h.js", "revision": "2b6799889c1fcaa5609399bd401e9203" }, { "url": "VAADIN/build/mode-scrypt-DdlNA7TY.js", "revision": "a9a32eca31ef2dce2c7e2f59434ea68c" }, { "url": "VAADIN/build/mode-scss-x6ZFHj0Q.js", "revision": "37809c71dc4420b3b75f51d70f565f40" }, { "url": "VAADIN/build/mode-sh-By4-gXQL.js", "revision": "7a201e57b08b57f51c2c6c5d20a8d9da" }, { "url": "VAADIN/build/mode-sjs-CPr64Cs8.js", "revision": "f7faaea268d86a8fc60f5e9402528300" }, { "url": "VAADIN/build/mode-slim-DJHnwrLM.js", "revision": "6b61df8df3b908fb425463915d2f01fb" }, { "url": "VAADIN/build/mode-smarty-bpktKjni.js", "revision": "61a9bcf8e7777bd6b6f5dc976cde0432" }, { "url": "VAADIN/build/mode-smithy-DluKYPVc.js", "revision": "e1ce202726432cd6e8797e8506b4fed6" }, { "url": "VAADIN/build/mode-snippets-A0IUc6K_.js", "revision": "823b5694dd06b2f466fd18ead486e529" }, { "url": "VAADIN/build/mode-soy_template-LnlwgusL.js", "revision": "5e178e5c548a5aa89210da1f7e2c1e82" }, { "url": "VAADIN/build/mode-space-DEJ0rxBv.js", "revision": "137ae7f30dbc6f6df95783ad6c451379" }, { "url": "VAADIN/build/mode-sparql-Dskx7eGF.js", "revision": "8be85128f6c301f305b6f1203469313e" }, { "url": "VAADIN/build/mode-sql-CZ7icuTJ.js", "revision": "e813bfed6718dac5a0a3f46629564f04" }, { "url": "VAADIN/build/mode-sqlserver-Dcg1dGF_.js", "revision": "96507dc26118fc6baf7beb95c2397075" }, { "url": "VAADIN/build/mode-stylus-DALXpKBk.js", "revision": "f9d1f28f334dd67108ae59932d0849b0" }, { "url": "VAADIN/build/mode-svg-DQ9AHAUq.js", "revision": "0fd88d47b97204eadd6c7d48f13c07a4" }, { "url": "VAADIN/build/mode-swift-Bkvw7loJ.js", "revision": "7f010b0ba40d8018fa38676c5680bd8b" }, { "url": "VAADIN/build/mode-tcl-nQcsmkM2.js", "revision": "5a1869eafeb0a9da04349c11e237133a" }, { "url": "VAADIN/build/mode-terraform-D55tZujl.js", "revision": "643a339ab68c391f8d552888a6f8423d" }, { "url": "VAADIN/build/mode-tex-CbJplyYU.js", "revision": "4215c98d523858dc21b777e1796cf13c" }, { "url": "VAADIN/build/mode-text-cD1pIv2D.js", "revision": "9049be06f7c61074f8339884928e1fdf" }, { "url": "VAADIN/build/mode-textile-HZRrbPMy.js", "revision": "cc53d977fe9d2ff6d920434d23d0b21f" }, { "url": "VAADIN/build/mode-toml-ZlFqYJl5.js", "revision": "d6ed5a72f0faf4a856d44e2a594db207" }, { "url": "VAADIN/build/mode-tsx-B9aJz4as.js", "revision": "2afe81fa83850c0049fc76c7f3cea87d" }, { "url": "VAADIN/build/mode-turtle-tgmEvAKJ.js", "revision": "7b936a9118b8074a41cdbd3475638d1b" }, { "url": "VAADIN/build/mode-twig-Bpzh7t7F.js", "revision": "796105ffe3fa0818b0de10cccac006c5" }, { "url": "VAADIN/build/mode-typescript-BOBAjj3X.js", "revision": "75d8b52a8a9d6f74ba78107e0a42b466" }, { "url": "VAADIN/build/mode-vala-BFeJxLa3.js", "revision": "1bf8c02a798df513438b998182c5a4b5" }, { "url": "VAADIN/build/mode-vbscript-D5k7s7wj.js", "revision": "b37cd70fb69b1eb726adfcce8217f9f8" }, { "url": "VAADIN/build/mode-velocity-OQTCa-j7.js", "revision": "946a9aea74d9a5736f3c17639c64a792" }, { "url": "VAADIN/build/mode-verilog-B_eTFC53.js", "revision": "edfd6dc23d2a7f85fdda2cf7cb4d6e9f" }, { "url": "VAADIN/build/mode-vhdl-DTYsFbl2.js", "revision": "e3c4fe0767649b3db96c6afb87d326fa" }, { "url": "VAADIN/build/mode-visualforce-CWzWJM6M.js", "revision": "848191369f4423c2dcfa5d1b41abc0b4" }, { "url": "VAADIN/build/mode-wollok-ByPJzlMP.js", "revision": "7670a85333c3e448915433707ffe2c0d" }, { "url": "VAADIN/build/mode-xml-8cbTACk-.js", "revision": "36ab6351f11434a6713678ad790fd1d6" }, { "url": "VAADIN/build/mode-xquery-BzHeyBdy.js", "revision": "2f6cdd39a47210c8a2a5189eaddde57a" }, { "url": "VAADIN/build/mode-yaml-H_cmumQN.js", "revision": "650a8def08b8c4e2e2d0bba22ec0bf88" }, { "url": "VAADIN/build/mode-zeek-BOYno09w.js", "revision": "e105040964ec72273688aa9986fefecf" }, { "url": "VAADIN/build/mushcode-DlBbGLXy.js", "revision": "b670e42cc532fa1f8af6721cf163ea87" }, { "url": "VAADIN/build/mysql-CnY6fb_l.js", "revision": "302816a646f8b37df1e25879b88c7e1e" }, { "url": "VAADIN/build/nginx-i6xLATol.js", "revision": "2417658d4bb71f6bbcbe71afd3495585" }, { "url": "VAADIN/build/nim-CnMdAG12.js", "revision": "e8e19ac61a80880226ba5728ca714cae" }, { "url": "VAADIN/build/nix-DNdmGeA4.js", "revision": "a9b4c9502ef1bc8d2ea453816dea17cb" }, { "url": "VAADIN/build/nsis-FrXKXo2Z.js", "revision": "c3aead5ec87f9320b4b8b982dfea6246" }, { "url": "VAADIN/build/nunjucks-BmGp8uJb.js", "revision": "9302afe3e77ae7cbb96464b084d307d6" }, { "url": "VAADIN/build/objectivec-CaCuzh5O.js", "revision": "ffd76cf7e16605f5312b175a02501c7d" }, { "url": "VAADIN/build/ocaml-CFEtRw4y.js", "revision": "95d835079b5abeae060272afbe3ee432" }, { "url": "VAADIN/build/partiql-CuU4sLfs.js", "revision": "8a920a2ece614ab3deb244a95b034096" }, { "url": "VAADIN/build/pascal-DCQVdpqc.js", "revision": "c07c1fe961a4353e2eeece4cdb6fa666" }, { "url": "VAADIN/build/perl-Cu4-69ex.js", "revision": "86fb83afc3da570d4a37651733a41132" }, { "url": "VAADIN/build/pgsql-CEfXORDR.js", "revision": "662613a02caf4879d675273258398604" }, { "url": "VAADIN/build/php_laravel_blade-BGNfCj4_.js", "revision": "a1f90295436213f134862bf4ab4c0a90" }, { "url": "VAADIN/build/php-CsJU5zFz.js", "revision": "57cf8050f32493aed0907a3755965cd0" }, { "url": "VAADIN/build/pig-BC3oBt5o.js", "revision": "910a7cbdeefc69cc83d9379b411542e8" }, { "url": "VAADIN/build/plain_text-DUu08M8g.js", "revision": "4bff50e345fa2b9c957f10fe19343a21" }, { "url": "VAADIN/build/plsql-BSpdgbJS.js", "revision": "6495b349ab8577d1deef1f180183c731" }, { "url": "VAADIN/build/powershell-By5Z_MoC.js", "revision": "70f8a50f4541fb4bdd8328924981b42b" }, { "url": "VAADIN/build/praat-DlXIv-h9.js", "revision": "ff0fe6b1ba7b8d1de6ae262c7d1d0eab" }, { "url": "VAADIN/build/prisma-BLEgJoE0.js", "revision": "c8f803012d99ffc7403c614f0a91e2bc" }, { "url": "VAADIN/build/prolog-Bzc2vMsa.js", "revision": "adcfd190faeec2bafe2718a398ad8758" }, { "url": "VAADIN/build/properties-BFx5cw2U.js", "revision": "54b78fb275b51ec3586a60fbf5503a10" }, { "url": "VAADIN/build/protobuf-DwGaMYLD.js", "revision": "6fe6436ad5d8c01e4f60634250787ef1" }, { "url": "VAADIN/build/puppet-C1c3dqe2.js", "revision": "6be502c3972adad4a68c07da289079bc" }, { "url": "VAADIN/build/python-c0KNugWf.js", "revision": "351524e60ddd39bcb0ade869f9123048" }, { "url": "VAADIN/build/qml-CgXm8bZZ.js", "revision": "8815752e2031d1c1c9faebf3bb87316f" }, { "url": "VAADIN/build/r-CRtJwmoJ.js", "revision": "f94593673b9a7499ab9a6a04a2f127b1" }, { "url": "VAADIN/build/raku-DnM0LVfF.js", "revision": "9050e6a8c34be7233dcd3e16fe5c0d05" }, { "url": "VAADIN/build/razor-DcMHbbDr.js", "revision": "23496ad933db06b33e7e20ef7c15c54f" }, { "url": "VAADIN/build/rdoc-DfenmFpA.js", "revision": "b092a19d6e6439a0453823f44b603078" }, { "url": "VAADIN/build/red-CiLr09Hn.js", "revision": "13cf6e9144cb2661673c399815207625" }, { "url": "VAADIN/build/redshift-CxkFrcmx.js", "revision": "9fefe6652c4de6b43e31804dd14621f6" }, { "url": "VAADIN/build/rhtml-Ct-RexYy.js", "revision": "090f2b09a96615a7fee8508310645c07" }, { "url": "VAADIN/build/robot-DWvguPem.js", "revision": "796c4eb958113f668560cc4f41d48b93" }, { "url": "VAADIN/build/rst-BEEx_d44.js", "revision": "f8131281e1c515c335d4753445931847" }, { "url": "VAADIN/build/ruby-Cx2oP29u.js", "revision": "63f7f6aea454ab940d41ad7b753fce63" }, { "url": "VAADIN/build/rust-bNJym0AI.js", "revision": "cc5d90eb4b3d9a8689ac2e34e8014f39" }, { "url": "VAADIN/build/sac-CvWMPAGq.js", "revision": "52f04e32a915feb56beb0e1390ec2a83" }, { "url": "VAADIN/build/sass-BGT7vYkS.js", "revision": "6551dbccb0461bfd4650b5df424bfa06" }, { "url": "VAADIN/build/scad-TTyHnnq1.js", "revision": "abb480a40ff0cd5401631552ac8f35e2" }, { "url": "VAADIN/build/scala-Du7KwDTA.js", "revision": "d3bd5aecbda0c5204f43fb93d8e94ba9" }, { "url": "VAADIN/build/scheme-CAImKXpM.js", "revision": "532b42a1d9a19279635e3036f291a03c" }, { "url": "VAADIN/build/scrypt-CfPZDHNF.js", "revision": "6f933c0094ac0e479a7b570dd5fe4f18" }, { "url": "VAADIN/build/scss-BAD1E3Uc.js", "revision": "09db33059d3b3e68c35e5159ff11feb8" }, { "url": "VAADIN/build/sh-CutoX4v9.js", "revision": "cfffcc353945f776409ad1f909aa3c69" }, { "url": "VAADIN/build/sjs-C517ineD.js", "revision": "ea0e4f845c7644ceddae612c637edf40" }, { "url": "VAADIN/build/slim-CWEqTZwM.js", "revision": "82544b9a63f93b63b0c17cefd5c8448a" }, { "url": "VAADIN/build/smarty-4PAsHreG.js", "revision": "b9d55c27e3e2b729ecc7ae37f1faa57c" }, { "url": "VAADIN/build/smithy-DLFAMhNe.js", "revision": "88f28d3ac6f7836ea81aaa0e797a4a97" }, { "url": "VAADIN/build/snippets-CuMPtU31.js", "revision": "43428aa4644fe4557f7696bf6e1f8a3d" }, { "url": "VAADIN/build/soy_template-B67zxPfv.js", "revision": "dc3df1937627da052e0125b6b4cbfbba" }, { "url": "VAADIN/build/space-DInqWZrR.js", "revision": "c04ecc33d62eb2ea0d1d944590aad147" }, { "url": "VAADIN/build/sparql-BqUa9xAk.js", "revision": "7abfd6834f8b02242fdfd7c0d5a6f964" }, { "url": "VAADIN/build/sql-CDA7gIKL.js", "revision": "54cbc264f8ec65d0059ac497314b2045" }, { "url": "VAADIN/build/sqlserver-DrGBGP0b.js", "revision": "dc893962b93e1a992317d8a2faa2a2ec" }, { "url": "VAADIN/build/stylus-NcqoTXia.js", "revision": "7da88b1a305ef93269c399b7f3d151dd" }, { "url": "VAADIN/build/svg-Dth-AWfX.js", "revision": "44d76a5b0ebbe6af70806c4f6205a14d" }, { "url": "VAADIN/build/swift-i5S9hT8a.js", "revision": "bd5c8ad11455978304d066aa8630e3c4" }, { "url": "VAADIN/build/tcl-DjvfLTCk.js", "revision": "37c45bdfeb434bb75f5430d24545eead" }, { "url": "VAADIN/build/terraform-D94vaZJK.js", "revision": "820b1d626ab7c2f72c7dac5ec1f5e476" }, { "url": "VAADIN/build/tex-BrwX_uak.js", "revision": "505149c7228ceb0c3f6ba8beb4d63abf" }, { "url": "VAADIN/build/text-HgQeU0Ao.js", "revision": "7a7fbbd9aad8842fbaaaedf781f02835" }, { "url": "VAADIN/build/textile-75GPmQ2V.js", "revision": "c12c129334501d8556bad7767df880f2" }, { "url": "VAADIN/build/theme-ambiance-CViJXnUi.js", "revision": "c44e64e85ea61d1a10d1a13c973be6da" }, { "url": "VAADIN/build/theme-chaos-BP-K7fGD.js", "revision": "f015d2d29fb6ed0bfa73c4efe8e2030c" }, { "url": "VAADIN/build/theme-chrome-DvtzVPhY.js", "revision": "1cc423f9d898a3374ca8dca05fa4084b" }, { "url": "VAADIN/build/theme-cloud9_day-BHDsSvab.js", "revision": "0e655eb4eef26b9325985ce1f91cd902" }, { "url": "VAADIN/build/theme-cloud9_night_low_color-B5I0AFW-.js", "revision": "ee2dc3a76134fef26941a728d393f34a" }, { "url": "VAADIN/build/theme-cloud9_night-PjM3B2T7.js", "revision": "2815673390278eda84e4611e69913329" }, { "url": "VAADIN/build/theme-clouds_midnight-CSNYYHAl.js", "revision": "62daa46909dc6b039fa07602b64be936" }, { "url": "VAADIN/build/theme-clouds-Cyj0Vwpa.js", "revision": "ccba3575beea06afa102c5ff3747979c" }, { "url": "VAADIN/build/theme-cobalt-DoxIU8mp.js", "revision": "b967dfc60017b9713d9c3c770aeb4edf" }, { "url": "VAADIN/build/theme-crimson_editor-D2j-nXfY.js", "revision": "ae794b567f252e78249d84fc1dd6cdc9" }, { "url": "VAADIN/build/theme-dawn-CVGlm8KL.js", "revision": "0d61f24f419a7f76749754c88da9f241" }, { "url": "VAADIN/build/theme-dracula-BOCnZToG.js", "revision": "afec81f07db110fec699ff5f74fe2043" }, { "url": "VAADIN/build/theme-dreamweaver-B2r1yvC7.js", "revision": "c55ddf80b2451367a22a3d9c24ac39b7" }, { "url": "VAADIN/build/theme-eclipse-DIv7IrTN.js", "revision": "3290ac1432693c54950fc8cd88786e31" }, { "url": "VAADIN/build/theme-github-CR18eB8D.js", "revision": "2c329fe122aa2765ff178fde21d597c6" }, { "url": "VAADIN/build/theme-gob-CVq9cVNZ.js", "revision": "5c788490409d46d4181297a161a0e697" }, { "url": "VAADIN/build/theme-gruvbox_dark_hard-Bu3wsQjP.js", "revision": "7b50a739776ad83d7d3b267c53b72ced" }, { "url": "VAADIN/build/theme-gruvbox_light_hard-B-e30x8F.js", "revision": "d1def4f923bb90f1ccad2ea3b71f863e" }, { "url": "VAADIN/build/theme-gruvbox-CyrTmWUr.js", "revision": "1969f2c83f59444477c5c9ad2a50f6c4" }, { "url": "VAADIN/build/theme-idle_fingers-C5UG_Pae.js", "revision": "7297a4570336bd14b5cb7b92b4b3b7df" }, { "url": "VAADIN/build/theme-iplastic-j64xnnFW.js", "revision": "8b6e83c7c756cb0c9ce5f5c3e23bceaa" }, { "url": "VAADIN/build/theme-katzenmilch-BVbJib54.js", "revision": "0ed05d2986db622c9e6896c099fd1766" }, { "url": "VAADIN/build/theme-kr_theme-BkgKUnOW.js", "revision": "85651f15b87a50d2347c43e4486b8675" }, { "url": "VAADIN/build/theme-kuroir-J7kCDHFS.js", "revision": "61552d228f61fd18c85001cb59b5fb90" }, { "url": "VAADIN/build/theme-merbivore_soft-B_ecFrr2.js", "revision": "09ef7d29805c2215bb421d44634ab4a2" }, { "url": "VAADIN/build/theme-merbivore-Cln0yVEu.js", "revision": "cc2ec7fddf3365619418fd7234faafe2" }, { "url": "VAADIN/build/theme-mono_industrial-DX5CdSdP.js", "revision": "6c07b797a8933d221e7b4002fca6dfca" }, { "url": "VAADIN/build/theme-monokai-jlmCikCb.js", "revision": "38a0253b65cbf26ee62c0d710f464ef2" }, { "url": "VAADIN/build/theme-nord_dark-DV6sMzZv.js", "revision": "b89cd9fc84af966f926a5d4c8e44b354" }, { "url": "VAADIN/build/theme-one_dark-BhRjrP6S.js", "revision": "55697ce618b8edcfc65d68a1d331e117" }, { "url": "VAADIN/build/theme-pastel_on_dark-CFoq-4t2.js", "revision": "bc54b682c02b8302526b300544473622" }, { "url": "VAADIN/build/theme-solarized_dark-FP9ONVnC.js", "revision": "79115ebcee4202f7dc68254c569396da" }, { "url": "VAADIN/build/theme-solarized_light-xuK9LuJZ.js", "revision": "18fdbf6ee5fb19a8adf3dbd02d4cf920" }, { "url": "VAADIN/build/theme-sqlserver-BTzcPz6T.js", "revision": "9358af184882aab9f368f2557ea763f0" }, { "url": "VAADIN/build/theme-terminal-FJc-x5RF.js", "revision": "0488ab21ad3a3cce4f1d1d44344814f0" }, { "url": "VAADIN/build/theme-textmate-Dy_3_z_q.js", "revision": "e65c5a764f87bc5793644d51637f2587" }, { "url": "VAADIN/build/theme-tomorrow_night_blue-BSfLANU7.js", "revision": "c3176190a3626585dfc8f35565e02e67" }, { "url": "VAADIN/build/theme-tomorrow_night_bright-BjcrCemA.js", "revision": "2bb1f92a99a70bf88a1179a3555328ca" }, { "url": "VAADIN/build/theme-tomorrow_night_eighties-S-Iydsfe.js", "revision": "53f1fa7272dcd1e1b1242c661206a4b9" }, { "url": "VAADIN/build/theme-tomorrow_night-BFkrM6lI.js", "revision": "3758534cfc7bb3a89e302f8c12e9bd0d" }, { "url": "VAADIN/build/theme-tomorrow-BSlIdMgE.js", "revision": "3dd99ec2957aafcdd11b285b06e553b5" }, { "url": "VAADIN/build/theme-twilight-BGpFl4Mn.js", "revision": "7620625466ec3db48f3825fc9cf3af3a" }, { "url": "VAADIN/build/theme-vibrant_ink-CIHc8WAG.js", "revision": "024dc884b72980221f614327d4ef98eb" }, { "url": "VAADIN/build/theme-xcode-jlmg7sFX.js", "revision": "6df85343ca73f42faa0f937fa8ab7ddf" }, { "url": "VAADIN/build/toml-Bbm2gLMm.js", "revision": "c4d825d7dd757f17b0a70b390b2796ae" }, { "url": "VAADIN/build/tsx-CB-4KqQq.js", "revision": "8708377b9b9e2dfc0f75e7d5a92c5d03" }, { "url": "VAADIN/build/turtle-CmWnEk5P.js", "revision": "bbfb105abf24d8e409c6078702f88d0a" }, { "url": "VAADIN/build/twig-G5oLm2rE.js", "revision": "bf0e3dfd28ffbe5159ab4d16325fcd08" }, { "url": "VAADIN/build/typescript-x-PqxQTJ.js", "revision": "03fc37a0b68c0afe5c0791d7867556d9" }, { "url": "VAADIN/build/vala-fhHh9Ofe.js", "revision": "22eee50ef1c7cc60e48040e20030232c" }, { "url": "VAADIN/build/vbscript-RNiTlPuY.js", "revision": "eda124f773d2164e1b8e7f8a7eef5a2b" }, { "url": "VAADIN/build/velocity-C9-f-hDg.js", "revision": "5742136ec6b18b4eecc3751aed0846ef" }, { "url": "VAADIN/build/verilog-ATs-5lwc.js", "revision": "369b1fc751c93a5593064f9b64ae053d" }, { "url": "VAADIN/build/vhdl-KrGTuSEP.js", "revision": "5bb38e9d5f3c79612393e1960332be86" }, { "url": "VAADIN/build/visualforce-DWObeytq.js", "revision": "49fd741eb903a5ad5a35c82acd8d138c" }, { "url": "VAADIN/build/wollok-CREEHs6t.js", "revision": "25bcb5f87890803847e6b943507608ce" }, { "url": "VAADIN/build/worker-base-Cp3qkAcE.js", "revision": "ee9d23d2c0660598c460a21d15ea370f" }, { "url": "VAADIN/build/worker-coffee-D4svpPf9.js", "revision": "d07eb91caea7868a68186e8741c046e9" }, { "url": "VAADIN/build/worker-css-BrhoBjCn.js", "revision": "36d91569f76b2d1a999b5ce337dadb0f" }, { "url": "VAADIN/build/worker-html-CTva6C-w.js", "revision": "41f61beae716847a71e69319161fcf60" }, { "url": "VAADIN/build/worker-javascript-CYYCYjJp.js", "revision": "25f47ba48d6baf3ceab1a99032e2a43d" }, { "url": "VAADIN/build/worker-json-C4OOXfQY.js", "revision": "60e5c08def078e29a3f3e658101e8686" }, { "url": "VAADIN/build/worker-lua-C5kov8dv.js", "revision": "c633246c19eaacb272b88e9008d0a57c" }, { "url": "VAADIN/build/worker-php-Ckn8N6Jc.js", "revision": "11293bc9737cc314fd7ebb58526db369" }, { "url": "VAADIN/build/worker-xml-DJDyS2On.js", "revision": "691ad612234ae3b64882d4283885c6c5" }, { "url": "VAADIN/build/worker-xquery-AHSyLOFA.js", "revision": "f80d930429f740fb5e6ce65aab88a8d3" }, { "url": "VAADIN/build/worker-yaml-BLZxlRt1.js", "revision": "c6037f8c7f1e0b8ec3b32987a1d0df78" }, { "url": "VAADIN/build/xml-CigEbB28.js", "revision": "8d512319aa73fcb0785135318627ed73" }, { "url": "VAADIN/build/xquery-CPt01bwZ.js", "revision": "84f04c2dd44c68c64978624c4f6c1014" }, { "url": "VAADIN/build/yaml-CPB4fVIO.js", "revision": "9288e47c6c6a4d979d1d3e1cab19e958" }, { "url": "VAADIN/build/zeek-BBVamNju.js", "revision": "b9277957f18cf10ddcbaa345356d62f0" }];
let hasRootEntry = manifestEntries.findIndex((entry) => entry.url === ".") >= 0;
if ((_a = self.additionalManifestEntries) == null ? void 0 : _a.length) {
  manifestEntries.push(...self.additionalManifestEntries.filter((entry) => entry.url !== "." || !hasRootEntry));
}
const offlinePath = ".";
const scope = new URL(self.registration.scope);
async function rewriteBaseHref(response) {
  const html = await response.text();
  return new Response(html.replace(/<base\s+href=[^>]*>/, `<base href="${self.registration.scope}">`), response);
}
function isManifestEntryURL(url) {
  return manifestEntries.some((entry) => getCacheKeyForURL(entry.url) === getCacheKeyForURL(`${url}`));
}
let connectionLost = false;
function checkConnectionPlugin() {
  return {
    async fetchDidFail() {
      connectionLost = true;
    },
    async fetchDidSucceed({ response }) {
      connectionLost = false;
      return response;
    }
  };
}
const networkOnly = new NetworkOnly({
  plugins: [checkConnectionPlugin()]
});
new NetworkFirst({
  plugins: [checkConnectionPlugin()]
});
registerRoute(
  new NavigationRoute(async (context) => {
    async function serveOfflineFallback() {
      const response = await matchPrecache(offlinePath);
      return response ? rewriteBaseHref(response) : void 0;
    }
    function serveResourceFromCache() {
      if (context.url.pathname === scope.pathname) {
        return serveOfflineFallback();
      }
      if (isManifestEntryURL(context.url)) {
        return matchPrecache(context.request);
      }
      return serveOfflineFallback();
    }
    if (!self.navigator.onLine) {
      const response = await serveResourceFromCache();
      if (response) {
        return response;
      }
    }
    try {
      return await networkOnly.handle(context);
    } catch (error) {
      const response = await serveResourceFromCache();
      if (response) {
        return response;
      }
      throw error;
    }
  })
);
precacheAndRoute(manifestEntries);
self.addEventListener("message", (event) => {
  var _a2;
  if (typeof event.data !== "object" || !("method" in event.data)) {
    return;
  }
  if (event.data.method === "Vaadin.ServiceWorker.isConnectionLost" && "id" in event.data) {
    (_a2 = event.source) == null ? void 0 : _a2.postMessage({ id: event.data.id, result: connectionLost }, []);
  }
});
self.addEventListener("push", (e) => {
  var _a2;
  const data = (_a2 = e.data) == null ? void 0 : _a2.json();
  if (data) {
    self.registration.showNotification(data.title, data.options);
  }
});
self.addEventListener("notificationclick", (e) => {
  e.notification.close();
  e.waitUntil(focusOrOpenWindow());
});
async function focusOrOpenWindow() {
  const url = new URL("/", self.location.origin).href;
  const allWindows = await self.clients.matchAll({
    type: "window"
  });
  const appWindow = allWindows.find((w) => w.url === url);
  if (appWindow) {
    return appWindow.focus();
  } else {
    return self.clients.openWindow(url);
  }
}
