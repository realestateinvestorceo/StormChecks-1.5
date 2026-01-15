import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, AlertTriangle, FileWarning, FileText, XCircle, Search, CheckCircle, Clock, Eye, Bell, Check, FileDown, TrendingUp, ShieldCheck, Cloud, ClipboardCheck, Scale } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-primary min-h-[calc(100vh-64px)] flex items-center overflow-hidden">
        
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('https://storage.googleapis.com/msgsndr/7fFIJC0GfXGlSGfKIuzi/media/6965d04298efbd224a400246.png')" }}
          ></div>
          <div className="absolute inset-0 bg-[#0B1F33]/85 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-[#0B1F33]/60"></div>
        </div>

        {/* Abstract Background Shapes - Right Side */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {/* Large soft white glow */}
          <div className="absolute -right-[10%] -top-[10%] w-[800px] h-[800px] bg-white opacity-[0.03] rounded-full blur-3xl"></div>
          {/* Amber accent glow */}
          <div className="absolute right-[5%] top-[25%] w-[600px] h-[600px] bg-accent opacity-[0.04] rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center h-full py-12 lg:py-0">
          <div className="max-w-3xl space-y-8">
            {/* Label */}
            <div className="flex items-center space-x-3">
              <div className="h-0.5 w-12 bg-accent"></div>
              <span className="text-accent font-bold tracking-[0.2em] uppercase text-sm">
                FORENSIC BUILDING CONSULTANTS
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-[1.1]">
              We Know What Your Building Is Hiding.
            </h1>

            {/* Subhead */}
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl border-l-2 border-gray-700 pl-6">
              Our team has assessed over $10 billion in commercial property damage. We built StormChecks to bring that expertise to owners like us.
            </p>

            <div className="space-y-6 pt-4">
              {/* Body Text */}
              <p className="text-lg text-gray-400 font-medium">
                Start with free weather assessment. We'll tell you what we find.
              </p>

              {/* CTA Section */}
              <div className="flex flex-col items-start gap-3">
                <Link to="/contact?focus=true" className="group bg-accent text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#E6AC00] transition-all shadow-[0_4px_20px_rgba(201,151,0,0.2)] hover:shadow-[0_4px_25px_rgba(201,151,0,0.35)] hover:-translate-y-0.5 flex items-center gap-2">
                  Get Free Assessment
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <p className="text-gray-500 text-sm font-medium pl-1">
                  2-year weather analysis + ongoing monitoring. No cost, no obligation.
                </p>
              </div>
            </div>
          </div>
          
          {/* Right side - Empty but maintaining grid structure for spacing */}
          <div className="hidden lg:block h-full"></div>
        </div>
      </section>

      {/* Stats Bar Section */}
      <section className="bg-primary border-t border-white/10 py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center">
            
            {/* Stat 1 */}
            <div className="flex flex-col items-center">
              <div className="text-4xl md:text-6xl font-bold text-white mb-3">$10B+</div>
              <div className="text-sm md:text-base text-gray-400 font-medium uppercase tracking-widest">Assessed by Our Team</div>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center">
              <div className="text-4xl md:text-6xl font-bold text-white mb-3">Thousands</div>
              <div className="text-sm md:text-base text-gray-400 font-medium uppercase tracking-widest">Properties Documented</div>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center">
              <div className="text-4xl md:text-6xl font-bold text-white mb-3">$0 Upfront</div>
              <div className="text-sm md:text-base text-gray-400 font-medium uppercase tracking-widest">Ever</div>
            </div>

          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight">
                Most Building Owners Don't Know What They're Missing
              </h2>
              
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Storm damage doesn't announce itself. It hides in roofing membranes, behind cladding, inside HVAC systems. Your maintenance team won't catch it. Your annual inspection won't flag it. But it's affecting your building's performance, lifespan, and value.
                </p>
                <p>
                  Our forensic assessments consistently identify <strong className="font-bold text-primary">$10–$15 per square foot</strong> in undetected damage. For a 30,000 sq ft building, that's over $300,000 in deferred liability — damage that's degrading your asset whether you know about it or not.
                </p>
              </div>

              {/* Callout Cards Grid */}
              <div className="grid sm:grid-cols-2 gap-6 pt-4">
                {/* Card 1 */}
                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-accent shadow-sm">
                  <div className="flex items-start space-x-3 mb-3">
                    <TrendingUp className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <h3 className="font-bold text-primary text-lg">Damage Compounds Over Time</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Undetected storm damage doesn't stay static. Water intrusion spreads. Membrane fractures expand. What costs $50,000 to address today could cost $500,000 in three years.
                  </p>
                </div>

                {/* Card 2 */}
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <div className="flex items-start space-x-3 mb-3">
                    <ShieldCheck className="w-5 h-5 text-gray-400 flex-shrink-0 mt-1" />
                    <h3 className="font-bold text-primary text-lg">Documentation Is Asset Protection</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Whether you're holding, selling, or refinancing — knowing the true condition of your building puts you in control. Forensic documentation protects your position in any scenario.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Content Column - Image */}
            <div className="lg:col-span-5 relative">
              <img 
                src="https://storage.googleapis.com/msgsndr/7fFIJC0GfXGlSGfKIuzi/media/696703aea3a114fbd0f5f05b.png" 
                alt="Hidden storm damage on commercial building" 
                className="w-full h-auto rounded-2xl shadow-lg"
              />
              {/* Stats Card Overlay */}
              <div className="absolute bottom-6 left-6 right-6 md:left-auto md:-right-12 bg-white p-6 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 max-w-xs">
                 <div className="text-xs font-bold text-red-500 uppercase tracking-wider mb-1">HIDDEN LIABILITY</div>
                 <div className="text-3xl font-bold text-primary mb-2">$450,000+</div>
                 <p className="text-xs text-gray-500 font-medium leading-relaxed">Average undetected damage on a 45k sq ft industrial roof.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Our Expertise Section (formerly Why We Win) */}
      <section className="bg-primary py-24 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto mb-16 text-center lg:text-left">
            {/* Label */}
            <div className="flex items-center justify-center lg:justify-start space-x-3 mb-6">
              <div className="h-0.5 w-12 bg-accent"></div>
              <span className="text-accent font-bold tracking-[0.2em] uppercase text-sm">
                OUR EXPERTISE
              </span>
            </div>
            {/* Headline */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
              Forensic Intelligence Built by Specialists
            </h2>
            {/* Body */}
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed max-w-3xl mb-12">
              <p>
                StormChecks combines four disciplines under one roof: meteorological analysis, forensic engineering, building consulting, and claims strategy. Our team includes licensed Professional Engineers, forensic analysts, and weather data specialists.
              </p>
              <p>
                We don't just inspect buildings. We produce forensic intelligence — documentation that stands up to carrier review, litigation scrutiny, and transaction due diligence.
              </p>
            </div>

            {/* Services List Grid */}
            <div className="grid sm:grid-cols-2 gap-6 mb-16">
               <div className="flex items-center space-x-4 bg-white/5 p-4 rounded-lg border border-white/5">
                 <div className="bg-accent/20 p-2 rounded-lg"><Cloud className="w-6 h-6 text-accent" /></div>
                 <span className="font-bold text-lg">Weather Analysis & Monitoring</span>
               </div>
               <div className="flex items-center space-x-4 bg-white/5 p-4 rounded-lg border border-white/5">
                 <div className="bg-accent/20 p-2 rounded-lg"><Search className="w-6 h-6 text-accent" /></div>
                 <span className="font-bold text-lg">Forensic Engineering Inspections</span>
               </div>
               <div className="flex items-center space-x-4 bg-white/5 p-4 rounded-lg border border-white/5">
                 <div className="bg-accent/20 p-2 rounded-lg"><FileText className="w-6 h-6 text-accent" /></div>
                 <span className="font-bold text-lg">Building Damage Assessment Reports</span>
               </div>
               <div className="flex items-center space-x-4 bg-white/5 p-4 rounded-lg border border-white/5">
                 <div className="bg-accent/20 p-2 rounded-lg"><Scale className="w-6 h-6 text-accent" /></div>
                 <span className="font-bold text-lg">Litigation & Adjusting Support</span>
               </div>
            </div>

          </div>

          {/* Comparison Box */}
          <div className="bg-[#132e4a] rounded-2xl p-8 md:p-12 max-w-5xl mx-auto border border-white/10 shadow-2xl relative overflow-hidden">
             {/* Subtle background glow inside card */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent opacity-[0.03] rounded-full blur-3xl pointer-events-none"></div>

            <h3 className="text-2xl font-bold mb-10 text-center relative z-10">The Documentation Difference</h3>
            
            <div className="grid md:grid-cols-2 gap-10 md:gap-16 relative z-10 items-stretch">
              {/* Left Column */}
              <div className="flex flex-col">
                <div className="flex items-center space-x-3 text-red-500 mb-6 h-10">
                  <XCircle className="w-8 h-8 flex-shrink-0" />
                  <h4 className="font-bold text-xl text-white leading-tight">Standard Contractor Assessment</h4>
                </div>
                <div className="flex-grow bg-white/5 p-6 rounded-lg text-gray-400 border border-white/5 leading-relaxed">
                   <ul className="space-y-3">
                      <li className="flex items-start"><span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>Visual inspection only</li>
                      <li className="flex items-start"><span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>No weather verification</li>
                      <li className="flex items-start"><span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>No engineering analysis</li>
                      <li className="flex items-start"><span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>Limited to obvious damage</li>
                   </ul>
                </div>
                <p className="font-bold text-red-400 tracking-wide text-sm flex items-center mt-6">
                  RESULT: Incomplete picture. Missed damage. Weak position.
                </p>
              </div>

              {/* Right Column */}
              <div className="flex flex-col relative">
                {/* Vertical Divider for desktop - Centered precisely */}
                <div className="hidden md:block absolute -left-5 md:-left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
                
                <div className="flex items-center space-x-3 text-green-500 mb-6 h-10">
                  <CheckCircle className="w-8 h-8 flex-shrink-0" />
                  <h4 className="font-bold text-xl text-white leading-tight">StormChecks Forensic Assessment</h4>
                </div>
                <div className="flex-grow bg-white/5 p-6 rounded-lg text-gray-300 border border-white/5 leading-relaxed">
                   <ul className="space-y-3">
                      <li className="flex items-start"><span className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>120+ page engineering report</li>
                      <li className="flex items-start"><span className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>Meteorological event verification</li>
                      <li className="flex items-start"><span className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>Microscopic impact analysis</li>
                      <li className="flex items-start"><span className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>System-by-system documentation</li>
                   </ul>
                </div>
                <p className="font-bold text-green-400 tracking-wide text-sm flex items-center mt-6">
                  RESULT: Complete picture. Full documentation. Strong position.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
              Forensic Assessments. Documented Outcomes.
            </h2>
            <p className="text-xl text-gray-600">
              Real commercial properties where our forensic documentation revealed hidden damage and supported successful recovery.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 - Marina */}
            <div className="bg-gray-50 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 group overflow-hidden flex flex-col">
              <div className="h-48 w-full relative overflow-hidden">
                 <img 
                   src="https://storage.googleapis.com/msgsndr/7fFIJC0GfXGlSGfKIuzi/media/6965fa79c7683b6702ff96ee.png" 
                   alt="Marina & Boat Storage" 
                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                 />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-4">
                  <h3 className="font-bold text-lg text-primary">Marina & Boat Storage</h3>
                  <p className="text-gray-500 text-sm">Beaufort, NC</p>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center bg-white p-3 rounded border border-gray-100">
                     <span className="text-xs font-semibold text-gray-500 uppercase">Initial</span>
                     <span className="bg-red-100 text-red-700 px-2 py-0.5 rounded text-sm font-bold">$0</span>
                  </div>
                  <div className="flex justify-between items-center bg-white p-3 rounded border border-gray-100 shadow-sm">
                     <span className="text-xs font-semibold text-gray-500 uppercase">Final</span>
                     <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-sm font-bold">$3,900,000</span>
                  </div>
                </div>

                <a 
                  href="https://storage.googleapis.com/msgsndr/7fFIJC0GfXGlSGfKIuzi/media/6965ec2f98efbd7ba643ec65.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-auto flex items-center justify-center gap-2 w-full py-2 border border-accent text-accent hover:bg-accent hover:text-white transition-all rounded-lg text-sm font-bold"
                >
                  <FileDown className="w-4 h-4" />
                  Download Case File
                </a>
              </div>
            </div>

            {/* Card 2 - Industrial Property (Denver) */}
            <div className="bg-gray-50 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 group overflow-hidden flex flex-col">
              <div className="h-48 w-full relative overflow-hidden">
                 <img 
                   src="https://storage.googleapis.com/msgsndr/7fFIJC0GfXGlSGfKIuzi/media/69661165f8a93b4590242c9f.png" 
                   alt="Industrial Property" 
                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                 />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-4">
                  <h3 className="font-bold text-lg text-primary">Industrial Property</h3>
                  <p className="text-gray-500 text-sm">Denver, CO</p>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center bg-white p-3 rounded border border-gray-100">
                     <span className="text-xs font-semibold text-gray-500 uppercase">Initial</span>
                     <span className="bg-red-100 text-red-700 px-2 py-0.5 rounded text-sm font-bold">$30,000</span>
                  </div>
                  <div className="flex justify-between items-center bg-white p-3 rounded border border-gray-100 shadow-sm">
                     <span className="text-xs font-semibold text-gray-500 uppercase">Final</span>
                     <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-sm font-bold">$730,000</span>
                  </div>
                </div>

                <a 
                  href="https://storage.googleapis.com/msgsndr/7fFIJC0GfXGlSGfKIuzi/media/6965ec2ff8a93b85461fc86b.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-auto flex items-center justify-center gap-2 w-full py-2 border border-accent text-accent hover:bg-accent hover:text-white transition-all rounded-lg text-sm font-bold"
                >
                  <FileDown className="w-4 h-4" />
                  Download Case File
                </a>
              </div>
            </div>

            {/* Card 3 - Self-Storage (Beaufort) */}
            <div className="bg-gray-50 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 group overflow-hidden flex flex-col">
              <div className="h-48 w-full relative overflow-hidden">
                 <img 
                   src="https://storage.googleapis.com/msgsndr/7fFIJC0GfXGlSGfKIuzi/media/69660fe3ccf2c63741f13760.png" 
                   alt="Self-Storage Facility" 
                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                 />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-4">
                  <h3 className="font-bold text-lg text-primary">Self-Storage Facility</h3>
                  <p className="text-gray-500 text-sm">Beaufort, NC</p>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center bg-white p-3 rounded border border-gray-100">
                     <span className="text-xs font-semibold text-gray-500 uppercase">Initial</span>
                     <span className="bg-red-100 text-red-700 px-2 py-0.5 rounded text-sm font-bold">$0</span>
                  </div>
                  <div className="flex justify-between items-center bg-white p-3 rounded border border-gray-100 shadow-sm">
                     <span className="text-xs font-semibold text-gray-500 uppercase">Final</span>
                     <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-sm font-bold">$3,900,000</span>
                  </div>
                </div>

                <a 
                  href="https://storage.googleapis.com/msgsndr/7fFIJC0GfXGlSGfKIuzi/media/6965ec2ff8a93bb2fc1fc86c.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-auto flex items-center justify-center gap-2 w-full py-2 border border-accent text-accent hover:bg-accent hover:text-white transition-all rounded-lg text-sm font-bold"
                >
                  <FileDown className="w-4 h-4" />
                  Download Case File
                </a>
              </div>
            </div>

            {/* Card 4 - Retail Center (Mexico, MO) */}
            <div className="bg-gray-50 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 group overflow-hidden flex flex-col">
              <div className="h-48 w-full relative overflow-hidden">
                 <img 
                   src="https://storage.googleapis.com/msgsndr/7fFIJC0GfXGlSGfKIuzi/media/696611cbccf2c6af04f18876.png" 
                   alt="Retail Center" 
                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                 />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-4">
                  <h3 className="font-bold text-lg text-primary">Retail Center</h3>
                  <p className="text-gray-500 text-sm">Mexico, MO</p>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center bg-white p-3 rounded border border-gray-100">
                     <span className="text-xs font-semibold text-gray-500 uppercase">Initial</span>
                     <span className="bg-red-100 text-red-700 px-2 py-0.5 rounded text-sm font-bold">$587,000</span>
                  </div>
                  <div className="flex justify-between items-center bg-white p-3 rounded border border-gray-100 shadow-sm">
                     <span className="text-xs font-semibold text-gray-500 uppercase">Final</span>
                     <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-sm font-bold">$3,900,000</span>
                  </div>
                </div>

                <a 
                  href="https://storage.googleapis.com/msgsndr/7fFIJC0GfXGlSGfKIuzi/media/6965ec2f95f9f9940ffe58a3.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-auto flex items-center justify-center gap-2 w-full py-2 border border-accent text-accent hover:bg-accent hover:text-white transition-all rounded-lg text-sm font-bold"
                >
                  <FileDown className="w-4 h-4" />
                  Download Case File
                </a>
              </div>
            </div>
          </div>
          
           <div className="mt-12 text-center space-y-8">
              <p className="text-gray-400 text-xs max-w-2xl mx-auto">
                StormChecks provides forensic documentation only. All settlements negotiated by independent public adjusters or attorneys engaged by the property owner.
              </p>
              
              <Link to="/case-work" className="inline-flex items-center text-primary font-bold hover:text-accent transition-colors">
                View All Assessments <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
           </div>
        </div>
      </section>

      {/* Free Monitoring Section */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-gray-500 font-bold tracking-widest uppercase text-sm mb-4 block">
              Free For Life
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
              Continuous Weather Intelligence for Your Properties
            </h2>
            <div className="space-y-6 text-xl text-gray-600 mb-8">
              <p>
                Most owners don't realize when weather events have impacted their building's envelope. We provide the intelligence you need.
              </p>
              <p>
                Sign up and we'll analyze your property's historical exposure for the past 2 years using forensic weather data. Then we monitor your location indefinitely. If we detect a weather event with significant impact potential, we alert you with a rapid assessment.
              </p>
            </div>
            <p className="font-bold text-primary text-xl">
              No cost. No commitment. Just actionable building intelligence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Card 1 */}
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">2-Year Weather Analysis</h3>
              <p className="text-gray-600">We check your property against every weather event from the past 24 months</p>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Active Monitoring</h3>
              <p className="text-gray-600">Your property stays on our radar. Every storm, every season, forever.</p>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Bell className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Rapid Alerts</h3>
              <p className="text-gray-600">If we detect potential structural impact, you'll know immediately.</p>
            </div>
          </div>

          <div className="text-center">
            <Link to="/contact?focus=true" className="inline-block bg-accent text-primary px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#E6AC00] transition-all shadow-lg hover:-translate-y-1">
              Start Free Assessment
            </Link>
            <p className="text-gray-500 text-sm mt-4 font-medium">
              Takes 2 minutes. We just need your property address.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing / Risk Reversal Section */}
      <section className="bg-primary py-24 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Free Monitoring. Assessment on Recovery.
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            Zero out-of-pocket cost. Zero upfront fees. StormChecks takes 20% only when your recovery pays out. The public adjuster takes 10%. You keep 70%. If the claim doesn't pay, you owe nothing to anyone.
          </p>

          <div className="bg-white/5 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto border border-white/10 mb-12">
            <div className="grid sm:grid-cols-2 gap-y-6 gap-x-12 text-left">
               <div className="flex items-center space-x-3">
                  <div className="bg-accent/20 p-1 rounded-full">
                    <Check className="w-6 h-6 text-accent" />
                  </div>
                  <span className="text-lg font-medium text-white">Free weather history analysis</span>
               </div>
               
               <div className="flex items-center space-x-3">
                  <div className="bg-accent/20 p-1 rounded-full">
                    <Check className="w-6 h-6 text-accent" />
                  </div>
                  <span className="text-lg font-medium text-white">No upfront assessment fees</span>
               </div>

               <div className="flex items-center space-x-3">
                  <div className="bg-accent/20 p-1 rounded-full">
                    <Check className="w-6 h-6 text-accent" />
                  </div>
                  <span className="text-lg font-medium text-white">Recovery-based pricing only</span>
               </div>

               <div className="flex items-center space-x-3">
                  <div className="bg-accent/20 p-1 rounded-full">
                    <Check className="w-6 h-6 text-accent" />
                  </div>
                  <span className="text-lg font-medium text-white">Vetted public adjuster network</span>
               </div>
            </div>
             <p className="text-gray-400 mt-10 pt-8 border-t border-white/10">
                It starts with free assessment. If we find something, you decide what to do next.
             </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <Link to="/contact?focus=true" className="inline-block bg-accent text-primary px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#E6AC00] transition-all shadow-lg hover:-translate-y-1">
              Start Free Assessment
            </Link>
            <p className="text-gray-500 text-sm font-medium">
              Takes 2 minutes. No obligation. Completely confidential.
            </p>
          </div>
        </div>
      </section>

      {/* Visibility / Urgency Section */}
      <section className="bg-[#050E17] py-24 border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 mb-8 ring-1 ring-accent/20">
            <Eye className="w-10 h-10 text-accent" />
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Building Intelligence Starts with Visibility
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            You can't protect what you can't see. Whether you're planning to hold, sell, or refinance, knowing the true condition of your property puts you in control.
          </p>
          
          <p className="text-lg text-gray-400 mb-8">
            Recovery has a 1–2 year documentation window depending on your state.
          </p>

          <Link to="/contact?focus=true" className="inline-block bg-accent text-primary px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#E6AC00] transition-all shadow-[0_4px_20px_rgba(201,151,0,0.2)] hover:shadow-[0_4px_25px_rgba(201,151,0,0.35)] hover:-translate-y-1">
            Start Free Assessment
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;