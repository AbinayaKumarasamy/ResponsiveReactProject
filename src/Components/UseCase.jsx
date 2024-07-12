import React from 'react';
import emptraining from '../assets/emptraining.jpg';
import custraining from '../assets/custraining.jpg';
import contraining from '../assets/contraining.jpg';
import usecase from '../assets/usecase.png';
import { useEffect } from 'react';
const UseCase = () => {
  useEffect (() => {
    window.scrollTo(0,0);
    },[]);
  return (
    <div className='p-5 mt-[3rem]'>
      <div className='py-8 px-4 md:px-16 text-center font-bold text-2xl md:text-4xl text-blue-900'>
        Use Cases and Product Tour
      </div>
      <div className='px-4 md:px-16'>
        <div className='flex flex-col lg:flex-row p-[4rem] bg-blue-200 rounded-3xl align-center gap-10'>
          <div>
            <div className='font-bold text-xl md:text-3xl py-4'>
              Explore Diverse Possibilities
            </div>
            <div>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis laboriosam earum explicabo autem! Veritatis sunt ea, cupiditate et atque cumque!
              Think beyond learning management with Skill Lake! Equip your workforce to perform and deliver in today’s dynamic work environment. Attain breakthrough with a host of capabilities like personalized learning, mentoring, gamification, and more. Offer customized, intuitive, and outstanding learning experience and promote learning accountability in unprecedented ways with Skill Lake people development platform.
            </div>
          </div>
          <div className='flex justify-center'>
            <img src={usecase} alt="Use Case" className='w-full lg:w-auto' />
          </div>
        </div>
      </div>
      <div className='text-center font-bold text-2xl md:text-4xl text-blue-900 py-8'>
        Use Cases
      </div>

      <div className="px-4 md:px-10 lg:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="relative group h-80 overflow-hidden rounded-lg">
          <div className="absolute inset-0 w-full h-full rounded-lg transition-transform duration-500 transform-style-3d group-hover:rotate-y-180">
            <img
              src={emptraining}
              alt="Employee Training"
              className="w-full h-full object-cover transform scale-100 group-hover:scale-105"
              style={{ backfaceVisibility: 'hidden' }}
            />
          </div>
          <div className="absolute inset-0 bg-blue-500 text-white flex items-center justify-center rounded-lg transition-transform duration-500 transform-style-3d backface-hidden rotate-y-0 opacity-0 group-hover:rotate-y-180 group-hover:opacity-100">
            <div className="p-4 text-center">
              <h2 className="text-lg md:text-xl font-bold">Employee Training</h2>
              <p className="mt-2">
                Effective and regular Employee Training helps your collaborators understand your products and services well...
              </p>
              <div className='pt-5'>
                <button className="bg-transparent border border-white text-white rounded-lg py-2 px-4 transition duration-300 ease-in-out hover:bg-white hover:text-gray-800">
                  Know More
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="relative group h-80 overflow-hidden rounded-lg">
          <div className="absolute inset-0 w-full h-full rounded-lg transition-transform duration-500 transform-style-3d group-hover:rotate-y-180">
            <img
              src={contraining}
              alt="Customer Training"
              className="w-full h-full object-cover transform scale-100 group-hover:scale-105"
              style={{ backfaceVisibility: 'hidden' }}
            />
          </div>
          <div className="absolute inset-0 bg-blue-500 text-white flex items-center justify-center rounded-lg transition-transform duration-500 transform-style-3d backface-hidden rotate-y-0 opacity-0 group-hover:rotate-y-180 group-hover:opacity-100">
            <div className="p-4 text-center">
              <h2 className="text-lg md:text-xl font-bold">Customer Training</h2>
              <p className="mt-2">
                Effective and regular Employee Training helps your collaborators understand your products and services well...
              </p>
              <div className='pt-5'>
                <button className="bg-transparent border border-white text-white rounded-lg py-2 px-4 transition duration-300 ease-in-out hover:bg-white hover:text-gray-800">
                  Know More
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="relative group h-80 overflow-hidden rounded-lg">
          <div className="absolute inset-0 w-full h-full rounded-lg transition-transform duration-500 transform-style-3d group-hover:rotate-y-180">
            <img
              src={custraining}
              alt="Contractor Training"
              className="w-full h-full object-cover transform scale-100 group-hover:scale-105"
              style={{ backfaceVisibility: 'hidden' }}
            />
          </div>
          <div className="absolute inset-0 bg-blue-500 text-white flex items-center justify-center rounded-lg transition-transform duration-500 transform-style-3d backface-hidden rotate-y-0 opacity-0 group-hover:rotate-y-180 group-hover:opacity-100">
            <div className="p-4 text-center">
              <h2 className="text-lg md:text-xl font-bold">Contractor Training</h2>
              <p className="mt-2">
                Effective and regular Employee Training helps your collaborators understand your products and services well...
              </p>
              <div className='pt-5'>
                <button className="bg-transparent border border-white text-white rounded-lg py-2 px-4 transition duration-300 ease-in-out hover:bg-white hover:text-gray-800">
                  Know More
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="relative group h-80 overflow-hidden rounded-lg">
          <div className="absolute inset-0 w-full h-full rounded-lg transition-transform duration-500 transform-style-3d group-hover:rotate-y-180">
            <img
              src={contraining}
              alt="Non-Profits Training"
              className="w-full h-full object-cover transform scale-100 group-hover:scale-105"
              style={{ backfaceVisibility: 'hidden' }}
            />
          </div>
          <div className="absolute inset-0 bg-blue-500 text-white flex items-center justify-center rounded-lg transition-transform duration-500 transform-style-3d backface-hidden rotate-y-0 opacity-0 group-hover:rotate-y-180 group-hover:opacity-100">
            <div className="p-4 text-center">
              <h2 className="text-lg md:text-xl font-bold">Non-Profits Training</h2>
              <p className="mt-2">
                Effective and regular Employee Training helps your collaborators understand your products and services well...
              </p>
              <div className='pt-5'>
                <button className="bg-transparent border border-white text-white rounded-lg py-2 px-4 transition duration-300 ease-in-out hover:bg-white hover:text-gray-800">
                  Know More
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="relative group h-80 overflow-hidden rounded-lg">
          <div className="absolute inset-0 w-full h-full rounded-lg transition-transform duration-500 transform-style-3d group-hover:rotate-y-180">
            <img
              src={emptraining}
              alt="Industry Training"
              className="w-full h-full object-cover transform scale-100 group-hover:scale-105"
              style={{ backfaceVisibility: 'hidden' }}
            />
          </div>
          <div className="absolute inset-0 bg-blue-500 text-white flex items-center justify-center rounded-lg transition-transform duration-500 transform-style-3d backface-hidden rotate-y-0 opacity-0 group-hover:rotate-y-180 group-hover:opacity-100">
            <div className="p-4 text-center">
              <h2 className="text-lg md:text-xl font-bold">Industry Training</h2>
              <p className="mt-2">
                Effective and regular Employee Training helps your collaborators understand your products and services well...
              </p>
              <div className='pt-5'>
                <button className="bg-transparent border border-white text-white rounded-lg py-2 px-4 transition duration-300 ease-in-out hover:bg-white hover:text-gray-800">
                  Know More
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="relative group h-80 overflow-hidden rounded-lg">
          <div className="absolute inset-0 w-full h-full rounded-lg transition-transform duration-500 transform-style-3d group-hover:rotate-y-180">
            <img
              src={custraining}
              alt="Employee Training"
              className="w-full h-full object-cover transform scale-100 group-hover:scale-105"
              style={{ backfaceVisibility: 'hidden' }}
            />
          </div>
          <div className="absolute inset-0 bg-blue-500 text-white flex items-center justify-center rounded-lg transition-transform duration-500 transform-style-3d backface-hidden rotate-y-0 opacity-0 group-hover:rotate-y-180 group-hover:opacity-100">
            <div className="p-4 text-center">
              <h2 className="text-lg md:text-xl font-bold">Employee Training</h2>
              <p className="mt-2">
                Effective and regular Employee Training helps your collaborators understand your products and services well...
              </p>
              <div className='pt-5'>
                <button className="bg-transparent border border-white text-white rounded-lg py-2 px-4 transition duration-300 ease-in-out hover:bg-white hover:text-gray-800">
                  Know More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseCase;
