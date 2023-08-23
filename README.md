# react-tag-commander

This service lets you integrate Tag Commander in your React applications easily.
- [Official website](https://www.commandersact.com/fr/produits/tagcommander/)


This documentation is specific to the React wrapper. You should read the documentation about [Tag Commander](https://community.commandersact.com/tagcommander/) first for the concepts

## Features

 - automatic page tracking
 - event trigger
 - multiple containers


# Installation and Quick Start
The quick start is designed to give you a simple, working example for the most common usage scenario. There are numerous other ways to configure and use this library as explained in the documentation.

### 1- Installation:
You can install the module from a package manager of your choice directly from the command line

```sh
# NPM
npm i react-tag-commander
```

Or alternatively, grab the dist/index.es5.min.js and include it in your project

In your application, declare the react-tag-commander module dependency.

```html
<script src="react-tag-commander/dist/index.es5.min.js"></script>
```
or if you are using ES6, import it like so
```javascript
import TC_Wrapper from 'react-tag-commander';
```
### 2- Initialize your datalayer

The plugin doesn't replace the standard setup of a container because you may need to use the containers outside the plugin.

Initialize your datalayer so that it's ready for the container and plugin, without losing any data. Do it as soon as possible on your website like in a `<script>` block in the head of your webapp.

```
tc_vars = [];
```

### 3- Adding a container

There is 2 way to add your container. Either you include with a `<script>` tag before your webapp, or you use the addContainer method of the wrapper. 
It should be noted however that the later will be asynchronous, so your application should also render asynchronously to ensure that the containers are loaded.



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
# Methods
## Add/Remove containers

```js
// function addContainer (id, url, node)
// * id: id of the <script> tag which will be used to load the container
// * url: URL of the container to load
// * node: a string; Where the container should be appended, either "head" or "body"
wrapper.addContainer('my-custom-id', '/the/path/to/tag-commander-container.js', 'head');
// addContainer returns a promise resolved when the container is loaded.
// you can add as many container as you like

// Using the previously defined id, you can also remove the container
wrapper.removeContainer('my-custom-id');
```

## Set Vars
### In React component
The `setVar` call allows to set your `tc_vars`.
```js
wrapper.setTcVars({
    env_template : "shop",
    env_work : "dev",
    env_language : "en",
    user_id : "124",
    user_logged : "true",
    user_age: "32",
    user_newcustomer : "false",
});
// you can also override some variable
if (isNewUser) {
    wrapper.setTcVars({
        user_newcustomer : "true",
    });
}
// or set/update them individualy
wrapper.setTcVar('env_template', 'super_shop');

// you can also remove a var
wrapper.removeTcVars('env_template');
```
## Get Var

```js
const myVar = wrapper.getTcVar('VarKey');
```
## Remove Var

```js
const myVar = wrapper.removeTcVar('VarKey');
```

## Events

You should check the [base documentation](https://community.commandersact.com/tagcommander/user-manual/container-management/events) about events in general.

In the context of an SPA, the events defined in a container can't be bound to the standard HTML event as an SPA has its own lifecycle.

The method "triggerEvent" is the new name of the old method "captureEvent"; an alias has been added to ensure backward compatibility.

### In your code

Trigger the event in any part of a component
```js
// eventLabel: Name of the event as defined in the container
// htmlElement: Calling context. Usually the HTML element on which the event is triggered, but it can be the component.
// data: event variables
wrapper.triggerEvent(eventLabel, htmlElement, data);
```
### In JSX on DOM event
```jsx

<button 
    className="sm-button green-500"
    onClick={(event) => wrapper.triggerEvent('add_to_cart', event.currentTarget, { item: item.name })}
>
  Add to cart
</button>


```

## How to reload your container
When you update your variable you also need to update your container to propagate the changes
```js
var containerId = '1234';
var siteId = '1234';
var options = {
    exclusions: [
        "datastorage",
        "deduplication",
        "internalvars",
        "privacy"
    ]
};
wrapper.reloadContainer(siteId, containerId, options);
// or you can reload all the containers
wrapper.reloadAllContainers(options);
```
## Reloading your container on route change

### The configuration

In order to reload the page on route change, you need to use the  `trackPageLoad` function from the wrapper. We recommend
to call it in the `useEffect` hook of your component to avoid unnecessary reloads.

The `trackPageLoad` function takes an object as parameter with the following properties:

```js
{
  tcVars: {
    //update the datalayer before reloading all container. Equivalent to wrapper.setTcVars
  },
  event: {
    label: 'eventLabel'
    context: this
    variables:  {
      myEventVariable: 'Foo'
    }
    //an event can also be triggered after container reload. This is useful is you have set
    //a custom page view event.
    // * Label: the event's label
    // * context: Optional. Context from which that event should have been called. Default to the component
    // * variables: Options. Event's variable, defined in tag commander.
  }
}
```

An example component could look like this:

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
## Sample app
To help you with your implementation we provided a sample application. To run it clone the repo then run:
```bash
cd tag-commander-sample-app
yarn start
```
then go to [http://localhost:3000](http://localhost:3000)


## License

As React itself, this module is released under the permissive [MIT License](http://revolunet.mit-license.org). Your contributions are always welcome.

## Development

After forking, you will need to run the following from a command line to get your environment setup:

1. ```npm install```

After install, you have the following commands available to you from a command line:

1. ```gulp```
