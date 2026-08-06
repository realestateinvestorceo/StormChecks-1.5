import React from 'react';
import { Mail, Phone, MapPin, AlertCircle } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-primary hero-glow py-24 md:py-28 relative overflow-hidden">
        <div className="wrap relative z-10">
          <div className="max-w-4xl">
            <div className="eyebrow mb-8">Contact</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Contact StormChecks
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl">
              Enquiries about funding are handled directly by our underwriting team, and come to us
              through the licensed public adjuster or attorney a property owner has already engaged.
            </p>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-24 bg-white">
        <div className="wrap">
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-10">
            <div className="flex flex-col">
              <div className="w-12 h-12 bg-accent/15 rounded-lg flex items-center justify-center mb-6">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <span className="mono-caption text-gray-400 mb-2">/ Email</span>
              <a
                href="mailto:info@stormchecks.com"
                className="text-primary font-bold text-lg hover:text-accent transition-colors break-all"
              >
                info@stormchecks.com
              </a>
            </div>

            <div className="flex flex-col">
              <div className="w-12 h-12 bg-accent/15 rounded-lg flex items-center justify-center mb-6">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <span className="mono-caption text-gray-400 mb-2">/ Phone</span>
              <a
                href="tel:+18018212530"
                className="text-primary font-bold text-lg hover:text-accent transition-colors"
              >
                +1 801-821-2530
              </a>
            </div>

            <div className="flex flex-col">
              <div className="w-12 h-12 bg-accent/15 rounded-lg flex items-center justify-center mb-6">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <span className="mono-caption text-gray-400 mb-2">/ Office</span>
              <span className="text-primary font-bold text-lg">Salt Lake City, Utah</span>
            </div>
          </div>
        </div>
      </section>

      {/* Scope of role */}
      <section className="bg-offwhite py-20 border-t border-hairline-light">
        <div className="wrap">
          <div className="max-w-4xl mx-auto bg-white rounded-xl border border-hairline-light p-8 md:p-10">
            <div className="flex items-start gap-3 mb-4">
              <AlertCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <h2 className="text-xl font-bold text-primary">Scope of our role</h2>
            </div>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                StormChecks underwrites and funds the cost of pursuing commercial property insurance
                claims. We do not adjust claims, negotiate with carriers, or advise on claims,
                coverage, or legal strategy. Those are the roles of the licensed public adjuster and
                attorney a property owner engages.
              </p>
              <p>
                Please do not send claim documents, loss details, or policy information to this
                office. We are not able to review them and cannot advise on any claim.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
