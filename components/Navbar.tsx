import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, LogIn } from 'lucide-react';

const navLinks = [
  { name: 'How It Works', path: '/how-it-works' },
  { name: 'What We Fund', path: '/what-we-fund' },
  { name: 'Storm Monitoring', path: '/storm-monitoring' },
  { name: 'About', path: '/about' },
];

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-primary text-white border-b border-hairline-dark">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-8 h-20 flex items-center justify-between gap-8">
        <Link to="/" className="flex items-center flex-shrink-0" onClick={() => setIsMobileMenuOpen(false)}>
          <img
            src="https://storage.googleapis.com/msgsndr/7fFIJC0GfXGlSGfKIuzi/media/6966f948415652622e320969.png"
            alt="StormChecks"
            className="w-36 md:w-40 h-auto"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-7 xl:gap-9">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="mono-caption text-white/60 hover:text-accent transition-colors whitespace-nowrap"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop actions */}
        <div className="hidden lg:flex items-center gap-6 flex-shrink-0">
          <a
            href="https://app.stormchecks.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition-colors text-sm font-medium flex items-center gap-2 whitespace-nowrap"
          >
            <LogIn className="w-4 h-4" />
            Portal Login
          </a>
          <Link
            to="/contact"
            className="bg-accent text-primary px-6 py-3 rounded-lg font-bold hover:bg-[#E6AC00] transition-colors text-sm whitespace-nowrap"
          >
            Request Funding
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-gray-300 hover:text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-primary border-t border-hairline-dark absolute w-full left-0 shadow-2xl">
          <div className="flex flex-col p-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-300 hover:text-accent font-medium transition-colors py-2 block"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-accent text-primary px-5 py-3 rounded-md font-bold hover:bg-[#E6AC00] transition-colors text-center mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Request Funding
            </Link>
            <a
              href="https://app.stormchecks.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors text-center py-2 flex items-center justify-center gap-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <LogIn className="w-4 h-4" />
              Portal Login
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
