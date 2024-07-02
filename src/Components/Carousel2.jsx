import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { default as image1, default as image3 } from '../assets/image.jpeg';
import { default as image2, default as image4 } from '../assets/images.jpeg';

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
    image: image1,
  },
  {
    image: image2,
  },
  {
    image: image3,
  },
  {
    image: image4,
  }
];

const CustomCarousel = ({ deviceType }) => {
  return (
    <div className="bg-gray-200 p-4 md:p-10"> {/* Applied grey background and responsive padding */}
      <div className="relative w-full max-w-full mx-auto mt-10 flex flex-col md:flex-row items-center"> {/* Modified to use flex with responsive adjustments */}
        <div className="w-full md:w-1/3 p-4 flex flex-col justify-center items-center text-center md:text-left"> {/* Fixed text on the left with responsive adjustments */}
          <div className="text-black text-xl md:text-3xl font-bold">Enhancing Learning & Development for Every Scenario</div>
          <button className="mt-4 px-4 py-2 md:px-6 md:py-2 bg-blue-500 text-white rounded-lg shadow-lg">See All Use Cases</button> {/* Responsive button */}
        </div>
        <div className="w-full md:w-2/3 mt-4 md:mt-0">
          <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true} // Always enable autoplay
            autoPlaySpeed={2000} // Set the speed (in milliseconds) for autoplay
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
              <div key={index} className="p-2 md:p-4">
                <div className="h-full w-full bg-white p-4 md:p-6 rounded-lg shadow-lg text-center flex flex-col justify-center items-center mb-6">
                  <img src={slide.image} alt={`Slide ${index}`} className="rounded-lg" style={{ maxWidth: '100%', maxHeight: '100%' }} />
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