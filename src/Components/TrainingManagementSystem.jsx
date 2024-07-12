import React, { useState } from 'react';
import backgroundImage from '../assets/image.jpeg'; 
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import exampleImage from '../assets/image.jpeg';
import image from '../assets/emptraining.jpg'
import icon from '../assets/usecase.png'
const faqs = [
  {
    question: 'What is the return policy?',
    answer: 'Our return policy lasts 30 days. If 30 days have gone by since your purchase, unfortunately, we can’t offer you a refund or exchange.'
  },
  {
    question: 'How do I track my order?',
    answer: 'You can track your order using the tracking number provided in your confirmation email.'
  },
  {
    question: 'Can I purchase items in bulk?',
    answer: 'Yes, we offer bulk purchase discounts. Please contact our sales team for more information.'
  },
];


const testimonials = [
  {
    text: "Skill Lake is so easy to use. The interface is plain and anyone can learn it in a snap. Creating courses and assigning them to users was easy. Gamify elements like virtual rewards and certificate badges did actually motivate our employees to complete their training faster. Mobile accessibility is also an added bonus. We’re able to deploy Skill Lake real quick and customize it for our company processes without hassles.",
    author: "Five Brothers",
    position: "Asset Management Solutions"
  },
  {
    text: "Skill Lake has transformed our training programs. The intuitive design and ease of use made it a breeze to implement. Our employees are more engaged with the gamified learning experience, and we’ve seen a significant improvement in training completion rates.",
    author: "Tech Innovators",
    position: "Software Solutions"
  }
];

