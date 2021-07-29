import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ icon, title }) => {
  return (
    <Fragment>
      <nav style={{ marginBottom: '30px' }} className='green'>
        <div className='nav-wrapper'>
          <Link to='/'>
            <i className={icon}></i>
            {title}
          </Link>
          <a href='#' data-target='mobile-demo' className='sidenav-trigger'>
            <i className='material-icons'>menu</i>
          </a>
          <ul className='right hide-on-med-and-down'>
            <li>
              <a href='modal1' className='modal-close'>
                Sign Up
              </a>
            </li>
            <li>
              <a href='#'>Login</a>
            </li>
            <li>
              <a href='#'>Home</a>
            </li>
            <li>
              <a href='#'>About</a>
            </li>
          </ul>
        </div>
      </nav>

      <ul className='sidenav' id='mobile-demo'>
        <li>
          <a href='#'>Sign Up</a>
        </li>
        <li>
          <a href='#'>Login</a>
        </li>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#'>About</a>
        </li>
      </ul>
    </Fragment>
  );
};

Navbar.defaultProps = {
  title: 'Github Finder',
  icon: 'brand-logo',
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
