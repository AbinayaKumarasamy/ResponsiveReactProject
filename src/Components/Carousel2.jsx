import React, { useRef, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import image1 from '../assets/images.jpeg';
import image2 from '../assets/images.jpeg';
import image3 from '../assets/images.jpeg';
import image4 from '../assets/images.jpeg';

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
    label: "Employee Training",
  },
  {
    image: image2,
    label: "Customer Training",
  },
  {
    image: image3,
    label: "Partner Training",
  },
  {
    image: image4,
    label: "Another Training",
  }
];

const CustomCarousel = ({ deviceType }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.previous();
    }
  };

  return (
    <div className="bg-gray-200 lg:px-[8rem] md:p-14">
      <div className="relative w-full max-w-full mx-auto mt-10 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/3 p-4 flex flex-col justify-center items-center text-center md:text-left">
          <div className="text-black text-xl md:text-3xl font-bold">Enhancing Learning & Development for Every Scenario</div>
          <button className="mt-4 px-4 py-2 md:px-6 md:py-2 bg-green-400 text-white border border-green-400 rounded-lg shadow-lg hover:bg-green-500 transition-colors duration-300 ease-in-out">See All Use Cases</button>
        </div>
        <div className="w-full md:w-2/3 mt-4 md:mt-0 relative p-5">
          <Carousel
            ref={carouselRef}
            swipeable={true}
            draggable={true}
            showDots={true}
            arrows={false}
            responsive={responsive}
            ssr={true}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            deviceType={deviceType}
            dotListClass="custom-dot-list-style mt-20" // Add margin to the dot list
            itemClass="carousel-item-padding-40-px"
            renderDotsOutside={true}
            beforeChange={(nextSlide) => setCurrentSlide(nextSlide)}
          >
            {slides.map((slide, index) => (
              <div key={index} className="p-4">
                <div className="h-full w-full bg-white p-6 rounded-lg shadow-lg text-center flex flex-col justify-center items-center">
                  <img src={slide.image} alt={`Slide ${index}`} className="rounded-lg mb-4" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                  <div className="text-black text-lg font-semibold">{slide.label}</div>
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