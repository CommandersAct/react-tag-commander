import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TC_Wrapper from 'react-tag-commander';
import { useEffect, useState } from "react";
import Navbar from "./components/layout/navbar/Navbar";
import Dashboard from "./components/dashboard/index.jsx";
import Home from "./components/home/index.jsx";
import Shop from "./components/shop/index.jsx";

function App() {

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const wrapper = TC_Wrapper.getInstance();
    wrapper.setDebug(true);

    Promise.all([
      wrapper.addContainer('container_head', '/tag-commander-head.js', 'head'),
      wrapper.addContainer('container_body', '/tag-commander-body.js', 'body'),
    ]).then(() => {
      setIsReady(true);
    });
  }, []);


  return (
    <Router>
      <div className="App">
        <Navbar />
        { isReady ?
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/shop" element={<Shop />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="" element={<Home />} />
          </Routes>
        </div> : <div className="container"><h1>Loading...</h1></div> }
      </div>
    </Router>
  );
}

export default App;
