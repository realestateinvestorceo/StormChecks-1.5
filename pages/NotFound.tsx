import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const NotFound: React.FC = () => {
  useEffect(() => {
    document.title = 'Page Not Found | StormChecks';
    let el = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null;
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute('name', 'robots');
      document.head.appendChild(el);
    }
    el.setAttribute('content', 'noindex');
    return () => { el?.remove(); };
  }, []);

  return (
    <section className="bg-primary py-32 min-h-[60vh] flex items-center">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">404</h1>
        <p className="text-xl text-gray-300 mb-10">The page you're looking for doesn't exist.</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-accent text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#E6AC00] transition-all"
        >
          Back to Home
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
