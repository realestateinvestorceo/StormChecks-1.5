import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <section className="bg-primary py-32 min-h-[60vh] flex items-center">
      <div className="wrap text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">404</h1>
        <p className="text-xl text-gray-300 mb-10 max-w-xl mx-auto leading-relaxed">
That page doesn't exist.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-accent text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#E6AC00] transition-all"
          >
            Back to Home
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            to="/contact"
            className="border border-hairline-dark text-white px-8 py-4 rounded-lg font-bold text-lg hover:border-white transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
