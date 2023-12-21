import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import TC_Wrapper from './index';

beforeEach(() => {
  // Mock globals
  global.window = {
    tC: {},
    tc_vars: {}
  };
  global.console = {
    log: vi.fn()
  };
  global.document = {
    createElement: vi.fn(),
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
      const wrapper = new TC_Wrapper();

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

  it('addContainer() should add a container to the DOM', async () => {
    const wrapper = new TC_Wrapper();
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

    await expect(addContainerPromise).resolves.toEqual(undefined);

    expect.assertions(10);
  });

  it('removeContainer()', async () => {
    // TBD
  });

  it('setDebug()', async () => {
    // TBD
  });

  it('setTcVar() should set a variable', async () => {
    const wrapper = new TC_Wrapper();
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
    const wrapper = new TC_Wrapper();
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

    expect(setTcVarsPromise).resolves.toEqual(Array(undefined, undefined));
  });

  it('getTcVar() should return a value if it is available and false otherwise', () => {
    const wrapper = new TC_Wrapper();
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
    const wrapper = new TC_Wrapper();
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
    const wrapper = new TC_Wrapper();
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
    const wrapper = new TC_Wrapper();
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
    const wrapper = new TC_Wrapper();
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

  it('trackPageLoad()', async () => {
    // TBD
  });
});
