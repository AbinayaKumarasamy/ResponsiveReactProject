import React from 'react';
import cardfirst from '../assets/card1.jpeg'; 
import cardtwo from '../assets/card2.jpeg'; 
import cardthree from '../assets/card3.jpeg'; 
import cardfour from '../assets/card4.jpeg'; 
import cardfive from '../assets/card2.jpeg'; 
import header from '../assets/header.jpeg'; 
import { useEffect } from 'react';
const Solutionperefo = () => {
  useEffect (() => {
    window.scrollTo(0,0);
    },[]);
  return (
    <div className="p-4 md:p-10 bg-gray-50">
      <section className="p-4 md:p-8 bg-slate-100">
        <div className="container mx-auto flex flex-col md:flex-row items-center text-center md:text-left">
          <div className="md:w-2/3 mb-6 md:mb-0">
            <h1 className="text-3xl md:text-4xl font-bold text-black">
              Improve business and employee efficiency with a simplified performance review system
            </h1>
            <p className="mt-4 text-black-200 max-w-2xl">
              User-friendly form-based performance review software to foster a dynamic and responsive work environment.
            </p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">
              Schedule a Demo
            </button>
          </div>
          <div className="md:w-1/3">
            <img src={header} alt="Header" className="w-full h-auto rounded-lg shadow-md" />
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12 bg-slate-200">
        <div className="px-4 md:px-8 container mx-auto flex flex-col md:flex-row items-center justify-center text-center md:text-left">
          <div className="md:w-1/3 order-2 md:order-1 mt-6 md:mt-0">
            <h2 className="text-2xl font-semibold text-blue-700 mb-8">
              Run Form-Based Performance Reviews Your Way
            </h2>
          </div>
          <div className="md:w-2/3 order-1 md:order-2">
            <p className="text-gray-600 mb-8">
              Take advantage of form-based employee performance evaluations that’s flexible, convenient, and easy-to-use. Be it self review, manager review, self and manager review, or review with or without moderation, Skill Lake quickly adapts to your process.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-4 rounded-lg shadow-md flex flex-col items-center text-center">
            <div className="flex-shrink-0 mb-4">
              <span className="text-3xl text-yellow-500">📅</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Adjust Review Cycles</h3>
              <p className="mt-2 text-gray-600">
                Configure review cycles the way that works best for your company - yearly, half-yearly, or quarterly.
              </p>
            </div>
          </div>
          <div className="p-4 rounded-lg shadow-md flex flex-col items-center text-center">
            <div className="flex-shrink-0 mb-4">
              <span className="text-3xl text-green-500">🔄</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Choose How You Manage Reviews</h3>
              <p className="mt-2 text-gray-600">
                Manage performance reviews with more freedom and flexibility.
              </p>
            </div>
          </div>
          <div className="p-4 rounded-lg shadow-md flex flex-col items-center text-center">
            <div className="flex-shrink-0 mb-4">
              <span className="text-3xl text-blue-500">📊</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Multiple Evaluation Modes</h3>
              <p className="mt-2 text-gray-600">
                Choose any performance evaluation mode based on your organization’s review process.
              </p>
            </div>
          </div>
          <div className="p-4 rounded-lg shadow-md flex flex-col items-center text-center">
            <div className="flex-shrink-0 mb-4">
              <span className="text-3xl text-red-500">📝</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Performance Review Forms</h3>
              <p className="mt-2 text-gray-600">
                Easily design and launch impactful performance evaluation forms using customizable pre-defined templates.
              </p>
            </div>
          </div>
          <div className="p-4 rounded-lg shadow-md flex flex-col items-center text-center">
            <div className="flex-shrink-0 mb-4">
              <span className="text-3xl text-purple-500">📈</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Track Review Completion & Approvals</h3>
              <p className="mt-2 text-gray-600">
                The data snapshot dashboard on Skill Lake helps managers and HR with review completion and approvals.
              </p>
            </div>
          </div>
          <div className="p-4 rounded-lg shadow-md flex flex-col items-center text-center">
            <div className="flex-shrink-0 mb-4">
              <span className="text-3xl text-orange-500">🔔</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Automated Reminders & Notifications</h3>
              <p className="mt-2 text-gray-600">
                Keep track of performance reviews with automated schedule reminders and notifications.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto py-8 md:py-16 px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">
            Why Skill Lake <span className="text-blue-600">Performance Review Software?</span>
          </h2>
          <p className="text-gray-600">Because it's simple for employees, easy for managers, and flexible for HRs.</p>
        </div>
        <div className="grid gap-8 max-w-6xl mx-auto">
          <div className="bg-emerald-100 p-6 rounded-lg shadow-md flex flex-col sm:flex-row items-center text-center sm:text-left">
            <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4">
              <img src={cardfirst} alt="Card Image 1" className="w-16 h-16 rounded-full" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Formalize Performance Reviews</h3>
              <p className="text-gray-600">
                Elevate your employee assessments with a professional, form-based performance review system. Formalize review documentation and standardize performance evaluation processes with our cloud-based performance review software.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-emerald-300 p-6 rounded-lg shadow-md flex flex-col sm:flex-row items-center text-center sm:text-left">
              <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4">
                <img src={cardtwo} alt="Card Image 2" className="w-16 h-16 rounded-full" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Boost Transparency and Efficiency</h3>
                <p className="text-gray-600">
                  Make your performance reviews more engaging, fair, transparent, and empathetic. Get clear insights and reports on the achievement of employee goals, the development of employee skills, and the potential and performance of individuals.
                </p>
              </div>
            </div>
            <div className="bg-emerald-300 p-6 rounded-lg shadow-md flex flex-col sm:flex-row items-center text-center sm:text-left">
              <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4">
                <img src={cardthree} alt="Card Image 3" className="w-16 h-16 rounded-full" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">User-Friendly Platform</h3>
                <p className="text-gray-600">
                  Intuitive, simple, and user-friendly platform with built-in pre-defined forms. Get everything you need in one place to set up your performance reviews faster.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-emerald-300 p-6 rounded-lg shadow-md flex flex-col sm:flex-row items-center text-center sm:text-left">
              <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4">
                <img src={cardfour} alt="Card Image 4" className="w-16 h-16 rounded-full" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Eliminate Tedious Paperwork</h3>
                <p className="text-gray-600">
                  Take the guesswork and chaos out of your performance review process. Achieve more flexibility in performance review management with automated reminders, intuitive workflows, and customized user permissions.
                </p>
              </div>
            </div>
            <div className="bg-emerald-300 p-6 rounded-lg shadow-md flex flex-col sm:flex-row items-center text-center sm:text-left">
              <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4">
                <img src={cardfive} alt="Card Image 5" className="w-16 h-16 rounded-full" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Link Goals to Performance Reviews</h3>
                <p className="text-gray-600">
                  Align employee goals with your business goals through consistent, periodic performance reviews. Track progress and provide regular feedback to build high-performance workforces and achieve remarkable results.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-cyan-500 p-6 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Upgrade to Our Modern Performance Review System
            </h3>
            <p className="text-gray-600 mb-6">Drive Your Teams. Measure Progress. Ensure Success.</p>
            <button className="bg-blue-600 text-white py-3 px-6 rounded-md shadow-md hover:bg-blue-700 transition duration-200">
              SCHEDULE A DEMO
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutionperefo;
