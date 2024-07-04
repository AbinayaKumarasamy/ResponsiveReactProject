import React from 'react';
import pricepage from '../assets/pricepage.jpeg';
import background from '../assets/top.jpeg'; 

const Pricing = () => {
  return (
    <div className="bg-gray-100">
      
      <div
        className="bg-cover bg-center bg-no-repeat shadow-md"
        style={{ backgroundImage: `url(${background})`, height: '200px' }} 
      >
        <div className="mt-[5rem] max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center">
          <h2 className=" p-4 text-4xl font-bold text-white">
            Pick the Right Plan for Your Business
          </h2>
        </div>
      </div>

      
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-xl font-bold text-gray-900">
          Get Started with Skill Lake the Way You Prefer
        </h3>
      </div>

      
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="bg-white shadow-md p-3 rounded-lg">
          <div className="w-full mb-2">
            <img
              src={pricepage}
              alt="Illustration"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <div className="w-full">
            <ul className="list-decimal list-inside space-y-1 text-gray-700 text-sm text-left pl-4">
              <li>
                Get the customized and white labeled enterprise version of
                Skill Lake hosted on your server while we take care of
                maintenance and upgrades.
              </li>
              <li>
                Host Skill Lake on the cloud of your choice and pay per user. We support:
                <ul className="list-disc list-inside pl-4">
                  <li>InfinCE ($15 instant)</li>
                  <li>AWS</li>
                  <li>Microsoft Azure</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="text-center mt-2">
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm">
              Request a Demo
            </button>
          </div>
        </div>
      </div>

      
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow-md p-6 rounded-lg flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2">
              <h3 className="text-lg font-bold text-gray-900 mb-2 text-center lg:text-left">
                Host Skill Lake on InfinCE Cloud
              </h3>
              <p className="text-gray-700 text-center lg:text-left text-sm">
                Want to save time and effort in finding the right hosting
                environment for Skill Lake? Host Skill Lake on our secure cloud
                InfinCE and get started with just a click!
              </p>
              <div className="text-center mt-2 lg:text-left">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">
                  Learn More
                </button>
              </div>
            </div>
            <div className="w-full lg:w-1/2 mt-4 lg:mt-0 lg:ml-4">
              <img
                src={pricepage}
                alt="Illustration"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;