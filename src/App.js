import React, { useState, useEffect } from 'react';
import { Phone, Calendar, MessageSquare, Shield, Zap, ArrowRight, CheckCircle, Menu, X, Sparkles } from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/80 backdrop-blur-sm'
      } border-b border-gray-200`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
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
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('features')} className="text-gray-700 hover:text-orange-500 transition-all duration-300 relative group">
                Features
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 group-hover:w-full transition-all duration-300"></span>
              </button>
              <button onClick={() => scrollToSection('how-it-works')} className="text-gray-700 hover:text-orange-500 transition-all duration-300 relative group">
                How It Works
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 group-hover:w-full transition-all duration-300"></span>
              </button>
              <button onClick={() => scrollToSection('pricing')} className="text-gray-700 hover:text-orange-500 transition-all duration-300 relative group">
                Pricing
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 group-hover:w-full transition-all duration-300"></span>
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-orange-500 transition-all duration-300 relative group">
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 group-hover:w-full transition-all duration-300"></span>
              </button>
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
            <div className="md:hidden mt-4 space-y-4 animate-fade-in">
              <button onClick={() => scrollToSection('features')} className="block w-full text-left text-gray-700 hover:text-orange-500 transition">Features</button>
              <button onClick={() => scrollToSection('how-it-works')} className="block w-full text-left text-gray-700 hover:text-orange-500 transition">How It Works</button>
              <button onClick={() => scrollToSection('pricing')} className="block w-full text-left text-gray-700 hover:text-orange-500 transition">Pricing</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-gray-700 hover:text-orange-500 transition">Contact</button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-yellow-50">
        {/* Animated background gradient */}
        <div className="absolute inset-0 opacity-30">
          <div 
            className="absolute w-96 h-96 rounded-full blur-3xl transition-all duration-1000 ease-out"
            style={{
              background: 'radial-gradient(circle, #FDB931 0%, transparent 70%)',
              left: `${mousePosition.x / 20}px`,
              top: `${mousePosition.y / 20}px`,
            }}
          ></div>
          <div 
            className="absolute w-96 h-96 rounded-full blur-3xl transition-all duration-1000 ease-out"
            style={{
              background: 'radial-gradient(circle, #FF8C42 0%, transparent 70%)',
              right: `${mousePosition.x / 30}px`,
              bottom: `${mousePosition.y / 30}px`,
            }}
          ></div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-orange-400 rounded-full opacity-20 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`
              }}
            ></div>
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full mb-6 animate-bounce-slow">
            <Sparkles size={16} className="text-orange-500" />
            <span className="text-sm font-semibold text-orange-700">AI-Powered Innovation</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up" style={{
            background: 'linear-gradient(135deg, #FDB931 0%, #FF8C42 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            AI-Powered Reception
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-4 max-w-3xl mx-auto font-semibold animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Intelligent systems that scale your business
          </p>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Transform your front desk with intelligent AI receptionist technology. Handle calls, schedule appointments, and engage clients 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <button onClick={() => scrollToSection('contact')} className="px-8 py-4 rounded-lg font-semibold text-lg text-white transition-all flex items-center justify-center gap-2 hover:scale-105 hover:shadow-2xl group" style={{
              background: 'linear-gradient(135deg, #FDB931 0%, #FF8C42 100%)',
              boxShadow: '0 10px 40px rgba(253, 185, 49, 0.4)'
            }}>
              Get Started 
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button onClick={() => scrollToSection('contact')} className="border-2 px-8 py-4 rounded-lg font-semibold text-lg bg-white hover:bg-gray-50 transition-all hover:scale-105 hover:shadow-xl" style={{
              borderColor: '#FDB931',
              color: '#FF8C42'
            }}>
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
            Everything Your Reception Needs
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Comprehensive AI solutions designed to streamline your operations
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* AI Receptionist */}
            <div className="bg-white p-8 rounded-xl border-2 border-gray-200 hover:border-orange-400 transition-all duration-300 group hover:shadow-2xl hover:-translate-y-2">
              <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6" style={{
                background: 'linear-gradient(135deg, rgba(253, 185, 49, 0.15) 0%, rgba(255, 140, 66, 0.15) 100%)'
              }}>
                <Phone className="text-orange-500" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">24/7 AI Receptionist</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2 group/item">
                  <CheckCircle size={20} className="text-orange-500 mt-1 flex-shrink-0 group-hover/item:scale-125 transition-transform" />
                  <span>High-level conversations with natural language understanding</span>
                </li>
                <li className="flex items-start gap-2 group/item">
                  <CheckCircle size={20} className="text-orange-500 mt-1 flex-shrink-0 group-hover/item:scale-125 transition-transform" />
                  <span>Handle unlimited concurrent calls</span>
                </li>
                <li className="flex items-start gap-2 group/item">
                  <CheckCircle size={20} className="text-orange-500 mt-1 flex-shrink-0 group-hover/item:scale-125 transition-transform" />
                  <span>Customizable responses and personality</span>
                </li>
              </ul>
            </div>

            {/* Smart Scheduling */}
            <div className="bg-white p-8 rounded-xl border-2 border-gray-200 hover:border-orange-400 transition-all duration-300 group hover:shadow-2xl hover:-translate-y-2">
              <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6" style={{
                background: 'linear-gradient(135deg, rgba(253, 185, 49, 0.15) 0%, rgba(255, 140, 66, 0.15) 100%)'
              }}>
                <Calendar className="text-orange-500" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Smart Appointment Scheduling</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2 group/item">
                  <CheckCircle size={20} className="text-orange-500 mt-1 flex-shrink-0 group-hover/item:scale-125 transition-transform" />
                  <span>Calendly integration for seamless booking</span>
                </li>
                <li className="flex items-start gap-2 group/item">
                  <CheckCircle size={20} className="text-orange-500 mt-1 flex-shrink-0 group-hover/item:scale-125 transition-transform" />
                  <span>Automated reminders via text & email</span>
                </li>
                <li className="flex items-start gap-2 group/item">
                  <CheckCircle size={20} className="text-orange-500 mt-1 flex-shrink-0 group-hover/item:scale-125 transition-transform" />
                  <span>Real-time availability updates</span>
                </li>
              </ul>
            </div>

            {/* Client Engagement */}
            <div className="bg-white p-8 rounded-xl border-2 border-gray-200 hover:border-orange-400 transition-all duration-300 group hover:shadow-2xl hover:-translate-y-2">
              <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6" style={{
                background: 'linear-gradient(135deg, rgba(253, 185, 49, 0.15) 0%, rgba(255, 140, 66, 0.15) 100%)'
              }}>
                <MessageSquare className="text-orange-500" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Client Engagement</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2 group/item">
                  <CheckCircle size={20} className="text-orange-500 mt-1 flex-shrink-0 group-hover/item:scale-125 transition-transform" />
                  <span>SMS & WhatsApp outreach campaigns</span>
                </li>
                <li className="flex items-start gap-2 group/item">
                  <CheckCircle size={20} className="text-orange-500 mt-1 flex-shrink-0 group-hover/item:scale-125 transition-transform" />
                  <span>HIPAA-compliant communications</span>
                </li>
                <li className="flex items-start gap-2 group/item">
                  <CheckCircle size={20} className="text-orange-500 mt-1 flex-shrink-0 group-hover/item:scale-125 transition-transform" />
                  <span>Personalized follow-ups</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 px-6 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-400 rounded-full blur-3xl animate-pulse-slow"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
            Powered by Industry-Leading Technology
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Built on enterprise-grade infrastructure for reliability and security
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl border-2 border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
              <Zap className="text-orange-500 mb-4 group-hover:animate-pulse" size={36} />
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Infrastructure</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="hover:translate-x-2 transition-transform">• AWS for scalable, secure cloud hosting</li>
                <li className="hover:translate-x-2 transition-transform">• Advanced AI voice models (Arnav/Savna)</li>
                <li className="hover:translate-x-2 transition-transform">• Enterprise-grade security & encryption</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border-2 border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
              <Shield className="text-orange-500 mb-4 group-hover:animate-pulse" size={36} />
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Compliance & Integration</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="hover:translate-x-2 transition-transform">• HIPAA-compliant for healthcare providers</li>
                <li className="hover:translate-x-2 transition-transform">• Integrates with existing practice management software</li>
                <li className="hover:translate-x-2 transition-transform">• NAS backup for data redundancy</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
            Simple Setup, Powerful Results
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Get started in three easy steps
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-xl" style={{
                background: 'linear-gradient(135deg, #FDB931 0%, #FF8C42 100%)'
              }}>
                1
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Consultation & Setup</h3>
              <p className="text-gray-600">
                We learn about your practice and customize the AI to match your workflow and voice
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-xl" style={{
                background: 'linear-gradient(135deg, #FDB931 0%, #FF8C42 100%)'
              }}>
                2
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Integration</h3>
              <p className="text-gray-600">
                Connect with your existing calendar, phone system, and practice management software
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-xl" style={{
                background: 'linear-gradient(135deg, #FDB931 0%, #FF8C42 100%)'
              }}>
                3
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Go Live</h3>
              <p className="text-gray-600">
                Your AI receptionist starts handling calls, bookings, and client engagement immediately
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
            Affordable Pricing for Every Practice
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Flexible plans that grow with your business
          </p>
          
          <div className="max-w-md mx-auto bg-white p-8 rounded-xl border-2 border-orange-400 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
            <h3 className="text-3xl font-bold mb-4 text-gray-900">Custom Pricing</h3>
            <p className="text-gray-600 mb-6">
              We offer flexible pricing based on your practice size and needs. Get a personalized quote today.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2 group">
                <CheckCircle size={20} className="text-orange-500 mt-1 flex-shrink-0 group-hover:scale-125 transition-transform" />
                <span className="text-gray-700">No long-term contracts</span>
              </li>
              <li className="flex items-start gap-2 group">
                <CheckCircle size={20} className="text-orange-500 mt-1 flex-shrink-0 group-hover:scale-125 transition-transform" />
                <span className="text-gray-700">Scalable as you grow</span>
              </li>
              <li className="flex items-start gap-2 group">
                <CheckCircle size={20} className="text-orange-500 mt-1 flex-shrink-0 group-hover:scale-125 transition-transform" />
                <span className="text-gray-700">24/7 support included</span>
              </li>
            </ul>
            <button onClick={() => scrollToSection('contact')} className="w-full py-4 rounded-lg font-semibold text-lg text-white transition-all hover:scale-105 hover:shadow-2xl" style={{
              background: 'linear-gradient(135deg, #FDB931 0%, #FF8C42 100%)',
              boxShadow: '0 10px 40px rgba(253, 185, 49, 0.4)'
            }}>
              Get a Quote
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-6 relative overflow-hidden" style={{
        background: 'linear-gradient(135deg, #FDB931 0%, #FF8C42 100%)'
      }}>
        {/* Animated background */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 bg-white rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`
              }}
            ></div>
          ))}
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Transform Your Reception?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join practices already saving time and improving client satisfaction with AI automation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:rajaautomations25@gmail.com" className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-all shadow-lg hover:scale-105 hover:shadow-2xl inline-block">
              Schedule a Demo
            </a>
            <a href="mailto:rajaautomations25@gmail.com" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all hover:scale-105 inline-block">
              Contact Sales
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-xl mb-4 transition-all duration-300 hover:scale-105 inline-block" style={{
                background: 'linear-gradient(135deg, #FDB931 0%, #FF8C42 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
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
                <li><button onClick={() => scrollToSection('features')} className="hover:text-orange-400 transition hover:translate-x-1">Features</button></li>
                <li><button onClick={() => scrollToSection('pricing')} className="hover:text-orange-400 transition hover:translate-x-1">Pricing</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-orange-400 transition hover:translate-x-1">Demo</button></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Company</h5>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-orange-400 transition hover:translate-x-1">About Us</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-orange-400 transition hover:translate-x-1">Contact</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-orange-400 transition hover:translate-x-1">Careers</button></li>
               </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Legal</h5>
             <ul className="space-y-2 text-gray-400">
                   <li><button onClick={() => scrollToSection('contact')} className="hover:text-orange-400 transition hover:translate-x-1">Privacy Policy</button></li>
                    <li><button onClick={() => scrollToSection('contact')} className="hover:text-orange-400 transition hover:translate-x-1">Terms of Service</button></li>
                   <li><button onClick={() => scrollToSection('contact')} className="hover:text-orange-400 transition hover:translate-x-1">HIPAA Compliance</button></li>
  </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Raja Automations. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 0.8;
          }
        }
        
        .animate-float {
          animation: float linear infinite;
        } .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default App;