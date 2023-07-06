/*
 * tagContainer Generator v82.0
 * Copyright Commanders Act
 * https://www.commandersact.com/fr/
 * Generated: 2023-03-15 15:18:39 Europe/Paris
 * ---
 * Version	: 1.02
 * IDTC 	: 12
 * IDS		: 4056
 */

if(typeof tC == 'undefined'){
  if (typeof document.domain == 'undefined' ||typeof document.referrer == 'undefined')
    document = window.document;

  /*
  if (typeof console == 'undefined' || typeof console.log == 'undefined')
      var console = {
          log        : function() {},
          error    : function() {},
          warn    : function() {}
      };
   */


  (function(window, undefined) {
    var
      roottC,
      readyList,
      document         = window.document,
      location         = window.location,
      navigator         = window.navigator,
      _tC             = window.tC,
      _$                 = window.$,
      core_push         = Array.prototype.push,
      core_slice         = Array.prototype.slice,
      core_indexOf     = Array.prototype.indexOf,
      core_toString     = Object.prototype.toString,
      core_hasOwn     = Object.prototype.hasOwnProperty,
      core_trim         = String.prototype.trim,
      tC = function(selector, context) {
        return new tC.fn.init(selector, context, roottC);
      },
      core_pnum        = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
      core_rnotwhite    = /\S/,
      core_rspace        = /\s+/,
      rtrim            = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      rquickExpr        = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
      rsingleTag        = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
      rvalidchars        = /^[\],:{}\s]*$/,
      rvalidbraces    = /(?:^|:|,)(?:\s*\[)+/g,
      rvalidescape    = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
      rvalidtokens    = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
      rmsPrefix        = /^-ms-/,
      rdashAlpha        = /-([\da-z])/gi, fcamelCase = function(all, letter) {
        return (letter + "").toUpperCase();
      },
      class2type = {};

    tC.fn = tC.prototype = {
      constructor : tC,
      init : function(selector, context, roottC) {
        var match, elem, ret, doc;
        if (!selector) {
          return this;
        }
        if (selector.nodeType) {
          this.context = this[0] = selector;
          this.length = 1;
          return this;
        }
        if ( typeof selector === "string") {
          if (selector.charAt(0) === "<" && selector.charAt(selector.length - 1) === ">" && selector.length >= 3) {
            match = [null, selector, null];
          } else {
            match = rquickExpr.exec(selector);
          }
          if (match && (match[1] || !context)) {
            if (match[1]) {
              context        = context instanceof tC ? context[0] : context;
              doc            = (context && context.nodeType ? context.ownerDocument || context : document);
              selector    = tC.parseHTML(match[1], doc, true);
              if (rsingleTag.test(match[1]) && tC.isPlainObject(context)) {
                this.attr.call(selector, context, true);
              }
              return tC.merge(this, selector);
            } else {
              elem = document.getElementById(match[2]);
              if (elem && elem.parentNode) {
                if (elem.id !== match[2]) {
                  return roottC.find(selector);
                }
                this.length = 1;
                this[0] = elem;
              }
              this.context = document;
              this.selector = selector;
              return this;
            }
          } else if (!context || context.tC) {
            return (context || roottC).find(selector);
          } else {
            return this.constructor(context).find(selector);
          }
        } else if (tC.isFunction(selector)) {
          return roottC.ready(selector);
        }
        if (selector.selector !== undefined) {
          this.selector = selector.selector;
          this.context = selector.context;
        }
        return tC.makeArray(selector, this);
      },
      each : function(callback, args) {
        return tC.each(this, callback, args);
      },
      ready : function(fn) {
        // Add the callback
        //tC.ready.promise().done(fn);
        //CORRECTION SF/DP ... A VALIDER PAR MG
        tC.ready.promise(fn);
        return this;
      }
    };

    tC.fn.init.prototype = tC.fn;
    tC.extend = tC.fn.extend = function() {
      var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i = 1, length = arguments.length, deep = false;
      if ( typeof target === "boolean") {
        deep = target;
        target = arguments[1] || {};
        i = 2;
      }
      if ( typeof target !== "object" && !tC.isFunction(target)) {
        target = {};
      }
      if (length === i) {
        target = this; --i;
      }
      for (; i < length; i++) {
        if (( options = arguments[i]) != null) {
          for (name in options) {
            src = target[name];
            copy = options[name];
            if (target === copy) {
              continue;
            }
            if (deep && copy && (tC.isPlainObject(copy) || ( copyIsArray = tC.isArray(copy)))) {
              if (copyIsArray) {
                copyIsArray = false;
                clone = src && tC.isArray(src) ? src : [];
              } else {
                clone = src && tC.isPlainObject(src) ? src : {};
              }
              target[name] = tC.extend(deep, clone, copy);
            } else if (copy !== undefined) {
              target[name] = copy;
            }
          }
        }
      }
      return target;
    };

    tC.extend({
      ssl : "https://manager.",
      randOrd : function(){
        return (Math.round(Math.random())-0.5);
      },
      nodeNames : "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|" +
        "header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
      rnocache : /<(?:script|object|embed|option|style)/i,
      rnoshimcache : new RegExp("<(?:" + tC.nodeNames + ")[\\s/>]", "i"),
      rchecked : /checked\s*(?:[^=]|=\s*.checked.)/i,
      containersLaunched  : {}
    });

    tC.extend({
      inArray: function( elem, arr, i ) {
        var len,
          core_indexOf     = Array.prototype.indexOf;

        if ( arr ) {
          if ( core_indexOf ) {
            return core_indexOf.call( arr, elem, i );
          }

          len = arr.length;
          i = i ? i < 0 ? Math.max( 0, len + i ) : i : 0;

          for ( ; i < len; i++ ) {
            if ( i in arr && arr[ i ] === elem ) {
              return i;
            }
          }
        }
        return -1;
      },
      isFunction : function(obj) {
        return tC.type(obj) === "function";
      },
      isArray : Array.isArray || function(obj) {
        return tC.type(obj) === "array";
      },
      isWindow : function(obj) {
        return obj != null && obj == obj.window;
      },
      isNumeric : function(obj) {
        return !isNaN(parseFloat(obj)) && isFinite(obj);
      },
      type : function(obj) {
        return obj == null ? String(obj) : class2type[core_toString.call(obj)] || "object";
      },
      each : function(obj, callback, args) {
        var name, i = 0, length = obj.length, isObj = length === undefined || tC.isFunction(obj);
        if (args) {
          if (isObj) {
            for (name in obj) {
              if (callback.apply(obj[name], args) === false) {
                break;
              }
            }
          } else {
            for (; i < length; ) {
              if (callback.apply(obj[i++], args) === false) {
                break;
              }
            }
          }
        } else {
          if (isObj) {
            for (name in obj) {
              if (callback.call(obj[name], name, obj[name]) === false) {
                break;
              }
            }
          } else {
            for (; i < length; ) {
              if (callback.call(obj[i], i, obj[i++]) === false) {
                break;
              }
            }
          }
        }
        return obj;
      },
      log : function(v, t) {
        try {
          if(tC.getCookie('tCdebugLib') && console) console[t ? t : 'log'](v);
        }catch(e) {}
      }
    });

    tC.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(i, name) {
      class2type["[object " + name + "]"] = name.toLowerCase();
    });

    roottC = tC(document);
    var optionsCache = {};

    function createOptions(options) {
      var object = optionsCache[options] = {};
      tC.each(options.split(core_rspace), function(_, flag) {
        object[flag] = true;
      });
      return object;
    }

    tC.buildFragment = function( args, context, scripts ) {
      var fragment, cacheable, cachehit,
        first = args[ 0 ];

      // Set context from what may come in as undefined or a jQuery collection or a node
      // Updated to fix #12266 where accessing context[0] could throw an exception in IE9/10 &
      // also doubles as fix for #8950 where plain objects caused createDocumentFragment exception
      context = context || document;
      context = !context.nodeType && context[0] || context;
      context = context.ownerDocument || context;

      // Only cache "small" (1/2 KB) HTML strings that are associated with the main document
      // Cloning options loses the selected state, so don't cache them
      // IE 6 doesn't like it when you put <object> or <embed> elements in a fragment
      // Also, WebKit does not clone 'checked' attributes on cloneNode, so don't cache
      // Lastly, IE6,7,8 will not correctly reuse cached fragments that were created from unknown elems #10501
      if ( args.length === 1 && typeof first === "string" && first.length < 512 && context === document &&
        first.charAt(0) === "<" && !tC.rnocache.test( first ) &&
        (tC.support.checkClone || !tC.rchecked.test( first )) &&
        (tC.support.html5Clone || !tC.rnoshimcache.test( first )) ) {

        // Mark cacheable and look for a hit
        cacheable = true;
        fragment = jQuery.fragments[ first ];
        cachehit = fragment !== undefined;
      }

      if ( !fragment ) {
        fragment = context.createDocumentFragment();
        tC.clean( args, context, fragment, scripts );

        // Update the cache, but only store false
        // unless this is a second parsing of the same content
        if ( cacheable ) {
          tC.fragments[ first ] = cachehit && fragment;
        }
      }

      return { fragment: fragment, cacheable: cacheable };
    };

    window.tC = tC;
  })(window);

  /*NON utilisée - SF/MG 17/12/2013
  function createSafeFragment( document ) {
      var list = nodeNames.split( "|" ),
      safeFrag = document.createDocumentFragment();

      if ( safeFrag.createElement ) {
          while ( list.length ) {
              safeFrag.createElement(
                  list.pop()
              );
          }
      }
      return safeFrag;
  }*/
}
// Unique timestamp for first container loaded
tC.containerStart = tC.containerStart || Date.now();

