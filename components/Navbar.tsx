import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'How It Works', path: '/how-it-works', isAnchor: false },
    { name: 'Expert File', path: '/expert-file', isAnchor: false },
    { name: 'Case Work', path: '/case-work', isAnchor: false },
    { name: 'Resources', path: '/resources', isAnchor: false },
    { name: 'Leadership', path: '/leadership', isAnchor: false },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-primary text-white shadow-lg border-b border-white/10">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo Section */}
        <Link to="/" className="flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
          <img 
            src="https://storage.googleapis.com/msgsndr/7fFIJC0GfXGlSGfKIuzi/media/6966f948415652622e320969.png" 
            alt="StormChecks" 
            className="w-36 md:w-40 h-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {navLinks.map((link) => (
             link.isAnchor ? (
                <a
                  key={link.name}
                  href={link.path}
                  className="text-gray-300 hover:text-accent font-medium transition-colors text-xs xl:text-sm uppercase tracking-wide whitespace-nowrap"
                >
                  {link.name}
                </a>
             ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-gray-300 hover:text-accent font-medium transition-colors text-xs xl:text-sm uppercase tracking-wide whitespace-nowrap"
                >
                  {link.name}
                </Link>
             )
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Link to="/contact?focus=true" className="bg-accent text-primary px-6 py-3 rounded-lg font-bold hover:bg-[#E6AC00] transition-all shadow-lg hover:shadow-accent/20 hover:-translate-y-0.5 text-sm uppercase tracking-wide">
            Free Assessment
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-300 hover:text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-primary border-t border-gray-800 absolute w-full left-0 shadow-2xl">
          <div className="flex flex-col p-4 space-y-4">
            {navLinks.map((link) => (
              link.isAnchor ? (
                  <a
                    key={link.name}
                    href={link.path}
                    className="text-gray-300 hover:text-accent font-medium transition-colors py-2 block"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
              ) : (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="text-gray-300 hover:text-accent font-medium transition-colors py-2 block"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
              )
            ))}
            <Link
              to="/contact?focus=true"
              className="bg-accent text-primary px-5 py-3 rounded-md font-bold hover:bg-[#E6AC00] transition-colors text-center block mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Free Assessment
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;