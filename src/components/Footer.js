import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="py-12 px-6 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-bold text-xl mb-4" style={{
              background: 'linear-gradient(135deg, #FDB931 0%, #FF8C42 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              RAJA AUTOMATIONS
            </h4>
            <p className="text-gray-400">
              Intelligent systems that scale your business
            </p>
          </div>
          
          <div>
            <h5 className="font-semibold mb-4">Product</h5>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/features" className="hover:text-orange-400 transition">Features</Link></li>
              <li><Link to="/pricing" className="hover:text-orange-400 transition">Pricing</Link></li>
              <li><Link to="/demo" className="hover:text-orange-400 transition">Demo</Link></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-semibold mb-4">Company</h5>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/about" className="hover:text-orange-400 transition">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-orange-400 transition">Contact</Link></li>
              <li><Link to="/careers" className="hover:text-orange-400 transition">Careers</Link></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-semibold mb-4">Legal</h5>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/privacy" className="hover:text-orange-400 transition">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-orange-400 transition">Terms of Service</Link></li>
              <li><Link to="/hipaa" className="hover:text-orange-400 transition">HIPAA Compliance</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Raja Automations. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;