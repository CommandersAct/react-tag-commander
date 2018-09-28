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
                  {ids :'4056', idc: '12'}
                ]
                })} />
                <Route exact path="/shop" component={withTracker(Shop, 
                {tcReloadOnly:[
                  {ids :'4056', idc: '12'}, 
                  {ids :'4056', idc: '11', options:["datastorage", "deduplication"]}
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
