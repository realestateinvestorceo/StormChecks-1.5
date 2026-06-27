import React from 'react';
import SEOPageLayout from '../../components/seo/SEOPageLayout';
import ComparisonTable from '../../components/seo/ComparisonTable';
import FAQSection, { buildFAQSchema } from '../../components/seo/FAQSection';
import RelatedPages from '../../components/seo/RelatedPages';

const faqs = [
  {
    question: 'Who does the insurance adjuster work for?',
    answer: 'The insurance adjuster — whether a staff adjuster or an independent adjuster hired by the carrier — works for the insurance company. Their role is to evaluate the claim and produce a report that serves the carrier\'s interests. This does not mean they are dishonest, but their incentives are aligned with minimizing the carrier\'s payout.',
  },
  {
    question: 'What is a public adjuster and how is it different from a forensic consultant?',
    answer: 'A public adjuster is licensed to negotiate insurance claims on behalf of policyholders. They handle claim management and settlement negotiations. A forensic building consultant provides the technical documentation — engineering analysis, testing data, and evidence — that supports the claim. They serve complementary roles.',
  },
  {
    question: 'Can I refuse the insurance adjuster\'s estimate?',
    answer: 'Yes. You are not required to accept the carrier adjuster\'s estimate. You can supplement the claim with additional evidence, such as a forensic assessment report, and negotiate for a higher settlement. If negotiations fail, most policies include an appraisal clause for binding dispute resolution.',
  },
  {
    question: 'How much more damage does an independent assessment typically find?',
    answer: 'StormChecks forensic assessments routinely identify 2-5x more damage than carrier adjuster reports. This is because forensic assessments use testing equipment and methodologies that detect hidden damage — moisture intrusion, compromised insulation, membrane fractures — that visual-only inspections miss.',
  },
];

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Independent Assessment vs Insurance Adjuster for Commercial Property Claims',
  description: 'Understand the differences between independent forensic assessments and insurance adjuster inspections for commercial property storm damage claims.',
  author: { '@type': 'Organization', name: 'StormChecks' },
  publisher: { '@type': 'Organization', name: 'StormChecks' },
};

