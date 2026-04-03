import React from 'react';
import SEOPageLayout from '../../components/seo/SEOPageLayout';
import FAQSection, { buildFAQSchema } from '../../components/seo/FAQSection';
import RelatedPages from '../../components/seo/RelatedPages';

const faqs = [
  {
    question: 'How quickly should I act after storm damage to my commercial property?',
    answer: 'You should begin documentation within 24-48 hours. Most commercial property insurance policies require prompt notification, and evidence of damage can deteriorate rapidly due to weather exposure and temporary repairs. Early forensic documentation preserves critical evidence for your claim.',
  },
  {
    question: 'Should I make temporary repairs before the insurance adjuster arrives?',
    answer: 'Yes — you have a duty to mitigate further damage. Make temporary repairs (tarping a roof, boarding windows) and document everything with photos and receipts. Do not make permanent repairs until the damage has been properly assessed and documented.',
  },
  {
    question: 'What does a forensic building assessment include?',
    answer: 'A forensic assessment includes detailed interior and exterior inspection, moisture testing, thermal imaging, photographic documentation of all damage, weather data correlation, material analysis, and a comprehensive report with repair cost estimates backed by engineering standards.',
  },
  {
    question: 'How much does a StormChecks assessment cost?',
    answer: 'StormChecks provides a free initial weather exposure analysis for your property. Our forensic assessments are contingency-based — there is no upfront cost to the property owner. We only get paid when your claim is successfully resolved.',
  },
  {
    question: 'What if my insurance company already sent an adjuster?',
    answer: 'Insurance adjusters work for the insurance company, not for you. An independent forensic assessment typically identifies 2-5x more damage than carrier adjusters document. Having independent documentation strengthens your position and helps ensure you receive the full settlement you are entitled to.',
  },
];

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'What to Do After Storm Damage to Your Commercial Property',
  description: 'Step-by-step guide for commercial property owners after storm damage. Learn how to protect your property, document damage, and maximize your insurance claim.',
  author: { '@type': 'Organization', name: 'StormChecks' },
  publisher: { '@type': 'Organization', name: 'StormChecks' },
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'What to Do After Storm Damage to Your Commercial Property',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Ensure Safety', text: 'Secure the property and ensure no one enters damaged areas until it is safe.' },
    { '@type': 'HowToStep', position: 2, name: 'Document Everything', text: 'Take photos and videos of all visible damage before any cleanup or repairs.' },
    { '@type': 'HowToStep', position: 3, name: 'Make Temporary Repairs', text: 'Prevent further damage with tarps, boards, and temporary fixes. Save all receipts.' },
    { '@type': 'HowToStep', position: 4, name: 'Notify Your Insurance Carrier', text: 'File your claim promptly. Most policies have strict notification deadlines.' },
    { '@type': 'HowToStep', position: 5, name: 'Get an Independent Forensic Assessment', text: 'Hire a forensic building consultant to document all damage with professional standards.' },
  ],
};

