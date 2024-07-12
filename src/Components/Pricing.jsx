import React from 'react';
import pricepage from '../assets/pricepage.jpeg';
import background from '../assets/top.jpeg';
import { useEffect } from 'react';
const Pricing = () => {
  useEffect (() => {
    window.scrollTo(0,0);
    },[]);
  return (
    <div className="bg-gray-100">
      {/* Top Banner */}
      <div
        className="bg-cover bg-center bg-no-repeat shadow-md"
        style={{ backgroundImage: `url(${background})`, height: '200px' }}
      >
        <div className="mt-[5rem] max-w-7xl mx-auto py-8 px-4 lg:px-8 text-center">
          <h2 className="p-4 text-4xl font-bold text-white">
            Pick the Right Plan for Your Business
          </h2>
        </div>
      </div>

      {/* Introductory Text */}
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-xl font-bold text-gray-900">
          Get Started with Skill Lake the Way You Prefer
        </h3>
      </div>

      {/* First Card Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="bg-white shadow-md p-6 rounded-lg flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2">
            <img
              src={pricepage}
              alt="Illustration"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-4">
            <h3 className="text-lg font-bold text-gray-900 mb-2 text-center md:text-left">
              How can microlearning power training programs & improve employee engagement in an organization?
            </h3>
            <p className="text-gray-700 text-center md:text-left">
              Get the customized and white labeled enterprise version of
              Skill Lake hosted on your server while we take care of
              maintenance and upgrades.
            </p>
            <div className="text-center mt-4 md:text-left">
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm">
                Request a Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Second Card Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow-md p-6 rounded-lg flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2">
              <img
                src={pricepage}
                alt="Illustration"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            <div className="w-full md:w-1/2 md:pl-4">
              <h3 className="text-lg font-bold text-gray-900 mb-2 text-center md:text-left">
                How to choose the perfect LMS for your business?
              </h3>
              <p className="text-gray-700 md:text-left">
                Host Skill Lake on the cloud of your choice and pay per user. We support:
                <ul className="list-disc list-inside pl-4">
                  <li>InfinCE ($15 instant)</li>
                  <li>AWS</li>
                  <li>Microsoft Azure</li>
                </ul>
              </p>
              <div className="text-center mt-4 md:text-left">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;