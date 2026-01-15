import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary py-16 md:py-24 relative overflow-hidden text-white">
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute -right-[10%] -top-[10%] w-[600px] h-[600px] bg-white opacity-[0.03] rounded-full blur-3xl"></div>
          <div className="absolute right-[5%] top-[25%] w-[400px] h-[400px] bg-accent opacity-[0.04] rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-gray-400 font-medium uppercase tracking-widest text-sm">
            Effective Date: January 15, 2026
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="prose prose-slate max-w-none text-gray-700 leading-relaxed space-y-8">
            
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">Agreement to Terms</h2>
              <p>
                These Terms of Service ("Terms") govern your access to and use of the StormChecks website, platform, and services (collectively, the "Services"). By using our Services, you agree to these Terms. If you do not agree, do not use our Services.
              </p>
              <p className="mt-4">
                StormChecks reserves the right to modify these Terms at any time. We will notify you of material changes via email or website notice. Continued use after changes become effective constitutes acceptance.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">Who We Are</h2>
              <p>
                <strong>StormChecks</strong> is a commercial insurance monitoring and building consultancy firm. We combine forensic engineering, meteorological intelligence, and building consulting to help commercial property owners identify, document, and recover from storm damage.
              </p>
              <div className="mt-6 grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                  <h3 className="font-bold text-primary mb-2">What We Do</h3>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Monitor commercial properties for storm exposure</li>
                    <li>Conduct forensic inspections by licensed engineers</li>
                    <li>Build documentation packages for property damage</li>
                    <li>Connect property owners with vetted public adjusters</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-6 rounded-lg border border-red-100">
                  <h3 className="font-bold text-red-900 mb-2">What We Do NOT Do</h3>
                  <p className="text-sm text-red-800">
                    StormChecks is <strong>not</strong> a public adjusting firm, claims negotiator, insurance advocate, legal representative, contractor, or remediation company. We do not file insurance claims, interpret policy language, negotiate settlements, or participate in claim resolution discussions with insurance carriers.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">Eligibility</h2>
              <p>Our Services are designed for:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Commercial property owners</li>
                <li>Property managers acting on behalf of owners</li>
                <li>Portfolio managers and institutional investors</li>
                <li>Business entities with authority to engage our services</li>
              </ul>
              <p className="mt-4">You must be at least 18 years old and have legal authority to bind the property owner to these Terms.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">Services Overview</h2>
              <h3 className="text-xl font-bold text-primary mt-6 mb-3">Free Assessment</h3>
              <p>StormChecks provides free assessment services, including 24-month historical weather analysis and continuous monitoring with automated alerts. Free assessment involves no cost, no commitment, and no obligation to proceed with additional services.</p>

              <h3 className="text-xl font-bold text-primary mt-6 mb-3">Forensic Documentation Services</h3>
              <p>If potential damage is identified and you choose to proceed, we provide on-site forensic inspections, system-by-system damage analysis, meteorological verification, causation narratives, and cost estimates aligned to carrier standards.</p>

              <h3 className="text-xl font-bold text-primary mt-6 mb-3">Payment Terms</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>No Upfront Costs:</strong> You never pay anything upfront.</li>
                <li><strong>No Recovery, No Fee:</strong> If there is no settlement, you owe nothing to StormChecks.</li>
                <li><strong>Payment Upon Settlement:</strong> Fees are deducted from settlement proceeds before distribution to you.</li>
                <li><strong>Separate Agreements:</strong> Public adjuster fees are governed by a separate agreement between you and the public adjuster.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">Intellectual Property</h2>
              <p>
                All content on our website and platform is owned by StormChecks or its licensors. You may not copy, reproduce, or distribute it without written permission. Documentation we create for your property is provided to you for use in insurance claims.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">Disclaimers and Limitations</h2>
              <div className="bg-gray-900 text-white p-6 rounded-lg font-mono text-sm">
                SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND. STORMCHECKS DISCLAIMS ALL WARRANTIES, INCLUDING MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.
              </div>
              <p className="mt-4">
                To the maximum extent permitted by law, StormChecks' total liability for any claims shall not exceed the fees you paid to StormChecks in the 12 months preceding the claim.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">Dispute Resolution</h2>
              <p>
                Any dispute arising from these Terms or our Services shall be resolved through binding arbitration in Salt Lake City, Utah, in accordance with the American Arbitration Association's Commercial Arbitration Rules.
              </p>
              <p className="mt-4 font-bold">
                YOU WAIVE THE RIGHT TO PARTICIPATE IN CLASS ACTIONS, CLASS ARBITRATIONS, OR REPRESENTATIVE ACTIONS.
              </p>
            </section>

            <section className="bg-gray-50 p-8 rounded-xl border border-gray-200 mt-12">
              <h2 className="text-xl font-bold text-primary mb-4">Contact Us</h2>
              <div className="space-y-2">
                <p>Questions about these Terms?</p>
                <p><strong>Email:</strong> info@stormchecks.com</p>
                <p><strong>Phone:</strong> +1 801-821-2530</p>
                <p><strong>Address:</strong> StormChecks, Salt Lake City, Utah</p>
              </div>
              <p className="mt-6 text-sm text-gray-500 italic pt-6 border-t border-gray-200">
                Important Reminder: StormChecks provides forensic documentation services. StormChecks is not a public adjusting firm, claims negotiator, or settlement advocate. StormChecks does not file insurance claims, interpret policy language, or participate in settlement negotiations.
              </p>
            </section>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;