import React from 'react';
import { useLocation } from 'react-router-dom';

const Dashboard = () => {
  const location = useLocation();
  
  return (
    <div>
      <h1>Hello {location.state?.id} and welcome to the account</h1>
    </div>
  );
}

export default Dashboard;