import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import LandingPage from './LandingPage';
import { AuthProvider } from './contexts/AuthContext';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route exact path="/" component={LandingPage} />
        </Switch>
      </AuthProvider>
    </Router>
  );
};

export default App;
