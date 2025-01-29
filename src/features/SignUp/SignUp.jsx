import React, { useState } from 'react';
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
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        // Basic validation
        if (!formData.name || !formData.email || !formData.password) {
          alert('All fields are required!');
          return;
        }
    
        // Replace this with your backend API integration
        console.log('Signup data submitted:', formData);
        alert('Signup successful!');
      };
    
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
            <h1 className="text-2xl font-bold text-center mb-6">Sign Up</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
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
  );
}

export default SignUp;