import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import TC_Wrapper from './index';

beforeEach(() => {
  // Mock window object
  global.window = {
    console: {
      log: vi.fn()
    },
    tC: {}
  };

  // Enable fake timers
  vi.useFakeTimers();
});

afterEach(() => {
  // Reset mocks after each test
  vi.restoreAllMocks();
});

describe('TC_Wrapper', () => {
  // waitForGlobals
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

  // reloadAllContainers()
  it('reloadAllContainers() should reload all containers', async () => {
    const wrapper = new TC_Wrapper();
    wrapper.setDebug(true);

    const options = { someOption: true };

    // Mock waitForGlobals and reload function
    wrapper.waitForGlobals = vi.fn().mockResolvedValue();
    global.window.tC = {
      container: {
        reload: vi.fn()
      }
    };

    await wrapper.reloadAllContainers({ someOption: true });

    expect(wrapper.waitForGlobals).toHaveBeenCalledWith('tC.container');
    expect(wrapper.waitForGlobals).toHaveBeenCalledTimes(1);

    expect(global.window.tC.container.reload).toHaveBeenCalledWith(options);
    expect(global.window.tC.container.reload).toHaveBeenCalledTimes(1);

    expect(global.window.console.log).toHaveBeenCalledWith('Reload all containers ', options);
    expect(global.window.console.log).toHaveBeenCalledTimes(1);

    expect.assertions(6);
  });

  // reloadContainer()
  it('reloadContainer() should reload the specified container', async () => {
    const wrapper = new TC_Wrapper();
    wrapper.setDebug(true);

    const siteId = 123;
    const containerId = 456;
    const options = { someOption: true };

    // Mock waitForGlobals and reload function
    wrapper.waitForGlobals = vi.fn().mockResolvedValue();
    global.window.tC['container_' + siteId + '_' + containerId] = {
      reload: vi.fn()
    };

    await wrapper.reloadContainer(siteId, containerId, options);

    expect(wrapper.waitForGlobals).toHaveBeenCalledWith('tC.container_' + siteId + '_' + containerId);
    expect(wrapper.waitForGlobals).toHaveBeenCalledTimes(1);

    expect(global.window.tC['container_' + siteId + '_' + containerId].reload).toHaveBeenCalledWith(options);
    expect(global.window.tC['container_' + siteId + '_' + containerId].reload).toHaveBeenCalledTimes(1);

    expect(global.window.console.log).toHaveBeenCalledWith(
      `Reload container ids: ${siteId} idc: ${containerId}`,
      `with options: ${options}`
    );
    expect(global.window.console.log).toHaveBeenCalledTimes(1);

    expect.assertions(6);
  });
});
