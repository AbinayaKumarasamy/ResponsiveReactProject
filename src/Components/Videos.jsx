import React from 'react';
import pricepage from '../assets/pricepage.jpeg';
import top from '../assets/top.jpeg'; 
const Videos = () => {
  return (
    <div className="p-12">
      <div 
        className="h-64 bg-center bg-cover"
        style={{ 
          backgroundImage: `url(${top})`,
          marginTop: '-12px', 
          marginLeft: '-12px',
          marginRight: '-12px', 
        }}/>
      <div className="p-4 bg-white dark:bg-gray-800 mt-8">
        <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-between">
          <div className="p-3 text-center">
            <p className="font-bold text-2xl sm:text-3xl md:text-5xl text-gray-900 dark:text-white">
            Watch Skill Lake!
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <div className="bg-white border border-gray-200 rounded-md shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="p-3">
            <h5 className="mb-2 text-base sm:text-lg tracking-tight text-gray-900 dark:text-white text-center">
              Ensure Continuous Improvement with Learning Journals Improvement
            </h5>
          </div>
          <img className="w-full h-48 object-cover" src={pricepage} alt="Technology acquisitions 2021" />
          <div className="p-5" />
        </div>
        <div className="bg-white border border-gray-200 rounded-md shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="p-3">
            <h5 className="mb-2 text-base sm:text-lg tracking-tight text-gray-900 dark:text-white text-center">
              Captivate Gen Z Learners with Inbuilt Course Creation Tools
            </h5>
          </div>
          <img className="w-full h-48 object-cover" src={pricepage} alt="Technology acquisitions 2021" />
          <div className="p-5" />
        </div>
        <div className="bg-white border border-gray-200 rounded-md shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="p-3">
            <h5 className="mb-2 text-base sm:text-lg tracking-tight text-gray-900 dark:text-white text-center">
              Transform Learning with Skill Lake: The Ultimate AI LMS System
            </h5>
          </div>
          <img className="w-full h-48 object-cover" src={pricepage} alt="Technology acquisitions 2021" />
          <div className="p-5" />
        </div>
      </div>
    </div>
  );
};

export default Videos;