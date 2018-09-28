# react-tag-commander

This service lets you integrate Tag Commander in your React applications easily.
- [Official website](https://www.commandersact.com/fr/produits/tagcommander/)

## Features

 - automatic page tracking
 - event catching
 - multiple containers

## Installation and Quick Start
The quick start is designed to give you a simple, working example for the most common usage scenario. There are numerous other ways to configure and use this library as explained in the documentation.

### 1- Installation:
You can install the module from a package manager of your choice directly from the command line

```sh
# Bower
bower install react-tag-commander

# NPM
npm i react-tag-commander
```

Or alternatively, grab the dist/index.es5.min.js and include it in your project

In your application, declare the react-tag-commander module dependency.

```html
<script src="nodes_components/react-tag-commander/dist/index.es5.min.js"></script>
```
or if you are using es6, import it like so
```javascript
import TC_Wrapper, { withTracker } from 'react-tag-commander';
```

### 2- In your application, get an TC_Wrapper instance:

```javascript
const wrapper = TC_Wrapper.getInstance();
```

### 3- add your Tag commander containers and start tracking:

```JavaScript
import TC_Wrapper, { withTracker } from 'react-tag-commander';

const wrapper = TC_Wrapper.getInstance();

// you need to provide URIS to load containers script.
// function addContainer (id, uri, node)
wrapper.addContainer('a_name_for_the_container_id', '/the/path/to/tag-commander-container.js', 'head');
// you can add as many container as you like

// but you can also remove them
wrapper.removeContainer('my_tag_container_id');

// you can set debug by setting this to true
wrapper.setDebug(true);

// you can track the url of your app by setting this
wrapper.trackRoutes(true);
```

Congratulations! [react-tag-commander](https://github.com/TagCommander/react-tag-commander) is ready 


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
// you can also override some varible
if (isNewUser) {
    wrapper.setTcVars({
        user_newcustomer : "true",
    });
}
// or set/update them individualy
wrapper.setTcVar('env_template', 'super_shop');

// you can also remove a var
wrapper.removeTcVars('env_template');
}
```
### In render function (JSX)
You can use the directive tcSetVars direcly on any html node
```html
<TcVars env_language="fr" env_template="super_shop" />
```
## Get Var
### In a controller
```js
var myVar = wrapper.getTcVar('VarKey');
```
## Remove Var
### In a controller
```js
var myVar = wrapper.removeTcVar('VarKey');
```

## Capture Events
### In a controller
```js
TagCommander.captureEvent(eventLabel, htmlElement, data);
```
### In JSX
```html
<button 
    className="sm-button green-500"
    onClick={(event) => this.handle(index, event, item.name)}
> + </button>

```

## How to reload your container
When you update your varible you also need to update your container to propagate the changes
```js
var idc = '1234';
var ids = '1234';
var options = {
    exclusions: [
        "datastorage",
        "deduplication",
        "internalvars",
        "privacy"
    ]
};
wrapper.reloadContainer(ids, idc, options);
// or you can reload all the containers
wrapper.reloadAllContainers(options);
```
## Automatic reload of your containers by tracking Routes
### The configuration

you need to set wrapper.trackRoutes(true); to true in your app configuration
```js
wrapper.trackRoutes(true);
```

then you can configure the your route by using the tcRealoadOnly option in your route configuration

```js
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TC_Wrapper, { withTracker } from 'react-tag-commander';

// Components
import Navbar from "./components/layout/navbar/Navbar";
import Dashboard from "./components/dashboard/index.js";
import Home from "./components/home/index.js";
import Shop from "./components/shop/index.js";

const wrapper = TC_Wrapper.getInstance();
wrapper.setDebug(true);

// setting the tags for the current and prevous URL
wrapper.trackRoutes(true);

// to set the TagCommander container provide the id
wrapper.addContainer('container_head', '/tag-commander-head.js', 'head');
wrapper.addContainer('container_body', '/tag-commander-body.js', 'body');

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/home" component={withTracker(Home, 
                {tcReloadOnly: [
                  {ids :'4056', idc: '12'} // will only reload the container 4056_12
                ]
                })} />
                <Route exact path="/shop" component={withTracker(Shop, 
                {tcReloadOnly:[
                  {ids :'4056', idc: '12'}, // will only reload the container 4056_12
                  {ids :'4056', idc: '11', options:["datastorage", "deduplication"]} // if no tcReloadOnly is set it will reload all the containers if the trackRoute is true (in the configuration)
                ] 
                })} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="" component={withTracker(Home, 
                {tcReloadOnly: [
                  {ids :'4056', idc: '12'}
                ]
                })} />
              </Switch>
            </div>
        </div>
      </Router>
    );
  }
}

export default App;
```
If you don't set the TagCommanderProvider.trackRoutes(true); (or you set it to false) you will have to reload your container manually

```js
// reload a specifique container
wrapper.reloadContainer(ids, idc, options);
// or you can reload all the containers
wrapper.reloadAllContainer(options);
```

## Sample app
To help you with your implementaiton we provided a sample application. to run it
```bash
cd tag-commander-sample-app
yarn start
```
then go to [http://localhost:3000](http://localhost:3000)


## License

As React itself, this module is released under the permissive [MIT License](http://revolunet.mit-license.org). Your contributions are always welcome.

## Development

After forking you will need to run the following from a command line to get your environment setup:

1. ```yarn install```

After install you have the following commands available to you from a command line:

1. ```gulp```