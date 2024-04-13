import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/homepage/homepage';
import Portfolio from './pages/portfolio/portfolio';
import AppProject from './pages/appproject/appproject';
import WebProject from './pages/webproject/webproject';
import App1 from './pages/appproject/app1/app1'
import App2 from './pages/appproject/app2/app2'
import App3 from './pages/appproject/app3/app3'
import Web1 from './pages/webproject/web1/web1'
import Web2 from './pages/webproject/web2/web2'
import Web3 from './pages/webproject/web3/web3'

import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/appproject" element={<AppProject />} />
          <Route path="/webproject" element={<WebProject />} />
          <Route path="/app1" element={<App1 />} />
          <Route path="/app2" element={<App2 />} />
          <Route path="/app3" element={<App3 />} />
          <Route path="/web1" element={<Web1 />} />
          <Route path="/web2" element={<Web2 />} />
          <Route path="/web3" element={<Web3 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;