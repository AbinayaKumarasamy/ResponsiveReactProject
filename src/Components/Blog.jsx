import React, { useState } from 'react';
import desk from '../assets/desk.jpeg';
import { useEffect } from 'react';
const Blog = () => {
  useEffect (() => {
    window.scrollTo(0,0);
    },[]);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 4;
  const totalPages = 5;
  const articles = [
    {
      title: "How Do You Choose The Right LMS For Customer Training (2024)?",
      author: "Ashmitha Chatterjee",
      date: "March 11th, 2024",
      description: "What can customer training do for your business? Beyond helping your customers better understand your products and service...",
      image: desk,
    },
    {
      title: "Why Employer Branding is important?",
      author: "Saranya Nair",
      date: "April 16th, 2024",
      description: "Sarah, the HR manager at a leading software solutions provider, was stressed. Their senior business development position was available for over a month, but there was no better fit despite the flooding of applications. While one candidate with the necessary skills seemed a good fit and lacked leadership experience, another had the essential personality but",
      image: desk,
    },
    {
      title: "Boost Sales & Customer Service: The Secret Sauce of Retail LMS",
      author: "Roshna R",
      date: "April 11th, 2024",
      description: "Imagine a retail team brimming with confidence, effortlessly navigating product details, and exceeding customer expectations. It is going to make customers satisfied and return to you. How can you equip your employees to be exceptional? With proper training, you can ensure your team has an in-depth understanding of your products and services, and a retail",
      image: desk,
    },
    {
      title: "Corporate Trainers’ Toolbox: Essential Features of a Mobile LMS",
      author: "Ashmitha Chatterjee",
      date: "April 1st, 2024",
      description: "Corporate training improves employees’ performance, productivity, and ability to achieve overall business success, and it is crucial for organizational development. However, traditional training methods have a few drawbacks, which include increased one-size-fits-all training material, labor costs, and lack of flexibility. The introduction of mobile learning applications is helping organizations overcome these challenges, and the reports",
      image: desk,
    },
  ];
  const displayedArticles = articles.slice((currentPage - 1) * articlesPerPage, currentPage * articlesPerPage);
  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className='p-5 mt-[3rem]'>
      <div className="relative bg-cover bg-center h-64" style={{ backgroundImage: `url(${desk})` }}>
        <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 md:px-8">
          <h1 className="text-3xl md:text-4xl font-bold">Blogs</h1>
          <h3 className="mt-4 text-lg md:text-xl font-semibold px-4 md:px-8">
            Explore top trends and innovation stories from our leading bloggers on enterprise learning management
          </h3>
        </div>
      </div>
      <div className="flex flex-col md:flex-row p-4 md:p-8">
        <div className="w-full md:w-2/3 md:pr-4">
          {displayedArticles.map((article, index) => (
            <div key={index} className="flex flex-col md:flex-row mb-8">
              <img src={article.image} alt="Blog" className="w-full md:w-1/3 h-auto md:mr-4" />
              <div className="w-full md:w-2/3 mt-4 md:mt-0">
                <h2 className="text-xl md:text-2xl font-bold">{article.title}</h2>
                <p className="text-sm text-gray-500">
                  By {article.author} &nbsp;&nbsp; {article.date}
                </p>
                <p className="mt-2">{article.description}</p>
                <a href="#" className="text-green-500 mt-2 block">Read More</a>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full md:w-1/3 mt-8 md:mt-0 md:ml-4">
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold">Stay up to date on the latest in HR and L&D</h2>
            <div className="mt-4 flex">
              <input
                type="email"
                placeholder="Enter your mail ID *"
                className="flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none"
              />
              <button className="p-2 bg-green-500 text-white rounded-r-md">➜</button>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-4">Highlights of Skill Lake</h2>
            <ul className="list-disc list-inside text-green-500 space-y-2">
              <li>AI/ML Powered Course Recommendations</li>
              <li>Courses with AR/VR Experiences</li>
              <li>Competency & Course Management</li>
              <li>Multiple Learning Modes</li>
              <li>Mentoring & Feedback</li>
              <li>Gamification</li>
              <li>Learning Bytes</li>
              <li>Mobile App</li>
              <li>SCORM Compliance</li>
            </ul>
            <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded">REQUEST A DEMO</button>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center space-x-1 mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-2 py-1 bg-gray-200 text-gray-700 rounded disabled:opacity-50"> &lt;
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`px-2 py-1 rounded ${currentPage === index + 1 ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-2 py-1 bg-gray-200 text-gray-700 rounded disabled:opacity-50"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Blog;
