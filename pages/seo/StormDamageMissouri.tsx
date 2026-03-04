import React from 'react';
import SEOPageLayout from '../../components/seo/SEOPageLayout';
import FAQSection, { buildFAQSchema } from '../../components/seo/FAQSection';
import RelatedPages from '../../components/seo/RelatedPages';

const faqs = [
  { question: 'How common is storm damage to commercial properties in Missouri?', answer: 'Missouri experiences 60-80 significant hail events per year, concentrated from April through August. The state\'s position at the eastern edge of Tornado Alley, combined with moisture from the Gulf, produces severe thunderstorms that affect commercial properties across the state.' },
  { question: 'What is the filing deadline for insurance claims in Missouri?', answer: 'Missouri has a 5-year statute of limitations for contract-based insurance claims. The discovery rule may extend this for damage that was not reasonably discoverable. Prompt forensic assessment protects both your evidence and your filing rights.' },
  { question: 'What areas of Missouri are most at risk?', answer: 'The Kansas City and St. Louis metro areas face the highest risk due to their combination of severe weather exposure and commercial property density. Central Missouri and the Springfield area also experience frequent severe storms.' },
  { question: 'Does StormChecks have experience with Missouri claims?', answer: 'Yes. StormChecks has assessed commercial properties throughout Missouri, including the Mexico, MO retail property case where our forensic assessment identified $3.9M in damage versus the carrier\'s $587K estimate — a difference of $3.3M.' },
];

const articleSchema = { '@context': 'https://schema.org', '@type': 'Article', headline: 'Storm Damage Assessment in Missouri', description: 'Missouri storm damage assessment for commercial properties. Hail and tornado risk across the Show-Me State.', author: { '@type': 'Organization', name: 'StormChecks' }, publisher: { '@type': 'Organization', name: 'StormChecks' } };
const localBusinessSchema = { '@context': 'https://schema.org', '@type': 'LocalBusiness', name: 'StormChecks — Missouri', description: 'Forensic building assessment for commercial properties in Missouri.', areaServed: { '@type': 'State', name: 'Missouri' } };

const StormDamageMissouri: React.FC = () => {
  return (
    <SEOPageLayout
      title="Storm Damage Assessment in Missouri"
      subtitle="Missouri faces hail and tornado risk from Kansas City to St. Louis. StormChecks provides forensic building assessments for commercial property owners across the Show-Me State."
      metaTitle="Storm Damage Assessment in Missouri | Commercial Property"
      metaDescription="Missouri storm damage assessment for commercial properties. Hail and tornado risk across the state. Free weather analysis and forensic assessment."
      canonicalPath="/storm-damage-assessment-missouri"
      schemas={[articleSchema, localBusinessSchema, buildFAQSchema(faqs)]}
      breadcrumbs={[{ label: 'Missouri' }]}
    >
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6">Missouri: Storm Damage from Border to Border</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Missouri sits at the eastern edge of Tornado Alley, where severe thunderstorms bring hail, damaging winds, and tornadoes across the state from spring through fall. Commercial properties from Kansas City to St. Louis face annual storm damage risk, and the state's two major metro areas concentrate significant commercial property exposure.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-accent mb-2">60-80</div>
                <p className="text-gray-600 text-sm">Significant hail events per year</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-accent mb-2">5 years</div>
                <p className="text-gray-600 text-sm">Claim filing deadline</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-accent mb-2">$3.3M</div>
                <p className="text-gray-600 text-sm">Additional recovery in MO case study</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6">High-Risk Areas in Missouri</h2>
            <div className="space-y-4">
              {[
                { region: 'Kansas City Metro', desc: 'The Kansas City metro straddles Missouri and Kansas, placing it directly in Tornado Alley. The area experiences frequent severe hail and wind events from spring through summer.' },
                { region: 'St. Louis Metro', desc: 'St. Louis and surrounding counties face severe thunderstorm risk, including hail, tornadoes, and damaging straight-line winds. The metro\'s dense commercial property base creates substantial exposure.' },
                { region: 'Central Missouri', desc: 'The Columbia, Jefferson City, and Mexico corridor experiences regular severe storms. Our Mexico, MO case study demonstrates the significant hidden damage in this region.' },
                { region: 'Springfield & Southwest Missouri', desc: 'Southwest Missouri\'s proximity to Tornado Alley\'s core brings frequent severe weather. Springfield and surrounding areas face annual hail and wind damage risk.' },
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
            <h2 className="text-3xl font-bold text-primary mb-6">Case Study: Mexico, MO Retail Property</h2>
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
              <p className="text-gray-600 leading-relaxed mb-6">
                A retail property in Mexico, Missouri sustained storm damage. The carrier's adjuster estimated $587,000 in repairs. StormChecks' forensic assessment documented $3,900,000 in total damage — finding extensive hidden moisture intrusion, interior damage, and building envelope compromise throughout the property.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-4 rounded-lg text-center border border-gray-200">
                  <div className="text-sm text-gray-500 mb-1">Carrier Estimate</div>
                  <div className="text-2xl font-bold text-primary">$587K</div>
                </div>
                <div className="bg-white p-4 rounded-lg text-center border border-gray-200">
                  <div className="text-sm text-gray-500 mb-1">Forensic Assessment</div>
                  <div className="text-2xl font-bold text-accent">$3.9M</div>
                </div>
                <div className="bg-white p-4 rounded-lg text-center border border-gray-200">
                  <div className="text-sm text-gray-500 mb-1">Additional Recovery</div>
                  <div className="text-2xl font-bold text-green-600">$3.3M</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <RelatedPages
        pages={[
          { title: 'Storm Damage in Kansas', path: '/storm-damage-assessment-kansas', description: 'Kansas shares Missouri\'s severe storm exposure.' },
          { title: 'Storm Damage in Nebraska', path: '/storm-damage-assessment-nebraska', description: 'Nebraska faces similar Great Plains storm patterns.' },
          { title: 'Retail Center Storm Damage', path: '/storm-damage-assessment-retail-centers', description: 'Storm damage challenges unique to retail properties.' },
        ]}
      />
    </SEOPageLayout>
  );
};

export default StormDamageMissouri;
