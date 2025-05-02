import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function Modal({ message, onClose }) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-md max-w-sm w-full">
                <h2 className="text-xl font-bold mb-4">Error</h2>
                <p className="mb-4">{message}</p>
                <button
                    onClick={onClose}
                    className="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                    Close
                </button>
            </div>
        </div>
    );
}

function SignUp() {
    const [errorMessage, setErrorMessage] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .min(2, 'Name must be at least 2 characters')
                .required('Required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
            password: Yup.string()
                .min(6, 'Password must be at least 6 characters')
                .required('Required'),
        }),
        onSubmit: async (values) => {
            try {
                const response = await fetch(import.meta.env.VITE_API_URL + "/signup", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(values),
                    credentials: "include",
                });

                console.log('Response status:', response.status);

                if (!response.ok) {
                    const errorData = await response.json();
                    console.log('Error data:', errorData);
                    setErrorMessage(errorData.error || 'An unexpected error occurred. Please try again later.');
                    setShowModal(true);
                } else {
                    window.location.href = `${window.location.origin}/tool`;
                }
            } catch (error) {
                console.error('Network error:', error);
                setErrorMessage('Network error. Please check your connection and try again.');
                setShowModal(true);
            }
        },
    });

    const [isAuthenticated, setIsAuthenticated] = useState(null);

    async function sendDataToBackend() {
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
    }

    useEffect(() => {
        sendDataToBackend();
    }, []);

    return (
        <>
            {isAuthenticated ? window.location.href = window.location.origin+"/tool" : 
                <div className="min-h-screen flex items-center justify-center bg-gray-100">
                    <Helmet>
                        <title>Sign Up</title>
                        <meta name="description" content="Learn more about us" />
                    </Helmet>
                    <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
                        <h1 className="text-2xl font-bold text-center mb-6">Sign Up</h1>
                        <form onSubmit={formik.handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    {...formik.getFieldProps('name')}
                                    placeholder="Enter your name"
                                    className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                />
                                {formik.touched.name && formik.errors.name ? (
                                    <div className="text-red-500 text-sm">{formik.errors.name}</div>
                                ) : null}
                            </div>

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

                            {/* <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    {...formik.getFieldProps('password')}
                                    placeholder="Enter your password"
                                    className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                />
                                {formik.touched.password && formik.errors.password ? (
                                    <div className="text-red-500 text-sm">{formik.errors.password}</div>
                                ) : null}
                            </div> */}

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
            {showModal && <Modal message={errorMessage} onClose={() => setShowModal(false)} />}
        </>
    );
}

export default SignUp;