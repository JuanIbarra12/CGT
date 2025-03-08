import React, { useEffect, useState } from 'react';
import { BookOpen, Brain, Languages, Users, AlertCircle, Check, X, GraduationCap, FileText, TestTube } from 'lucide-react';
import { Helmet } from 'react-helmet';

export default function App() {
  const [toolData, setToolData] = useState([{}]);
  console.log(toolData);
  useEffect(()=>{
    console.log("Hi")
    const f = async () => {
      const res = await fetch(import.meta.env.VITE_API_URL+'/recommendations', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          
        },
        credentials: 'include'
      });
      const data = await res.json();
      console.log(data)
      setToolData(data.tools);
    };

    f();

  }, []);
  

  return (
    <div className="max-w-4xl mx-auto px-4 py-24">
      <Helmet>
        <title>Recommendations</title>
        <meta name="description" content="Learn more about us" />
      </Helmet>
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Assessment Recommendations</h2>
      
      <div className="space-y-12">
      {toolData.map((caseStudy, index) => (
        <div className='border-[10px] p-10' key={index}>
          <h1 className='font-bold'>Recommendation #{index + 1}</h1>
          <ol style={{ listStyleType: "decimal" }}>
              <li>Conduct cultural interview.</li>
              <li>Use cultural assessment.</li>
              
                {
                  (!caseStudy["languageStatus"]) ?//if (no)
                     (!caseStudy["certifiedInterpreter"])? <li>Use verbal measure.</li> //if (no)
                    :  
                      (caseStudy["clientLanguageStatus"] === caseStudy["languageOfTest"] || caseStudy["clientLanguageStatus"] === "Bilingual")?""
                    : <li>Use certified interpreter</li> 
                  : ""
                }
              
              <li>
               { (caseStudy.providedCondition === "Dementia & Mild Cognitive Impairment (MCI)")? 
                    "Use MoCA, MMSE"
               : (caseStudy.providedCondition === "Traumatic Brain Injury (TBI)") ?
                    "Use Trail Making Test (TMT)"
               : (caseStudy.providedCondition === "Schizophrenia & Psychotic Disorders") ?
                    "Use Wisconsin Card Sorting Test (WCST) and Stroop Test."
               : (caseStudy.providedCondition === "ADHD") ?
                    "Use TMT"
               :
                    "No normed test."
               }
              </li>
              <li>Consider referring out.</li>
            </ol>
        </div>
      ))}
      </div>
    </div>
  );
}