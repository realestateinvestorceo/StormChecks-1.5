import React, { useState, useRef, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2, AlertCircle } from 'lucide-react';

declare global {
  interface Window {
    google: any;
  }
}

const WEBHOOK_URL = 'https://hook.us2.make.com/unqb70ofcu6wo9hhfaoc1kqmnjsloioy';

const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [searchParams] = useSearchParams();
  const formRef = useRef<HTMLElement>(null);
  const contactInfoRef = useRef<HTMLDivElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const addressInputRef = useRef<HTMLInputElement>(null);
  const autocompleteRef = useRef<any>(null);

  useEffect(() => {
    if (searchParams.get('contact') === 'true') {
      const timer = setTimeout(() => {
        contactInfoRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [searchParams]);

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
      formType: 'funding-request',
      fullName: formData.get('fullName'),
      companyName: formData.get('companyName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      address: formData.get('address'),
      propertyType: formData.get('propertyType'),
      sqFootage: formData.get('sqFootage'),
      representation: formData.get('representation'),
      fundingNeeded: formData.get('fundingNeeded'),
      notes: formData.get('notes'),
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

  const inputClass =
    'w-full px-4 py-3 bg-gray-50 border border-hairline-light rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors';

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-primary hero-glow py-24 md:py-28 relative overflow-hidden">
        <div className="wrap relative z-10">
          <div className="max-w-4xl">
            <div className="eyebrow mb-8">Underwriting</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Request funding terms.
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl">
              Send us the property and the scope of work your public adjuster or attorney has
              proposed. Underwriting will come back with written terms.
            </p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-24 bg-white" ref={formRef}>
        <div className="wrap">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-16">
            {/* Form column */}
            <div className="lg:col-span-2">
              {!isSubmitted ? (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                        Your Name <span className="text-accent">*</span>
                      </label>
                      <input ref={nameInputRef} name="fullName" type="text" className={inputClass} required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                        Company / Entity <span className="text-accent">*</span>
                      </label>
                      <input name="companyName" type="text" className={inputClass} required />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                        Email <span className="text-accent">*</span>
                      </label>
                      <input name="email" type="email" className={inputClass} required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                        Phone
                      </label>
                      <input name="phone" type="tel" className={inputClass} />
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
                      className={inputClass}
                      placeholder="123 Main Street, Dallas, TX 75201"
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                        Property Type <span className="text-accent">*</span>
                      </label>
                      <select name="propertyType" className={`${inputClass} text-gray-600`} required>
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
                        Approximate Sq Footage
                      </label>
                      <input name="sqFootage" type="text" className={inputClass} placeholder="45,000 sq ft" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                      Who is representing you on the claim? <span className="text-accent">*</span>
                    </label>
                    <select name="representation" className={`${inputClass} text-gray-600`} required>
                      <option value="">Select...</option>
                      <option>Licensed public adjuster engaged</option>
                      <option>Attorney engaged</option>
                      <option>Both public adjuster and attorney engaged</option>
                      <option>Selecting representation now</option>
                    </select>
                    <p className="text-xs text-gray-400">
                      We fund the cost of pursuing a claim your own licensed professionals are
                      handling. We do not adjust claims or provide representation.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                      Which costs need funding?
                    </label>
                    <textarea
                      name="fundingNeeded"
                      className={`${inputClass} h-24 resize-none`}
                      placeholder="Engineering, drafting, environmental testing, water mitigation, temporary repairs, meteorological analysis…"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                      Anything else underwriting should know?
                    </label>
                    <textarea
                      name="notes"
                      className={`${inputClass} h-32 resize-none`}
                      placeholder="Date of loss, current status of the claim, estimated scope, timing constraints…"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-accent text-primary font-bold text-lg py-4 rounded-lg hover:bg-[#E6AC00] transition-colors flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                    >
                      {isSubmitting ? (
                        <>
                          Sending… <Loader2 className="w-5 h-5 animate-spin" />
                        </>
                      ) : (
                        <>
                          Request Funding Terms{' '}
                          <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
                    <p className="text-sm text-center text-gray-500 mt-4">
                      Underwriting typically responds within two business days.
                    </p>
                  </div>
                </form>
              ) : (
                <div className="py-12 text-center">
                  <div className="w-20 h-20 bg-accent/15 rounded-full flex items-center justify-center mb-8 mx-auto">
                    <CheckCircle className="w-10 h-10 text-accent" />
                  </div>
                  <h2 className="text-3xl font-bold text-primary mb-6">Request received.</h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-lg mx-auto">
                    Our underwriting team has your submission and will come back with written
                    funding terms, typically within two business days.
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

            {/* Info column */}
            <div className="lg:pl-8 lg:border-l lg:border-gray-100" ref={contactInfoRef}>
              <h2 className="font-bold text-primary text-lg mb-6">Contact</h2>
              <div className="space-y-6 mb-10">
                <div className="flex items-center space-x-3 text-gray-600">
                  <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0 border border-gray-100">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                      Email
                    </span>
                    <a
                      href="mailto:info@stormchecks.com"
                      className="hover:text-primary transition-colors font-medium leading-tight"
                    >
                      info@stormchecks.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3 text-gray-600">
                  <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0 border border-gray-100">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                      Phone
                    </span>
                    <a
                      href="tel:+18018212530"
                      className="hover:text-primary transition-colors font-medium leading-tight"
                    >
                      +1 801-821-2530
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3 text-gray-600">
                  <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0 border border-gray-100">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                      Office
                    </span>
                    <span className="font-medium leading-tight">Salt Lake City, Utah</span>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-offwhite rounded-xl border border-hairline-light">
                <div className="flex items-start gap-3 mb-3">
                  <AlertCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <h3 className="font-bold text-primary">Scope of our role</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  StormChecks underwrites and funds the cost of pursuing commercial property
                  insurance claims. We do not adjust claims, negotiate with carriers, or advise on
                  claims, coverage, or legal strategy.
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-100">
                <h3 className="font-bold text-primary mb-3">Not pursuing a claim?</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Free storm monitoring is open to any commercial owner and is entirely separate from
                  funding.
                </p>
                <Link
                  to="/storm-monitoring"
                  className="text-primary font-bold text-sm hover:text-accent transition-colors"
                >
                  Enrol a property →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
