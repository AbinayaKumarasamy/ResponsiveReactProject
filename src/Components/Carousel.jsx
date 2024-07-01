import React from 'react';
import { FaBrain, FaChartLine, FaHandsHelping } from 'react-icons/fa';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const slides = [
  {
    icon: <FaChartLine className="w-12 h-12 mx-auto text-green-600" />,
    description: "Getting started on Skill Lake is a breeze! Admins and course developers require minimal training to use it, while learners can easily navigate the platform thanks to its clean interface. The platform supports a wide range of multi for tracking progress."
  },
  {
    icon: <FaBrain className="w-12 h-12 mx-auto text-green-600" />,
    description: "Our AI engine curates the most relevant courses for users, significantly improving discoverability and creating more effective learning pathways. Personalized recommendations help learners to stay engaged and make the most of their learning experience."
  },
  {
    icon: <FaHandsHelping className="w-12 h-12 mx-auto text-green-600" />,
    description: "We focus on making learning highly engaging through creative content formats, personalized course materials, and social learning aspects, vastly improving knowledge retention. Collaborative tools and interactive features enhance the learning process."
  },
  {
    icon: <FaBrain className="w-12 h-12 mx-auto text-green-600" />,
    description: "Learners can customize their own learning paths, ensuring a more personalized and effective learning experience. With flexible scheduling and self-paced learning options, users can balance their studies with other commitments  the learning process."
  }
];

const CustomCarousel = ({ deviceType }) => {
  return (
    <div className="relative w-full max-w-full mx-auto mt-10">
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} 
        infinite={true}
        autoPlay={true} 
        autoPlaySpeed={2000} 
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {slides.map((slide, index) => (
          <div key={index} className="p-4">
            <div className="h-full w-full bg-white p-6 rounded-lg shadow-lg text-center flex flex-col justify-center items-center mb-6"> {/* Added mb-6 for margin bottom */}
              {slide.icon}
              <div className="mt-2 flex-grow flex items-center">
                <p className="text-gray-600">{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CustomCarousel;