import React from 'react'
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

export default function Login () {
    const [formData, setFormData] = useState({
        name: '',
        password: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      // const handleSubmit = (e) => {
      //   e.preventDefault();
      //   // Replace this with backend authentication logic
      //   console.log('Login data submitted:', formData);
      //   alert('Login successful!');
      // };

      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
            credentials: "include", // Include cookies
          });
    
          const result = await response.json();
          console.log(result); // { message: 'Data received successfully' }
          alert(result.message);
        } catch (error) {
          console.error('Error sending data:', error);
          alert('Failed to send data');
        }
      };
    
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
            <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Username Field */}
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                  Username
                </label>
                <input
                  type="text"
                  name="name"
                  id="username"
                  value={formData.username}
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
      );
}