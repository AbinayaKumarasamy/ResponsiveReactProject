import React from 'react';
import usecase from '../assets/usecase.png'
const UseCase = () => {
  return (
    <div className='mt-[8rem] p-[5rem]'>
        <div className='text-center font-bold text-4xl text-blue-900'>Use Cases and Product Tour</div>
        <div className='flex p-10 bg-blue-200 rounded-3xl'>
            <div>
                <div className='font-bold text-3xl py-4'>Explore Diverse Possibilities</div>
                <div>Think beyond learning management with Skill Lake! Equip your workforce to perform and deliver in today’s dynamic work environment. Attain breakthrough with a host of capabilities like personalized learning, mentoring, gamification, and more. Offer customized, intuitive, and outstanding learning experience and promote learning accountability in unprecedented ways with Skill Lake people development platform.</div>
            </div>
            <div><img src={usecase}/></div>

        </div>
        <div className='text-center font-bold text-4xl text-blue-900'>Use Cases</div>
    {/* <div className="bg-white p-8 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Explore Diverse Possibilities</h2>

      </div>
      <p className="mb-6">
        Think beyond learning management with Skill Lake! Equip your workforce to perform and deliver in today’s dynamic work environment.
        Attain breakthrough with a host of capabilities like personalized learning, mentoring, gamification, and more. Offer customized,
        intuitive, and outstanding learning experience and promote learning accountability in unprecedented ways with Skill Lake people
        development platform.
      </p>
      
         
        </div> */}
      </div>
  );
};

export default UseCase;
