import React from 'react';
import SEOPageLayout from '../../components/seo/SEOPageLayout';
import FAQSection, { buildFAQSchema } from '../../components/seo/FAQSection';
import RelatedPages from '../../components/seo/RelatedPages';

const faqs = [
  {
    question: 'What storm damage risks are specific to office buildings?',
    answer: 'Office buildings have extensive glazing systems, flat membrane roofs often with multiple levels, sophisticated HVAC systems, and tenant-finished interior spaces with high-value finishes. Water intrusion from roof or envelope damage can destroy ceiling systems, carpeting, millwork, and electronic equipment across multiple floors.',
  },
  {
    question: 'How does storm damage affect office building tenants?',
    answer: 'Storm damage that causes leaks, HVAC failure, or building closures directly disrupts office tenant operations. This can trigger lease provisions for rent abatement, relocation expenses, and potential early termination. The total claim value includes both property damage and the financial impact on rental income.',
  },
  {
    question: 'Are office building curtain wall systems vulnerable to storm damage?',
    answer: 'Yes. Curtain wall and window wall systems are vulnerable to wind pressure, hail impact, and wind-driven rain infiltration. Damaged seals, cracked glazing, and displaced gaskets allow water into the building envelope and interior spaces. Curtain wall repairs are expensive and often require specialized contractors.',
  },
  {
    question: 'What interior damage should I look for after a storm?',
    answer: 'Look for ceiling tile staining or sagging, wet carpet or flooring, wall staining especially around windows, HVAC malfunction, electrical issues, and standing water in mechanical rooms or stairwells. Interior damage often indicates more extensive hidden damage in the building envelope above.',
  },
];

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Storm Damage Assessment for Office Buildings',
  description: 'Learn about storm damage risks for commercial office buildings and how forensic assessment helps office property owners maximize insurance recovery.',
  author: { '@type': 'Organization', name: 'StormChecks' },
  publisher: { '@type': 'Organization', name: 'StormChecks' },
};

