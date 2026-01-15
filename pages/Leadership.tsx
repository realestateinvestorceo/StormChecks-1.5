import React from 'react';
import { Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

const Leadership: React.FC = () => {
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
          <div className="absolute inset-0 bg-[#0B1F33]/85"></div>
        </div>

        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute -right-[10%] -top-[10%] w-[800px] h-[800px] bg-white opacity-[0.03] rounded-full blur-3xl"></div>
          <div className="absolute right-[5%] top-[25%] w-[600px] h-[600px] bg-accent opacity-[0.04] rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Forensic Expertise Built on Industry Experience
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
              StormChecks was founded by commercial property owners and industry veterans who understand buildings, weather, and documentation from every angle.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Profile Section */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
            
            {/* Left Column - Founder Image */}
            <div className="relative group mx-auto md:mx-0 w-full max-w-md md:max-w-none">
                <div className="aspect-[4/5] bg-gray-100 rounded-xl overflow-hidden shadow-lg border border-gray-200 relative z-10">
                    <img 
                      src="https://storage.googleapis.com/msgsndr/7fFIJC0GfXGlSGfKIuzi/media/696711e441565269703ea4cc.png" 
                      alt="Michael Paul - Founder of StormChecks" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                </div>
                {/* Decorative border offset */}
                <div className="absolute -z-0 top-6 -left-6 w-full h-full border-2 border-accent/30 rounded-xl hidden md:block"></div>
            </div>

            {/* Right Column - Content */}
            <div className="space-y-8">
              <div className="border-l-4 border-accent pl-6">
                <h2 className="text-4xl font-bold text-primary mb-2">Michael Paul</h2>
                <p className="text-xl font-bold text-accent tracking-wide uppercase">Chief Claims Strategist & Founder</p>
              </div>

              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Michael spent over 20 years as a senior executive inside major insurance carriers. His job was to evaluate claims and determine whether documentation met the rigorous standards required for approval.
                </p>
                <p>
                  He reviewed thousands of files. He learned exactly what documentation meets the internal approval thresholds, what language carriers accept, and what gaps adjusters exploit to deny valid claims.
                </p>
                <p>
                  Most claims don't fail because the damage isn't real. They fail because the paperwork speaks 'contractor' while the carrier speaks 'policy.' If your documentation doesn't map damage directly to the internal checklists adjusters use, the claim gets rejected — even when the damage is legitimate.
                </p>
                <p>
                  Michael founded StormChecks to fix that. We build forensic files designed to pass the same tests he used to administer. Not contractor estimates. Not photos without context. Carrier-grade evidence that meets the exact standards insurers use to make decisions.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Founder Letter Section */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <span className="text-gray-400 font-bold tracking-widest uppercase text-sm">
              A Note From Our Founder
            </span>
          </div>

          <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-200 relative">
            {/* Quote Icon watermark */}
            <div className="absolute top-8 right-8 text-gray-100">
               <Quote className="w-20 h-20 opacity-50" />
            </div>

            <div className="relative z-10 space-y-6 text-gray-700 leading-relaxed text-lg">
              <h3 className="text-2xl font-bold text-primary mb-6 block">
                Subject: What Most Property Owners Don't Know About Their Buildings
              </h3>

              <p>
                To my fellow property owners,
              </p>

              <p>
                I spent two decades inside the insurance industry. I've sat in the rooms where claim decisions are made. I've seen the checklists. I've seen what gets approved — and I've seen what gets thrown in the denial pile.
              </p>

              <p>
                Here's what most property owners don't understand: insurance carriers are not in the business of paying claims. They're in the business of collecting premiums and minimizing payouts. If your documentation has a gap — any gap — they will find it and use it against you.
              </p>

              <p>
                I've watched legitimate claims get denied for reasons that would infuriate you:
              </p>

              <ul className="list-disc pl-6 space-y-2 marker:text-accent">
                <li><strong className="font-semibold text-primary">'No storm nexus'</strong> — meaning the paperwork didn't link the damage to a specific weather event</li>
                <li><strong className="font-semibold text-primary">'Insufficient documentation'</strong> — meaning photos without measurements, context, or timestamps</li>
                <li><strong className="font-semibold text-primary">'Pre-existing condition'</strong> — the catch-all excuse for denying anything they don't want to pay</li>
              </ul>

              <p>
                The damage was real in every one of these cases. The inspections were accurate. But the documentation didn't check the right boxes — boxes that carriers intentionally don't publicize.
              </p>

              <p>
                After 20 years of watching this happen, I left. I founded StormChecks to give property owners what they've never had: documentation built by someone who knows exactly what carriers need to see to approve a claim.
              </p>

              <p>
                Our forensic files aren't contractor estimates. They're 100+ page evidence packages with NOAA weather data, microscopic damage analysis, storm-to-damage causation narratives, and Xactimate scopes that match carrier internal standards.
              </p>

              <p>
                We find damage that nobody else finds. Then we document it so airtight that carriers can't deny it.
              </p>
              
              <div className="bg-primary/5 border-l-4 border-accent p-6 my-8 rounded-r-lg">
                <p className="font-medium text-primary italic">
                  "Our analysis shows that latent storm damage typically represents $10–$15 per square foot in recoverable loss. For most commercial buildings, that's hundreds of thousands of dollars sitting on the table — money that belongs to you, not your insurance company."
                </p>
              </div>

              <p>
                If your building has been through a storm in the last three years, it's worth two minutes to find out what you're owed.
              </p>

              <div className="mt-12 pt-8 border-t border-gray-100">
                <div className="font-script text-3xl text-primary mb-2 font-bold font-serif italic">Michael Paul</div>
                <div className="text-primary font-bold">Michael Paul</div>
                <div className="text-gray-500 text-sm font-medium uppercase tracking-wide">Founder & Chief Claims Strategist</div>
                <div className="text-gray-500 text-sm">StormChecks</div>
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