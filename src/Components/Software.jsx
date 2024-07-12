import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const solutionFeatures = [
  "Scale as you grow and serve more users",
  "Customizable learning paths",
  "Your LMS, your way! Include your brand logo and colors",
  "Extend training for your employees, customers, partners, & vendors"
];

const Software = () => {
  return (
    <div className="max-w-5xl mx-auto mt-8 bg-blue-700 text-white rounded-3xl px-4 sm:px-10 lg:px-20 py-8 shadow-lg flex flex-col lg:flex-row items-center">
      <div className="mb-4 lg:mb-0 lg:flex-1 text-center lg:text-left">
        <h2 className="text-2xl font-bold">What makes Skill Lake different from other</h2>
        <h2 className="text-2xl font-bold text-green-400">LMS software</h2>
      </div>
      <ul className="space-y-2 lg:space-y-4 lg:flex-1 ml-0 sm:ml-8 sm:mr-8">
        {solutionFeatures.map((feature, index) => (
          <li key={index} className="flex items-center text-sm sm:text-base lg:text-base">
            <FaArrowRight className="mr-2 text-blue-300" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Software;