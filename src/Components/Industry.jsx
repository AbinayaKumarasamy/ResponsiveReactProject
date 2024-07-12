import React, { useState, useEffect } from 'react';
import fivebrother from '../assets/fivebrothers.jpeg';
import top from '../assets/top.jpeg';
import mountain from '../assets/images.jpeg';
import key from '../assets/solution.jpeg';
import flower from '../assets/desk.jpeg';
import bg from '../assets/custraining.jpg';
import industry from '../assets/emptraining.jpg';

const Industryy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const testimonials = [
    {
      text: "Skill Lake is so easy to use. The interface is plain and anyone can learn it in a snap. Creating courses and assigning them to users was easy. Gamify elements like virtual rewards and certificate badges did actually motivate our employees to complete their training faster. Mobile accessibility is also an added bonus. We’re able to deploy Skill Lake real quick and customize it for our company processes without hassles.",
      author: "Five Brothers",
      position: "Asset Management Solutions",
    },
    {
      text: "Skill Lake has transformed our training programs. The intuitive design and ease of use made it a breeze to implement. Our employees are more engaged with the gamified learning experience, and we’ve seen a significant improvement in training completion rates.",
      author: "Tech Innovators",
      position: "Software Solutions",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className='p-10 mt-[3rem]'>
      <div className="flex flex-col">
        <header
          className="relative bg-cover bg-center h-auto text-white flex items-center justify-center"
          style={{ backgroundImage: `url(${fivebrother})` }}
        >
          <div className="bg-black bg-opacity-60 p-8 rounded-md text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Think beyond a Traditional Retail LMS For Personalized Training
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Provide a personalized learning path for every retail employee to upskill and reskill their knowledge on products, market trends, and selling techniques through a modern people development platform, Skill Lake.
            </p>
            <div className="flex flex-wrap justify-center space-x-4">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded w-48">
                GET STARTED
              </button>
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded w-48">
                SCHEDULE A DEMO
              </button>
            </div>
          </div>
        </header>

        <div className="flex flex-col md:flex-row items-center p-8">
          <div className="md:w-1/2 md:pr-8">
            <h2 className="text-3xl font-bold mb-4">
              Retail Training Online Personalized And Effective With LXP
            </h2>
            <p className="text-base mb-4">
              Lack of proper training and continued learning is a common barrier that curtails the productivity levels of workers in the retail sector. A retail LMS alone does not help, but a learning experience platform (LXP) in conjunction with an LMS offers a customizable, engaging, and user-centered experience to the learners. It supports effective retail training to regularly upskill workers and drive better employee productivity.
            </p>
            <p className="text-base mb-4">
              Skill Lake’s learning experience platform goes beyond a regular LMS by personalizing every learner’s experience. It helps you curate and upload targeted learning courses that aim to close any skill gaps your retail company is experiencing. It caters to the unique learning needs of the individual by suggesting course recommendations aligned with their goals. Skill Lake comes in handy with various learning elements like mentoring, feedback mechanism, gamification to make your training courses fruitful and improve training for retail employees engagement. See how Skill Lake can make a difference to your retail training ecosystem.
            </p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img src={top} alt="Top view of training session" className="w-full h-auto" />
          </div>
        </div>

        <div className="bg-blue-100 p-8">
          <h2 className="text-3xl font-bold text-center mb-8">
            Skill Lake is More than a Regular Training for Retailers
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col items-center text-center">
                <img src={mountain} alt="Support Staff Training & Development" className="w-16 h-16 mb-4" />
                <h3 className="text-xl font-semibold text-center mb-2">
                  Support Staff Training & Development
                </h3>
                <ul className="list-disc list-inside text-left">
                  <li>Conduct training programs in sales, products, and services.</li>
                  <li>Provide a single point of learning for employees across all store locations.</li>
                  <li>Help new hires level up product knowledge to start serving customers.</li>
                  <li>Consistently train staff on the latest products, compliance, and technologies.</li>
                </ul>
              </div>
              <div className="flex flex-col items-center text-center">
                <img src={key} alt="Quick to Deploy & Easy to Use" className="w-16 h-16 mb-4" />
                <h3 className="text-xl font-semibold text-center mb-2">
                  Quick to Deploy & Easy to Use
                </h3>
                <ul className="list-disc list-inside text-left">
                  <li>Readily deploy based on enterprise IT specs - private servers or the cloud.</li>
                  <li>Customize to brand and processes, and integrate with other applications.</li>
                  <li>Lightweight and intuitive interface to bring on frictionless navigation.</li>
                  <li>Get familiarized with the platform quickly and start learning right away.</li>
                </ul>
              </div>
              <div className="flex flex-col items-center text-center">
                <img src={flower} alt="Deliver Training Anywhere, Anytime" className="w-16 h-16 mb-4" />
                <h3 className="text-xl font-semibold text-center mb-2">
                  Deliver Training Anywhere, Anytime
                </h3>
                <ul className="list-disc list-inside text-left">
                  <li>Offer in-person training accessible via smartphones, tablets, or laptops.</li>
                  <li>Organize training materials in a single library for easy access anytime.</li>
                  <li>Serve training through a mix of options to speed up the learning pace.</li>
                  <li>Create learning modules to train employees in specific areas of retail.</li>
                </ul>
              </div>
              <div className="flex flex-col items-center text-center">
                <img src={bg} alt="Maximize Learning Engagement" className="w-16 h-16 mb-4" />
                <h3 className="text-xl font-semibold text-center mb-2">
                  Maximize Learning Engagement
                </h3>
                <ul className="list-disc list-inside text-left">
                  <li>Tailor personalized learning paths for each learner to reach their goals.</li>
                  <li>Engage learners with interactive content for better knowledge retention.</li>
                  <li>Encourage learners to achieve more with virtual rewards and scores.</li>
                  <li>Track learner progress on dashboards and measure training success.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 bg-white">
          <h2 className="text-3xl font-bold text-center mb-8">Key Features of Skill Lake</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col items-center text-center">
                <img src={industry} alt="Easy to use" className="w-16 h-16 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Easy to use</h3>
                <p className="text-base text-left">
                  Featuring a plain and intuitive interface, Skill Lake is highly user-friendly and anyone can get familiar with the platform real quick.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <img src={industry} alt="Fast Setup" className="w-16 h-16 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Fast Setup</h3>
                <p className="text-base text-left">
                  Readily deploy Skill Lake on a private server or the cloud and configure everything needed in minutes to start delivering course content for learners.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <img src={industry} alt="Customizable" className="w-16 h-16 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Customizable</h3>
                <p className="text-base text-left">
                  Customize the platform to fit your company’s branding and specific learning processes and seamlessly integrate with other enterprise applications.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <img src={industry} alt="Gamified Learning" className="w-16 h-16 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Gamified Learning</h3>
                <p className="text-base text-left">
                  Encourage employees to complete their training courses faster by gamifying the learning experience with virtual rewards, certificates, and badges.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 bg-gray-100">
          <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-md shadow-md text-center">
              <p className="text-lg mb-4">"{testimonials[currentIndex].text}"</p>
              <p className="font-semibold">{testimonials[currentIndex].author}</p>
              <p className="text-gray-600">{testimonials[currentIndex].position}</p>
            </div>
            <div className="flex justify-center mt-4">
              <button
                onClick={() => setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length)}
                className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded-l"
              >
                Prev
              </button>
              <button
                onClick={() => setCurrentIndex((currentIndex + 1) % testimonials.length)}
                className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded-r"
              >
                Next
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Industryy;
