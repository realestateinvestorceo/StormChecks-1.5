import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, ShieldCheck, Banknote, ChevronDown, ChevronUp, Plus, Minus } from 'lucide-react';

const steps = [
  {
    num: 1,
    title: 'Submit Your Property',
    timeline: 'Day 1',
    owner: true,
    description: 'Visit stormchecks.com and log into your portal. Add any properties you own — or upload a spreadsheet and we\'ll import them. Even properties you never intend to file a claim on are worth adding for free monitoring. Being in the portal creates zero obligation.',
  },
  {
    num: 2,
    title: 'Evaluation & Estimated Value',
    timeline: '~1 Day',
    owner: false,
    description: 'We analyze 2 years of historical weather events for your property coordinates, use satellite imagery to assess roof type and condition, and cross-reference storm events with documented damage thresholds. If the property qualifies, you receive the estimated amount directly in your portal.',
  },
  {
    num: 3,
    title: 'Sign the Agreements',
    timeline: '~2 Days',
    owner: true,
    description: 'You receive three agreements simultaneously: a StormChecks engagement agreement (20% of recovery), a public adjuster agreement (10% of recovery), and authorization to request your insurance policy. All sent together to save time.',
  },
  {
    num: 4,
    title: 'Policy Review & Risk Analysis',
    timeline: '~1 Week',
    owner: false,
    description: 'We request and review your insurance policy in full, assess your risk profile, and coordinate with trusted insurance brokers to review your coverage and alternatives. We only recommend moving forward when we\'re confident it\'s in your best interest.',
  },
  {
    num: 5,
    title: 'Forensic Inspection',
    timeline: '~3 Weeks',
    owner: false,
    description: 'Licensed Professional Engineers conduct a full on-site forensic inspection — system-by-system damage analysis covering roof, cladding, HVAC, and structural elements. All travel, engineering fees, and inspection costs are absorbed by StormChecks.',
  },
  {
    num: 6,
    title: 'Expert File & Claim Filing',
    timeline: '~1 Week',
    owner: false,
    description: 'Our engineers compile the Expert File — 120+ pages of forensic documentation built to carrier approval standards, including timestamped photography, engineering analysis, storm-to-damage correlation, and Xactimate cost estimates. Your public adjuster files the claim.',
  },
  {
    num: 7,
    title: 'Insurance Review',
    timeline: '30–60 Days',
    owner: false,
    description: 'Your carrier receives the filed claim and assigns an internal adjuster. Your public adjuster manages all communication — you are not involved. If the carrier pushes back or issues a denial, the PA responds using the Expert File.',
  },
  {
    num: 8,
    title: 'Payout',
    timeline: '~12 Months Total',
    owner: true,
    description: 'Carrier issues settlement to the public adjuster\'s trust account. You receive 70% of the total recovery. StormChecks collects 20% — only from the recovery, never upfront. The public adjuster collects 10%. If no recovery, all fees are $0.',
  },
];

const faqItems = [
  {
    question: "Who is StormChecks?",
    answer: "StormChecks was founded by commercial property owners who got tired of not knowing the true condition of their own buildings. Our leadership team collectively owns and manages over $200 million in commercial real estate. We built this process for our own portfolios first — and recovered millions of dollars before opening it to other owners."
  },
  {
    question: "What's the problem StormChecks solves?",
    answer: "Storm damage hides in roofing membranes, behind cladding, and inside HVAC systems. Your maintenance team won't catch it. Your annual inspection won't flag it. Most commercial property owners are sitting on six or seven figures in recoverable damage — and have no idea. Your insurance policy is an asset sitting on your balance sheet, and StormChecks helps you understand what it's actually worth."
  },
  {
    question: "Won't my premiums go up if I file?",
    answer: "The honest answer: they might — and we'll tell you before you ever sign anything. If a major storm hit your area, your carrier has already assigned it a catastrophe code. Your premiums have already adjusted — you're paying for that event whether you file or not. For situations where premiums could genuinely be a concern, we work through it with you first, analyzing your policy structure, carrier relationship, and whether the recovery far outweighs any potential adjustment."
  },
  {
    question: "What does StormChecks cost upfront?",
    answer: "Nothing. Zero. StormChecks fronts all engineering, travel, and inspection costs out of pocket. If there is no recovery, you owe nothing. We only collect 20% from the insurance payout when a claim succeeds. The public adjuster collects 10%. You keep 70%."
  },
  {
    question: "How long does the process take?",
    answer: "The full process — from submitting your property to payout — takes approximately 12 months. The first 5 weeks cover evaluation, agreements, policy review, and forensic inspection. The insurance review typically takes 30–60 days. Settlement and payout follow after that."
  },
  {
    question: "What is the Expert File?",
    answer: "The Expert File is StormChecks' core deliverable — 120+ pages of forensic documentation built to carrier approval standards. It includes timestamped photography, engineering analysis, storm-to-damage correlation, and Xactimate cost estimates. The Expert File is what gets claims approved and what overturns denials."
  },
  {
    question: "What if the carrier denies my claim?",
    answer: "Carriers often push back at first. Our documentation is built for pushback. When carriers deny or undervalue claims, the public adjuster responds using the Expert File with additional evidence and technical narratives. We have overturned denials — one case went from a $0 denial to a $3.9M recovery."
  },
  {
    question: "Do I need to be involved in the process?",
    answer: "Minimal involvement. You submit your property (Step 1), sign agreements (Step 3), and receive your payout (Step 8). Everything in between — evaluation, policy review, forensic inspection, expert file compilation, claim filing, and insurance negotiation — is handled by StormChecks and your assigned public adjuster."
  },
  {
    question: "How do I get started?",
    answer: "Visit stormchecks.com and log into your portal. Add your properties or upload a spreadsheet and we'll import them. We run the evaluation and bring the estimated value to you — typically within 24 hours. There's no cost and no obligation. Important: Storm damage claims have a 1–2 year documentation window from the date of loss depending on your state."
  },
];

