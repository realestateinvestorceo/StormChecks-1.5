import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, Share2, AlertCircle, ArrowRight, CheckCircle2, XCircle, TrendingUp, Microscope, ClipboardCheck, ShieldCheck } from 'lucide-react';
import { blogArticles } from './Resources';

// Section Title Component to ensure consistent size
// Updated to 24px as per user request.
const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-[24px] font-bold text-primary mb-8 mt-16 leading-tight">
    {children}
  </h2>
);

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const article = blogArticles.find(a => a.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-8">The resource you are looking for might have been moved or deleted.</p>
          <Link to="/resources" className="inline-flex items-center text-accent font-bold hover:underline">
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Resources
          </Link>
        </div>
      </div>
    );
  }

  const readNextArticles = blogArticles
    .filter(a => a.id !== id)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  const renderContent = (id: string) => {
    switch (id) {
      case 'from-0-to-3-9m-overturning-a-lack-of-causation-denial': // Success Story
        return (
          <div className="space-y-6">
            <SectionTitle>Overview Summary</SectionTitle>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 mb-10 overflow-hidden relative">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <TrendingUp size={120} />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase mb-1">Location</p>
                  <p className="text-primary font-bold">Beaufort, NC</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase mb-1">Type</p>
                  <p className="text-primary font-bold">Marina</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase mb-1">Initial</p>
                  <p className="text-red-600 font-bold">$0</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase mb-1">Final</p>
                  <p className="text-green-600 font-bold">$3.9M</p>
                </div>
              </div>
            </div>
            <p>A high-value marina facility in North Carolina suffered catastrophic structural fatigue following hurricane eyewall passage. The primary challenge was proving structural racking in metal buildings where the envelope appeared mostly intact, but the mechanical stability was compromised.</p>

            <SectionTitle>The Challenge (The Denial)</SectionTitle>
            <p>The carrier's adjuster spent less than 4 hours on-site and issued a total denial. They argued that the "ovaling" of fasteners and structural drift was a result of long-term coastal corrosion and "pre-existing wear and tear." They used Eye Passage data from a distant airport to claim wind speeds at the marina were below the design threshold for damage.</p>

            <SectionTitle>The Forensic Strategy</SectionTitle>
            <p>StormChecks extracted site-specific NOAA radar data to prove Eye Passage directly over the GPS coordinates. We deployed a forensic team to perform microscopic aperture analysis on the fasteners, proving the metal deformation occurred recently under high-velocity lateral loads—not slow-growth corrosion. We mapped the "ovaling" patterns to the eye-wall directionality recorded on the day of loss.</p>

            <SectionTitle>The Outcome</SectionTitle>
            <p>Faced with a 140-page Expert File documenting irrefutable causation, the carrier rescinded the denial. The file was settled for the full replacement value of $3,900,000 without the need for litigation or appraisal, ensuring the facility could be restored to full structural safety.</p>
          </div>
        );

      case 'inside-the-carriers-mind-why-valid-claims-get-rejected': // Insurance Insights
        return (
          <div className="space-y-6">
            <SectionTitle>Overview Summary</SectionTitle>
            <p>Insurance carriers have optimized their claims departments to operate as "defensive audit" units. This report breaks down the unwritten internal checklists that adjusters use to flag files for denial and how asset managers can protect their portfolio value.</p>

            <SectionTitle>The Problem Statement</SectionTitle>
            <p>The majority of commercial claims fail because they are documented using construction standards rather than policy standards. Carriers are legally looking for reasons to exclude damage. Without a forensic Nexus between the storm event and the physical damage, a valid claim is often treated as deferred maintenance.</p>

            <SectionTitle>Myth vs. Reality</SectionTitle>
            <div className="grid md:grid-cols-2 gap-4 my-10">
              <div className="p-6 bg-red-50 rounded-lg border border-red-100">
                <p className="font-bold text-red-800 mb-2">Myth</p>
                <p className="text-sm">"If my roofer says there is hail damage, the insurance company has to pay the claim."</p>
              </div>
              <div className="p-6 bg-green-50 rounded-lg border border-green-100">
                <p className="font-bold text-green-800 mb-2">Reality</p>
                <p className="text-sm">"The carrier only pays if documentation establishes an irrefutable Nexus to a specific storm date."</p>
              </div>
            </div>

            <SectionTitle>Financial Impact (CapEx/IRR)</SectionTitle>
            <p>Unrecognized storm damage is a silent drain on Net Operating Income (NOI). When damage is found years later—after filing windows close—the $500k roof replacement comes out of your CapEx budget instead of the carrier's reserves. This suppresses the asset's IRR and lowers the eventual disposition price for institutional investors.</p>

            <SectionTitle>The Solution Framework</SectionTitle>
            <p>Bypass the carrier's defensive audit by providing a "Pre-Approved" file. This involves building a forensic-grade Expert File that includes meteorological verification, microscopic impact proof, and Xactimate scopes that map exactly to carrier internal decision-making thresholds.</p>
          </div>
        );

      case 'the-science-of-storm-nexus-meteorological-coordinate-verification': // Technical Analysis
        return (
          <div className="space-y-6">
            <SectionTitle>Overview Summary</SectionTitle>
            <p>Establishing an irrefutable "Storm Nexus" requires more than just a weather report. This analysis details the engineering methodology required to link microscopic physical findings to site-specific meteorological coordinates.</p>

            <SectionTitle>Material Vulnerability Overview</SectionTitle>
            <p>Building envelopes are susceptible to "Latent Failure"—damage that exists but isn't visible during a standard walk-through. For TPO and EPDM membranes, hail impact energy crushes the insulation board (isocyanurate) underneath the surface, creating a "bruise" that inevitably leads to membrane mat fracture during thermal cycles.</p>

            <SectionTitle>The Lifecycle of Failure</SectionTitle>
            <ol className="space-y-8 my-10">
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shrink-0 font-bold">1</div>
                <div>
                  <p className="font-bold text-primary">Substrate Trauma</p>
                  <p className="text-gray-600 text-sm">Initial impact creates a void in the insulation. The surface appears fine. No leak occurs. Adjusters call this "cosmetic."</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shrink-0 font-bold">2</div>
                <div>
                  <p className="font-bold text-primary">Thermal Stressing</p>
                  <p className="text-gray-600 text-sm">Over 12-24 months, UV exposure and expansion/contraction over the crushed void cause the membrane to thin and eventually crack.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shrink-0 font-bold">3</div>
                <div>
                  <p className="font-bold text-primary">Active Leakage</p>
                  <p className="text-gray-600 text-sm">Water enters the building. By this time, the filing window has expired, and the carrier denies the claim as maintenance neglect.</p>
                </div>
              </li>
            </ol>

            <SectionTitle>Forensic Methodology</SectionTitle>
            <p>StormChecks utilizes multi-source radar matching and NOAA Eye Passage data to verify conditions at exact property coordinates. We supplement this with on-site "impact directionality" mapping—measuring the angle of soft-metal dings to ensure they align with the recorded storm orientation.</p>

            <SectionTitle>The Engineering Conclusion</SectionTitle>
            <p>Catching damage in the "Latent Phase" is the difference between a fully-covered system replacement and a massive uncovered CapEx expense. Scientific documentation turns a subjective "opinion" into a mathematical "certainty" that carriers cannot ignore.</p>
          </div>
        );

      case 'the-shrinking-window-state-filing-deadlines-for-2024': // Preparedness
        return (
          <div className="space-y-6">
            <SectionTitle>Overview Summary</SectionTitle>
            <p>Property owners have a limited legal window to recover from storm damage. This preparedness briefing details the expiring deadlines for 2021-2022 events and the protocol for building a "Clean Baseline" for future events.</p>

            <SectionTitle>Situation Report</SectionTitle>
            <p>With major convective events occurring more frequently across the Midwest and Gulf Coast, the primary risk for 2024 is the closure of 3-year documentation windows. Many buildings currently house "hidden" damage from massive 2021 storms that will become an permanent owner-paid liability if not filed this season.</p>

            <SectionTitle>Pre-Loss Checklist</SectionTitle>
            <div className="bg-white border-2 border-primary/10 rounded-xl p-8 my-10">
              <ul className="space-y-6">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-accent" size={24} />
                  <span className="font-bold text-primary">Review State Statute of Limitations for Property Claims</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-accent" size={24} />
                  <span className="font-bold text-primary">Establish High-Resolution Drone "Clean Baseline" Photography</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-accent" size={24} />
                  <span className="font-bold text-primary">Audit Policy "Notice of Loss" Requirements for each Asset</span>
                </li>
              </ul>
            </div>

            <SectionTitle>Documentation Protocol</SectionTitle>
            <p>A "Clean Baseline" is your most powerful evidence. By documenting your roof and envelope state during the pre-season, you create the irrefutable "Before" evidence that makes "After" damage undeniable. Carriers can no longer argue that hail bruises were "pre-existing wear" when you have dated high-res proof of a clean substrate.</p>

            <SectionTitle>The Response Plan</SectionTitle>
            <p>Move from reactive to proactive monitoring. Use a forensic partner to track every meteorological event at your property coordinates. If a threshold event occurs, deploy a forensic team within 48 hours to document fresh evidence before it is obscured by natural weathering or foot traffic.</p>
          </div>
        );

      case 'retail-center-recovery-why-contractor-bids-arent-enough': // Success Story
        return (
          <div className="space-y-6">
            <SectionTitle>Overview Summary</SectionTitle>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 mb-10 overflow-hidden relative">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <TrendingUp size={120} />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase mb-1">Location</p>
                  <p className="text-primary font-bold">Mexico, MO</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase mb-1">Type</p>
                  <p className="text-primary font-bold">Retail Center</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase mb-1">Initial Bid</p>
                  <p className="text-red-600 font-bold">$587,000</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase mb-1">Final Settlement</p>
                  <p className="text-green-600 font-bold">$3,900,000</p>
                </div>
              </div>
            </div>
            <p>A large multi-tenant retail center in Missouri suffered severe hail trauma. The owner was prepared to accept a $587,000 "repair bid" from a local roofer before StormChecks identified systemic failures that required full replacement under current building codes.</p>

            <SectionTitle>The Challenge (The Denial)</SectionTitle>
            <p>The insurance carrier accepted the contractor's bid but then applied heavy depreciation, arguing that the roof was already at the "end of its useful life." They claimed the hail damage was "cosmetic shingle granule loss" that did not warrant full system replacement, only localized patching.</p>

            <SectionTitle>The Forensic Strategy</SectionTitle>
            <p>StormChecks documented "Micro-Fracture" of the internal fiberglass matting—a structural failure that mandated replacement under local code. We proved the contractor bid was insufficient by performing infrared moisture mapping that revealed hidden substrate bruising. We then synchronized this data with radar Eye Passage to establish a clear Storm Nexus.</p>

            <SectionTitle>The Outcome</SectionTitle>
            <p>By moving the conversation from "construction price" to "forensic structural failure," the claim value increased by over 6.5x. The final $3.9M recovery allowed the owner to replace the entire system with a 20-year warranty, effectively restoring the asset's full market value and disposability.</p>
          </div>
        );

      case 'microscopic-evidence-identifying-latent-damage-before-leaks-appear': // Technical Analysis
        return (
          <div className="space-y-6">
            <SectionTitle>Overview Summary</SectionTitle>
            <p>Waiting for a leak is a million-dollar mistake. This technical analysis explores how microscopic "bruising" in bitumen and TPO substrates inevitably leads to system failure and why forensic documentation is the only way to hold carriers accountable during the latent phase.</p>

            <SectionTitle>Material Vulnerability Overview</SectionTitle>
            <p>Modified bitumen and high-reflectivity TPO systems are robust but brittle. Kinetic energy from a 1.5"+ hailstone travels through the surface and crushes the insulation board underneath. This compression destroys the adhesion between the membrane and the substrate, creating a void that traps condensation and leads to rot.</p>

            <SectionTitle>The Lifecycle of Failure</SectionTitle>
            <ol className="space-y-8 my-10">
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shrink-0 font-bold">1</div>
                <div>
                  <p className="font-bold text-primary">Substrate Compression</p>
                  <p className="text-gray-600 text-sm">Initial impact creates a void in the insulation. Granule loss is minimal. The roof remains watertight for the first 12 months.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shrink-0 font-bold">2</div>
                <div>
                  <p className="font-bold text-primary">Mat Fatigue</p>
                  <p className="text-gray-600 text-sm">Thermal cycling causes the membrane to expand and contract over the un-supported void. The fiberglass matting begins to fracture at the edges of the dent.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shrink-0 font-bold">3</div>
                <div>
                  <p className="font-bold text-primary">Systemic Rupture</p>
                  <p className="text-gray-600 text-sm">Active leaks begin 24-36 months after the storm. By this time, the filing window has closed, and the carrier calls it "simple wear and tear."</p>
                </div>
              </li>
            </ol>

            <SectionTitle>Forensic Methodology</SectionTitle>
            <p>StormChecks utilizes infrared thermography to identify substrate compression before it leads to leakage. We supplement this with "Core Sampling" and microscopic imaging to physically demonstrate the delamination of the membrane from the insulation board, providing irrefutable proof of structural failure.</p>

            <SectionTitle>The Engineering Conclusion</SectionTitle>
            <p>Documenting substrate failure in Year 1 ensures the insurance company pays for the replacement. Waiting until Year 3 ensures the owner pays for the replacement. Forensic documentation is the bridge between a "denied maintenance" issue and a "fully-covered" storm loss.</p>
          </div>
        );

      default:
        return <p>Content coming soon...</p>;
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Article Header */}
      <div className="bg-primary pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <img src={article.image} alt="" className="w-full h-full object-cover blur-sm" />
        </div>
        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          <Link 
            to="/resources" 
            className="inline-flex items-center text-accent font-bold mb-10 hover:translate-x-[-4px] transition-transform"
          >
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Resources
          </Link>
          <div className="max-w-4xl">
            <div className="flex items-center justify-center space-x-4 mb-8">
              <span className="bg-accent text-primary px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider">
                {article.category}
              </span>
              <span className="text-gray-400 text-sm flex items-center">
                <Calendar className="w-4 h-4 mr-2" /> {article.date}
              </span>
              <span className="text-gray-400 text-sm flex items-center">
                <Clock className="w-4 h-4 mr-2" /> {article.readTime}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-[1.1] mb-8">
              {article.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto px-6 py-12 relative z-20">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Article Body */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-100 mb-12">
              <img 
                src={article.image} 
                alt={article.title} 
                className="w-full h-auto rounded-xl mb-12 shadow-md"
              />
              
              <div className="prose prose-lg prose-slate max-w-none text-gray-700 leading-relaxed">
                {renderContent(article.id)}
              </div>
              
              <div className="mt-16 pt-8 border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-accent font-bold">
                    SC
                  </div>
                  <div>
                    <p className="text-primary font-bold">StormChecks Editorial Team</p>
                    <p className="text-gray-500 text-sm">Forensic Building Consultancy</p>
                  </div>
                </div>
                <button className="p-3 rounded-full bg-gray-50 hover:bg-gray-100 transition-colors">
                  <Share2 className="w-5 h-5 text-gray-400" />
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8 sticky top-24">
            <div className="bg-primary rounded-[22px] p-8 text-white border border-white/10 shadow-lg">
              <div className="w-14 h-14 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center mb-6">
                <AlertCircle className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Protect Your Asset</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Don't wait for a leak. Our free weather history audit covers the last 24 months of activity at your specific coordinates.
              </p>
              <Link 
                to="/contact?focus=true" 
                className="block w-full bg-[#C99700] text-primary text-center py-4 rounded-lg font-bold hover:bg-[#E6AC00] transition-all"
              >
                Get Free Assessment
              </Link>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <h4 className="font-bold text-primary mb-6 uppercase tracking-wider text-sm">Explore Categories</h4>
              <div className="flex flex-wrap gap-2">
                {['Success Stories', 'Industry Insights', 'Technical Insights', 'Preparedness'].map(cat => (
                  <Link 
                    key={cat}
                    to="/resources"
                    className="px-4 py-2 bg-white border border-gray-200 rounded-full text-xs font-bold text-gray-700 hover:border-accent hover:text-accent transition-all"
                  >
                    {cat}
                  </Link>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Read Next Section */}
      <section className="bg-gray-50 py-24 border-t border-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Read Next</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {readNextArticles.map((item) => (
              <Link 
                key={item.id} 
                to={`/resources/${item.id}`} 
                className="flex flex-col bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary/90 backdrop-blur-sm text-accent px-3 py-1 rounded text-[10px] font-bold uppercase tracking-wider">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center text-[10px] text-gray-400 mb-3 space-x-3">
                    <span className="flex items-center"><Clock className="w-3 h-3 mr-1" /> {item.readTime}</span>
                    <span>{item.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-4 group-hover:text-accent transition-colors line-clamp-2 leading-snug">
                    {item.title}
                  </h3>
                  <div className="mt-auto flex items-center text-accent text-sm font-bold">
                    Read Article <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;