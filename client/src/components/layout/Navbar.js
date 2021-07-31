import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Alerts from './Alert';
import AlertState from '../../context/alert/AlertState';
import Register from '../auth/Register';
import AuthContext from '../../context/auth/authContext';
import Login from '../auth/Login';

const Navbar = ({ icon, title }) => {
  const authContext = useContext(AuthContext);

  const { isAuthenticated, logout, user } = authContext;

  const onLogout = () => {
    logout();
  };
  //Hide or Show logout
  const authLinks = (
    <ul className='right hide-on-med-and-down'>
      <li>Hello, {user && user.name} </li>
      <li>
        <a onClick={onLogout}>
          <span className='hide-sm'>Logout</span>
          <i className='material-icons left'>eject</i>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <Fragment>
      <a href='#' data-target='mobile-demo' className='sidenav-trigger'>
        <i className='material-icons'>menu</i>
      </a>
      <ul className='right hide-on-med-and-down'>
        <li>
          <a href='#modal1' className='waves-effect modal-trigger'>
            Sign Up
          </a>
        </li>
        <li>
          <a href='#modal2' className='waves-effect modal-trigger'>
            Login
          </a>
        </li>
      </ul>
    </Fragment>
  );

  return (
    <Fragment>
      <nav style={{ marginBottom: '30px' }} className='green'>
        <div className='nav-wrapper'>
          <Link to='/'>
            <i className={icon}></i>
            {title}
          </Link>
          {isAuthenticated ? authLinks : guestLinks}
        </div>
      </nav>

      <ul className='sidenav' id='mobile-demo'>
        <li>
          <a href='#'>Sign Up</a>
        </li>
        <li>
          <a href='#'>Login</a>
        </li>
      </ul>

      <div id='modal1' className='modal'>
        <div className='modal-content'>
          <AlertState>
            <Alerts />
            <Register />
          </AlertState>
        </div>
        <div className='modal-footer' />
      </div>

      <div id='modal2' className='modal'>
        <div className='modal-content'>
          <AlertState>
            <Alerts />
            <Login />
          </AlertState>
        </div>
        <div className='modal-footer' />
      </div>
    </Fragment>
  );
};

Navbar.defaultProps = {
  title: 'Grootmart',
  icon: 'brand-logo',
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
