/*
 * tagContainer Generator v5
 * Copyright Tag Commander
 * http://www.tagcommander.com/
 * Generated: 2018-05-24 17:13:19 Europe/Paris
 * ---
 * Version	: 1.00
 * IDTC 	: 11
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
            ssl : (("https:" == document.location.protocol) ? "https://manager." : "http://redirect4056."), //UTILISE ... mais du coup par contre on se retrouve avec des redirectXXX.XXX@tagcommander.com, � nettoyer
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

        var hostname = location.hostname,
            tb = hostname.split('.'),
            ipregexp = "^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$";
        //if local domain without extension or domain is one ip
        if(
            tb.length  < 2 || hostname.match(ipregexp)
        ){
            tC.maindomain = hostname;
        //else it's one other domain    
        }else{
            tC.maindomain = tb[tb.length - 2] + '.' + tb[tb.length - 1];
        }
    
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

tC.extend({
    internalvars           : typeof tC.internalvars != "undefined" ? tC.internalvars : {},
    internalFunctions      : typeof tC.internalFunctions != "undefined" ? tC.internalFunctions : {},
    privacyVersion         : '',
    containerVersion       : '1.00',
    id_container           : '11',
    id_site                : '4056',
    generatorVersion       : '1.0.0',
    dedup_done             : typeof tC.dedup_done != "undefined" ? tC.dedup_done : false,
    internalvars_4056 : typeof tC.internalvars_4056 != "undefined" ? tC.internalvars_4056 : {}

});

tC_4056_11 = {
    id_container           : '11',
    id_site                : '4056',
    frequency              : '1000',
    containerVersion       : '1.00',
};

tC.extend({
    launchTag           : function (id, label, template, idSite, idContainer, idTrigger) {
        if(typeof idTrigger == "undefined"){
            idTrigger = 0;
        }

        tC.array_launched_tags.push(label);
        tC.array_launched_tags_keys.push(id);

        tC.containersLaunched[idSite][idContainer].t.push({
            id      : id,
            label   : label,
            idTpl   : template
        });

        window.top.postMessage("TC.EX:{\"id\":\""+id+"\",\"idc\":\""+idContainer+"\",\"idt\":\""+template+"\",\"ids\":\""+idSite+"\",\"lb\":\""+label.replace(/"/g, '\\"')+"\",\"idtr\":\""+idTrigger+"\"}", '*');

    }
});

if (tC.containersLaunched === undefined) {
    tC.containersLaunched = {};
}

if (tC.containersLaunched[4056] === undefined) {
    tC.containersLaunched[4056] = {};
}

tC.containersLaunched[4056][11] = {v:'1.00', t:[]};

/*extends*/
/*

tC.extend({
	isReady : false,
	readyWait : 1,
	ready : function(wait) {
		if (wait === true ? --tC.readyWait : tC.isReady)
			return;
		if (!document.body)
			return setTimeout(tC.ready, 1);
		tC.isReady = true;
		if (wait !== true && --tC.readyWait > 0)
			return;
		readyList.resolveWith(document, [tC]);
		if (tC.fn.trigger)
			tC(document).trigger("ready").off("ready");
	}
});


tC.ready.promise = function(fn){
    if ( document.addEventListener ) {
        // Use the handy event callback
        document.addEventListener( "DOMContentLoaded", function(){
            document.removeEventListener( "DOMContentLoaded", arguments.callee, false );
            fn();
        }, false );

    // If IE event model is used
    } else if ( document.attachEvent ) {
        // ensure firing before onload,
        // maybe late but safe also for iframes
        document.attachEvent("onreadystatechange", function(){
            if ( document.readyState === "complete" ) {
                document.detachEvent( "onreadystatechange", arguments.callee );
                fn();
            }
        });

        // If IE and not an iframe
        // continually check to see if the document is ready
        if ( document.documentElement.doScroll && window == window.top ) (function(){
            try {
                // If IE is used, use the trick by Diego Perini
                // http://javascript.nwbox.com/IEContentLoaded/
                document.documentElement.doScroll("left");
            } catch( error ) {
                setTimeout( arguments.callee, 0 );
                return;
            }

            // and execute any waiting functions
            fn();
        })();
    }
}
 
DOMContentLoaded = function() {
	if(typeof tC.ready != 'undefined'){
		if (document.addEventListener) {
			document.removeEventListener("DOMContentLoaded", DOMContentLoaded, false);
			tC.ready();
		} else if (document.readyState === "complete") {
			document.detachEvent("onreadystatechange", DOMContentLoaded);
			tC.ready();
		}
	}
};
*/



