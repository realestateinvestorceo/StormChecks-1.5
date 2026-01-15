import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HowItWorks: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary py-24 md:py-32 relative overflow-hidden">
        {/* Decorative background elements */}
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
              Forensic building intelligence in three steps. Free to start.
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-28 left-[16%] right-[16%] h-0.5 bg-gray-100 -z-10"></div>

            {/* Step 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-full h-56 mb-8 rounded-xl overflow-hidden shadow-lg border border-gray-100 group">
                <img 
                  src="https://storage.googleapis.com/msgsndr/7fFIJC0GfXGlSGfKIuzi/media/6965ddaf02f1be84b403b482.png" 
                  alt="Free Property Assessment" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="w-12 h-12 bg-accent text-primary rounded-full flex items-center justify-center font-bold text-xl mb-6 shadow-md border-4 border-white">1</div>
              <h3 className="text-xl font-bold text-primary mb-4">Free Property Assessment</h3>
              <p className="text-gray-600 leading-relaxed">
                We analyze your property's weather history for the past 2 years and set up continuous monitoring. If there's damage now, we'll find it. If a storm hits later, we'll alert you. No cost ever for this.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-full h-56 mb-8 rounded-xl overflow-hidden shadow-lg border border-gray-100 group">
                <img 
                  src="https://storage.googleapis.com/msgsndr/7fFIJC0GfXGlSGfKIuzi/media/6965df0398efbde127424a70.png" 
                  alt="Forensic Documentation" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="w-12 h-12 bg-accent text-primary rounded-full flex items-center justify-center font-bold text-xl mb-6 shadow-md border-4 border-white">2</div>
              <h3 className="text-xl font-bold text-primary mb-4">Forensic Assessment</h3>
              <p className="text-gray-600 leading-relaxed">
                If damage exists, we deploy our field team to document every inch. We build the carrier-grade evidence file that documents the damage comprehensively.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-full h-56 mb-8 rounded-xl overflow-hidden shadow-lg border border-gray-100 group">
                <img 
                  src="https://storage.googleapis.com/msgsndr/7fFIJC0GfXGlSGfKIuzi/media/6965e07a98efbd90424278f4.png" 
                  alt="Claim Recovery" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="w-12 h-12 bg-accent text-primary rounded-full flex items-center justify-center font-bold text-xl mb-6 shadow-md border-4 border-white">3</div>
              <h3 className="text-xl font-bold text-primary mb-4">Documentation Delivery</h3>
              <p className="text-gray-600 leading-relaxed">
                We deliver a comprehensive forensic file to you. We can then connect you with vetted professionals if you choose to pursue recovery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-24 border-t border-gray-200">
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