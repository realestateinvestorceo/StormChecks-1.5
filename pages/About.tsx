import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2 } from 'lucide-react';

const team = [
  {
    name: 'Josh Zieglowsky',
    title: 'Chief Business Development Officer',
    bio: 'Nearly twenty years in commercial real estate across acquisitions, dispositions, asset management, and financing. Builds the relationships with owners, public adjusters, and counsel that bring funding requests to the desk.',
    image:
      'https://storage.googleapis.com/msgsndr/7fFIJC0GfXGlSGfKIuzi/media/69699f9565d73d8dc6e249e0.png',
  },
  {
    name: 'Josh Miller, PE',
    title: 'Head of Underwriting',
    bio: 'A licensed Professional Engineer who leads underwriting. Every funding commitment is priced and approved through that work.',
    image:
      'https://storage.googleapis.com/msgsndr/7fFIJC0GfXGlSGfKIuzi/media/69699f9565d73d98ece249e1.png',
  },
  {
    name: 'Nate Worcester',
    title: 'Head of Operations',
    bio: 'Runs the funding operation — vendor onboarding, invoice processing, disbursement, and the systems that keep capital moving on schedule once terms are signed.',
    image:
      'https://storage.googleapis.com/msgsndr/7fFIJC0GfXGlSGfKIuzi/media/6969a0fbe125efb64076cf37.png',
  },
];

const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-primary hero-glow py-24 md:py-28 relative overflow-hidden">
        <div className="wrap relative z-10">
          <div className="max-w-4xl">
            <div className="eyebrow mb-8">Built by Owners</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              A specialty lender for commercial property claims.
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl">
              StormChecks underwrites and funds the cost of pursuing a commercial property insurance
              claim. Our leadership owns and manages over $200 million in commercial real estate. We
              lend against the process we know from the inside.
            </p>
          </div>
        </div>
      </section>

      {/* The thesis */}
      <section className="bg-white py-24">
        <div className="wrap">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-4 mb-10">
              <div className="p-3 bg-accent/15 rounded-lg">
                <Building2 className="w-7 h-7 text-accent" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                Why the capital matters
              </h2>
            </div>

            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                A commercial property claim is expensive to pursue. Engineering reports,
                environmental testing, drafting, mitigation, temporary repairs — the invoices arrive
                while the claim is still open, and they arrive to the owner. That is a real capital
                requirement, and it lands at exactly the moment an owner is least able to absorb it.
              </p>
              <p>
                It is also a financing problem rather than a construction one, which is how
                StormChecks approaches it. We underwrite the funding request, commit non-recourse capital
                against it, and pay the vendors directly. If the claim resolves, we are repaid from
                the proceeds on terms set in advance. If it does not, the cost stays with us.
              </p>
              <p>
                That structure only works with underwriting good enough to price it, and we have
                deliberately kept our role to the capital. The claim itself belongs to the owner and
                the licensed professionals they engage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-offwhite py-24 border-t border-hairline-light">
        <div className="wrap">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Leadership</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Commercial real estate operators, underwriters, and engineers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-xl border border-hairline-light overflow-hidden flex flex-col"
              >
                <div className="aspect-[4/3] bg-gray-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-primary mb-1">{member.name}</h3>
                  <p className="text-accent font-bold text-xs uppercase tracking-wide mb-4">
                    {member.title}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Boundary */}
      <section className="bg-primary py-24 text-white">
        <div className="wrap">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-10">Our role, precisely</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 border border-hairline-dark rounded-xl p-8">
                <div className="text-xs font-bold text-accent uppercase tracking-wider mb-4">
                  What we do
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                    <span>Underwrite commercial property claim funding requests</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                    <span>Issue written, non-recourse funding terms</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                    <span>Pay approved vendor invoices directly</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white/5 border border-hairline-dark rounded-xl p-8">
                <div className="text-xs font-bold text-accent uppercase tracking-wider mb-4">
                  What we do not do
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-white/30 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                    <span>Adjust claims or act as a public adjuster</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-white/30 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                    <span>Negotiate or communicate with carriers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-white/30 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                    <span>Advise on claims, coverage, or legal strategy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-white/30 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                    <span>Select, recommend, or direct your professionals</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-24 border-t border-hairline-light">
        <div className="wrap text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
Contact our underwriting team.
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
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

export default About;