const HowItWorks: React.FC = () => {
  const [stepsExpanded, setStepsExpanded] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute -right-[10%] -top-[10%] w-[800px] h-[800px] bg-white opacity-[0.03] rounded-full blur-3xl"></div>
          <div className="absolute right-[5%] top-[25%] w-[600px] h-[600px] bg-accent opacity-[0.04] rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              How It Works
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              8 steps. About 12 months. Zero upfront cost.
            </p>
          </div>
        </div>
      </section>

      {/* Expandable 8-Step Process Section */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">The Full Process</h2>
              <p className="text-gray-600 text-lg">From first assessment to recovered funds — here's what to expect at every step.</p>
            </div>

            {/* Expandable Steps Toggle */}
            <button
              onClick={() => setStepsExpanded(!stepsExpanded)}
              className="w-full bg-primary text-white rounded-xl p-6 flex items-center justify-between hover:bg-primary/90 transition-colors group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">8</span>
                </div>
                <div className="text-left">
                  <div className="font-bold text-xl">View All 8 Steps</div>
                  <div className="text-gray-300 text-sm">Click to {stepsExpanded ? 'collapse' : 'expand'} the full process breakdown</div>
                </div>
              </div>
              {stepsExpanded ? (
                <ChevronUp className="w-6 h-6 text-accent" />
              ) : (
                <ChevronDown className="w-6 h-6 text-accent" />
              )}
            </button>

            {/* Steps Content */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                stepsExpanded ? 'max-h-[5000px] opacity-100 mt-6' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="space-y-4">
                {steps.map((step) => (
                  <div
                    key={step.num}
                    className={`rounded-xl border p-6 transition-all ${
                      step.owner
                        ? 'border-accent/30 bg-accent/5'
                        : 'border-gray-200 bg-gray-50'
                    }`}
                  >
                    <div className="flex items-start gap-5">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0 ${
                          step.owner
                            ? 'bg-accent text-primary'
                            : 'bg-primary/10 text-primary'
                        }`}
                      >
                        {step.num}
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <h3 className="text-lg font-bold text-primary">{step.title}</h3>
                          <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                            step.owner
                              ? 'bg-accent/20 text-accent'
                              : 'bg-primary/10 text-primary/60'
                          }`}>
                            {step.owner ? '✦ Your Action' : 'StormChecks Handles'}
                          </span>
                          <span className="text-xs text-gray-400 font-medium">⏱ {step.timeline}</span>
                        </div>
                        <p className="text-gray-600 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Legend */}
              <div className="flex justify-center gap-8 mt-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-accent"></div>
                  <span>Your action required</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-primary/15"></div>
                  <span>StormChecks handles it</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Happens After Section */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">What Happens After Your Assessment</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm text-center hover:shadow-md transition-shadow">
               <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                 <Clock className="w-8 h-8 text-primary" />
               </div>
               <h3 className="text-xl font-bold text-primary mb-4">You Decide on Your Timeline</h3>
               <p className="text-gray-600 leading-relaxed">
                 No pressure. Review your assessment, ask questions, take your time. You only move forward when you're ready.
               </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm text-center hover:shadow-md transition-shadow">
               <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                 <ShieldCheck className="w-8 h-8 text-primary" />
               </div>
               <h3 className="text-xl font-bold text-primary mb-4">We Handle Everything</h3>
               <p className="text-gray-600 leading-relaxed">
                 If you proceed, we coordinate with the public adjuster, manage documentation, and deal with the carrier. Your involvement: minimal.
               </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm text-center hover:shadow-md transition-shadow">
               <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                 <Banknote className="w-8 h-8 text-primary" />
               </div>
               <h3 className="text-xl font-bold text-primary mb-4">You Receive Your Recovery</h3>
               <p className="text-gray-600 leading-relaxed">
                 The process takes about 12 months depending on the carrier. When it settles, you keep 70%. We only get paid when you do.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* Denial / Lowball / Pushback Section */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              What If the Carrier Pushes Back?
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              They usually do — at first. Our documentation is built for pushback. When carriers deny or undervalue claims, we support the appeals process with additional evidence, technical narratives, and expert documentation. You're not involved in the back-and-forth. We handle it.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600 text-lg">Everything you need to know about working with StormChecks.</p>
            </div>

            <div className="space-y-3">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden transition-shadow hover:shadow-sm"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left"
                  >
                    <span className="font-bold text-primary pr-4">{item.question}</span>
                    {expandedFaq === index ? (
                      <Minus className="w-5 h-5 text-accent flex-shrink-0" />
                    ) : (
                      <Plus className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    )}
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      expandedFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                      {item.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-24 border-t border-gray-200">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-8">
            Ready to Know What Your Building Is Hiding?
          </h2>

          <div className="flex flex-col items-center gap-4">
            <Link to="/contact?focus=true" className="bg-accent text-primary px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#E6AC00] transition-all shadow-lg hover:-translate-y-1 flex items-center gap-2 group">
              Start Free Assessment
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <p className="text-gray-500 text-sm font-medium">
              2-year weather analysis + continuous alerts. No cost. No obligation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;