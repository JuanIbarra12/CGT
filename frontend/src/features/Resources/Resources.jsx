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
              { icon: Scale, title: "ARSMA-II", desc: "Acculturation Rating Scale for Mexican-Americans - Comprehensive assessment of cultural adaptation" },
              { icon: BarChart, title: "SASH", desc: "Short Acculturation Scale for Hispanics - Brief measure of language use, media, and social relations" },
              { icon: Globe, title: "BASH", desc: "Brief Acculturation Scale for Hispanics - Quick assessment of language preferences and cultural practices" },
              { icon: MessageSquare, title: "BAS", desc: "Bidimensional Acculturation Scale for Hispanics - Measures both Hispanic and non-Hispanic cultural domains" },
              { icon: Languages, title: "LAM", desc: "Language Acculturation Meter - Focused assessment of language proficiency and usage patterns" },
              { icon: ScrollText, title: "Cultural Formulation Interview", desc: "DSM-5® handbook on the cultural formulation interview (Lewis-Fernández et al., 2016)" },
            ]}
          />

          {/* 2. Intelligence Tests */}
          <ResourceCard
            icon={GraduationCap}
            title="Intelligence Tests"
            items={[
              { icon: BookOpen, title: "WISC-V Spanish", desc: "For children aged 6-16 years" },
              { icon: BookOpen, title: "EIWA", desc: "Wechsler Adult Intelligence Scale - Spanish version" },
              { icon: BookOpen, title: "Batería Woodcock-Muñoz", desc: "Standardized in various Spanish-speaking countries" },
              { icon: BookOpen, title: "Raven's Progressive Matrices", desc: "Non-verbal fluid intelligence assessment" },
            ]}
          />

          {/* 3. Cognitive Screening */}
          <ResourceCard
            icon={Brain}
            title="Cognitive Screening"
            items={[
              { icon: ClipboardCheck, title: "MMSE", desc: "Mini-Mental State Examination - Spanish validated version" },
              { icon: TestTube, title: "MoCA", desc: "Montreal Cognitive Assessment - Spanish version" },
              { icon: Clock, title: "Clock-Drawing & Mini-Cog", desc: "Validated screening tools for Spanish speakers" },
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
