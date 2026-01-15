import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <img 
                src="https://storage.googleapis.com/msgsndr/7fFIJC0GfXGlSGfKIuzi/media/6966f948415652622e320969.png" 
                alt="StormChecks" 
                className="w-40 h-auto"
              />
            </Link>
            <p className="text-gray-400 leading-relaxed text-sm">
              Forensic Building Consultants
            </p>
          </div>

          {/* Links Column */}
          <div className="flex flex-col space-y-3">
             <h4 className="font-bold text-white mb-2 uppercase text-sm tracking-wider">Company</h4>
             <Link to="/resources" className="text-gray-400 hover:text-accent transition-colors text-sm">Resources & Insights</Link>
             <Link to="/privacy" className="text-gray-400 hover:text-accent transition-colors text-sm">Privacy Policy</Link>
             <Link to="/terms" className="text-gray-400 hover:text-accent transition-colors text-sm">Terms of Service</Link>
             <Link to="/contact?contact=true" className="text-gray-400 hover:text-accent transition-colors text-sm">Contact Us</Link>
          </div>

          {/* Contact Info Column */}
          <div className="space-y-4">
            <h4 className="font-bold text-white mb-2 uppercase text-sm tracking-wider">Get in Touch</h4>
            <div className="flex items-center space-x-3 text-gray-400 text-sm group">
              <Mail className="w-4 h-4 text-accent group-hover:text-white transition-colors" />
              <a href="mailto:info@stormchecks.com" className="hover:text-accent transition-colors">info@stormchecks.com</a>
            </div>
            <div className="flex items-center space-x-3 text-gray-400 text-sm group">
              <Phone className="w-4 h-4 text-accent group-hover:text-white transition-colors" />
              <a href="tel:+18018212530" className="hover:text-accent transition-colors">+1 801-821-2530</a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            &copy; 2026 StormChecks. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;