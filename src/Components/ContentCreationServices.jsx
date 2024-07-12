import React, { useState } from 'react';
import backgroundImage from '../assets/image.jpeg'; 
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import exampleImage from '../assets/image.jpeg';
import image from '../assets/emptraining.jpg'
import icon from '../assets/usecase.png'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useEffect } from 'react';
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

const PeopleDevelpmentPlatform = () => {
  useEffect (() => {
    window.scrollTo(0,0);
    },[]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [openFAQIndex, setOpenFAQIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      icon: "ISO 9001:2015",
      label: "Sample Video",
      category: "Mandatory Training Videos",
      title: "Ensure ISO 9001/ISMS Awareness Across Your Organization"
    },
    {
      icon: "Risk Based Testing",
      label: "Sample Video",
      category: "2D Explainer Videos",
      title: "Understand Risk-Based Testing: A beginner's guide to QA Testing"
    },
    {
      icon: "Ownership & Accountability",
      label: "Sample Video",
      category: "2D Explainer Videos",
      title: "Make Ownership & Accountability a Core Part of Your Workplace"
    },
    {
      icon: "InfinCE Overview",
      label: "Sample Video",
      category: "Application Explainer Videos",
      title: "A Comprehensive Walkthrough of the Modern Digital Workplace – InfinCE"
    }
  ];

  const totalSlides = data.length;

  const nextSlide = () => {
    setCurrentSlide((current) => (current + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((current) => (current - 1 + totalSlides) % totalSlides);
  };

  const visibleSlides = [
    data[currentSlide % totalSlides],
    data[(currentSlide + 1) % totalSlides],
    data[(currentSlide + 2) % totalSlides],
  ];

  return (
    <div>
    
    <div className="bg-gray-100 p-8">
      <div
        className="relative bg-cover bg-center text-white py-24"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="max-w-7xl mx-auto text-center bg-black bg-opacity-50 p-8 rounded-lg">
          <h1 className="text-4xl font-bold mb-4">Content Creation Services To Enhance Your Training Experience</h1>
          <p className="text-lg mb-6">
            eLearning content creation and course modernization services to boost the effectiveness of your training programs
          </p>
          <p className="text-lg mb-6">
            Content Creation Services | Content Modernization | Learning Experience Platform | Consulting Services
          </p>
          <div className="flex justify-center">
            <button className="bg-teal-500 text-white px-6 py-3 rounded-lg mr-4">CONTACT US</button>
            <button className="bg-transparent text-white border border-white px-6 py-3 rounded-lg">WATCH VIDEO</button>
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


    

    <div className="bg-blue-100 py-12 px-6">
  <h2 className="text-3xl font-bold text-center mb-4">
    Solving a problem in corporate training is as important as designing a new course
  </h2>
  <p className="text-center mb-12">
    The most common issues in corporate training management can hold back your training return on investment (ROI). A fair understanding of the challenges will help you solve them.
  </p>
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
    <div className="bg-transparent p-6 text-center">
      <div className="mb-4">
        <img src={icon} alt="Inadequate Assessment Techniques" className="mx-auto w-16 h-16" />
      </div>
      <h3 className="text-xl font-bold mb-2">Inadequate Assessment Techniques</h3>
      <p>
        Legacy training management systems lack the ability to effectively measure employee understanding and retention of the course materials. Poorly defined performance tracking metrics restrict on-the-job application of the knowledge gained and reduces your training ROI.
      </p>
    </div>
    <div className="bg-transparent p-6 text-center">
      <div className="mb-4">
        <img src={icon} alt="Limited Scalability" className="mx-auto w-16 h-16" />
      </div>
      <h3 className="text-xl font-bold mb-2">Limited Scalability</h3>
      <p>
        Traditional corporate training solutions cannot be scaled to accommodate the rising learning requirements of a geographically dispersed workforce. Nor do they adapt easily to the training needs of your company’s different departments, processes, or new workplace requirements.
      </p>
    </div>
    <div className="bg-transparent p-6 text-center">
      <div className="mb-4">
        <img src={icon} alt="Obsolete Technology" className="mx-auto w-16 h-16" />
      </div>
      <h3 className="text-xl font-bold mb-2">Obsolete Technology</h3>
      <p>
        Outdated technology, such as the lack of mobile compatibility and cloud support, poor user interface, bugs, and security or compliance flaws can hinder your corporate training efforts. The underlying technology stack of your corporate training system should offer the flexibility to add, edit, or update course materials on the fly.
      </p>
    </div>
    <div className="bg-transparent p-6 text-center">
      <div className="mb-4">
        <img src={icon} alt="Learning Not Tailored to Each Individual" className="mx-auto w-16 h-16" />
      </div>
      <h3 className="text-xl font-bold mb-2">Learning Not Tailored to Each Individual</h3>
      <p>
        Every individual has some shortcomings and training and development helps employees iron them out. It is important for a company to break down the training and development needs to target relevant individuals. Conventional LMS for corporate training may not be tailored to the specific needs or skill levels of individual employees and lack guidance from experts.
      </p>
    </div>
    <div className="bg-transparent p-6 text-center">
      <div className="mb-4">
        <img src={icon} alt="Inadequate Assessment Techniques" className="mx-auto w-16 h-16" />
      </div>
      <h3 className="text-xl font-bold mb-2">Inadequate Assessment Techniques</h3>
      <p>
        Legacy training management systems lack the ability to effectively measure employee understanding and retention of the course materials. Poorly defined performance tracking metrics restrict on-the-job application of the knowledge gained and reduces your training ROI.
      </p>
    </div>
    <div className="bg-transparent p-6 text-center">
      <div className="mb-4">
        <img src={icon} alt="Limited Scalability" className="mx-auto w-16 h-16" />
      </div>
      <h3 className="text-xl font-bold mb-2">Limited Scalability</h3>
      <p>
        Traditional corporate training solutions cannot be scaled to accommodate the rising learning requirements of a geographically dispersed workforce. Nor do they adapt easily to the training needs of your company’s different departments, processes, or new workplace requirements.
      </p>
    </div>
  </div>
</div>

<div className="bg-blue-900 text-white py-16">
      <div className="max-w-7xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-4">What makes Skill Lake a Modern LMS for corporate training platform</h2>
        <p className="text-lg mb-12">
          Skill Lake corporate training LMS allows you to design and deliver skill development programs aligned to your business goals. You can track your employees’ learning progress, assess knowledge retained, and measure training results, all through a single interface.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          <div className="bg-blue-900 p-8 rounded-lg flex flex-col sm:flex-row items-center">
            <img src={image} alt="Multiple Training Delivery Modes" className="w-16 h-16 mb-4 sm:mb-0 sm:mr-4"/>
            <div>
              <h3 className="text-2xl font-bold mb-2">Multiple Training Delivery Modes</h3>
              <p>
                Skill Lake's LMS for corporate training supports multiple modes of learning - synchronous, asynchronous, and a blend of both based on the nature of courses and the availability of trainers. Mentors can assign self-paced (recorded) courses to learners or conduct live instructor-led sessions, based on your corporate training goals.
              </p>
            </div>
          </div>
          <div className="bg-blue-900 p-8 rounded-lg flex flex-col sm:flex-row items-center">
            <img src={icon} alt="Boost Learner Engagement" className="w-16 h-16 mb-4 sm:mb-0 sm:mr-4"/>
            <div>
              <h3 className="text-2xl font-bold mb-2">Boost Learner Engagement</h3>
              <p>
                Go beyond functional corporate training with personalized learning plans and dedicated mentoring. Convert learning into actions that enhance performance. Enable dynamic learning for your employees through deeply engaging virtual formats such as videos, motion graphics, interactive slide decks, GIFs, and so on.
              </p>
            </div>
          </div>
          <div className="bg-blue-900 p-8 rounded-lg flex flex-col sm:flex-row items-center">
            <img src={image} alt="Multiple Training Delivery Modes" className="w-16 h-16 mb-4 sm:mb-0 sm:mr-4"/>
            <div>
              <h3 className="text-2xl font-bold mb-2">Multiple Training Delivery Modes</h3>
              <p>
                Skill Lake's LMS for corporate training supports multiple modes of learning - synchronous, asynchronous, and a blend of both based on the nature of courses and the availability of trainers. Mentors can assign self-paced (recorded) courses to learners or conduct live instructor-led sessions, based on your corporate training goals.
              </p>
            </div>
          </div>
          <div className="bg-blue-900 p-8 rounded-lg flex flex-col sm:flex-row items-center">
            <img src={icon} alt="Boost Learner Engagement" className="w-16 h-16 mb-4 sm:mb-0 sm:mr-4"/>
            <div>
              <h3 className="text-2xl font-bold mb-2">Boost Learner Engagement</h3>
              <p>
                Go beyond functional corporate training with personalized learning plans and dedicated mentoring. Convert learning into actions that enhance performance. Enable dynamic learning for your employees through deeply engaging virtual formats such as videos, motion graphics, interactive slide decks, GIFs, and so on.
              </p>
            </div>
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


<div className="container mx-auto py-12 px-4 relative">
      <div className="flex overflow-hidden">
        {visibleSlides.map((item, index) => (
          <div key={index} className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 p-2">
            <div className="bg-white rounded-lg shadow-lg h-full p-4 flex flex-col justify-between">
              <div className="relative flex justify-between items-center mb-2">
                <div className="text-lg font-bold">{item.icon}</div>
                {item.label && (
                  <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-bl">
                    {item.label}
                  </span>
                )}
              </div>
              <h4 className="text-blue-600 mb-1">{item.category}</h4>
              <h3 className="text-md font-semibold mb-1">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        {data.map((_, index) => (
          <span
            key={index}
            className={`inline-block w-3 h-3 mx-1 rounded-full cursor-pointer ${index === currentSlide ? 'bg-green-500' : 'bg-gray-300'}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
      <button
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white text-gray-500 rounded-full shadow-md p-2"
        onClick={prevSlide}
      >
        <FaChevronLeft />
      </button>
      <button
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-gray-500 rounded-full shadow-md p-2"
        onClick={nextSlide}
      >
        <FaChevronRight />
      </button>
    </div>
    


      
    
    </div>
  );
}

export default PeopleDevelpmentPlatform;
