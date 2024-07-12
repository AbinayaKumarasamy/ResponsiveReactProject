import React, { useEffect, useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import exampleImage1 from '../assets/image.jpeg'; // Adjust the path if necessary
import exampleImage2 from '../assets/images.jpeg'; // Adjust the path if necessary

const ContentComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      text: 'User-friendly content authoring tools to create, publish, and manage eLearning content with ease. Easily customizable templates, real-time collaboration features, and intuitive interfaces streamline the content creation process.',
      image: exampleImage1,
    },
    {
      text: 'Extensive course library to store and retrieve self-paced and instructor-led courses. Create templates that can be used for multiple batches of learners. Access a variety of resources including interactive quizzes, multimedia lessons, and comprehensive tracking tools.',
      image: exampleImage2,
    },
    {
      text: 'Provision to host, manage, and deliver SCORM compliant course packages. Ensure compatibility and consistency across different eLearning platforms, providing a seamless experience for learners.',
      image: exampleImage1,
    },
    {
      text: 'Deliver multiple content formats within a course - videos, text, images, documents, audio clips, and more. Enhance the learning experience by incorporating diverse types of content to cater to different learning styles.',
      image: exampleImage2,
    },
    {
      text: 'Track learner progress and performance with advanced analytics and reporting tools. Gain insights into learner engagement and identify areas for improvement to ensure effective learning outcomes.',
      image: exampleImage1,
    },
    
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 2000); // Change slide every 5 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="py-16 px-4 md:px-10 lg:px-20 mx-5">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Create, manage, and <span className="text-blue-600">publish content</span> quickly
          </h2>
          <ul className="relative h-48 overflow-hidden text-gray-600">
            {slides.map((slide, index) => (
              <li
                key={index}
                className={`flex items-start space-x-3 transition-opacity duration-500 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ position: index === currentSlide ? 'relative' : 'absolute' }}
              >
                <span className="bg-blue-100 text-blue-600 p-2 rounded-full">
                  <FaCheckCircle className="w-6 h-6" />
                </span>
                <p>{slide.text}</p>
              </li>
            ))}
          </ul>
          <div className="flex space-x-2 mt-4 items-center">
            <button onClick={prevSlide} className="p-1 rounded-full hover:bg-gray-300">
              <MdKeyboardArrowLeft className="w-6 h-6 text-black" />
            </button>
            <div className="flex items-center space-x-2">
              {slides.map((_, index) => (
                <div
                  key={index}
                  className={`h-1 w-10 sm:w-20 rounded-full ${
                    index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                ></div>
              ))}
            </div>
            <button onClick={nextSlide} className="p-1 rounded-full hover:bg-gray-300">
              <MdKeyboardArrowRight className="w-6 h-6 text-black" />
            </button>
          </div>
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
          <img
            src={slides[currentSlide].image}
            alt="Example"
            className="w-full max-w-lg object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default ContentComponent;