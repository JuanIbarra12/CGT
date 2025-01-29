import React, { useState } from 'react';
import {  Menu, X } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

export default function Navbar({authenticated}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <span className="text-xl font-bold text-indigo-600">Latinx Testing Solutions</span>
          </div>
          {/* md = min-width: 768px */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/">Home</Link>
            <Link to="/tool">Clinician Guide Tool</Link>
            <a href="/#resources" className="text-gray-700 hover:text-indigo-600 transition-colors">Recommendations</a>
            <a href="/resources" className="text-gray-700 hover:text-indigo-600 transition-colors">Resources</a>
            
            <div className="flex items-center space-x-4 ml-4">
              {(authenticated) ? (
              <>
              {/* <a 
                href="/signout" 
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium transition-colors"
              >
                Sign Out
              </a> */}
              </>
              ) : (
                <>
                {/* <a 
                href="/login" 
                className="px-4 py-2 text-indigo-600 hover:text-indigo-700 font-medium transition-colors"
              >
                Log in
              </a>
              <a 
                href="/signup" 
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium transition-colors"
              >
                Sign up
              </a>               */}
                </> 
              )}
            </div>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="p-2 rounded-md hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6 text-gray-600" />
              ) : (
                <Menu className="h-6 w-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`
          md:hidden 
          fixed 
          inset-x-0 
          bg-white 
          shadow-lg 
          transition-all 
          duration-300 
          ease-in-out 
          ${isOpen ? 'top-16 opacity-100' : '-top-96 opacity-0'}
        `}
      >
        <div className="px-4 pt-2 pb-3 space-y-1">
          <Link to="/" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50">Home</Link>
          <Link to="/tool" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50">Clinician Guide Tool</Link>
          {/* Auth buttons for mobile */}
          <div className="mt-4 space-y-2 px-3">
            {(authenticated) ? 
            (
              <>
                      <a
                      href="/signout"
                      className="block w-full px-4 py-2 text-center text-indigo-600 hover:text-indigo-700 font-medium border border-indigo-600 rounded-lg transition-colors"
                      onClick={toggleMenu}
                      >
                        Sign Out
                      </a>
              </>
            ) :
            (
              <>
                  <a
                  href="/login"
                  className="block w-full px-4 py-2 text-center text-indigo-600 hover:text-indigo-700 font-medium border border-indigo-600 rounded-lg transition-colors"
                  onClick={toggleMenu}
                >
                  Log in
                </a>
                <a
                  href="/signup"
                  className="block w-full px-4 py-2 text-center text-white bg-indigo-600 hover:bg-indigo-700 font-medium rounded-lg transition-colors"
                  onClick={toggleMenu}
                >
                  Sign up
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}