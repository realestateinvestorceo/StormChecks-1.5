import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CloudLightning, Satellite, CalendarClock, Database, Lock } from 'lucide-react';

const capabilities = [
  {
    icon: CloudLightning,
    title: 'Storm event data',
    body: "A catalogued record of hail and wind events resolved to parcel-level coordinates. Radar-derived intensity, station observations, and event footprints assembled into a single queryable history for any commercial address in the states we cover.",
    detail: 'Underwriting question it answers: what weather has this parcel actually seen, and when?',
  },
  {
    icon: Satellite,
    title: 'Property measurement',
    body: "Automated roof and structure geometry derived from aerial and satellite imagery — footprint, facet count, slope, surface area, and material class. Measurements are generated without a site visit and without any involvement from the property owner.",
    detail: 'Underwriting question it answers: what is the physical scale of the asset behind this request?',
  },
  {
    icon: CalendarClock,
    title: 'Loss dating',
    body: "Models that place a documented loss against the catalogued event record and produce a confidence range for when it occurred. This is an internal risk input, not an opinion offered to any owner, adjuster, carrier, or court.",
    detail: 'Underwriting question it answers: how well does the loss line up with the event history?',
  },
];

const Technology: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-primary hero-glow py-24 md:py-28 relative overflow-hidden">
        <div className="wrap relative z-10">
          <div className="max-w-4xl">
            <div className="eyebrow mb-8">Underwriting Platform</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Underwriting built on our own data.
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl">
              Committing non-recourse capital requires a defensible view of the loss before a dollar
              is deployed. We built the platform that gives us one.
            </p>
          </div>
        </div>
      </section>

      {/* Why we built it */}
      <section className="bg-white py-24">
        <div className="wrap">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 leading-tight">
              Non-recourse funding is an underwriting problem.
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                When repayment depends entirely on whether a claim resolves, the quality of the
                underwriting is the whole business. Generic weather feeds and desktop estimates are
                not enough to price that risk, so we built our own.
              </p>
              <p>
                Three systems sit behind every funding decision: a storm event record resolved to
                property coordinates, automated structure measurement from imagery, and loss-dating
                models. Together they let us underwrite quickly, consistently, and without asking the
                owner to do anything beyond providing the address and the scope of work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-offwhite py-24 border-t border-hairline-light">
        <div className="wrap">
          <div className="max-w-4xl mx-auto space-y-6">
            {capabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.title}
                  className="bg-white rounded-xl border border-hairline-light p-8 md:p-10"
                >
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-accent/15 rounded-xl flex items-center justify-center">
                        <Icon className="w-7 h-7 text-accent" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-4">{cap.title}</h3>
                      <p className="text-gray-600 leading-relaxed mb-6">{cap.body}</p>
                      <div className="border-l border-accent/40 pl-5 py-1">
                        <p className="text-sm text-gray-600 leading-relaxed">{cap.detail}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Boundaries */}
      <section className="bg-primary py-24 text-white">
        <div className="wrap">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">What the platform is for</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 border border-hairline-dark rounded-xl p-8">
                <div className="w-12 h-12 bg-accent/15 rounded-lg flex items-center justify-center mb-6">
                  <Database className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-4">An internal capability</h3>
                <p className="text-gray-300 leading-relaxed">
                  The platform exists to underwrite StormChecks capital. It is not a product we
                  license, a report we sell, or a service offered to property owners, adjusters, or
                  carriers.
                </p>
              </div>
              <div className="bg-white/5 border border-hairline-dark rounded-xl p-8">
                <div className="w-12 h-12 bg-accent/15 rounded-lg flex items-center justify-center mb-6">
                  <Lock className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-4">Not a claim opinion</h3>
                <p className="text-gray-300 leading-relaxed">
                  Its outputs are risk inputs for a funding decision. They are not damage
                  assessments, claim valuations, or expert opinions, and they are not provided to
                  anyone as such.
                </p>
              </div>
            </div>

            <div className="mt-10 bg-white/5 border border-hairline-dark rounded-xl p-8">
              <h3 className="text-xl font-bold mb-4">Where owners see it</h3>
              <p className="text-gray-300 leading-relaxed">
                One output is available to commercial owners directly: storm monitoring. The same
                event record that underwrites our funding also drives free notifications when a
                catalogued weather event affects a property you have enrolled.{' '}
                <Link to="/storm-monitoring" className="text-accent hover:underline font-medium">
                  Enrol a property
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-24 border-t border-hairline-light">
        <div className="wrap text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Put the underwriting to work.
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Send us the property and the proposed scope of work. We will come back with written
            funding terms.
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

export default Technology;
