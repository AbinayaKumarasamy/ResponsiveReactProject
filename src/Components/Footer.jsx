import React from 'react';
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

const App = () => {
  return (
    <div className="bg-[#071532] text-white min-h-full flex flex-col justify-between">
      
      <div className="p-4 sm:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="border-r border-white border-opacity-10 pr-4 lg:pr-0">
            <h2 className="text-3 font-bold mb-4">SOLUTIONS</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Learning Management System</a></li>
              <li><a href="#" className="hover:underline">LMS Mobile App</a></li>
              <li><a href="#" className="hover:underline">Learning & Development Platform</a></li>
              <li><a href="#" className="hover:underline">People Development Platform</a></li>
              <li><a href="#" className="hover:underline">Corporate Training Platform</a></li>
              <li><a href="#" className="hover:underline">Training Management System</a></li>
              <li><a href="#" className="hover:underline">Content Creation</a></li>
              <li><a href="#" className="hover:underline">Learning Experience Platform</a></li>
              <li><a href="#" className="hover:underline">Performance Review System</a></li>
            </ul>
          </div>

          <div className="border-r border-white border-opacity-10 pr-4 lg:pr-0">
            <h2 className="text-3 font-bold mb-4 text-center">INDUSTRY</h2>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
              <div className="space-y-2">
                <ul className="space-y-2">
                  <li><a href="#" className="hover:underline">Retail</a></li>
                  <li><a href="#" className="hover:underline">Manufacturing</a></li>
                  <li><a href="#" className="hover:underline">Healthcare</a></li>
                  <li><a href="#" className="hover:underline">Insurance</a></li>
                  <li><a href="#" className="hover:underline">Franchise</a></li>
                  <li><a href="#" className="hover:underline">Aviation</a></li>
                </ul>
              </div>
              <div className="space-y-2">
                <ul className="space-y-2">
                  <li><a href="#" className="hover:underline">Non-Profit</a></li>
                  <li><a href="#" className="hover:underline">Construction</a></li>
                  <li><a href="#" className="hover:underline">Maritime</a></li>
                  <li><a href="#" className="hover:underline">Energy</a></li>
                  <li><a href="#" className="hover:underline">Telecom</a></li>
                  <li><a href="#" className="hover:underline">Automotive</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-r border-white border-opacity-10 pr-4 lg:pr-0">
            <h2 className="text-3 font-bold mb-4">RESOURCES</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Features</a></li>
              <li><a href="#" className="hover:underline">Case Studies</a></li>
              <li><a href="#" className="hover:underline">Blogs</a></li>
              <li><a href="#" className="hover:underline">Help</a></li>
              <li><a href="#" className="hover:underline">Use Cases</a></li>
              <li><a href="#" className="hover:underline">Videos</a></li>
              <li><a href="#" className="hover:underline">Downloads</a></li>
              <li><a href="#" className="hover:underline">Release Notes</a></li>
            </ul>
          </div>

          <div className="pr-4 lg:pr-0">
            <h2 className="text-3 font-bold mb-4">COMPANY</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Partners</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
              <li><a href="#" className="hover:underline">Terms of Use</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>

     
      <footer className="p-4 bg-[#000001] text-white flex items-center justify-between">
        <div className="flex space-x-4">
          <a href="https://www.instagram.com" className="hover:text-gray-400">
            <FaInstagram size={24} />
          </a>
          <a href="https://www.facebook.com" className="hover:text-gray-400">
            <FaFacebook size={24} />
          </a>
          <a href="https://www.linkedin.com" className="hover:text-gray-400">
            <FaLinkedin size={24} />
          </a>
          <a href="https://www.twitter.com" className="hover:text-gray-400">
            <FaTwitter size={24} />
          </a>
        </div>
        <p className="text-center text-sm">&copy; 2024 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;