import React from 'react';
import { Link } from 'react-router-dom';
import { FileDown } from 'lucide-react';
import SEOHead from '../components/seo/SEOHead';

const CaseWork: React.FC = () => {
  const cases = [
    {
      title: "Marina & Boat Storage",
      location: "Beaufort, NC",
      initial: "$0",
      final: "$3,900,000",
      image: "https://storage.googleapis.com/msgsndr/7fFIJC0GfXGlSGfKIuzi/media/6965fa79c7683b6702ff96ee.png",
      pdf: "https://storage.googleapis.com/msgsndr/7fFIJC0GfXGlSGfKIuzi/media/6965ec2f98efbd7ba643ec65.pdf",
      description: "Carrier denied the claim outright, citing 'lack of causation.' Our forensic file established clean event specificity linking damage to a specific hurricane date. Denial overturned.",
      quote: '"We had no idea this damage existed. StormChecks found it in two weeks." — Property Owner'
    },
    {
      title: "Retail Strip Center",
      location: "San Antonio, TX",
      initial: "$150,000",
      final: "$1,700,000",
      image: "https://storage.googleapis.com/msgsndr/7fFIJC0GfXGlSGfKIuzi/media/69661112c7683b0b980256d8.png",
      pdf: "https://storage.googleapis.com/msgsndr/7fFIJC0GfXGlSGfKIuzi/media/6965ec2f98efbddd0143ec64.pdf",
      description: "Initial offer covered just 10% of actual damage. StormChecks documented complete scope of loss. Carrier forced to reassess and pay full replacement value.",
      quote: '"The documentation was so thorough, the carrier didn\'t even push back." — Asset Manager'
    },
    {
      title: "Self-Storage Facility",
      location: "Beaufort, NC",
      initial: "$0",
      final: "$3,900,000",
      image: "https://storage.googleapis.com/msgsndr/7fFIJC0GfXGlSGfKIuzi/media/69660fe3ccf2c63741f13760.png",
      pdf: "https://storage.googleapis.com/msgsndr/7fFIJC0GfXGlSGfKIuzi/media/6965ec2ff8a93bb2fc1fc86c.pdf",
      description: "Carrier cited insufficient documentation for denial. Expert File established clean event specificity with evidence libraries and measurement references.",
      quote: '"I was skeptical until I saw the file. Then I was frustrated I\'d waited so long." — Facility Owner'
    },
    {
      title: "Retail Property",
      location: "Xenia, OH",
      initial: "$725,000",
      final: "$6,500,000",
      image: "https://storage.googleapis.com/msgsndr/7fFIJC0GfXGlSGfKIuzi/media/696612b095f9f954c402f872.png",
      pdf: "https://storage.googleapis.com/msgsndr/7fFIJC0GfXGlSGfKIuzi/media/6965ec2ff8a93b236b1fc86d.pdf",
      description: "Carrier lowballed the initial scope by 9x. Our forensic evidence proved damage was consistent with severe weather event and not wear-and-tear.",
      quote: '"Our previous inspector missed everything. StormChecks found $6.5M." — Property Manager'
    },
    {
      title: "Industrial Property",
      location: "Denver, CO",
      initial: "$30,000",
      final: "$730,000",
      image: "https://storage.googleapis.com/msgsndr/7fFIJC0GfXGlSGfKIuzi/media/69661165f8a93b4590242c9f.png",
      pdf: "https://storage.googleapis.com/msgsndr/7fFIJC0GfXGlSGfKIuzi/media/6965ec2ff8a93b85461fc86b.pdf",
      description: "Carrier offered 4% of actual damage. Forensic inspection and meteorological analysis proved the true scope. Settlement increased 24x.",
      quote: '"They turned a $30K estimate into $730K. The forensic detail made the difference." — Owner'
    },
    {
      title: "Retail Center",
      location: "Mexico, MO",
      initial: "$587,000",
      final: "$3,900,000",
      image: "https://storage.googleapis.com/msgsndr/7fFIJC0GfXGlSGfKIuzi/media/696611cbccf2c6af04f18876.png",
      pdf: "https://storage.googleapis.com/msgsndr/7fFIJC0GfXGlSGfKIuzi/media/696611cbccf2c6af04f18876.png",
      description: "Event-specific damage previously unrecognized by maintenance teams. Expert File documented full scope and secured a 7x increase.",
      quote: '"We thought we\'d maybe get $100K. The final settlement was $3.9M." — Portfolio Manager'
    },
    {
      title: "Industrial Facility",
      location: "Clive, IA",
      initial: "$0",
      final: "$3,400,000",
      image: "https://storage.googleapis.com/msgsndr/7fFIJC0GfXGlSGfKIuzi/media/69661069ccf2c6275ef150b2.png",
      pdf: "https://storage.googleapis.com/msgsndr/7fFIJC0GfXGlSGfKIuzi/media/6965ec2fc7683bce43fe0660.pdf",
      description: "Storm damage dismissed as 'wear and tear' until forensic documentation linked findings to documented weather event coordinates.",
      quote: '"Carrier dismissed it as wear and tear. StormChecks proved otherwise." — Ownership Group'
    },
    {
      title: "Commercial Property",
      location: "Naples, FL",
      initial: "$0",
      final: "$2,400,000",
      image: "https://storage.googleapis.com/msgsndr/7fFIJC0GfXGlSGfKIuzi/media/69661268c7683ba7450283a2.png",
      pdf: "https://storage.googleapis.com/msgsndr/7fFIJC0GfXGlSGfKIuzi/media/6965ec2f98efbd71a443ec62.pdf",
      description: "Full denial overturned using carrier-grade evidence package linking envelope breaches to specific storm pressure changes.",
      quote: '"Full denial reversed. $2.4M recovered." — Property Owner'
    },
    {
      title: "Commercial Property",
      location: "Tulsa, OK",
      initial: "$120,000",
      final: "$1,850,000",
      image: "https://storage.googleapis.com/msgsndr/7fFIJC0GfXGlSGfKIuzi/media/69661217f8a93bce292446a7.png",
      pdf: "https://storage.googleapis.com/msgsndr/7fFIJC0GfXGlSGfKIuzi/media/6965ec2f98efbd04a843ec63.pdf",
      description: "Initial inspection missed latent roof fracturing. StormChecks documentation proved storm attribution and secured full replacement.",
      quote: '"Initial inspection missed the roof fracturing entirely. StormChecks caught it." — Asset Manager'
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <SEOHead
        title="Case Work"
        description="Real StormChecks case results. See how forensic building assessments turned denied claims into six- and seven-figure recoveries."
        canonicalPath="/case-work"
      />
      {/* Hero Section */}
      <section className="bg-primary py-24 md:py-32 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -right-[10%] -top-[10%] w-[800px] h-[800px] bg-white opacity-[0.03] rounded-full blur-3xl"></div>
          <div className="absolute right-[5%] top-[25%] w-[600px] h-[600px] bg-accent opacity-[0.04] rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Real Properties. Documented Results.
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              We don't deal in hypotheticals. These are documented outcomes from real commercial properties — owners who discovered hidden damage through forensic assessment — and chose to pursue recovery.
            </p>
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="bg-white py-8 border-b border-gray-100">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm text-gray-500 max-w-3xl mx-auto">
            StormChecks provides forensic documentation only. All settlements were negotiated by independent public adjusters or attorneys engaged directly by the property owner.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-gray-50 py-16 border-b border-gray-200">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
             
             {/* Stat 1 */}
             <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">$100M+</div>
                <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">IN ACTIVE CLAIMS</div>
             </div>

             {/* Stat 2 */}
             <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">$0 → $3.9M</div>
                <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">LARGEST ASSESSMENT OUTCOME</div>
             </div>

             {/* Stat 3 */}
             <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">9x</div>
                <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">LARGEST DOCUMENTATION IMPACT</div>
             </div>

             {/* Stat 4 */}
             <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">OF CLIENTS PAID $0 UPFRONT</div>
             </div>

          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {cases.map((caseStudy, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border-t-4 border-accent relative overflow-hidden group hover:shadow-xl transition-shadow flex flex-col">
                <div className="h-64 w-full relative overflow-hidden">
                   <img 
                     src={caseStudy.image} 
                     alt={caseStudy.title} 
                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                   />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                    <div className="mb-6">
                       <h3 className="text-2xl font-bold text-primary mb-1">{caseStudy.title}</h3>
                       <p className="text-gray-500 font-medium">{caseStudy.location}</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                       <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                          <div className="text-xs font-bold text-red-800 uppercase tracking-wide mb-1">Initial Offer</div>
                          <div className="text-xl font-bold text-red-700">{caseStudy.initial}</div>
                       </div>
                       <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                          <div className="text-xs font-bold text-green-800 uppercase tracking-wide mb-1">Final Settlement</div>
                          <div className="text-xl font-bold text-green-700">{caseStudy.final}</div>
                       </div>
                    </div>
                    
                    <p className="text-gray-600 italic leading-relaxed mb-6">
                      "{caseStudy.description}"
                    </p>
                    
                    <p className="text-sm text-gray-500 italic border-t border-gray-100 pt-4 mb-6">
                      {caseStudy.quote}
                    </p>

                    <a 
                      href={caseStudy.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto flex items-center justify-center gap-2 w-full py-3 bg-white border-2 border-accent text-accent hover:bg-accent hover:text-white transition-all rounded-lg font-bold shadow-sm"
                    >
                      <FileDown className="w-5 h-5" />
                      Download Case File
                    </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-24 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Your Building Could Be Next
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed">
            Most of these owners didn't know they had recoverable damage until we found it. Free assessment takes 2 minutes to set up.
          </p>

          <div className="flex flex-col items-center gap-4">
            <Link to="/contact?focus=true" className="bg-accent text-primary px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#E6AC00] transition-all shadow-lg hover:-translate-y-1">
              Start Free Assessment
            </Link>
            <p className="text-gray-500 text-sm font-medium">
              No cost. No obligation. We just need your property address.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseWork;