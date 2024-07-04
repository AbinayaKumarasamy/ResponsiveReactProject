import React from 'react';
import fivebrother from '../assets/fivebrothers.jpeg';

const Fivebrothers = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-teal-400 p-10">
      <div className="flex flex-col sm:flex-row justify-center items-center bg-white p-12 rounded-lg shadow-lg max-w-7xl w-full min-h-[500px]">
        <div className="flex flex-col items-center space-y-4 mb-6 sm:mb-0 sm:w-1/2">
          <div className="w-48 h-48 rounded-full overflow-hidden flex items-center justify-center">
            <img src={fivebrother} alt="People" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="flex flex-col items-center sm:w-1/2">
          <div className="text-center mb-4"> {/* Adjusted margin */}
            <div className="text-xl md:text-2xl font-bold text-blue-700">Five Brothers</div>
            <div className="text-xs text-gray-500">Asset Management Solutions</div>
          </div>
          <div className="flex flex-col items-center w-full mb-4 space-y-4">
            <div className="flex items-center space-x-4"> {/* Adjusted spacing */}
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 10-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <div className="text-lg md:text-xl font-semibold text-green-600">95% Training Coverage</div>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 10-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <div className="text-lg md:text-xl font-semibold text-green-600">66% Reduction in Compliance Costs</div>
              </div>
            </div>
          </div>
          <div className="text-gray-700 max-w-lg text-center sm:text-left text-lg leading-relaxed mb-6">
            Skill Lake transformed Five Brothers' training by digitizing materials, simplifying compliance training delivery, and enhancing learning through its versatile e-learning mobile app.
          </div>
          <div className="flex justify-center w-full">
            <a href="#" className="inline-block px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors duration-200">
              Read the Case Study
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fivebrothers;