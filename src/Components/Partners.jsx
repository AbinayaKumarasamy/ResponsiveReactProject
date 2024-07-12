import React from 'react';
import { FaChartLine, FaHandshake, FaUserTie } from 'react-icons/fa';
import partnerImage from '../assets/image.jpeg'; // Adjust the path accordingly
import { useEffect } from 'react';
const PartnerPage = () => {
  useEffect (() => {
    window.scrollTo(0,0);
    },[]);
  return (
    <div className='mt-[5rem]'>
    <div className="bg-blue-100">
      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-64" style={{ backgroundImage: "url('/path/to/your/image.jpg')" }}>
        <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-4xl font-bold">Partner with Skill Lake!</h1>
          <p className="mt-4 text-lg">Let's collaborate to deliver interactive learning experiences</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto py-12 px-8 sm:px-8 text-center"> {/* Adjusted padding */}
        <p className="text-center leading-relaxed ">
          To expand our vision of empowering more customers with employee training solutions, we seek partners who share our entrepreneurial goals and spirit to create change with unique innovations. As valued partners of Skill Lake, you can harness our digital tools and domain expertise to stand out in the market and gain a competitive edge.
        </p>
        <p className="mt-6 text-lg leading-relaxed">
          Join our growing partner network, and together let's unlock new potentials to achieve exponential growth & success!
        </p>
      </div>

      {/* Partnership Program Section */}
      <div className="container mx-auto py-12 px-8 sm:px-8"> {/* Adjusted padding */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Our Partnership Program</h1>
          <h2 className="text-xl font-medium mb-8">Authorized Reseller:</h2>

          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {/* Eligibility Card */}
            <div className="flex flex-col items-center p-10 bg-white rounded-lg shadow-md">
              <FaUserTie className="w-16 h-16 mb-4 text-blue-500" />
              <h3 className="text-lg font-semibold mb-4">Eligibility</h3>
              <ul className="text-left list-disc list-inside space-y-2">
                <li>Must be a solution provider with a demonstrated capability to sell applicable products independently</li>
                <li>Should have trained sales representatives, technical consultants/sales, and support engineers to promote and support the product as required</li>
              </ul>
            </div>

            {/* Partnership Benefits Card */}
            <div className="flex flex-col items-center p-10 bg-white rounded-lg shadow-md">
              <FaChartLine className="w-16 h-16 mb-4 text-blue-500" />
              <h3 className="text-lg font-semibold mb-4">Partnership Benefits</h3>
              <ul className="text-left list-disc list-inside space-y-2">
                <li>Product sales training by product experts</li>
                <li>Access to Sales tools (Includes logos, white papers, demo tools, case studies, etc.)</li>
                <li>Listing on partner page on our website</li>
              </ul>
            </div>

            {/* Program Requirements Card */}
            <div className="flex flex-col items-center p-10 bg-white rounded-lg shadow-md">
              <FaHandshake className="w-16 h-16 mb-4 text-blue-500" />
              <h3 className="text-lg font-semibold mb-4">Program Requirements</h3>
              <ul className="text-left list-disc list-inside space-y-2">
                <li>Establish a reseller agreement under which sales and value-added services can be provided to the customer</li>
                <li>Secure business opportunities independently with assistance from our sales team</li>
              </ul>
            </div>
          </div>
        </div>

        {/* About Prestige Saudi Co. Ltd. */}
        <div className="py-16 text-center">
          <h2 className="text-2xl font-bold mb-4">About Prestige Saudi Co. Ltd.</h2>
          <img src={partnerImage} alt="Prestige Saudi Co. Ltd." className="mx-auto mb-4 w-11/12 sm:w-1/2 lg:w-1/3" />
          <p className="text-lg leading-relaxed mb-4 px-4">
            Prestige Saudi Co. Ltd is a leading software and system integration company based in the Kingdom of Saudi Arabia. Prestige Saudi plans to promote the usage of Skill Lake among its customers in the GCC region.
          </p>
          <a href="#" className="text-blue-500 underline">Read more about our partnership with Prestige Saudi Co. Ltd</a>
        </div>

        {/* Contact Section */}
        <div className="bg-blue-50 flex items-center justify-center py-12 px-8 sm:px-8 lg:px-8"> {/* Adjusted padding */}
          <div className="w-full max-w-7xl mx-auto bg-white shadow-md rounded-lg overflow-hidden px-4 sm:px-10 py-8">
            <div className="lg:flex lg:items-stretch">
              <div className="lg:w-1/2 p-4 sm:p-10">
                <h2 className="text-2xl font-semibold text-gray-900">Postal Address</h2>
                <p className="mt-4 text-gray-700">
                  Carnival Infopark Phase II, Phase I, Infopark Campus, PO, Kochi, Kerala 682042
                </p>
                <h2 className="text-2xl font-semibold text-gray-900 mt-8">Email Address</h2>
                <p className="mt-4 text-gray-700">kurian.jacob@fingent.com</p>
                <h2 className="text-2xl font-semibold text-gray-900 mt-8">Phone</h2>
                <p className="mt-4 text-gray-700">+91 (920) 955-1157</p>
              </div>
              <div className="lg:w-1/2 bg-blue-800 p-4 sm:p-10 relative flex items-center justify-center rounded-lg">
                <div className="absolute inset-0 bg-blue-700 opacity-50 z-0 rounded-lg" />
                <div className="relative z-10 w-full space-y-4">
                  <h2 className="text-2xl font-semibold text-white mb-4 text-center">Let Us Know Your Learning & Development Needs</h2>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-white">Name *</label>
                      <input type="text" className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white">Business Email ID *</label>
                      <input type="email" className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white">Company Name *</label>
                      <input type="text" className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white">Phone Number *</label>
                      <input type="text" className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white">Message</label>
                      <textarea className="mt-1 p-2 w-full border border-gray-300 rounded-md h-24"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-green-500 text-white py-2 rounded-md">Contact Now</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default PartnerPage;