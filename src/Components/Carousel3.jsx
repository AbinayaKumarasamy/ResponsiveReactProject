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
    title: "Categorize learning materials by topic for easy access to relevant.",
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
      className="absolute left-0 top-1/2 transform -translate-y-1/2 p-3 bg-white rounded-full shadow-lg focus:outline-none hover:bg-gray-100 transition-colors duration-200"
      aria-label="Previous Slide"
    >
      <MdArrowBack className="text-gray-800 text-2xl" />
    </button>
  );
};

const CustomRightArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute right-0 top-1/2 transform -translate-y-1/2 p-3 bg-white rounded-full shadow-lg focus:outline-none hover:bg-gray-100 transition-colors duration-200"
      aria-label="Next Slide"
    >
      <MdArrowForward className="text-gray-800 text-2xl" />
    </button>
  );
};

const CustomCarousel = ({ deviceType }) => {
  return (
    <div className="bg-gray-100 md:p-16 lg:px-[5rem]">
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
            removeArrowOnDeviceType={["tablet", "mobile"]}
            deviceType={deviceType}
            itemClass="carousel-item px-4"
            customLeftArrow={<CustomLeftArrow />}
            customRightArrow={<CustomRightArrow />}
          >
            {slides.map((slide, index) => (
              <div key={index} className="p-4">
                <div className="h-full bg-white p-6 rounded-lg shadow-lg text-center flex flex-col justify-center items-center" style={{ height: '400px' }}>
                  <h2 className="text-2xl md:text-4xl font-bold">{slide.title}</h2>
                  <p className="mt-4 text-lg md:text-xl">{slide.description}</p>
                  <ul className="list-none mt-6 text-left">
                    {slide.points.map((point, idx) => (
                      <li key={idx} className="flex items-center mt-2 text-lg md:text-xl">
                        <FaCheckCircle className="mr-2 text-green-500" /> {point}
                      </li>
                    ))}
                  </ul>
                  <button className="mt-6 px-6 py-3 bg-green-500 text-white border border-green-500 rounded-lg shadow-lg hover:bg-green-600 transition-colors duration-200">See All Use Cases</button>
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