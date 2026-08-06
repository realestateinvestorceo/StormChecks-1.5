import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8 border-t border-hairline-dark">
      <div className="wrap">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4 md:col-span-2">
            <Link to="/" className="inline-block">
              <img
                src="https://storage.googleapis.com/msgsndr/7fFIJC0GfXGlSGfKIuzi/media/6966f948415652622e320969.png"
                alt="StormChecks"
                className="w-40 h-auto"
              />
            </Link>
            <p className="text-gray-400 leading-relaxed text-sm">
              Pre-Litigation Claim Funding
            </p>
            <p className="text-gray-500 leading-relaxed text-sm max-w-sm">
              Non-recourse funding for the cost of pursuing a commercial property insurance claim.
            </p>
          </div>

          {/* Company links */}
          <div className="flex flex-col space-y-3">
            <h2 className="font-bold text-white mb-2 uppercase text-sm tracking-wider">Company</h2>
            <Link to="/how-it-works" className="text-gray-400 hover:text-accent transition-colors text-sm">
              How It Works
            </Link>
            <Link to="/what-we-fund" className="text-gray-400 hover:text-accent transition-colors text-sm">
              What We Fund
            </Link>
            <Link to="/about" className="text-gray-400 hover:text-accent transition-colors text-sm">
              About
            </Link>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h2 className="font-bold text-white mb-2 uppercase text-sm tracking-wider">
              Get in Touch
            </h2>
            <div className="flex items-center space-x-3 text-gray-400 text-sm group">
              <Mail className="w-4 h-4 text-accent group-hover:text-white transition-colors" />
              <a href="mailto:info@stormchecks.com" className="hover:text-accent transition-colors">
                info@stormchecks.com
              </a>
            </div>
            <div className="flex items-center space-x-3 text-gray-400 text-sm group">
              <Phone className="w-4 h-4 text-accent group-hover:text-white transition-colors" />
              <a href="tel:+18018212530" className="hover:text-accent transition-colors">
                +1 801-821-2530
              </a>
            </div>
            <div className="pt-2 flex flex-col space-y-3">
              <Link to="/contact" className="text-gray-400 hover:text-accent transition-colors text-sm">
                Contact Us
              </Link>
              <Link to="/privacy" className="text-gray-400 hover:text-accent transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-accent transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        {/* Disclaimer + copyright */}
        <div className="border-t border-hairline-dark pt-8 space-y-4">
          <p className="text-xs text-gray-500 leading-relaxed max-w-4xl">
            StormChecks is not a public adjuster, law firm, or insurance producer, and does not
            provide claims, legal, or insurance advice.
          </p>
          <p className="text-xs text-gray-600">&copy; 2026 StormChecks. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
