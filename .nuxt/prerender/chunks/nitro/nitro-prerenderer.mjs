globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'file://C:/Users/anythingelse428/Documents/GitHub/itmaraphon/node_modules/node-fetch-native/dist/polyfill.mjs';
import { defineEventHandler, handleCacheHeaders, createEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, getRequestHeader, setResponseStatus, setResponseHeader, getRequestHeaders, createError, createApp, createRouter as createRouter$1, toNodeListener, fetchWithEvent, lazyEventHandler } from 'file://C:/Users/anythingelse428/Documents/GitHub/itmaraphon/node_modules/h3/dist/index.mjs';
import { createFetch as createFetch$1, Headers } from 'file://C:/Users/anythingelse428/Documents/GitHub/itmaraphon/node_modules/ofetch/dist/node.mjs';
import destr from 'file://C:/Users/anythingelse428/Documents/GitHub/itmaraphon/node_modules/destr/dist/index.mjs';
import { createCall, createFetch } from 'file://C:/Users/anythingelse428/Documents/GitHub/itmaraphon/node_modules/unenv/runtime/fetch/index.mjs';
import { createHooks } from 'file://C:/Users/anythingelse428/Documents/GitHub/itmaraphon/node_modules/hookable/dist/index.mjs';
import { snakeCase } from 'file://C:/Users/anythingelse428/Documents/GitHub/itmaraphon/node_modules/scule/dist/index.mjs';
import { klona } from 'file://C:/Users/anythingelse428/Documents/GitHub/itmaraphon/node_modules/klona/dist/index.mjs';
import defu, { defuFn } from 'file://C:/Users/anythingelse428/Documents/GitHub/itmaraphon/node_modules/defu/dist/defu.mjs';
import { hash } from 'file://C:/Users/anythingelse428/Documents/GitHub/itmaraphon/node_modules/ohash/dist/index.mjs';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, withLeadingSlash, withoutTrailingSlash } from 'file://C:/Users/anythingelse428/Documents/GitHub/itmaraphon/node_modules/ufo/dist/index.mjs';
import { createStorage, prefixStorage } from 'file://C:/Users/anythingelse428/Documents/GitHub/itmaraphon/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file://C:/Users/anythingelse428/Documents/GitHub/itmaraphon/node_modules/unstorage/drivers/fs.mjs';
import { toRouteMatcher, createRouter } from 'file://C:/Users/anythingelse428/Documents/GitHub/itmaraphon/node_modules/radix3/dist/index.mjs';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'file://C:/Users/anythingelse428/Documents/GitHub/itmaraphon/node_modules/pathe/dist/index.mjs';

const inlineAppConfig = {};



const appConfig = defuFn(inlineAppConfig);

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/itmaraphon/",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/public/assets/**": {
        "headers": {
          "cache-control": "public,max-age=3153600,s-maxage=3153600"
        }
      },
      "/_nuxt/**": {
        "headers": {
          "cache-control": "public,immutable,max-age=3153600,s-maxage=3153600"
        }
      }
    }
  },
  "public": {
    "siteUrl": "https://anythingelse428.github.io/itmaraphon/"
  }
};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const _sharedRuntimeConfig = _deepFreeze(
  _applyEnv(klona(_inlineRuntimeConfig))
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  _applyEnv(runtimeConfig);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _getEnv(key) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function _applyEnv(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = _getEnv(subKey);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      _applyEnv(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
  return obj;
}
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const serverAssets = [{"baseName":"server","dir":"C:/Users/anythingelse428/Documents/GitHub/itmaraphon/server/assets"}];

const assets$1 = createStorage();

for (const asset of serverAssets) {
  assets$1.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir }));
}

const storage = createStorage({});

storage.mount('/assets', assets$1);

storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"C:\\Users\\anythingelse428\\Documents\\GitHub\\itmaraphon","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"C:\\Users\\anythingelse428\\Documents\\GitHub\\itmaraphon\\server","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"C:\\Users\\anythingelse428\\Documents\\GitHub\\itmaraphon\\.nuxt","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"C:\\Users\\anythingelse428\\Documents\\GitHub\\itmaraphon\\.nuxt\\cache","ignore":["**/node_modules/**","**/.git/**"]}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver, shouldInvalidateCache) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry)) {
          useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(key, () => fn(...args), shouldInvalidateCache);
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return key.replace(/[^\dA-Za-z]/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const key = await opts.getKey?.(event);
      if (key) {
        return escapeKey(key);
      }
      const url = event.node.req.originalUrl || event.node.req.url;
      const friendlyName = escapeKey(decodeURI(parseURL(url).pathname)).slice(
        0,
        16
      );
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    validate: (entry) => {
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: [opts.integrity, handler]
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const reqProxy = cloneWithProxy(incomingEvent.node.req, { headers: {} });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = headers.Etag || headers.etag || `W/"${hash(body)}"`;
      headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString();
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      event.node.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler() {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: $fetch.raw,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    const path = new URL(event.node.req.url, "http://localhost").pathname;
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(path, useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const plugins = [
  
];

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}
function trapUnhandledNodeErrors() {
  {
    process.on(
      "unhandledRejection",
      (err) => console.error("[nitro] [unhandledRejection] " + err)
    );
    process.on(
      "uncaughtException",
      (err) => console.error("[nitro]  [uncaughtException] " + err)
    );
  }
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.node.req.url,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (event.handled) {
    return;
  }
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    event.node.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.node.req.url?.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await import('../error-500.mjs');
    if (event.handled) {
      return;
    }
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    event.node.res.end(template(errorObject));
    return;
  }
  const html = await res.text();
  if (event.handled) {
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  event.node.res.end(html);
});

const assets = {
  "/android-chrome-192x192.png": {
    "type": "image/png",
    "etag": "\"54f2-68IHjkIKa1PjOT3wV9E7WrdMWrE\"",
    "mtime": "2023-08-03T14:51:20.411Z",
    "size": 21746,
    "path": "../../.output/public/android-chrome-192x192.png"
  },
  "/android-chrome-512x512.png": {
    "type": "image/png",
    "etag": "\"15cc6-gfJB9/oYuNti4KeQdSSo9affVYg\"",
    "mtime": "2023-08-03T14:51:20.412Z",
    "size": 89286,
    "path": "../../.output/public/android-chrome-512x512.png"
  },
  "/apple-touch-icon.png": {
    "type": "image/png",
    "etag": "\"34df-xsZNte+oObWMjB9oST73K1lcASs\"",
    "mtime": "2023-08-03T14:51:20.413Z",
    "size": 13535,
    "path": "../../.output/public/apple-touch-icon.png"
  },
  "/browserconfig.xml": {
    "type": "application/xml",
    "etag": "\"ff-emiX2YJ3fQkNv/aFnrJcgGcdjLY\"",
    "mtime": "2023-08-03T14:51:20.424Z",
    "size": 255,
    "path": "../../.output/public/browserconfig.xml"
  },
  "/favicon-16x16.png": {
    "type": "image/png",
    "etag": "\"483-5MV1+bLyVGFk/Eq+53mfEwPUB0U\"",
    "mtime": "2023-08-03T14:51:20.425Z",
    "size": 1155,
    "path": "../../.output/public/favicon-16x16.png"
  },
  "/favicon-32x32.png": {
    "type": "image/png",
    "etag": "\"7d7-N0x+sKA4bM5BFl/iREX+j387xIU\"",
    "mtime": "2023-08-03T14:51:20.426Z",
    "size": 2007,
    "path": "../../.output/public/favicon-32x32.png"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"3aee-73lejsS1DImU4SbLMNRYotlqQ0A\"",
    "mtime": "2023-08-03T14:51:20.426Z",
    "size": 15086,
    "path": "../../.output/public/favicon.ico"
  },
  "/mstile-150x150.png": {
    "type": "image/png",
    "etag": "\"1730-afruKNNJ+5/UQbeGLhNVZwM8th8\"",
    "mtime": "2023-08-03T14:51:20.427Z",
    "size": 5936,
    "path": "../../.output/public/mstile-150x150.png"
  },
  "/safari-pinned-tab.svg": {
    "type": "image/svg+xml",
    "etag": "\"4451-0NzbWWo0edhp6LFqk8e9sBgkvno\"",
    "mtime": "2023-08-03T14:51:20.428Z",
    "size": 17489,
    "path": "../../.output/public/safari-pinned-tab.svg"
  },
  "/safari-pinned-tab.svg.br": {
    "type": "image/svg+xml",
    "encoding": "br",
    "etag": "\"180f-iPqXRnUAjLtRxlyxNFBDGgo9Wuw\"",
    "mtime": "2023-08-03T14:52:37.629Z",
    "size": 6159,
    "path": "../../.output/public/safari-pinned-tab.svg.br"
  },
  "/safari-pinned-tab.svg.gz": {
    "type": "image/svg+xml",
    "encoding": "gzip",
    "etag": "\"1c90-xHObf1vt47+Tbu8WWSZGqW22E1o\"",
    "mtime": "2023-08-03T14:52:37.628Z",
    "size": 7312,
    "path": "../../.output/public/safari-pinned-tab.svg.gz"
  },
  "/site.webmanifest": {
    "type": "application/manifest+json",
    "etag": "\"22b-yxuSC7U1e35TrwwlWL0oT94oNts\"",
    "mtime": "2023-08-03T14:51:20.428Z",
    "size": 555,
    "path": "../../.output/public/site.webmanifest"
  },
  "/assets/logo copy.svg": {
    "type": "image/svg+xml",
    "etag": "\"258f-77M0wekkvA119Rpg2FjgE1yRTEc\"",
    "mtime": "2023-08-03T14:51:20.420Z",
    "size": 9615,
    "path": "../../.output/public/assets/logo copy.svg"
  },
  "/assets/logo copy.svg.br": {
    "type": "image/svg+xml",
    "encoding": "br",
    "etag": "\"f2f-VsLKHTdo0o4I20fPFgqdOQUVKKs\"",
    "mtime": "2023-08-03T14:52:37.628Z",
    "size": 3887,
    "path": "../../.output/public/assets/logo copy.svg.br"
  },
  "/assets/logo copy.svg.gz": {
    "type": "image/svg+xml",
    "encoding": "gzip",
    "etag": "\"1224-uy/3i3yFcMVlr4od2uA+hM075Zk\"",
    "mtime": "2023-08-03T14:52:37.628Z",
    "size": 4644,
    "path": "../../.output/public/assets/logo copy.svg.gz"
  },
  "/assets/logo.svg": {
    "type": "image/svg+xml",
    "etag": "\"2262-KUMqHpEpb3+3JjGKQcirVRmASvM\"",
    "mtime": "2023-08-03T14:51:20.420Z",
    "size": 8802,
    "path": "../../.output/public/assets/logo.svg"
  },
  "/assets/logo.svg.br": {
    "type": "image/svg+xml",
    "encoding": "br",
    "etag": "\"dee-Lf7Tch2aFiTfsC3bVFPwxWmZRS8\"",
    "mtime": "2023-08-03T14:52:37.628Z",
    "size": 3566,
    "path": "../../.output/public/assets/logo.svg.br"
  },
  "/assets/logo.svg.gz": {
    "type": "image/svg+xml",
    "encoding": "gzip",
    "etag": "\"1070-ekge9vbcgCHw8n/M1nNIvXQlWOI\"",
    "mtime": "2023-08-03T14:52:37.628Z",
    "size": 4208,
    "path": "../../.output/public/assets/logo.svg.gz"
  },
  "/assets/main-line-sm.svg": {
    "type": "image/svg+xml",
    "etag": "\"1f1-Vo56arFEfgBhpnnj+BKI1Ii3VSk\"",
    "mtime": "2023-08-03T14:51:20.421Z",
    "size": 497,
    "path": "../../.output/public/assets/main-line-sm.svg"
  },
  "/assets/main-line.svg": {
    "type": "image/svg+xml",
    "etag": "\"1e5-YmN2+emuDqWeOfOrYvpmcZBqBvE\"",
    "mtime": "2023-08-03T14:51:20.421Z",
    "size": 485,
    "path": "../../.output/public/assets/main-line.svg"
  },
  "/assets/sub-line-md.svg": {
    "type": "image/svg+xml",
    "etag": "\"5a8-3gZsYY+hurEz6VXa8GQ69Loaias\"",
    "mtime": "2023-08-03T14:51:20.423Z",
    "size": 1448,
    "path": "../../.output/public/assets/sub-line-md.svg"
  },
  "/assets/sub-line-md.svg.br": {
    "type": "image/svg+xml",
    "encoding": "br",
    "etag": "\"23b-o1EA3qUiuuaiR94ARf4OJudx+fo\"",
    "mtime": "2023-08-03T14:52:37.628Z",
    "size": 571,
    "path": "../../.output/public/assets/sub-line-md.svg.br"
  },
  "/assets/sub-line-md.svg.gz": {
    "type": "image/svg+xml",
    "encoding": "gzip",
    "etag": "\"293-7/M4URhVhe8Xcl0fJ8Mdoa6lt5k\"",
    "mtime": "2023-08-03T14:52:37.628Z",
    "size": 659,
    "path": "../../.output/public/assets/sub-line-md.svg.gz"
  },
  "/assets/sub-line-sm.svg": {
    "type": "image/svg+xml",
    "etag": "\"5a5-VPCmYYqwxy3LwHf7IWcw6wjHN5I\"",
    "mtime": "2023-08-03T14:51:20.423Z",
    "size": 1445,
    "path": "../../.output/public/assets/sub-line-sm.svg"
  },
  "/assets/sub-line-sm.svg.br": {
    "type": "image/svg+xml",
    "encoding": "br",
    "etag": "\"23b-bQy8t4IR46Q4C5vbGi424aqa304\"",
    "mtime": "2023-08-03T14:52:37.628Z",
    "size": 571,
    "path": "../../.output/public/assets/sub-line-sm.svg.br"
  },
  "/assets/sub-line-sm.svg.gz": {
    "type": "image/svg+xml",
    "encoding": "gzip",
    "etag": "\"28f-BHh3pNsXPGsGqg7Gscr/chEm14o\"",
    "mtime": "2023-08-03T14:52:37.628Z",
    "size": 655,
    "path": "../../.output/public/assets/sub-line-sm.svg.gz"
  },
  "/assets/sub-line.svg": {
    "type": "image/svg+xml",
    "etag": "\"8a0-AEq8HzLNEmcVtPkroOSfZe8wvOw\"",
    "mtime": "2023-08-03T14:51:20.424Z",
    "size": 2208,
    "path": "../../.output/public/assets/sub-line.svg"
  },
  "/assets/sub-line.svg.br": {
    "type": "image/svg+xml",
    "encoding": "br",
    "etag": "\"27c-QZ//Lo251VXX6XUdlCJ6xZusx/o\"",
    "mtime": "2023-08-03T14:52:37.628Z",
    "size": 636,
    "path": "../../.output/public/assets/sub-line.svg.br"
  },
  "/assets/sub-line.svg.gz": {
    "type": "image/svg+xml",
    "encoding": "gzip",
    "etag": "\"2d1-0TBEZPafnjiujBFs+jK9xbF770U\"",
    "mtime": "2023-08-03T14:52:37.628Z",
    "size": 721,
    "path": "../../.output/public/assets/sub-line.svg.gz"
  },
  "/_nuxt/default.2d6745e5.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1039-3ewESr1mIPudluFNp+zmZWw4grA\"",
    "mtime": "2023-08-03T14:52:35.770Z",
    "size": 4153,
    "path": "../../.output/public/_nuxt/default.2d6745e5.css"
  },
  "/_nuxt/default.2d6745e5.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"3b5-SjeYmEW3Gh9kqIFoYPsAO1HGtNk\"",
    "mtime": "2023-08-03T14:52:37.629Z",
    "size": 949,
    "path": "../../.output/public/_nuxt/default.2d6745e5.css.br"
  },
  "/_nuxt/default.2d6745e5.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"473-LznpZPOX8uReU3L70T2/BYCRWBE\"",
    "mtime": "2023-08-03T14:52:37.628Z",
    "size": 1139,
    "path": "../../.output/public/_nuxt/default.2d6745e5.css.gz"
  },
  "/_nuxt/default.a522a68d.js": {
    "type": "application/javascript",
    "etag": "\"861-ZPVMHcfnqDoZVnYpAMUF0I0mkvE\"",
    "mtime": "2023-08-03T14:52:35.770Z",
    "size": 2145,
    "path": "../../.output/public/_nuxt/default.a522a68d.js"
  },
  "/_nuxt/default.a522a68d.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"363-P9+C7eyAURtQqF+PKnGXwoSe32M\"",
    "mtime": "2023-08-03T14:52:37.629Z",
    "size": 867,
    "path": "../../.output/public/_nuxt/default.a522a68d.js.br"
  },
  "/_nuxt/default.a522a68d.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"405-cePw2B7mIIuTUfSM8lZosnrrYpo\"",
    "mtime": "2023-08-03T14:52:37.628Z",
    "size": 1029,
    "path": "../../.output/public/_nuxt/default.a522a68d.js.gz"
  },
  "/_nuxt/entry.54b771d8.js": {
    "type": "application/javascript",
    "etag": "\"24733-mkisWZ4ouxBM2ej0wsl+mmlE5Oc\"",
    "mtime": "2023-08-03T14:52:35.767Z",
    "size": 149299,
    "path": "../../.output/public/_nuxt/entry.54b771d8.js"
  },
  "/_nuxt/entry.54b771d8.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"c654-ypyLZgzbeDmD7OBgE7bVlix5+QI\"",
    "mtime": "2023-08-03T14:52:37.651Z",
    "size": 50772,
    "path": "../../.output/public/_nuxt/entry.54b771d8.js.br"
  },
  "/_nuxt/entry.54b771d8.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"dd16-/gMawcBQfr0iYTmN3VNRWRHu7/8\"",
    "mtime": "2023-08-03T14:52:37.633Z",
    "size": 56598,
    "path": "../../.output/public/_nuxt/entry.54b771d8.js.gz"
  },
  "/_nuxt/entry.6b2c2374.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"52a-SiEJuAvP9H7PX1VP/W7ByyWfTko\"",
    "mtime": "2023-08-03T14:52:35.769Z",
    "size": 1322,
    "path": "../../.output/public/_nuxt/entry.6b2c2374.css"
  },
  "/_nuxt/entry.6b2c2374.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"226-Ds/Yp21BVOfUmtQw9ZVCUDg1QFo\"",
    "mtime": "2023-08-03T14:52:37.629Z",
    "size": 550,
    "path": "../../.output/public/_nuxt/entry.6b2c2374.css.br"
  },
  "/_nuxt/entry.6b2c2374.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"2aa-s0BDCewAxOTcZbPHqlowaxo+x+k\"",
    "mtime": "2023-08-03T14:52:37.629Z",
    "size": 682,
    "path": "../../.output/public/_nuxt/entry.6b2c2374.css.gz"
  },
  "/_nuxt/error-404.7fc72018.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e2e-iNt1cqPQ0WDudfCTZVQd31BeRGs\"",
    "mtime": "2023-08-03T14:52:35.769Z",
    "size": 3630,
    "path": "../../.output/public/_nuxt/error-404.7fc72018.css"
  },
  "/_nuxt/error-404.7fc72018.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"3bc-A93v76RyHPRfYe4hBxU+FIdEgzQ\"",
    "mtime": "2023-08-03T14:52:37.629Z",
    "size": 956,
    "path": "../../.output/public/_nuxt/error-404.7fc72018.css.br"
  },
  "/_nuxt/error-404.7fc72018.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"45c-1+VyLTRNnzODcwQ0o8LkUYC/LmM\"",
    "mtime": "2023-08-03T14:52:37.629Z",
    "size": 1116,
    "path": "../../.output/public/_nuxt/error-404.7fc72018.css.gz"
  },
  "/_nuxt/error-404.cb3785cb.js": {
    "type": "application/javascript",
    "etag": "\"907-cFXv3i3ZRyxrHBCU6rM/OmKr3Oo\"",
    "mtime": "2023-08-03T14:52:35.770Z",
    "size": 2311,
    "path": "../../.output/public/_nuxt/error-404.cb3785cb.js"
  },
  "/_nuxt/error-404.cb3785cb.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"3f8-+/i8AqOrUAhahm4MpSj9R4AHYlo\"",
    "mtime": "2023-08-03T14:52:37.629Z",
    "size": 1016,
    "path": "../../.output/public/_nuxt/error-404.cb3785cb.js.br"
  },
  "/_nuxt/error-404.cb3785cb.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"4a8-ZGnBFnP7KNfllU9nnpNBP42gQJg\"",
    "mtime": "2023-08-03T14:52:37.629Z",
    "size": 1192,
    "path": "../../.output/public/_nuxt/error-404.cb3785cb.js.gz"
  },
  "/_nuxt/error-500.749e9e3d.js": {
    "type": "application/javascript",
    "etag": "\"78b-RQr1GLLsaaRlTBucAKNAV7NXV8A\"",
    "mtime": "2023-08-03T14:52:35.770Z",
    "size": 1931,
    "path": "../../.output/public/_nuxt/error-500.749e9e3d.js"
  },
  "/_nuxt/error-500.749e9e3d.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"367-UJzCAvbNUOmNJHhdPqPJ7SK7Wj4\"",
    "mtime": "2023-08-03T14:52:37.629Z",
    "size": 871,
    "path": "../../.output/public/_nuxt/error-500.749e9e3d.js.br"
  },
  "/_nuxt/error-500.749e9e3d.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"3f9-Y4UE0Smc7aZaFbrGnpERgS//J/E\"",
    "mtime": "2023-08-03T14:52:37.629Z",
    "size": 1017,
    "path": "../../.output/public/_nuxt/error-500.749e9e3d.js.gz"
  },
  "/_nuxt/error-500.c5df6088.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"79e-ByRo+49BgcevWdRjJy3CMx2IA5k\"",
    "mtime": "2023-08-03T14:52:35.769Z",
    "size": 1950,
    "path": "../../.output/public/_nuxt/error-500.c5df6088.css"
  },
  "/_nuxt/error-500.c5df6088.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"274-4xEvWHud9noP0LeNHeTu/3OGrf0\"",
    "mtime": "2023-08-03T14:52:37.629Z",
    "size": 628,
    "path": "../../.output/public/_nuxt/error-500.c5df6088.css.br"
  },
  "/_nuxt/error-500.c5df6088.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"2df-QUvEyyuxTk2JTzzklyLmk1+bd2A\"",
    "mtime": "2023-08-03T14:52:37.629Z",
    "size": 735,
    "path": "../../.output/public/_nuxt/error-500.c5df6088.css.gz"
  },
  "/_nuxt/index.5fa398c8.js": {
    "type": "application/javascript",
    "etag": "\"1f26-59t7BMLNShJSnmjSg/KzNaBkLk8\"",
    "mtime": "2023-08-03T14:52:35.770Z",
    "size": 7974,
    "path": "../../.output/public/_nuxt/index.5fa398c8.js"
  },
  "/_nuxt/index.5fa398c8.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"857-GVICGMHeoXX19roVi2KQ8cmDKsw\"",
    "mtime": "2023-08-03T14:52:37.629Z",
    "size": 2135,
    "path": "../../.output/public/_nuxt/index.5fa398c8.js.br"
  },
  "/_nuxt/index.5fa398c8.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"9d6-Mc24obiS3saw4kT8bAuKtEfseiE\"",
    "mtime": "2023-08-03T14:52:37.629Z",
    "size": 2518,
    "path": "../../.output/public/_nuxt/index.5fa398c8.js.gz"
  },
  "/_nuxt/index.98b50a30.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"26d5-MkFiC+wggPdZ2dYzemSGvhtKfDo\"",
    "mtime": "2023-08-03T14:52:35.769Z",
    "size": 9941,
    "path": "../../.output/public/_nuxt/index.98b50a30.css"
  },
  "/_nuxt/index.98b50a30.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"67e-E6UUAbFPkTh6fDKTVBZKK86H6gg\"",
    "mtime": "2023-08-03T14:52:37.629Z",
    "size": 1662,
    "path": "../../.output/public/_nuxt/index.98b50a30.css.br"
  },
  "/_nuxt/index.98b50a30.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"77a-hUYVJY0h6kbNGhQDFxFjz79OqIA\"",
    "mtime": "2023-08-03T14:52:37.629Z",
    "size": 1914,
    "path": "../../.output/public/_nuxt/index.98b50a30.css.gz"
  },
  "/_nuxt/Manrope-Regular.2960175e.ttf": {
    "type": "font/ttf",
    "etag": "\"17a40-A2sUBkx7kLSyAPJzCYHv/qXlixU\"",
    "mtime": "2023-08-03T14:52:35.769Z",
    "size": 96832,
    "path": "../../.output/public/_nuxt/Manrope-Regular.2960175e.ttf"
  },
  "/_nuxt/Manrope-Regular.2960175e.ttf.br": {
    "type": "font/ttf",
    "encoding": "br",
    "etag": "\"9068-Vo6sx67yaFEARMuaAT/FE9mF8xM\"",
    "mtime": "2023-08-03T14:52:37.632Z",
    "size": 36968,
    "path": "../../.output/public/_nuxt/Manrope-Regular.2960175e.ttf.br"
  },
  "/_nuxt/Manrope-Regular.2960175e.ttf.gz": {
    "type": "font/ttf",
    "encoding": "gzip",
    "etag": "\"a445-Q0uNq/prJrWvAUhGp4n6Iq9s1Vg\"",
    "mtime": "2023-08-03T14:52:37.632Z",
    "size": 42053,
    "path": "../../.output/public/_nuxt/Manrope-Regular.2960175e.ttf.gz"
  },
  "/_nuxt/Manrope-SemiBold.9cb6bdf0.ttf": {
    "type": "font/ttf",
    "etag": "\"17aa8-5CPhEvSDKRawUwiTTBCqhP0Uxgc\"",
    "mtime": "2023-08-03T14:52:35.769Z",
    "size": 96936,
    "path": "../../.output/public/_nuxt/Manrope-SemiBold.9cb6bdf0.ttf"
  },
  "/_nuxt/Manrope-SemiBold.9cb6bdf0.ttf.br": {
    "type": "font/ttf",
    "encoding": "br",
    "etag": "\"8fcd-79BYZK45cQ34T3E/7LLyZyNnzAI\"",
    "mtime": "2023-08-03T14:52:37.632Z",
    "size": 36813,
    "path": "../../.output/public/_nuxt/Manrope-SemiBold.9cb6bdf0.ttf.br"
  },
  "/_nuxt/Manrope-SemiBold.9cb6bdf0.ttf.gz": {
    "type": "font/ttf",
    "encoding": "gzip",
    "etag": "\"a487-+5qGL0bTuBxBXWGP9u287F3l7kU\"",
    "mtime": "2023-08-03T14:52:37.632Z",
    "size": 42119,
    "path": "../../.output/public/_nuxt/Manrope-SemiBold.9cb6bdf0.ttf.gz"
  },
  "/_nuxt/nuxt-link.e5172fad.js": {
    "type": "application/javascript",
    "etag": "\"10f7-lkQTHp2y9mQEJTqmxtbqd8ypmpY\"",
    "mtime": "2023-08-03T14:52:35.769Z",
    "size": 4343,
    "path": "../../.output/public/_nuxt/nuxt-link.e5172fad.js"
  },
  "/_nuxt/nuxt-link.e5172fad.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"691-ehdXeqCHtJfY0gDmWlJH6zcMVhk\"",
    "mtime": "2023-08-03T14:52:37.629Z",
    "size": 1681,
    "path": "../../.output/public/_nuxt/nuxt-link.e5172fad.js.br"
  },
  "/_nuxt/nuxt-link.e5172fad.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"746-co0wNMDVVXd3BrVixvb8kqZXUag\"",
    "mtime": "2023-08-03T14:52:37.629Z",
    "size": 1862,
    "path": "../../.output/public/_nuxt/nuxt-link.e5172fad.js.gz"
  },
  "/_nuxt/_plugin-vue_export-helper.c27b6911.js": {
    "type": "application/javascript",
    "etag": "\"5b-eFCz/UrraTh721pgAl0VxBNR1es\"",
    "mtime": "2023-08-03T14:52:35.769Z",
    "size": 91,
    "path": "../../.output/public/_nuxt/_plugin-vue_export-helper.c27b6911.js"
  },
  "/assets/icons/blind.svg": {
    "type": "image/svg+xml",
    "etag": "\"6b1-sO21OmKkT6Xn6v+ywdBzInRPaSc\"",
    "mtime": "2023-08-03T14:51:20.418Z",
    "size": 1713,
    "path": "../../.output/public/assets/icons/blind.svg"
  },
  "/assets/icons/blind.svg.br": {
    "type": "image/svg+xml",
    "encoding": "br",
    "etag": "\"2f9-6XTWIfJp5ESfoIuTAPm+O5Z2abM\"",
    "mtime": "2023-08-03T14:52:37.629Z",
    "size": 761,
    "path": "../../.output/public/assets/icons/blind.svg.br"
  },
  "/assets/icons/blind.svg.gz": {
    "type": "image/svg+xml",
    "encoding": "gzip",
    "etag": "\"340-LZnMeE4z2/oAJuzGQbZ8dPV5fAY\"",
    "mtime": "2023-08-03T14:52:37.629Z",
    "size": 832,
    "path": "../../.output/public/assets/icons/blind.svg.gz"
  },
  "/assets/icons/burger.svg": {
    "type": "image/svg+xml",
    "etag": "\"110-g8lQvn852+MhUuQcuG0NAVLdsd8\"",
    "mtime": "2023-08-03T14:51:20.419Z",
    "size": 272,
    "path": "../../.output/public/assets/icons/burger.svg"
  },
  "/assets/icons/search.svg": {
    "type": "image/svg+xml",
    "etag": "\"1b5-te5mep3ddnb/XRgz1VSg4va69Oc\"",
    "mtime": "2023-08-03T14:51:20.419Z",
    "size": 437,
    "path": "../../.output/public/assets/icons/search.svg"
  },
  "/assets/icons/x.svg": {
    "type": "image/svg+xml",
    "etag": "\"161-uxJzZpluUlHeYK7t0mATV+nQ+XE\"",
    "mtime": "2023-08-03T14:51:20.419Z",
    "size": 353,
    "path": "../../.output/public/assets/icons/x.svg"
  },
  "/assets/scss/_colors.scss": {
    "type": "text/x-scss; charset=utf-8",
    "etag": "\"8f-/mjjIqpYFdyw3K3ZeDdVLUEiBW0\"",
    "mtime": "2023-08-03T14:51:20.422Z",
    "size": 143,
    "path": "../../.output/public/assets/scss/_colors.scss"
  },
  "/assets/fonts/Manrope/Manrope-Regular.ttf": {
    "type": "font/ttf",
    "etag": "\"17a40-A2sUBkx7kLSyAPJzCYHv/qXlixU\"",
    "mtime": "2023-08-03T14:51:20.416Z",
    "size": 96832,
    "path": "../../.output/public/assets/fonts/Manrope/Manrope-Regular.ttf"
  },
  "/assets/fonts/Manrope/Manrope-Regular.ttf.br": {
    "type": "font/ttf",
    "encoding": "br",
    "etag": "\"9068-Vo6sx67yaFEARMuaAT/FE9mF8xM\"",
    "mtime": "2023-08-03T14:52:37.632Z",
    "size": 36968,
    "path": "../../.output/public/assets/fonts/Manrope/Manrope-Regular.ttf.br"
  },
  "/assets/fonts/Manrope/Manrope-Regular.ttf.gz": {
    "type": "font/ttf",
    "encoding": "gzip",
    "etag": "\"a445-Q0uNq/prJrWvAUhGp4n6Iq9s1Vg\"",
    "mtime": "2023-08-03T14:52:37.632Z",
    "size": 42053,
    "path": "../../.output/public/assets/fonts/Manrope/Manrope-Regular.ttf.gz"
  },
  "/assets/fonts/Manrope/Manrope-SemiBold.ttf": {
    "type": "font/ttf",
    "etag": "\"17aa8-5CPhEvSDKRawUwiTTBCqhP0Uxgc\"",
    "mtime": "2023-08-03T14:51:20.417Z",
    "size": 96936,
    "path": "../../.output/public/assets/fonts/Manrope/Manrope-SemiBold.ttf"
  },
  "/assets/fonts/Manrope/Manrope-SemiBold.ttf.br": {
    "type": "font/ttf",
    "encoding": "br",
    "etag": "\"8fcd-79BYZK45cQ34T3E/7LLyZyNnzAI\"",
    "mtime": "2023-08-03T14:52:37.793Z",
    "size": 36813,
    "path": "../../.output/public/assets/fonts/Manrope/Manrope-SemiBold.ttf.br"
  },
  "/assets/fonts/Manrope/Manrope-SemiBold.ttf.gz": {
    "type": "font/ttf",
    "encoding": "gzip",
    "etag": "\"a487-+5qGL0bTuBxBXWGP9u287F3l7kU\"",
    "mtime": "2023-08-03T14:52:37.632Z",
    "size": 42119,
    "path": "../../.output/public/assets/fonts/Manrope/Manrope-SemiBold.ttf.gz"
  },
  "/assets/fonts/Manrope/style.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"153-rNLKuyPC6PyqsFcls6lW17tgsfg\"",
    "mtime": "2023-08-03T14:51:20.418Z",
    "size": 339,
    "path": "../../.output/public/assets/fonts/Manrope/style.css"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt":{"maxAge":31536000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.node.req.method && !METHODS.has(event.node.req.method)) {
    return;
  }
  let id = decodeURIComponent(
    withLeadingSlash(
      withoutTrailingSlash(parseURL(event.node.req.url).pathname)
    )
  );
  let asset;
  const encodingHeader = String(
    event.node.req.headers["accept-encoding"] || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    event.node.res.setHeader("Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      event.node.res.removeHeader("cache-control");
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.node.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    if (!event.handled) {
      event.node.res.statusCode = 304;
      event.node.res.end();
    }
    return;
  }
  const ifModifiedSinceH = event.node.req.headers["if-modified-since"];
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    if (!event.handled) {
      event.node.res.statusCode = 304;
      event.node.res.end();
    }
    return;
  }
  if (asset.type && !event.node.res.getHeader("Content-Type")) {
    event.node.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag && !event.node.res.getHeader("ETag")) {
    event.node.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime && !event.node.res.getHeader("Last-Modified")) {
    event.node.res.setHeader("Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !event.node.res.getHeader("Content-Encoding")) {
    event.node.res.setHeader("Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !event.node.res.getHeader("Content-Length")) {
    event.node.res.setHeader("Content-Length", asset.size);
  }
  return readAsset(id);
});

const _lazy_nvkz09 = () => import('../renderer.mjs').then(function (n) { return n.r; });

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/**', handler: _lazy_nvkz09, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(false),
    onError: errorHandler
  });
  const router = createRouter$1();
  h3App.use(createRouteRulesHandler());
  const localCall = createCall(toNodeListener(h3App));
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || {};
      const envContext = event.node.req.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const localFetch = nitroApp.localFetch;
trapUnhandledNodeErrors();

export { useRuntimeConfig as a, getRouteRules as g, localFetch as l, useNitroApp as u };
//# sourceMappingURL=nitro-prerenderer.mjs.map
