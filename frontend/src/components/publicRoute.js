import { useAuthContext } from 'context/authContext';
import React from 'react';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ children }) => {
  const { isAuthenticated } = useAuthContext();

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
};
