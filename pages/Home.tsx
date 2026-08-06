import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Ruler,
  Droplets,
  FlaskConical,
  Hammer,
  PenLine,
  CloudLightning,
  Bell,
} from 'lucide-react';

const fundedCosts = [
  {
    icon: Ruler,
    title: 'Engineering reports',
    body: 'Licensed engineering analysis of the structure and the loss, commissioned by your team.',
  },
  {
    icon: PenLine,
    title: 'Drafting and plans',
    body: 'Architectural drafting, as-built drawings, and repair plan documentation.',
  },
  {
    icon: FlaskConical,
    title: 'Environmental testing',
    body: 'Lead, mold, and asbestos testing and the lab work that supports it.',
  },
  {
    icon: Droplets,
    title: 'Water mitigation',
    body: 'Extraction, drying, and containment work that cannot wait for the claim to resolve.',
  },
  {
    icon: Hammer,
    title: 'Temporary repairs',
    body: 'Board-up, tarping, and stabilization needed to hold the property until permanent work begins.',
  },
  {
    icon: CloudLightning,
    title: 'Meteorological analysis',
    body: 'Storm event analysis and reporting prepared for the file by qualified meteorologists.',
  },
];

const steps = [
  {
    num: '01',
    title: 'Your team pursues the claim',
    body: 'You engage your own licensed public adjuster and, where appropriate, counsel. They run the claim from start to finish.',
  },
  {
    num: '02',
    title: 'We underwrite and commit',
    body: 'We review the property, the loss, and the proposed scope of work, then issue funding terms in writing.',
  },
  {
    num: '03',
    title: 'We fund every cost',
    body: 'Approved vendors invoice StormChecks directly and we pay them. You are never out of pocket.',
  },
  {
    num: '04',
    title: 'We are repaid from proceeds only',
    body: 'When the claim resolves, we are repaid from the proceeds on the agreed terms. If it does not resolve, we absorb the cost.',
  },
];

const stats = [
  { figure: '100%', caption: 'Of Pursuit Costs Funded' },
  { figure: '$0', caption: 'Out of Pocket to the Owner' },
  { figure: '$0', caption: 'Owed If the Claim Does Not Pay' },
];

