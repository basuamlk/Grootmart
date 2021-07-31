import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';

const Dashboard = () => {
  const authContext = useContext(AuthContext);

  const { user } = authContext;

  useEffect(() => {
    authContext.loadUser();
    //esline-disable-next-line
  }, []);

  return <div>This is the dashboard</div>;
};

export default Dashboard;
