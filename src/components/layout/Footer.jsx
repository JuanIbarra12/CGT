import React from 'react';
import { Mail, Phone, ExternalLink } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Latinx Testing Solutions</h3>
            <p className="text-gray-400">
              Improving cognitive assessments for Latinx populations through research-based resources.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className='text-gray-400 hover:text-white'>About</Link></li>
              <li><Link to="/tool" className='text-gray-400 hover:text-white'>Clinical Guide Tool</Link></li>
              <li><Link to="/" className='text-gray-400 hover:text-white'>Recommendations</Link></li>
              <li><Link to="/resources" className='text-gray-400 hover:text-white'>Resources</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <span className="text-gray-400">abc@contact.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span className="text-gray-400">123-456</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Partners</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://www.apa.org" className="text-gray-400 hover:text-white flex items-center">
                  APA <ExternalLink className="h-4 w-4 ml-1" />
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white flex items-center">
                  Latinx Neuropsychological Association <ExternalLink className="h-4 w-4 ml-1" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Latinx Testing Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}