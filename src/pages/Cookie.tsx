import React from 'react';
import PageTransition from '../components/PageTransition';

const Cookie = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-black py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8 text-gradient">Cookie Policy</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">What Are Cookies</h2>
              <p className="text-gray-300">
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
                They are widely used to make websites work more efficiently and provide a better user experience.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">How We Use Cookies</h2>
              <p className="text-gray-300">We use cookies for the following purposes:</p>
              <ul className="list-disc pl-6 text-gray-300 mt-2">
                <li>Essential cookies for website functionality</li>
                <li>Analytics cookies to understand user behavior</li>
                <li>Performance cookies to optimize website performance</li>
                <li>Preference cookies to remember your settings</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">Types of Cookies We Use</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Essential Cookies</h3>
                  <p className="text-gray-300">
                    These cookies are necessary for the website to function properly.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Analytics Cookies</h3>
                  <p className="text-gray-300">
                    Help us understand how visitors interact with our website.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Marketing Cookies</h3>
                  <p className="text-gray-300">
                    Used to track visitors across websites to display relevant advertisements.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">Managing Cookies</h2>
              <p className="text-gray-300">
                You can control and manage cookies in your browser settings. Please note that removing 
                or blocking cookies may impact your user experience and parts of our website may no 
                longer be fully accessible.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">Contact Us</h2>
              <p className="text-gray-300">
                If you have any questions about our Cookie Policy, please contact us at:
                <br />
                <a href="mailto:privacy@ingeniousdigital.com" className="text-red-500 hover:text-red-400">
                  privacy@ingeniousdigital.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Cookie;