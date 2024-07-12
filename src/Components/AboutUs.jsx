import React from 'react';
import deskImage from '../assets/desk.jpeg';
import { useEffect } from 'react';
const AboutUsAndMissionPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      
      <header className="bg-cover bg-center h-64 flex items-center justify-center" style={{ backgroundImage: `url(${deskImage})` }}>
        <h1 className="text-4xl text-white font-bold">About Us</h1>
      </header>

     
      <section className="px-10 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-lg mb-6">
            We at Fingent were always keen on creating a robust LMS solution as we felt that there was much to be desired in existing solutions available in the market. We remained keenly observant of the market and did the initial market research to understand the market and competitors.
          </p>
          <p className="text-lg mb-6">
            The outcome of the entire process was SkillLake. The product went through multiple iterations and we were able to fine-tune the initial product into what it is today. It is best for the enterprise but can support every organization regardless of size and scale.
          </p>
          <p className="text-lg">
            SkillLake is one of the best LMS products available in the market; it is not only robust for enterprises but very easy to use and intuitive and simple. We have succeeded in building an easy-to-rollout LMS platform that is equally suited for small businesses and large enterprises.
          </p>
        </div>
      </section>

      {/* About the Parent Company Section */}
      <section className="bg-blue-50 px-10 py-16">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row">
          <div className="md:w-2/3 md:pr-8">
            <h2 className="text-3xl font-bold mb-4">About the Parent Company</h2>
            <p className="text-lg mb-6">
              Fingent Solutions is a digital IT company established in 2003 providing strategic IT business solutions and services for today’s complex business problems. We come with expertise in more than 20 industries and have a presence in 14 countries spread over 4 continents.
            </p>
            <p className="text-lg">
              With our vast technical expertise, we seek to develop scalable, secure, easy-to-use technologies that are compatible with multiple devices. We truly believe that the judicious use of technology combined with good design helps reduce complexity, connects individuals, and eventually lets a business succeed.
            </p>
          </div>
          <div className="md:w-1/3 mt-6 md:mt-0 md:ml-4">
            <img src={deskImage} alt="Desk" className="mx-auto md:float-right" style={{ maxWidth: '100%', height: 'auto' }} />
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="px-10 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <img src={deskImage} alt="Varghese Samuel" className="w-32 h-32 mx-auto rounded-md mb-4" />
              <h3 className="text-xl font-semibold">Varghese Samuel</h3>
              <p>CEO & Managing Director</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <img src={deskImage} alt="Dileep Jacob" className="w-32 h-32 mx-auto rounded-md mb-4" />
              <h3 className="text-xl font-semibold">Dileep Jacob</h3>
              <p>Senior Vice President – Global Operations</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <img src={deskImage} alt="Anija Susan" className="w-32 h-32 mx-auto rounded-md mb-4" />
              <h3 className="text-xl font-semibold">Anija Susan</h3>
              <p>Senior Vice President – Finance & Administration</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <img src={deskImage} alt="Stephen Cummings" className="w-32 h-32 mx-auto rounded-md mb-4" />
              <h3 className="text-xl font-semibold">Stephen Cummings</h3>
              <p>Senior Vice President – Sales & Marketing</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <img src={deskImage} alt="Deepu Prakash" className="w-32 h-32 mx-auto rounded-md mb-4" />
              <h3 className="text-xl font-semibold">Deepu Prakash</h3>
              <p>Senior Vice President – Process and Technology</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <img src={deskImage} alt="Ravi Shankar Menon" className="w-32 h-32 mx-auto rounded-md mb-4" />
              <h3 className="text-xl font-semibold">Ravi Shankar Menon</h3>
              <p>Vice President - Business Development, Sales and Marketing</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <img src={deskImage} alt="Sreekumar Menon" className="w-32 h-32 mx-auto rounded-md mb-4" />
              <h3 className="text-xl font-semibold">Sreekumar Menon</h3>
              <p>Senior Vice President – Strategy</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <img src={deskImage} alt="Sreekumar Menon" className="w-32 h-32 mx-auto rounded-md mb-4" />
              <h3 className="text-xl font-semibold">Sreekumar Menon</h3>
              <p>Senior Vice President – Strategy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-6"> {/* Added padding on mobile */}
          <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg">
            We at SkillLake believe learning is critical to the growth and sustenance of an organization. And with the help of SkillLake, we aim to fulfill this critical need in a holistic manner that is both engaging and effective. With SkillLake, we seek to become equal partners with client organizations in fulfilling their learning needs. Our ongoing effort with SkillLake would be on adding new features to make the LMS product “the best” in the market at par with other global brands.
          </p>
        </div>
      </section>

      {/* Our Four Pillars of Influence Section */}
      <section className="bg-blue-100 py-16">
        <div className="max-w-4xl mx-auto text-center px-6"> {/* Added padding on mobile */}
          <h2 className="text-3xl font-bold mb-8">Our Four Pillars of Influence</h2>
          <p className="text-lg mb-12">
            We believe in four core pillars of success that drive our growth. This is ingrained in everything we do.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <img src={deskImage} alt="Customers" className="w-32 h-32 mx-auto rounded-full mb-4" />
              <div className="text-2xl font-bold mb-4">Customers</div>
              <p className="text-lg">We develop relationships that make a positive difference in our customers’ lives.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <img src={deskImage} alt="Peers" className="w-32 h-32 mx-auto rounded-full mb-4" />
              <div className="text-2xl font-bold mb-4">Peers</div>
              <p className="text-lg">We value our people, encourage their development, and reward their performance.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <img src={deskImage} alt="Family & Self" className="w-32 h-32 mx-auto rounded-full mb-4" />
              <div className="text-2xl font-bold mb-4">Family & Self</div>
              <p className="text-lg">We personally care for the well-being and work-life balance of our associates and their families.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <img src={deskImage} alt="Company" className="w-32 h-32 mx-auto rounded-full mb-4" />
              <div className="text-2xl font-bold mb-4">Company</div>
              <p className="text-lg">We are committed to excellence, innovation, and integrity in everything we do.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsAndMissionPage;