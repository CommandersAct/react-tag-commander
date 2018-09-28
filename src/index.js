import React, { Component } from 'react';

export default class TC_Wrapper {

    constructor() {
        this.logger = window.console;
        this.tcContainers = [];
        this.isTracking = false;
        this.instance = null;
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
     * @param {string} uri the source of the script
     * @param {string} node the node on witch the script will be placed, it can either be head or body
     */
    addContainer(id, uri, node) {

        if(!id) {
            return this.logger.error('You should define the container id.');
        }
        if(typeof id !== 'string') {
            this.logger.warn('The container id should be a string.');
        }
        if(!uri) {
            return this.logger.error('You should define the container id.');
        }
        if(typeof uri !== 'string') {
            this.logger.warn('The container uri should be a string.');
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

            this.logger.warn('The script will be placed in the head by default.');
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
        this.isTracking = !!boolean;
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
        }
        window.tc_vars[tcKey] = tcVar;
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
        this.logger.log('removeTcVar', tcKey);
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
        
        if(!window.tC) {
            return setTimeout(() => {
                reloadAllContainers(options);
            },1000);
        }

        window.tC.container.reload(options);
    };

    /**
     * Will reload a specifique container
     * @param {number} ids
     * @param {number} idc
     * @param {object} options can contain some options in a form of an object
     */
    reloadContainer(ids, idc, opt) {
        let options = opt || {};
        this.logger.log('Reload container ids: ' + ids + ' idc: ' + idc, typeof options === 'object' ? 'with options: ' + options : '');
        window.tC['container_' + ids + '_' + idc].reload(options);
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

export function withTracker(WrappedComponent, options = {}) {
    
    const trackPage = page => {
        const wrapper = TC_Wrapper.getInstance();
        console.log(wrapper);
        
        wrapper.setTcVars(options.tcReloadOnly);
        wrapper.reloadAllContainers();
    };

    // eslint-disable-next-line
    const HighOrderComponent = class extends Component {

        componentDidMount() {
            // eslint-disable-next-line
            const page = this.props.location.pathname + this.props.location.search;
            trackPage(page);
        }

        componentDidUpdate(prevProps) {
            const currentPage = prevProps.location.pathname + prevProps.location.search;
            const nextPage = this.props.location.pathname + this.props.location.search;

            if (currentPage !== nextPage) {
                trackPage(nextPage);
            }
        }

        render() {
            return React.createElement(WrappedComponent, this.props);
        }
    };

    return HighOrderComponent;
};