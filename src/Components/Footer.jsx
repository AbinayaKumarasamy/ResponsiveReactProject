import React from 'react';
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div className="bg-[#071532] text-white min-h-full flex flex-col justify-between">
      <div className="px-8 sm:px-12 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="border-r border-white border-opacity-10 pr-8">
            <h2 className="text-xl font-bold mb-4">SOLUTIONS</h2>
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

          <div className="border-r border-white border-opacity-10 sm:pr-8">
            <h2 className="text-xl font-bold mb-4 sm:text-left text-center">INDUSTRY</h2>
            <div className="flex flex-col sm:flex-row gap-8">
              <div className="space-y-5">
                <ul className="space-y-5">
                  <li><a href="#" className="hover:underline">Retail</a></li>
                  <li><a href="#" className="hover:underline">Manufacturing</a></li>
                  <li><a href="#" className="hover:underline">Healthcare</a></li>
                  <li><a href="#" className="hover:underline">Insurance</a></li>
                  <li><a href="#" className="hover:underline">Franchise</a></li>
                  <li><a href="#" className="hover:underline">Aviation</a></li>
                </ul>
              </div>
              <div>
                <ul className="space-y-5">
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

          <div className="border-r border-white border-opacity-10 pr-8">
            <h2 className="text-xl font-bold mb-4">RESOURCES</h2>
            <ul className="space-y-2">
              <li><Link to="/Features" className="hover:underline">Features</Link></li>
              <li><Link to="/Casestudy" className="hover:underline">Case Studies</Link></li>
              <li><Link to="/Blog" className="hover:underline">Blogs</Link></li>
              <li><Link to="/Help" className="hover:underline">Help</Link></li>
              <li><Link to="/Usecase" className="hover:underline">Use Cases</Link></li>
              <li><Link to="/Videos" className="hover:underline">Videos</Link></li>
              <li><Link to="/Downloads" className="hover:underline">Downloads</Link></li>
              <li><Link to="/ReleaseNotes" className="hover:underline">Release Notes</Link></li>
            </ul>
          </div>

          <div className="pr-8">
            <h2 className="text-xl font-bold mb-4">COMPANY</h2>
            <ul className="space-y-6">
              <li><Link to="/Aboutus" className="hover:underline">About Us</Link></li>
              <li><Link to="/Partners" className="hover:underline">Partners</Link></li>
              <li><Link to="/Contactus" className="hover:underline">Contact Us</Link></li>
              <li><Link to="/Termsofuse" className="hover:underline">Terms of Use</Link></li>
              <li><Link to="/Privacypolicy" className="hover:underline">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <footer className="p-4 bg-[#000001] text-white flex items-center justify-between px-8">
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
