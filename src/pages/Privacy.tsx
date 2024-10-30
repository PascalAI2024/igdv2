import React from 'react';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-black py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-gradient">Privacy Policy</h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">1. Information We Collect</h2>
            <p className="text-gray-300">We collect information that you provide directly to us, including:</p>
            <ul className="list-disc pl-6 text-gray-300 mt-2">
              <li>Name and contact information</li>
              <li>Company details</li>
              <li>Project requirements</li>
              <li>Communication preferences</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">2. How We Use Your Information</h2>
            <p className="text-gray-300">We use the information we collect to:</p>
            <ul className="list-disc pl-6 text-gray-300 mt-2">
              <li>Provide and improve our services</li>
              <li>Communicate with you</li>
              <li>Send project updates</li>
              <li>Process payments</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">3. Information Sharing</h2>
            <p className="text-gray-300">We do not sell your personal information. We may share your information with:</p>
            <ul className="list-disc pl-6 text-gray-300 mt-2">
              <li>Service providers</li>
              <li>Business partners</li>
              <li>Legal authorities when required</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">4. Data Security</h2>
            <p className="text-gray-300">
              We implement appropriate technical and organizational measures to protect your personal information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">5. Your Rights</h2>
            <p className="text-gray-300">You have the right to:</p>
            <ul className="list-disc pl-6 text-gray-300 mt-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing</li>
              <li>Data portability</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">6. Contact Us</h2>
            <p className="text-gray-300">
              If you have any questions about this Privacy Policy, please contact us at:
              <br />
              <a href="mailto:privacy@ingeniousdigital.com" className="text-red-500 hover:text-red-400">
                privacy@ingeniousdigital.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;