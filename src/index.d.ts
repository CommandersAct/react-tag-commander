import React from 'react';

export default class TCWrapper {
    private constructor();
    static getInstance(): TCWrapper;
    /**
     * Add a container
     * The script URI correspond to the tag-commander script URL,
     * it can either be a CDN URL or the path of your script
     */
    addContainer(id: string, url: string, node: string): Promise<void>;
    /**
     * Remove a container
     */
    removeContainer(id: string): void;
    /**
     * Will display the debug messages if true
     */
    setDebug(state: boolean): void;
    /**
     * Set or update the value of the var
     */
    setTcVar(tcKey: string, tcVar: any): void;
    /**
     * Set your variables for the different providers, when called the first time it
     * instantiate the external variable
     */
    setTcVars(vars: any): void;
    /**
     * Get the value of the var
     */
    getTcVar(tcKey: string): void;
    removeTcVar(tcKey: string): void;
    reloadAllContainers(options: any): void;
    /**
     * Will reload the specified container
     */
    reloadContainer(siteId: number, containerId: number, opt: any): void;
    /**
     * Will set a TC_Wrapper event
     */
    triggerEvent(
        eventLabel: string,
        htmlElement: HTMLElement | null,
        data: any,
        reloadCapture: boolean
    ): void;
}

export function withTracker(
    Component: React.ReactNode,
    options: any
): React.ComponentType<any> | undefined;