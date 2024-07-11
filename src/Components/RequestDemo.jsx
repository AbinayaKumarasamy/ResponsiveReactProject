import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import girlpic from '../assets/girlpic.png';
import laptop from '../assets/laptop.png';
import video from '../assets/video.jpeg';
import fb from '../assets/fb.png';
import pic from '../assets/pic1.jpg';
import logo1 from '../assets/image.jpeg';
import logo2 from '../assets/images.jpeg';
import logo3 from '../assets/girlpic.png';
import logo4 from '../assets/fb.png'; // Assuming logo4 exists

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
                  {/* Add country options here */}
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
        </div>
      </div>
      <div className="px-6 md:p-12 bg-gray-100 rounded-lg">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">
          Discover innovative ways to craft an impactful learning journey. Our experts will walk you through:
        </h1>
        <div className="flex flex-col md:flex-row items-center">
          <img src={laptop} alt="laptop" className="w-full md:w-1/2 mb-6 md:mb-0 md:mr-6 rounded-lg" />
          <ul className="text-gray-700 list-disc pl-5 space-y-3">
            <li>AI-powered, personalized learning experiences your learners will love</li>
            <li>In-built content authoring & external app integrations, empowering L&D teams</li>
            <li>Seamless user management and access controls, making life easy for admins</li>
            <li>Mobile learning experiences that facilitate learning on the go</li>
            <li>Tracking learning progress and bridging skill gaps to build a competent workforce</li>
          </ul>
        </div>
      </div>
      
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="flex flex-col md:flex-row items-center bg-white shadow-md rounded-lg overflow-hidden max-w-4xl">
          <div className="w-full md:w-1/2 flex justify-center p-4">
            <img src={fb} alt="five brother" className="max-w-xs h-auto" />
          </div>
          <div className="p-4 md:w-1/2 text-center md:text-left">
            <h2 className="text-xl font-bold mb-2">Asset Management Solutions</h2>
            <p className="mb-4">
              Skill Lake's user-friendly interface makes it easy for anyone to use. Creating and assigning courses is a breeze. We had it up and running quickly and customizing it for our learning needs was hassle-free.
            </p>
            <div className="flex items-center justify-center md:justify-start">
              <img src={pic} alt="Bill Walsworth" className="w-12 h-12 rounded-full mr-4" />
              <div>
                <p className="text-sm font-semibold">Bill Walsworth</p>
                <p className="text-sm text-gray-600">Chief Information Officer, Five Brothers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src={video} alt='video' className='px-[8rem] max-w-full h-auto' />
      <div className="mt-8 flex text-white justify-center w-full">
        <div className="shadow-inner rounded-lg bg-blue-400 w-full lg:w-[70rem] lg:h-[30rem] h-auto p-10 lg:p-20">
          <div className="text-2xl lg:text-4xl font-bold mt-2 lg:mt-4 text-center">
            Learning on the Go!
          </div>
          <div className="p-4 sm:p-[1rem] text-xl sm:text-2xl">
            Your Pocket-sized Learning Companion
          </div>
          <div className="mt-2 lg:mt-4 p-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus tempora impedit similique. Quisquam odit delectus magnam debitis? Temporibus voluptates cumque, exercitationem rem nobis libero, voluptatum atque facilis molestias quas magnam saepe dolore consequatur corporis corrupti obcaecati pariatur. Odio, itaque dicta? Maiores consectetur modi natus itaque, amet aut? Ducimus, illum accusantium! officia nisi excepturi blanditiis! Veritatis fugit modi reiciendis unde dolorem non dolores expedita. Quasi, commodi?
            Our intuitive and secure e-learning mobile app lets your users conveniently access and engage with course content on their phones or tablets.
          </div>
          <div className="flex justify-center mt-2 lg:mt-4">
            <button
              type="submit"
              className="p-3 mt-2 border border-white rounded-md bg-transparent sm:ml-4 sm:mt-0"
            >
              KNOW MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestDemo;
