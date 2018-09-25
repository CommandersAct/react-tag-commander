export default class TC_Wrapper {

    constructor() {
        this.logger = window.console;
        this.tcContainers = [];
        this.trackRoutes = false;
    };
    
    /**
     * Add a container
     * The script URI correspond to the tag-commander script URL, it can either be a CDN URL or the path of your script
     * @param {string} id the id the script node will have
     * @param {string} uri the source of the script
     * @param {string} node the node on witch the script will be placed, it can either be head or body
     */
    addContainer(id, uri, node) {

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

        this.tcContainers.push({
            id: id,
            uri: uri
        });

        let tagContainer = document.createElement('script');
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
    removeContainer(id) {
        let container = document.getElementById(id);
        let containers = this.tcContainers.slice(0);
    
        document.getElementsByTagName('head')[0].removeChild(container);
    
        for(let i = 0; i < containers.length; i++) {
          if(containers[i].id === id) {
            this.tcContainers.splice(i, 1);
          }
        }
    };

    /**
     * Will display the debug messages if true
     * @param {boolean} boolean if set to true it will activate the debug msg default is false
     */
    setDebug(boolean) {
        if(boolean) {
          this.logger = window.console;
        } else {
            this.logger = {
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
    trackRoutes(boolean) {
        this.trackRoutes = !!boolean;
    };

    /**
     * Set or update the value of the var
     * @param {string} tcKey
     * @param {*} tcVar
     */
    setTcVar(tcKey, tcVar) {
        window.tcVars[tcKey] = tcVar;
    };

    /**
     * Set your varibles for the different providers, when called the first time it
     * instantiate the external varible
     * @param {object} vars
     */
    setTcVars(vars) {
        this.logger.log('setTcVars', vars);
        let listOfVars = Object.keys(vars);
        for(let i = 0, j = listOfVars.length; i < j ; i++) {
          this.setTcVar(listOfVars[i], vars[listOfVars[i]]);
        }
    };

    /**
     * Get the value of the var
     * @param {string} tcKey
     */
    getTcVar(tcKey) {
        this.logger.log('getTcVar', tcKey);
        return typeof window.tc_vars[tcKey] === null ? window.tc_vars[tcKey] : false;
    };

    /**
     * Removes the var by specifying the key
     * @param {string} tcKey
     */
    removeTcVar(tcKey) {
        logger.log('removeTcVar', tcKey);
        delete window.tc_vars[tcKey];
    };

    /**
     * Will reload all the containers
     * @param {object} options can contain some options in a form of an object
     */
    reloadAllContainers(options) {
        this.logger.log('reloadAllContainers', options);
        options = options || {};
        this.logger.log('Reload all containers ', typeof options === 'object' ? 'with options ' + options : '');
        window.container.reload(options);
    };

    /**
     * Will reload a specifique container
     * @param {number} ids
     * @param {number} idc
     * @param {object} options can contain some options in a form of an object
     */
    reloadContainer(ids, idc, options) {
        let options = options || {};
        logger.log('Reload container ids: ' + ids + ' idc: ' + idc, typeof options === 'object' ? 'with options: ' + options : '');
        window['container_' + ids + '_' + idc].reload(options);
    };

    /**
     * Will set a TC_Wrapper event
     * @param {string} eventLabel the name of your event
     * @param {HTMLElement} element the HTMLelement on witch the event is attached
     * @param {object} data the data you want to transmit
     */
    captureEvent(eventLabel, element, data) {
        this.logger.log('captureEvent', eventLabel, element, data);
        window.tC.event[eventLabel](element, data);
    };
};