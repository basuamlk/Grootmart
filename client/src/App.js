import React, { useEffect, Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import AuthState from './context/auth/AuthState';
import Footer from './components/layout/Footer';

const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });
  return (
    <AuthState>
      <Router>
        <Navbar />
        <Footer />
      </Router>
    </AuthState>
  );
};

export default App;
