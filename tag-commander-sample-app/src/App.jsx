import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { withTracker } from 'react-tag-commander';
import { Navbar } from "./components/layout/navbar/Navbar";
import { Home } from "./components/home/index.jsx";
import { Dashboard } from "./components/dashboard/index.jsx";
import { Shop } from "./components/shop/index.jsx";


export const App = () => (
  <Router>
    <div className="App">
      <Navbar />
      <div className="page-container">
        <Switch>
          <Route exact path="/home" component={withTracker(Home,
            {
              tcReloadOnly: [
                { ids: '4056', idc: '12' }
              ]
            })} />
          <Route exact path="/shop" component={withTracker(Shop,
            {
              tcReloadOnly: [
                { ids: '4056', idc: '12' },
                { ids: '4056', idc: '11', options: ["datastorage", "deduplication"] }
              ]
            })} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="" component={withTracker(Home,
            {
              tcReloadOnly: [
                { ids: '4056', idc: '12' }
              ]
            })} />
        </Switch>
      </div>
    </div>
  </Router>
);

