// components/Auth/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, role }) => {
  const userRole = localStorage.getItem('role')?.toLowerCase();

  if (!userRole) return <Navigate to="/login" />;

  if (role && userRole !== role.toLowerCase()) return <Navigate to="/unauthorized" />;

  return children;
};


export default ProtectedRoute;
