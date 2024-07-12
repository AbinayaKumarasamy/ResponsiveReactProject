import React from 'react';
import images from '../assets/desk.jpeg';
import image from '../assets/card1.jpeg';
import { useEffect } from 'react';
const resources = [
  {
    title: "Developing Leadership Skills: L&D for Managers and Executives",
    image: image,
    description: "Learn the key leadership skills necessary for managers and executives in today's fast-paced environment."
  },
  {
    title: "A Complete Guide on mLearning",
    image: images,
    description: "An in-depth guide on mobile learning and its benefits in modern education."
  },
  {
    title: "Thriving During Economic Downturns: Leveraging a Modern LMS for Impactful Learning",
    image: image,
    description: "Discover how a modern LMS can help businesses thrive during economic downturns."
  },
  {
    title: "Empowering IT business leaders to build and retain a competent workforce",
    image: images,
    description: "Strategies for IT business leaders to develop and retain a skilled workforce."
  },
  {
    title: "Embed LMS into Hybrid Work Environments to Ensure a Successful Learning Culture in Companies",
    image: image,
    description: "Integrating LMS into hybrid work environments to foster a successful learning culture."
  },
  {
    title: "How can microlearning power training programs & improve engagement in an organization?",
    image: images,
    description: "The power of microlearning in enhancing training programs and employee engagement."
  },
  {
    title: "How to choose the perfect LMS for your business?",
    image: image,
    description: "A comprehensive guide to selecting the right LMS for your business needs."
  },
  {
    title: "A Modern Learning Management System for a Smarter Workforce",
    image: images,
    description: "Utilizing modern LMS solutions to create a smarter and more efficient workforce."
  },
  {
    title: "Skill Lake Learning & Development Platform for the IT Industry",
    image: image,
    description: "An overview of the Skill Lake platform designed specifically for the IT industry."
  },
];

const ResourceHub = () => {
  useEffect (() => {
    window.scrollTo(0,0);
    },[]);
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-cover bg-center h-64 flex items-center justify-center" style={{ backgroundImage: `url(${images})` }}>
        <h1 className="text-4xl text-white font-bold">Resource Hub</h1>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center mb-8 flex-wrap">
          <button className="px-4 py-2 bg-green-500 text-white rounded mx-2 mb-2">All</button>
          <button className="px-4 py-2 bg-white text-green-500 border border-green-500 rounded mx-2 mb-2">eBooks</button>
          <button className="px-4 py-2 bg-white text-green-500 border border-green-500 rounded mx-2 mb-2">White Papers</button>
          <button className="px-4 py-2 bg-white text-green-500 border border-green-500 rounded mx-2 mb-2">Brochures</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <div key={index} className="relative bg-white rounded-lg overflow-hidden shadow-lg group p-4">
              <img src={resource.image} alt={resource.title} className="w-full h-48 object-cover group-hover:blur-sm" />
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-blue-950 bg-opacity-90 p-4">
                <h2 className="text-xl font-bold text-white mb-2 text-center">{resource.title}</h2>
                <button className="px-4 py-2 bg-green-500 text-white rounded">View More</button>
              </div>
              <div className="mt-4">
                <p className="text-gray-700">{resource.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResourceHub;