import React, { useState, useContext, useEffect } from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';
import { withRouter } from 'react-router-dom';

const Login = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { login, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/dashboard');
    }
    if (error === 'Invalid Credentials') {
      setAlert(error, 'danger');
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const { email, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      setAlert('Please fill in all fields', 'danger');
    } else {
      login({
        email,
        password,
      });
    }
  };

  return (
    <div className='row'>
      <h1>Account Login</h1>
      <form onSubmit={onSubmit}>
        <div className='input-field'>
          <input
            className='validate'
            id='email'
            type='email'
            name='email'
            value={email}
            onChange={onChange}
            required
          />
          <label htmlFor='email'>Email Address</label>
        </div>
        <div className='input-field'>
          <input
            className='validate'
            id='password'
            type='password'
            name='password'
            value={password}
            onChange={onChange}
            required
            minLength='6'
          />
          <label htmlFor='password'>Password</label>
        </div>
        <button
          type='submit'
          value='Login'
          className={
            isAuthenticated ? 'modal-close waves-effect' : 'waves-effect'
          }
        >
          Login
          <i className='material-icons right'>send</i>
        </button>
      </form>
    </div>
  );
};

export default withRouter(Login);
