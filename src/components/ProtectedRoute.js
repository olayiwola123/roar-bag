import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const { token } = useAuthContext();
  
  return token ? <Component {...rest} /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
