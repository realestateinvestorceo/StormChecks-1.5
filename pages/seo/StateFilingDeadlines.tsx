import React from 'react';
import SEOPageLayout from '../../components/seo/SEOPageLayout';
import FAQSection, { buildFAQSchema } from '../../components/seo/FAQSection';
import RelatedPages from '../../components/seo/RelatedPages';

const faqs = [
  {
    question: 'What happens if I miss my state\'s insurance claim filing deadline?',
    answer: 'If you miss the statute of limitations for filing a property insurance claim, you lose the legal right to recover for that loss. The insurance carrier can deny the claim solely based on late filing, regardless of how legitimate or severe the damage is. This is why prompt action and forensic documentation are critical.',
  },
  {
    question: 'Does the filing deadline start from the date of the storm or the date I discovered damage?',
    answer: 'This varies by state. Some states start the clock from the "date of loss" (the storm date). Others use the "discovery rule," which starts the clock from when the damage was discovered or reasonably should have been discovered. Forensic assessment can help establish the discovery date for hidden damage.',
  },
  {
    question: 'Do filing deadlines differ for commercial vs. residential properties?',
    answer: 'The statute of limitations generally applies the same to commercial and residential property claims within a given state. However, commercial policies may have additional contractual deadlines (like prompt notification requirements) that are shorter than the state statute. Always check both your policy and state law.',
  },
  {
    question: 'Can I file a claim for storm damage that happened years ago?',
    answer: 'Possibly, depending on your state\'s statute of limitations and whether the discovery rule applies. If hidden damage from a past storm is just now being discovered, some states allow filing from the date of discovery. A forensic assessment can document when damage likely occurred and when it was reasonably discoverable.',
  },
];

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'State-by-State Insurance Claim Filing Deadlines',
  description: 'Know your state\'s deadline for filing commercial property insurance claims. Filing deadlines vary from 1 to 10 years depending on the state.',
  author: { '@type': 'Organization', name: 'StormChecks' },
  publisher: { '@type': 'Organization', name: 'StormChecks' },
};

