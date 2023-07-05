import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TC_Wrapper from 'react-tag-commander';

// Components
import Navbar from "./components/layout/navbar/Navbar";
import Dashboard from "./components/dashboard/index.js";
import Home from "./components/home/index.js";
import Shop from "./components/shop/index.js";

const wrapper = TC_Wrapper.getInstance();
wrapper.setDebug(true);

// setting the tags for the current and prevous URL

// to set the TagCommander container provide the id
wrapper.addContainer('container_head', '/tag-commander-head.js', 'head');
wrapper.addContainer('container_body', '/tag-commander-body.js', 'body');
wrapper.removeContainer('container_body')

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/shop" element={<Shop />} />
              <Route exact path="/dashboard" element={<Dashboard />} />
              <Route exact path="" element={<Home />} />
            </Routes>
          </div>
      </div>
    </Router>
  );
}

export default App;
