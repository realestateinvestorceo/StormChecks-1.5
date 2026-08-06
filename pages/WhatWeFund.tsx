import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Ruler, PenLine, FlaskConical, Droplets, Hammer, CloudLightning } from 'lucide-react';

const categories = [
  {
    icon: Ruler,
    title: 'Engineering reports',
    body: 'Reports produced by licensed engineering firms engaged by your public adjuster or counsel.',
  },
  {
    icon: PenLine,
    title: 'Drafting and plans',
    body: 'Drawing sets and plan documentation produced by the providers your team engages.',
  },
  {
    icon: FlaskConical,
    title: 'Environmental testing',
    body: 'Testing and laboratory work performed by licensed environmental providers.',
  },
  {
    icon: Droplets,
    title: 'Water mitigation',
    body: 'Emergency extraction, drying, and containment work performed by mitigation providers.',
  },
  {
    icon: Hammer,
    title: 'Temporary repairs',
    body: 'Board-up, tarping, and stabilisation work performed by contractors your team engages.',
  },
  {
    icon: CloudLightning,
    title: 'Meteorological analysis',
    body: 'Reports produced by qualified meteorological firms engaged by your team.',
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
              The third-party vendor costs a commercial property claim generates before it resolves.
              The work is performed by independent providers engaged by your team, invoiced to
              StormChecks, paid by StormChecks, and repaid only from proceeds.
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
                  <p className="text-gray-600 leading-relaxed">{cat.body}</p>
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
Your public adjuster or attorney determines what work is required and engages the
                providers. We underwrite the resulting cost, then set the funding limit and the
                categories covered. If the scope grows, we underwrite the addition rather than
                sending the owner an invoice.
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
Contact our underwriting team.
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
Funding enquiries reach us through the licensed public adjuster or attorney a property
            owner has already engaged.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent text-primary px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#E6AC00] transition-colors group"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default WhatWeFund;