const WhatToDoAfterStormDamage: React.FC = () => {
  return (
    <SEOPageLayout
      title="What to Do After Storm Damage to Your Commercial Property"
      subtitle="A step-by-step guide to protecting your property, preserving evidence, and maximizing your insurance claim after storm damage."
      metaTitle="What to Do After Storm Damage to Your Commercial Property"
      metaDescription="Step-by-step guide for commercial property owners after storm damage. Protect your property, document damage, and maximize your claim."
      canonicalPath="/what-to-do-after-storm-damage-commercial-property"
      schemas={[articleSchema, howToSchema, buildFAQSchema(faqs)]}
      breadcrumbs={[{ label: 'What to Do After Storm Damage' }]}
    >
      {/* Step 1 */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6">Step 1: Ensure Safety and Secure the Property</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Your first priority is safety. Keep employees, tenants, and visitors away from damaged areas. If there is structural damage, do not enter the building until a qualified professional has confirmed it is safe. Contact emergency services if there are downed power lines, gas leaks, or other hazards.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Secure the perimeter to prevent unauthorized access. Damaged commercial buildings attract theft and vandalism, and you are responsible for maintaining a safe premises even after storm damage.
            </p>
          </div>
        </div>
      </section>

      {/* Step 2 */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6">Step 2: Document All Visible Damage Immediately</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Before any cleanup or temporary repairs begin, photograph and video record every area of damage. Use a systematic approach — start at the roof and work down, covering all four sides of the building, all interior spaces, and all mechanical systems.
            </p>
            <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
              <h3 className="font-bold text-primary mb-4">What to Document</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2"><span className="text-accent font-bold mt-1">&#8226;</span> Roof damage: missing shingles, punctures, lifted flashing, damaged membrane</li>
                <li className="flex items-start gap-2"><span className="text-accent font-bold mt-1">&#8226;</span> Exterior: siding damage, broken windows, dented gutters, fascia damage</li>
                <li className="flex items-start gap-2"><span className="text-accent font-bold mt-1">&#8226;</span> Interior: water stains, ceiling damage, wet insulation, floor damage</li>
                <li className="flex items-start gap-2"><span className="text-accent font-bold mt-1">&#8226;</span> Mechanical: HVAC units, electrical panels, plumbing exposed to elements</li>
                <li className="flex items-start gap-2"><span className="text-accent font-bold mt-1">&#8226;</span> Landscaping and signage: fallen trees, damaged parking lots, sign damage</li>
              </ul>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Timestamp all photos and include wide-angle context shots alongside close-up detail shots. This initial documentation becomes critical evidence if your claim is disputed.
            </p>
          </div>
        </div>
      </section>

      {/* Step 3 */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6">Step 3: Make Temporary Repairs to Prevent Further Damage</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Your insurance policy requires you to mitigate further damage. This means making reasonable temporary repairs — tarping damaged roofs, boarding broken windows, and removing standing water. Keep every receipt and document the temporary repairs with photos.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Do <strong>not</strong> make permanent repairs until the damage has been fully assessed and your insurance carrier has been notified. Permanent repairs before documentation can destroy evidence and give the insurer grounds to reduce or deny your claim.
            </p>
            <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-accent">
              <p className="text-primary font-semibold">
                Important: The hidden damage beneath the surface — moisture in wall cavities, compromised insulation, micro-fractures in roofing membrane — often costs $10-15 per square foot to repair and is easily missed without professional assessment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Step 4 */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6">Step 4: Notify Your Insurance Carrier Promptly</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Contact your insurance company as soon as possible. Most commercial property policies have strict notification requirements — some as short as 30 days. Late notification is one of the most common reasons claims are denied.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              When you file, provide only the facts: date of the storm, general description of damage observed, and steps you have taken to mitigate further damage. Do not speculate on repair costs or the cause of damage — that is what the assessment process is for.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Keep a record of every communication with your insurer — date, time, who you spoke with, and what was discussed. This paper trail becomes essential if the claim is later disputed.
            </p>
          </div>
        </div>
      </section>

      {/* Step 5 */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6">Step 5: Get an Independent Forensic Building Assessment</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              The insurance company will send their own adjuster — but that adjuster works for the carrier, not for you. Their goal is to minimize the payout. An independent forensic building assessment provides documentation that represents your interests.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              StormChecks forensic assessments routinely identify 2-5x more damage than carrier adjusters document. Our team has assessed over $10 billion in commercial property damage, and our reports are built to withstand scrutiny from carriers, appraisers, and legal counsel.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-accent mb-2">$10B+</div>
                <p className="text-gray-600 text-sm">In property damage assessed by our team</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-accent mb-2">2-5x</div>
                <p className="text-gray-600 text-sm">More damage identified vs. carrier adjusters</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-accent mb-2">$0</div>
                <p className="text-gray-600 text-sm">Upfront cost for property owners</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6">Common Mistakes Property Owners Make After Storm Damage</h2>
            <div className="space-y-4">
              {[
                { title: 'Waiting too long to document', desc: 'Evidence deteriorates quickly. Rain, sun, and temporary repairs can obscure damage within days.' },
                { title: 'Relying solely on the insurance adjuster', desc: 'Carrier adjusters are trained to minimize payouts. Independent documentation levels the playing field.' },
                { title: 'Making permanent repairs too early', desc: 'Once damage is repaired, the evidence is gone. Always get a full assessment before permanent work begins.' },
                { title: 'Not checking for hidden damage', desc: 'Surface-level inspections miss moisture intrusion, compromised insulation, and structural issues that cost thousands to fix later.' },
                { title: 'Missing filing deadlines', desc: 'Every state has different claim filing deadlines. Missing yours can mean losing your right to recover entirely.' },
              ].map((mistake, i) => (
                <div key={i} className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="font-bold text-primary mb-2">{mistake.title}</h3>
                  <p className="text-gray-600">{mistake.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <RelatedPages
        pages={[
          { title: 'Hidden Cost of Undetected Storm Damage', path: '/hidden-cost-of-undetected-storm-damage', description: 'Learn why surface-level inspections miss thousands in damage and how forensic assessment finds it.' },
          { title: 'Why Insurance Claims Get Denied', path: '/why-commercial-property-insurance-claims-get-denied', description: 'The most common reasons commercial property claims are denied and how to avoid them.' },
          { title: 'Insurance Claim Process Guide', path: '/commercial-property-insurance-claim-process-guide', description: 'A comprehensive guide to navigating the commercial property insurance claim process.' },
        ]}
      />
    </SEOPageLayout>
  );
};

export default WhatToDoAfterStormDamage;
