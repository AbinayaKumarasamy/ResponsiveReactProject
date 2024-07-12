import React from 'react';
import { useState } from 'react';
const ContactUs = () => {
  useEffect (() => {
    window.scrollTo(0,0);
    },[]);
  return (
    <div>
      <div className="bg-gray-500  bg-center bg-no-repeat shadow-md">
        <div className="mt-[5rem] max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-6xl font-bold mb-6 text-white">Contact Us</h2>
        </div>
      </div>
      <div className="flex flex-col items-center p-8">
        <div className="w-full max-w-7xl p-6 rounded relative overflow-hidden">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="w-full md:w-1/2 md:pr-8 mb-8 md:mb-0">
              <h3 className="text-3xl font-semibold text-[#0a2b70]">Postal Address</h3>
              <p className="text-[#0a2b70]">235 Mamaroneck Ave, Suite #301, White Plains, NY 10605</p>
              <h3 className="text-3xl font-semibold mt-4 text-[#0a2b70]">Email Address</h3>
              <p className="text-[#0a2b70]">info@skilllake.com</p>
              <h3 className="text-3xl font-semibold mt-4 text-[#0a2b70]">Phone</h3>
              <p className="text-[#0a2b70]">+1 (914) 278-7007</p>
            </div>
            <div className="w-full md:w-1/2 md:pl-8 bg-[#0b2a70] p-6 rounded-md">
              <h3 className="text-xl font-semibold mb-4 text-white">Let Us Know Your Learning & Development Needs</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-white">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="mt-1 block w-full h-7 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-white">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="mt-1 block w-full h-7 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="businessEmail" className="block text-sm font-medium text-white">
                    Business Email ID *
                  </label>
                  <input
                    type="email"
                    id="businessEmail"
                    className="mt-1 block w-full h-7 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium text-white">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    className="mt-1 block w-full h-7 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="phoneNumber" className="block text-sm font-medium text-white">
                    Phone Number *
                  </label>
                  <input
                    type="text"
                    id="phoneNumber"
                    className="mt-1 block w-full h-7 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  ></textarea>
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    CONTACT NOW
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;