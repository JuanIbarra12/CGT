import React from 'react'
import { useState } from 'react';
import { Helmet } from 'react-helmet';

export default function Tool() {
    const [formData, setFormData] = useState({
        clinicianAssessing: '',
        areaOfUse: '',
        providedCondition: '',
        languageStatus: false,
        clientLanguageStatus: '',
        languageOfTest: '',
        ethnicity: '',
        educationalLanguage: '',
        certifiedInterpreter: '',
      });
    
      const handleSubmit = async (e) => {
        try{e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);

        const auth = await fetch(import.meta.env.VITE_API_URL + "/auth/check", {
            method: "GET",
            credentials: "include", // Include HTTP-only cookies
          });

        const authRes = await auth.json();

        const res = await fetch(import.meta.env.VITE_API_URL+'/tool', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ clinician: authRes.email, ...formData }),
            credentials: 'include'
          });

         const data = await res.json();
         console.log('Success:', data);

         window.location.href = window.location.origin + "/recommendations"
        }catch(error){
              console.error('Error:', error);
        };
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
                <Helmet>
                    <title>Tool</title>
                    <meta name="description" content="Learn more about us" />
                </Helmet>
                <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Clinical Guide Tool</h2>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-4">
                            <label className="block text-lg font-medium text-gray-900">
                            1. What is the clinician assessing?
                            </label>
                            <select
                                name="clinicianAssessing"
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                required
                                >
                                <option value="">Enter assessment focus</option>
                                <option value="Clinical & Medical Uses">Clinical & Medical Uses</option>
                                <option value="Educational & Developmental Uses">Educational & Developmental Uses</option>
                                <option value="Workplace & Occupational Assessments">Workplace & Occupational Assessments</option>
                                <option value="Legal & Forensic Uses">Legal & Forensic Uses</option>
                                <option value="Research & Experimental Uses">Research & Experimental Uses</option>
                            </select>
                        </div> 

                        <div className="space-y-4">
                            <label className="block text-lg font-medium text-gray-900">
                            2. Select area of use:
                            </label>
                            <select
                                name="areaOfUse"
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                required
                                >
                                    {formData.clinicianAssessing === "Clinical & Medical Uses" ? (
                                        <>
                                            <option value="">Choose an assessment area</option>
                                            <option value="Diagnosing Cognitive Disorders">Diagnosing Cognitive Disorders</option>
                                            <option value="Mental Health Assessments">Mental Health Assessments</option>
                                            <option value="Pre-Surgical Evaluations">Pre-Surgical Evaluations</option>
                                        </>
                                    ) : formData.clinicianAssessing === "Educational & Developmental Uses" ? (
                                        <>
                                            <option value="">Choose an assessment area</option>
                                            <option value="Diagnosing Learning Disabilities">Diagnosing Learning Disabilities</option>
                                            <option value="Intelligence & Giftedness Testing">Intelligence & Giftedness Testing</option>
                                            <option value="Autism Spectrum Disorder (ASD) Evaluations">Autism Spectrum Disorder (ASD) Evaluations</option>
                                        </>
                                    ) : formData.clinicianAssessing == "Workplace & Occupational Assessments" ? (
                                        <>
                                            <option value="">Choose an assessment area</option>
                                            <option value="Employment & Professional Assessments">Employment & Professional Assessments</option>
                                            <option value="Disability & Workers' Compensation Evaluations">Disability & Workers' Compensation Evaluations</option>
                                        </>
                                    ): formData.clinicianAssessing == "Legal & Forensic Uses" ? (
                                        <>
                                            <option value="">Choose an assessment area</option>
                                            <option value="Competency & Legal Responsibility Evaluations">Competency & Legal Responsibility Evaluations</option>
                                            <option value="Criminal & Civil Cases">Criminal & Civil Cases</option>
                                            <option value="Cognitive Testing in Immigration Cases">Cognitive Testing in Immigration Cases</option>
                                        </>
                                    ): formData.clinicianAssessing == "Research & Experimental Uses" ? (
                                        <>
                                            <option value="">Choose an assessment area</option>                
                                            <option value="Studying Cognitive Development & Aging">Studying Cognitive Development & Aging</option>
                                            <option value="Drug & Treatment Effectiveness">Drug & Treatment Effectiveness</option>
                                            <option value="Brain Injury & Rehabilitation Research">Brain Injury & Rehabilitation Research</option>
                                        </>
                                    ): (
                                        ""
                                    )}
                            </select>
                        </div> 

                        <div className="space-y-4">
                            <label className="block text-lg font-medium text-gray-900">
                            3. Provide condition:
                            </label>
                            <select
                                name="providedCondition"
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                required
                                >
                                    {formData.areaOfUse === "Diagnosing Cognitive Disorders" ? (
                                        <>
                                            <option value="">Provide condition</option>
                                            <option value="Dementia & Mild Cognitive Impairment (MCI)">Dementia & Mild Cognitive Impairment (MCI)</option>
                                            <option value="Traumatic Brain Injury (TBI)">Traumatic Brain Injury (TBI)</option>
                                            <option value="Stroke & Neurological Disorders">Stroke & Neurological Disorders</option>
                                        </>
                                    ) : formData.areaOfUse === "Mental Health Assessments" ? (
                                        <>
                                            <option value="">Provide condition</option>
                                            <option value="Schizophrenia & Psychotic Disorders">Schizophrenia & Psychotic Disorders</option>
                                            <option value="Depression">Depression</option>
                                            <option value="Anxiety Disorders">Anxiety Disorders</option>
                                            <option value="ADHD (Attention-Deficit/Hyperactivity Disorder)">ADHD (Attention-Deficit/Hyperactivity Disorder)</option>
                                        </>
                                    ) : formData.areaOfUse == "Pre-Surgical Evaluations" ? (
                                        <>
                                            <option value="">Provide condition</option>
                                            <option value="Before brain surgery">Before brain surgery</option>
                                        </>
                                    ): formData.areaOfUse == "Diagnosing Learning Disabilities" ? (
                                        <>
                                            <option value="">Provide condition</option>
                                            <option value="Dyslexia & Reading Disorders">Dyslexia & Reading Disorders</option>
                                            <option value="Math & Writing Disorders">Math & Writing Disorders</option>
                                        </>
                                    ): formData.areaOfUse == "Intelligence & Giftedness Testing" ? (
                                        <>
                                            <option value="">Provide condition</option>                
                                            <option value="IQ Tests">IQ Tests</option>
                                        </>
                                    ):
                                    formData.areaOfUse == "Autism Spectrum Disorder (ASD) Evaluations" ? (
                                        <>
                                            <option value="">Provide condition</option>
                                            <option value="Autism Spectrum Disorder (ASD) Evaluations">Autism Spectrum Disorder (ASD) Evaluations</option>
                                        </>
                                    ): formData.areaOfUse == "Employment & Professional Assessments" ? (
                                        <>
                                            <option value="">Provide condition</option>                
                                            <option value="Employment & Professional Assessments">Employment & Professional Assessments</option>
                                        </>
                                    ): formData.areaOfUse == "Disability & Workers' Compensation Evaluations" ? (
                                        <>
                                            <option value="">Provide condition</option>                
                                            <option value="Disability & Workers' Compensation Evaluations">Disability & Workers' Compensation Evaluations</option>
                                        </>
                                    ): formData.areaOfUse == "Competency & Legal Responsibility Evaluations" ? (
                                        <>
                                            <option value="">Provide condition</option>                
                                            <option value="Competency & Legal Responsibility Evaluations">Competency & Legal Responsibility Evaluations</option>
                                        </>
                                    ): formData.areaOfUse == "Criminal & Civil Cases" ? (
                                        <>
                                            <option value="">Provide condition</option>                
                                            <option value="Criminal & Civil Cases">Criminal & Civil Cases</option>
                                        </>
                                    ): formData.areaOfUse == "Cognitive Testing in Immigration Cases" ? (
                                        <>
                                            <option value="">Provide condition</option>                
                                            <option value="Cognitive Testing in Immigration Cases">Cognitive Testing in Immigration Cases</option>
                                        </>
                                    ): formData.areaOfUse == "Studying Cognitive Development & Aging" ? (
                                        <>
                                            <option value="">Provide condition</option>                
                                            <option value="Studying Cognitive Development & Aging">Studying Cognitive Development & Aging</option>
                                        </>
                                    ): formData.areaOfUse == "Drug & Treatment Effectiveness" ? (
                                        <>
                                            <option value="">Provide condition</option>                
                                            <option value="Drug & Treatment Effectiveness">Drug & Treatment Effectiveness</option>
                                        </>
                                    ): formData.areaOfUse == "Brain Injury & Rehabilitation Research" ? (
                                        <>
                                            <option value="">Provide condition</option>                
                                            <option value="Brain Injury & Rehabilitation Research">Brain Injury & Rehabilitation Research</option>
                                        </>
                                    ): (
                                        ""
                                    )}
                            </select>
                        </div> 

                        <div className="space-y-4">
                            <label className="block text-lg font-medium text-gray-900">
                            4. Is the clinician fluent in Spanish?
                            </label>
                            <div className="space-x-6">
                            <label className="inline-flex items-center">
                                <input
                                type="radio"
                                name="languageStatus"
                                value={true}
                                onChange={handleChange}
                                className="form-radio h-4 w-4 text-indigo-600"
                                required
                                />
                                <span className="ml-2">Yes</span>
                            </label>
                            <label className="inline-flex items-center">
                                <input
                                type="radio"
                                name="languageStatus"
                                value={false}
                                onChange={handleChange}
                                className="form-radio h-4 w-4 text-indigo-600"
                                required
                                />
                                <span className="ml-2">No</span>
                            </label>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <label className="block text-lg font-medium text-gray-900">
                            5. Client Information
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
                                    required
                                    >
                                    <option value="">Select status</option>
                                    <option value="Spanish">Monolingual Spanish</option>
                                    <option value="Bilingual">Bilingual</option>
                                    <option value="English">English</option>
                                    </select>
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Ethnicity
                                    </label>
                                    <input
                                    type="text"
                                    name="ethnicity"
                                    onChange={handleChange}
                                    placeholder="Enter client's ethnicity"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                    required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Language of Educational Instruction
                                </label>
                                <select
                                    name="educationalLanguage"
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                    required
                                >
                                    <option value="">Select language</option>
                                    <option value="Spanish">Spanish</option>
                                    <option value="English">English</option>
                                    <option value="">No formal education</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Language of test being administered
                                </label>
                                <select
                                    name="languageOfTest"
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                    required
                                >
                                    <option value="">Select language</option>
                                    <option value="Spanish">Spanish</option>
                                    <option value="English">English</option>
                                </select>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <label className="block text-lg font-medium text-gray-900">
                            6. Is there certified interpreter available?
                            </label>
                            <div className="space-x-6">
                            <label className="inline-flex items-center">
                                <input
                                type="radio"
                                name="certifiedInterpreter"
                                value={true}
                                onChange={handleChange}
                                className="form-radio h-4 w-4 text-indigo-600"
                                required
                                />
                                <span className="ml-2">Yes</span>
                            </label>
                            <label className="inline-flex items-center">
                                <input
                                type="radio"
                                name="certifiedInterpreter"
                                value={false}
                                onChange={handleChange}
                                className="form-radio h-4 w-4 text-indigo-600"
                                required
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