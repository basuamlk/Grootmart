import React, { Fragment, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Alerts from './Alert';
import AlertState from '../../context/alert/AlertState';
import Register from '../auth/Register';
import AuthContext from '../../context/auth/authContext';
import Login from '../auth/Login';
import {
  AppBar,
  Modal,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
  Button,
} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import useStyles from './navStyles';
import logo from '../../assets/groot.png';

const Navbar = ({ icon, title }) => {
  const classes = useStyles();
  const authContext = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const [regBtnPress, setRegBtnPress] = useState(false);

  const { isAuthenticated, logout, user } = authContext;

  const onLogout = () => {
    logout();
  };

  // Open or Close Modal

  const handleClose = () => {
    setOpen(false);
  };

  const handleLoginOpen = () => {
    setOpen(true);
    setRegBtnPress(false);
  };

  const handleRegisterOpen = () => {
    setOpen(true);
    setRegBtnPress(true);
  };

  //Hide or Show logout
  const authLinks = (
    <ul className='authLinks'>
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
      <ul className='guestLinks'>
        <li>
          <Button color='inherit' onClick={handleRegisterOpen}>
            Sign Up
          </Button>
        </li>
        <li>
          <Button color='inherit' onClick={handleLoginOpen}>
            Login
          </Button>
        </li>
      </ul>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='account-modal'
        aria-describedby='account-modal-description'
      >
        <AlertState>
          <Alerts />
          {regBtnPress ? <Register /> : <Login />}
        </AlertState>
      </Modal>
    </Fragment>
  );

  return (
    <AppBar position='fixed' className={classes.appbar} color='inherit'>
      <Toolbar>
        <Typography varient='h6' className={classes.title} color='inherit'>
          <img src={logo} alt={title} height='25px' className={classes.image} />
          {title}
        </Typography>
        <div className={classes.grow} />
        <div className={classes.button}>
          {isAuthenticated ? authLinks : guestLinks}
        </div>
      </Toolbar>
    </AppBar>
  );
};
{
  /* <Link to='/'>
            <i className={icon}></i>
            {title}
          </Link> */
}
// <Fragment>
//   <nav style={{ marginBottom: '30px' }} className='green'>
//     <div className='nav-wrapper'>
//       <Link to='/'>
//         <i className={icon}></i>
//         {title}
//       </Link>
//       {isAuthenticated ? authLinks : guestLinks}
//     </div>
//   </nav>

//   <ul className='sidenav' id='mobile-demo'>
//     <li>
//       <a href='#'>Sign Up</a>
//     </li>
//     <li>
//       <a href='#'>Login</a>
//     </li>
//   </ul>

//   <div id='modal1' className='modal'>
//     <div className='modal-content'>
//       <AlertState>
//         <Alerts />
//         <Register />
//       </AlertState>
//     </div>
//     <div className='modal-footer' />
//   </div>

//   <div id='modal2' className='modal'>
//     <div className='modal-content'>
//       <AlertState>
//         <Alerts />
//         <Login />
//       </AlertState>
//     </div>
//     <div className='modal-footer' />
//   </div>
// </Fragment>;

Navbar.defaultProps = {
  title: 'Grootmart',
  icon: 'brand-logo',
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
