import React from 'react';
import SEOPageLayout from '../../components/seo/SEOPageLayout';
import FAQSection, { buildFAQSchema } from '../../components/seo/FAQSection';
import RelatedPages from '../../components/seo/RelatedPages';

const faqs = [
  { question: 'What types of storms damage commercial properties in North Carolina?', answer: 'North Carolina faces a diverse storm threat: severe thunderstorms with hail in the Piedmont and western regions, hurricanes and tropical storms along the coast, and severe wind events statewide. Each storm type creates different damage patterns that require specific forensic assessment expertise.' },
  { question: 'What is the filing deadline for insurance claims in North Carolina?', answer: 'North Carolina has a 3-year statute of limitations for breach of contract claims, which includes insurance claims. The discovery rule may extend this for hidden damage. Coastal properties with hurricane damage may have additional policy-specific deadlines.' },
  { question: 'Are hurricanes handled differently than hailstorms for insurance claims?', answer: 'Yes. Many commercial property policies have separate hurricane or named-storm deductibles (often 2-5% of building value). The deductible structure, coverage terms, and documentation requirements can differ significantly from standard hail and wind claims.' },
  { question: 'Does StormChecks assess hurricane damage?', answer: 'Yes. StormChecks provides forensic assessment for all storm damage types including hurricanes, tropical storms, severe thunderstorms, hail, and wind. Hurricane damage assessment is particularly complex due to the combination of wind, water, and debris impacts.' },
];

const articleSchema = { '@context': 'https://schema.org', '@type': 'Article', headline: 'Storm Damage Assessment in North Carolina', description: 'North Carolina storm damage assessment for commercial properties. Hail, hurricane, and severe storm risks across the state.', author: { '@type': 'Organization', name: 'StormChecks' }, publisher: { '@type': 'Organization', name: 'StormChecks' } };
const localBusinessSchema = { '@context': 'https://schema.org', '@type': 'LocalBusiness', name: 'StormChecks — North Carolina', description: 'Forensic building assessment for commercial properties in North Carolina.', areaServed: { '@type': 'State', name: 'North Carolina' } };

const StormDamageNorthCarolina: React.FC = () => {
  return (
    <SEOPageLayout
      title="Storm Damage Assessment in North Carolina"
      subtitle="North Carolina faces hail, hurricanes, and severe thunderstorms. StormChecks provides forensic building assessments for commercial property owners across the Tar Heel State."
      metaTitle="Storm Damage Assessment in North Carolina | Commercial Property"
      metaDescription="North Carolina storm damage assessment for commercial properties. Hail, hurricane, and wind damage risks. Free weather analysis and forensic assessment."
      canonicalPath="/storm-damage-assessment-north-carolina"
      schemas={[articleSchema, localBusinessSchema, buildFAQSchema(faqs)]}
      breadcrumbs={[{ label: 'North Carolina' }]}
    >
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6">North Carolina: Multiple Storm Threats</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              North Carolina faces a uniquely diverse storm damage risk. The Piedmont and western regions experience severe thunderstorms with large hail, while the coastal plain is exposed to hurricanes and tropical storms. Commercial property owners across the state need forensic assessment that addresses their specific regional storm risks.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-accent mb-2">Dual Risk</div>
                <p className="text-gray-600 text-sm">Hail inland, hurricanes on coast</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-accent mb-2">3 years</div>
                <p className="text-gray-600 text-sm">Claim filing deadline</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-accent mb-2">2-5%</div>
                <p className="text-gray-600 text-sm">Typical hurricane deductible</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6">Storm Risk by Region</h2>
            <div className="space-y-4">
              {[
                { region: 'Charlotte & Piedmont', desc: 'Charlotte, Greensboro, Raleigh, and the Piedmont Triad experience regular severe thunderstorms with hail and damaging winds. The region\'s dense commercial property development creates significant claim volume.' },
                { region: 'Raleigh-Durham (Research Triangle)', desc: 'The Research Triangle faces both severe thunderstorm and occasional tropical system impacts. Major institutional, office, and industrial properties in this area require comprehensive forensic assessment.' },
                { region: 'Coastal Plain (Wilmington, Outer Banks)', desc: 'The coastal region faces hurricane and tropical storm risk. Wind, storm surge, and wind-driven rain create complex damage patterns that require specialized forensic expertise to document.' },
                { region: 'Western North Carolina', desc: 'The mountain region experiences severe thunderstorms with hail, and its terrain can accelerate wind speeds through valleys and gaps, creating localized high-wind damage zones.' },
              ].map((area, i) => (
                <div key={i} className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="font-bold text-primary mb-2">{area.region}</h3>
                  <p className="text-gray-600">{area.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6">North Carolina-Specific Claim Considerations</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: '3-Year Filing Deadline', desc: 'North Carolina\'s 3-year statute of limitations is moderate. For hurricane damage, additional policy-specific deadlines may apply. Prompt forensic assessment is important.' },
                { title: 'Hurricane Deductibles', desc: 'Coastal and near-coastal properties often have separate hurricane/named-storm deductibles of 2-5% of building value. Understanding your deductible structure before a storm is essential.' },
                { title: 'Wind vs. Flood Disputes', desc: 'After hurricanes, carriers frequently dispute whether damage was caused by wind (covered) or flood (typically excluded or covered by a separate NFIP policy). Forensic assessment establishes causation.' },
                { title: 'Humidity and Mold Risk', desc: 'North Carolina\'s humid climate accelerates mold growth when storm damage allows moisture intrusion. Mold can develop within 48-72 hours, making prompt assessment and temporary repairs critical.' },
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <RelatedPages
        pages={[
          { title: 'Storm Damage in Texas', path: '/storm-damage-assessment-texas', description: 'Texas leads the nation in hail damage claims.' },
          { title: 'How to Identify Wind Damage', path: '/how-to-identify-wind-damage-commercial-buildings', description: 'Recognizing wind damage on commercial buildings.' },
          { title: 'State-by-State Filing Deadlines', path: '/state-by-state-insurance-claim-filing-deadlines', description: 'Know your filing deadline in every state.' },
        ]}
      />
    </SEOPageLayout>
  );
};

export default StormDamageNorthCarolina;
