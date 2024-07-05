// src/WhatsNew.jsx
import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import desk from '../assets/desk.jpeg'; 

const WhatsNew = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className=''>
      <div className="relative bg-cover bg-center h-64" style={{ backgroundImage: `url(${desk})` }}>
        <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 md:px-8">
          <h1 className="text-3xl md:text-4xl font-bold">What's New</h1>
          <p className="mt-4 text-lg md:text-xl">Evolve, improve, repeat. Check out the latest in features, updates, and more.</p>
        </div>
      </div>

      <div className="p-4 md:p-8">
        <div className="space-y-4">
          <div>
            <button
              onClick={() => toggleSection(1)}
              className=" w-full flex justify-between items-center text-left px-4 py-2 bg-gray-100 border-b border-gray-300">
              What's new in Skill Lake v3.7
              {openSection === 1 ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {openSection === 1 && (
              <div className="p-4 bg-white border border-gray-300">
                <h2 className="text-xl font-bold">Web app:</h2>
                <div className="flex flex-col md:flex-row items-start mt-4">
                  <img src="path_to_image" alt="Illustration" className="w-full md:w-1/4 mr-4 mb-4 md:mb-0" />
                  <div className="w-full md:w-3/4">
                    <h3 className="text-lg font-bold mb-2">Learning path:</h3>
                    <p>➔ Ability for content managers/ administrators to create and manage learning paths which can have courses or activities in it.</p>
                    <p>➔ Ability for content managers/ administrators to publish learning paths to the learning library so that learners can self enroll and learn if they wish to. Mentors can also find the appropriate learning paths for their learners and assign it to them.</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div>
            <button
              onClick={() => toggleSection(2)}
              className="w-full flex justify-between items-center text-left px-4 py-2 bg-gray-100 border-b border-gray-300"
            >
              What's new in Skill Lake v3.6
              {openSection === 2 ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {openSection === 2 && (
              <div className="p-4 bg-white border border-gray-300">
                {/* Content for v3.6 */}
              </div>
            )}
          </div>

          <div>
            <button
              onClick={() => toggleSection(3)}
              className="w-full flex justify-between items-center text-left px-4 py-2 bg-gray-100 border-b border-gray-300"
            >
              What's new in Skill Lake v3.5
              {openSection === 3 ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {openSection === 3 && (
              <div className="p-4 bg-white border border-gray-300">
                {/* Content for v3.5 */}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsNew;
