import React from 'react';
import { Shield, CheckCircle } from 'lucide-react';

function Hipaa() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-orange-50 via-white to-yellow-50">
        <div className="max-w-4xl mx-auto text-center">
          <Shield className="mx-auto mb-6 text-orange-500" size={64} />
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{
            background: 'linear-gradient(135deg, #FDB931 0%, #FF8C42 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            HIPAA Compliance
          </h1>
          <p className="text-xl text-gray-700">
            Enterprise-grade security for healthcare providers
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-xl mb-12">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Our HIPAA Commitment</h2>
            <p className="text-gray-700">
              Raja Automations is fully HIPAA compliant and committed to protecting the privacy and security of protected health information (PHI). Our platform is designed with healthcare providers in mind, ensuring all communications and data handling meet or exceed HIPAA requirements.
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">HIPAA Safeguards</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-orange-500 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-gray-900">End-to-End Encryption</h3>
                    <p className="text-gray-600">All PHI is encrypted in transit and at rest using AES-256 encryption</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-orange-500 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-gray-900">Access Controls</h3>
                    <p className="text-gray-600">Role-based access with multi-factor authentication</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-orange-500 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-gray-900">Audit Logs</h3>
                    <p className="text-gray-600">Comprehensive tracking of all PHI access and modifications</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-orange-500 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-gray-900">Business Associate Agreement</h3>
                    <p className="text-gray-600">We sign BAAs with all healthcare clients</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-orange-500 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-gray-900">Regular Security Audits</h3>
                    <p className="text-gray-600">Third-party penetration testing and compliance reviews</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-orange-500 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-gray-900">Disaster Recovery</h3>
                    <p className="text-gray-600">Automated backups and redundancy protocols</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Data Protection</h2>
              <p className="text-gray-700 mb-4">
                Our infrastructure is hosted on HIPAA-compliant AWS servers with multiple layers of security. All data centers are SOC 2 Type II certified and undergo regular compliance audits.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Employee Training</h2>
              <p className="text-gray-700 mb-4">
                All Raja Automations employees undergo comprehensive HIPAA training and sign confidentiality agreements. We maintain strict policies for handling PHI.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Incident Response</h2>
              <p className="text-gray-700 mb-4">
                We have established incident response procedures to quickly identify, contain, and remediate any potential security breaches. We will notify affected parties within required timeframes.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Questions About HIPAA Compliance?</h2>
              <p className="text-gray-700 mb-4">
                Our compliance team is available to answer any questions about our HIPAA safeguards and processes.
              </p>
              <p className="text-gray-700">
                <strong>Contact:</strong> rajaautomations25@gmail.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hipaa;