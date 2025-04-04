import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_API_URL + "/auth/check", {
          method: "GET",
          credentials: "include", // Include HTTP-only cookies
        });

        const data = await response.json();
        setIsAuthenticated(data.authenticated);
        
        if (!data.authenticated) {
          navigate('/login', { replace: true });
        }
      } catch (error) {
        console.error("Error verifying authentication:", error);
        setIsAuthenticated(false);
        navigate('/login', { replace: true });
      }
    };

    checkAuth();
  }, [navigate]);

  if (isAuthenticated === null) {
    // Show a loading spinner or placeholder while the check is in progress
    return <div>Loading...</div>;
  }

  return isAuthenticated ? children : null;
};

export default ProtectedRoute;