const StormDamageOfficeBuildings: React.FC = () => {
  return (
    <SEOPageLayout
      title="Storm Damage Assessment for Office Buildings"
      subtitle="Office buildings face distinct storm damage challenges. High-value interiors, sophisticated building systems, and tenant relationships make thorough forensic assessment critical."
      metaTitle="Storm Damage Assessment for Office Buildings"
      metaDescription="Storm damage assessment for commercial office buildings. Learn about unique risks and how forensic assessment maximizes insurance claim recovery."
      canonicalPath="/storm-damage-assessment-office-buildings"
      schemas={[articleSchema, buildFAQSchema(faqs)]}
      breadcrumbs={[{ label: 'Office Buildings' }]}
    >
      {/* Office Challenges */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6">Storm Damage and Office Properties</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Commercial office buildings — from suburban office parks to multi-story downtown towers — present unique storm damage assessment challenges. The combination of sophisticated building envelope systems, high-value tenant improvements, and complex mechanical infrastructure means that storm damage is both harder to fully identify and more expensive when it occurs.
            </p>
            <p className="text-gray-600 leading-relaxed">
              A carrier adjuster's surface inspection of an office building often captures only a fraction of the total damage. The most expensive impacts — water damage to tenant spaces, HVAC contamination, curtain wall seal failure, and insulation compromise — require forensic investigation to identify.
            </p>
          </div>
        </div>
      </section>

      {/* Common Damage */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8">Common Storm Damage on Office Buildings</h2>
            <div className="space-y-4">
              {[
                { title: 'Roof Membrane and Insulation', desc: 'Office building roofs are typically flat membrane systems (TPO, EPDM, or modified bitumen). Hail and wind damage to the membrane allows moisture into the insulation layer, reducing energy efficiency and creating conditions for mold growth.' },
                { title: 'Curtain Wall and Glazing Systems', desc: 'Multi-story office buildings often use curtain wall or window wall systems. These are vulnerable to wind pressure differentials, hail impact on glazing, and seal degradation from storm stress. Failed seals allow water infiltration into occupied spaces.' },
                { title: 'Interior Water Damage', desc: 'Roof leaks cascade through office buildings, damaging ceiling grids, light fixtures, carpeting, millwork, and tenant equipment floor by floor. A single roof penetration failure can affect multiple stories.' },
                { title: 'HVAC Systems', desc: 'Office building HVAC systems — rooftop units, air handlers, cooling towers, and ductwork — are exposed to hail and wind. Damaged HVAC affects indoor air quality, temperature control, and energy costs across the building.' },
                { title: 'Building Envelope Penetrations', desc: 'Exhaust vents, fresh air intakes, plumbing vents, and electrical penetrations through the roof are vulnerable failure points during storms. Each compromised penetration is a water entry path.' },
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* High-Value Interiors */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6">The High-Value Interior Challenge</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Office buildings have high-value interior finishes that are expensive to replace. Class A office space typically includes premium ceiling systems, custom lighting, built-in millwork, stone or tile floors, and sophisticated audiovisual installations. When water from storm damage reaches these spaces, the repair costs escalate rapidly.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: 'Ceiling Systems', desc: 'Acoustic ceiling tiles, grid systems, and recessed lighting are among the first casualties of roof leaks. Even minor water exposure requires replacement for aesthetic and performance reasons.' },
                { title: 'Flooring', desc: 'Carpet, carpet tile, hardwood, and stone flooring absorb water quickly. Wet subflooring can develop mold within 48-72 hours if not addressed.' },
                { title: 'Millwork and Cabinetry', desc: 'Built-in cabinetry, reception desks, conference room millwork, and other wood components swell, warp, and delaminate when exposed to moisture.' },
                { title: 'Technology Infrastructure', desc: 'Server rooms, networking equipment, and in-ceiling technology are sensitive to moisture. Even minor exposure can cause corrosion and premature failure.' },
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

      {/* Why Forensic Assessment */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6">Why Office Buildings Need Forensic Assessment</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              The complexity of office building systems means that storm damage often creates cascading effects that are difficult to identify without forensic methodology. A compromised roof membrane leads to wet insulation, which leads to ceiling damage, which leads to mold in the plenum space — each layer adding cost.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              StormChecks forensic assessments for office buildings include thermal imaging of the roof and building envelope, moisture mapping of all levels, HVAC system evaluation, and comprehensive interior damage documentation — everything needed to support a complete claim.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white p-6 rounded-lg text-center border border-gray-200">
                <div className="text-3xl font-bold text-accent mb-2">$10B+</div>
                <p className="text-gray-600 text-sm">In property damage assessed</p>
              </div>
              <div className="bg-white p-6 rounded-lg text-center border border-gray-200">
                <div className="text-3xl font-bold text-accent mb-2">$0</div>
                <p className="text-gray-600 text-sm">Upfront cost for assessment</p>
              </div>
              <div className="bg-white p-6 rounded-lg text-center border border-gray-200">
                <div className="text-3xl font-bold text-accent mb-2">2-5x</div>
                <p className="text-gray-600 text-sm">More damage identified vs. carrier adjusters</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <RelatedPages
        pages={[
          { title: 'Retail Center Storm Damage', path: '/storm-damage-assessment-retail-centers', description: 'Storm damage challenges unique to retail properties and shopping centers.' },
          { title: 'Industrial Property Storm Damage', path: '/storm-damage-assessment-industrial-properties', description: 'Storm damage assessment for warehouses and manufacturing facilities.' },
          { title: 'What to Do After Storm Damage', path: '/what-to-do-after-storm-damage-commercial-property', description: 'Step-by-step guide for commercial property owners after a storm.' },
        ]}
      />
    </SEOPageLayout>
  );
};

export default StormDamageOfficeBuildings;
