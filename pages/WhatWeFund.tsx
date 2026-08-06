import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Ruler, PenLine, FlaskConical, Droplets, Hammer, CloudLightning } from 'lucide-react';

const categories = [
  {
    icon: Ruler,
    title: 'Engineering reports',
    body: 'Licensed engineering analysis of the structure and the loss, commissioned by your public adjuster or counsel.',
    items: [
      'Structural and building envelope analysis',
      'Roof system evaluation',
      'Mechanical and equipment condition reports',
      'Engineer site visits and travel',
    ],
  },
  {
    icon: PenLine,
    title: 'Drafting and plans',
    body: 'The drawing set a repair scope needs before it can be priced, permitted, or defended.',
    items: [
      'As-built drawings',
      'Repair and replacement plan sets',
      'CAD drafting and revisions',
      'Permit-ready documentation',
    ],
  },
  {
    icon: FlaskConical,
    title: 'Environmental testing',
    body: 'Testing and lab work for the hazardous materials a commercial loss commonly surfaces.',
    items: [
      'Lead testing and clearance',
      'Mould sampling and lab analysis',
      'Asbestos survey and abatement testing',
      'Air quality and moisture readings',
    ],
  },
  {
    icon: Droplets,
    title: 'Water mitigation',
    body: 'The emergency work that cannot wait for a claim to resolve without the loss getting worse.',
    items: [
      'Water extraction',
      'Structural drying and dehumidification',
      'Containment and antimicrobial treatment',
      'Equipment rental and monitoring',
    ],
  },
  {
    icon: Hammer,
    title: 'Temporary repairs',
    body: 'Stabilisation work that holds the property until permanent repairs are funded.',
    items: [
      'Board-up and secure',
      'Roof tarping and temporary membrane',
      'Shoring and structural stabilisation',
      'Temporary power, fencing, and access',
    ],
  },
  {
    icon: CloudLightning,
    title: 'Meteorological analysis',
    body: 'Independent storm analysis and reporting prepared for the file by qualified meteorologists.',
    items: [
      'Certified storm event reports',
      'Radar and station data analysis',
      'Site-specific event narratives',
      'Expert meteorological review',
    ],
  },
];

const WhatWeFund: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-primary hero-glow py-24 md:py-28 relative overflow-hidden">
        <div className="wrap relative z-10">
          <div className="max-w-4xl">
            <div className="eyebrow mb-8">Funded Cost Categories</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              What we fund
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl">
              Every vendor cost a commercial property claim generates before it resolves. Invoiced to
              StormChecks, paid by StormChecks, repaid only from proceeds.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-white py-24">
        <div className="wrap">
          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.title}
                  className="border border-hairline-light rounded-xl p-8 md:p-10 flex flex-col"
                >
                  <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-primary mb-4">{cat.title}</h2>
                  <p className="text-gray-600 leading-relaxed mb-8">{cat.body}</p>
                  <ul className="space-y-3 mt-auto pt-8 border-t border-gray-100">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-start text-gray-600">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                        <span className="text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Scope note */}
      <section className="bg-offwhite py-24 border-t border-hairline-light">
        <div className="wrap">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl border border-hairline-light p-8">
              <h2 className="text-xl font-bold text-primary mb-4">How scope is set</h2>
              <p className="text-gray-600 leading-relaxed">
                Your public adjuster or attorney determines what work the claim requires. We
                underwrite that scope and set the funding limit and the cost categories covered. If a
                cost is necessary to pursue the claim and it clears underwriting, we fund it — and if
                the scope expands mid-claim, we underwrite the addition rather than sending you an
                invoice.
              </p>
            </div>
            <div className="bg-white rounded-xl border border-hairline-light p-8">
              <h2 className="text-xl font-bold text-primary mb-4">What we do not fund</h2>
              <p className="text-gray-600 leading-relaxed">
                We fund the cost of pursuing the claim, not the permanent rebuild. Final construction
                is paid from claim proceeds once the claim resolves. We also do not fund single-family
                residential claims, and we do not pay professional fees owed to your public adjuster or
                counsel — those are governed by your agreements with them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-24">
        <div className="wrap text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Send us the scope. We will price the funding.
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Underwriting reviews the property, the loss, and the proposed vendor work, then issues
            written terms.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent text-primary px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#E6AC00] transition-colors group"
          >
            Request Funding Terms
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default WhatWeFund;
