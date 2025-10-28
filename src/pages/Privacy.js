import React from 'react';
import { Shield } from 'lucide-react';

function Privacy() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-orange-50 via-white to-yellow-50">
        <div className="max-w-4xl mx-auto text-center">
          <Shield className="mx-auto mb-6 text-orange-500" size={64} />
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{
            background: 'linear-gradient(135deg, #FDB931 0%, #FF8C42 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600">
            Last updated: October 28, 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <div className="space-y-8 text-gray-700">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Introduction</h2>
              <p>
                Raja Automations ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI receptionist services and website.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Information We Collect</h2>
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">Personal Information</h3>
              <p className="mb-4">We may collect personal information that you provide to us, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name and contact information (email, phone number, address)</li>
                <li>Company information</li>
                <li>Payment and billing information</li>
                <li>Communications and correspondence with us</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-3 mt-6 text-gray-900">Usage Data</h3>
              <p className="mb-4">We automatically collect certain information when you use our services:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Call logs and recordings (when using our AI receptionist)</li>
                <li>Usage patterns and preferences</li>
                <li>Device information and IP address</li>
                <li>Browser type and operating system</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">How We Use Your Information</h2>
              <p className="mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send administrative information, updates, and security alerts</li>
                <li>Respond to your comments and questions</li>
                <li>Analyze usage patterns to improve user experience</li>
                <li>Detect, prevent, and address technical issues and fraud</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Data Security</h2>
              <p>
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>End-to-end encryption for all data transmissions</li>
                <li>Secure cloud storage with AWS</li>
                <li>Regular security audits and penetration testing</li>
                <li>HIPAA-compliant infrastructure for healthcare clients</li>
                <li>Access controls and authentication protocols</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Data Sharing and Disclosure</h2>
              <p className="mb-4">We do not sell your personal information. We may share your information with:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Service Providers:</strong> Third-party vendors who perform services on our behalf</li>
                <li><strong>Business Transfers:</strong> In connection with any merger, sale, or acquisition</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                <li><strong>With Your Consent:</strong> When you explicitly authorize us to share your information</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Your Rights and Choices</h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access and receive a copy of your personal information</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Request deletion of your personal information</li>
                <li>Object to or restrict certain processing activities</li>
                <li>Opt-out of marketing communications</li>
                <li>Data portability (receive your data in a structured format)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Cookies and Tracking</h2>
              <p>
                We use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Data Retention</h2>
              <p>
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Children's Privacy</h2>
              <p>
                Our services are not directed to children under 13 years of age. We do not knowingly collect personal information from children under 13.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">International Data Transfers</h2>
              <p>
                Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Contact Us</h2>
              <p className="mb-4">If you have questions about this Privacy Policy, please contact us:</p>
              <ul className="list-none space-y-2">
                <li><strong>Email:</strong> rajaautomations25@gmail.com</li>
                <li><strong>Phone:</strong> (555) 123-4567</li>
                <li><strong>Address:</strong> 123 Business Avenue, Suite 100, Austin, TX 78701</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Privacy;
