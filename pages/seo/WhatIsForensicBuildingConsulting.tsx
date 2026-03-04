import React from 'react';
import SEOPageLayout from '../../components/seo/SEOPageLayout';
import FAQSection, { buildFAQSchema } from '../../components/seo/FAQSection';
import RelatedPages from '../../components/seo/RelatedPages';

const faqs = [
  {
    question: 'What does a forensic building consultant do?',
    answer: 'A forensic building consultant investigates building damage to determine its cause, extent, and scope. They use engineering methodology, advanced testing equipment, and weather data analysis to produce reports that document damage for insurance claims, legal proceedings, and repair planning.',
  },
  {
    question: 'When should I hire a forensic building consultant?',
    answer: 'Hire a forensic consultant when you have storm damage to a commercial property and plan to file an insurance claim, when your claim has been denied or underpaid, when you suspect hidden damage that a standard inspection missed, or when you need documentation that can withstand legal scrutiny.',
  },
  {
    question: 'How is forensic building consulting different from a home inspection?',
    answer: 'Home inspections are general assessments of a property\'s condition for real estate transactions. Forensic building consulting is a specialized investigation focused on damage causation, hidden damage detection, and producing insurance-grade documentation. Forensic consultants use testing equipment, engineering analysis, and weather data that home inspectors do not.',
  },
  {
    question: 'Is forensic building consulting only for storm damage?',
    answer: 'No. Forensic building consulting covers all types of building damage including water intrusion, fire damage, structural failures, construction defects, and material failures. However, storm damage assessment for commercial properties is one of the most common applications because of the complexity of insurance claims involved.',
  },
  {
    question: 'How much does forensic building consulting cost?',
    answer: 'StormChecks provides forensic building assessments on a contingency basis — there is no upfront cost to the property owner. We only get paid when your claim is successfully resolved. This removes the financial barrier to getting proper documentation.',
  },
];

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'What Is Forensic Building Consulting?',
  description: 'Learn what forensic building consultants do, how they investigate storm damage, and how they help commercial property owners maximize insurance claim recovery.',
  author: { '@type': 'Organization', name: 'StormChecks' },
  publisher: { '@type': 'Organization', name: 'StormChecks' },
};

