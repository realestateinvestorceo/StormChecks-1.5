import React from 'react';
import { Link } from 'react-router-dom';
import { Building2 } from 'lucide-react';

const Leadership: React.FC = () => {
  const team = [
    {
      name: "Mark Sullivan",
      title: "Chief Executive Officer",
      bio: "Mark leads StormChecks' operations and client experience. A commercial property owner himself, he ensures every assessment meets the standards he'd demand for his own portfolio.",
      image: "https://storage.googleapis.com/msgsndr/7fFIJC0GfXGlSGfKIuzi/media/69699f95e125efd97b769085.png"
    },
    {
      name: "Javier Hinojo",
      title: "Chief Revenue & Strategic Partnerships",
      bio: "Javier has built and managed a commercial portfolio exceeding $170 million. He works directly with portfolio owners, fund managers, and national partners who need building intelligence at scale.",
      image: "https://storage.googleapis.com/msgsndr/7fFIJC0GfXGlSGfKIuzi/media/69699f95e125efead3769084.png"
    },
    {
      name: "Josh Zieglowsky",
      title: "Chief Business Development",
      bio: "With nearly 20 years in commercial real estate — acquisitions, dispositions, asset management, and financing — Josh understands what owners need to protect and grow their investments.",
      image: "https://storage.googleapis.com/msgsndr/7fFIJC0GfXGlSGfKIuzi/media/69699f9565d73d8dc6e249e0.png"
    },
    {
      name: "Michael Paul, Esq.",
      title: "Chief Strategy Officer",
      bio: "Michael brings decades of experience evaluating building documentation at the highest levels. A licensed attorney, he sets StormChecks' technical and evidentiary standards.",
      image: "https://storage.googleapis.com/msgsndr/7fFIJC0GfXGlSGfKIuzi/media/696711e441565269703ea4cc.png"
    },
    {
      name: "Josh Miller, PE",
      title: "Head of Engineering",
      bio: "Josh leads forensic inspections, structural analysis, and technical documentation. As a licensed Professional Engineer, he ensures every assessment meets rigorous defensibility standards.",
      image: "https://storage.googleapis.com/msgsndr/7fFIJC0GfXGlSGfKIuzi/media/69699f9565d73d98ece249e1.png"
    },
    {
      name: "Nate Worcester",
      title: "Head of Operations",
      bio: "Nate oversees internal infrastructure — inspections, documentation workflows, technology systems, and partner communications. He builds the processes that let StormChecks scale nationally.",
      image: "https://storage.googleapis.com/msgsndr/7fFIJC0GfXGlSGfKIuzi/media/6969a0fbe125efb64076cf37.png"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary py-24 md:py-32 relative overflow-hidden">
        
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('https://storage.googleapis.com/msgsndr/7fFIJC0GfXGlSGfKIuzi/media/696614a902f1be4be50a711a.png')" }}
          ></div>
          <div className="absolute inset-0 bg-[#0B1F33]/90"></div>
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
                BUILT BY OWNERS. FOR OWNERS.
              </span>
              <div className="h-0.5 w-8 bg-accent"></div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              We Built the Firm We Wished Existed.
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
              StormChecks was founded by commercial property owners who got tired of not knowing the true condition of their buildings. Our leadership team collectively owns and manages over $200M in commercial real estate. We built StormChecks for ourselves first — then opened it to every owner who deserves the same intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Team Intro Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Owners, Engineers, and Industry Veterans</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Our team combines hands-on real estate experience with forensic engineering and documentation expertise. We're not outside consultants guessing at what owners need — we're owners who built exactly what we needed.
          </p>
        </div>
      </section>

      {/* Team Grid Section */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col h-full">
                <div className="aspect-[4/3] bg-gray-200 relative">
                   <img 
                     src={member.image} 
                     alt={member.name} 
                     className="w-full h-full object-cover"
                   />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-primary mb-1">{member.name}</h3>
                  <p className="text-accent font-bold text-xs uppercase tracking-wide mb-4">{member.title}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We Built This Section */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-primary text-white rounded-2xl p-8 md:p-16 relative overflow-hidden shadow-2xl">
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent opacity-10 rounded-full blur-3xl pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
            
            <div className="relative z-10">
              <div className="flex items-center space-x-4 mb-8">
                <div className="p-3 bg-accent/20 rounded-lg">
                  <Building2 className="w-8 h-8 text-accent" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">Why We Built StormChecks</h2>
              </div>
              
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  We're commercial property owners. Between us, we own and manage over $200 million in real estate — multifamily, retail, industrial, self-storage.
                </p>
                <p>
                  A few years ago, we started comparing notes. Some of us had filed insurance claims after storms. Some hadn't. The ones who filed recovered hundreds of thousands of dollars. The ones who didn't had no idea they had damage.
                </p>
                <p>
                  That's when we realized: most owners don't know what their buildings are hiding. Storm damage doesn't announce itself. It hides in membranes, behind cladding, inside systems. And unless you have forensic engineers and meteorologists looking for it, you'll never find it.
                </p>
                <p>
                  So we built StormChecks — first for our own portfolios, then for owners like us. We combined weather intelligence, forensic engineering, and documentation expertise into one firm. Now we monitor properties, identify hidden damage, and produce the forensic files needed to protect asset value and support recovery.
                </p>
                <p className="font-bold text-white text-xl pt-4">
                  We built the firm we wished existed. Now it does.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-24 border-t border-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-8">
            Find Out What Your Building Is Hiding
          </h2>

          <div className="flex flex-col items-center gap-4">
            <Link to="/contact?focus=true" className="bg-accent text-primary px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#E6AC00] transition-all shadow-lg hover:-translate-y-1">
              Start Free Assessment
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

export default Leadership;