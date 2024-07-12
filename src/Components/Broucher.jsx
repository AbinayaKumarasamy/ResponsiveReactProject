import React from 'react';
import { FaCheckSquare } from 'react-icons/fa';

const FormSection = () => {
  return (
    <div className="bg-teal-500 bg-opacity-90 text-white py-4 px-4 md:py-6 md:px-4 flex flex-col items-center rounded-2xl">
      <h1 className="text-3xl font-bold mb-6 text-center">Transform Organizational Learning with Skill Lake!</h1>
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
        <input
          type="email"
          placeholder="Business Email ID"
          className="p-2 rounded-md text-black w-full md:w-64"
        />
        <button className="bg-blue-600 text-white p-2 rounded-md">Download Brochure</button>
      </div>
      <div className="flex items-center mt-4 md:mt-6">
        <FaCheckSquare className="text-blue-600 mr-2" />
        <span>
          I have read Skill Lake's <a href="#" className="text-blue-300 underline">privacy policy</a> and agree to receive marketing communications from Skill Lake.
        </span>
      </div>
    </div>
  );
};

export default FormSection;