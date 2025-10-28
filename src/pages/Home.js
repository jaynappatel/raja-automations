import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Calendar, MessageSquare, Shield, Zap, ArrowRight, CheckCircle, Sparkles } from 'lucide-react';

function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
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
            <Link to="/contact" className="px-8 py-4 rounded-lg font-semibold text-lg text-white transition-all flex items-center justify-center gap-2 hover:scale-105 hover:shadow-2xl group" style={{
              background: 'linear-gradient(135deg, #FDB931 0%, #FF8C42 100%)',
              boxShadow: '0 10px 40px rgba(253, 185, 49, 0.4)'
            }}>
              Get Started 
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/contact" className="border-2 px-8 py-4 rounded-lg font-semibold text-lg bg-white hover:bg-gray-50 transition-all hover:scale-105 hover:shadow-xl" style={{
              borderColor: '#FDB931',
              color: '#FF8C42'
            }}>
              Watch Demo
            </Link>
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

      {/* CTA Section */}
      <section className="py-20 px-6 relative overflow-hidden" style={{
        background: 'linear-gradient(135deg, #FDB931 0%, #FF8C42 100%)'
      }}>
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
            <Link to="/contact" className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-all shadow-lg hover:scale-105 hover:shadow-2xl">
              Schedule a Demo
            </Link>
            <Link to="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all hover:scale-105">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

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
        }
        
        .animate-fade-in-up {
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

export default Home;