const IndependentVsInsuranceAdjuster: React.FC = () => {
  return (
    <SEOPageLayout
      title="Independent Assessment vs. Insurance Adjuster"
      subtitle="Why the adjuster who works for your insurance company may not be documenting the full extent of your property damage."
      metaTitle="Independent Assessment vs Insurance Adjuster | Commercial Property"
      metaDescription="Compare independent forensic assessments with insurance adjuster inspections. Learn why independent assessments find 2-5x more damage and improve claim outcomes."
      canonicalPath="/independent-assessment-vs-insurance-adjuster"
      schemas={[articleSchema, buildFAQSchema(faqs)]}
      breadcrumbs={[{ label: 'Independent Assessment vs Insurance Adjuster' }]}
    >
      {/* Overview */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6">Understanding Who Is On Your Side</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              After you file a commercial property insurance claim, the carrier sends an adjuster to inspect your property. Many property owners assume this adjuster is there to help them — to identify all the damage and ensure they receive fair compensation. The reality is different.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The carrier's adjuster works for the insurance company. Their job is to evaluate the claim in a way that serves the carrier's financial interests. This is why an independent forensic assessment — one conducted by professionals who work for you — produces dramatically different results.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Side-by-Side Comparison</h2>
            <ComparisonTable
              headers={['Feature', 'Insurance Adjuster', 'Independent Forensic Assessment']}
              rows={[
                { feature: 'Works For', values: ['Insurance carrier', 'Property owner'] },
                { feature: 'Primary Goal', values: ['Evaluate and manage claim liability', 'Identify all damage and support recovery'] },
                { feature: 'Inspection Method', values: ['Visual walkthrough', 'Engineering-based with testing'] },
                { feature: 'Time Spent on Site', values: ['1-3 hours typical', '1-3 days typical'] },
                { feature: 'Hidden Damage Detection', values: [false, true] },
                { feature: 'Thermal Imaging', values: [false, true] },
                { feature: 'Moisture Testing', values: ['Rarely', 'Standard practice'] },
                { feature: 'Weather Data Analysis', values: ['Basic', 'Forensic-grade correlation'] },
                { feature: 'Causation Analysis', values: ['Favorable to carrier', 'Evidence-based and independent'] },
                { feature: 'Typical Damage Found', values: ['Surface damage only', 'Surface + hidden damage (2-5x more)'] },
                { feature: 'Report Can Be Used in Appraisal', values: ['By the carrier', 'By the property owner'] },
                { feature: 'Cost to Property Owner', values: ['$0 (paid by carrier)', '$0 (no upfront cost at StormChecks)'] },
              ]}
              caption="Comparison of insurance adjuster inspection vs. independent forensic assessment for commercial storm damage"
            />
          </div>
        </div>
      </section>

      {/* Why Adjusters Miss Damage */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6">Why Insurance Adjusters Miss Damage</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Insurance adjusters are not necessarily incompetent or dishonest. But their process is structurally designed to minimize claim payouts:
            </p>
            <div className="space-y-4">
              {[
                { title: 'Limited Time', desc: 'Carrier adjusters handle large caseloads. A typical commercial property inspection takes 1-3 hours — not enough time to conduct testing or investigate hidden damage.' },
                { title: 'Visual-Only Methodology', desc: 'Most carrier adjusters rely on visual inspection only. They do not bring thermal cameras, moisture meters, or core sampling equipment. If damage is not visible from the surface, it goes unrecorded.' },
                { title: 'Scope Limitations', desc: 'Adjusters often focus narrowly on the area of obvious damage. They may inspect the roof but skip interior spaces, mechanical systems, or building envelope components affected by the same storm.' },
                { title: 'Pre-existing vs. Storm Damage', desc: 'Adjusters frequently attribute damage to pre-existing conditions, wear and tear, or maintenance issues rather than the covered storm event. Without forensic testing to prove otherwise, the carrier\'s characterization stands.' },
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Real World Impact */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6">The Real-World Impact</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              The gap between what a carrier adjuster finds and what a forensic assessment reveals can be significant. Property owners who rely solely on the carrier's assessment may not capture the full documented scope of their loss.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-primary mb-4">Example: Denver Industrial Property</h3>
                <p className="text-gray-600 text-sm mb-2">Carrier adjuster estimate: <span className="font-bold">$30,000</span></p>
                <p className="text-gray-600 text-sm mb-2">StormChecks forensic assessment: <span className="font-bold text-accent">$730,000</span></p>
                <p className="text-gray-600 text-sm">Difference: <span className="font-bold text-green-600">$700,000 in additional damage identified</span></p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-primary mb-4">Example: Beaufort Self-Storage</h3>
                <p className="text-gray-600 text-sm mb-2">Carrier adjuster estimate: <span className="font-bold">$0 (claim denied)</span></p>
                <p className="text-gray-600 text-sm mb-2">StormChecks forensic assessment: <span className="font-bold text-accent">$3,900,000</span></p>
                <p className="text-gray-600 text-sm">Difference: <span className="font-bold text-green-600">$3.9M in damage the carrier denied entirely</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <RelatedPages
        pages={[
          { title: 'Forensic Assessment vs. Standard Inspection', path: '/forensic-assessment-vs-standard-inspection', description: 'Compare the methodology and outcomes of forensic assessment vs. standard inspection.' },
          { title: 'Why Insurance Claims Get Denied', path: '/why-commercial-property-insurance-claims-get-denied', description: 'The top reasons commercial property claims are denied and how to prevent it.' },
          { title: 'Insurance Claim Process Guide', path: '/commercial-property-insurance-claim-process-guide', description: 'Navigate the full commercial property insurance claim process from start to settlement.' },
        ]}
      />
    </SEOPageLayout>
  );
};

export default IndependentVsInsuranceAdjuster;
