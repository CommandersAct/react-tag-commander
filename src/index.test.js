import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import TC_Wrapper from './index';

const wrapperName = 'react';

let wrapper;

beforeEach(() => {
  wrapper = new TC_Wrapper();
  // Mock globals
  global.window = {
    tC: {},
    tc_vars: {}
  };
  global.console = {
    log: vi.fn(),
    warn: vi.fn(),
    error: vi.fn()
  };
  global.document = {
    createElement: vi.fn(),
    getElementsByTagName: vi.fn()
  };

  // Enable fake timers
  vi.useFakeTimers();
});

afterEach(() => {
  // Reset mocks after each test
  vi.restoreAllMocks();
});

describe('TC_Wrapper', () => {
  it(
    'waitForGlobals() should resolve as soon as global properties are available',
    async () => {
      // Start waiting for 'someProperty'
      const waitForGlobalsPromise = wrapper.waitForGlobals('someProperty');

      // Create property after 600ms
      setTimeout(() => {
        global.window.someProperty = { test: 'test' };
      }, 600);
      expect(global.window.someProperty).toStrictEqual(undefined);

      // Fast-forward time by 600ms, the property should be there now
      await vi.advanceTimersByTimeAsync(600);
      expect(global.window.someProperty).toStrictEqual({ test: 'test' });

      // After another 400ms the promise should be resolved
      await vi.advanceTimersByTimeAsync(400);
      await expect(waitForGlobalsPromise).resolves.toEqual(undefined);

      expect.assertions(3);
    },
    {
      timeout: 50
    }
  );

  it('addContainer() should throw error for invalid id', async () => {
    const invalidId = null; // or any invalid value
    const url = 'http://example.com/script.js';
    const node = 'body';

    expect(() => wrapper.addContainer(invalidId, url, node)).toThrowError(
      `[${wrapperName}-tag-commander]You should define the container id.`
    );
  });

  it('addContainer() should throw error for non-string id', async () => {
    const nonStringId = 123; // Non-string value
    const url = 'http://example.com/script.js';
    const node = 'body';

    expect(() => wrapper.addContainer(nonStringId, url, node)).toThrowError(
      `[${wrapperName}-tag-commander]The container id should be a string.`
    );
  });

  it('addContainer() should throw error for invalid URL', async () => {
    const id = 'someId';
    const invalidUrl = null; // or any invalid value
    const node = 'body';

    expect(() => wrapper.addContainer(id, invalidUrl, node)).toThrowError(
      `[${wrapperName}-tag-commander]Invalid container URL.`
    );
  });

  it('addContainer() should default to the head node when an invalid node is provided', async () => {
    wrapper.setDebug(true);

    // Input variables
    const id = 'someId';
    const url = 'http://example.com/script.js';
    const invalidNode = 'invalidNode';

    // Mocks
    const scriptElementMock = {
      setAttribute: vi.fn(),
      onload: vi.fn()
    };
    global.document.createElement.mockReturnValue(scriptElementMock);
    global.document.getElementsByTagName.mockReturnValueOnce([]).mockReturnValueOnce([{ appendChild: vi.fn() }]); // Mock for invalid node and then for head

    // Call function
    const addContainerPromise = wrapper.addContainer(id, url, invalidNode);

    // Simulate script loading
    scriptElementMock.onload();

    await addContainerPromise;

    // Assertions
    expect(global.document.getElementsByTagName).toHaveBeenNthCalledWith(1, invalidNode.toLowerCase());
    expect(global.document.getElementsByTagName).toHaveBeenNthCalledWith(2, 'head');
    expect(global.console.warn).toHaveBeenCalledWith('The script will be placed in the head by default.');
    expect(wrapper.tcContainers[0].node).toEqual('head');
  });

  it('addContainer() should add a container to the DOM', async () => {
    wrapper.setDebug(true);

    // Input variables
    const id = 'someId';
    const url = 'http://example.com/script.js';
    const node = 'body';

    // Mocks
    const scriptElementMock = {
      setAttribute: vi.fn(),
      onload: vi.fn()
    };
    global.document.createElement = vi.fn().mockReturnValue(scriptElementMock);
    global.document.getElementsByTagName = vi.fn().mockReturnValue([{ appendChild: vi.fn() }]);

    // Call function
    const addContainerPromise = wrapper.addContainer(id, url, node);

    // Simulate script loading
    scriptElementMock.onload();

    await addContainerPromise;

    // Assertions
    expect(global.document.createElement).toHaveBeenCalledWith('script');
    expect(global.document.createElement).toHaveBeenCalledTimes(1);

    expect(scriptElementMock.setAttribute).toHaveBeenNthCalledWith(1, 'type', 'text/javascript');
    expect(scriptElementMock.setAttribute).toHaveBeenNthCalledWith(2, 'src', url);
    expect(scriptElementMock.setAttribute).toHaveBeenNthCalledWith(3, 'id', id);
    expect(scriptElementMock.setAttribute).toHaveBeenCalledTimes(3);

    expect(global.document.getElementsByTagName(node)[0].appendChild).toHaveBeenCalledWith(scriptElementMock);
    expect(global.document.getElementsByTagName).toHaveBeenCalledTimes(3);

    expect(wrapper.tcContainers).toContainEqual({ id, uri: url, node });
  });

  it('removeContainer() should remove a container if it exists', () => {
    wrapper.tcContainers = [{ id: 'existing-id', uri: 'some-url', node: 'body' }];

    // Mocks
    const parent = {
      removeChild: vi.fn()
    };
    const containerElement = {
      parentNode: parent
    };
    global.document = {
      getElementById: vi.fn().mockImplementation((id) => {
        if (id === 'existing-id') {
          return containerElement;
        }
        return null;
      }),
      getElementsByTagName: vi.fn().mockReturnValue([parent])
    };

    // Call function
    wrapper.removeContainer('existing-id');

    // Assertions
    expect(document.getElementById).toHaveBeenCalledWith('existing-id');
    expect(containerElement.parentNode.removeChild).toHaveBeenCalledWith(containerElement);
    expect(wrapper.tcContainers.length).toBe(0);
  });

  it('removeContainer() should not remove a container if it does not exist', () => {
    wrapper.tcContainers = [{ id: 'existing-id', uri: 'some-url', node: 'body' }];

    // Mocks
    const parent = {
      removeChild: vi.fn()
    };
    const containerElement = {
      parentNode: parent
    };
    global.document = {
      getElementById: vi.fn().mockImplementation((id) => {
        if (id === 'existing-id') {
          return containerElement;
        }
        return null;
      }),
      getElementsByTagName: vi.fn().mockReturnValue([parent])
    };

    // Call function
    wrapper.removeContainer('non-existing-id');

    // Assertions
    expect(document.getElementById).toHaveBeenCalledWith('non-existing-id');
    expect(containerElement.parentNode.removeChild).not.toHaveBeenCalled();
    expect(wrapper.tcContainers.length).toBe(1);
  });

  it('removeContainer() should handle the case where the container is not in the DOM', () => {
    wrapper.tcContainers = [{ id: 'existing-id', uri: 'some-url', node: 'body' }];

    // Mocks
    const parent = {
      removeChild: vi.fn()
    };
    const containerElement = {
      parentNode: parent
    };
    global.document = {
      getElementById: vi.fn().mockReturnValueOnce(null),
      getElementsByTagName: vi.fn().mockReturnValue([parent])
    };

    // Call function
    wrapper.removeContainer('existing-id');

    // Assertions
    expect(document.getElementById).toHaveBeenCalledWith('existing-id');
    expect(containerElement.parentNode.removeChild).not.toHaveBeenCalled();
    expect(wrapper.tcContainers.length).toBe(0);
  });

  it('setDebug() should enable logging when set to true', () => {
    wrapper.setDebug(true);

    // Trigger some logging
    wrapper.logger.log('log message');
    wrapper.logger.warn('warn message');
    wrapper.logger.error('error message');

    // Assertions to check if logging methods are called
    expect(global.console.log).toHaveBeenCalledWith('log message');
    expect(global.console.warn).toHaveBeenCalledWith('warn message');
    expect(global.console.error).toHaveBeenCalledWith('error message');
  });

  it('setDebug() should disable logging when set to false', () => {
    wrapper.setDebug(false);

    // Trigger some logging
    wrapper.logger.log('log message');
    wrapper.logger.warn('warn message');
    wrapper.logger.error('error message');

    // Assertions to check that logging methods are not called
    expect(global.console.log).not.toHaveBeenCalled();
    expect(global.console.warn).not.toHaveBeenCalled();
    expect(global.console.error).not.toHaveBeenCalled();
  });

  it('setTcVar() should set a variable', async () => {
    wrapper.setDebug(true);

    // Input variables
    const tcKey = 'someKey';
    const tcVar = 'someValue';

    // Mocks
    wrapper.waitForGlobals = vi.fn().mockResolvedValue();

    // Call function
    await wrapper.setTcVar(tcKey, tcVar);

    // Assertions
    expect(wrapper.waitForGlobals).toHaveBeenCalledWith('tc_vars');
    expect(wrapper.waitForGlobals).toHaveBeenCalledTimes(1);

    expect(global.console.log).toHaveBeenCalledWith('setTcVar', tcKey, tcVar);
    expect(global.console.log).toHaveBeenCalledTimes(1);

    expect(global.window.tc_vars[tcKey]).toStrictEqual(tcVar);

    expect.assertions(5);
  });

  it('setTcVars() should set multiple variables at once', async () => {
    wrapper.setDebug(true);

    // Input variables
    const vars = {
      someKey: 'someValue',
      anotherKey: 'anotherValue'
    };

    // Mock
    wrapper.setTcVar = vi.fn().mockResolvedValue();

    // Call function
    const setTcVarsPromise = wrapper.setTcVars(vars);

    // Assertions
    expect(wrapper.setTcVar).toHaveBeenCalledWith('someKey', vars['someKey']);
    expect(wrapper.setTcVar).toHaveBeenCalledWith('anotherKey', vars['anotherKey']);
    expect(wrapper.setTcVar).toHaveBeenCalledTimes(2);

    await expect(setTcVarsPromise).resolves.toEqual(Array(undefined, undefined));
  });

  it('getTcVar() should return a value if it is available and false otherwise', () => {
    wrapper.setDebug(true);

    // Input variables
    const tcKeyAvailable = 'someKey';
    const tcKeyNotAvailable = 'anotherKey';

    // Mock
    global.window.tc_vars[tcKeyAvailable] = 'someValue';

    // Call function
    const result1 = wrapper.getTcVar(tcKeyAvailable);
    const result2 = wrapper.getTcVar(tcKeyNotAvailable);

    // Assertions
    expect(global.console.log).toHaveBeenCalledWith('getTcVar', tcKeyAvailable);
    expect(global.console.log).toHaveBeenCalledWith('getTcVar', tcKeyNotAvailable);
    expect(global.console.log).toHaveBeenCalledTimes(2);
    expect(result1).toStrictEqual('someValue');
    expect(result2).toStrictEqual(false);
  });

  it('removeTcVar() should remove a variable', () => {
    wrapper.setDebug(true);

    // Input variable
    const tcKey = 'someKey';

    // Mock
    global.window.tc_vars[tcKey] = 'someValue';

    // Call function
    wrapper.removeTcVar(tcKey);

    // Assertions
    expect(global.console.log).toHaveBeenCalledWith('removeTcVar', tcKey);
    expect(global.console.log).toHaveBeenCalledTimes(1);

    expect(global.window.tc_vars[tcKey]).toStrictEqual(undefined);
  });

  it('reloadAllContainers() should reload all containers', async () => {
    wrapper.setDebug(true);

    // Input variable
    const options = { someOption: true };

    // Mocks
    wrapper.waitForGlobals = vi.fn().mockResolvedValue();
    global.window.tC = {
      container: {
        reload: vi.fn()
      }
    };

    // Call function
    await wrapper.reloadAllContainers({ someOption: true });

    // Assertions
    expect(wrapper.waitForGlobals).toHaveBeenCalledWith('tC.container');
    expect(wrapper.waitForGlobals).toHaveBeenCalledTimes(1);

    expect(global.window.tC.container.reload).toHaveBeenCalledWith(options);
    expect(global.window.tC.container.reload).toHaveBeenCalledTimes(1);

    expect(global.console.log).toHaveBeenCalledWith('Reload all containers ', options);
    expect(global.console.log).toHaveBeenCalledTimes(1);

    expect.assertions(6);
  });

  it('reloadContainer() should reload the specified container', async () => {
    wrapper.setDebug(true);

    // Input variables
    const siteId = 123;
    const containerId = 456;
    const options = { someOption: true };

    // Mocks
    wrapper.waitForGlobals = vi.fn().mockResolvedValue();
    global.window.tC['container_' + siteId + '_' + containerId] = {
      reload: vi.fn()
    };

    // Call function
    await wrapper.reloadContainer(siteId, containerId, options);

    // Assertions
    expect(wrapper.waitForGlobals).toHaveBeenCalledWith('tC.container_' + siteId + '_' + containerId);
    expect(wrapper.waitForGlobals).toHaveBeenCalledTimes(1);

    expect(global.window.tC['container_' + siteId + '_' + containerId].reload).toHaveBeenCalledWith(options);
    expect(global.window.tC['container_' + siteId + '_' + containerId].reload).toHaveBeenCalledTimes(1);

    expect(global.console.log).toHaveBeenCalledWith(
      `Reload container ids: ${siteId} idc: ${containerId}`,
      `with options: ${options}`
    );
    expect(global.console.log).toHaveBeenCalledTimes(1);

    expect.assertions(6);
  });

  it('triggerEvent() should trigger an event correctly', async () => {
    wrapper.setDebug(true);

    // Input variables
    const eventLabel = 'someEvent';
    const htmlElement = global.document.createElement('div');
    const data = { someData: 'someData' };

    // Mocks
    wrapper.waitForGlobals = vi.fn().mockResolvedValue();
    global.window.tC = {
      event: {
        [eventLabel]: vi.fn()
      }
    };

    // Call function
    await wrapper.triggerEvent(eventLabel, htmlElement, data);

    // Assertions
    expect(wrapper.waitForGlobals).toHaveBeenCalledWith('tC.event.' + eventLabel);
    expect(wrapper.waitForGlobals).toHaveBeenCalledTimes(1);

    expect(global.window.tC.event[eventLabel]).toHaveBeenCalledWith(htmlElement, data);
    expect(global.window.tC.event[eventLabel]).toHaveBeenCalledTimes(1);

    expect(global.console.log).toHaveBeenCalledWith('triggerEvent', eventLabel, htmlElement, data);
    expect(global.console.log).toHaveBeenCalledTimes(1);

    expect.assertions(6);
  });

  it('trackPageLoad() should handle tcVars in options', async () => {
    // Input variables
    const options = {
      tcVars: { key1: 'value1', key2: 'value2' }
    };

    // Mocks
    wrapper.setTcVars = vi.fn().mockResolvedValue();
    wrapper.reloadAllContainers = vi.fn().mockResolvedValue();
    wrapper.triggerEvent = vi.fn().mockResolvedValue();

    // Call function
    await wrapper.trackPageLoad(options);

    // Assertions
    expect(wrapper.setTcVars).toHaveBeenCalledWith(options.tcVars);
    expect(wrapper.reloadAllContainers).toHaveBeenCalled();
    expect(wrapper.triggerEvent).not.toHaveBeenCalled();
  });

  it('trackPageLoad() should handle event in options', async () => {
    // Input variables
    const options = {
      event: { label: 'testEvent', context: {} },
      variables: { key: 'value' }
    };

    // Mocks
    wrapper.setTcVars = vi.fn().mockResolvedValue();
    wrapper.reloadAllContainers = vi.fn().mockResolvedValue();
    wrapper.triggerEvent = vi.fn().mockResolvedValue();

    // Call function
    await wrapper.trackPageLoad(options);

    // Assertions
    expect(wrapper.triggerEvent).toHaveBeenCalledWith(options.event.label, options.event.context, options.variables);
    expect(wrapper.reloadAllContainers).toHaveBeenCalled();
    expect(wrapper.setTcVars).not.toHaveBeenCalled();
  });

  it('trackPageLoad() should handle both tcVars and event in options', async () => {
    // Input variables
    const options = {
      tcVars: { key1: 'value1', key2: 'value2' },
      event: { label: 'testEvent', context: {} },
      variables: { key: 'value' }
    };

    // Mocks
    wrapper.setTcVars = vi.fn().mockResolvedValue();
    wrapper.reloadAllContainers = vi.fn().mockResolvedValue();
    wrapper.triggerEvent = vi.fn().mockResolvedValue();

    // Call function
    await wrapper.trackPageLoad(options);

    // Assertions
    expect(wrapper.setTcVars).toHaveBeenCalledWith(options.tcVars);
    expect(wrapper.reloadAllContainers).toHaveBeenCalled();
    expect(wrapper.triggerEvent).toHaveBeenCalledWith(options.event.label, options.event.context, options.variables);
  });
});
