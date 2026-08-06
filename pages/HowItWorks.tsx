import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Plus, Minus } from 'lucide-react';

const steps = [
  {
    num: '01',
    title: 'Your team pursues the claim',
    actor: 'Owner',
    body: "You engage your own licensed public adjuster and, where appropriate, counsel. They hold the relationship with the carrier and direct the claim. StormChecks has no role in that engagement and does not select, recommend, or supervise the professionals you work with.",
  },
  {
    num: '02',
    title: 'We underwrite and commit',
    actor: 'StormChecks',
    body: "Your team submits the property, the loss, and the proposed scope of vendor work. We underwrite it against our own storm, structure, and loss-dating data and issue written funding terms — the cost categories covered, the funding limit, and the repayment terms on resolution.",
  },
  {
    num: '03',
    title: 'We fund every cost',
    actor: 'StormChecks',
    body: "Approved vendors invoice StormChecks directly and we pay them. Engineering, drafting, environmental testing, mitigation, temporary repairs, meteorological analysis. Nothing routes through the owner. You are never out of pocket at any point in the process.",
  },
  {
    num: '04',
    title: 'We are repaid from proceeds only',
    actor: 'On Resolution',
    body: "When the claim resolves, StormChecks is repaid from the proceeds on the terms agreed at the outset. If the claim does not pay, we absorb the vendor costs. There is no personal guarantee, no lien on the property, and no balance that survives the claim.",
  },
];

const faqs = [
  {
    q: 'What does non-recourse actually mean here?',
    a: 'Our repayment right attaches to the proceeds of the claim and nothing else. If the claim does not pay, StormChecks absorbs every vendor cost we funded. We do not pursue the owner, the entity, or the property for the shortfall, and we do not carry a balance forward against future claims.',
  },
  {
    q: 'Do I have to change my public adjuster or attorney?',
    a: 'No. You engage and keep your own licensed professionals. StormChecks does not select, recommend, or replace them, and does not direct their work. Our agreement is a funding agreement between StormChecks and the property owner.',
  },
  {
    q: 'What does StormChecks charge upfront?',
    a: 'Nothing. There are no application fees, no underwriting fees, and no monthly costs. Our compensation is defined in the funding agreement and is payable only out of claim proceeds.',
  },
  {
    q: 'Who decides which vendors are used?',
    a: 'Your team does. We fund the scope of work your public adjuster or attorney determines is necessary. Underwriting sets the cost categories and the funding limit; it does not choose the vendor.',
  },
  {
    q: 'How quickly can funding be committed?',
    a: 'Underwriting typically returns terms within a few business days of receiving the property details and the proposed scope of work. Vendor invoices are paid on our standard payment cycle once terms are signed.',
  },
  {
    q: 'What types of property do you fund?',
    a: 'Commercial property — multifamily, industrial, retail, office, and similar asset classes. We do not fund single-family residential claims.',
  },
  {
    q: 'Does StormChecks talk to my insurer?',
    a: 'No. We have no contact with the carrier and no role in the claim itself. StormChecks does not adjust claims, negotiate, or advise on coverage. Those are the roles of the licensed professionals you engage.',
  },
  {
    q: 'What happens to the funding if the claim takes years?',
    a: 'The terms are set at the outset and do not change with duration. We fund the costs as they are incurred for as long as the claim is being pursued.',
  },
];

const HowItWorks: React.FC = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-primary hero-glow py-24 md:py-28 relative overflow-hidden">
        <div className="wrap relative z-10">
          <div className="max-w-4xl">
            <div className="eyebrow mb-8">The Structure</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              How it works
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl">
              Four steps. Your team runs the claim. We carry the cost of pursuing it and are repaid
              only if it pays.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-white py-24">
        <div className="wrap">
          <div className="max-w-4xl mx-auto space-y-6">
            {steps.map((step) => (
              <div
                key={step.num}
                className="border border-hairline-light rounded-xl p-8 md:p-10 hover:border-accent/50 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-10">
                  <div className="md:w-40 flex-shrink-0">
                    <div className="font-mono text-accent text-sm font-bold tracking-widest mb-2">
                      {step.num}
                    </div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                      {step.actor}
                    </div>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-primary mb-4">{step.title}</h2>
                    <p className="text-gray-600 leading-relaxed text-lg">{step.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The economics */}
      <section className="bg-primary py-24 text-white">
        <div className="wrap">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-10">Where the risk sits</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 border border-hairline-dark rounded-xl p-8">
                <div className="text-xs font-bold text-accent uppercase tracking-wider mb-4">
                  If the claim resolves
                </div>
                <p className="text-gray-300 leading-relaxed">
                  StormChecks is repaid from the proceeds on the terms agreed before any money was
                  deployed. The owner receives the balance. Nothing about the repayment is
                  discretionary or renegotiated at the end.
                </p>
              </div>
              <div className="bg-white/5 border border-hairline-dark rounded-xl p-8">
                <div className="text-xs font-bold text-accent uppercase tracking-wider mb-4">
                  If the claim does not pay
                </div>
                <p className="text-gray-300 leading-relaxed">
                  StormChecks absorbs the vendor costs in full. The owner owes nothing — not the
                  engineering, not the testing, not the mitigation. That risk is priced into our
                  terms and it stays with us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-offwhite py-24">
        <div className="wrap">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">
              Common questions
            </h2>

            <div className="space-y-3">
              {faqs.map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl border border-hairline-light overflow-hidden"
                >
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left"
                  >
                    <span className="font-bold text-primary pr-4">{item.q}</span>
                    {open === i ? (
                      <Minus className="w-5 h-5 text-accent flex-shrink-0" />
                    ) : (
                      <Plus className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    )}
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      open === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                      {item.a}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-24 border-t border-hairline-light">
        <div className="wrap text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Ready to request terms?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Send us the property and the proposed scope of work. Underwriting will come back with
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

export default HowItWorks;
