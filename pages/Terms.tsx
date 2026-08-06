import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-primary hero-glow py-16 md:py-24 relative overflow-hidden text-white">
        <div className="wrap relative z-10 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-gray-400 font-medium uppercase tracking-widest text-sm">
            Effective Date: January 15, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="wrap max-w-4xl">
          <div className="prose prose-slate max-w-none text-gray-700 leading-relaxed space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">Agreement to Terms</h2>
              <p>
                These Terms of Service ("Terms") govern your access to and use of the StormChecks
                website and services (collectively, the "Services"). By using our Services, you
                agree to these Terms. If you do not agree, do not use our Services.
              </p>
              <p className="mt-4">
                StormChecks may modify these Terms at any time. We will notify you of material
                changes by email or website notice. Continued use after changes take effect
                constitutes acceptance.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">Who We Are</h2>
              <p>
                <strong>StormChecks</strong> is a specialty finance company. We underwrite and fund
                the cost of pursuing commercial property insurance claims.
              </p>
              <div className="mt-6 grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                  <h3 className="font-bold text-primary mb-2">What We Do</h3>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Underwrite commercial property claim funding requests</li>
                    <li>Issue written, non-recourse funding terms</li>
                    <li>Pay approved vendor invoices directly</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg border border-hairline-light">
                  <h3 className="font-bold text-primary mb-2">What We Do Not Do</h3>
                  <p className="text-sm text-gray-600">
                    StormChecks is <strong>not</strong> a public adjuster, law firm, insurance
                    producer, contractor, or remediation company. We do not adjust claims, file
                    claims, interpret policy language, negotiate settlements, communicate with
                    carriers, or provide claims, legal, or insurance advice.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">Eligibility</h2>
              <p>Our Services are intended for:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Commercial property owners</li>
                <li>Property managers acting on behalf of owners</li>
                <li>Portfolio managers and institutional investors</li>
                <li>Business entities with authority to enter a funding agreement</li>
              </ul>
              <p className="mt-4">
                You must be at least 18 years old and have legal authority to bind the property
                owner to these Terms. We do not fund single-family residential claims.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">Services Overview</h2>

              <h3 className="text-xl font-bold text-primary mt-6 mb-3">Funding</h3>
              <p>
                Where StormChecks issues funding terms and those terms are accepted, StormChecks
                pays approved vendor costs incurred in pursuing the claim directly to the vendor.
                Funded cost categories, funding limits, and repayment terms are set out in the
                funding agreement.
              </p>

              <h3 className="text-xl font-bold text-primary mt-6 mb-3">Non-Recourse Repayment</h3>
              <p>
                StormChecks repayment right attaches solely to the proceeds of the funded claim. If
                the claim does not produce proceeds, StormChecks absorbs the funded vendor costs and
                the property owner owes nothing. No personal guarantee is required and no lien is
                placed on the property.
              </p>

              <h3 className="text-xl font-bold text-primary mt-6 mb-3">No Fees to You</h3>
              <p>
                There are no application, underwriting, or ongoing fees payable to StormChecks.
                StormChecks compensation is defined in the funding agreement and is payable only out
                of claim proceeds. Fees owed to your public adjuster, attorney, or other
                professionals are governed by your separate agreements with them.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">Your Representation</h2>
              <p>
                You engage and retain your own licensed public adjuster and, where appropriate, your
                own counsel. StormChecks does not select, recommend, supervise, or direct those
                professionals and is not responsible for their conduct or the outcome of the claim.
                Nothing StormChecks provides constitutes claims, legal, or insurance advice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">Intellectual Property</h2>
              <p>
                All content on our website, and our underwriting data and platform, is owned by
                StormChecks or its licensors. You may not copy, reproduce, or distribute it without
                written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">Disclaimers and Limitations</h2>
              <div className="bg-gray-900 text-white p-6 rounded-lg font-mono text-sm">
                SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND. STORMCHECKS DISCLAIMS
                ALL WARRANTIES, INCLUDING MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.
                STORMCHECKS MAKES NO REPRESENTATION AS TO THE OUTCOME OF ANY INSURANCE CLAIM.
              </div>
              <p className="mt-4">
                To the maximum extent permitted by law, StormChecks total liability for any claim
                shall not exceed the amounts StormChecks received from you in the 12 months
                preceding the claim.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">Dispute Resolution</h2>
              <p>
                Any dispute arising from these Terms or our Services shall be resolved through
                binding arbitration in Salt Lake City, Utah, in accordance with the American
                Arbitration Association's Commercial Arbitration Rules.
              </p>
              <p className="mt-4 font-bold">
                YOU WAIVE THE RIGHT TO PARTICIPATE IN CLASS ACTIONS, CLASS ARBITRATIONS, OR
                REPRESENTATIVE ACTIONS.
              </p>
            </section>

            <section className="bg-gray-50 p-8 rounded-xl border border-hairline-light mt-12">
              <h2 className="text-xl font-bold text-primary mb-4">Contact Us</h2>
              <div className="space-y-2">
                <p>Questions about these Terms?</p>
                <p>
                  <strong>Email:</strong> info@stormchecks.com
                </p>
                <p>
                  <strong>Phone:</strong> +1 801-821-2530
                </p>
                <p>
                  <strong>Address:</strong> StormChecks, Salt Lake City, Utah
                </p>
              </div>
              <p className="mt-6 text-sm text-gray-500 italic pt-6 border-t border-hairline-light">
                StormChecks is not a public adjuster, law firm, or insurance producer, and does not
                provide claims, legal, or insurance advice.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
