import React, { useState } from 'react';
import { FaBrain, FaChartLine, FaChevronLeft, FaChevronRight, FaUsers } from 'react-icons/fa';

const FeaturesCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      icon: FaBrain,
      title: "AI-powered Course Recommendations",
      description: "Our AI engine curates the most relevant courses for users, significantly improving discoverability and creating more effective learning pathways."
    },
    {
      icon: FaChartLine,
      title: "Minimal Learning Curve",
      description: "Getting started on Skill Lake is a breeze! Admins and course developers require minimal training to use it, while learners can easily navigate the platform thanks to its clean interface."
    },
    {
      icon: FaUsers,
      title: "Active Learner Engagement",
      description: "We focus on making learning highly engaging through creative content formats, personalized course materials, and social learning aspects, vastly improving knowledge retention."
    },
    {
      icon: FaBrain,
      title: "New Card Title 1",
      description: "New card content here."
    },
    {
      icon: FaChartLine,
      title: "New Card Title 2",
      description: "New card content here."
    },
    {
      icon: FaUsers,
      title: "New Card Title 3",
      description: "New card content here."
    }
  ];

  const totalSlides = data.length;

  const nextSlide = () => {
    setCurrentSlide(current => (current === totalSlides - 1 ? 0 : current + 1));
  };

  const prevSlide = () => {
    setCurrentSlide(current => (current === 0 ? totalSlides - 1 : current - 1));
  };

  const visibleSlides = [
    data[currentSlide % totalSlides],
    data[(currentSlide + 1) % totalSlides],
    data[(currentSlide + 2) % totalSlides],
  ];

  return (
    <div className="container mx-auto py-12 px-4 relative">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Beyond Learning Management</h1>
        <p className="text-lg text-green-500 mt-2">What sets Skill Lake AI LMS apart</p>
      </div>

      <div className="flex overflow-x-hidden relative">
        {visibleSlides.map((item, index) => (
          <div key={index} className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 p-4 relative">
            <div className="bg-white rounded-lg shadow-lg h-full p-6 flex flex-col justify-between">
              <div className="flex items-center mb-4">
                <div className="bg-green-500 text-white rounded-full p-3">
                  {React.createElement(item.icon, { className: "w-8 h-8" })}
                </div>
                <div className="text-gray-400 ml-4">{index + 1}</div>
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
        {visibleSlides.length < 3 && (
          Array.from({ length: 3 - visibleSlides.length }).map((_, index) => (
            <div key={`empty-${index}`} className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 p-4"></div>
          ))
        )}
      </div>
      <div className="flex justify-center mt-4">
        {data.map((_, index) => (
          <span
            key={index}
            className={`inline-block w-3 h-3 mx-1 rounded-full cursor-pointer ${index >= currentSlide && index < currentSlide + 3 ? 'bg-green-500' : 'bg-gray-300'}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
      {/* Arrows for all screens */}
      <button
        className="absolute left-2 sm:left-4 top-[22rem] md:top-[22rem] lg:top-[20rem]  transform -translate-y-1/2 bg-white text-gray-500 rounded-full shadow-md p-3 z-10"
        onClick={prevSlide}
      >
        <FaChevronLeft />
      </button>
      <button
        className="absolute right-2 sm:right-4 top-[22rem] md:top-[22rem] lg:top-[20rem]  transform -translate-y-1/2 bg-white text-gray-500 rounded-full shadow-md p-3 z-10"
        onClick={nextSlide}
      >
        <FaChevronRight />
      </button>
    </div>
  );
}

export default FeaturesCarousel;