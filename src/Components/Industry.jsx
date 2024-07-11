import React, { useState } from 'react';
import fivebrother from '../assets/fivebrothers.jpeg';
import top from '../assets/top.jpeg';
import mountain from '../assets/images.jpeg';
import key from '../assets/solution.jpeg';
import flower from '../assets/desk.jpeg';
import bg from '../assets/custraining.jpg';
import industry from '../assets/emptraining.jpg';

const Industryy = () => {
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

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className='p-10 mt-[3rem]'>
    <div className="flex flex-col">
      <header
        className="relative bg-cover bg-center h-auto text-white flex items-center justify-center"
        style={{ backgroundImage: `url(${fivebrother})` }}
      >
        <div className="bg-black bg-opacity-60 p-8 rounded-md text-center">
          <h1 className="text-5xl font-bold mb-4">Think beyond a Traditional Retail LMS For Personalized Training</h1>
          <p className="text-xl mb-8">Provide a personalized learning path for every retail employee to upskill and reskill their knowledge on products, market trends, and selling techniques through a modern people development platform, Skill Lake.</p>
          <div className="flex flex-wrap justify-center space-x-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">GET STARTED</button>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded">SCHEDULE A DEMO</button>
          </div>
        </div>
      </header>

      <div className="flex flex-col md:flex-row items-center p-8">
        <div className="md:w-1/2 md:pr-8">
          <h2 className="text-3xl font-bold mb-4">Retail Training Online Personalized And Effective With LXP</h2>
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
        <h2 className="text-3xl font-bold text-center mb-8">Skill Lake is More than a Regular Training for Retailers</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center text-center">
              <img src={mountain} alt="Support Staff Training & Development" className="w-16 h-16 mb-4" />
              <h3 className="text-xl font-semibold text-center mb-2">Support Staff Training & Development</h3>
              <ul className="list-disc list-inside text-left">
                <li>Conduct training programs in sales, products, and services.</li>
                <li>Provide a single point of learning for employees across all store locations.</li>
                <li>Help new hires level up product knowledge to start serving customers.</li>
                <li>Consistently train staff on the latest products, compliance, and technologies.</li>
              </ul>
            </div>
            <div className="flex flex-col items-center text-center">
              <img src={key} alt="Quick to Deploy & Easy to Use" className="w-16 h-16 mb-4" />
              <h3 className="text-xl font-semibold text-center mb-2">Quick to Deploy & Easy to Use</h3>
              <ul className="list-disc list-inside text-left">
                <li>Readily deploy based on enterprise IT specs - private servers or the cloud.</li>
                <li>Customize to brand and processes, and integrate with other applications.</li>
                <li>Lightweight and intuitive interface to bring on frictionless navigation.</li>
                <li>Get familiarized with the platform quickly and start learning right away.</li>
              </ul>
            </div>
            <div className="flex flex-col items-center text-center">
              <img src={flower} alt="Deliver Training Anywhere, Anytime" className="w-16 h-16 mb-4" />
              <h3 className="text-xl font-semibold text-center mb-2">Deliver Training Anywhere, Anytime</h3>
              <ul className="list-disc list-inside text-left">
                <li>Offer in-person training accessible via smartphones, tablets, or laptops.</li>
                <li>Organize training materials in a single library for easy access anytime.</li>
                <li>Serve training through a mix of options to speed up the learning pace.</li>
                <li>Create learning modules to train employees in specific areas of retail.</li>
              </ul>
            </div>
            <div className="flex flex-col items-center text-center">
              <img src={bg} alt="Maximize Learning Engagement" className="w-16 h-16 mb-4" />
              <h3 className="text-xl font-semibold text-center mb-2">Maximize Learning Engagement</h3>
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
              <p className="text-base text-left">Featuring a plain and intuitive interface, Skill Lake is highly user-friendly and anyone can get familiar with the platform real quick.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img src={industry} alt="Fast Setup" className="w-16 h-16 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fast Setup</h3>
              <p className="text-base text-left">Readily deploy Skill Lake on a private server or the cloud and configure everything needed in minutes to start delivering course content for learners.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img src={industry} alt="Progress Tracking" className="w-16 h-16 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Progress Tracking</h3>
              <p className="text-base text-left">Course instructors or mentors can track learner progress on the dashboard at the granular level to help enrolled learners progress faster.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img src={industry} alt="Learner Engagement" className="w-16 h-16 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Learner Engagement</h3>
              <p className="text-base text-left">Motivate learners to complete training through gamified elements like virtual rewards, scores, and certificates.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8 bg-blue-100">
        <h2 className="text-3xl font-bold text-center mb-8">Listen to what our customers say</h2>
        <div className="flex flex-col items-center">
          <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl">
            <p className="text-lg mb-4">"{testimonials[currentIndex].text}"</p>
            <p className="text-gray-700 font-semibold">- {testimonials[currentIndex].author}</p>
            <p className="text-gray-500">{testimonials[currentIndex].position}</p>
          </div>
          <div className="flex justify-center mt-4 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Revamp your Legacy Training Content into Highly Impactful Learning Materials
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Are your course materials in need of a makeover? Does it look outdated?
            </p>
          </div>
          <div className="text-left">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              We can help modernize your current training content into a format of your choice that’s deeply engaging and useful.
            </h3>
            <p className="text-gray-700 mb-4">
              Provide your training manuals, course materials, or guides and the required format.
            </p>
            <p className="text-gray-700 mb-4">
              Our team analyzes your requirements and provides you with an estimate.
            </p>
            <p className="text-gray-700 mb-4">
              Further, our team enriches your learning materials to desired multiple content formats - from videos to presentations, motion graphics, ppt, pdf, AR/VR, etc.
            </p>
            <p className="text-gray-700">
              Finally, upload your content to Skill Lake and distribute it among your employees.
            </p>
            <p className="text-gray-700">
              Enrich your training programs by efficiently designing engaging and impactful course materials at scale with this add-on service of content modernization.
            </p>
          </div>
          <div className="mt-8 flex flex-col md:flex-row items-center">
  <div className="md:w-1/2 md:pr-8">
  <img src={top} alt="Top view of training session" className="w-full h-auto" />
  </div>
  
  <div className="md:w-1/2 mt-8 md:mt-0 ">
    <h3 className="text-2xl font-bold text-gray-800 mb-4">
      Start your Learning Journey with Skill Lake
    </h3>
    <p className="text-lg text-gray-700 mb-4">
      Keep your employees regularly trained on every aspect of retail through a unified learning experience platform. Try Skill Lake now!
    </p>
    <div className="flex">
      <a href="#" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded flex items-center">
        CONTACT US
      </a>
      <a href="#" className="ml-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded flex items-center">
        GET A DEMO
      </a>
    </div>
  </div>
</div>

        </div>
      </div>

      <div className="my-8 bg-blue-900 min-h-1/2-screen flex items-center justify-center px-6 sm:px-10 lg:px-16">
        <div className="bg-blue-900 text-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-6 md:mb-0 md:mr-6 w-full md:w-1/3">
              <img src={industry} alt="Brochure" className="rounded-lg w-full h-auto" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-bold mb-4">
                Download Skill Lake Brochure Now!
              </h2>
              <p className="mb-4">
                Explore the new-age learning experience platform for seamless and end-to-end training and learning initiatives, and deliver personalized learning journeys for every user.
              </p>
              <div className="text-left">
                <h3 className="text-xl font-bold mb-2">
                  Enter Your Business Email
                </h3>
                <div className="mb-4">
                  <input 
                    type="email" 
                    placeholder="Enter Your Business Email" 
                    className="w-full p-2 rounded-lg text-black"
                  />
                </div>
                <div className="flex items-center justify-center md:justify-start mb-4">
                  <input type="checkbox" id="privacyPolicy" className="mr-2" />
                  <label htmlFor="privacyPolicy">
                    I have read Skill Lake's <a href="#" className="text-blue-400">privacy policy</a> and agree to receive marketing communications from Skill Lake.
                  </label>
                </div>
                <button className="bg-teal-500 text-white py-2 px-4 rounded-lg">
                  GET IT NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    </div>
  );
}

export default Industryy;