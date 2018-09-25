var TC_Wrapper = (function() {

    var logger = window.console;
    var tcContainers = [];
    var trackRoutes = false;

    var TC_Wrapper = function() {};

    /**
     * Add a container
     * The script URI correspond to the tag-commander script URL, it can either be a CDN URL or the path of your script
     * @param {string} id the id the script node will have
     * @param {string} uri the source of the script
     * @param {string} node the node on witch the script will be placed, it can either be head or body
     */
    TC_Wrapper.prototype.addContainer = function(id, uri, node) {

        if(!id) {
            return logger.error('You should define the container id.');
        }
        if(typeof id !== 'string') {
            logger.warn('The container id should be a string.');
        }
        if(!uri) {
            return logger.error('You should define the container id.');
        }
        if(typeof uri !== 'string') {
            logger.warn('The container uri should be a string.');
        }

        tcContainers.push({
            id: id,
            uri: uri
        });

        var tagContainer = document.createElement('script');
        tagContainer.setAttribute('type', 'text/javascript');
        tagContainer.setAttribute('src', uri);
        tagContainer.setAttribute('id', id);
        
        if(!node || typeof node !== 'string' || node.toLowerCase() === 'head'
            || typeof window.document.getElementsByTagName(node.toLowerCase())[0] === 'undefined') {

            logger.warn('The script will be placed in the head by default.');
            return window.document.getElementsByTagName('head')[0].appendChild(tagContainer);
        }

        window.document.getElementsByTagName(node.toLowerCase())[0].appendChild(tagContainer);
    };

    /**
     * Remove a container
     * @param {string} id
     */
    TC_Wrapper.prototype.removeContainer = function(id) {
        var container = document.getElementById(id);
        var containers = tcContainers.slice(0);
    
        document.getElementsByTagName('head')[0].removeChild(container);
    
        for(var i = 0; i < containers.length; i++) {
          if(containers[i].id === id) {
            tcContainers.splice(i, 1);
          }
        }
    };

    /**
     * Will display the debug messages if true
     * @param {boolean} boolean if set to true it will activate the debug msg default is false
     */
    TC_Wrapper.prototype.setDebug = function(boolean) {
        if(boolean) {
          logger = window.console;
        } else {
          logger = {
              log: function() {},
              warn: function() {},
              error: function() {}
          };
        }
    };

    /**
     * Allows the router to be tracked
     * @param {boolean} boolean will read routes if set to true
     */
    TC_Wrapper.prototype.trackRoutes = function(boolean) {
        trackRoutes = !!boolean;
    };

    /**
     * Set or update the value of the var
     * @param {string} tcKey
     * @param {*} tcVar
     */
    TC_Wrapper.prototype.setTcVar = function(tcKey, tcVar) {
        window.tcVars[tcKey] = tcVar;
    };

    /**
     * Set your varibles for the different providers, when called the first time it
     * instantiate the external varible
     * @param {object} vars
     */
    TC_Wrapper.prototype.setTcVars = function(vars) {
        logger.log('setTcVars', vars);
        var listOfVars = Object.keys(vars);
        for(var i = 0, j = listOfVars.length; i < j ; i++) {
          this.setTcVar(listOfVars[i], vars[listOfVars[i]]);
        }
    };

    /**
     * Get the value of the var
     * @param {string} tcKey
     */
    TC_Wrapper.prototype.getTcVar = function(tcKey) {
        logger.log('getTcVar', tcKey);
        return typeof window.tc_vars[tcKey] === null ? window.tc_vars[tcKey] : false;
    };

    /**
     * Removes the var by specifying the key
     * @param {string} tcKey
     */
    TC_Wrapper.prototype.removeTcVar = function(tcKey) {
        logger.log('removeTcVar', tcKey);
        delete window.tc_vars[tcKey];
    };

    /**
     * Will reload all the containers
     * @param {object} options can contain some options in a form of an object
     */
    TC_Wrapper.prototype.reloadAllContainers = function(options) {
        logger.log('reloadAllContainers', options);
        options = options || {};
        logger.log('Reload all containers ', typeof options === 'object' ? 'with options ' + options : '');
        window.container.reload(options);
    };

    /**
     * Will reload a specifique container
     * @param {number} ids
     * @param {number} idc
     * @param {object} options can contain some options in a form of an object
     */
    TC_Wrapper.prototype.reloadContainer = function(ids, idc, options) {
        var options = options || {};
        logger.log('Reload container ids: ' + ids + ' idc: ' + idc, typeof options === 'object' ? 'with options: ' + options : '');
        window['container_' + ids + '_' + idc].reload(options);
    };

    /**
     * Will set a TC_Wrapper event
     * @param {string} eventLabel the name of your event
     * @param {HTMLElement} element the HTMLelement on witch the event is attached
     * @param {object} data the data you want to transmit
     */
    TC_Wrapper.prototype.captureEvent = function(eventLabel, element, data) {
        logger.log('captureEvent', eventLabel, element, data);
        window.tC.event[eventLabel](element, data);
    };

    TC_Wrapper.prototype.init = function() {
        
        var elements = document.getElementsByTagName('*');
        
        for(var i = 0, j = elements.length; i < j; i++) {
            if(elements[i].hasAttribute('tc-event')) {
                
                elements[i].addEventListener('click', function(event) {

                    var vars = JSON.parse(event.target.getAttribute('tc-event'));
                    this.captureEvent(vars.eventId, event.target, vars.data);

                }.bind(this));
            }
        }
    };

    var singleton = new TC_Wrapper();
    singleton.setDebug(false);
    singleton.init();

    return function() {
        return singleton;
    };
}());

module.exports = TC_Wrapper; 