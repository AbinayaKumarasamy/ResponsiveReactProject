import React from 'react';
import pricepage from '../assets/pricepage.jpeg';
import top from '../assets/top.jpeg';
import { useEffect } from 'react';
const Casestudy = () => {
  useEffect (() => {
    window.scrollTo(0,0);
    },[]);
  return (
    <div className="mt-[5rem] bg-gray-100">
      <div className="relative w-full h-48 bg-cover bg-center" style={{ backgroundImage: `url(${top})` }}>
        <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <h2 className="text-3xl font-extrabold text-white">Case Studies</h2>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8">
          <div className="lg:flex">
            <div className="lg:w-1/3 w-full h-64 lg:h-auto order-2 lg:order-1">
              <img src={pricepage} alt="Five Brothers" className="w-full h-full object-cover" />
            </div>
            <div className="p-6 flex flex-col justify-between lg:w-2/3 order-1 lg:order-2">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Improved & Effective Organizational Training by Five Brothers</h3>
                <p className="text-gray-600">
                  Five Brothers is an asset management company with a legacy of over 25 years and involves itself in the 'Property Preservation Business' where they maintain the property’s bank aspects. With the goals of eliminating the damages of vacant properties, training their employees, keeping them abreast with the latest regulations, business rules, and compliance, and providing a hands-on experience with the clients, Five Brothers trained an array of their employees with Skill Lake. This improved training implementation allowed them to cut costs, save time, and ensure compliance. Skill Lake provided the training programs that were best suited to the firm’s organizational structure, and the platform’s seamless experience, which did not require any high IT overheads, enabled them to scale their training programs globally with easy accessibility.
                </p>
              </div>
              <a href="#" className="mt-4 text-blue-500 hover:underline">Read More</a>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8">
          <div className="lg:flex">
            <div className="p-6 flex flex-col justify-between lg:w-2/3 lg:order-1">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">ZH Healthcare Streamlined Compliance Training & Employee Onboarding</h3>
                <p className="text-gray-600">
                  ZH Healthcare is a technology company committed to democratizing healthcare information technology and education through its Health IT platform, blueEHR. The company sought to provide a robust LMS that records, manages, and stores compliance training records and allows employees to study and identify gaps and deploy e-health education. They were able to streamline health information technology education and achieve better course completion rates through Skill Lake’s advanced analytics, training, and development modules. The easy-to-use and intuitive Skill Lake platform enabled ZH Healthcare to conduct training at scale with customized training programs and reduced training time and costs.
                </p>
              </div>
              <a href="#" className="mt-4 text-blue-500 hover:underline">Read More</a>
            </div>
            <div className="lg:w-1/3 w-full h-64 lg:h-auto lg:order-2">
              <img src={pricepage} alt="ZH Healthcare" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8">
          <div className="lg:flex">
            <div className="lg:w-1/3 w-full h-64 lg:h-auto order-2 lg:order-1">
              <img src={pricepage} alt="TROTB" className="w-full h-full object-cover" />
            </div>
            <div className="p-6 flex flex-col justify-between lg:w-2/3 order-1 lg:order-2">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">TROTB Improves Volunteer Retention by 50% with Skill Lake Learning Experience Platform</h3>
                <p className="text-gray-600">
                  The global non-profit firm TROTB felt the impact of their volunteers feeling unfulfilled in their roles. In time, they moved to online training and transformed their training programs with the help of Skill Lake. A higher adoption for training courses, lower volunteer churn, and improved training efficiencies helped TROTB achieve their goals without breaking a sweat.
                </p>
              </div>
              <a href="#" className="mt-4 text-blue-500 hover:underline">Read More</a>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8">
          <div className="lg:flex">
            <div className="p-6 flex flex-col justify-between lg:w-2/3 lg:order-1">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">How The Training Center Group Leveraged Skill Lake for Continuing Education</h3>
                <p className="text-gray-600">
                  The Training Center Group is a fast-learning institution providing continuing education to individuals who seek a career boost or pivot. Over recent years, there was a growing demand for easy-to-use and scalable LMSs. With Skill Lake, the institution was able to continuously manage its diverse offerings of training, enhanced its compliance training, and ensured continued engagement through a structured approach to training.
                </p>
              </div>
              <a href="#" className="mt-4 text-blue-500 hover:underline">Read More</a>
            </div>
            <div className="lg:w-1/3 w-full h-64 lg:h-auto lg:order-2">
              <img src={pricepage} alt="The Training Center Group" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Casestudy;