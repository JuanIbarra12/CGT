import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_API_URL + "/auth/check", {
          method: "GET",
          credentials: "include", // Include HTTP-only cookies
        });

        // if (response.ok) {
          const data = await response.json();
          setIsAuthenticated(data.authenticated);
        // } else {
        //   setIsAuthenticated(false);
        // }
      } catch (error) {
        console.error("Error verifying authentication:", error);
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, []);

  if (isAuthenticated === null) {
    // Show a loading spinner or placeholder while the check is in progress
    return <div>Loading...</div>;
  }

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;