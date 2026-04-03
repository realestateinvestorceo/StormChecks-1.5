import React from 'react';
import SEOPageLayout from '../../components/seo/SEOPageLayout';
import FAQSection, { buildFAQSchema } from '../../components/seo/FAQSection';
import RelatedPages from '../../components/seo/RelatedPages';

const faqs = [
  { question: 'How severe is hail risk in Oklahoma?', answer: 'Oklahoma ranks among the top 5 states for hail frequency and severity. Oklahoma City and Tulsa regularly experience large hail, and the state sees an average of 80-100+ significant hail events per year. Supercell thunderstorms in Oklahoma can produce hail exceeding 4 inches in diameter.' },
  { question: 'What is the statute of limitations for property claims in Oklahoma?', answer: 'Oklahoma has a 5-year statute of limitations for property insurance claims based on written contracts. While this is one of the longer filing windows, your policy likely requires notification within 30-90 days of discovering damage.' },
  { question: 'Are tornadoes covered under commercial property insurance?', answer: 'Yes. Tornado damage — including wind damage, debris impact, and resulting water intrusion — is covered under the windstorm peril in standard commercial property policies. Forensic assessment documents all tornado-related damage comprehensively.' },
  { question: 'Does StormChecks assess tornado damage as well as hail damage?', answer: 'Yes. StormChecks provides forensic assessment for all types of storm damage including hail, wind, tornado, and water intrusion. Our team has extensive experience with Oklahoma\'s severe weather patterns and the resulting damage to commercial properties.' },
];

const articleSchema = { '@context': 'https://schema.org', '@type': 'Article', headline: 'Storm Damage Assessment in Oklahoma', description: 'Oklahoma storm damage assessment for commercial properties. Top 5 for hail, tornado risk, and severe weather.', author: { '@type': 'Organization', name: 'StormChecks' }, publisher: { '@type': 'Organization', name: 'StormChecks' } };
const localBusinessSchema = { '@context': 'https://schema.org', '@type': 'LocalBusiness', name: 'StormChecks — Oklahoma', description: 'Forensic building assessment for commercial properties in Oklahoma.', areaServed: { '@type': 'State', name: 'Oklahoma' } };

const StormDamageOklahoma: React.FC = () => {
  return (
    <SEOPageLayout
      title="Storm Damage Assessment in Oklahoma"
      subtitle="Oklahoma faces some of the most severe weather in the nation. StormChecks provides forensic building assessments for commercial property owners across the Sooner State."
      metaTitle="Storm Damage Assessment in Oklahoma | Commercial Property"
      metaDescription="Oklahoma storm damage assessment for commercial properties. Top 5 for hail and tornado risk. Free weather analysis. 5-year deadline."
      canonicalPath="/storm-damage-assessment-oklahoma"
      schemas={[articleSchema, localBusinessSchema, buildFAQSchema(faqs)]}
      breadcrumbs={[{ label: 'Oklahoma' }]}
    >
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6">Oklahoma: Where Hail Meets Tornado Alley</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Oklahoma is one of the most storm-active states in the nation. The state sits at the intersection of warm, moist Gulf air and cold continental air masses, producing severe thunderstorms, large hail, and tornadoes from spring through fall. Commercial property owners in Oklahoma face annual storm damage risk that requires proactive assessment.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-accent mb-2">Top 5</div>
                <p className="text-gray-600 text-sm">US state for severe storms</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-accent mb-2">80-100+</div>
                <p className="text-gray-600 text-sm">Hail events per year</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-accent mb-2">5 years</div>
                <p className="text-gray-600 text-sm">Claim filing deadline</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6">High-Risk Areas in Oklahoma</h2>
            <div className="space-y-4">
              {[
                { region: 'Oklahoma City Metro', desc: 'The OKC metro area is one of the most tornado-prone urban areas in the world. It also experiences frequent large hail events that damage commercial roofing, cladding, and mechanical systems across the metro.' },
                { region: 'Tulsa Metro', desc: 'Tulsa and northeastern Oklahoma face regular severe thunderstorms. The region\'s commercial and industrial property base sustains significant hail and wind damage each storm season.' },
                { region: 'Norman & Central Oklahoma', desc: 'Central Oklahoma, including Norman and Moore, sits directly in the path of severe weather systems moving through Tornado Alley. Supercell storms frequently produce damaging hail before spawning tornadoes.' },
                { region: 'Western Oklahoma', desc: 'Western Oklahoma experiences some of the state\'s most intense supercell storms with the largest hail. Commercial properties in this region face extreme exposure.' },
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
            <h2 className="text-3xl font-bold text-primary mb-6">Oklahoma-Specific Claim Considerations</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: '5-Year Filing Window', desc: 'Oklahoma provides a 5-year window for contract-based claims, giving property owners time to discover hidden damage. Forensic assessment within the first year produces the strongest evidence.' },
                { title: 'Tornado Damage Documentation', desc: 'Tornado damage creates complex claims involving wind, debris impact, and water intrusion from multiple directions. Forensic assessment documents each type of damage and its cause.' },
                { title: 'Multiple Event Seasons', desc: 'Oklahoma properties often sustain damage from several storms in a single season. Forensic assessment using weather data can differentiate damage by event for separate claims.' },
                { title: 'Insurance Market Conditions', desc: 'Oklahoma\'s high storm frequency has led some carriers to restrict coverage or increase deductibles. Understanding your policy\'s specific terms is essential before filing.' },
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
          { title: 'Storm Damage in Kansas', path: '/storm-damage-assessment-kansas', description: 'Kansas shares Oklahoma\'s Tornado Alley risk.' },
          { title: 'How to Identify Wind Damage', path: '/how-to-identify-wind-damage-commercial-buildings', description: 'Recognizing wind damage on commercial buildings.' },
        ]}
      />
    </SEOPageLayout>
  );
};

export default StormDamageOklahoma;
