import React from 'react';
import desk from '../assets/desk.jpeg';

const Card = () => {
  return (
    <div className="lg:px-[6rem]">
      <div className="p-4 bg-white ">
        <div className="flex flex-col items-center lg:flex-row justify-between">
          <div className="p-3 text-center lg:text-left">
            <p className="font-bold text-2xl sm:text-3xl md:text-5xl text-gray-900">
              Future-proof Your Digital Learning Assets
            </p>
            <p className="text-xl sm:text-2xl md:text-3xl font-medium mt-2 text-gray-800 ">
              Course Creation & Legacy Content Modernization
            </p>
          </div>
          <div className="mt-4 lg:mt-0">
            <button 
              type="button" 
              className="p-2 sm:p-3 md:p-4 text-xs sm:text-sm font-medium text-green-900 bg-white rounded-lg border-2 border-green-600 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Learn More
            </button>
          </div>
        </div>
        <div className="p-3 text-center lg:text-left">
          <p className="text-lg sm:text-xl font-medium mt-2 text-gray-800 dark:text-gray-400">
            Build courses from scratch, give old learning materials a facelift, and get expert advice for a winning learning strategy.
          </p>
        </div>
      </div>

      <div className="p-3 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="bg-white border border-gray-200 rounded-md shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-md w-full" src={desk} alt="Technology acquisitions 2021" />
          </a>
          <div className="p-5 text-center">
            <a href="#">
              <h2 className="mb-2 text-lg sm:text-xl tracking-tight text-gray-900 dark:text-white bg-green-300 rounded-lg py-1">
                AR/VR Experiences Videos
              </h2>
              <h5 className="mb-2 text-lg sm:text-xl tracking-tight text-gray-900 dark:text-white">
                Ensure ISO 27001/ISMS Awareness Across Your Organization
              </h5>
            </a>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-md shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-md w-full" src={desk} alt="Technology acquisitions 2021" />
          </a>
          <div className="p-5 text-center">
            <a href="#">
              <h2 className="mb-2 text-lg sm:text-xl tracking-tight text-gray-900 dark:text-white bg-violet-400 rounded-lg py-1">
                2D Explainer Videos
              </h2>
              <h5 className="mb-2 text-lg sm:text-xl tracking-tight text-gray-900 dark:text-white">
                Overcome Cognitive Barriers & Redefine Training With AR/VR Experiences
              </h5>
            </a>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-md shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-md w-full" src={desk} alt="Technology acquisitions 2021" />
          </a>
          <div className="p-5 text-center">
            <a href="#">
              <h2 className="mb-2 text-lg sm:text-xl tracking-tight text-gray-900 dark:text-white bg-rose-200 rounded-lg py-1">
                Mandatory Training Videos
              </h2>
              <h5 className="mb-2 text-lg sm:text-xl tracking-tight text-gray-900 dark:text-white">
                Boost Efficiency through Performance-Based Learning In Aviation
              </h5>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;