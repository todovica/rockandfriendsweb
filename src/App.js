import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import logo from './logo.png';
import TermsOfService from './TermsOfService';
import PrivacyPolicy from './PrivacyPolicy';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <Link className="App-link" to="/TermsOfService">Terms of service</Link>
        <Link className="App-link" to="/privacypolicy">Privacy policy</Link>
        
      </header>
      <Switch>
          <Route path="/TermsOfService">
            <TermsOfService />
          </Route>
          <Route path="/PrivacyPolicy">
            <PrivacyPolicy />
          </Route>
          <Route path="/">
            <TermsOfService />
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
