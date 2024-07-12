import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import desk from '../assets/desk.jpeg';
import { useEffect } from 'react';
const Help = () => {
  useEffect (() => {
    window.scrollTo(0,0);
    },[]);
  return (
    <div className="mt-[5rem] bg-gray-100">
      <header className="relative bg-cover bg-center h-56" style={{ backgroundImage: `url(${desk})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <h1 className="text-white text-4xl font-bold mb-4">Help</h1>
          <div className="relative w-full md:w-1/2">
            <input
              type="text"
              className="w-full p-3 pl-10 border border-gray-300 rounded-lg shadow-sm"
              placeholder="What are you looking for?"
            />
            <FontAwesomeIcon icon={faSearch} className="absolute left-3 top-3.5 text-black" />
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Learning</h2>
            <ul className="list-none space-y-2">
              <li className="text-green-500"><a href="#">Learning Home</a></li>
              <li className="text-green-500"><a href="#">Global Search</a></li>
              <li className="text-green-500"><a href="#">Types of Courses</a></li>
              <li className="text-green-500"><a href="#">Ability to Browse & Self Enroll for Courses</a></li>
              <li className="text-green-500"><a href="#">Consuming Training Content</a></li>
              <li className="text-green-500"><a href="#">View Test Results</a></li>
              <li className="text-green-500"><a href="#">Mark Session Attendance</a></li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Development</h2>
            <ul className="list-none space-y-2">
              <li className="text-green-500"><a href="#">Learning Home</a></li>
              <li className="text-green-500"><a href="#">Global Search</a></li>
              <li className="text-green-500"><a href="#">Types of Courses</a></li>
              <li className="text-green-500"><a href="#">Ability to Browse & Self Enroll for Courses</a></li>
              <li className="text-green-500"><a href="#">Consuming Training Content</a></li>
              <li className="text-green-500"><a href="#">View Test Results</a></li>
              <li className="text-green-500"><a href="#">Mark Session Attendance</a></li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Managing Learning Resources</h2>
            <ul className="list-none space-y-2">
              <li className="text-green-500"><a href="#">Learning Home</a></li>
              <li className="text-green-500"><a href="#">Global Search</a></li>
              <li className="text-green-500"><a href="#">Types of Courses</a></li>
              <li className="text-green-500"><a href="#">Ability to Browse & Self Enroll for Courses</a></li>
              <li className="text-green-500"><a href="#">Consuming Training Content</a></li>
              <li className="text-green-500"><a href="#">View Test Results</a></li>
              <li className="text-green-500"><a href="#">Mark Session Attendance</a></li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Administration</h2>
            <ul className="list-none space-y-2">
              <li className="text-green-500"><a href="#">Learning Home</a></li>
              <li className="text-green-500"><a href="#">Global Search</a></li>
              <li className="text-green-500"><a href="#">Types of Courses</a></li>
              <li className="text-green-500"><a href="#">Ability to Browse & Self Enroll for Courses</a></li>
              <li className="text-green-500"><a href="#">Consuming Training Content</a></li>
              <li className="text-green-500"><a href="#">View Test Results</a></li>
              <li className="text-green-500"><a href="#">Mark Session Attendance</a></li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Mobile Application </h2>
            <ul className="list-none space-y-2">
              <li className="text-green-500"><a href="#">Learning Home</a></li>
              <li className="text-green-500"><a href="#">Global Search</a></li>
              <li className="text-green-500"><a href="#">Types of Courses</a></li>
              <li className="text-green-500"><a href="#">Ability to Browse & Self Enroll for Courses</a></li>
              <li className="text-green-500"><a href="#">Consuming Training Content</a></li>
              <li className="text-green-500"><a href="#">View Test Results</a></li>
              <li className="text-green-500"><a href="#">Mark Session Attendance</a></li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Training & Development</h2>
            <ul className="list-none space-y-2">
              <li className="text-green-500"><a href="#">Overview on Mentoring</a></li>
              <li className="text-green-500"><a href="#">Assigning Courses through Browse Courses (Course Library)</a></li>
              <li className="text-green-500"><a href="#">Assigning To-Do List for your learners</a></li>
              <li className="text-green-500"><a href="#">Enrolling Learners to the Learning path</a></li>
              <li className="text-green-500"><a href="#">Monitoring Learner's Progress</a></li>
              <li className="text-green-500"><a href="#">Enrolling Learners to a batch</a></li>
              <li className="text-green-500"><a href="#">Knowledge area of the learners</a></li>
            </ul>
          </div>
        </div>
      </main>
      <section className="bg-gray-900 text-white py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center">
            <div className="md:w-1/3 mb-8 md:mb-0 md:pr-8">
              <h2 className="text-4xl font-bold mb-4">Schedule a Live Demo</h2>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-semibold mb-4">Watch Skill Lake in Action!</h3>
              <form className="space-y-4">
                <div className="flex flex-col md:flex-row md:space-x-4">
                  <input
                    type="text"
                    placeholder="Name*"
                    className="bg-gray-800 text-white p-3 rounded-md flex-grow"
                  />
                  <input
                    type="text"
                    placeholder="Company*"
                    className="bg-gray-800 text-white p-3 rounded-md flex-grow mt-4 md:mt-0"
                  />
                </div>
                <div className="flex flex-col md:flex-row md:space-x-4">
                  <input
                    type="text"
                    placeholder="Job Title*"
                    className="bg-gray-800 text-white p-3 rounded-md flex-grow"
                  />
                  <input
                    type="email"
                    placeholder="Email Address*"
                    className="bg-gray-800 text-white p-3 rounded-md flex-grow mt-4 md:mt-0"
                  />
                </div>
                <div className="flex flex-col md:flex-row md:space-x-4">
                  <input
                    type="tel"
                    placeholder="Phone Number*"
                    className="bg-gray-800 text-white p-3 rounded-md flex-grow"
                  />
                  <input
                    type="number"
                    placeholder="Number of Employees"
                    className="bg-gray-800 text-white p-3 rounded-md flex-grow mt-4 md:mt-0"
                  />
                </div>
                <textarea
                  placeholder="Message"
                  className="bg-gray-800 text-white p-3 rounded-md w-full"
                  rows="4"
                ></textarea>
                <button
                  type="submit"
                  className="bg-green-600 text-white py-3 px-6 rounded-md font-semibold"
                >
                  Book My Demo
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Help;
