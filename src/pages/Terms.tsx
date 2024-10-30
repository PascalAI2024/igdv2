import React from 'react';

const Terms = () => {
  return (
    <div className="min-h-screen bg-black py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-gradient">Terms of Service</h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">1. Agreement to Terms</h2>
            <p className="text-gray-300">
              By accessing or using our services, you agree to be bound by these Terms of Service and our Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">2. Services</h2>
            <p className="text-gray-300">
              We provide digital transformation services, including but not limited to:
            </p>
            <ul className="list-disc pl-6 text-gray-300 mt-2">
              <li>Custom software development</li>
              <li>AI and machine learning solutions</li>
              <li>Cloud infrastructure</li>
              <li>Cybersecurity services</li>
              <li>Digital strategy consulting</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">3. Intellectual Property</h2>
            <p className="text-gray-300">
              All intellectual property rights in our services and deliverables remain our property unless explicitly agreed otherwise in writing.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">4. Payment Terms</h2>
            <p className="text-gray-300">
              Payment terms are specified in individual service agreements. Standard payment terms include:
            </p>
            <ul className="list-disc pl-6 text-gray-300 mt-2">
              <li>30% upfront payment</li>
              <li>Progress payments based on milestones</li>
              <li>Final payment upon project completion</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">5. Confidentiality</h2>
            <p className="text-gray-300">
              We maintain strict confidentiality of all client information and project details.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">6. Limitation of Liability</h2>
            <p className="text-gray-300">
              Our liability is limited to the amount paid for services in the 12 months preceding any claim.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">7. Termination</h2>
            <p className="text-gray-300">
              Either party may terminate services with 30 days written notice, subject to payment for work completed.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">8. Contact</h2>
            <p className="text-gray-300">
              For questions about these Terms, please contact us at:
              <br />
              <a href="mailto:legal@ingeniousdigital.com" className="text-red-500 hover:text-red-400">
                legal@ingeniousdigital.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;