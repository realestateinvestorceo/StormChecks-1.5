import React from 'react';
import SEOPageLayout from '../../components/seo/SEOPageLayout';
import FAQSection, { buildFAQSchema } from '../../components/seo/FAQSection';
import RelatedPages from '../../components/seo/RelatedPages';

const faqs = [
  {
    question: 'How long does the commercial property insurance claim process take?',
    answer: 'The timeline varies significantly depending on claim complexity and the carrier. Simple claims may resolve in 30-60 days. Complex commercial property claims with significant damage often take 6-18 months. Having thorough forensic documentation from the start can significantly shorten this timeline.',
  },
  {
    question: 'What is the appraisal process for insurance claims?',
    answer: 'The appraisal process is a dispute resolution mechanism built into most insurance policies. When you and the carrier disagree on the value of the loss, either party can invoke appraisal. Each side selects an appraiser, and the two appraisers select an umpire. The umpire makes a binding decision on the disputed amount.',
  },
  {
    question: 'Do I need an attorney for my commercial property claim?',
    answer: 'Not always, but it depends on the complexity and the carrier\'s response. If your claim is denied, significantly underpaid, or if the carrier is acting in bad faith, an attorney specializing in insurance claims can be valuable. Forensic documentation from StormChecks provides the evidence attorneys need to build a strong case.',
  },
  {
    question: 'What is the difference between ACV and RCV in insurance claims?',
    answer: 'ACV (Actual Cash Value) is the replacement cost minus depreciation. RCV (Replacement Cost Value) is the full cost to repair or replace without depreciation. Most commercial property policies are RCV, meaning you receive the full replacement cost — but the carrier may initially pay ACV and withhold depreciation until repairs are completed.',
  },
];

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Commercial Property Insurance Claim Process Guide',
  description: 'Complete guide to navigating the commercial property insurance claim process from initial filing through settlement.',
  author: { '@type': 'Organization', name: 'StormChecks' },
  publisher: { '@type': 'Organization', name: 'StormChecks' },
};