const StateFilingDeadlines: React.FC = () => {
  return (
    <SEOPageLayout
      title="State-by-State Insurance Claim Filing Deadlines"
      subtitle="Know your state's statute of limitations for filing commercial property insurance claims — missing the deadline can cost you everything."
      metaTitle="State-by-State Insurance Claim Filing Deadlines"
      metaDescription="Know your state's deadline for filing commercial property insurance claims. Filing deadlines vary by state. Don't lose your right to recover."
      canonicalPath="/state-by-state-insurance-claim-filing-deadlines"
      schemas={[articleSchema, buildFAQSchema(faqs)]}
      breadcrumbs={[{ label: 'State-by-State Filing Deadlines' }]}
    >
      {/* Overview */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6">Don't Lose Your Right to Recover</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Every state sets its own statute of limitations for filing property insurance claims. Miss this deadline, and you lose the right to recover — no matter how severe the damage. For commercial property owners with portfolios across multiple states, tracking these deadlines is critical.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The table below lists filing deadlines for the states where StormChecks most commonly works. These are general guidelines — your specific policy may have additional contractual deadlines. Always consult with a qualified professional about your specific situation.
            </p>
          </div>
        </div>
      </section>

      {/* Deadlines Table */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Filing Deadlines by State</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <caption className="text-sm text-gray-500 mb-4 text-left">
                  Property insurance claim filing deadlines for states with frequent storm activity. Deadlines are subject to change and may vary by policy type. Consult with a professional for your specific situation.
                </caption>
                <thead>
                  <tr>
                    <th scope="col" className="px-4 py-4 text-sm font-bold uppercase tracking-wider border-b-2 border-gray-200 bg-gray-100 text-gray-700">State</th>
                    <th scope="col" className="px-4 py-4 text-sm font-bold uppercase tracking-wider border-b-2 border-gray-200 bg-gray-100 text-gray-700">Statute of Limitations</th>
                    <th scope="col" className="px-4 py-4 text-sm font-bold uppercase tracking-wider border-b-2 border-gray-200 bg-gray-100 text-gray-700">Discovery Rule</th>
                    <th scope="col" className="px-4 py-4 text-sm font-bold uppercase tracking-wider border-b-2 border-gray-200 bg-gray-100 text-gray-700">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { state: 'Texas', limit: '2 years', discovery: 'Yes (limited)', notes: 'Prompt notice required per policy. Hail/wind most common claim type.' },
                    { state: 'Colorado', limit: '2 years', discovery: 'Yes', notes: 'Discovery rule may extend deadline for hidden damage.' },
                    { state: 'Kansas', limit: '5 years', discovery: 'Yes', notes: 'Longer deadline, but prompt notice still required by policy.' },
                    { state: 'Oklahoma', limit: '5 years', discovery: 'Yes', notes: 'One of the longest filing windows in the country.' },
                    { state: 'Nebraska', limit: '5 years', discovery: 'Yes', notes: 'Applies to contract-based claims (insurance policies).' },
                    { state: 'Missouri', limit: '5 years', discovery: 'Yes', notes: 'Written contract statute of limitations applies.' },
                    { state: 'Minnesota', limit: '6 years', discovery: 'Yes', notes: 'Among the longest filing deadlines nationally.' },
                    { state: 'North Carolina', limit: '3 years', discovery: 'Yes', notes: 'Breach of contract standard applies.' },
                    { state: 'Florida', limit: '3 years', discovery: 'Yes', notes: 'Recently shortened from 5 years. Separate hurricane provisions.' },
                    { state: 'Georgia', limit: '6 years', discovery: 'Yes', notes: 'Written contract statute applies to insurance claims.' },
                    { state: 'Alabama', limit: '6 years', discovery: 'Yes', notes: 'Contract-based claims have longer deadlines.' },
                    { state: 'South Carolina', limit: '3 years', discovery: 'Yes', notes: 'Hurricane-prone area with separate wind provisions in some policies.' },
                    { state: 'Tennessee', limit: '6 years', discovery: 'Yes', notes: 'Written contract statute of limitations.' },
                    { state: 'Iowa', limit: '10 years', discovery: 'Yes', notes: 'One of the longest filing deadlines in the US.' },
                    { state: 'Arkansas', limit: '5 years', discovery: 'Yes', notes: 'Written contract statute applies.' },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <th scope="row" className="px-4 py-4 font-semibold text-primary text-sm border-b border-gray-100">{row.state}</th>
                      <td className="px-4 py-4 text-sm border-b border-gray-100 text-gray-600">{row.limit}</td>
                      <td className="px-4 py-4 text-sm border-b border-gray-100 text-gray-600">{row.discovery}</td>
                      <td className="px-4 py-4 text-sm border-b border-gray-100 text-gray-600">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6">Important Considerations</h2>
            <div className="space-y-4">
              {[
                { title: 'Policy Notification Deadlines', desc: 'In addition to state statutes, your insurance policy likely has its own notification requirement — often "prompt" or "as soon as practicable." This is typically interpreted as 30-90 days. Failure to provide timely notice can be grounds for denial even within the state statute period.' },
                { title: 'The Discovery Rule', desc: 'Many states apply a "discovery rule" that starts the filing clock when damage was discovered or reasonably should have been discovered. This is particularly relevant for hidden storm damage that may not become apparent until months or years after the event. Forensic assessment helps establish discovery timing.' },
                { title: 'Multiple Storm Events', desc: 'If your property has been hit by multiple storms, each event has its own filing deadline. Forensic assessment can help differentiate damage by event date using weather data correlation — critical for establishing which deadline applies to which damage.' },
                { title: 'Tolling and Extensions', desc: 'Some states toll (pause) the statute of limitations under certain circumstances, such as during a declared state of emergency. Check with a legal professional about whether any tolling provisions apply to your situation.' },
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

      {/* CTA */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-6">Don't Wait Until It's Too Late</h2>
            <p className="text-gray-600 leading-relaxed mb-6 max-w-2xl mx-auto">
              StormChecks provides free weather exposure analysis for your commercial properties. We monitor storm activity at your locations and alert you when assessment is warranted — helping you act before filing deadlines pass.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white p-6 rounded-lg text-center border border-gray-200">
                <div className="text-3xl font-bold text-accent mb-2">Free</div>
                <p className="text-gray-600 text-sm">Weather exposure analysis</p>
              </div>
              <div className="bg-white p-6 rounded-lg text-center border border-gray-200">
                <div className="text-3xl font-bold text-accent mb-2">$0</div>
                <p className="text-gray-600 text-sm">Upfront cost for assessment</p>
              </div>
              <div className="bg-white p-6 rounded-lg text-center border border-gray-200">
                <div className="text-3xl font-bold text-accent mb-2">24/7</div>
                <p className="text-gray-600 text-sm">Ongoing storm monitoring</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <RelatedPages
        pages={[
          { title: 'Why Insurance Claims Get Denied', path: '/why-commercial-property-insurance-claims-get-denied', description: 'Late filing is a top reason for claim denials. Learn the other reasons and how to prevent them.' },
          { title: 'Insurance Claim Process Guide', path: '/commercial-property-insurance-claim-process-guide', description: 'Navigate the full commercial property insurance claim process from filing to settlement.' },
          { title: 'What to Do After Storm Damage', path: '/what-to-do-after-storm-damage-commercial-property', description: 'Step-by-step guide for the critical first steps after storm damage.' },
        ]}
      />
    </SEOPageLayout>
  );
};

export default StateFilingDeadlines;
