import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from '../assets/image.jpeg'; // Import the image from assets

const responsiveFeatures = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const features = [
  {
    icon: "🚀", // Replace this with the actual icon or component you intend to use
    name: "Feature 1",
    description: "Description of the feature goes here.",
  },
  {
    icon: "🎓",
    name: "Feature 2",
    description: "Description of the feature goes here.",
  },
  {
    icon: "🔧",
    name: "Feature 3",
    description: "Description of the feature goes here.",
  },
  {
    icon: "🚀", // Replace this with the actual icon or component you intend to use
    name: "Feature 4",
    description: "Description of the feature goes here.",
  },
  {
    icon: "🎓",
    name: "Feature 5",
    description: "Description of the feature goes here.",
  },
  {
    icon: "🔧",
    name: "Feature 6",
    description: "Description of the feature goes here.",
  },
  {
    icon: "🔧",
    name: "Feature 3",
    description: "Description of the feature goes here.",
  },
  {
    icon: "🚀", // Replace this with the actual icon or component you intend to use
    name: "Feature 4",
    description: "Description of the feature goes here.",
  },
  {
    icon: "🎓",
    name: "Feature 5",
    description: "Description of the feature goes here.",
  },
  {
    icon: "🔧",
    name: "Feature 6",
    description: "Description of the feature goes here.",
  },
];

const LearningExperience = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      {/* First Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center">
          {/* Text Section */}
          <div className="md:w-1/2 mb-8 md:mb-0 md:mr-8 order-2 md:order-1">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              A Modern LMS for a Smarter Workforce
            </h1>
            <h3 className="text-lg text-gray-600 mb-6">
              Deliver a simplified, personalized, and engaging corporate learning experience.
            </h3>
            <div className="flex gap-4">
              <button className="bg-green-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-green-600 transition duration-200">
                SCHEDULE A DEMO
              </button>
              <button className="bg-white text-green-500 border border-green-500 px-6 py-3 rounded-md shadow-md hover:bg-green-500 hover:text-white transition duration-200">
                WATCH VIDEO
              </button>
            </div>
          </div>
          {/* Image Section */}
          <div className="md:w-1/2 order-1 md:order-2 mb-8 md:mb-0">
            <img src={Image} alt="LMS Illustration" className="w-full h-auto object-cover" />
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="py-12 space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
  {/* First Card */}
  <div className="bg-blue-600 text-white p-4 md:p-6 rounded-lg shadow-lg">
    <h2 className="text-2xl md:text-3xl font-bold">Craft Compelling Learning Experiences</h2>
    <p className="mt-2">
      Disorganized and uninspiring learning content makes it difficult for learners to stay engaged and understand the material, leading to low consumption and poor learning outcomes.
    </p>
  </div>
  {/* Second Card */}
  <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg flex flex-col">
    <div>
      <h3 className="text-lg md:text-xl font-bold">Feedback & Mentoring</h3>
      <p className="mt-2">
        Regularly check in on learners with sufficient feedback and close mentoring to ensure accountability and improve performance.
      </p>
    </div>
  </div>


</div>



        {/* Carousel Section */}
        <div className="max-w-7xl mx-auto">
          <Carousel
            responsive={responsiveFeatures}
            containerClass="carousel-container"
            itemClass="carousel-item-padding-40-px"
            showDots={false}
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-lg shadow-lg flex flex-col justify-between"
                style={{ height: '300px' }}
              >
                <div>
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold">{feature.name}</h3>
                  <p className="mt-2">{feature.description}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default LearningExperience;