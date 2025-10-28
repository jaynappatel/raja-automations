import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Calendar, MessageSquare, Clock, Globe, Shield, Zap, CheckCircle } from 'lucide-react';

function Features() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-orange-50 via-white to-yellow-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{
            background: 'linear-gradient(135deg, #FDB931 0%, #FF8C42 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Powerful Features
          </h1>
          <p className="text-xl text-gray-700">
            Everything you need to automate and scale your business operations
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-xl border-2 border-gray-200 hover:border-orange-400 hover:shadow-xl transition-all">
              <Phone className="text-orange-500 mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-3 text-gray-900">AI Voice Receptionist</h3>
              <p className="text-gray-600 mb-4">
                Natural, human-like conversations powered by advanced AI. Handles multiple calls simultaneously without missing a beat.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-orange-500 mt-1 flex-shrink-0" />
                  <span>Natural language processing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-orange-500 mt-1 flex-shrink-0" />
                  <span>Custom voice personalities</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-orange-500 mt-1 flex-shrink-0" />
                  <span>Multi-language support</span>
                </li>
              </ul>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-xl border-2 border-gray-200 hover:border-orange-400 hover:shadow-xl transition-all">
              <Calendar className="text-orange-500 mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Smart Scheduling</h3>
              <p className="text-gray-600 mb-4">
                Automated appointment booking integrated with your calendar. Never double-book again.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-orange-500 mt-1 flex-shrink-0" />
                  <span>Calendly & Google Calendar sync</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-orange-500 mt-1 flex-shrink-0" />
                  <span>Automatic reminders</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-orange-500 mt-1 flex-shrink-0" />
                  <span>Rescheduling management</span>
                </li>
              </ul>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-xl border-2 border-gray-200 hover:border-orange-400 hover:shadow-xl transition-all">
              <MessageSquare className="text-orange-500 mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Client Outreach</h3>
              <p className="text-gray-600 mb-4">
                Automated SMS and WhatsApp campaigns to keep clients engaged and informed.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-orange-500 mt-1 flex-shrink-0" />
                  <span>SMS & WhatsApp messaging</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-orange-500 mt-1 flex-shrink-0" />
                  <span>Personalized campaigns</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-orange-500 mt-1 flex-shrink-0" />
                  <span>Follow-up automation</span>
                </li>
              </ul>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-8 rounded-xl border-2 border-gray-200 hover:border-orange-400 hover:shadow-xl transition-all">
              <Clock className="text-orange-500 mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-3 text-gray-900">24/7 Availability</h3>
              <p className="text-gray-600 mb-4">
                Your AI receptionist never sleeps, takes breaks, or calls in sick. Always available for your clients.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-orange-500 mt-1 flex-shrink-0" />
                  <span>Round-the-clock operation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-orange-500 mt-1 flex-shrink-0" />
                  <span>Holiday coverage</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-orange-500 mt-1 flex-shrink-0" />
                  <span>No missed opportunities</span>
                </li>
              </ul>
            </div>

            {/* Feature 5 */}
            <div className="bg-white p-8 rounded-xl border-2 border-gray-200 hover:border-orange-400 hover:shadow-xl transition-all">
              <Globe className="text-orange-500 mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Multi-Platform Integration</h3>
              <p className="text-gray-600 mb-4">
                Seamlessly connects with your existing tools and practice management software.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-orange-500 mt-1 flex-shrink-0" />
                  <span>CRM integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-orange-500 mt-1 flex-shrink-0" />
                  <span>Practice management systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-orange-500 mt-1 flex-shrink-0" />
                  <span>Cloud-based access</span>
                </li>
              </ul>
            </div>

            {/* Feature 6 */}
            <div className="bg-white p-8 rounded-xl border-2 border-gray-200 hover:border-orange-400 hover:shadow-xl transition-all">
              <Shield className="text-orange-500 mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Security & Compliance</h3>
              <p className="text-gray-600 mb-4">
                Enterprise-grade security with full HIPAA compliance for healthcare providers.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-orange-500 mt-1 flex-shrink-0" />
                  <span>HIPAA compliant</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-orange-500 mt-1 flex-shrink-0" />
                  <span>End-to-end encryption</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-orange-500 mt-1 flex-shrink-0" />
                  <span>Regular security audits</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6" style={{
        background: 'linear-gradient(135deg, #FDB931 0%, #FF8C42 100%)'
      }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Ready to Experience These Features?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Schedule a demo and see how Raja Automations can transform your business
          </p>
          <Link to="/contact" className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-all inline-block shadow-lg">
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Features;
