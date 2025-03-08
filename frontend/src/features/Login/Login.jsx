import React from 'react'
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function Login () {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
      });
      const [isAuthenticated, setIsAuthenticated] = useState(null);

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };

      const handleSubmit = async (e) => {
        // e.preventDefault();
    
        try {
          const response = await fetch(import.meta.env.VITE_API_URL+'/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
            credentials: "include", // Include cookies
          });
              
          window.location.href = window.location.origin+"/tool"          
        } catch (error) {
          console.error('Error sending data:', error);
          alert('Failed to send data');
        }
      };

      useEffect(() => {
        const checkAuth = async () => {
          try {
            const response = await fetch(import.meta.env.VITE_API_URL+"/auth/check", {
              method: "GET",
              credentials: "include", // Include HTTP-only cookies
            });
    
              const data = await response.json();
              console.log(data)
              setIsAuthenticated(data.authenticated);
            
    
          } catch (error) {
            console.error("Error verifying authentication:", error);
            setIsAuthenticated(false);
          }
        };
    
        checkAuth();
      }, []);
    
      return (
        <>
        {isAuthenticated?window.location.href = window.location.origin+"/tool":
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <Helmet>
            <title>Login</title>
            <meta name="description" content="Learn more about us" />
          </Helmet>
          <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
            <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
            <form onSubmit={(e)=>{e.preventDefault();handleSubmit();}} className="space-y-6">
              {/* Username Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your username"
                  className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                />
              </div>
    
              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                />
              </div>
    
              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  Login
                </button>
                <br /><br />
                <div className='text-center'>Don't have an account?<Link to="/signup" className='text-red'> <u>Sign Up</u></Link></div>
              </div>
            </form>
          </div>
        </div>
        }
        </>
      );
}