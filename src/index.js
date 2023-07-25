export default class TC_Wrapper {

    constructor() {
        this.setDebug(false);
        this.tcContainers = [];
        this.instance = null;
        this.captureEvent = this.triggerEvent
    };

    static getInstance() {
        if(!TC_Wrapper.instance) {
            TC_Wrapper.instance = new TC_Wrapper();
        }
        return this.instance;
    }

    /**
     * Add a container
     * The script URI correspond to the tag-commander script URL, it can either be a CDN URL or the path of your script
     * @param {string} id the id the script node will have
     * @param {string} url the source of the script
     * @param {string} node the node on which the script will be placed, it can either be head or body
     */
    addContainer(id, url, node) {
        if(!id) {
            throw new Error('[react-tag-commander]You should define the container id.')
        }
        if(typeof id !== 'string') {
            throw new Error('[react-tag-commander]The container id should be a string.')
        }
        if(!url || typeof url !== 'string') {
            throw new Error('[react-tag-commander]Invalid container URL.')
        }
        return new Promise(resolve => {
            let tagContainer = document.createElement('script');
            tagContainer.onload = () => resolve();
            tagContainer.setAttribute('type', 'text/javascript');
            tagContainer.setAttribute('src', url);
            tagContainer.setAttribute('id', id);
            let updatedNode = node;

            if(!node || typeof node !== 'string'
                ||  window.document.getElementsByTagName(node.toLowerCase())[0] == null) {

                this.logger.warn('The script will be placed in the head by default.');
                updatedNode = 'head';
            }

            this.tcContainers.push({
                id: id,
                uri: url,
                node: updatedNode
            });

            window.document.getElementsByTagName(updatedNode.toLowerCase())[0].appendChild(tagContainer);
        })
    };

    /**
     * Remove a container
     * @param {string} id
     */
    removeContainer(id) {
        let container = document.getElementById(id);
        let containers = this.tcContainers.slice(0);

        for(let i = 0; i < containers.length; i++) {
          if(containers[i].id === id) {
            let node = containers[i].node.toLowerCase();
            let parent = document.getElementsByTagName(node)[0];
            if (parent && container && container.parentNode === parent) {
                parent.removeChild(container);
            }
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
     * Set or update the value of the var
     * @param {string} tcKey
     * @param {*} tcVar
     */
    setTcVar(tcKey, tcVar) {
        if(!window.tc_vars) {
            return setTimeout(() => {
                this.setTcVar(tcKey, tcVar);
            }, 1000);
        } else {
            window.tc_vars[tcKey] = tcVar;
        }
    };

    /**
     * Set your variables for the different providers, when called the first time it
     * instantiate the external variable
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
        this.logger.log('removeTcVar', tcKey);
        delete window.tc_vars[tcKey];
    };

    /**
     * Will reload all the containers
     * @param {object} options can contain some options in a form of an object
     */
    reloadAllContainers(options = {}) {
        if(!window.tC || !window.tC.container) {
            return setTimeout(() => {
                this.reloadAllContainers(options);
            },1000);
        } else {
            this.logger.log('Reload all containers ', options);
            window.tC.container.reload(options);
        }
    };

    /**
     * Will reload the specified container
     * @param {number} siteId
     * @param {number} containerId
     * @param {object} options can contain some options in a form of an object
     */
    reloadContainer(siteId, containerId, options = {}) {
        this.logger.log('Reload container ids: ' + siteId + ' idc: ' + containerId, typeof options === 'object' ? 'with options: ' + options : '');
        window.tC['container_' + siteId + '_' + containerId].reload(options);
    };

    /**
     * Will set a TC_Wrapper event
     * @param {string} eventLabel the name of your event
     * @param {HTMLElement} htmlElement the HTMLelement on which the event is attached
     * @param {object} data the data you want to transmit
     */
    triggerEvent(eventLabel, htmlElement, data,reloadCapture=false) {
        if (reloadCapture===true){
          clearTimeout(reloadFunction)
        }
        else{
          this.logger.log("triggerEvent", eventLabel, htmlElement, data);
          if (window.tC != null) {
            if (eventLabel in window.tC.event) {
              window.tC.event[eventLabel](htmlElement, data);
            }
            if (!(eventLabel in window.tC.event)) {
              var reloadFunction = setTimeout(() => {
                this.triggerEvent(eventLabel, htmlElement, data,reloadCapture=true);
              }, 1000);
            }
          }
        }
      };

      trackPageLoad(options = {}) {
          const wrapper = TC_Wrapper.getInstance();
          if(options.tcVars){
              wrapper.setTcVars(options.tcVars);
          }
          wrapper.reloadAllContainers();
          if(options.event){
              wrapper.triggerEvent(options.event.label, options.event.context || this, options.variables || {})
          }
      };
};