if (!tC.maindomain) {
  (function() {
    var hostname = location.hostname;
    var tb = hostname.split('.');
    // eslint-disable-next-line no-useless-escape
    var ipregexp = '^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$';
    //if local domain without extension or domain is one ip
    if(
      tb.length  < 2 || hostname.match(ipregexp)
    ){
      tC.maindomain = hostname;
      //else it's one other domain
    }else{
      tC.maindomain = tb[tb.length - 2] + '.' + tb[tb.length - 1];
    }
  })();
}

tC.extend({
  internalvars           : typeof tC.internalvars !== 'undefined' ? tC.internalvars : {},
  internalFunctions      : typeof tC.internalFunctions !== 'undefined' ? tC.internalFunctions : {},
  privacyVersion         : tC.privacyVersion || '',
  containerVersion       : String(1.02),
  id_container           : String(12),
  id_site                : String(4056),
  generatorVersion       : '1.0.0',
  dedup_done             : typeof tC.dedup_done !== 'undefined' ? tC.dedup_done : false,
});

(function() {
  var internalvarsSite = {};
  internalvarsSite['internalvars_' + 4056] = typeof tC['internalvars_' + 4056] !== 'undefined' ? tC['internalvars_' + 4056] : {};
  tC.extend(internalvarsSite);
})();

window['tC_' + 4056 + '_' + 12] = {
  id_container           : String(12),
  id_site                : String(4056),
  frequency              : String(1000),
  containerVersion       : String(1.02),
  generatorVersion       : '82.0'
};

