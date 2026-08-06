import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Bell, Check, CheckCircle, Loader2, Send, MapPin, Layers } from 'lucide-react';

declare global {
  interface Window {
    google: any;
  }
}

const WEBHOOK_URL = 'https://hook.us2.make.com/unqb70ofcu6wo9hhfaoc1kqmnjsloioy';

const StormMonitoring: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLElement>(null);
  const addressInputRef = useRef<HTMLInputElement>(null);
  const autocompleteRef = useRef<any>(null);

  useEffect(() => {
    const initAutocomplete = () => {
      if (window.google?.maps && addressInputRef.current && !autocompleteRef.current) {
        const autocomplete = new window.google.maps.places.Autocomplete(addressInputRef.current, {
          types: ['address'],
          fields: ['formatted_address'],
          componentRestrictions: { country: 'us' },
        });
        autocomplete.addListener('place_changed', () => {
          const place = autocomplete.getPlace();
          if (place.formatted_address && addressInputRef.current) {
            addressInputRef.current.value = place.formatted_address;
          }
        });
        autocompleteRef.current = autocomplete;
      }
    };

    if (window.google?.maps) {
      initAutocomplete();
      return;
    }
    const checkGoogle = setInterval(() => {
      if (window.google?.maps) {
        clearInterval(checkGoogle);
        initAutocomplete();
      }
    }, 100);
    return () => clearInterval(checkGoogle);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      formType: 'storm-monitoring',
      fullName: formData.get('fullName'),
      companyName: formData.get('companyName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      address: formData.get('address'),
      propertyType: formData.get('propertyType'),
      portfolioSize: formData.get('portfolioSize'),
    };

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setIsSubmitted(true);
        formRef.current?.scrollIntoView({ behavior: 'smooth' });
      } else {
        alert('Something went wrong. Please try again later.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Something went wrong. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-primary hero-glow py-24 md:py-28 relative overflow-hidden">
        <div className="wrap relative z-10">
          <div className="max-w-4xl">
            <div className="eyebrow mb-8">Free For Commercial Owners</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Storm monitoring for your portfolio.
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl">
              Enrol any commercial property and we will notify you when a catalogued weather event
              affects its coordinates. No cost, no commitment, and no relationship to funding.
            </p>
          </div>
        </div>
      </section>

      {/* What it is */}
      <section className="bg-white py-20">
        <div className="wrap">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-xl border border-hairline-light">
              <div className="w-12 h-12 bg-accent/15 rounded-lg flex items-center justify-center mb-6">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <h2 className="text-lg font-bold text-primary mb-3">Enrol an address</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Give us the property address. We resolve it to coordinates and add it to the
                monitoring set. One property or a whole portfolio.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl border border-hairline-light">
              <div className="w-12 h-12 bg-accent/15 rounded-lg flex items-center justify-center mb-6">
                <Layers className="w-6 h-6 text-accent" />
              </div>
              <h2 className="text-lg font-bold text-primary mb-3">We watch the event record</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                The same catalogued storm data that underwrites our funding runs against every
                enrolled address as events are recorded.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl border border-hairline-light">
              <div className="w-12 h-12 bg-accent/15 rounded-lg flex items-center justify-center mb-6">
                <Bell className="w-6 h-6 text-accent" />
              </div>
              <h2 className="text-lg font-bold text-primary mb-3">You get notified</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                When a catalogued event affects an enrolled property, we email you what was recorded
                — the date, the event type, and the measured intensity.
              </p>
            </div>
          </div>

          <p className="text-center text-gray-500 text-sm mt-10 max-w-2xl mx-auto leading-relaxed">
            A monitoring notification reports what the weather record shows at your coordinates. It
            is not an assessment of your property, and it is not a recommendation to take any action.
          </p>
        </div>
      </section>

      {/* Where the data comes from */}
      <section className="bg-offwhite py-20 border-t border-hairline-light">
        <div className="wrap">
          <div className="max-w-measure mx-auto text-center">
            <div className="eyebrow mb-8">Where the Data Comes From</div>
            <p className="text-xl text-gray-600 leading-[1.7]">
              Committing non-recourse capital requires a defensible view of the loss before a dollar
              is deployed. We built the platform that gives us one — catalogued storm history at
              parcel-level coordinates, automated roof and structure measurement from aerial imagery,
              and loss-dating models that place an event on a timeline. Monitoring runs on the same
              storm record.
            </p>
            <p className="text-sm text-gray-500 leading-relaxed mt-8">
              The platform is internal. It underwrites our capital. It is not a service we sell, and
              it does not assess or value anyone's claim.
            </p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="bg-gray-50 py-24 border-t border-hairline-light" ref={formRef}>
        <div className="wrap">
          <div className="max-w-2xl mx-auto">
            {!isSubmitted ? (
              <>
                <div className="mb-10">
                  <h2 className="text-3xl font-bold text-primary mb-4">Enrol a property</h2>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Check className="w-4 h-4 text-accent flex-shrink-0" />
                      <span>Free, with no cost at any point</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Check className="w-4 h-4 text-accent flex-shrink-0" />
                      <span>Entirely separate from funding — enrolling commits you to nothing</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Check className="w-4 h-4 text-accent flex-shrink-0" />
                      <span>Unsubscribe at any time</span>
                    </div>
                  </div>
                </div>

                <form className="space-y-6 bg-white p-8 md:p-10 rounded-xl border border-hairline-light" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                        Your Name <span className="text-accent">*</span>
                      </label>
                      <input
                        name="fullName"
                        type="text"
                        className="w-full px-4 py-3 bg-gray-50 border border-hairline-light rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                        Company / Entity <span className="text-accent">*</span>
                      </label>
                      <input
                        name="companyName"
                        type="text"
                        className="w-full px-4 py-3 bg-gray-50 border border-hairline-light rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                        Email <span className="text-accent">*</span>
                      </label>
                      <input
                        name="email"
                        type="email"
                        className="w-full px-4 py-3 bg-gray-50 border border-hairline-light rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                        Phone
                      </label>
                      <input
                        name="phone"
                        type="tel"
                        className="w-full px-4 py-3 bg-gray-50 border border-hairline-light rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                      Property Address <span className="text-accent">*</span>
                    </label>
                    <input
                      ref={addressInputRef}
                      name="address"
                      type="text"
                      className="w-full px-4 py-3 bg-gray-50 border border-hairline-light rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                      placeholder="123 Main Street, Dallas, TX 75201"
                      required
                    />
                    <p className="text-xs text-gray-400">
                      Enrol one property to start. We can add the rest of the portfolio afterwards.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                        Property Type <span className="text-accent">*</span>
                      </label>
                      <select
                        name="propertyType"
                        className="w-full px-4 py-3 bg-gray-50 border border-hairline-light rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors text-gray-600"
                        required
                      >
                        <option value="">Select type...</option>
                        <option>Multifamily</option>
                        <option>Industrial / Warehouse</option>
                        <option>Retail</option>
                        <option>Office</option>
                        <option>Self-Storage</option>
                        <option>Mixed-Use</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                        Properties in Portfolio
                      </label>
                      <select
                        name="portfolioSize"
                        className="w-full px-4 py-3 bg-gray-50 border border-hairline-light rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors text-gray-600"
                      >
                        <option value="">Select...</option>
                        <option>1</option>
                        <option>2–5</option>
                        <option>6–20</option>
                        <option>21–50</option>
                        <option>50+</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-accent text-primary font-bold text-lg py-4 rounded-lg hover:bg-[#E6AC00] transition-colors flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                    >
                      {isSubmitting ? (
                        <>
                          Submitting… <Loader2 className="w-5 h-5 animate-spin" />
                        </>
                      ) : (
                        <>
                          Enrol This Property{' '}
                          <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div className="bg-white p-10 md:p-14 rounded-xl border border-hairline-light text-center">
                <div className="w-20 h-20 bg-accent/15 rounded-full flex items-center justify-center mx-auto mb-8">
                  <CheckCircle className="w-10 h-10 text-accent" />
                </div>
                <h2 className="text-3xl font-bold text-primary mb-6">Property enrolled.</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-lg mx-auto">
                  We have added your address to the monitoring set. You will hear from us when a
                  catalogued weather event affects those coordinates — and not otherwise.
                </p>
                <Link
                  to="/"
                  className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-primary/90 transition-all"
                >
                  Back to Home
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Funding cross-link */}
      <section className="bg-white py-20 border-t border-hairline-light">
        <div className="wrap">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-5">
              Monitoring and funding are separate.
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Enrolling a property commits you to nothing and leads to nothing. Separately, for
              owners already working with their own licensed public adjuster or attorney on a
              commercial property claim, our underwriting team can issue terms to fund the vendor
              costs of pursuing it.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center text-primary font-bold hover:text-accent transition-colors"
            >
              Request funding terms →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StormMonitoring;
