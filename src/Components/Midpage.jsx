import React from 'react';
import { FaRegCommentDots, FaFileDownload, FaClipboardList, FaVideo, FaBlog } from 'react-icons/fa';

const Midpage = () => {
  return (
    <div className="font-sans text-black bg-gray-100 min-h-full lg:p-[5rem]">
      <div className="p-6 sm:p-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-6">
            <h1 className="text-3xl sm:text-4xl font-bold">Hear From The Experts</h1>
            <p className="text-lg mt-2">Gain deep insights from our tech experts and stay updated with the latest buzz in the tech world.</p>
          </div>

          <div className="flex flex-wrap justify-center space-x-2 sm:space-x-4 lg:space-x-8 my-6">
            <a href="#" className="flex items-center font-medium hover:text-[#0b2a70] transition-colors duration-300 m-2 sm:m-0">
              <FaFileDownload className="h-6 w-6 mr-2" />
              Downloadables
            </a>
            <a href="#" className="flex items-center font-medium hover:text-[#0b2a70] transition-colors duration-300 m-2 sm:m-0">
              <FaClipboardList className="h-6 w-6 mr-2" />
              Case Studies
            </a>
            <a href="#" className="flex items-center font-medium hover:text-[#0b2a70] transition-colors duration-300 m-2 sm:m-0">
              <FaVideo className="h-6 w-6 mr-2" />
              Videos
            </a>
            <a href="#" className="flex items-center font-medium hover:text-[#0b2a70] transition-colors duration-300 m-2 sm:m-0">
              <FaBlog className="h-6 w-6 mr-2" />
              Blogs
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <a href="#" className="block transform transition-transform duration-300 hover:scale-105">
              <div className="bg-white p-6 rounded-lg shadow-lg h-full flex flex-col justify-between min-h-[200px]">
                <h3 className="text-lg sm:text-xl font-semibold text-red-600">How can microlearning power training programs & improve employee engagement in an organization?</h3>
              </div>
            </a>
            <a href="#" className="block transform transition-transform duration-300 hover:scale-105">
              <div className="bg-white p-6 rounded-lg shadow-lg h-full flex flex-col justify-between min-h-[200px]">
                <h3 className="text-lg sm:text-xl font-semibold text-blue-600">How to choose the perfect LMS for your business?</h3>
              </div>
            </a>
            <a href="#" className="block transform transition-transform duration-300 hover:scale-105">
              <div className="bg-white p-6 rounded-lg shadow-lg h-full flex flex-col justify-between min-h-[200px]">
                <h3 className="text-lg sm:text-xl font-semibold text-red-600">Embed LMS into Hybrid Work Environment to Ensure a Successful Learning Culture in Companies</h3>
              </div>
            </a>
          </div>

          <div className="mt-10 bg-white text-gray-800 py-8 px-4 sm:py-10 sm:px-6 rounded-lg shadow-lg">
            <h2 className="text-xl sm:text-2xl font-bold text-center">Transform Organizational Learning with Shiksha!</h2>
            <form className="mt-6 flex flex-col md:flex-row">
              <input
                type="email"
                placeholder="Business Email ID"
                className="flex-1 p-3 rounded-l border border-gray-300 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-blue-700 hover:bg-blue-800 text-white py-3 px-6 rounded-r mt-4 md:mt-0 transition-colors duration-300"
              >
                Download Brochure
              </button>
            </form>
            <div className="mt-4 flex items-center justify-center">
              <input type="checkbox" id="privacyPolicy" className="mr-2" />
              <label htmlFor="privacyPolicy" className="text-sm">
                I have read Shiksha's <a href="#" className="underline text-blue-600">privacy policy</a> and agree to receive marketing communications from Shiksha.
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-5 right-5">
        <button className="bg-red-600 text-white p-3 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-110">
          <FaRegCommentDots className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default Midpage;