import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';

function Pricing() {
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
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-700">
            Choose the plan that fits your business needs. No hidden fees.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <div className="bg-white p-8 rounded-xl border-2 border-gray-200 hover:shadow-2xl transition-all">
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Starter</h3>
              <p className="text-gray-600 mb-6">Perfect for small practices</p>
              <div className="mb-6">
                <span className="text-5xl font-bold text-gray-900">$299</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} className="text-orange-500 mt-1 flex-shrink-0" />
                  <span>Up to 500 calls/month</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} className="text-orange-500 mt-1 flex-shrink-0" />
                  <span>Basic appointment scheduling</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} className="text-orange-500 mt-1 flex-shrink-0" />
                  <span>SMS notifications</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} className="text-orange-500 mt-1 flex-shrink-0" />
                  <span>Email support</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} className="text-orange-500 mt-1 flex-shrink-0" />
                  <span>1 phone number</span>
                </li>
              </ul>
              <Link to="/contact" className="block text-center border-2 border-orange-500 text-orange-500 px-8 py-4 rounded-lg font-semibold hover:bg-orange-50 transition-all">
                Get Started
              </Link>
            </div>

            {/* Professional Plan */}
            <div className="bg-white p-8 rounded-xl border-2 border-orange-500 shadow-2xl transform scale-105 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-400 to-orange-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Professional</h3>
              <p className="text-gray-600 mb-6">Best for growing businesses</p>
              <div className="mb-6">
                <span className="text-5xl font-bold text-gray-900">$599</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} className="text-orange-500 mt-1 flex-shrink-0" />
                  <span>Up to 2,000 calls/month</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} className="text-orange-500 mt-1 flex-shrink-0" />
                  <span>Advanced scheduling with Calendly</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} className="text-orange-500 mt-1 flex-shrink-0" />
                  <span>SMS & WhatsApp campaigns</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} className="text-orange-500 mt-1 flex-shrink-0" />
                  <span>Priority support</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} className="text-orange-500 mt-1 flex-shrink-0" />
                  <span>Up to 3 phone numbers</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} className="text-orange-500 mt-1 flex-shrink-0" />
                  <span>CRM integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} className="text-orange-500 mt-1 flex-shrink-0" />
                  <span>Custom voice personality</span>
                </li>
              </ul>
              <Link to="/contact" className="block text-center text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-all" style={{
                background: 'linear-gradient(135deg, #FDB931 0%, #FF8C42 100%)'
              }}>
                Get Started
              </Link>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white p-8 rounded-xl border-2 border-gray-200 hover:shadow-2xl transition-all">
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Enterprise</h3>
              <p className="text-gray-600 mb-6">For large organizations</p>
              <div className="mb-6">
                <span className="text-5xl font-bold text-gray-900">Custom</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} className="text-orange-500 mt-1 flex-shrink-0" />
                  <span>Unlimited calls</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} className="text-orange-500 mt-1 flex-shrink-0" />
                  <span>Everything in Professional</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} className="text-orange-500 mt-1 flex-shrink-0" />
                  <span>Dedicated account manager</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} className="text-orange-500 mt-1 flex-shrink-0" />
                  <span>24/7 phone support</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} className="text-orange-500 mt-1 flex-shrink-0" />
                  <span>Unlimited phone numbers</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} className="text-orange-500 mt-1 flex-shrink-0" />
                  <span>Custom integrations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} className="text-orange-500 mt-1 flex-shrink-0" />
                  <span>SLA guarantee</span>
                </li>
              </ul>
              <Link to="/contact" className="block text-center border-2 border-orange-500 text-orange-500 px-8 py-4 rounded-lg font-semibold hover:bg-orange-50 transition-all">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Can I change plans later?</h3>
              <p className="text-gray-600">
                Yes! You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Is there a free trial?</h3>
              <p className="text-gray-600">
                We offer a 14-day free trial for all new customers. No credit card required to start.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-3 text-gray-900">What happens if I exceed my call limit?</h3>
              <p className="text-gray-600">
                Additional calls are billed at $0.30 per call. We'll notify you as you approach your limit so you can upgrade if needed.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Do you offer refunds?</h3>
              <p className="text-gray-600">
                Yes, we offer a 30-day money-back guarantee. If you're not satisfied, we'll refund your first month's payment.
              </p>
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
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join hundreds of businesses already using Raja Automations
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-all shadow-lg">
            Start Your Free Trial
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Pricing;