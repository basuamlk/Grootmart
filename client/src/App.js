import React, { useEffect, Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import setAuthToken from './utils/setAuthToken';
import AuthState from './context/auth/AuthState';
import ProductState from './context/product/ProductState';
import Footer from './components/layout/Footer';
import Dashboard from './components/pages/Dashboard';
import PrivateRoute from './components/routing/PrivateRoute';
import AlertState from './context/alert/AlertState';
import Alerts from './components/layout/Alert';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });
  return (
    <AuthState>
      <ProductState>
        <Router>
          <Fragment>
            <Navbar />
            <Switch>
              <PrivateRoute exact path='/dashboard' component={Dashboard} />
            </Switch>
            <Footer />
          </Fragment>
        </Router>
      </ProductState>
    </AuthState>
  );
};

export default App;