const Home: React.FC = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary hero-glow min-h-[calc(100vh-80px)] flex items-center overflow-hidden">
        <div className="wrap relative z-10 py-20 lg:py-24">
          <div className="max-w-4xl space-y-8">
            <div className="eyebrow mb-8">Pre-Litigation Claim Funding</div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1]">
              We fund your commercial property claim. Every cost covered.
            </h1>

            <p className="text-2xl md:text-3xl font-bold text-accent">
              You pay nothing unless the claim pays.
            </p>

            <div className="text-lg text-gray-300 leading-[1.7] max-w-measure border-l border-accent/30 pl-6">
              <p>
                StormChecks advances 100% of the cost of pursuing a commercial property insurance
                claim — engineering reports, drafting, environmental testing, mitigation,
                meteorological analysis. Our funding is non-recourse. If the claim does not pay, you
                owe us nothing.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
              <Link
                to="/contact"
                className="group bg-accent text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#E6AC00] transition-colors flex items-center gap-2"
              >
                Request Funding Terms
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/storm-monitoring"
                className="border border-hairline-dark text-white px-8 py-4 rounded-lg font-bold text-lg hover:border-white transition-colors"
              >
                Free Storm Monitoring
              </Link>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed max-w-measure">
              Available to commercial property owners already working with their own licensed public
              adjuster or attorney. They run the claim; we provide the capital. Funding terms are set
              out in a written funding agreement.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary border-t border-hairline-dark py-24">
        <div className="wrap">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {stats.map((stat) => (
              <div key={stat.caption}>
                <div className="stat-figure text-white mb-4">{stat.figure}</div>
                <div className="mono-caption text-white/50">/ {stat.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The non-recourse model */}
      <section className="bg-white py-24">
        <div className="wrap">
          <div className="max-w-4xl mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight mb-8">
              Non-recourse capital, from the first invoice to resolution.
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Pursuing a commercial property claim costs money long before it returns any.
                Engineering reports, environmental testing, water mitigation, temporary repairs —
                those invoices come due while the claim is still open, and they come due to the
                owner.
              </p>
              <p>
                StormChecks pays them. If the claim resolves, we are repaid from the proceeds on
                terms agreed in advance. If it does not, we absorb the vendor costs.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-xl border border-hairline-light">
              <h3 className="font-bold text-primary text-xl mb-3">No out-of-pocket cost</h3>
              <p className="text-gray-600 leading-relaxed">
                Approved vendors invoice StormChecks directly. Nothing routes through the owner's
                balance sheet.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-hairline-light">
              <h3 className="font-bold text-primary text-xl mb-3">No recourse</h3>
              <p className="text-gray-600 leading-relaxed">
                Repayment comes only from claim proceeds. No personal guarantee, no lien on the
                property, no balance carried forward.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-hairline-light">
              <h3 className="font-bold text-primary text-xl mb-3">No change to your team</h3>
              <p className="text-gray-600 leading-relaxed">
                Your public adjuster and your attorney run the claim exactly as they would
                otherwise. We fund it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What we fund */}
      <section className="bg-offwhite py-24 border-t border-hairline-light">
        <div className="wrap">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
              What we fund
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              The vendor costs a commercial property claim generates before it resolves.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {fundedCosts.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white p-8 rounded-xl border border-hairline-light"
                >
                  <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <p className="text-gray-600">
              If a cost is necessary to pursue the claim and it clears underwriting, we fund it.
            </p>
            <Link
              to="/what-we-fund"
              className="inline-flex items-center text-primary font-bold hover:text-accent transition-colors whitespace-nowrap"
            >
              See the full list <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-primary py-24 text-white">
        <div className="wrap">
          <div className="max-w-3xl mb-16">
            <div className="eyebrow mb-8">The Structure</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">How it works</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div
                key={step.num}
                className="bg-elevated/40 border border-hairline-dark rounded-xl p-8 flex flex-col"
              >
                <div className="font-mono text-accent text-sm font-bold tracking-widest mb-5">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold mb-4 leading-snug">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{step.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link
              to="/how-it-works"
              className="inline-flex items-center text-white font-bold hover:text-accent transition-colors"
            >
              Read the full process <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Underwriting */}
      <section className="bg-white py-24">
        <div className="wrap">
          <div className="max-w-measure">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight mb-8">
              Underwriting built on our own data.
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Committing non-recourse capital requires a defensible view of the loss before a
                dollar is deployed, so we built the storm and property data platform that gives us
                one.
              </p>
              <p className="text-base text-gray-500">
                The platform is internal. It underwrites our capital. It is not a service we sell,
                and it does not assess or value anyone's claim.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Storm monitoring */}
      <section className="bg-white py-24 border-t border-hairline-light">
        <div className="wrap">
          <div className="max-w-4xl mx-auto bg-primary rounded-2xl p-10 md:p-16 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 bg-accent opacity-[0.07] rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-accent/15 rounded-xl flex items-center justify-center mb-8">
                <Bell className="w-7 h-7 text-accent" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Free storm monitoring for your portfolio.
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl">
                Enrol any commercial property and we will notify you when a catalogued weather event
                affects its coordinates. No cost, no commitment, and no relationship to funding.
              </p>
              <Link
                to="/storm-monitoring"
                className="inline-flex items-center gap-2 bg-accent text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#E6AC00] transition-colors group"
              >
                Enrol a Property
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What StormChecks is */}
      <section className="bg-offwhite py-20 border-t border-hairline-light">
        <div className="wrap">
          <div className="max-w-4xl mx-auto bg-white rounded-xl border border-hairline-light p-8 md:p-10">
            <h2 className="text-xl font-bold text-primary mb-4">What StormChecks is</h2>
            <p className="text-gray-600 leading-relaxed">
              StormChecks is a specialty finance company. We underwrite and fund the cost of
              pursuing commercial property insurance claims. We do not adjust claims, negotiate with
              carriers, or advise owners on claims, coverage, or legal strategy — those are the roles
              of the licensed public adjuster and attorney the owner engages.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary py-24 border-t border-hairline-dark">
        <div className="wrap text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Talk to our underwriting team.
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            If you own commercial property and are working with a licensed public adjuster or
            attorney, we will review the funding request and issue terms.
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
    </>
  );
};

export default Home;
