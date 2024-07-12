import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

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

const Demo = () => {
  const [openFAQIndex, setOpenFAQIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  return (
    <div>
    <div className="flex items-center justify-center py-8">
          <div className="bg-teal-400 rounded-lg p-6 flex flex-col lg:flex-row items-center w-full max-w-4xl shadow-lg">
            <div className="flex-1 text-white flex flex-col lg:flex-row lg:items-center">
              <h2 className="text-2xl font-bold text-center lg:text-left flex-1">Schedule a Demo with our LMS software expert</h2>
              <div className="mt-4 lg:mt-0 lg:ml-8 text-center lg:text-left">
                <p className="text-center lg:text-left">Share your organization’s unique learning management needs with us.</p>
                <button className="bg-white text-teal-400 font-bold py-2 px-4 rounded-lg shadow-md hover:bg-gray-100 mt-4 lg:mt-4">
                  BOOK A DEMO
                </button>
              </div>
            </div>
          </div>
          </div>
    
    <div className="bg-gray-100 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md mb-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-xl font-semibold">{faq.question}</h3>
              {openFAQIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {openFAQIndex === index && <p className="mt-4">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Demo;