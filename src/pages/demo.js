import React, { useState } from 'react';
import { Calendar, CheckCircle, Play } from 'lucide-react';

function Demo() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    employeeCount: '',
    timeSlot: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! We will send you a calendar invite for your demo.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      employeeCount: '',
      timeSlot: ''
    });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-orange-50 via-white to-yellow-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full mb-6">
            <Play size={16} className="text-orange-500" />
            <span className="text-sm font-semibold text-orange-700">Live Demo</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{
            background: 'linear-gradient(135deg, #FDB931 0%, #FF8C42 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            See Raja Automations in Action
          </h1>
          <p className="text-xl text-gray-700">
            Schedule a personalized demo and discover how our AI receptionist can transform your business
          </p>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            What to Expect in Your Demo
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white" style={{
                background: 'linear-gradient(135deg, #FDB931 0%, #FF8C42 100%)'
              }}>
                1
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Live AI Demonstration</h3>
              <p className="text-gray-600">
                Watch our AI receptionist handle real calls, schedule appointments, and engage with clients in real-time
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white" style={{
                background: 'linear-gradient(135deg, #FDB931 0%, #FF8C42 100%)'
              }}>
                2
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Customization Options</h3>
              <p className="text-gray-600">
                Learn how we can customize the AI voice, responses, and workflows to match your business perfectly
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white" style={{
                background: 'linear-gradient(135deg, #FDB931 0%, #FF8C42 100%)'
              }}>
                3
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Q&A Session</h3>
              <p className="text-gray-600">
                Ask our experts anything about features, pricing, integration, and implementation timeline
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Booking Form */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-10 rounded-xl shadow-2xl border-2 border-orange-200">
            <div className="flex items-center gap-3 mb-8">
              <Calendar className="text-orange-500" size={32} />
              <h2 className="text-3xl font-bold text-gray-900">Schedule Your Demo</h2>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none transition"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none transition"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none transition"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none transition"
                    placeholder="Your Company"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="employeeCount" className="block text-sm font-semibold text-gray-700 mb-2">
                    Company Size
                  </label>
                  <select
                    id="employeeCount"
                    name="employeeCount"
                    value={formData.employeeCount}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none transition"
                  >
                    <option value="">Select size</option>
                    <option value="1-10">1-10 employees</option>
                    <option value="11-50">11-50 employees</option>
                    <option value="51-200">51-200 employees</option>
                    <option value="201-500">201-500 employees</option>
                    <option value="500+">500+ employees</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="timeSlot" className="block text-sm font-semibold text-gray-700 mb-2">
                    Preferred Time *
                  </label>
                  <select
                    id="timeSlot"
                    name="timeSlot"
                    value={formData.timeSlot}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none transition"
                  >
                    <option value="">Select a time</option>
                    <option value="morning">Morning (9 AM - 12 PM)</option>
                    <option value="afternoon">Afternoon (12 PM - 3 PM)</option>
                    <option value="evening">Evening (3 PM - 6 PM)</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full text-white px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-all"
                style={{
                  background: 'linear-gradient(135deg, #FDB931 0%, #FF8C42 100%)'
                }}
              >
                Schedule My Demo
              </button>
            </form>

            <p className="text-center text-gray-600 text-sm mt-6">
              Demos typically last 30 minutes. You'll receive a calendar invite within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Why Schedule a Demo?
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <CheckCircle className="text-orange-500 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-1">See Real Results</h3>
                <p className="text-gray-600">Watch how our AI handles actual business scenarios specific to your industry</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="text-orange-500 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-1">No Obligation</h3>
                <p className="text-gray-600">Completely free with no commitment required - just explore the possibilities</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="text-orange-500 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-1">Custom Solutions</h3>
                <p className="text-gray-600">Learn how we can tailor the system to your unique workflow and requirements</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="text-orange-500 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-1">Expert Guidance</h3>
                <p className="text-gray-600">Get answers from our team about implementation, training, and ROI</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Demo;
