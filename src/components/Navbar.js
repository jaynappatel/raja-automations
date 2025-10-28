import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/80 backdrop-blur-sm'
    } border-b border-gray-200`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="text-3xl font-bold transition-all duration-300 group-hover:scale-110" style={{
              background: 'linear-gradient(135deg, #FDB931 0%, #FF8C42 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              RA
            </div>
            <div className="text-xl font-bold text-gray-900">
              RAJA AUTOMATIONS
            </div>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className={`transition-all duration-300 relative group ${
              isActive('/') ? 'text-orange-500' : 'text-gray-700 hover:text-orange-500'
            }`}>
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/about" className={`transition-all duration-300 relative group ${
              isActive('/about') ? 'text-orange-500' : 'text-gray-700 hover:text-orange-500'
            }`}>
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/features" className={`transition-all duration-300 relative group ${
              isActive('/features') ? 'text-orange-500' : 'text-gray-700 hover:text-orange-500'
            }`}>
              Features
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/pricing" className={`transition-all duration-300 relative group ${
              isActive('/pricing') ? 'text-orange-500' : 'text-gray-700 hover:text-orange-500'
            }`}>
              Pricing
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/contact" className={`transition-all duration-300 relative group ${
              isActive('/contact') ? 'text-orange-500' : 'text-gray-700 hover:text-orange-500'
            }`}>
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-orange-500 transition-transform duration-300 hover:scale-110"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link to="/" className="block text-gray-700 hover:text-orange-500 transition" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link to="/about" className="block text-gray-700 hover:text-orange-500 transition" onClick={() => setMobileMenuOpen(false)}>About</Link>
            <Link to="/features" className="block text-gray-700 hover:text-orange-500 transition" onClick={() => setMobileMenuOpen(false)}>Features</Link>
            <Link to="/pricing" className="block text-gray-700 hover:text-orange-500 transition" onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
            <Link to="/contact" className="block text-gray-700 hover:text-orange-500 transition" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;