import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function SignUp() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };

      const [isAuthenticated, setIsAuthenticated] = useState(null);

      async function sendDataToBackend() {
        try {
          const response = await fetch(import.meta.env.VITE_API_URL+"/signup", {
            method: "POST", // Specify the HTTP method
            headers: {
              "Content-Type": "application/json", // Set the content type to JSON
            },
            body: JSON.stringify(formData), // Convert the data to a JSON string
            credentials: "include", // ✅ Include credentials to send and receive cookies
          });
    
          console.log(response);
          // credentials: "include" ensures that:
          // ✅ The browser sends cookies (e.g., accessToken) with the request.
          // ✅ The browser accepts cookies sent from the server.
          
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
    
          window.location.href = `${window.location.origin}/tool`
          
        } catch (error) {
          console.error('Error fetching data:', error);
          // window.location.href = "http://localhost:5173/signup";
        }
      }
      
      useEffect(() => {
        const checkAuth = async () => {
          try {
            const response = await fetch(import.meta.env.VITE_API_URL+"/auth/check", {
              method: "GET",
              credentials: "include", // Include HTTP-only cookies
            });
    
              const data = await response.json();
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
          {isAuthenticated ? window.location.href=import.meta.env.VITE_API_URL : 
                    <div className="min-h-screen flex items-center justify-center bg-gray-100">
                    <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
                      <h1 className="text-2xl font-bold text-center mb-6">Sign Up</h1>
                      <form onSubmit={(e)=>{e.preventDefault();sendDataToBackend();}} className="space-y-6">
                        {/* Name Field */}
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            required
                          />
                        </div>
              
                        {/* Email Field */}
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
                            placeholder="Enter your email"
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
                            Sign Up
                          </button>
                          <br /><br />
                          <div className='text-center'>Already have an account?<Link to="/login" className='text-red'> <u>Log In</u></Link></div>
                        </div>
                      </form>
                    </div>
                  </div>
           } 
        </>
      );
}

export default SignUp;