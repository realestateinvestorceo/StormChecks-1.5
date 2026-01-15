import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Clock, Tag, Search } from 'lucide-react';

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: 'Success Stories' | 'Insurance Insights' | 'Technical Insights' | 'Preparedness';
  image: string;
  date: string;
  readTime: string;
}

export const blogArticles: Article[] = [
  {
    id: 'from-0-to-3-9m-overturning-a-lack-of-causation-denial',
    title: "From $0 to $3.9M: Overturning a 'Lack of Causation' Denial",
    excerpt: "How forensic meteorological evidence proved a hurricane nexus for a Marina facility in North Carolina when the carrier claimed the damage was pre-existing.",
    category: 'Success Stories',
    image: 'https://storage.googleapis.com/msgsndr/7fFIJC0GfXGlSGfKIuzi/media/6965fa79c7683b6702ff96ee.png',
    date: 'March 15, 2024',
    readTime: '6 min read'
  },
  {
    id: 'inside-the-carriers-mind-why-valid-claims-get-rejected',
    title: "Inside the Carrier's Mind: Why Valid Claims Get Rejected",
    excerpt: "Our founder, Michael Paul, shares the unwritten internal checklists insurance adjusters use to flag files for denial and how to bypass them.",
    category: 'Insurance Insights',
    image: 'https://storage.googleapis.com/msgsndr/7fFIJC0GfXGlSGfKIuzi/media/696614a902f1be4be50a711a.png',
    date: 'March 10, 2024',
    readTime: '8 min read'
  },
  {
    id: 'the-science-of-storm-nexus-meteorological-coordinate-verification',
    title: "The Science of Storm Nexus: Meteorological Coordinate Verification",
    excerpt: "Deep dive into how we use NOAA data and microscopic impact analysis to link latent roof fractures to specific storm events, preventing 'wear and tear' excuses.",
    category: 'Technical Insights',
    image: 'https://storage.googleapis.com/msgsndr/7fFIJC0GfXGlSGfKIuzi/media/6965f16a02f1be8a470629d9.png',
    date: 'March 05, 2024',
    readTime: '10 min read'
  },
  {
    id: 'the-shrinking-window-state-filing-deadlines-for-2024',
    title: "The Shrinking Window: State Filing Deadlines for 2024",
    excerpt: "Commercial property owners often miss out on millions because they don't realize the clock is ticking. Learn about the 1-3 year deadlines in your state.",
    category: 'Preparedness',
    image: 'https://storage.googleapis.com/msgsndr/7fFIJC0GfXGlSGfKIuzi/media/6965d04298efbd224a400246.png',
    date: 'February 28, 2024',
    readTime: '5 min read'
  },
  {
    id: 'retail-center-recovery-why-contractor-bids-arent-enough',
    title: "Retail Center Recovery: Why Contractor Bids Aren't Enough",
    excerpt: "A case study on a Missouri retail center where a standard contractor bid was lowballed by $3.3M until a carrier-grade forensic file was presented.",
    category: 'Success Stories',
    image: 'https://storage.googleapis.com/msgsndr/7fFIJC0GfXGlSGfKIuzi/media/696611cbccf2c6af04f18876.png',
    date: 'February 20, 2024',
    readTime: '7 min read'
  },
  {
    id: 'microscopic-evidence-identifying-latent-damage-before-leaks-appear',
    title: "Microscopic Evidence: Identifying Latent Damage Before Leaks Appear",
    excerpt: "Waiting for a leak is a million-dollar mistake. We explain how hail impacts compromise roofing membranes long before water enters the building.",
    category: 'Technical Insights',
    image: 'https://storage.googleapis.com/msgsndr/7fFIJC0GfXGlSGfKIuzi/media/6965f1daf8a93bbc612078b4.png',
    date: 'February 15, 2024',
    readTime: '9 min read'
  }
];

const Resources: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Success Stories', 'Insurance Insights', 'Technical Insights', 'Preparedness'];

  const filteredArticles = activeCategory === 'All' 
    ? blogArticles 
    : blogArticles.filter(article => article.category === activeCategory);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary py-24 md:py-32 relative overflow-hidden">
        {/* Decorative background elements (matching CaseWork.tsx) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -right-[10%] -top-[10%] w-[800px] h-[800px] bg-white opacity-[0.03] rounded-full blur-3xl"></div>
          <div className="absolute right-[5%] top-[25%] w-[600px] h-[600px] bg-accent opacity-[0.04] rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Resources & Insights
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Expert analysis on forensic documentation, insurance strategy, and commercial property storm recovery.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50 border-b border-gray-200 sticky top-20 z-40">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                  activeCategory === cat 
                    ? 'bg-accent text-primary shadow-md' 
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredArticles.map((article) => (
              <article 
                key={article.id} 
                className="flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-60 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-accent px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider">
                      {article.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center text-xs text-gray-400 mb-4 space-x-4">
                    <span className="flex items-center"><Clock className="w-3 h-3 mr-1" /> {article.readTime}</span>
                    <span>{article.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-accent transition-colors leading-tight">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 line-clamp-3 text-sm leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  <div className="mt-auto">
                    <Link 
                      to={`/resources/${article.id}`} 
                      className="inline-flex items-center text-primary font-bold text-sm hover:translate-x-1 transition-transform"
                    >
                      Read full article <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-20">
              <Search className="w-16 h-16 text-gray-200 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-400">No articles found in this category.</h3>
              <button 
                onClick={() => setActiveCategory('All')}
                className="mt-4 text-accent font-bold hover:underline"
              >
                View all resources
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="bg-primary py-20 text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <BookOpen className="w-12 h-12 text-accent mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Alerted. Stay Informed.</h2>
            <p className="text-xl text-gray-300 mb-10">
              Sign up for our free assessment to receive site-specific storm alerts and our latest insights on commercial property protection.
            </p>
            <Link 
              to="/contact?focus=true" 
              className="inline-block bg-accent text-primary px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#E6AC00] transition-all shadow-lg hover:-translate-y-1"
            >
              Start Free Assessment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;