const InsuranceClaimProcessGuide: React.FC = () => {
  return (
    <SEOPageLayout
      title="Commercial Property Insurance Claim Process Guide"
      subtitle="A comprehensive guide to navigating every stage of the commercial property insurance claim — from first notice of loss through final settlement."
      metaTitle="Commercial Property Insurance Claim Process Guide"
      metaDescription="Complete guide to the commercial property insurance claim process. Learn each step from filing to settlement and how forensic documentation supports your claim."
      canonicalPath="/commercial-property-insurance-claim-process-guide"
      schemas={[articleSchema, buildFAQSchema(faqs)]}
      breadcrumbs={[{ label: 'Insurance Claim Process Guide' }]}
    >
      {/* Overview */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6">Understanding the Claim Process</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              The commercial property insurance claim process is complex and often adversarial. Insurance carriers have experienced teams handling claims every day — most property owners file a commercial claim only a few times in their career. Understanding the process, your rights, and the carrier's tactics puts you in a stronger position.
            </p>
            <p className="text-gray-600 leading-relaxed">
              This guide walks through each stage of the claim process for commercial property storm damage, from the initial discovery through final settlement.
            </p>
          </div>
        </div>
      </section>

      {/* Phase 1 */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary font-bold text-xl flex-shrink-0">1</div>
              <h2 className="text-3xl font-bold text-primary">First Notice of Loss (FNOL)</h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">
              The claim process begins when you notify your insurance carrier of the loss. This is called the First Notice of Loss, or FNOL. Contact your agent or carrier as soon as possible after discovering damage — most policies require prompt notification.
            </p>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-bold text-primary mb-3">What to include in your FNOL:</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2"><span className="text-accent font-bold">&#8226;</span> Date of the storm event</li>
                <li className="flex items-start gap-2"><span className="text-accent font-bold">&#8226;</span> General description of observed damage</li>
                <li className="flex items-start gap-2"><span className="text-accent font-bold">&#8226;</span> Property address and policy number</li>
                <li className="flex items-start gap-2"><span className="text-accent font-bold">&#8226;</span> Temporary repairs you have made to mitigate further damage</li>
                <li className="flex items-start gap-2"><span className="text-accent font-bold">&#8226;</span> Your contact information for the adjuster</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Phase 2 */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary font-bold text-xl flex-shrink-0">2</div>
              <h2 className="text-3xl font-bold text-primary">Carrier Inspection and Adjuster Visit</h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">
              The carrier will assign an adjuster to inspect your property. This may be a staff adjuster (employed by the carrier) or an independent adjuster (contracted by the carrier). Either way, the adjuster's primary obligation is to the insurance company.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              The adjuster will document what they believe is storm damage and create an estimate based on their findings. This estimate is often the starting point for disputes — carrier adjusters frequently undercount damaged areas, miss hidden damage, and use repair pricing below market rates.
            </p>
            <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-accent">
              <p className="text-primary font-semibold">
                This is where independent forensic documentation makes the biggest difference. Having your own assessment — completed by engineers who work for you, not the carrier — provides a counterpoint to the adjuster's findings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Phase 3 */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary font-bold text-xl flex-shrink-0">3</div>
              <h2 className="text-3xl font-bold text-primary">Review and Negotiate the Estimate</h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">
              Once the carrier provides their estimate, review it carefully against your independent forensic assessment. Common discrepancies include:
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-primary mb-3">Commonly Excluded by Carriers</h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>&#8226; Interior water damage from roof leaks</li>
                  <li>&#8226; Hidden moisture in wall systems</li>
                  <li>&#8226; Insulation replacement</li>
                  <li>&#8226; HVAC system impact</li>
                  <li>&#8226; Code upgrade requirements</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-primary mb-3">Commonly Undervalued by Carriers</h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>&#8226; Scope of roof damage area</li>
                  <li>&#8226; Material quality matching</li>
                  <li>&#8226; General contractor overhead and profit</li>
                  <li>&#8226; Temporary repair reimbursement</li>
                  <li>&#8226; Business interruption losses</li>
                </ul>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Submit your forensic assessment as a supplement to the claim. The carrier is required to consider additional evidence. Well-documented forensic findings are difficult for carriers to dismiss.
            </p>
          </div>
        </div>
      </section>

      {/* Phase 4 */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary font-bold text-xl flex-shrink-0">4</div>
              <h2 className="text-3xl font-bold text-primary">Dispute Resolution</h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">
              If negotiations stall, there are several paths to resolution. Most commercial property policies include an appraisal clause — a binding dispute resolution process that is faster and less expensive than litigation.
            </p>
            <div className="space-y-4">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-primary mb-2">Appraisal</h3>
                <p className="text-gray-600 text-sm">Each party selects an appraiser. The two appraisers select an umpire. The umpire makes a binding decision on the disputed amount. This process typically resolves in 30-90 days.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-primary mb-2">Mediation</h3>
                <p className="text-gray-600 text-sm">A neutral mediator facilitates negotiations between you and the carrier. Non-binding but often effective. Some states require mediation before litigation.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-primary mb-2">Litigation</h3>
                <p className="text-gray-600 text-sm">Filing a lawsuit is the last resort. It is the most expensive and time-consuming option but may be necessary if the carrier is acting in bad faith. Forensic documentation is essential evidence in litigation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Phase 5 */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary font-bold text-xl flex-shrink-0">5</div>
              <h2 className="text-3xl font-bold text-primary">Settlement and Recovery</h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">
              Once an agreement is reached, the carrier issues payment. For Replacement Cost Value (RCV) policies, the carrier may initially pay the Actual Cash Value (ACV) — the replacement cost minus depreciation. The remaining depreciation (called "recoverable depreciation") is paid after repairs are completed and documented.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Make sure repairs are completed by qualified contractors and documented thoroughly. The carrier will require proof that repairs were made before releasing the recoverable depreciation holdback.
            </p>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <RelatedPages
        pages={[
          { title: 'Why Insurance Claims Get Denied', path: '/why-commercial-property-insurance-claims-get-denied', description: 'The most common reasons commercial property claims are denied and how to avoid them.' },
          { title: 'What to Do After Storm Damage', path: '/what-to-do-after-storm-damage-commercial-property', description: 'Step-by-step guide for the critical first 48 hours after storm damage.' },
          { title: 'State-by-State Filing Deadlines', path: '/state-by-state-insurance-claim-filing-deadlines', description: 'Know your state\'s deadline for filing commercial property insurance claims.' },
        ]}
      />
    </SEOPageLayout>
  );
};

export default InsuranceClaimProcessGuide;
