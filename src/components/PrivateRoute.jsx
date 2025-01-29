
// frontend/src/components/PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = ({ children }) => {
    const { token } = useAuth();
    console.log(token)
    return token ? children : <Navigate to="/" />;
};

export default PrivateRoute;