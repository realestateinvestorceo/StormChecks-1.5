import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute -right-[10%] -top-[10%] w-[600px] h-[600px] bg-white opacity-[0.03] rounded-full blur-3xl"></div>
          <div className="absolute right-[5%] top-[25%] w-[400px] h-[400px] bg-accent opacity-[0.04] rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-gray-400 font-medium uppercase tracking-widest text-sm">
            Effective Date: January 15, 2026
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="prose prose-slate max-w-none space-y-8 text-gray-700 leading-relaxed">
            
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">Overview</h2>
              <p>
                StormChecks ("we," "our," or "us") provides commercial insurance monitoring and building consultancy services. We take your privacy seriously. This Privacy Policy explains how we collect, use, share, and protect your information when you use our website, services, and storm monitoring platform.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">Information We Collect</h2>
              <h3 className="text-xl font-bold text-primary mt-6 mb-3">Information You Provide Directly</h3>
              <p className="mb-4">When you use our services, we collect:</p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li><strong>Property Information:</strong> Property addresses, building specifications, square footage, property type, and ownership details</li>
                <li><strong>Contact Information:</strong> Name, email address, phone number, and mailing address</li>
                <li><strong>Business Information:</strong> Company name, title, portfolio details, and property management information</li>
                <li><strong>Insurance Information:</strong> Policy details, carrier information, coverage limits, and deductibles (only when you choose to share them)</li>
                <li><strong>Communication Records:</strong> Correspondence with our team, including emails, phone calls, and messages</li>
              </ul>

              <h3 className="text-xl font-bold text-primary mt-6 mb-3">Information We Collect Automatically</h3>
              <p className="mb-4">When you visit our website or use our platform:</p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li><strong>Technical Data:</strong> IP address, browser type, device information, operating system, and referring URLs</li>
                <li><strong>Usage Data:</strong> Pages viewed, time spent on pages, links clicked, and navigation patterns</li>
                <li><strong>Cookies and Tracking:</strong> We use cookies and similar technologies to improve your experience (see Cookies section below)</li>
              </ul>

              <h3 className="text-xl font-bold text-primary mt-6 mb-3">Information from Third-Party Sources</h3>
              <p className="mb-4">We collect meteorological and storm data from:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Weather Data Providers:</strong> Historical and real-time storm information, including hail reports, wind speeds, and precipitation data</li>
                <li><strong>Public Records:</strong> Property records, ownership information, and building permits where legally available</li>
                <li><strong>Insurance Industry Data:</strong> Publicly available claim statistics and industry benchmarks</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">How We Use Your Information</h2>
              <p className="mb-4">We use your information to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Provide Weather Assessment:</strong> Analyze historical weather exposure and deliver ongoing monitoring alerts for your properties</li>
                <li><strong>Conduct Forensic Inspections:</strong> Schedule and perform on-site damage assessments by licensed engineers</li>
                <li><strong>Create Documentation:</strong> Build forensic evidence files, including meteorological reports, damage analysis, and cost estimates</li>
                <li><strong>Facilitate Connections:</strong> Introduce you to vetted public adjusters when requested</li>
                <li><strong>Communicate:</strong> Send service updates, monitoring alerts, inspection schedules, and respond to your inquiries</li>
                <li><strong>Improve Services:</strong> Analyze usage patterns to enhance our platform and service delivery</li>
                <li><strong>Comply with Legal Obligations:</strong> Meet regulatory requirements and respond to legal processes</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">How We Share Your Information</h2>
              <h3 className="text-xl font-bold text-primary mt-6 mb-3">With Your Consent</h3>
              <p className="mb-4">We share your information with third parties only when you authorize us to do so:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Public Adjusters:</strong> When you engage a public adjuster, we share relevant property information and forensic documentation</li>
                <li><strong>Engineers and Inspectors:</strong> Licensed professionals conducting on-site inspections receive property details necessary to perform their work</li>
                <li><strong>Professional Partners:</strong> When you request introductions to attorneys or other professionals</li>
              </ul>

              <h3 className="text-xl font-bold text-primary mt-6 mb-3">Service Providers</h3>
              <p className="mb-4">We work with trusted third-party vendors who help us deliver our services:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Technology Providers:</strong> Cloud hosting, data storage, and platform infrastructure</li>
                <li><strong>Communication Tools:</strong> Email delivery, SMS notifications, and customer relationship management</li>
                <li><strong>Payment Processors:</strong> Secure payment processing for settlement distributions</li>
                <li><strong>Analytics Services:</strong> Website analytics and service improvement tools</li>
              </ul>
              <p className="mt-4 italic">These vendors are contractually required to protect your information and may only use it to provide services to StormChecks.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">Important Limitations</h2>
              <p className="mb-4 font-bold text-primary">StormChecks Does Not:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Sell your personal information to third parties</li>
                <li>Share your data with insurance carriers without your explicit consent</li>
                <li>Provide your information to marketers or advertisers</li>
                <li>Use your property data for purposes unrelated to our services</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">Data Security</h2>
              <p>
                We implement industry-standard security measures to protect your information, including encryption (SSL/TLS), access controls, secure storage, and rigorous vendor standards. Despite these measures, no system is completely secure.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">Your Privacy Rights</h2>
              <p className="mb-4">Depending on your location, you may have the following rights:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Access and Portability:</strong> Request a copy of your personal information</li>
                <li><strong>Correction and Updates:</strong> Correct inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Opt-Out Rights:</strong> Unsubscribe from marketing or disable cookies</li>
              </ul>
              <p className="mt-4">
                To exercise any privacy rights, contact us at <strong>info@stormchecks.com</strong> or <strong>+1 801-821-2530</strong>.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 mt-12">
              <h2 className="text-xl font-bold text-primary mb-4">Service Clarification</h2>
              <p className="text-sm text-gray-600 italic">
                StormChecks provides forensic documentation services. StormChecks is not a public adjusting firm, claims negotiator, or settlement advocate. StormChecks does not file insurance claims, interpret policy language, or participate in settlement negotiations.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;