const  TrainingManagementSystem = () => {
  useEffect (() => {
    window.scrollTo(0,0);
    },[]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [openFAQIndex, setOpenFAQIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  return (
    <div>
    <div className="bg-gray-100 p-8">
      <div
        className="relative bg-cover bg-center text-white py-24"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="max-w-7xl mx-auto text-center bg-black bg-opacity-50 p-8 rounded-lg">
          <h1 className="text-4xl font-bold mb-4">Training Management System</h1>
          <p className="text-lg mb-6">Take control of your training business using Skill Lake</p>
          <p className="text-lg mb-6">
            Course Management | CRM | Administration | Curriculum Planning | Course Payments
          </p>
          <div className="flex justify-center">
            <button className="bg-teal-500 text-white px-6 py-3 rounded-lg mr-4">SCHEDULE A DEMO</button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto text-center mt-8">
        <h2 className="text-3xl font-bold mb-4">
          Corporate training solutions that make your workforce future-ready by closing skill gaps
        </h2>
      </div>
      <div className="max-w-7xl mx-auto mt-8 flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 p-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur iusto veritatis tempora eum expedita et modi suscipit, eos perspiciatis architecto nostrum repellat fugiat, quo reiciendis molestiae ab deleniti facere, ratione voluptatibus voluptatem rerum! Animi, fugiat! Distinctio nemo unde ullam commodi voluptas vel, porro quod optio nobis, quis perferendis. Quos iusto tempore, voluptate sit, saepe pariatur vitae, nulla beatae provident earum magnam? Animi ipsa praesentium magnam sint cumque voluptatem nemo! Ab tenetur eum numquam nostrum architecto voluptates, esse harum, cumque fugiat officiis cupiditate dignissimos ea quibusdam quisquam.
          </p>
        </div>
        <div className="w-full lg:w-1/2 p-4">
          <img src={exampleImage} alt="example" className="rounded-lg"/>
        </div>
      </div>
    </div>
    
    <div className="bg-white text-gray-900 py-16">
      <div className="max-w-7xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-4">Make Your Corporate Training LMS More Effective and Desirable with Skill Lake</h2>
        <div className="flex justify-center mb-12">
          <img src={image} alt="Assignment Dashboard" className="w-full max-w-lg"/>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-8 rounded-lg text-center">
            <img src={icon} alt="Gamified Learning" className="w-16 h-16 mx-auto mb-4"/>
            <h3 className="text-2xl font-bold mb-2">Gamified Learning</h3>
            <p>
              Motivate your employees to quickly achieve their learning goals and pursue new learning objectives by encouraging them through virtual rewards, badges, and points.
            </p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg text-center">
            <img src={icon} alt="Learning Modes" className="w-16 h-16 mx-auto mb-4"/>
            <h3 className="text-2xl font-bold mb-2">Learning Modes</h3>
            <p>
              Multiple modes of learning - instructor-led or self-paced learning, or hybrid mode to enable learning at the user's convenience.
            </p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg text-center">
            <img src={image} alt="Competency Mapping" className="w-16 h-16 mx-auto mb-4"/>
            <h3 className="text-2xl font-bold mb-2">Competency Mapping</h3>
            <p>
              Measure your workforce’s competencies, understand what skills they lack, and personalize your corporate training solutions to upskill your team. This equips your workforce to meet the rising business needs.
            </p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg text-center">
            <img src={icon} alt="Update Legacy Training Content" className="w-16 h-16 mx-auto mb-4"/>
            <h3 className="text-2xl font-bold mb-2">Update Legacy Training Content</h3>
            <p>
              Give your traditional courses a fresh makeover that exactly meets your organizational strategy and employee aspirations. Present your course content in a modern, engaging format.
            </p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg text-center">
            <img src={icon} alt="Update Legacy Training Content" className="w-16 h-16 mx-auto mb-4"/>
            <h3 className="text-2xl font-bold mb-2">Update Legacy Training Content</h3>
            <p>
              Give your traditional courses a fresh makeover that exactly meets your organizational strategy and employee aspirations. Present your course content in a modern, engaging format.
            </p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg text-center">
            <img src={icon} alt="Update Legacy Training Content" className="w-16 h-16 mx-auto mb-4"/>
            <h3 className="text-2xl font-bold mb-2">Update Legacy Training Content</h3>
            <p>
              Give your traditional courses a fresh makeover that exactly meets your organizational strategy and employee aspirations. Present your course content in a modern, engaging format.
            </p>
          </div>
          
        </div>
      </div>
    </div>

    




<div className="p-4 sm:p-8 md:p-16 lg:p-20">
  <div className="max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-3xl mx-auto py-8 px-4 sm:py-12 sm:px-8 md:py-16 md:px-20 bg-blue-800 text-center text-white rounded-lg shadow-lg">
    <div className="relative">
      <div className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8 md:mb-10">
        Here is what our customers say
      </div>
      <div className="text-lg sm:text-xl md:text-2xl mb-4">{testimonials[currentIndex].text}</div>
      <div className="font-bold mt-4 sm:mt-6">{testimonials[currentIndex].author}</div>
      <div>{testimonials[currentIndex].position}</div>
      <div className="flex justify-center mt-6 sm:mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 sm:h-3 sm:w-3 md:h-4 md:w-4 mx-1 rounded-full ${
              currentIndex === index ? 'bg-green-400' : 'bg-gray-400'
            } cursor-pointer`}
          ></button>
        ))}
      </div>
    </div>
  </div>
</div>



<div className="relative w-full h-64 sm:h-80 md:h-96 lg:px-[10rem] xl:h-[32rem] bg-cover bg-center" style={{ backgroundImage: `url('/path-to-your-image.jpg')` }}>
  <div className="absolute inset-0 bg-black opacity-50"></div>
  <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-center justify-center lg:justify-between h-full px-6 sm:px-10 lg:px-20 text-white">
    <div className="text-center lg:text-left max-w-lg">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Are you Ready?</h1>
      <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl">Maximize your training efficiency, and grow your business with our Training Management System</p>
    </div>
    <button className="mt-6 lg:mt-0 lg:ml-6 px-4 sm:px-5 py-2 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded">SCHEDULE A DEMO</button>
  </div>
</div>


    <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="bg-white p-6 rounded-lg shadow-md mb-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(0)}
            >
              <h3 className="text-xl font-semibold">What is the return policy?</h3>
              {openFAQIndex === 0 ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {openFAQIndex === 0 && <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, hic!</p>}
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md mb-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(1)}
            >
              <h3 className="text-xl font-semibold">How do I track my order?</h3>
              {openFAQIndex === 1 ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {openFAQIndex === 1 && <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, hic!</p>}
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md mb-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(2)}
            >
              <h3 className="text-xl font-semibold">Can I purchase items in bulk?</h3>
              {openFAQIndex === 2 ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {openFAQIndex === 2 && <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, hic!</p>}
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md mb-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(3)}
            >
              <h3 className="text-xl font-semibold">What payment methods are accepted?</h3>
              {openFAQIndex === 3 ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {openFAQIndex === 3 && <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, hic!</p>}
          </div>
        </div>
      </div>
    
    
    </div>
  );
}

export default TrainingManagementSystem;
