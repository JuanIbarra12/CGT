import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function Login () {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
            password: Yup.string()
                .min(6, 'Password must be at least 6 characters')
                .required('Required'),
        }),
        onSubmit: async (values) => {
            try {
                const response = await fetch(import.meta.env.VITE_API_URL+'/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(values),
                    credentials: "include", // Include cookies
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                console.log(data);
                if (data.authenticated) {
                    navigate('/tool', { replace: true });
                } else {
                    throw new Error('Authentication failed');
                }
                
            } catch (error) {
                console.error('Error sending data:', error);
                alert('Failed to login. Please check your credentials.');
            }
        },
    });
    
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <Helmet>
                <title>Login</title>
                <meta name="description" content="Learn more about us" />
            </Helmet>
            <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
                <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
                <form onSubmit={formik.handleSubmit} className="space-y-6">
                    {/* Username Field */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            {...formik.getFieldProps('email')}
                            placeholder="Enter your email"
                            className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <div className="text-red-500 text-sm">{formik.errors.email}</div>
                        ) : null}
                    </div>

                    {/* Password Field */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                id="password"
                                {...formik.getFieldProps('password')}
                                placeholder="Enter your password"
                                className="mt-1 block w-full p-2 pr-10 border rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-2 flex items-center text-sm text-gray-600"
                            >
                                {showPassword ? 'Hide' : 'Show'}
                            </button>
                        </div>
                        {formik.touched.password && formik.errors.password ? (
                            <div className="text-red-500 text-sm">{formik.errors.password}</div>
                        ) : null}
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
                        <div className='text-center'>
                            Don't have an account?
                            <Link to="/signup" className='text-red'> <u>Sign Up</u></Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}