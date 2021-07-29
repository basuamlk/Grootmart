import React, { useEffect, Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import AuthState from './context/auth/AuthState';
import Register from './components/auth/Register';

const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });
  return (
    <AuthState>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/register' component={Register} />
        </Switch>
      </Router>
    </AuthState>
  );
};

export default App;