tC.extend({
  launchTag           : function (id, label, template, idSite, idContainer, idTrigger) {
    if(typeof idTrigger === 'undefined'){
      idTrigger = 0;
    }

    tC.array_launched_tags.push(label);
    tC.array_launched_tags_keys.push(id);

    tC.containersLaunched[idSite][idContainer].t.push({
      id      : id,
      label   : label,
      idTpl   : template
    });

    window.top.postMessage('TC.EX:{"id":"'+id+'","idc":"'+idContainer+'","idt":"'+template+'","ids":"'+idSite+'","lb":"'+label.replace(/"/g, '\\"')+'","idtr":"'+idTrigger+'"}', '*');

  }
});

if (typeof tC.containersLaunched === 'undefined') {
  tC.containersLaunched = {};
}

if (typeof tC.containersLaunched[4056] === 'undefined') {
  tC.containersLaunched[4056] = {};
}

tC.containersLaunched[4056][12] = {v:String(1.02), t:[], g:'82.0'};

/*extends*/

tC.coreReadyStandalone = true;
if (tC.isDOMReady) {
  tC.coreReadyStandalone = false;
}

tC.domReady = tC.domReady || false;

tC.isDOMReady = tC.isDOMReady || function() {
  if (document.readyState === 'complete' || document.readyState === 'loaded')
    return true;
  if (document.readyState !== 'interactive')
    return false;
  if (!document.documentElement.doScroll)
    return true;
  try {
    document.documentElement.doScroll('left');
    return true;
  } catch (e) {
    return false;
  }
};

tC.waitingOnDomReadyCallBacks = tC.waitingOnDomReadyCallBacks || [];

tC.excuteOnDomReadyCallBacks = tC.excuteOnDomReadyCallBacks || function() {
  for (var i = 0; i < tC.waitingOnDomReadyCallBacks.length; i++) {
    tC.waitingOnDomReadyCallBacks[i]();
  }
  tC.waitingOnDomReadyCallBacks = [];
};

tC.onDomReady = tC.onDomReady || function(callback) {

  if(this.domReady){
    callback();
    return;
  }

  tC.waitingOnDomReadyCallBacks.push(callback);
  var browserTypeSet = false;
  /* Mozilla, Chrome, Opera */
  if (document.addEventListener) {
    browserTypeSet = true;
    document.addEventListener('DOMContentLoaded', function() {
      document.removeEventListener('DOMContentLoaded', arguments.callee, false);
      tC.excuteOnDomReadyCallBacks();
    }, false);
  }
  // If IE event model is used
  else if (document.attachEvent) {
    browserTypeSet = true;
    // ensure firing before onload,
    // maybe late but safe also for iframes
    document.attachEvent('onreadystatechange', function() {
      if (document.readyState === 'complete') {
        document.detachEvent('onreadystatechange', arguments.callee);
        tC.excuteOnDomReadyCallBacks();
      }
    });

    // If IE and not an iframe
    // continually check to see if the document is ready
    if (document.documentElement.doScroll && window === window.top)
      (function() {
        if (tC.domReady)
          return;

        try {
          // If IE is used, use the trick by Diego Perini
          // http://javascript.nwbox.com/IEContentLoaded/
          document.documentElement.doScroll('left');
        } catch( error ) {
          setTimeout(arguments.callee, 0);
          return;
        }

        // and execute any waiting functions
        tC.excuteOnDomReadyCallBacks();
      })();
  }
  /* Other web browsers */
  if (!browserTypeSet) {
    window.onload = tC.excuteOnDomReadyCallBacks;
  }
};

if (tC.coreReadyStandalone === true) {
  if(tC.isDOMReady()){
    tC.domReady = true;
  }else{
    tC.onDomReady(function() {
      tC.domReady = true;
    });
  }
}

(function() {
  'use strict';
  tC.cactUtils = {};

  var defaultCallback = function() {};
  tC.cactUtils.formatArgumentsV2 = function(args) {
    var message = {};
    var nextArg = 0;

    if (typeof args[nextArg] === 'string') {
      message.event = args[nextArg++];
    }
    if (typeof args[nextArg] === 'object') {
      message.properties = Object.assign({}, args[nextArg++]); // eslint-disable-line es/no-object-assign
    }
    if (typeof args[nextArg] === 'object') {
      message.config = Object.assign({}, args[nextArg++]); // eslint-disable-line es/no-object-assign
    }
    if (typeof args[nextArg] === 'function') {
      message.callback = args[nextArg++];
    }
    message.properties = message.properties || {};
    message.config = message.config || {};
    message.callback = message.callback || defaultCallback;
    return message;
  };
})();

(function() {
  'use strict';

  var tC = window.tC;
  var apiVersion = 2;

  if (tC == null || (tC.cact && tC.cactInfo && tC.cactInfo.apiVersion >= apiVersion)) {
    return;
  }

  var isArrayLike = function(message) {
    return message.toString() === '[object Arguments]' || Array.isArray(message);
  };

  var formatOldQueue = function(queue) {
    return queue.map(function(message) {
      if (isArrayLike(message)) {
        return message;
      }

      var args = JSON.parse(JSON.stringify(message));
      var _done = args._done;
      delete args.event;
      delete args.callback;
      delete args._done;

      var newMessage;
      if (Object.keys(args).length !== 0) {
        newMessage = [ message.event, args, message.callback ];
      } else {
        newMessage = [ message.event, message.callback ];
      }
      if (_done) {
        newMessage._tc_meta = { done: _done };
      }
      return newMessage;
    });
  };

  window.caReady = window.caReady || [];
  window.cact = window.cact || function() {
    window.caReady.push(arguments);
  };

  if (tC.cact) { // there is a version to override
    window.caReady = formatOldQueue(window.caReady); // this will also remove the push override
  }

  tC.cact = tC.cact || {}; // namespace for container apis
  tC.cactInfo = { apiVersion: apiVersion };

  var processEvent = function(message) {
    message._tc_meta = message._tc_meta || {};
    var command = message[0];
    if (message._tc_meta.done || tC.cact[command] == null) {
      return;
    }

    // preserve from infinite recursion
    message._tc_meta = message._tc_meta || {};
    message._tc_meta.done = true;

    var version = tC.cact[command]._tc_version;
    message = Array.prototype.slice.call(message, version == null ? 0 : 1); // from version 2, strip command
    if (version == null) {
      var formatedMessage = formatArgumentsV1(message);
      tC.cact[command](formatedMessage, formatedMessage.callback);
    } else {
      tC.cact[command].apply(tC.cact, message);
    }
  };

  var defaultCallback = function() {};
  var formatArgumentsV1 = function(args) {
    var message;
    var callback;
    if (typeof args[1] === 'object') {
      message = args[1];
      callback = args[2];
    } else if (typeof args[1] === 'function') {
      message = {};
      callback = args[1];
    } else {
      message = {};
    }
    message.event = args[0];
    message.callback = callback || defaultCallback;
    return message;
  };

  var processAllEvents = function() {
    for (var i = 0; i < window.caReady.length; ++i) {
      processEvent(window.caReady[i]);
    }
    var message = tC.cactUtils.formatArgumentsV2(arguments);
    if (message && message.callback) message.callback(); // mostly for test purposes on the "exec" command
  };
  tC.cact.exec = processAllEvents;

  var pushEvent = function(message) {
    Array.prototype.push.call(window.caReady, message);
    processEvent(message);
  };
  Object.defineProperty(window.caReady, 'push', { configurable: true, value: pushEvent });

  tC.cact.exec();
})();

(function () {
  'use strict';

  tC.config = tC.config || {};
  tC.cact.config = function () {
    var args = tC.cactUtils.formatArgumentsV2(arguments);
    var callback = args.callback;

    Object.assign(tC.config, args.properties); // eslint-disable-line es/no-object-assign
    callback();
  };

  tC.cact.config._tc_version = 2;

})();

(function () {
  'use strict';

  tC.cact.trigger = function () {
    var args = tC.cactUtils.formatArgumentsV2(arguments);
    var event = args.event;
    var properties = args.properties;
    var config = args.config;
    var callback = args.callback;

    if (typeof event !== 'string' || event === '') {
      return;
    }
    tC.trigger({
      event: event,
      properties: properties,
      config: config,
    });
    callback();
    return tC.uniqueEventIndex;
  };

  tC.cact.trigger._tc_version = 2;
})();

/*
 *
 */
tC.extend({
  isCurrentVersion:function(){
    if (Boolean(tC.bypassBookmarklet) === true) {
      return true;
    }
    /*
     * return true :
     * - if bm is disable,
     * - if bm is enable but the container is loaded by the bookmarklet
     * else return false
     */
    var v = tC.getCookie('tc_mode_test');
    var t = 'testModeIncludeReplaceThisByTrue' ;
    /*
     * info : 'testModeIncludeReplaceThisByTrue' is replaced by "true" by the test mode include script
     */
    return v !== '1' || (v === '1' && t === 'true');
  }
});



/*
 * Extension pixelTrack
 *
 * @vars
 */

tC.pixelTrack = tC.pixelTrack || {
  add : function(u, t) {
    u = u || 0;
    t = t || 'img';
    tC.onDomReady(function() {
      var d;
      if(t === 'iframe'){
        d = document.createElement(t);
        d.src = u;
        d.width = 1;
        d.height = 1;
        d.style.display = 'none';
        document.body.appendChild(d);
      }else{
        d = new Image();
        d.src = u;
      }
    });
  }
};

tC.setCookie = tC.setCookie || function(name, value, expires, path, domain, secure, sameSite) {
  if (!domain) {
    domain = tC.domain();
  }

  tC.cookieForceSameSite = tC.cookieForceSameSite || '';
  sameSite = sameSite || tC.cookieForceSameSite;

  if (!tC.isSameSiteContext()) {
    sameSite = 'None'; // 'Lax' and 'Strict' will not work in cross-site context iframes
  }
  if (!sameSite) {
    sameSite = tC.isSubdomain(domain) ? 'Lax': 'None';
  }

  tC.cookieForceSecure = tC.cookieForceSecure != null ? tC.cookieForceSecure : '';// "first container wins"
  secure = secure == null ? Boolean(Number(tC.cookieForceSecure)) : secure; // double-cast to handle properly '0' value (0 as a string)

  if (sameSite.toLowerCase() === 'none') {// even if we want to force secure setting, SameSite=None must not be set withtout secure flag (or popular browsers may not set cookie)
    secure = true;
  }

  var today = new Date();
  today.setTime(today.getTime());
  if (expires)
    expires = expires * 1000 * 60 * 60 * 24;
  var expires_date = new Date(today.getTime() + (expires));

  var cookieString = name + '=' + tC.cookieEncode(value)
    + ((expires) ? ';expires=' + expires_date.toGMTString() : '' )
    + ((path) ? ';path=' + path : ';path=/' )
    + ((domain) ? ';domain=' + domain : '' )
    + ((secure) ? ';secure' : '' )
    + ';SameSite=' + sameSite;
  document.cookie = cookieString;
};

tC.cookieEncode = tC.cookieEncode || function (value) {
  var specialChars = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
  };
  var encoded = encodeURIComponent(value)
    .replace(/[!~'()]/g, function(x) {
      return specialChars[x];
    });
  return encoded;
};

tC.getCookie = tC.getCookie || function(key) {
  if (key == null) {
    return '';
  }
  var whitelist = '@$'.split('');
  var hasWhitelistChars = whitelist.some(function(c) {
    return key.indexOf(c) !== -1;
  });
  if (!hasWhitelistChars) {
    key = encodeURIComponent(key);
  } else {
    key = key.replace('$', '\\$');
  }
  var result = new RegExp('(?:^|; )' + key + '=([^;]*)').exec(document.cookie);
  if (result) {
    var decodedValue = '';
    try {
      decodedValue = decodeURIComponent(result[1]);
    } catch(e) {
      decodedValue = unescape(result[1]);
    }
    return decodedValue;
  }

  return '';
};

tC.cookieCheck = function(options) {
  var domain = options.domain ? ';domain=' + options.domain : '';
  var samesite = options.samesite ? ';samesite=' + options.samesite : '';
  var cookieName = 'tc_test_cookie';
  var cookieValue = Math.random().toString(36).substr(2, 9);

  var cookieSet;
  var cookieString =
    cookieName + '=' + cookieValue + ';expires=0;path=/;' + samesite + domain;
  document.cookie = cookieString;

  var match = new RegExp('(?:^|; )' + cookieName + '=([^;]*)').exec(document.cookie);
  if (match) match = match[1];
  cookieSet = match === cookieValue;
  if (cookieSet) {
    cookieString =
      cookieName + '=;expires=' + new Date(0).toUTCString() + ';path=/;' + samesite + domain;
    document.cookie = cookieString;
  }
  return cookieSet;
};

tC._samesite = tC._samesite || null;
tC.isSameSiteContext = tC.isSameSiteContext || function() {
  if (tC._samesite != null) {
    return tC._samesite;
  }
  if (tC.isCrossDomainContext()) {
    tC._samesite = false;
  } else {
    tC._samesite = tC.cookieCheck({ samesite: 'lax' });
  }
  return tC._samesite;
};

tC.isCookieEnabled = function () {
  // Quick test if browser has cookieEnabled host property
  if (navigator.cookieEnabled && window.navigator.userAgent.indexOf('MSIE') === -1) {
    return true;
  }
  return tC.cookieCheck();
};

tC.removeCookie = tC.removeCookie || function (name, domain) {
  this.setCookie(name, '', -1, '/', domain);
};

/*
 * Extension domain
 */

tC._domain = tC._domain || null;
tC.domain = tC.domain || function() {
  if (tC._domain != null) {
    return tC._domain;
  }

  var domainParts = (tC.tc_hdoc.domain || '').toLowerCase().split('.');
  var domainLength = domainParts.length;
  if (domainLength === 0) {
    return '';
  }

  var cookieCheck = false;
  var domain;
  for (var domainLevel = 2; !cookieCheck && domainLevel <= domainLength; ++domainLevel) {
    domain = '.' + domainParts.slice(domainLength - domainLevel, domainLength).join('.');
    cookieCheck = tC.cookieCheck({ domain: domain });
  }

  tC._domain = domain || '';
  return tC._domain;
};

tC.isSubdomain = tC.isSubdomain || function(domain) {
  if (domain && domain[0] === '.') {
    domain = domain.substr(1, domain.length - 1);
  }
  return new RegExp(domain + '$').test(tC.tc_hdoc.domain);
};

tC.isCrossDomainContext = tC.isCrossDomainContext || function() {
  try{
    window.top.document;
    return false;
  }catch(e){
    return true;
  }
};

tC.tc_hdoc = tC.tc_hdoc || false;
if (!tC.tc_hdoc) {
  // if iframe with different domain/alias => get domain of the iframe as fallback
  tC.tc_hdoc = tC.isCrossDomainContext() ? window.document : window.top.document;
}

(function(){
  tC.getClientDnsList = tC.getClientDnsList || function() {
    return [] || [];
  };

  tC.getClientCollectDns = function() {
    if (tC.clientCollectDns) {
      return tC.clientCollectDns;
    }
    var domain = tC.domain();
    if (domain == null) {
      return;
    }
    if (domain[0] !== '.') {
      domain = '.' + domain;
    }
    var clientDomains = tC.getClientDnsList();
    var domainRegexp = new RegExp('^[\\w,\\d,\\-]*' + domain.replace('.', '\\.') + '$');
    var matchingDomain = clientDomains.find(function(dns) {
      return domainRegexp.test(dns);
    });

    return matchingDomain;
  };
  tC.clientCollectDns = tC.clientCollectDns || tC.getClientCollectDns();

  tC.clientCampaignDns = tC.clientCampaignDns || 'orcanta';
  tC.getClientCampaignDns = function() {
    return tC.clientCampaignDns;
  };

  tC.isTcDns = function(dns) {
    dns = dns || '';
    if (dns === '') {
      return false;
    }
    return dns.indexOf('.commander1.com') !== -1 || dns.indexOf('.tagcommander.com') !== -1;
  };

  tC.isCustomDns = function(dns) {
    dns = dns || '';
    if (dns === '') {
      return false;
    }
    return !tC.isTcDns(dns);
  };

  tC.campaignForceCookieFirst = 0;
})();

(function() {
  'use strict';

  var tC = window.tC;
  tC.eventTarget = tC.eventTarget || {
    _eventTarget: document.createElement('null'),
    addEventListener: function(type, listener, options) {
      this._eventTarget.addEventListener(type, listener, options);
    },
    removeEventListener: function(type, callback) {
      this._eventTarget.removeEventListener(type, callback);
    },
    dispatchEvent: function(eventType) {
      var event;
      if (typeof eventType !== 'string') {
        event = eventType;
      } else {
        event = document.createEvent('Event');
        event.initEvent(eventType, true, true);
      }
      this._eventTarget.dispatchEvent(event);
    },
  };
})();

(function () {
  'use strict';

  tC.uniqueEventIndex = tC.uniqueEventIndex || 0;
  //keep last event in tC
  tC.triggeredEvents = tC.triggeredEvents || [];

  tC.config = tC.config || {};
  var containerSourceKey = '344d4dae-d70b-49f6-81a7-51a2de5b492d' || null;
  tC.config.collectionDomain = tC.config.collectionDomain || tC.clientCollectDns;

  var emailReg = /[a-z0-9-.+_-]+@[a-z0-9-]+(\.[a-z0-9-]+)*/i;
  var userLookingSearchParams = /(user|mail|pass(word|phrase)?|secret|((first|last)name))/i;
  var anonymize= function(text) {
    return (text || '').replace(emailReg, '*****');
  };
  var anonymizeUrl= function(url) {
    try {
      var safeUrl = new URL(url);
      safeUrl.pathname = anonymize(safeUrl.pathname);
      safeUrl.searchParams.forEach(function(paramValue, paramKey) {
        if (emailReg.test(paramValue)) {
          return safeUrl.searchParams.set(paramKey, anonymize(paramValue));
        } else if (userLookingSearchParams.test(paramKey)) {
          return safeUrl.searchParams.set(paramKey, '*****');
        }
      });
      return safeUrl.toString();
    } catch (e) {
      return url;
    }
  };

  tC.generateEventId = function() {
    var eventId = String(Date.now()).slice(2) + Math.round(Math.random() * 10000000000000);
    while (eventId.length < 24) {
      eventId = eventId + '0';
    }
    return eventId;
  };

  //Trigger API
  tC.trigger = function (options) {
    var event = options.event;
    var properties = options.properties || {};
    var config = options.config || {};
    var pageUrl = properties.url || anonymizeUrl(window.location.href);

    tC.uniqueEventIndex++;
    tC.uniqueEventId = tC.generateEventId();
    //default settings
    var siteId = config.siteId || config.idSite || tC.config.siteId || tC.id_site;
    var defaultDomain = 'collect.commander1.com';
    var collectionDomain = config.collectionDomain || window.tC_collect_dns || tC.config.collectionDomain || defaultDomain;
    var collectPath = collectionDomain === defaultDomain ? '' : '/cdp';
    var collectionUrl = 'https://' + collectionDomain + collectPath + '/events?tc_s=' + siteId;
    var sourceKey = config.sourceKey || tC.config.sourceKey || containerSourceKey;
    if (sourceKey) {
      collectionUrl = collectionUrl + '&token=' + sourceKey;
    }
    //add automatic data
    properties.user = properties.user || {};
    //get consents
    if (!properties.user.consent_categories) {
      var consentCategories = [];
      if ('privacy' in tC) {
        if ('getValidCategories' in tC.privacy) {
          consentCategories = tC.privacy.getValidCategories();
        } else {
          consentCategories = tC.privacy.getOptinCategories();
        }
      }
      //manage Trust v1 when consent categories are 'ALL'
      var privacyCookie = tC.getCookie(tC.privacy && tC.privacy.getCN() || 'TC_PRIVACY');
      if (/ALL/.test(privacyCookie)) {
        consentCategories = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
      }
      properties.user.consent_categories = consentCategories;
    }
    if (!properties.user.rejected_vendors) {
      var rejectedVendors = [];
      if (tC.privacy) {
        if (tC.privacy.checkOptoutAllVendors && tC.privacy.checkOptoutAllVendors()) {
          rejectedVendors = 'ALL';
        } else if (tC.privacy.checkOptinAllVendors && !tC.privacy.checkOptinAllVendors()) {
          rejectedVendors = tC.privacy.getOptoutVendors();
        }
      }
      properties.user.rejected_vendors = rejectedVendors;
    }
    if (properties.revenue) {
      properties.amount = properties.revenue;
    }
    properties.integrations = properties.integrations || {};
    //Facebook cookies
    // TODO: remove once it is handled properly on backend https://tagcommander.atlassian.net/browse/PTMS-6738
    properties.integrations.facebook = properties.integrations.facebook || {};
    properties.integrations.facebook.fbc = tC.getCookie('_fbc') || undefined; // eslint-disable-line no-undefined
    properties.integrations.facebook.fbp = tC.getCookie('_fbp') || undefined; // eslint-disable-line no-undefined
    properties.integrations.facebook.event_id = properties.integrations.facebook.event_id || tC.uniqueEventId;
    properties.url = pageUrl;
    properties.created = new Date().toJSON();
    //specific automatic properties regarding the type of event
    switch (event) {
      case 'page_view':
        properties.title = document.title;
        properties.path = location.pathname;
        if (document.referrer !== '') properties.referrer = document.referrer;
        properties.type = properties.type || 'other';
        break;
      case 'purchase':
        properties.status = properties.status || 'in_progress';
        properties.type = properties.type || 'online';
        break;
    }
    var timezone;
    try {
      timezone = window.Intl && window.Intl.DateTimeFormat().resolvedOptions().timeZone;
    } catch(e) {
      // browser doesn't have the feature => skip
    }
    var de = document.documentElement || {};
    var nav = window.navigator || {};
    var page = {
      title: document.title,
      url: pageUrl,
      lang: de.lang,
      referrer: document.referrer || (tC.storage && tC.storage.get('TC_REFERRER')),
      viewport: {
        width: de.clientWidth,
        height: de.clientHeight,
      },
    };
    var pickCookies = function() {
      // Facebook: _fbp/_fbq
      // Google: https://business.safety.google/adscookies/
      //AT-internet: atuserid/xtidc
      //Criteo: crto_mapped_user_id
      //Awin: awc
      var usefulCookies = [
        '_fbp',
        '_fbc',
        /^_+(ga|gcl|opt_|utm)/,
        /^(pm_sess|VISITOR_INFO1|FPGCL|GA_)/,
        '__gsas',
        'NID',
        'DSID',
        'test_cookie',
        'id',
        'GED_PLAYLIST_ACTIVITY',
        'ACLK_DATA',
        'aboutads_sessNNN',
        'FPAU',
        'ANID',
        'AID',
        'IDE',
        'TAID',
        'FLC',
        'RUL',
        'FCCDCF',
        'FCNEC',
        'CUID',
        '1P_JAR',
        'Conversion',
        'YSC',
        'FPLC',
        '_gid',
        'AMP_TOKEN',
        'FPID',
        '_dc_gtm_',
        'PAIDCONTENT',
        'atuserid',
        'xtidc',
        'crto_mapped_user_id',
        'awc',
        'tduid',
        'kwks2s',
        '_ttp',
        /^_pk_id\./,
        '_pcid', // piano
        'pa_vid', // piano
        'rmStore', // rakuten
        '_uetmsclkid', // microsoft uet
      ];
      return (document.cookie || '').split('; ').filter(function(cookie) {
        var name = cookie.split('=')[0];
        return usefulCookies.find(function(pattern) { return pattern.test ? pattern.test(name) : (name === pattern); });
      }).join('; ');
    };
    var device = {
      cookie: pickCookies() || '',
      lang: nav.language || nav.userLanguage,
      screen: {
        width: window.screen.width,
        height: window.screen.height,
      },
      timezone: timezone
    };
    //store it as an internal vars for automatic mapping in other tags
    tC.internalvars.caEventData = properties;
    var eventId = config.eventId ? String(config.eventId) : tC.uniqueEventId;
    //build event data
    var eventObject = {
      event: event,
      properties: properties,
      page: page,
      device: device,
      eventId: eventId,
      version: 1,
      generatorVersion: tC.generatorVersion,
      containerVersion: tC.containerVersion
    };
    //limit history size
    if (100 < tC.triggeredEvents.length) {
      while (tC.triggeredEvents.length > 100) {
        tC.triggeredEvents.shift();
      }
    }
    tC.triggeredEvents.push(eventObject);
    tC.lastTriggeredEvent = tC.triggeredEvents[tC.triggeredEvents.length - 1];
    //SEND HIT through sendBeacon or ajax as a fallback
    var eventData = JSON.stringify(eventObject);
    if (typeof navigator.sendBeacon === 'function' && !navigator.sendBeacon(collectionUrl, eventData)) {
      var httpRequest = false;
      httpRequest = new XMLHttpRequest();
      if (!httpRequest) {
        return false;
      }
      httpRequest.open('POST', collectionUrl, true);
      httpRequest.withCredentials = true;
      // console.log();
      httpRequest.send(eventData);
    }
    return tC.uniqueEventIndex;
  };

})();

/*
 * Extension storage
 *
 * tC.storage
 */

tC.storage = {
  // legacy function has Storage
  has : function () {
    try {
      if ('localStorage' in window && window.localStorage != null) {
        window.localStorage.setItem('TC_CHECK', '1');
        window.localStorage.removeItem('TC_CHECK');
        return true;
      }
      return false;
    } catch (e) {
      return false;
    }
  },
  isAvailable: function() {
    try {
      window.localStorage;
      return true;
    } catch (err) {
      return false;
    }
  },
  //get storage
  get : function (k) {
    if (!this.isAvailable()) return;
    return window.localStorage.getItem(k);
  },
  //set storage
  set : function (k, v) {
    if (!this.isAvailable()) return;
    try {
      return window.localStorage.setItem(k, v) || true;
    } catch (e) {
      // most likely localstorage size limit exceeded
      return false;
    }
  },
  //remove storage
  remove : function (k) {
    if (!this.isAvailable()) return;
    return window.localStorage.removeItem(k) || true;
  },
  setWithExpiry: function (key, value, nbDays) {
    if (!this.isAvailable()) return;
    var now = (new Date()).getTime();
    var ttl = nbDays * 1000 * 60 * 60 * 24;
    var item = JSON.stringify({
      value: value,
      expires: now + ttl,
    });
    try {
      window.localStorage.setItem(key, item);
    } catch (e) {
      // most likely localstorage size limit exceeded
    }
  },
  getWithExpiry: function (key) {
    if (!this.isAvailable()) return;
    var item = window.localStorage.getItem(key);
    if (item == null) {
      return null;
    }
    var now = (new Date()).getTime();
    item = JSON.parse(item);
    if (item.expires < now) {
      this.remove(key);
      return null;
    }

    return item.value;
  },
};

/**
 * Extension hitCounter
 *
 * adds the hit counter for each container
 * allows to follow the usage of this container
 * will be called once in $frequency times
 *
 * @vars id_tagcommander,id_site,version,frequency
 */

(function() {
  var hitCounterExtend = {};
  var containerName = 4056 + '_' + 12;
  /*
  * f = force le hit
  * c = className du hit img
  */
  hitCounterExtend['hitCounter_' + containerName] = function() {
    var container = window['tC_' + containerName];
    if(Math.floor(Math.random()*parseInt(container.frequency)) === 0){
      tC.pixelTrack.add('https://manager.tagcommander.com/utils/hit.php?id='+container.id_container+'&site='+container.id_site+'&version='+container.containerVersion+'&frequency='+container.frequency+'&position='+tC.container_position+'&rand='+Math.random());
    }
  };

  tC.extend(hitCounterExtend);

  /* global tc_container_position */
  tC.container_position = (typeof tc_container_position !== 'undefined') ? tc_container_position : (typeof tC.container_position !== 'undefined') ? tC.container_position : 0;
  tC.container_position++;
  if(typeof tc_container_position !== 'undefined'){
    tc_container_position++; // eslint-disable-line no-global-assign
  }
  tC['hitCounter_' + containerName]();
})();

/*
 * Extension script
 */

tC.script = {
  add: function(src,callback,abortTime){
    var s           = (document.getElementsByTagName('body')[0] || document.getElementsByTagName('script')[0].parentNode);
    var e           = document.createElement('script');
    e.type      = 'text/javascript';
    e.async     = true;
    e.src       = src;
    e.charset   = 'utf-8';
    e.id        = 'tc_script_' + Math.random();
    if(s){
      if(callback){
        if (e.addEventListener) { /* normal browsers (FF, Chrome,IE9+)*/
          e.addEventListener('load', function(){
            callback();
          }, false);
        }
        else {
          e.onreadystatechange = function() { /* old IEs (8-) */
            if (e.readyState in {loaded: 1, complete: 1}){
              e.onreadystatechange = null;
              callback();
            }
          };
        }
      }
      if(abortTime && typeof abortTime === 'number'){
        setTimeout(function(){
          if ( s && e.parentNode ) {
            s.removeChild(e);
          }
        },abortTime);
      }
      s.insertBefore(e, s.firstChild);
    }
    else{
      tC.log('tC.script error : the element <script> or <body> is not found ! the file '+src+' is not implemented !', 'warn');
    }
  }
};

/*
 * Extension bypassBookmarklet
 */


tC.bypassBookmarklet = true;

tC.extend({});

tC.event = tC.event || {};
tC.event.testListFunctions = tC.event.testListFunctions || [];
tC.event.testListIdTags = tC.event.testListIdTags || [];
if (tC.event.testListIdTags.indexOf("60")==-1){
  tC.event.testListIdTags.push("60");
  tC.event.testListFunctions.push(function(el, p){

    tC.executeTag60_4056_12(el, p);
    tC.launchTag(60, 'Universal Analytics (builder)', 1731, 4056, 12, 15);});
}
tC.event.test=function(el, p){
  tc_array_events=tC.container_4056_12.init_tc_array_events(p);
  for(var i=0,x=tC.event.testListFunctions.length;i<x;i++){
    tC.event.testListFunctions[i](el, p);
  }
};

tC.event.add_to_cartListFunctions = tC.event.add_to_cartListFunctions || [];
tC.event.add_to_cartListIdTags = tC.event.add_to_cartListIdTags || [];
if (tC.event.add_to_cartListIdTags.indexOf("60")==-1){
  tC.event.add_to_cartListIdTags.push("60");
  tC.event.add_to_cartListFunctions.push(function(el, p){

    tC.executeTag60_4056_12(el, p);
    tC.launchTag(60, 'Universal Analytics (builder)', 1731, 4056, 12, 16);});
}
tC.event.add_to_cart=function(el, p){
  tc_array_events=tC.container_4056_12.init_tc_array_events(p);
  for(var i=0,x=tC.event.add_to_cartListFunctions.length;i<x;i++){
    tC.event.add_to_cartListFunctions[i](el, p);
  }
};

tC.event.remove_from_cartListFunctions = tC.event.remove_from_cartListFunctions || [];
tC.event.remove_from_cartListIdTags = tC.event.remove_from_cartListIdTags || [];
if (tC.event.remove_from_cartListIdTags.indexOf("60")==-1){
  tC.event.remove_from_cartListIdTags.push("60");
  tC.event.remove_from_cartListFunctions.push(function(el, p){

    tC.executeTag60_4056_12(el, p);
    tC.launchTag(60, 'Universal Analytics (builder)', 1731, 4056, 12, 17);});
}
tC.event.remove_from_cart=function(el, p){
  tc_array_events=tC.container_4056_12.init_tc_array_events(p);
  for(var i=0,x=tC.event.remove_from_cartListFunctions.length;i<x;i++){
    tC.event.remove_from_cartListFunctions[i](el, p);
  }
};
;

;
tC.extend({
  container: {
    reload: function(){
      var params = arguments[0];
      tC.reload_events = true;
      tC.container_position = 0;

      if(tC.containerList){
        tC.each(tC.containerList, function(index, value) {
          if(typeof tC['container_'+value] === 'object' && typeof tC['container_'+value].reload === 'function') {
            tC['container_' + value].reload(params, true);
            tC.reload_events = false;
          }
        });
      }
    }
  }
});

(function() {
  var containerIdExtend = {};
  var containerName = 4056 + '_' + 12;
  containerIdExtend['container_' + containerName] = {
    /**
     * Load container elements
     * @param {object} params Parameters of the load (list of exclusions, tC.event functions to call…) ; ex.: {exclusions:["datastorage", "internalvars"], events:{function1:["paramF1"],function2:["param1F2", "param2F2"]}}
     * @param {boolean} [isReload] false (default) for the first load, true for a reload
     */
    load: function(params, isReload){
      tC.container_position++;
      tC['hitCounter_' + containerName]();
      this.datalayer();
      tC.array_launched_tags = [];
      tC.array_launched_tags_keys = [];

      if(typeof params !== 'object'){
        params = {};
      }

      if(typeof isReload !== 'boolean'){
        isReload = false;
      }

      if(typeof params.exclusions === 'undefined') {
        params.exclusions = [];
      }

      if (params.exclusions.indexOf('datastorage') === -1) {
        this.datastorage();
      }

      if (params.exclusions.indexOf('deduplication') === -1) {
        this.deduplication();
      }

      if (params.exclusions.indexOf('internalvars') === -1) {
        this.internalvars();
      }

      if (params.exclusions.indexOf('privacy') === -1) {
        this.privacy();
      }

      if (params.exclusions.indexOf('eventlisteners') === -1) {
        this.eventlisteners();
      }

      if (tC.reload_events === false || typeof params.events === 'undefined') {
        params.events = {};
      }

      //Each params.events is an object with name of the function in key and an array of parameters in value, for example: {function1:["param1", "param2"]}
      tC.each(params.events, function (k, v) {
        if (tC.event && typeof tC.event[k] === 'function' && v.length > 0) {//we check if there is a tC.event corresponding, with at least 1 parameter
          if (typeof v[1] === 'undefined') {//2nd parameter is not set, we don't send it to the tC.event custom function
            tC.event[k](v[0]);
          } else {
            tC.event[k](v[0], v[1]);
          }
        }
      });
    },

    reload: function(params, isGlobalReload){
      if(typeof isGlobalReload !== 'boolean'){
        isGlobalReload = false;
      }

      if(!isGlobalReload){
        tC.container_position = 0;
        tC.reload_events = true;
      }

      this.load(arguments[0], true);
    },

    datalayer: function(){
      /* global tc_vars */
      if(typeof tc_vars==='undefined') window.tc_vars=[];
      var l = 'product_list|product_SKU|product_cat|product_brand|order__id|affiliate|shipping|tax|env_template|env_work|env_device|user_newcustomer|product_quantity|product_id|product_name|product_unitprice|product_discount|product_url_img|order_amount'.split('|');
      for(var k in l){
        if(!tc_vars.hasOwnProperty(l[k])){
          tc_vars[l[k]]='';
        }
      }

      window.top.postMessage('TC.EX.EXT_VARS.RELOAD', '*');
    },

    datastorage: function(){
      ;

      window.top.postMessage('TC.EX.DATASTORAGE.RELOAD', '*');
    },

    deduplication: function(){
      if(tC.dedup) {
        tC.dedup.LeA=false;
        tC.dedup.LeAD=false;
        tC.dedup.LeC=false;
        tC.dedup.LeCD=false;
        tC.dedup.LeV=false;
        tC.dedup.LeVD=false;
        tC.dedup.FeA=false;
        tC.dedup.FeAD=false;
        tC.dedup.FeC=false;
        tC.dedup.FeCD=false;
        tC.dedup.FeV=false;
        tC.dedup.FeVD=false;
        tC.dedup.AeA=[];
        tC.dedup.AeC=[];
        tC.dedup.AeV=[];
        tC.dedup.init();
        tC.dedup.setEventList();
      }
    },

    eventlisteners: function(){
      ;
    },

    internalvars: function(){
      var listInternalVars = tC['internalvars_' + containerName].listVar;
      if(listInternalVars.length > 0){
        for (var i = 0; i < listInternalVars.length; i++) {
          tC['internalvars_' + 4056].initiators['var'+listInternalVars[i]]();
        }
      }

      window.top.postMessage('TC.EX.INT_VARS.RELOAD', '*');
    },

    privacy: function(){
      if(tC.privacy) {
        tC.privacy.init();
      }
    },

    init_tc_array_events: function(t){
      if (typeof t === 'undefined') {
        t = {};
      }
      var l = 'product_id|product_name|product_unitprice|product_discount|product_url_img|product_cat1_name|product_cat2_name|product_cat3_name|product_qty|basket_id|id'.split('|');
      for (var k in l) {
        if (!t.hasOwnProperty(l[k])) {
          t[l[k]] = '';
        }
      }

      return t;
    }
  };

  tC.extend(containerIdExtend);

  if(typeof tC.containerList === 'undefined'){tC.containerList = [];}
  tC.containerList.push(containerName);
  window.tc_array_events = tC['container_' + containerName].init_tc_array_events([]);
})();

;

window['tC' + 4056 + '_' + 12] = tC;

window.postMessage('TC.EX.CONTAINER:{"id":' + 12 + ',"ids":' + 4056 + ',"v":"' + 1.02 + '","g":' + '82.0' + ',"p":'+tC.container_position+',"url":"'+(document.currentScript ? document.currentScript.src : '')+'"}','*');

tC.container_4056_12.datalayer();tC.array_launched_tags=[];tC.array_launched_tags_keys=[];

/*DYNAMIC JS BLOCK 1*/

/*END DYNAMIC JS BLOCK 1*/

/*CUSTOM_JS_BLOCK1*/

/*END_CUSTOM_JS_BLOCK1*/
if(tC.privacyCookieDisallowed){tC.setCookie('TCPID','',-1,'',tC.domain());}
tC.id_site='4056';
/*VARIABLES_BLOCK*/
tC.internalvars_4056.initiators=tC.internalvars_4056.initiators||{};tC.internalvars_4056_12={listVar:[]}

/*END_VARIABLES_BLOCK*/


/*DYNAMIC JS BLOCK 2*/

/*END DYNAMIC JS BLOCK 2*/

/*CUSTOM_JS_BLOCK2*/

/*END_CUSTOM_JS_BLOCK2*/
tC.container_4056_12.datastorage();

//----------------------------------------------------




//----

tC.extend({executeTag60_4056_12:function(el,p){if(typeof p=="undefined"){p={};}
    tc_array_events=tC.container_4056_12.init_tc_array_events(p);(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');ga('create',"4668746",'auto');ga('send','pageview');}});tC.launchTag(60,'Universal Analytics (builder)',1731,4056,12,14);(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');ga('create',"4668746",'auto');ga('send','pageview');tC.launchTag(60,'Universal Analytics (builder)',1731,4056,12,18);(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');ga('create',"4668746",'auto');ga('send','pageview');tC.onDomReady(function(){tC.container_4056_12.eventlisteners();});
