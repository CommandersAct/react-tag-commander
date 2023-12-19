# React-Tag-Commander Documentation

Integrate Tag Commander with your React applications seamlessly using the `react-tag-commander` wrapper.

- [Official Tag Commander website](https://www.commandersact.com/fr/produits/tagcommander/)
- **Note**: Familiarize yourself with [Tag Commander's primary documentation](https://community.commandersact.com/tagcommander/) before proceeding.

# Table of Contents
- [Features](#features)
- [Installation and Quick Start](#installation-and-quick-start)
- [Methods](#methods)
  - [Container Management](#container-management)
  - [Variable Management](#variable-management)
  - [Events](#events)
- [Reloading Containers](#reloading-containers)
- [Sample App](#sample-app)
- [License](#license)
- [Development](#development)

# Features <a name="features"></a>

- Automatic page tracking
- Event triggering
- Supports multiple containers

# Installation and Quick Start <a name="installation-and-quick-start"></a>

## Installation

1. **Using NPM**:  
   ```sh
   npm i react-tag-commander
   ```

2. **Direct Include**: Fetch `dist/index.es5.min.js` or `index.es6.min.js` and include it in your project.
   ```html
   <script src="react-tag-commander/dist/index.es5.min.js"></script>
   ```

## Import

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

## Setup

1. **Initialize your Data Layer**: Set up your data layer early in your web application, preferably in a `<script>` block in the head.
   ```javascript
   tc_vars = [];
   ```

2. **Add a Container**: You can either include your container with a `<script>` tag or utilize the `addContainer` method from the wrapper.

- For the latter, be aware it's asynchronous. Ensure your application renders asynchronously too.

```jsx
import React from "react";
import TC_Wrapper from "react-tag-commander";

const wrapper = TC_Wrapper.getInstance();

function App() {

  const [tcReady, setTcReady] = useState(false);

  useEffect(() => {
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
# Methods <a name="methods"></a>

Many methods are asynchronous. If you want to ensure that a method has been executed before continuing, you can use the `await` keyword. Please check the function definition to see if it is asynchronous.

## Container Management <a name="container-management"></a>
   ```js
   // Adding a container
   await wrapper.addContainer('my-custom-id', '/url/to/container.js', 'head');

   // Removing a container
   wrapper.removeContainer('my-custom-id');
   ```

## Variable Management <a name="variable-management"></a>
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

## Events <a name="events"></a>

- Refer to the [base documentation on events](https://community.commandersact.com/tagcommander/user-manual/container-management/events) for an understanding of events in general. 
- The method "triggerEvent" is the new name of the old method "captureEvent"; an alias has been added to ensure backward compatibility.


  ```js
  // Triggering an event
  // eventLabel: Name of the event as defined in the container
  // htmlElement: Calling context. Usually the HTML element on which the event is triggered, but it can be the component.
  // data: event variables
  await wrapper.triggerEvent(eventLabel, htmlElement, data);
  ```

# Reloading Containers <a name="reloading-containers"></a>

1. **Manual Reload**: Update your container after any variable change.
   ```js
   await wrapper.reloadContainer(siteId, containerId, options);
   ```

2. **On Route Change**: Utilize the `trackPageLoad` function for updating on route changes.
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

# Sample App <a name="sample-app"></a>

To help you with your implementation we provided a sample application. To run it clone the repo then run:
```bash
cd tag-commander-sample-app
yarn start
```
Then, visit [http://localhost:3000](http://localhost:3000).

# License <a name="license"></a>
This module uses the [MIT License](http://revolunet.mit-license.org). Contributions are welcome.

# Development <a name="development"></a>

After forking, set up your environment:

1. ```npm install```

Commands available:

1. ```gulp```