const WhatIsForensicBuildingConsulting: React.FC = () => {
  return (
    <SEOPageLayout
      title="What Is Forensic Building Consulting?"
      subtitle="How forensic building consultants investigate storm damage, identify hidden issues, and help commercial property owners recover what they are owed."
      metaTitle="What Is Forensic Building Consulting?"
      metaDescription="Learn what forensic building consultants do, how they investigate commercial property storm damage, and how they help maximize insurance claim recovery."
      canonicalPath="/what-is-forensic-building-consulting"
      schemas={[articleSchema, buildFAQSchema(faqs)]}
      breadcrumbs={[{ label: 'What Is Forensic Building Consulting?' }]}
    >
      {/* Definition */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6">The Science Behind Building Damage Investigation</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Forensic building consulting is a specialized discipline that applies engineering and scientific methodology to investigate building damage. Unlike standard inspections that rely on visual observation, forensic consultants use testing equipment, material analysis, and data correlation to determine what happened, why it happened, and how much it will cost to fix.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The word "forensic" means "suitable for use in a court of law." That precision is exactly what makes forensic building consulting valuable: the reports produced are built to withstand scrutiny from insurance carriers, appraisers, attorneys, and judges.
            </p>
          </div>
        </div>
      </section>

      {/* What They Do */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8">What Forensic Building Consultants Do</h2>
            <div className="space-y-6">
              {[
                {
                  title: 'Damage Identification',
                  desc: 'Using thermal imaging, moisture meters, core sampling, and systematic inspection protocols, forensic consultants identify all damage — including hidden damage beneath surfaces that visual inspections miss.',
                },
                {
                  title: 'Causation Analysis',
                  desc: 'Forensic consultants determine what caused the damage. For storm damage claims, this means correlating damage patterns with weather data to prove the damage was caused by a specific covered event — not by wear, aging, or maintenance.',
                },
                {
                  title: 'Scope Documentation',
                  desc: 'Every damaged component is documented with photographs, measurements, GPS coordinates, and testing data. This creates a comprehensive damage map that defines the full scope of repairs needed.',
                },
                {
                  title: 'Report Production',
                  desc: 'The forensic report compiles all findings into a document that meets insurance claim, appraisal, and legal standards. The report includes executive summary, methodology, findings, weather data, testing results, and cost analysis.',
                },
                {
                  title: 'Expert Testimony',
                  desc: 'When claims go to appraisal or litigation, forensic consultants can serve as expert witnesses. Their qualifications, methodology, and findings hold up under cross-examination — something that contractor estimates and standard inspection reports cannot provide.',
                },
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="font-bold text-primary mb-3 text-lg">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tools and Methods */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6">Tools and Methodology</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Forensic building consultants use a combination of advanced tools and standardized engineering methodologies to investigate damage:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: 'Thermal Imaging (IR)', desc: 'Infrared cameras detect temperature variations that indicate trapped moisture, missing insulation, and air infiltration paths invisible to the naked eye.' },
                { title: 'Moisture Detection', desc: 'Non-destructive and pin-type moisture meters measure water content in building materials. Elevated readings indicate infiltration even when surfaces appear dry.' },
                { title: 'Core Sampling', desc: 'Roof core samples reveal the condition of each layer — membrane, insulation, vapor barrier, deck — without the need for destructive demolition.' },
                { title: 'Weather Data Analysis', desc: 'Forensic-grade weather data provides hail size, wind speed, wind direction, and precipitation by date and GPS coordinate, establishing causal connection to specific storm events.' },
                { title: 'Material Testing', desc: 'Lab analysis of building materials determines degradation mode — whether damage was caused by impact, uplift, thermal cycling, or UV exposure.' },
                { title: 'Photographic Documentation', desc: 'High-resolution photos with GPS coordinates, measurement references, and time stamps create an evidence record that meets legal standards.' },
              ].map((tool, i) => (
                <div key={i} className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-primary mb-2">{tool.title}</h3>
                  <p className="text-gray-600 text-sm">{tool.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* StormChecks */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6">StormChecks: Forensic Building Consulting for Commercial Properties</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              StormChecks specializes in forensic building assessment for commercial property owners. Our team has assessed over $10 billion in property damage and our reports have been used to recover millions in insurance claims that would otherwise have been denied or underpaid.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white p-6 rounded-lg text-center border border-gray-200">
                <div className="text-3xl font-bold text-accent mb-2">$10B+</div>
                <p className="text-gray-600 text-sm">In property damage assessed</p>
              </div>
              <div className="bg-white p-6 rounded-lg text-center border border-gray-200">
                <div className="text-3xl font-bold text-accent mb-2">$0</div>
                <p className="text-gray-600 text-sm">Upfront cost — contingency-based</p>
              </div>
              <div className="bg-white p-6 rounded-lg text-center border border-gray-200">
                <div className="text-3xl font-bold text-accent mb-2">Free</div>
                <p className="text-gray-600 text-sm">Weather exposure analysis and monitoring</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <RelatedPages
        pages={[
          { title: 'Forensic Assessment vs. Standard Inspection', path: '/forensic-assessment-vs-standard-inspection', description: 'See how forensic assessments compare to standard property inspections.' },
          { title: 'How to Identify Hail Damage', path: '/how-to-identify-hail-damage-commercial-roofs', description: 'Learn the signs of hail damage on different commercial roofing systems.' },
          { title: 'What to Do After Storm Damage', path: '/what-to-do-after-storm-damage-commercial-property', description: 'Step-by-step guide after storm damage hits your commercial property.' },
        ]}
      />
    </SEOPageLayout>
  );
};

export default WhatIsForensicBuildingConsulting;
