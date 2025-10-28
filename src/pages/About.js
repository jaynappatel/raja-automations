import React from 'react';
import { Users, Target, Lightbulb, Award } from 'lucide-react';

function About() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-orange-50 via-white to-yellow-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{
            background: 'linear-gradient(135deg, #FDB931 0%, #FF8C42 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            About Raja Automations
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Revolutionizing business operations through intelligent AI automation
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">Our Story</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              Raja Automations was born from a simple observation: businesses were losing valuable time and money on repetitive front-desk tasks that could be handled more efficiently with AI technology.
            </p>
            <p className="mb-6">
              Our founders, experienced in both healthcare and technology sectors, recognized that receptionists were overwhelmed with routine calls, appointment scheduling, and client follow-ups—tasks that kept them from focusing on providing exceptional in-person service.
            </p>
            <p>
              Today, we're proud to serve businesses across multiple industries, helping them scale their operations while maintaining the personal touch their clients expect.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Target className="text-orange-500 mb-4" size={48} />
              <h3 className="text-3xl font-bold mb-4 text-gray-900">Our Mission</h3>
              <p className="text-gray-700 text-lg">
                To empower businesses with intelligent automation solutions that free up human potential, allowing teams to focus on what truly matters: building relationships and growing their business.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Lightbulb className="text-orange-500 mb-4" size={48} />
              <h3 className="text-3xl font-bold mb-4 text-gray-900">Our Vision</h3>
              <p className="text-gray-700 text-lg">
                To become the leading AI automation platform for businesses worldwide, setting the standard for how technology can enhance—not replace—human connection in customer service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{
                background: 'linear-gradient(135deg, #FDB931 0%, #FF8C42 100%)'
              }}>
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Customer First</h3>
              <p className="text-gray-600">
                Every decision we make starts with understanding and serving our customers' needs. Their success is our success.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{
                background: 'linear-gradient(135deg, #FDB931 0%, #FF8C42 100%)'
              }}>
                <Award className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Excellence</h3>
              <p className="text-gray-600">
                We're committed to delivering the highest quality AI solutions, continuously improving and innovating.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{
                background: 'linear-gradient(135deg, #FDB931 0%, #FF8C42 100%)'
              }}>
                <Lightbulb className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Innovation</h3>
              <p className="text-gray-600">
                We embrace cutting-edge technology and creative solutions to solve real-world business challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Why Choose Raja Automations?</h2>
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center" style={{
                background: 'linear-gradient(135deg, #FDB931 0%, #FF8C42 100%)'
              }}>
                <span className="text-white font-bold">1</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Industry Expertise</h3>
                <p className="text-gray-700">
                  Our team combines deep knowledge of AI technology with practical experience in healthcare, consulting, and customer service industries.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center" style={{
                background: 'linear-gradient(135deg, #FDB931 0%, #FF8C42 100%)'
              }}>
                <span className="text-white font-bold">2</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Proven Results</h3>
                <p className="text-gray-700">
                  Our clients report 40% reduction in missed calls, 60% time savings on appointment scheduling, and 95% client satisfaction rates.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center" style={{
                background: 'linear-gradient(135deg, #FDB931 0%, #FF8C42 100%)'
              }}>
                <span className="text-white font-bold">3</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900">24/7 Support</h3>
                <p className="text-gray-700">
                  We're always here to help. Our dedicated support team ensures your AI receptionist runs smoothly around the clock.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;