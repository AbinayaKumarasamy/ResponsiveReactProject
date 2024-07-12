import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import image from '../assets/images.jpeg';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


const slides = [
  {
    title: "Bring scattered content into one searchable Course Library.",
    description: "Easily access and manage your resources.",
    points: [
      "Consolidate materials",
      "Improve searchability",
      "Save time"
    ]
  },
  {
    title: "Save resources that can be referred to easily like SOPs and policies.",
    description: "Streamline your processes and save time.",
    points: [
      "Organize SOPs",
      "Quick reference",
      "Boost efficiency"
    ]
  },
  {
    title: "Categorize learning materials by topic for easy access  relevant.",
    description: "Organize your content for better learning.",
    points: [
      "Topic-based organization",
      "Ease of access",
      "Enhanced learning"
    ]
  },
  {
    title: "Enhance your team's skills with targeted learning paths.",
    description: "Provide customized learning experiences.",
    points: [
      "Targeted learning",
      "Skill enhancement",
      "Customized paths"
    ]
  }
];

const CustomLeftArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute left-10 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-lg focus:outline-none hover:bg-gray-100 transition-colors duration-200 z-10"
      aria-label="Previous Slide"
    >
      <MdArrowBack className="text-gray-800 text-lg md:text-xl" />
    </button>
  );
};

const CustomRightArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute right-10 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-lg focus:outline-none hover:bg-gray-100 transition-colors duration-200 z-10"
      aria-label="Next Slide"
    >
      <MdArrowForward className="text-gray-800 text-lg md:text-xl" />
    </button>
  );
};

const CustomCarousel = ({ deviceType }) => {
  return (
    <div className="bg-gray-100 p-4 md:p-8 lg:p-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 py-4">
          <img src={image} alt="Constant Image" className="rounded-lg shadow-lg w-full h-auto" />
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <Carousel
            swipeable={true}
            draggable={true}
            responsive={responsive}
            ssr={true}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            
            deviceType={deviceType}
            itemClass="carousel-item px-4"
            customLeftArrow={<CustomLeftArrow />}
            customRightArrow={<CustomRightArrow />}
          >
            {slides.map((slide, index) => (
              <div key={index} className="p-4">
                <div className="h-full bg-white p-4 md:p-6 rounded-lg shadow-lg text-center flex flex-col justify-center items-center" style={{ height: '350px' }}>
                  <h2 className="text-lg md:text-xl font-bold">{slide.title}</h2>
                  <p className="mt-2 md:mt-4 text-base md:text-lg">{slide.description}</p>
                  <ul className="list-none mt-4 text-left">
                    {slide.points.map((point, idx) => (
                      <li key={idx} className="flex items-center mt-2 text-base md:text-lg">
                        <FaCheckCircle className="mr-2 text-green-500" /> {point}
                      </li>
                    ))}
                  </ul>
                  <button className="mt-4 px-4 py-2 md:px-6 md:py-3 bg-green-500 text-white border border-green-500 rounded-lg shadow-lg hover:bg-green-600 transition-colors duration-200">See All Use Cases</button>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default CustomCarousel;