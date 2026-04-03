import React from 'react';
import { Link } from 'react-router-dom';
import { Cloud, Search, Camera, FileText, Calculator, ClipboardCheck, XCircle, CheckCircle } from 'lucide-react';
import SEOHead from '../components/seo/SEOHead';

const ExpertFile: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <SEOHead
        title="The Expert File"
        description="See what goes into a StormChecks forensic expert file. Weather data, damage documentation, and carrier-ready evidence packages."
        canonicalPath="/expert-file"
      />
      {/* Hero Section */}
      <section className="bg-primary py-24 md:py-32 relative overflow-hidden">
        
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('https://storage.googleapis.com/msgsndr/7fFIJC0GfXGlSGfKIuzi/media/6965f00098efbd0763445bd5.png')" }}
          ></div>
          <div className="absolute inset-0 bg-[#0B1F33]/85"></div>
        </div>

        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute -right-[10%] -top-[10%] w-[800px] h-[800px] bg-white opacity-[0.03] rounded-full blur-3xl"></div>
          <div className="absolute right-[5%] top-[25%] w-[600px] h-[600px] bg-accent opacity-[0.04] rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="h-0.5 w-8 bg-accent"></div>
              <span className="text-accent font-bold tracking-[0.2em] uppercase text-sm">
                THE DELIVERABLE
              </span>
              <div className="h-0.5 w-8 bg-accent"></div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              The Expert File: Forensic Documentation Built for Scrutiny
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Whether for insurance recovery, litigation support, or transaction due diligence — our forensic files are built to the highest standards of technical rigor.
            </p>
          </div>
        </div>
      </section>

      {/* Core Statement Section */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center relative px-4">
            <blockquote className="text-3xl md:text-4xl lg:text-5xl font-serif italic text-primary leading-tight">
              <span className="text-accent opacity-40 text-7xl absolute -top-10 left-0 md:-left-12 font-sans not-italic">"</span>
              Anyone can inspect a building. What most can't do is produce documentation that holds up under professional review. That's what the Expert File is built for.
              <span className="text-accent opacity-40 text-7xl absolute -bottom-16 right-0 md:-right-12 font-sans not-italic">"</span>
            </blockquote>
          </div>
        </div>
      </section>

      {/* What's In the Expert File Section */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
              What's In the Expert File
            </h2>
            <p className="text-xl text-gray-600">
              Every file includes six components — each designed to meet the highest standards of forensic documentation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col h-full group">
              <div className="h-48 w-full relative overflow-hidden">
                <img 
                  src="https://storage.googleapis.com/msgsndr/7fFIJC0GfXGlSGfKIuzi/media/6965f16a02f1be8a470629d9.png" 
                  alt="Meteorological Verification" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="w-14 h-14 bg-primary/5 rounded-lg flex items-center justify-center mb-6">
                  <Cloud className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">Meteorological Verification</h3>
                <p className="text-gray-600 leading-relaxed">
                  Date-specific storm data from NOAA and private weather services — hail size, wind speed, duration, and direction — confirmed to your property's exact coordinates. This is the storm-to-location linkage professional review requires.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col h-full group">
              <div className="h-48 w-full relative overflow-hidden">
                <img 
                  src="https://storage.googleapis.com/msgsndr/7fFIJC0GfXGlSGfKIuzi/media/6965f1daf8a93bbc612078b4.png" 
                  alt="Forensic Inspection Findings" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="w-14 h-14 bg-primary/5 rounded-lg flex items-center justify-center mb-6">
                  <Search className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">Forensic Inspection Findings</h3>
                <p className="text-gray-600 leading-relaxed">
                  System-by-system damage analysis: roof, façade, HVAC, gutters, flashing, membrane. Each finding is tied to a specific storm event with photographic evidence and technical narrative.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col h-full group">
              <div className="h-48 w-full relative overflow-hidden">
                <img 
                  src="https://storage.googleapis.com/msgsndr/7fFIJC0GfXGlSGfKIuzi/media/6965f23ec7683b7cd9fec24b.png" 
                  alt="Evidence Library" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="w-14 h-14 bg-primary/5 rounded-lg flex items-center justify-center mb-6">
                  <Camera className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">Evidence Library</h3>
                <p className="text-gray-600 leading-relaxed">
                  Labeled, grid-based photo documentation with measurement references, microscopic impact analysis, and comparison shots. Every image is timestamped and indexed for adjuster review.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col h-full group">
              <div className="h-48 w-full relative overflow-hidden">
                <img 
                  src="https://storage.googleapis.com/msgsndr/7fFIJC0GfXGlSGfKIuzi/media/6965f2a5c7683b50adfecc96.png" 
                  alt="Causation Narrative" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="w-14 h-14 bg-primary/5 rounded-lg flex items-center justify-center mb-6">
                  <FileText className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">Causation Narrative</h3>
                <p className="text-gray-600 leading-relaxed">
                  Carrier-recognized language establishing event specificity and eliminating alternative causes like wear-and-tear or deferred maintenance. This is the section most contractor bids are missing — and why they get denied.
                </p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col h-full group">
              <div className="h-48 w-full relative overflow-hidden">
                <img 
                  src="https://storage.googleapis.com/msgsndr/7fFIJC0GfXGlSGfKIuzi/media/6965f37695f9f92554ff2e09.png" 
                  alt="Scope & Cost Support" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="w-14 h-14 bg-primary/5 rounded-lg flex items-center justify-center mb-6">
                  <Calculator className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">Scope & Cost Support</h3>
                <p className="text-gray-600 leading-relaxed">
                  Replacement and repair estimates built in Xactimate — the same software carriers use internally. Scope is aligned to carrier review standards, not contractor markup.
                </p>
              </div>
            </div>

            {/* Card 6 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col h-full group">
              <div className="h-48 w-full relative overflow-hidden">
                <img 
                  src="https://storage.googleapis.com/msgsndr/7fFIJC0GfXGlSGfKIuzi/media/6965f40595f9f935e0ff3c14.png" 
                  alt="Executive Summary" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="w-14 h-14 bg-primary/5 rounded-lg flex items-center justify-center mb-6">
                  <ClipboardCheck className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">Executive Summary</h3>
                <p className="text-gray-600 leading-relaxed">
                  A technical brief formatted for carrier internal decision-making. Clear, concise, and designed to move through the approval process without triggering review flags.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
              Why Professional Documentation Matters
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Left Column: Standard Contractor Bid */}
            <div className="bg-red-50/50 rounded-xl p-8 border border-red-100 relative">
               <div className="absolute top-0 left-0 w-full h-1 bg-red-500 rounded-t-xl"></div>
               <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                 <XCircle className="w-6 h-6 text-red-500 mr-2 flex-shrink-0" />
                 Standard Contractor Bid
               </h3>
               <ul className="space-y-4 mb-8">
                 <li className="flex items-start">
                   <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                   <span className="text-gray-600">"Replace roof due to hail damage"</span>
                 </li>
                 <li className="flex items-start">
                   <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                   <span className="text-gray-600">Cost: $250,000</span>
                 </li>
                 <li className="flex items-start">
                   <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                   <span className="text-gray-600">No weather data</span>
                 </li>
                 <li className="flex items-start">
                   <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                   <span className="text-gray-600">No storm linkage</span>
                 </li>
                 <li className="flex items-start">
                   <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                   <span className="text-gray-600">No causation narrative</span>
                 </li>
               </ul>
               <div className="pt-6 border-t border-red-100">
                 <p className="font-bold text-red-600 uppercase tracking-wide">
                   RESULT: Incomplete documentation. Weak position.
                 </p>
               </div>
            </div>

            {/* Right Column: StormChecks Expert File */}
            <div className="bg-green-50/50 rounded-xl p-8 border border-green-100 relative shadow-lg">
               <div className="absolute top-0 left-0 w-full h-1 bg-green-500 rounded-t-xl"></div>
               <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                 <CheckCircle className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" />
                 StormChecks Expert File
               </h3>
               <ul className="space-y-4 mb-8">
                 <li className="flex items-start">
                   <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                   <span className="text-gray-700 font-medium">120-page forensic report</span>
                 </li>
                 <li className="flex items-start">
                   <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                   <span className="text-gray-700 font-medium">NOAA weather verification to exact coordinates</span>
                 </li>
                 <li className="flex items-start">
                   <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                   <span className="text-gray-700 font-medium">Microscopic impact analysis</span>
                 </li>
                 <li className="flex items-start">
                   <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                   <span className="text-gray-700 font-medium">Storm-to-damage causation narrative</span>
                 </li>
                 <li className="flex items-start">
                   <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                   <span className="text-gray-700 font-medium">Xactimate estimate aligned to carrier standards</span>
                 </li>
               </ul>
               <div className="pt-6 border-t border-green-100">
                 <p className="font-bold text-green-600 uppercase tracking-wide">
                   RESULT: Complete documentation. Defensible position.
                 </p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-24 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Get Documentation That Holds Up
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed">
            Start with free assessment. If we find damage, we'll build the file that holds up.
          </p>

          <div className="flex flex-col items-center gap-4">
            <Link to="/contact?focus=true" className="bg-accent text-primary px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#E6AC00] transition-all shadow-lg hover:-translate-y-1">
              Start Free Assessment
            </Link>
            <p className="text-gray-500 text-sm font-medium">
              No cost. No obligation. 2-year weather analysis included.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExpertFile;