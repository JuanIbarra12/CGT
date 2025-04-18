import {
  BookOpen, Brain, FileText, Library, ExternalLink,
  ClipboardCheck, Clock, Scale, GraduationCap, Languages,
  TestTube, ScrollText, BookOpenCheck, BarChart, Globe, MessageSquare
} from "lucide-react";
import { Helmet } from "react-helmet";
import ResourceCard from "../../components/UI/ResourceCard";

export default function ResourcesPage() {
  return (
    <section className="min-h-screen py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
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
          {/* 1. Acculturation Assessment */}
          <ResourceCard
            icon={Languages}
            title="Acculturation Assessment"
            items={[
              { icon: Scale, title: "ARSMA-II", desc: "Acculturation Rating Scale for Mexican-Americans - Comprehensive assessment of cultural adaptation (Cuéllar, I., Arnold, B., & Maldonado, R. (1995))" },
              { icon: BarChart, title: "SASH", desc: "Short Acculturation Scale for Hispanics - Brief measure of language use, media, and social relations (Marin, G. et al., (1987))" },
              { icon: Globe, title: "BASH", desc: "Brief Acculturation Scale for Hispanics - Quick assessment of language preferences and cultural practices ( Norris, A.E., et al., (1996))" },
              { icon: MessageSquare, title: "BAS", desc: "Bidimensional Acculturation Scale for Hispanics - Measures both Hispanic and non-Hispanic cultural domains" },
              { icon: Languages, title: "LAM", desc: "Language Acculturation Meter - Focused assessment of language proficiency and usage patterns (PAR Staff (2020))" },
              { icon: ScrollText, title: "Cultural Formulation Interview", desc: "DSM-5® handbook on the cultural formulation interview (Lewis-Fernández et al., 2016)" },
            ]}
          />

          {/* 2. Intelligence Tests */}
          <ResourceCard
            icon={GraduationCap}
            title="Intelligence Tests"
            items={[
              { icon: BookOpen, title: "WAIS-IV - Spanish Version (WAIS-IV España)- Weschler, D. (2015)", desc: 
                <>
                  <ul>
                    <li><strong>Age Range:</strong> 16–90 years</li>
                    <li><strong>Publisher:</strong> Pearson Spain</li>
                    <li><strong>Norms:</strong> Based on normative data from Spain</li>
                    <li><strong>Use:</strong> Intelligence, cognitive profile assessment in Spanish-speaking adults</li>
                    <li><strong>Note:</strong> Separate from EIWA-III; includes different cultural norms</li>
                  </ul>
                </>
               },
              { icon: BookOpen, title: "Escala de Inteligencia Wechsler para Adultos - Tercera Edición (EIWA-III) - Wechsler, D. (2008)", desc: <>
                <ul>
                  <li><strong>Based on:</strong> WAIS-III</li>
                  <li><strong>Age Range:</strong> 16–64 years</li>
                  <li><strong>Publisher:</strong> Person / Ponce School of Medicine</li>
                  <li><strong>Norms:</strong> Developed and normed in Puerto Rico</li>
                  <li><strong>Language:</strong> Full Spanish adaptation</li>
                  <li><strong>Use:</strong> Clinical, neuropsychological, educational evaluations</li>
                </ul>
              </> },
              { icon: BookOpen, title: "Batería IV Woodcock-Muñoz - Pruebas de Habilidades Cognitivas - Munoz-Sandoval, A.F. (2005) ", desc:
                <>
                    <ul>
                      <li><strong>Based on:</strong> Woodcock-Johnson IV</li>
                      <li><strong>Age Range:</strong> 3–90+ years</li>
                      <li><strong>Publisher:</strong> Riverside Insights</li>
                      <li><strong>Norms:</strong> U.S. Spanish-speaking population</li>
                      <li><strong>Use:</strong> Academic placement, neuropsych evaluations, language-dominant bilingual assessment</li>
                      <li><strong>Strengths:</strong> Co-normed with English version, making bilingual</li>
                    </ul>
                </> 
            },
              { icon: BookOpen, title: "Raven's Progressive Matrices - Spanish Adaptations - Raven, J.C. (2013)", desc: 
              <>
                <ul>
                  <li><strong>Versions:</strong> Coloured, Standard, Advanced</li>
                  <li><strong>Age Range:</strong> Children to adults (varies by version)</li>
                  <li><strong>Publisher:</strong> Pearson / Manual Moderno</li>
                  <li><strong>Norms:</strong> Available for Spain, Mexico, Argentina, Colombia, and other countries</li>
                  <li><strong>Use:</strong> Nonverbal measure of general intelligence</li>
                  <li><strong>Strengths:</strong> Minimally language-dependent, ideal for diverse populations</li>
                </ul>
              </> },
            ]}
          />

          {/* 3. Cognitive Screening */}
          <ResourceCard
            icon={Brain}
            title="Cognitive Screening"
            items={[
              { icon: ClipboardCheck, title: "MMSE", desc: "Mini-Mental State Examination - Spanish validated version (Reyes de Beaman, et.al, (2004))" },
              { icon: TestTube, title: "MoCA", desc: "Montreal Cognitive Assessment - Spanish version (Delgado, C., Araneda, A., & Behrens, M. I. (2019))" },
              { icon: Clock, title: "Clock-Drawing & Mini-Cog", desc: "Validated screening tools for Spanish speakers (Borson, S. et al., (2000))" },
            ]}
          />

          {/* 4. Additional Resources */}
          <ResourceCard
            icon={Library}
            title="Additional Resources"
            items={[
              {
                icon: FileText,
                title: "Buros Center for Testing",
                desc: "Access to Spanish-language tests through Pruebas Publicadas en Español",
                link: "https://buros.org/how-use-pruebas-publicadas-en-espanol/"
              },
              {
                icon: TestTube,
                title: "Comprehensive Assessments",
                desc: "ECB, ACE, and NIH Toolbox Cognition Battery - all validated for Spanish-speaking populations"
              }
            ]}
          />
        </div>
      </div>
    </section>
  );
}
