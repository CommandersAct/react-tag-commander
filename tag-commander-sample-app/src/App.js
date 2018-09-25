import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import TC_Wrapper from 'react-tag-commander';

// Components
import Navbar from "./components/layout/navbar/Navbar";
import Dashboard from "./components/dashboard/index.js";
import Home from "./components/home/index.js";
import Shop from "./components/shop/index.js";

const Test = ({ routes }) => (
  <div>
    <h2>test</h2>
    <ul>
      <li><Link to="/test/test1">Test1</Link></li>
      <li><Link to="/test/test2">Test2</Link></li>
    </ul>
      {routes.map((route) => (
        <RouteWithSubRoutes key={route.path} {...route} />
      ))}
  </div>
);

const Test1 = () => <h3>Test1</h3>
const Test2 = () => <h3>Test2</h3>

const routes = [
  {
    path: '/home',
    component: Home,
    tcReloadOnly: [
      {ids :'4056', idc: '12'}
    ]
  },
  {
    path: '/shop',
    component: Shop,
    tcReloadOnly: [
      {ids :'4056', idc: '12'}, 
      {ids :'4056', idc: '11', options: 
        ["datastorage", "deduplication"]
      }
    ]
  },
  {
    path: '/test',
    component: Test,
    routes: [
      {
        path: '/test/cartItems',
        component: Test1
      },
      {
        path: '/test/cart',
        component: Test2
      }
    ]
  },
  {
    path: '/dashboard',
    component: Dashboard
  },
  {
    path: '',
    component: Home,
    tcReloadOnly: [
      {ids :'4056', idc: '12'}
    ]
  }
];

const RouteWithSubRoutes = (route) => (
    <Route path={route.path} render={(props) => (
      <route.component {...props} 
      routes={route.routes} 
      />
    )}
    />
);

class App extends Component {
  render() {
    console.log(TC_Wrapper);
    
    return (
      <Router>
        <div className="App">
          <Navbar />
            <div className="container">
              <Switch>
                {
                  routes.map(route => (
                  <RouteWithSubRoutes key={route.path} {...route} />
                  ))
                }
              </Switch>
            </div>
        </div>
      </Router>
    );
  }
}

export default App;
