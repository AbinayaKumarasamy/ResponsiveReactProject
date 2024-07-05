import React from 'react';
const Demopage = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <div className="min-h-screen bg-white py-6 sm:py-12 p-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0 md:px-4">
                    <h2 className="text-3xl font-extrabold text-gray-900">Schedule a Live Demo</h2>
                    <p className="text-black mt-4 text-lg md:text-xl">
                        Book a no-obligation demo with our experts and discover how Skill Lake can elevate your learning initiatives and grow your business.
                    </p>
                </div>
                <div className="w-full md:w-1/2 bg-[#95ade6] p-6 md:p-8 shadow-md rounded-lg">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name *</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    required  />
                            </div>
                            
                            <div className="mb-4">
                                <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company *</label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    required/>
                            </div>
                                
                            <div className="mb-4">
                                <label htmlFor="job-title" className="block text-sm font-medium text-gray-700">Job Title *</label>
                                <input
                                    type="text"
                                    id="job-title"
                                    name="job-title"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    required/>
                            </div>
                                
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    required/>
                            </div>
                                
                            <div className="mb-4">
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number *</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    required/>
                            </div>
                                
                            <div className="mb-4">
                                <label htmlFor="employees" className="block text-sm font-medium text-gray-700">Number of Employees</label>
                                <input
                                    type="number"
                                    id="employees"
                                    name="employees"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    min="0"/>
                            </div>
                                
                        </div>
                        <div className="mb-6">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
                        </div>
                            
                        <div className="text-center">
                            <button
                                type="submit"
                                className="inline-block w-full md:w-auto px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"> Book My Demo
                            </button>  
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Demopage;
