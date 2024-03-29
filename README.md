# react-tag-commander

Integrate CommandersAct's tag container with your React applications seamlessly using the `react-tag-commander` wrapper.

- **Note**: Familiarize yourself with [CommandersAct's tag container's primary documentation](https://doc.commandersact.com/features/sources/sources-catalog/web/containers) before proceeding.

## Table of Contents
- [Features](#features)
- [Installation and Quick Start](#installation-and-quick-start)
- [Methods](#methods)
  - [Container Management](#container-management)
  - [Variable Management](#variable-management)
  - [Events](#events)
  - [Reloading Containers](#reloading-containers)
- [Server-side Rendering (SSR)](#server-side-rendering)
- [Sample App](#sample-app)
- [License](#license)
- [Development](#development)
- [Contribute](#contribute)

## Features <a name="features"></a>

- Automatic page tracking
- Event triggering
- Supports multiple containers

## Installation and Quick Start <a name="installation-and-quick-start"></a>

### Installation

1. **Using NPM**:  
   ```sh
   npm i react-tag-commander
   ```

2. **Direct Include**: Fetch `dist/index.es5.min.js` or `index.es6.min.js` and include it in your project.
   ```html
   <script src="react-tag-commander/dist/index.es5.min.js"></script>
   ```

### Import

1. **For ES6**:
   ```javascript
   import TC_Wrapper from 'react-tag-commander';
   ```

2. **For ES5**:
   ```javascript
    const TC_Wrapper = require('react-tag-commander');
    ```

3. **Direct Include**:
   ```javascript
   const TC_Wrapper = window.TC_Wrapper;
   ```

### Setup

1. **Initialize your Data Layer**: Set up your data layer early in your web application, preferably in a `<script>` block in the head.
   ```javascript
   tc_vars = [];
   ```

2. **Add a Container**: You can either include your container with a `<script>` tag or utilize the `addContainer` method from the wrapper.

- For the latter, be aware it's asynchronous. Ensure your application renders asynchronously too.

```jsx
import React from "react";
import TC_Wrapper from "react-tag-commander";

function App() {
    const [tcReady, setTcReady] = useState(false);
    
    useEffect(() => {
        const wrapper = TC_Wrapper.getInstance();
        Promise.all([
            wrapper.addContainer('container_head', '/tag-commander-head.js', 'head'), 
            wrapper.addContainer('container_body', '/tag-commander-body.js', 'body')
        ]).then(() => {
            setIsReady(true);
        });
    }, []);
    
    return ( tcReady ? <div>Containers loaded</div> : <div>Now loading</div> );
}
```
## Methods <a name="methods"></a>

Many methods are asynchronous. If you want to ensure that a method has been executed before continuing, you can use the `await` keyword. Please check the function definition to see if it is asynchronous.

### Container Management <a name="container-management"></a>

```js
// Adding a container
await wrapper.addContainer('my-custom-id', '/url/to/container.js', 'head');

// Removing a container
wrapper.removeContainer('my-custom-id');
```

### Variable Management <a name="variable-management"></a>

```js
// Set variables
await wrapper.setTcVars({ env_template : "shop", ... });

// Update a single variable
await wrapper.setTcVar('env_template', 'super_shop');

// Get a variable
const myVar = wrapper.getTcVar('VarKey');

// Remove a variable
wrapper.removeTcVar('VarKey');
```

### Events <a name="events"></a>

- Refer to the [base documentation on events](https://doc.commandersact.com/features/sources/sources-catalog/web/containers/user-guides-for-browser-side-platform/tags/rules/triggers) for an understanding of events in general. 
- The method "triggerEvent" is the new name of the old method "captureEvent"; an alias has been added to ensure backward compatibility.

```js
// Triggering an event
// eventLabel: Name of the event as defined in the container
// htmlElement: Calling context. Usually the HTML element on which the event is triggered, but it can be the component.
// data: event variables
await wrapper.triggerEvent(eventLabel, htmlElement, data);
```

### Reloading Containers <a name="reloading-containers"></a>

#### Manual Reload
Update your container after any variable change.
```js
await wrapper.reloadContainer(siteId, containerId, options);
```

#### Exclusions
You can state an exclusion array to your options object like below.
```typescript
const options = {
        exclusions: [
            'datastorage',
            'deduplication',
            'internalvars',
            'privacy'
        ]
    };
await wrapper.reloadContainer(siteId, containerId, options);
```
Please see the [container's documentation](https://doc.commandersact.com/features/sources/sources-catalog/web/containers/setup-guides-for-developers/spa-implementation-guide#id-2.how-to-implement-tagcommander-in-an-spa-environment) for other options.

#### On Route Change
Utilize the `trackPageLoad` function for updating on route changes.
```js
function SampleView() {
  
  /* States and other effects */
  
  useEffect(() => {
    const wrapper = TC_Wrapper.getInstance();
    wrapper.trackPageLoad({ tcVars: { page: 'home' }})
  }, []);

  /* Render & other custom code */
}
```

## Server-side Rendering (SSR) <a name="server-side-rendering"></a>

`react-tag-commander` works seamlessly with frameworks utilizing Server-side Rendering (SSR) (for example [Next.js](https://nextjs.org/)).
However, the wrapper is interacting with the DOM objects `document` and `window`, which are not available on the server.
Therefore, you have to make sure that wrapper methods are only executed on the client-side.
This can be achieved by using hooks like `useEffect`, `useCallback` or `useState` or, executing it in a callback function that doesn't run on the server, for example the `submit` function of a form.

Examples:
```js
// Throws an 'window is not defined' error, as the code is executed on the server and trackPageLoad interacts with the window object.
function SampleView() {
    const wrapper = TC_Wrapper.getInstance();
    wrapper.trackPageLoad({tcVars: {page: 'home'}})
}
```
```js
// Works as the code is executed on the client only
function SampleView() {
    useEffect(() => {
        const wrapper = TC_Wrapper.getInstance();
        wrapper.trackPageLoad({tcVars: {page: 'home'}})
    }, []);
}
```

Another option is to check whether `window` is defined before executing a method.
```js
function SampleView() {
    if (typeof window !== 'undefined') {
        // client-side-only code
        const wrapper = TC_Wrapper.getInstance();
        wrapper.trackPageLoad({tcVars: {page: 'home'}})
    }
}
```

## Sample App <a name="sample-app"></a>

To help you with your implementation we provided a sample application. To run it clone the repo then run:
```bash
cd tag-commander-sample-app
yarn start
```
Then, visit [http://localhost:3000](http://localhost:3000).


# Development <a name="development"></a>

After forking, set up your environment:

```bash
npm install
```

Commands available:

```bash
gulp
```

# Contribute <a name="contribute"></a>

To contribute to this project, please read the [CONTRIBUTE.md](CONTRIBUTE.md) file.

## License <a name="license"></a>

This module uses the [MIT License](http://revolunet.mit-license.org). Contributions are welcome.
