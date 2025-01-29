import React from 'react'
import { useState } from 'react';

export default function Tool() {
    const [formData, setFormData] = useState({
        isSpanishFluent: '',
        clientLanguageStatus: '',
        clientEthnicity: '',
        educationLanguage: '',
        hasInterpreter: '',
      });
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
      };
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
          ...prev,
          [name]: value,
        }));
      };

      return (
        <>
            <br /><br /><br />
            <div className="content max-w-3xl mx-auto px-4 py-8">
                <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Clinician Assessment Guide</h2>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                        Spanish Fluency 
                        <div className="space-y-4">
                            <label className="block text-lg font-medium text-gray-900">
                            1. Is the clinician fluent in Spanish?
                            </label>
                            <div className="space-x-6">
                            <label className="inline-flex items-center">
                                <input
                                type="radio"
                                name="isSpanishFluent"
                                value="yes"
                                onChange={handleChange}
                                className="form-radio h-4 w-4 text-indigo-600"
                                />
                                <span className="ml-2">Yes</span>
                            </label>
                            <label className="inline-flex items-center">
                                <input
                                type="radio"
                                name="isSpanishFluent"
                                value="no"
                                onChange={handleChange}
                                className="form-radio h-4 w-4 text-indigo-600"
                                />
                                <span className="ml-2">No</span>
                            </label>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <label className="block text-lg font-medium text-gray-900">
                            2. Client Information
                            </label>
                            <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                Language Status
                                </label>
                                <select
                                name="clientLanguageStatus"
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                >
                                <option value="">Select status</option>
                                <option value="monolingual">Monolingual</option>
                                <option value="bilingual">Bilingual</option>
                                </select>
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                Ethnicity
                                </label>
                                <input
                                type="text"
                                name="clientEthnicity"
                                onChange={handleChange}
                                placeholder="Enter client's ethnicity"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                />
                            </div>
                            </div>

                            <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Language of Educational Instruction
                            </label>
                            <select
                                name="educationLanguage"
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            >
                                <option value="">Select language</option>
                                <option value="native">Native Language</option>
                                <option value="english">English</option>
                                <option value="both">Both</option>
                            </select>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <label className="block text-lg font-medium text-gray-900">
                            3. Is there an interpreter available?
                            </label>
                            <div className="space-x-6">
                            <label className="inline-flex items-center">
                                <input
                                type="radio"
                                name="hasInterpreter"
                                value="yes"
                                onChange={handleChange}
                                className="form-radio h-4 w-4 text-indigo-600"
                                />
                                <span className="ml-2">Yes</span>
                            </label>
                            <label className="inline-flex items-center">
                                <input
                                type="radio"
                                name="hasInterpreter"
                                value="no"
                                onChange={handleChange}
                                className="form-radio h-4 w-4 text-indigo-600"
                                />
                                <span className="ml-2">No</span>
                            </label>
                            </div>
                        </div>

                        <div className="pt-4">
                            <button
                            type="submit"
                            className="w-full md:w-auto px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                            >
                            Generate Recommendations
                            </button>
                        </div>
                    </form>
                </div>
            </div> 
       </>

);
}