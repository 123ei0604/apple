
import React from 'react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Shop and Learn',
      links: ['Store', 'Mac', 'iPad', 'iPhone', 'Watch', 'AirPods', 'TV & Home', 'iPod touch', 'Accessories', 'Gift Cards']
    },
    {
      title: 'Services',
      links: ['Apple Music', 'Apple TV+', 'Apple Fitness+', 'Apple News+', 'Apple Arcade', 'iCloud', 'Apple One', 'Apple Card', 'Apple Books', 'App Store']
    },
    {
      title: 'Account',
      links: ['Manage Your Apple ID', 'Apple Store Account', 'iCloud.com', 'Apple Media Services', 'Apple Business Manager', 'Apple School Manager']
    },
    {
      title: 'Apple Store',
      links: ['Find a Store', 'Genius Bar', 'Today at Apple', 'Apple Camp', 'Apple Store App', 'Refurbished', 'Financing', 'Apple Trade In', 'Order Status', 'Shopping Help']
    },
    {
      title: 'For Business',
      links: ['Apple and Business', 'Shop for Business', 'Apple Business Manager', 'Apple Deployment Programs', 'Apple Professional Services']
    },
    {
      title: 'For Education',
      links: ['Apple and Education', 'Shop for K-12', 'Shop for College', 'Apple School Manager', 'Apple Professional Learning', 'Education Leadership']
    }
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom section */}
      <div className="border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright and links */}
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-600">
              <p>Copyright © 2024 Apple Inc. All rights reserved.</p>
              <div className="flex space-x-6">
                <a href="#" className="hover:text-gray-900 transition-colors duration-200">Privacy Policy</a>
                <a href="#" className="hover:text-gray-900 transition-colors duration-200">Terms of Use</a>
                <a href="#" className="hover:text-gray-900 transition-colors duration-200">Sales and Refunds</a>
                <a href="#" className="hover:text-gray-900 transition-colors duration-200">Legal</a>
                <a href="#" className="hover:text-gray-900 transition-colors duration-200">Site Map</a>
              </div>
            </div>

            {/* Country selector */}
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <span>🇺🇸</span>
              <span>United States</span>
            </div>
          </div>

          {/* AI Disclaimer */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="glass rounded-2xl p-6 text-center">
              <div className="flex items-center justify-center space-x-2 mb-3">
                <span className="text-2xl">🤖</span>
                <h4 className="text-lg font-semibold gradient-text">AI-Powered Innovation</h4>
              </div>
              <p className="text-sm text-gray-600 max-w-4xl mx-auto">
                This is a conceptual rebrand showcasing AI-enhanced Apple products. All AI features mentioned are speculative 
                and designed to demonstrate future possibilities in human-computer interaction and intelligent technology integration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
