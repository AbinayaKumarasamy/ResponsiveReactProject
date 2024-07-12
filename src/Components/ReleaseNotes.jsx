import React, { useEffect, useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import desk from '../assets/desk.jpeg'; 
import image from '../assets/image.jpeg';
const WhatsNew = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };
  useEffect (() => {
    window.scrollTo(0,0);
    },[]);

  return (
    <div className="mt-[5rem]">
      <div className="relative bg-cover bg-center h-64" style={{ backgroundImage: `url(${desk})` }}>
        <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 md:px-8">
          <h1 className="text-3xl md:text-4xl font-bold">What's New</h1>
          <p className="mt-4 text-lg md:text-xl">Evolve, improve, repeat. Check out the latest in features, updates, and more.</p>
        </div>
      </div>
      <div className="px-4 md:px-[5rem] lg:px-[10rem] py-8">
        <div className="space-y-4">
          <div>
            <button
              onClick={() => toggleSection(1)}
              className="w-full flex justify-between items-center text-left px-4 py-2 bg-blue-100 border-b border-blue-300 font-bold text-black">
              What's new in Skill Lake v3.7
              {openSection === 1 ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {openSection === 1 && (
              <div className="p-4 bg-white border border-blue-300">
                <h2 className="text-xl font-bold mb-4 text-blue-700">Web app:</h2>
                <div className="flex flex-col md:flex-row items-start">
                  <img src={image} alt="Illustration" className="w-full md:w-1/4 mr-4 mb-4 md:mb-0" />
                  <div className="w-full md:w-3/4">
                    <h3 className="text-lg font-bold mb-2 text-blue-700">Content management:</h3>
                    <p className="mb-2">➔ Ability for group administrators to create and publish courses, snippets, events, learning paths and books to the groups that they are managing.</p>
                    <p className="mb-2">➔ Ability for group administrators to see the reports related to the members who belong to the groups that they are managing.</p>
                    <p className="mb-2">➔ Ability for group members to consume the learning resources made available to the group to which they belong to and their parent groups.</p>
                    <h3 className="text-lg font-bold mt-4 mb-2 text-blue-700">User deactivation:</h3>
                    <p className="mb-2">➔ Ability for administrators to deactivate a user’s account when they leave the organization, thereby removing them from all the ongoing transactions while retaining their historical information.</p>
                    <h3 className="text-lg font-bold mt-4 mb-2 text-blue-700">ILT sessions – Recording attendance:</h3>
                    <p className="mb-2">➔ Ability for administrators to print out the attendance QR code generated for each session in the instructor-led training, which can be scanned by the participants to record their attendance.</p>
                    <h3 className="text-lg font-bold mt-4 mb-2 text-blue-700">Images in snippets:</h3>
                    <p className="mb-2">➔ Ability for content managers to share images as part of the learning snippets they create.</p>
                    <p className="mb-2">➔ Ability for users to see the images shared as part of the learning snippets.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div>
            <button
              onClick={() => toggleSection(2)}
              className="w-full flex justify-between items-center text-left px-4 py-2 bg-blue-100 border-b border-blue-300 font-bold text-black">
              What's new in Skill Lake v3.9
              {openSection === 2 ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {openSection === 2 && (
              <div className="p-4 bg-white border border-blue-300">
                <h2 className="text-xl font-bold mb-4 text-blue-700">Mobile app:</h2>
                <div className="flex flex-col md:flex-row items-start">
                  <img src={image} alt="Illustration" className="w-full md:w-1/4 mr-4 mb-4 md:mb-0" />
                  <div className="w-full md:w-3/4">
                    <h3 className="text-lg font-bold mb-2 text-blue-700">Offline mode:</h3>
                    <p className="mb-2">➔ Users can now download courses for offline viewing and complete them without an internet connection.</p>
                    <h3 className="text-lg font-bold mt-4 mb-2 text-blue-700">Push notifications:</h3>
                    <p className="mb-2">➔ Receive notifications about new courses, deadlines, and updates directly on your mobile device.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div>
            <button
              onClick={() => toggleSection(3)}
              className="w-full flex justify-between items-center text-left px-4 py-2 bg-blue-100 border-b border-blue-300 font-bold text-black">
              What's new in Skill Lake v3.5
              {openSection === 3 ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {openSection === 3 && (
              <div className="p-4 bg-white border border-blue-300">
                <h2 className="text-xl font-bold mb-4 text-blue-700">Performance improvements:</h2>
                <div className="flex flex-col md:flex-row items-start">
                  <img src={image} alt="Illustration" className="w-full md:w-1/4 mr-4 mb-4 md:mb-0" />
                  <div className="w-full md:w-3/4">
                    <p className="mb-2">➔ Optimized loading times for all courses and resources.</p>
                    <p className="mb-2">➔ Enhanced user interface for a smoother experience.</p>
                    <p className="mb-2">➔ Bug fixes and security enhancements to ensure a stable and secure platform.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div>
            <button
              onClick={() => toggleSection(4)}
              className="w-full flex justify-between items-center text-left px-4 py-2 bg-blue-100 border-b border-blue-300 font-bold text-black">
              What's new in Skill Lake v3.3
              {openSection === 4 ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {openSection === 4 && (
              <div className="p-4 bg-white border border-blue-300">
                <h2 className="text-xl font-bold mb-4 text-blue-700">User experience improvements:</h2>
                <div className="flex flex-col md:flex-row items-start">
                  <img src={image} alt="Illustration" className="w-full md:w-1/4 mr-4 mb-4 md:mb-0" />
                  <div className="w-full md:w-3/4">
                    <p className="mb-2">➔ New dashboard design for easier navigation and quick access to key features.</p>
                    <p className="mb-2">➔ Enhanced course creation tools for content creators.</p>
                    <p className="mb-2">➔ Improved search functionality to quickly find relevant courses and resources.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div>
            <button
              onClick={() => toggleSection(5)}
              className="w-full flex justify-between items-center text-left px-4 py-2 bg-blue-100 border-b border-blue-300 font-bold text-black">
              What's new in Skill Lake v3.2
              {openSection === 5 ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {openSection === 5 && (
              <div className="p-4 bg-white border border-blue-300">
                <h2 className="text-xl font-bold mb-4 text-blue-700">New features:</h2>
                <div className="flex flex-col md:flex-row items-start">
                  <img src={image} alt="Illustration" className="w-full md:w-1/4 mr-4 mb-4 md:mb-0" />
                  <div className="w-full md:w-3/4">
                    <p className="mb-2">➔ Integration with third-party tools for seamless workflow.</p>
                    <p className="mb-2">➔ Ability to track learning progress and achievements with detailed reports.</p>
                    <p className="mb-2">➔ Customizable learning paths to suit individual user needs.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsNew;
