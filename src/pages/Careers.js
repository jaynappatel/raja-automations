import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Heart, TrendingUp, Users, MapPin, Clock, DollarSign } from 'lucide-react';

function Careers() {
  const jobs = [
    {
      title: "Senior AI Engineer",
      department: "Engineering",
      location: "Austin, TX / Remote",
      type: "Full-time",
      description: "Build and optimize our AI voice models and natural language processing systems."
    },
    {
      title: "Full Stack Developer",
      department: "Engineering",
      location: "Austin, TX / Remote",
      type: "Full-time",
      description: "Develop and maintain our web applications and integrations with various platforms."
    },
    {
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "Austin, TX",
      type: "Full-time",
      description: "Help our clients succeed by ensuring smooth onboarding and ongoing support."
    },
    {
      title: "Sales Development Representative",
      department: "Sales",
      location: "Remote",
      type: "Full-time",
      description: "Generate qualified leads and schedule demos for our AI automation solutions."
    },
    {
      title: "Product Designer",
      department: "Design",
      location: "Austin, TX / Remote",
      type: "Full-time",
      description: "Design intuitive user experiences for our dashboard and client-facing applications."
    },
    {
      title: "Marketing Manager",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
      description: "Lead our marketing initiatives and grow brand awareness in target industries."
    }
  ];

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
            Join Our Team
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Help us revolutionize how businesses operate with AI automation
          </p>
          <Link to="#openings" className="inline-block bg-gradient-to-r from-orange-400 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition">
            View Open Positions
          </Link>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Why Work at Raja Automations?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{
                background: 'linear-gradient(135deg, #FDB931 0%, #FF8C42 100%)'
              }}>
                <TrendingUp className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Fast Growth</h3>
              <p className="text-gray-600">
                Join a rapidly growing startup with huge market potential
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{
                background: 'linear-gradient(135deg, #FDB931 0%, #FF8C42 100%)'
              }}>
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Great Team</h3>
              <p className="text-gray-600">
                Work with talented, passionate people who love what they do
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{
                background: 'linear-gradient(135deg, #FDB931 0%, #FF8C42 100%)'
              }}>
                <Heart className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Great Benefits</h3>
              <p className="text-gray-600">
                Competitive salary, equity, health insurance, and unlimited PTO
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{
                background: 'linear-gradient(135deg, #FDB931 0%, #FF8C42 100%)'
              }}>
                <Briefcase className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Impact</h3>
              <p className="text-gray-600">
                Make a real difference in how businesses serve their customers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Perks & Benefits
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <DollarSign className="text-orange-500 mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Competitive Compensation</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Top-tier salaries</li>
                <li>• Equity options</li>
                <li>• Performance bonuses</li>
                <li>• 401(k) matching</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Heart className="text-orange-500 mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Health & Wellness</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Premium health insurance</li>
                <li>• Dental & vision coverage</li>
                <li>• Mental health support</li>
                <li>• Gym membership</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Clock className="text-orange-500 mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Work-Life Balance</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Unlimited PTO</li>
                <li>• Flexible hours</li>
                <li>• Remote work options</li>
                <li>• Parental leave</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="openings" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Open Positions
          </h2>
          <div className="space-y-6">
            {jobs.map((job, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-orange-400 hover:shadow-xl transition-all">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-gray-600">
                      <span className="flex items-center gap-2">
                        <Briefcase size={16} />
                        {job.department}
                      </span>
                      <span className="flex items-center gap-2">
                        <MapPin size={16} />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-2">
                        <Clock size={16} />
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <Link 
                    to="/contact"
                    className="px-6 py-3 rounded-lg font-semibold text-white hover:opacity-90 transition whitespace-nowrap text-center"
                    style={{
                      background: 'linear-gradient(135deg, #FDB931 0%, #FF8C42 100%)'
                    }}
                  >
                    Apply Now
                  </Link>
                </div>
                <p className="text-gray-600">{job.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6" style={{
        background: 'linear-gradient(135deg, #FDB931 0%, #FF8C42 100%)'
      }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Don't See Your Role?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            We're always looking for talented people. Send us your resume and let's talk!
          </p>
          <Link to="/contact" className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-all inline-block shadow-lg">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Careers;
