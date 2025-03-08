// export default function Resources(){
//   return (
//     <>

//     </>
//   );
// }

import { 
  BookOpen, 
  Brain, 
  FileText, 
  Library, 
  ExternalLink, 
  ClipboardCheck, 
  Clock, 
  Scale, 
  GraduationCap,
  Languages,
  TestTube,
  ScrollText,
  BookOpenCheck
} from 'lucide-react';
import { Helmet } from 'react-helmet';

export default function ResourcesPage() {
  return (
    <section id="resources" className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <Helmet>
        <title>Resources</title>
        <meta name="description" content="Learn more about us" />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <BookOpenCheck className="h-12 w-12 text-indigo-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Assessment Resources</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive collection of validated assessment tools for Spanish-speaking populations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Acculturation Assessment */}
          <div className="bg-white rounded-2xl shadow-xl p-6 transform hover:scale-[1.02] transition-transform duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-indigo-100 p-3 rounded-lg">
                <Languages className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 ml-4">Acculturation Assessment</h3>
            </div>
            <ul className="space-y-6">
              <li className="flex items-start">
                <Scale className="h-5 w-5 text-indigo-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg text-gray-800">ARSMA-II</h4>
                  <p className="text-gray-600">Acculturation Rating Scale for Mexican-Americans</p>
                </div>
              </li>
              <li className="flex items-start">
                <ScrollText className="h-5 w-5 text-indigo-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg text-gray-800">Cultural Formulation Interview</h4>
                  <p className="text-gray-600 mt-1">
                    DSM-5® handbook on the cultural formulation interview (Lewis-Fernández et al., 2016)
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Cognitive Screening */}
          <div className="bg-white rounded-2xl shadow-xl p-6 transform hover:scale-[1.02] transition-transform duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-indigo-100 p-3 rounded-lg">
                <Brain className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 ml-4">Cognitive Screening</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <ClipboardCheck className="h-5 w-5 text-indigo-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800">MMSE</h4>
                  <p className="text-gray-600">Mini-Mental State Examination - Spanish validated version</p>
                </div>
              </li>
              <li className="flex items-start">
                <TestTube className="h-5 w-5 text-indigo-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800">MoCA</h4>
                  <p className="text-gray-600">Montreal Cognitive Assessment - Spanish version</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-indigo-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800">Clock-Drawing & Mini-Cog</h4>
                  <p className="text-gray-600">Validated screening tools for Spanish speakers</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Intelligence Tests */}
          <div className="bg-white rounded-2xl shadow-xl p-6 transform hover:scale-[1.02] transition-transform duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-indigo-100 p-3 rounded-lg">
                <GraduationCap className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 ml-4">Intelligence Tests</h3>
            </div>
            <ul className="space-y-4">
              {[
                {
                  title: "WISC-V Spanish",
                  desc: "For children aged 6-16 years"
                },
                {
                  title: "EIWA",
                  desc: "Wechsler Adult Intelligence Scale - Spanish version"
                },
                {
                  title: "Batería Woodcock-Muñoz",
                  desc: "Standardized in various Spanish-speaking countries"
                },
                {
                  title: "Raven's Progressive Matrices",
                  desc: "Non-verbal fluid intelligence assessment"
                }
              ].map((test, index) => (
                <li key={index} className="flex items-start">
                  <BookOpen className="h-5 w-5 text-indigo-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">{test.title}</h4>
                    <p className="text-gray-600">{test.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Additional Resources */}
          <div className="bg-white rounded-2xl shadow-xl p-6 transform hover:scale-[1.02] transition-transform duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-indigo-100 p-3 rounded-lg">
                <Library className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 ml-4">Additional Resources</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <FileText className="h-5 w-5 text-indigo-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg text-gray-800">Buros Center for Testing</h4>
                  <p className="text-gray-600 mb-2">Access to Spanish-language tests through Pruebas Publicadas en Español</p>
                  <a 
                    href="https://buros.org/how-use-pruebas-publicadas-en-espanol/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-700 hover:underline"
                  >
                    Access Resource <ExternalLink className="h-4 w-4 ml-1" />
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <TestTube className="h-5 w-5 text-indigo-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg text-gray-800">Comprehensive Assessments</h4>
                  <p className="text-gray-600">ECB, ACE, and NIH Toolbox Cognition Battery - all validated for Spanish-speaking populations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}