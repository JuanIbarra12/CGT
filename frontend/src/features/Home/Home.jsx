import React, { useState, useEffect } from 'react';
import { ArrowRight, Brain, Users, BookOpen, BarChart, ExternalLink } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
function Home() {
  return (
    <>
        <main className='content'>
        {/* Hero Section */}
        <section id="home" className="pt-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Improving Cognitive Assessments for Latinx Populations
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Providing research-based resources to help psychologists administer culturally and linguistically competent cognitive assessments for monolingual Spanish speakers and bilingual Latinx clients.
              </p>
              <div className="flex justify-center gap-4">
                <a href="#about" className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition flex items-center">
                  Learn More <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a href="#resources" className="bg-white text-indigo-600 border-2 border-indigo-600 px-8 py-3 rounded-lg hover:bg-indigo-50 transition">
                  Explore Resources
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section id="about" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Why This Resource Matters</h2>
                <p className="text-gray-600 mb-6">
                  Latinx populations are growing rapidly, now totaling 62.1 million in the U.S., but barriers such as language, cultural differences, and lack of culturally competent psychologists lead to poorer mental health care and misdiagnoses.
                </p>
                <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
                  <p className="text-red-700 font-semibold">Only 5.5% of psychologists can provide services in Spanish, leaving a vast population underserved.</p>
                </div>
                <a href="#" className="text-indigo-600 hover:text-indigo-700 font-medium flex items-center">
                  Read the Full Research <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <Brain className="h-12 w-12 text-indigo-600 mb-4" />
                  <h3 className="font-semibold mb-2">Cognitive Testing</h3>
                  <p className="text-gray-600">Specialized assessment tools for diverse populations</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <Users className="h-12 w-12 text-indigo-600 mb-4" />
                  <h3 className="font-semibold mb-2">Cultural Competency</h3>
                  <p className="text-gray-600">Understanding cultural nuances in assessment</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <BookOpen className="h-12 w-12 text-indigo-600 mb-4" />
                  <h3 className="font-semibold mb-2">Resources</h3>
                  <p className="text-gray-600">Comprehensive guides and materials</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <BarChart className="h-12 w-12 text-indigo-600 mb-4" />
                  <h3 className="font-semibold mb-2">Research Data</h3>
                  <p className="text-gray-600">Evidence-based methodologies</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section id="resources" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Tools for Practitioners</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Assessment Guide" 
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <h3 className="text-xl font-semibold mb-4">Clinical Guide Tool</h3>
                <p className="text-gray-600 mb-4">Step-by-step guidance for conducting culturally competent assessments.</p>
                <a href="#" className="text-indigo-600 hover:text-indigo-700 font-medium">Learn More →</a>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Testing Tools" 
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <h3 className="text-xl font-semibold mb-4">Testing Recommendations</h3>
                <p className="text-gray-600 mb-4">Curated selection of appropriate assessment tools and methods.</p>
                <a href="#" className="text-indigo-600 hover:text-indigo-700 font-medium">Explore Tools →</a>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Research Data" 
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <h3 className="text-xl font-semibold mb-4">Resource Database</h3>
                <p className="text-gray-600 mb-4">Access to latest research and evidence-based practices.</p>
                <a href="#" className="text-indigo-600 hover:text-indigo-700 font-medium">Access Research →</a>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section id="impact" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Making a Difference</h2>
              <p className="text-xl text-gray-600">
                "Culturally competent care starts with understanding the unique needs of your clients."
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-indigo-600 mb-2">62.1M</div>
                <p className="text-gray-600">Latinx Population in the U.S.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-indigo-600 mb-2">5.5%</div>
                <p className="text-gray-600">Spanish-Speaking Psychologists</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-indigo-600 mb-2">1000+</div>
                <p className="text-gray-600">Resources Available</p>
              </div>
            </div>
          </div>
        </section> 

        </main>
    </>
  );
}

export default Home;