tC.extend({
    domReady : false,
    isDOMReady : function() {
        if (document.readyState == 'complete' || document.readyState == 'loaded')
            return true;
        if (document.readyState != 'interactive')
            return false;
        if (!document.documentElement.doScroll)
            return true;
        try {
            document.documentElement.doScroll('left');
            return true;
        } catch (e) {
            return false;
        }
    },
    waitingOnDomReadyCallBacks : tC.waitingOnDomReadyCallBacks || [],
    excuteOnDomReadyCallBacks : function() {
        for (var i = 0; i < tC.waitingOnDomReadyCallBacks.length; i++) {
            tC.waitingOnDomReadyCallBacks[i]();
        }
        tC.waitingOnDomReadyCallBacks = [];
    },
    onDomReady : function(callback) {
        
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
                document.removeEventListener("DOMContentLoaded", arguments.callee, false);
                tC.excuteOnDomReadyCallBacks();
            }, false);
        }
        // If IE event model is used
        else if (document.attachEvent) {
            browserTypeSet = true;
            // ensure firing before onload,
            // maybe late but safe also for iframes
            document.attachEvent("onreadystatechange", function() {
                if (document.readyState === "complete") {
                    document.detachEvent("onreadystatechange", arguments.callee);
                    tC.excuteOnDomReadyCallBacks();
                }
            });

            // If IE and not an iframe
            // continually check to see if the document is ready
            if (document.documentElement.doScroll && window == window.top)
                (function() {
                    if (tC.domReady)
                        return;

                    try {
                        // If IE is used, use the trick by Diego Perini
                        // http://javascript.nwbox.com/IEContentLoaded/
                        document.documentElement.doScroll("left");
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
    }
});
if(tC.isDOMReady()){
    tC.domReady = true;
}else{
    tC.onDomReady(function() {
        tC.domReady = true;
    });
}
/*
 * 
 */
tC.extend({
	isCurrentVersion:function(){
    	/*
    	 * return true :
    	 * - if bm is disable, 
    	 * - if bm is enable but the container is loaded by the bookmarklet
    	 * else return false
    	 */
    	var v = tC.getCookie('tc_mode_test'),
    		t = 'testModeIncludeReplaceThisByTrue' ;
    	/*
    	 * info : 'testModeIncludeReplaceThisByTrue' is replaced by "true" by the test mode include script
    	 */
    	return v != '1' || (v == '1' && t == 'true');
    }
});



/*
 * Extension pixelTrack
 * 
 * @vars 
 */

tC.extend({
    pixelTrack : {
        add : function(u, t) {
            u = u || 0;
            t = t || 'img';
            tC.onDomReady(function() {
                if(t == "iframe"){
                    var d = document.createElement(t);
                    d.src = u;
                    d.width = 1;
                    d.height = 1;
                    d.style.display = "none"
                    document.body.appendChild(d);
                }else{
                    var d = new Image();
                    d.src = u;
                }
            });
        }
    }
});
/*
 * Extension domain
 */

tC.extend({
    tc_hdoc : false,
    domain : function() {
        this.tc_hdoc = document;
        try {
            try{
                this.tc_hdoc = top.document;
            }catch(e){
                //iframe with different domain/alias => get domain of the iframe
                this.tc_hdoc = document;
            }
            var my_dom_temp = typeof this.tc_hdoc.domain != 'undefined' ? this.tc_hdoc.domain.toLowerCase().split(".") : false,
                ipregexp = "^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$";
            if (my_dom_temp.length < 2 || this.tc_hdoc.domain.match(ipregexp)) {
                return "";
            } else {
                var p1 = my_dom_temp[my_dom_temp.length - 3],
                    p2 = my_dom_temp[my_dom_temp.length - 2],
                    p3 = my_dom_temp[my_dom_temp.length - 1];
                if ( p2 == "co" || p2 == "com" ) {
                    return "." + p1 + "." + p2 + "." + p3;
                } else {
                    return "." + p2 + "." + p3;
                }
            }
        } catch(e) {
            tC.log(['tC.domain error : ',e], 'warn');
        }
    }
});

tC.domain();
/*
 * Extension cookie
 * 
 * tC.setCookie(name, value, expires, path, domain, secure)
 */

tC.extend({
    removeCookie : function(name){
        //document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        this.setCookie(name,'',-1);
    },
    setCookie : function(name, value, expires, path, domain, secure) {
        if (!domain)
            domain = tC.domain();
        var today = new Date();
            today.setTime(today.getTime());
        if (expires)
            expires = expires * 1000 * 60 * 60 * 24;
        var expires_date = new Date(today.getTime() + (expires));
        document.cookie = name + "=" + escape(value) + ((expires ) ? ";expires=" + expires_date.toGMTString() : "" ) + ((path ) ? ";path=" + path : ";path=/" ) + ((domain ) ? ";domain=" + domain : "" ) + ((secure ) ? ";secure" : "" );
    },
    getCookie : function(key) {
        return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? unescape(result[1]) : ""
    }/* 
    
    V2 soon -->
    ,
    setCookie(n,v,e,d){
        var D=new Date();
        D.setDate(e.getDate() + e);
        var V=escape(v) + ((e===null) ? "" : "; expires="+D.toUTCString());
        document.cookie=n + "=" + V + "; domain=" + ((d===undefined) ? "" : d);
    }
    
    
    
    ,
    getCookie : function(n){
        var i,x,y,c=document.cookie.split(";");
        for(i=0;i < c.length; i++) {
            x=c[i].substr(0,c[i].indexOf("="));
            y=c[i].substr(c[i].indexOf("=")+1);
            x=x.replace(/^\s+|\s+$/g,"");
            if (x===n)
                return unescape(y);
        }
    }*/
});
/*
 * Extension storage
 *
 * tC.storage
 */

tC.extend({
    storage : {
        //has Storage
        has : function () {
            try {
                if ('localStorage' in window && window['localStorage'] !== null){
                    window.localStorage.setItem('TC_CHECK', '1');
                    window.localStorage.removeItem('TC_CHECK');
                    return true;
                }
                return false;
            } catch (e) {
                return false;
            }
        },
        //get storage
        get : function (k) {
            return this.has() ? window.localStorage.getItem(k) : false;
        },
        //set storage
        set : function (k, v) {
            return this.has() ? (window.localStorage.setItem(k, v) || true) : false;
        },
        //remove storage
        remove : function (k) {
            return this.has() ? (window.localStorage.removeItem(k) || true) : false
        }
    }
});
/**
 * Extension hitCounter
 * 
 * adds the hit counter for each container
 * allows to follow the usage of this container
 * will be called once in $frequency times
 * 
 * @vars id_tagcommander,id_site,version,frequency
 */

tC.extend({
    /*
     * f = force le hit
     * c = className du hit img
     */
    hitCounter_4056_11 : function() {
        if(Math.floor(Math.random()*parseInt(tC_4056_11.frequency)) == 0){
            tC.pixelTrack.add("//manager.tagcommander.com/utils/hit.php?id="+tC_4056_11.id_container+"&site="+tC_4056_11.id_site+"&version="+tC_4056_11.containerVersion+"&frequency="+tC_4056_11.frequency+"&position="+tC.container_position+"&rand="+Math.random());
        }
    }
});

tC.container_position = (typeof tc_container_position !== 'undefined') ? tc_container_position : (typeof tC.container_position !== 'undefined') ? tC.container_position : 0;
tC.container_position++;
if(typeof tc_container_position !== 'undefined'){
    tc_container_position++;
}
tC.hitCounter_4056_11();

/*
 * Extension script
 */

tC.extend({
    script : {
        add : function(src,callback,abortTime){
            var s           = (document.getElementsByTagName('body')[0] || document.getElementsByTagName('script')[0].parentNode),
                e           = document.createElement('script');
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
                if(abortTime && typeof abortTime == "number"){
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
    }
});

/*
 * Extension reach
 */

tC.extend({
    //Reach
    _R : {
        //call reach
        cR : function (now) {
            tC.storage.set("tC_Sync", now); //stockage dans le localstorage
            tC.pixelTrack.add("//engage.commander1.com/reach?tc_s=4056");
        },
        //run reach
        rR : function () {
            if (tC.storage.has()) { //si localstorage
                var now = new Date().getTime(); //recupération de la date
                var sync = tC.storage.get("tC_Sync") || 0; //récupération du storage existant. ce storage stocke la dernière date à laquelle on a shooté pour cet utilisateur
                sync = parseInt(sync); //conversion en entier
                if (sync == 0 || now - sync > 604800000) { //7 days // comparaison des dates. si > 7 jours ou si storage existe pas
                    this.cR(now); //envoi du hit
                }
            }
        }
    }
});

tC.onDomReady(function () {
    tC._R.rR();
});
tC.extend({

});

tC.extend({
    event: {
        add_to_cart: function(el, p){

        tC.executeTag59_4056_11(el, p);
        tC.launchTag(59, 'Universal Analytics - eCommerce Enhanced - Conversion', 1477, 4056, 11, 11);        },
remove_from_cart: function(el, p){

        tC.executeTag59_4056_11(el, p);
        tC.launchTag(59, 'Universal Analytics - eCommerce Enhanced - Conversion', 1477, 4056, 11, 12);        },
cart_checkout: function(el, p){

        tC.executeTag59_4056_11(el, p);
        tC.launchTag(59, 'Universal Analytics - eCommerce Enhanced - Conversion', 1477, 4056, 11, 13);        }
    }
});

tC.extend({
    container: {
        reload: function(){
            var params = arguments[0];
            tC.container_position = 0;

            if(tC.containerList){
                tC.each(tC.containerList, function(index, value) {
                    if(typeof tC['container_'+value] == "object" && typeof tC['container_'+value].reload == "function") {
                        tC['container_' + value].reload(params, true);
                    }
                });
            }
        }
    }
});

tC.extend({
    container_4056_11: {
        /**
         * Load container elements
         * @param {object} params Parameters of the load (list of exclusions, custom functions to call…) ; ex.: {exclusions:["datastorage", "internalvars"], customFunctions:[]}
         * @param {boolean} [isReload] false (default) for the first load, true for a reload
         */
        load: function(params, isReload){
            tC.container_position++;
            tC.hitCounter_4056_11();
            this.datalayer();

            if(typeof params != "object"){
                params = {};
            }

            if(typeof isReload != "boolean"){
                isReload = false;
            }

            if(typeof params.exclusions == "undefined") {
                params.exclusions = [];
            }

            if (params.exclusions.indexOf('datastorage') == -1) {
                this.datastorage();
            }

            if (params.exclusions.indexOf('deduplication') == -1) {
                this.deduplication();
            }

            if (params.exclusions.indexOf('internalvars') == -1) {
                this.internalvars();
            }

            if (params.exclusions.indexOf('privacy') == -1) {
                this.privacy();
            }

            if (params.exclusions.indexOf('eventlisteners') == -1) {
                this.eventlisteners();
            }

            //TODO: manage customFunctions (events)
        },

        reload: function(params, isGlobalReload){
            if(typeof isGlobalReload != "boolean"){
                isGlobalReload = false;
            }

            if(!isGlobalReload){
                tC.container_position = 0;
            }

            this.load(arguments[0], true);
        },

        datalayer: function(){
            if(typeof tc_vars=='undefined') window.tc_vars=[];
            var l = 'product_list|product_SKU|product_cat|product_brand|order__id|affiliate|shipping|tax|env_template|env_work|env_device|user_newcustomer|product_quantity|product_id|product_name|product_unitprice|product_discount|product_url_img|order_amount'.split('|');
            for(var k in l){
                if(!tc_vars.hasOwnProperty(l[k])){
                    tc_vars[l[k]]='';
                }
            }

            window.top.postMessage('TC.EX.EXT_VARS.RELOAD', '*');
        },

        datastorage: function(){
            

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
                tC.dedup.setEventList();
            }
        },

        eventlisteners: function(){
            
        },

        internalvars: function(){
            if(tC.internalvars_4056.listVar.length > 0){
                for(var k in tC.internalvars_4056.listVar){
                    tC.internalvars_4056.initiators['var'+tC.internalvars_4056.listVar[k]]();
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
            var l = 'product_cat1_name|product_cat2_name|product_cat3_name|product_qty|basket_id|product_name|product_unitprice|product_discount|product_url_img|product_id|id'.split('|');
            for (var k in l) {
                if (!t.hasOwnProperty(l[k])) {
                    t[l[k]] = '';
                }
            }

            return t;
        }
    }
});
if(typeof tC.containerList == "undefined"){tC.containerList = [];}
tC.containerList.push("4056_11");
tC.onDomReady(function() {
    tC.container_4056_11.eventlisteners();
});
window.tc_array_events = tC.container_4056_11.init_tc_array_events([]);



tC4056_11 = tC;
 
/* RETRO COMPATIBILITY FUNCTIONS */


tC.container_4056_11.datalayer();

/*DYNAMIC JS BLOCK 1*/


/*END DYNAMIC JS BLOCK 1*/

/*CUSTOM_JS_BLOCK1*/

/*END_CUSTOM_JS_BLOCK1*/
tC.array_launched_tags=[];tC.array_launched_tags_keys=[];tC.id_site='4056';if(tC.getCookie('tc_mode_test')==1){(function(){var tc_testmodescriptload=document.createElement('script');tc_testmodescriptload.type='text/javascript';tc_testmodescriptload.src='//manager.tagcommander.com/utils/test_mode_include.php?id=11&site=4056&type=load&rand='+Math.random()+'&version=';(document.getElementsByTagName('body')[0]||document.getElementsByTagName('head')[0]||document.getElementsByTagName('script')[0].parentNode).appendChild(tc_testmodescriptload);})();}else{
/*VARIABLES_BLOCK*/
tC.internalvars_4056.initiators={};tC.internalvars_4056.listVar=[];
/*END_VARIABLES_BLOCK*/


/*DYNAMIC JS BLOCK 2*/


/*END DYNAMIC JS BLOCK 2*/

/*CUSTOM_JS_BLOCK2*/

/*END_CUSTOM_JS_BLOCK2*/
tC.container_4056_11.datastorage();}

//----------------------------------------------------




//----

if(tC.getCookie('tc_mode_test')==1){(function(){var tc_testmodescriptexec=document.createElement('script');tc_testmodescriptexec.type='text/javascript';tc_testmodescriptexec.src='//manager.tagcommander.com/utils/test_mode_include.php?id=11&site=4056&type=exec&rand='+Math.random()+'&version=1.00';(document.getElementsByTagName('body')[0]||document.getElementsByTagName('head')[0]||document.getElementsByTagName('script')[0].parentNode).appendChild(tc_testmodescriptexec);})();(function(){setTimeout(function(){if(typeof top.tc_count!=='undefined'){top.tc_count++;}else{top.tc_count=1;}var tc_newscript=document.createElement('script');tc_newscript.type='text/javascript';tc_newscript.src='//manager.tagcommander.com/utils/livetest/bookmarklet.php?r='+Math.random()+'&nb='+top.tc_count+'&container=4056!11&version=1.00';(document.getElementsByTagName('body')[0]||document.getElementsByTagName('head')[0]||document.getElementsByTagName('script')[0].parentNode).appendChild(tc_newscript);},1000);})();}else{tC.launchTag(59,'Universal Analytics - eCommerce Enhanced - Conversion',1477,4056,11,10);if(typeof ga!="undefined"){ga('require','ec');var temp_concat=tc_vars["product_list"];for(var i=0;i<temp_concat.length;i++){var product=temp_concat[i];ga('ec:addProduct',{'id':product[tc_vars["product_id"]],'name':product[tc_vars["product_name"]],'sku':product[tc_vars["product_SKU"]],'category':product[tc_vars["product_cat"]],'price':product[tc_vars["product_unitprice"]],'quantity':product[tc_vars["product_quantity"]],'brand':product[tc_vars["product_brand"]]});}
ga('ec:setAction','purchase',{'id':tc_vars["order__id"],'affiliation':tc_vars["affiliate"],'revenue':tc_vars["order_amount"],'shipping':tc_vars["shipping"],'tax':tc_vars["tax"]});}
tC.extend({executeTag59_4056_11:function(el,p){if(typeof p=="undefined"){p={};}
tc_array_events=tC.container_4056_11.init_tc_array_events(p);if(typeof ga!="undefined"){ga('require','ec');var temp_concat=tc_vars["product_list"];for(var i=0;i<temp_concat.length;i++){var product=temp_concat[i];ga('ec:addProduct',{'id':product[tc_vars["product_id"]],'name':product[tc_vars["product_name"]],'sku':product[tc_vars["product_SKU"]],'category':product[tc_vars["product_cat"]],'price':product[tc_vars["product_unitprice"]],'quantity':product[tc_vars["product_quantity"]],'brand':product[tc_vars["product_brand"]]});}
ga('ec:setAction','purchase',{'id':tc_vars["order__id"],'affiliation':tc_vars["affiliate"],'revenue':tc_vars["order_amount"],'shipping':tc_vars["shipping"],'tax':tc_vars["tax"]});}}});}