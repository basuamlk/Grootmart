import React, { useState, useContext, useEffect } from 'react';
// import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';

const Register = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { register, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }

    if (error === 'User already exists') {
      setAlert(error, 'danger');
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = user;

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    // console.log('changed')
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log('Register Submit');
    if (name === '' || email === '' || password === '') {
      setAlert('Please enter all fields', 'danger');
    } else if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({
        name,
        email,
        password,
      });
    }
  };

  return (
    <div className='row'>
      <h1>
        Account <span className='text-primary'>Register</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className='input-field'>
          <input
            className='validate'
            id='name'
            type='text'
            name='name'
            value={name}
            onChange={onChange}
            required
          />
          <label htmlFor='name'>Name</label>
        </div>
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
        <div className='input-field'>
          <input
            className='validate'
            id='password2'
            type='password'
            name='password2'
            value={password2}
            onChange={onChange}
            required
            minLength='6'
          />
          <label htmlFor='password2'>Confirm Password</label>
        </div>
        <input
          type='submit'
          value='Register'
          className='btn btn-primary btn-block'
        />
      </form>
    </div>
  );
};

export default Register;
