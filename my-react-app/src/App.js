// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import LandingPage from './pages/LandingPage';
import { AuthProvider } from './contexts/AuthContext';

const App = () => {
  return (
    <Router basename="/stevielbaby.github.io">
      <AuthProvider>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </AuthProvider>
    </Router>
  );
};

export default App;
