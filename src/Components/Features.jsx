import React from 'react';
import OIP from '../assets/OIP.jpg';
import aiml from '../assets/aiml.png';
import { useEffect } from 'react';
const Features = () => {
  useEffect (() => {
    window.scrollTo(0,0);
    },[]);
  return (
    <div className='p-5'>
      <header
        className="bg-cover bg-center h-64 text-white"
        style={{ backgroundImage: `url(${OIP})` }}>
      
        <div className="bg-black bg-opacity-50 h-full flex items-center justify-center">
          <h1 className="text-4xl font-bold">Features</h1>
        </div>
      </header>
      <section className="py-8 px-4 flex flex-col md:flex-row">
        <div className="md:w-1/2 space-y-4 md:space-y-0 md:flex md:flex-col md:justify-center">
          <h2 className="text-3xl font-bold p-5">End-to-End Learning Platform to Catalyze Learner Development</h2>
          <div className="overflow-y-auto max-h-96">
            <ul className="space-y-2">
              <li className="bg-gray-100 p-4 rounded-md hover:bg-gray-200 transition-colors">
                &#8226; AI/ML Powered Course Recommendations
              </li>
              <li className="bg-gray-100 p-4 rounded-md hover:bg-gray-200 transition-colors">
                &#8226; Courses with Immersive AR/VR Experiences
              </li>
              <li className="bg-gray-100 p-4 rounded-md hover:bg-gray-200 transition-colors">
                &#8226; SCORM Compliant LMS
              </li>
              <li className="bg-gray-100 p-4 rounded-md hover:bg-gray-200 transition-colors">
                &#8226; Competency Management & Mapping
              </li>
              <li className="bg-gray-100 p-4 rounded-md hover:bg-gray-200 transition-colors">
                &#8226; Learning Path
              </li>
              <li className="bg-gray-100 p-4 rounded-md hover:bg-gray-200 transition-colors">
                &#8226; Interactive Feed
              </li>
              <li className="bg-gray-100 p-4 rounded-md hover:bg-gray-200 transition-colors">
                &#8226; Multiple Learning Modes
              </li>
              <li className="bg-gray-100 p-4 rounded-md hover:bg-gray-200 transition-colors">
                &#8226; Mentoring
              </li>
              <li className="bg-gray-100 p-4 rounded-md hover:bg-gray-200 transition-colors">
                &#8226; Streamlined Course Management
              </li>
              <li className="bg-gray-100 p-4 rounded-md hover:bg-gray-200 transition-colors">&#8226; Additional Feature 1
              </li>
              <li className="bg-gray-100 p-4 rounded-md hover:bg-gray-200 transition-colors"> &#8226; Additional Feature 2
              </li>
              <li className="bg-gray-100 p-4 rounded-md hover:bg-gray-200 transition-colors">&#8226; Additional Feature 3
              </li>
              <li className="bg-gray-100 p-4 rounded-md hover:bg-gray-200 transition-colors"> &#8226; Additional Feature 4
              </li>
              <li className="bg-gray-100 p-4 rounded-md hover:bg-gray-200 transition-colors">&#8226; Additional Feature 5
              </li>
            </ul>
          </div>
        </div>
        <div className="md:w-1/2 space-y-4">
          <div className="bg-green-100 p-4 rounded-md md:h-full">
            <img src={aiml} alt="Feature Image" className="w-1/2 mx-auto rounded-md" />
            <p className="mt-4"> Learners spend more time finding course content, causing inefficiencies. Our AI/ML-driven course suggestions enhance the learner experience by offering personalized content.
            </p>
            <p className="mt-4">L&D teams invest heavily in crafting training materials that often go unused. Skill Lake's AI engine picks and delivers relevant courses to users, improving content discoverability and usage.
            </p>
            <p className="mt-4">Additional content to demonstrate
            </p>
            <p className="mt-4"> More content
            </p>
            <p className="mt-4">Even more content
            </p>
          </div>
        </div>
      </section>
      <div className='flex flex-col md:flex-row items-center justify-between p-5'>
        <div className='text-3xl font-bold text-center md:text-left mb-4 md:mb-0'>
          An Online Employee Training Development Software to Nurture Your Training Culture
        </div>
        <div className='text-center md:text-right'>
          <button type='submit' className='bg-green-600 text-white py-2 px-6 rounded-md font-semibold md:py-3 md:px-8'>
            Contact Us
          </button>
        </div>
      </div>
      <section className="bg-gray-900 text-white py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center">
            <div className="md:w-1/3 mb-8 md:mb-0 md:pr-8">
              <h2 className="text-4xl font-bold mb-4">Schedule a Live Demo</h2>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-semibold mb-4">Watch Skill Lake in Action!</h3>
              <form className="space-y-4">
                <div className="flex flex-col md:flex-row md:space-x-4">
                  <input
                    type="text"
                    placeholder="Name*"
                    className="bg-gray-800 text-white p-3 rounded-md flex-grow"/>
                  
                  <input
                    type="text"
                    placeholder="Company*"
                    className="bg-gray-800 text-white p-3 rounded-md flex-grow mt-4 md:mt-0"/>
                </div>
                  
                <div className="flex flex-col md:flex-row md:space-x-4">
                  <input
                    type="text"
                    placeholder="Job Title*"
                    className="bg-gray-800 text-white p-3 rounded-md flex-grow"/>
                  
                  <input
                    type="email"
                    placeholder="Email Address*"
                    className="bg-gray-800 text-white p-3 rounded-md flex-grow mt-4 md:mt-0"/>
                </div>
                  
                <div className="flex flex-col md:flex-row md:space-x-4">
                  <input
                    type="tel"
                    placeholder="Phone Number*"
                    className="bg-gray-800 text-white p-3 rounded-md flex-grow"/>
                  
                  <input
                    type="number"
                    placeholder="Number of Employees"
                    className="bg-gray-800 text-white p-3 rounded-md flex-grow mt-4 md:mt-0"/>
                </div>
                  
                <textarea
                  placeholder="Message"
                  className="bg-gray-800 text-white p-3 rounded-md w-full"
                  rows="4"></textarea>
                
                <button
                  type="submit"
                  className="bg-green-600 text-white py-3 px-6 rounded-md font-semibold">Book My Demo
                </button>  
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Features;
