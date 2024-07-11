import React from 'react';
import bg from '../assets/pic1.jpg';

const Bagwithcard = () => {
  return (
    
    <div>
      <div className='mt-[6rem] relative mx-4 md:mx-8 lg:px-[4rem]'>
  <div className='text-2xl font-bold sm:text-3xl lg:text-5xl mb-8 text-center'>Skill Lake Empowers L&D Teams and Learners</div>
  <div className='flex flex-col lg:flex-row gap-8'>
    <div className="rounded-md overflow-hidden w-full lg:w-[50%]">
      <div className="h-[20rem] sm:h-[25rem] lg:h-[25rem] bg-cover bg-center flex items-end justify-center p-4" style={{ 
          backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center'  }}>
        <div className='w-full px-4 sm:px-6 lg:px-8'>
          <div className='bg-white rounded-md p-4'>
            <div className='bg-gray-400 rounded-md w-32 h-8 flex items-center justify-center'>L&D Teams</div>
            <div className='text-lg sm:text-xl lg:text-3xl text-black mt-2'> Let's make learning easier and goal-oriented!
            </div>
            <div className='p-4 sm:p-5 lg:p-7 text-gray-800'>
              Think of it as your control center for creating, implementing, and managing learning programs. Skill Lake handles everything from administration to assessments—a real bird’s-eye view of your learning initiatives!
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="rounded-md overflow-hidden w-full lg:w-[50%]">
      <div
        className="h-[20rem] sm:h-[25rem] lg:h-[25rem] bg-cover bg-center flex items-end justify-center p-4"
        style={{ 
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover', 
          backgroundPosition: 'center' 
        }}
      >
        <div className='w-full px-4 sm:px-6 lg:px-8'>
          <div className='bg-white rounded-md p-4'>
            <div className='bg-gray-400 rounded-md w-32 h-8 flex items-center justify-center'>
              Learners
            </div>
            <div className='text-lg sm:text-xl lg:text-3xl text-black mt-2'>
              Let's make learning easier and goal-oriented!
            </div>
            <div className='p-4 sm:p-5 lg:p-7 text-gray-800'>
              Think of Skill Lake’s AI LMS as your employees’ personal tutor. Learning becomes a breeze, enhancing skills and knowledge in a way that feels tailor-made just for them.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="mt-8 flex text-white justify-center w-full">
    <div className="shadow-inner rounded-lg bg-blue-400 w-full lg:w-[70rem] lg:h-[30rem] h-auto p-10 lg:p-20">
      <div className="text-2xl lg:text-4xl font-bold mt-2 lg:mt-4 text-center">
        Learning on the Go!
      </div>
      <div className="p-4 sm:p-[1rem] text-xl sm:text-2xl">
        Your Pocket-sized Learning Companion
      </div>
      <div className="mt-2 lg:mt-4 p-3">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus tempora impedit similique. Quisquam odit delectus magnam debitis? Temporibus voluptates cumque, exercitationem rem nobis libero, voluptatum atque facilis molestias quas magnam saepe dolore consequatur corporis corrupti obcaecati pariatur. Odio, itaque dicta? Maiores consectetur modi natus itaque, amet aut? Ducimus, illum accusantium! officia nisi excepturi blanditiis! Veritatis fugit modi reiciendis unde dolorem non dolores expedita. Quasi, commodi?
        Our intuitive and secure e-learning mobile app lets your users conveniently access and engage with course content on their phones or tablets.
      </div>
      <div className="flex justify-center mt-2 lg:mt-4">
        <button
          type="submit"
          className="p-3 mt-2 border border-white rounded-md bg-transparent sm:ml-4 sm:mt-0"
        >
          KNOW MORE
        </button>
      </div>
    </div>
  </div>
</div>

    </div>
  );
}
export default Bagwithcard;
