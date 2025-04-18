import React, { useEffect, useState } from 'react';
import { BookOpen, Brain, Languages, Users, AlertCircle, Check, X, GraduationCap, FileText, TestTube } from 'lucide-react';
import { Helmet } from 'react-helmet';

export default function App() {
  const [toolData, setToolData] = useState([{}]);
  // useEffect(() => {
  //   const list = document.querySelectorAll('ol');
  //   const items = document.querySelectorAll('li');
  //   console.log(items[0].innerText)
  //   items.forEach((li) => {
  //    if (li.innerText.includes("No normed test")) {
  //       const listItem = document.createElement('li');
  //       listItem.textContent = 'Consider referring out.';
  //       list[0].appendChild(listItem)
  //     }

  //     if (li.innerText.includes("null")) {
  //       li.innerText = 'Consider referring out.';
  //     }
  //   });
  // }, [toolData]);
  
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
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Assessment Recommendation</h2>
      
      <div className="space-y-12">
      {toolData.map((caseStudy, index) => (
        <div className='border-[10px] p-10' key={index}>
          <ol style={{ listStyleType: "decimal" }}>
              <li>Conduct cultural interview.</li>
              <li>Use cultural assessment.</li>
              <li>
                Conduct language proficiency test:
                <ol style={{ listStyleType: "disc", marginLeft: "20px" }}>
                  <li>Bilingual Verbal Ability Tests (BVAT)</li>
                  <li>Language Assessment Scales (LAS)</li>
                  <li>Woodcock-Muñoz Language Survey (WMLS)</li>
                  <li>Comprehensive Assessment of Spoken Language (CASL)</li>
                  <li>Peabody Picture Vocabulary Test (PPVT) & Test de Vocabulario en Imágenes Peabody (TVIP)</li>
                  <li>Bilingual Aphasia Test (BAT)</li>
                </ol>
              </li>

              {!caseStudy.languageStatus ? (
                !caseStudy.certifiedInterpreter ? (
                  (() => {
                    const c = caseStudy.providedCondition;

                    if (c === "Traumatic Brain Injury (TBI)" || c === "Dementia & Mild Cognitive Impairment (MCI)") {
                      return (
                        <li>
                          Use non-verbal measure(s): Rey-Osterrieth Complex Figure Test (ROCF) and CANTAB (Cambridge Neuropsychological Test Automated Battery).
                        </li>
                      );
                    }

                    if (
                      c === "ADHD (Attention-Deficit/Hyperactivity Disorder)" ||
                      c === "Autism Spectrum" ||
                      c === "Depression" ||
                      c === "Anxiety Disorders" ||
                      c === "Parkinsons Disease" ||
                      c === "Schizophrenia & Psychotic Disorders"
                    ) {
                      return (
                        <li>
                          Use non-verbal measure(s): CANTAB (Cambridge Neuropsychological Test Automated Battery).
                        </li>
                      );
                    }

                    if (
                      c === "Alzheimers" ||
                      c === "Dyslexia & Reading Disorders" ||
                      c === "Math & Writing Disorders"
                    ) {
                      return (
                        <li>
                          Use non-verbal measure(s): CANTAB (Cambridge Neuropsychological Test Automated Battery) and Beery-Buktenica Developmental Test of Visual-Motor Integration (Beery VMI).
                        </li>
                      );
                    }

                    if (c === "Autism Spectrum Disorder (ASD) Evaluations") {
                      return (
                        <li>
                          Use non-verbal measure(s): Beery-Buktenica Developmental Test of Visual-Motor Integration (Beery VMI).
                        </li>
                      );
                    }

                    if (c === "Cognitive Abilities") {
                      return (
                        <li>
                          Use non-verbal measure(s): Beery-Buktenica Developmental Test of Visual-Motor Integration (Beery VMI), Leiter International Performance Scale – Third Edition (Leiter-3), Universal Nonverbal Intelligence Test – Second Edition (UNIT-2), Raven’s Progressive Matrices (RPM), Naglieri Nonverbal Ability Test (NNAT), and Wechsler Nonverbal Scale of Ability (WNV).
                        </li>
                      );
                    }

                    return <li>null</li>; // No matching condition → no <li>
                  })()
                ) : (
                  caseStudy.clientLanguageStatus === caseStudy.languageOfTest || caseStudy.clientLanguageStatus === "Bilingual" ? null : (
                    <li>Use certified interpreter.</li>
                  )
                )
              ) : null}

              {!(!(caseStudy["languageStatus"]) && !(caseStudy["certifiedInterpreter"]))?<li>
               { (caseStudy.providedCondition === "Dementia & Mild Cognitive Impairment (MCI)")? 
                    (["Spanish", "Mexican", "Argentinian", "Chilean", "Colombian"].includes(caseStudy.ethnicity))?`Use Montreal Cognitive Assessment (MoCA) and Mini-Mental State Examination (MMSE) ${caseStudy.ethnicity} version.`: 
                    (["Peruvian", "Venezuelan"].includes(caseStudy.ethnicity))?`Use Mini-Mental State Examination (MMSE) ${caseStudy.ethnicity} version.`: 
                    "Use Montreal Cognitive Assessment (MoCA) and Mini-Mental State Examination (MMSE) US/Adapted measure, if available."
               : (caseStudy.providedCondition === "Traumatic Brain Injury (TBI)") ?
                    (["Spanish", "Mexican", "Argentinian", "Chilean"].includes(caseStudy.ethnicity))?`Use Trail Making Test (TMT) ${caseStudy.ethnicity} version.`: 
                    "Use Trail Making Test (TMT) US/Adapted measure, if available."
               : (caseStudy.providedCondition === "Schizophrenia & Psychotic Disorders") ?
                    (["Argentinian", "Bolivian", "Chilean", "Cuban", "Salvadoran", "Guatemalan", "Honduran", "Mexican", "Paraguayan", "Puerto Rican", "Spanish", "Peruvian"].includes(caseStudy.ethnicity))?`Use Stroop Test and Wisconsin Card SortingTest (WCST) ${caseStudy.ethnicity} version.`: 
                    "Use Stroop Test and Wisconsin Card SortingTest (WCST) US/Adapted measure, if available."
               : (caseStudy.providedCondition === "Depression") ?
                    (["Spanish", "Chilean", "Mexican", "Argentinian", "Colombian", "Peruvian"].includes(caseStudy.ethnicity))?`Use Beck Depression Inventory (BDI) ${caseStudy.ethnicity} version.`: 
                    "Use Beck Depression Inventory (BDI) US/Adapted measure, if available."
               : (caseStudy.providedCondition === "Anxiety Disorders") ?
                    (["Spanish", "Chilean", "Mexican", "Argentinian", "Colombian", "Venezuelan"].includes(caseStudy.ethnicity))?`Use State-Trait Anxiety Inventory ${caseStudy.ethnicity} version.`: 
                    "Use State-Trait Anxiety Inventory US/Adapted measure, if available."
               : (caseStudy.providedCondition === "ADHD (Attention-Deficit/Hyperactivity Disorder)") ?
                    (["Argentinian", "Bolivian", "Chilean", "Cuban", "Salvadoran", "Guatemalan", "Honduran", "Mexican", "Peruvian", "Paraguayan"].includes(caseStudy.ethnicity))?`Use Trail Making Test (TMT) ${caseStudy.ethnicity} version.`: 
                    "Use Trail Making Test (TMT) US/Adapted measure, if available."
               : (caseStudy.providedCondition === "Dyslexia & Reading Disorders") ?
                    (["Mexican", "Spanish", "Puerto Rican"].includes(caseStudy.ethnicity))?`Use Test of Phonological Awareness in Spanish (TPAS) ${caseStudy.ethnicity} version.`: 
                    (["American"].includes(caseStudy.ethnicity) && caseStudy.clientLanguageStatus === "Bilingual")?`Use Bilingual English-Spanish Assessment (BESA), Dyslexia Determination Test (DDT) – Spanish Screener, Receptive One-Word Picture Vocabulary Test, Fourth Edition, Spanish-Bilingual Edition (ROWPVT-4: SBE) US/Adapted measure, if available.`:
                    "Use Batería IV Woodcock-Muñoz, Test of Phonological Awareness in Spanish (TPAS), Bilingual English-Spanish Assessment (BESA), Dyslexia Determination Test (DDT) – Spanish Screener, Receptive One-Word Picture Vocabulary Test, Fourth Edition, Spanish-Bilingual Edition (ROWPVT-4: SBE) US/Adapted measure, if available."
               : (caseStudy.providedCondition === "Math & Writing Disorders") ?
                    "Use Batería IV Woodcock-Muñoz, Peabody Individual Achievement Test – Revised/Normative Update (PIAT-R/NU) – Spanish Version, Test of Early Mathematics Ability (TEMA-3) – Spanish Edition US/Adapted measure, if available."
               : (caseStudy.providedCondition === "Cognitive Abilities") ?
                    (["Spanish", "Mexican", "Argentinian", "Colombian"].includes(caseStudy.ethnicity))?`Use Escala de Inteligencia de Wechsler para Adultos – IV (WAIS-IV Spanish), Escala de Inteligencia de Wechsler para Niños – V (WISC-V Spanish), Test de Matrices Progresivas de Raven – Escala General ${caseStudy.ethnicity} version.`: 
                    "Use Batería IV Woodcock-Muñoz, Escala de Inteligencia de Wechsler para Adultos – IV (WAIS-IV Spanish), Escala de Inteligencia de Wechsler para Niños – V (WISC-V Spanish), Test de Matrices Progresivas de Raven – Escala General US/Adapted measure, if available."
               : (caseStudy.providedCondition === "Autism Spectrum Disorder (ASD) Evaluations") ?
                    "Use Escala de Inteligencia de Wechsler para Adultos – IV (WAIS-IV Spanish), Escala de Inteligencia de Wechsler para Niños – V (WISC-V Spanish), Test de Matrices Progresivas de Raven – Escala General US/Adapted measure, if available."
               : (caseStudy.providedCondition === "Employment & Professional Assessments") ?
                    (["Spanish", "Chilean", "Ecuadorians"].includes(caseStudy.ethnicity))?`Use Personality Assessment Inventory™ (PAI®) – European Spanish with Norms ${caseStudy.ethnicity} version.`: 
                    "Use Use Personality Assessment Inventory™ (PAI®) – European Spanish with Norms US/Adapted measure, if available."
               : (caseStudy.providedCondition === "Criminal & Civil Cases") ?
                    (["Spanish"].includes(caseStudy.ethnicity))?`Use MacArthur Competence Assessment Tool for Treatment (MacCAT-T) – ${caseStudy.ethnicity} version.`: 
                    "Use MacArthur Competence Assessment Tool for Treatment (MacCAT-T) – Spanish Version US/Adapted measure, if available."
               : (caseStudy.providedCondition === "Studying Cognitive Development & Aging")?
                    (["Spanish"].includes(caseStudy.ethnicity))?`Use Everyday Cognition Battery (ECB) – ${caseStudy.ethnicity} version.`: 
                    (["Argentinian", "Bolivian", "Chilean", "Cuban", "Salvadoran", "Guatemalan", "Honduran", "Paraguayan", "Mexican", "Spanish", "Puerto Rican", "Peruvian"].includes(caseStudy.ethnicity))?`Use Phonological Verbal Fluency Norms ${caseStudy.ethnicity} version.`: 
                    "Use Batería IV Woodcock-Muñoz, Spanish-Bilingual Edition of the Receptive One-Word Picture Vocabulary Test (ROWPVT-4: SBE), Dean–Woodcock Neuropsychological Assessment System (DWNAS), NIH Toolbox, Everyday Cognition Battery (ECB) – Spanish Version, and Phonological Verbal Fluency Norms US/Adapted measure, if available."
               :
                 (caseStudy.providedCondition === "Brain Injury & Rehabilitation Research")?
                    (["Mexican"].includes(caseStudy.ethnicity))?`Use NEUROPSI: Brief Neuropsychological Battery in Spanish ${caseStudy.ethnicity} version.`: 
                    (["Argentinian", "Bolivian", "Chilean", "Cuban", "Salvadoran", "Guatemalan", "Honduran", "Paraguayan", "Mexican", "Spanish", "Puerto Rican", "Peruvian"].includes(caseStudy.ethnicity))?`Use Stroop Test – Spanish Norms for Traumatic Brain Injury ${caseStudy.ethnicity} version.`:
                    "Use NEUROPSI: Brief Neuropsychological Battery in Spanish and Stroop Test – Spanish Norms for Traumatic Brain Injury US/Adapted measure, if available."
               :
                 (caseStudy.providedCondition === "Competency & Legal Responsibility Evaluations")?
                    <>
                      Use adapted versions:
                      <ol style={{ listStyleType: "disc", marginLeft: "20px" }}>
                        <li>MacArthur Competence Assessment Tool for Treatment (MacCAT-T) - Spanish Version</li>
                        <li>Fitness Interview Test - Revised (FIT-R) - Spanish Translation</li>
                        <li>Escala de Inteligencia Wechsler para Adultos - Tercera Edición (EIWA-III)</li>
                        <li>Batería IV Woodcock-Muñoz - Pruebas de Habilidades Cognitivas</li>
                        <li>Minnesota Multiphasic Personality Inventory-2 (MMPI-2) - Spanish Version</li>
                      </ol>
                    </>                    
               :
                 "No normed test." + `${(caseStudy.languageStatus)?" Use translated test.":""}`
               }
              </li>:""}

              {
                (caseStudy.languageStatus === false && caseStudy.clientLanguageStatus === "Spanish" && caseStudy.certifiedInterpreter === false)?
                  <li>Consider referring out.</li>
                :""
              }
              
            </ol>
        </div>
      ))}
      </div>
    </div>
  );
}