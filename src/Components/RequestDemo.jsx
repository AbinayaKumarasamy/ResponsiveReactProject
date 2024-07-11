import React from 'react';
import girlpic from '../assets/girlpic.png';
import laptop from '../assets/laptop.png'

const handleSubmit = (event) => {
  event.preventDefault();
  // Handle form submission logic here
  console.log('Form submitted');
};

const RequestDemo = () => {
  return (
    <div>
    <div className="flex flex-col md:flex-row items-center justify-center mt-[5rem] gap-8 bg-blue-100 p-8 rounded-lg">
      <div className="text-center md:text-left">
        <div className="text-4xl font-bold mb-4">Book a Free Demo with Skill Lake!</div>
        <img src={girlpic} alt="girl picture" className="w-full md:w-auto" />
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/2">
        <div className="text-2xl font-bold mb-6">Get your quick, no-obligation demo today!</div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter Your Full Name"
                required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Business Email ID *</label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter Your Business Email ID"
                required />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter Your Phone Number"
                required />
            </div>
            <div className="mb-4">
              <label htmlFor="country" className="block text-sm font-medium text-gray-700">Select Country *</label>
              <select
                id="country"
                name="country"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required>
                <option value="" disabled selected>Select Country</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company *</label>
              <input
                type="text"
                id="company"
                name="company"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter Your Company"
                required />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description *</label>
            <textarea
              id="description"
              name="description"
              rows="4"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter Your Description"
              required></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="inline-block w-full md:w-auto px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">BOOK MY DEMO
            </button>
          </div>
        </form>
      </div></div>
      <div className="p-6 md:p-12 bg-gray-100 rounded-lg">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">
        Discover innovative ways to craft an impactful learning journey. Our experts will walk you through:
      </h1>
      <div className="flex flex-col md:flex-row items-center">
        <img src={laptop} alt="laptop" className="w-full md:w-1/2 mb-6 md:mb-0 md:mr-6 rounded-lg shadow-lg" />
        <div className="text-gray-700">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, aut neque. Perferendis iure perspiciatis nam blanditiis possimus, quibusdam asperiores porro minus esse ex dolore repellat sunt rerum doloremque cupiditate voluptate vel totam maxime impedit assumenda ad, ut veritatis facilis? Dolores quam est veritatis, amet consectetur et totam minima error vero.
        </div>
      </div>
    </div>
    </div>

  );
};

export default RequestDemo;
