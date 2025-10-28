import React from 'react';
import { FileText } from 'lucide-react';

function Terms() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-orange-50 via-white to-yellow-50">
        <div className="max-w-4xl mx-auto text-center">
          <FileText className="mx-auto mb-6 text-orange-500" size={64} />
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{
            background: 'linear-gradient(135deg, #FDB931 0%, #FF8C42 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Terms of Service
          </h1>
          <p className="text-lg text-gray-600">Last updated: October 28, 2025</p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-8 text-gray-700">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">1. Acceptance of Terms</h2>
            <p>
              By accessing and using Raja Automations' services, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">2. Use License</h2>
            <p className="mb-4">
              Permission is granted to temporarily use Raja Automations' services for personal or commercial purposes. This license shall automatically terminate if you violate any of these restrictions.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">3. Service Description</h2>
            <p>
              Raja Automations provides AI-powered receptionist services including call handling, appointment scheduling, and client engagement automation.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">4. User Responsibilities</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate account information</li>
              <li>Maintain security of your account credentials</li>
              <li>Use services in compliance with applicable laws</li>
              <li>Not misuse or abuse the service</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">5. Payment Terms</h2>
            <p>
              Subscription fees are billed monthly or annually based on your chosen plan. All fees are non-refundable except as required by law or as explicitly stated in our refund policy.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">6. Termination</h2>
            <p>
              We may terminate or suspend your account immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">7. Limitation of Liability</h2>
            <p>
              Raja Automations shall not be liable for any indirect, incidental, special, consequential or punitive damages resulting from your use or inability to use the service.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">8. Contact Information</h2>
            <p>
              For questions about these Terms, contact us at rajaautomations25@gmail.com
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Terms;