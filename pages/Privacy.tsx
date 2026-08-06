import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-primary hero-glow py-16 md:py-24 relative overflow-hidden">
        <div className="wrap relative z-10 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-gray-400 font-medium uppercase tracking-widest text-sm">
            Effective Date: January 15, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="wrap max-w-4xl">
          <div className="prose prose-slate max-w-none space-y-8 text-gray-700 leading-relaxed">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">Overview</h2>
              <p>
                StormChecks ("we," "our," or "us") provides pre-litigation funding for commercial
                property insurance claims and free storm monitoring for commercial property owners.
                This Privacy Policy explains how we collect, use, share, and protect your
                information when you use our website, submit a funding request, or enrol a property
                in storm monitoring.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">Information We Collect</h2>

              <h3 className="text-xl font-bold text-primary mt-6 mb-3">
                Information You Provide Directly
              </h3>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>
                  <strong>Property Information:</strong> Property addresses, building
                  specifications, square footage, property type, and ownership details
                </li>
                <li>
                  <strong>Contact Information:</strong> Name, email address, phone number, and
                  mailing address
                </li>
                <li>
                  <strong>Business Information:</strong> Company or entity name, title, and
                  portfolio details
                </li>
                <li>
                  <strong>Funding Request Information:</strong> The proposed scope of vendor work,
                  loss details, representation status, and vendor invoices submitted for payment
                </li>
                <li>
                  <strong>Communication Records:</strong> Correspondence with our team, including
                  emails, calls, and messages
                </li>
              </ul>

              <h3 className="text-xl font-bold text-primary mt-6 mb-3">
                Information We Collect Automatically
              </h3>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>
                  <strong>Technical Data:</strong> IP address, browser type, device information,
                  operating system, and referring URLs
                </li>
                <li>
                  <strong>Usage Data:</strong> Pages viewed, time spent, links clicked, and
                  navigation patterns
                </li>
                <li>
                  <strong>Cookies and Tracking:</strong> We use cookies and similar technologies to
                  operate and improve the site
                </li>
              </ul>

              <h3 className="text-xl font-bold text-primary mt-6 mb-3">
                Information from Third-Party Sources
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Weather Data Providers:</strong> Historical and current storm event data,
                  including hail reports, wind speeds, and radar-derived observations
                </li>
                <li>
                  <strong>Imagery Providers:</strong> Aerial and satellite imagery used for property
                  measurement
                </li>
                <li>
                  <strong>Public Records:</strong> Property records, ownership information, and
                  building permits where legally available
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Underwrite Funding Requests:</strong> Evaluate the property, the loss, and
                  the proposed scope of work in order to issue funding terms
                </li>
                <li>
                  <strong>Administer Funding:</strong> Process approved vendor invoices, make
                  disbursements, and administer repayment from claim proceeds
                </li>
                <li>
                  <strong>Provide Storm Monitoring:</strong> Match enrolled property coordinates
                  against catalogued weather events and send notifications
                </li>
                <li>
                  <strong>Communicate:</strong> Send funding correspondence, monitoring
                  notifications, and responses to your enquiries
                </li>
                <li>
                  <strong>Improve Our Platform:</strong> Analyse usage to improve our underwriting
                  systems and website
                </li>
                <li>
                  <strong>Comply with Legal Obligations:</strong> Meet regulatory requirements and
                  respond to legal process
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">How We Share Your Information</h2>

              <h3 className="text-xl font-bold text-primary mt-6 mb-3">With Your Authorisation</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Your Public Adjuster or Attorney:</strong> Funding documentation and
                  payment records relevant to the engagement you have authorised
                </li>
                <li>
                  <strong>Funded Vendors:</strong> The information a vendor needs to invoice
                  StormChecks directly and be paid
                </li>
              </ul>

              <h3 className="text-xl font-bold text-primary mt-6 mb-3">Service Providers</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Technology Providers:</strong> Cloud hosting, data storage, and platform
                  infrastructure
                </li>
                <li>
                  <strong>Communication Tools:</strong> Email delivery, notifications, and customer
                  relationship management
                </li>
                <li>
                  <strong>Payment Processors:</strong> Secure processing of vendor disbursements and
                  repayments
                </li>
                <li>
                  <strong>Analytics Services:</strong> Website analytics and service improvement
                </li>
              </ul>
              <p className="mt-4 italic">
                These vendors are contractually required to protect your information and may use it
                only to provide services to StormChecks.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">Important Limitations</h2>
              <p className="mb-4 font-bold text-primary">StormChecks does not:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Sell your personal information to third parties</li>
                <li>Share your data with insurance carriers</li>
                <li>Provide your information to marketers or advertisers</li>
                <li>Use your property data for purposes unrelated to funding or monitoring</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">Data Security</h2>
              <p>
                We implement industry-standard security measures, including encryption in transit
                (SSL/TLS), access controls, secure storage, and vendor security requirements.
                Despite these measures, no system is completely secure.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">Your Privacy Rights</h2>
              <p className="mb-4">Depending on your location, you may have the following rights:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Access and Portability:</strong> Request a copy of your personal
                  information
                </li>
                <li>
                  <strong>Correction:</strong> Correct inaccurate information
                </li>
                <li>
                  <strong>Deletion:</strong> Request deletion of your personal information
                </li>
                <li>
                  <strong>Opt-Out:</strong> Unsubscribe from monitoring notifications or disable
                  cookies
                </li>
              </ul>
              <p className="mt-4">
                To exercise any privacy right, contact us at <strong>info@stormchecks.com</strong> or{' '}
                <strong>+1 801-821-2530</strong>.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl border border-hairline-light mt-12">
              <h2 className="text-xl font-bold text-primary mb-4">Scope of Our Role</h2>
              <p className="text-sm text-gray-600 italic">
                StormChecks underwrites and funds the cost of pursuing commercial property insurance
                claims. StormChecks is not a public adjuster, law firm, or insurance producer, and
                does not provide claims, legal, or insurance advice.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
