import React from 'react';
import bg from '../assets/pic1.jpg';

const Bagwithcard = () => {
  return (
    <div className='px-4 lg:px-16 lg:py-24 clear-both'>
      <div className='text-2xl font-bold lg:text-5xl mb-8 text-center'>
        Skill Lake Empowers L&D Teams and Learners
      </div>
      <div className='flex flex-col lg:flex-row gap-8'>
        <div className="rounded-md overflow-hidden h-[35rem] w-full lg:w-1/2">
          <div
            className="h-full w-full bg-cover bg-center flex items-end justify-center p-4"
            style={{ 
              backgroundImage: `url(${bg})`,
              backgroundSize: '150%', 
              backgroundPosition: 'center' 
            }}
          >
            <div className='w-full px-4 lg:px-8'>
              <div className='bg-white rounded-md p-4'>
                <div className='bg-gray-400 rounded-md w-32 h-8 flex items-center justify-center'>
                  L&D Teams
                </div>
                <div className='text-xl p-3 lg:text-3xl text-black mt-2'>
                  Let's make learning easier and goal-oriented!
                </div>
                <div className='p-7 text-gray-800'>
                  Think of it as your control center for creating, implementing, and managing learning programs. Skill Lake handles everything from administration to assessments—a real bird’s-eye view of your learning initiatives!
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-md overflow-hidden h-[35rem] w-full lg:w-1/2">
          <div
            className="h-full w-full bg-cover bg-center flex items-end justify-center p-4"
            style={{ 
              backgroundImage: `url(${bg})`,
              backgroundSize: '80%', 
              backgroundPosition: 'center' 
            }}
          >
            <div className='w-full px-4 lg:px-8'>
              <div className='bg-white rounded-md p-4'>
                <div className='bg-gray-400 rounded-md w-32 h-8 flex items-center justify-center'>
                  Learners
                </div>
                <div className='text-xl p-3 lg:text-3xl text-black mt-2'>
                  Let's make learning easier and goal-oriented!
                </div>
                <div className='p-7 text-gray-800'>
                  Think of Skill Lake’s AI LMS as your employees’ personal tutor. Learning becomes a breeze, enhancing skills and knowledge in a way that feels tailor-made just for them.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full mt-8 text-white">
  <div className="w-full p-10 bg-blue-400 rounded-lg shadow-inner lg:w-[35rem] lg:h-[25rem] lg:p-16 h-auto">
    <div className="mt-2 text-2xl font-bold text-center lg:mt-4 lg:text-4xl">
      Learning on the Go!
    </div>
    <div className="p-4 text-2xl lg:p-[1rem]">
      Your Pocket-sized Learning Companion
    </div>
    <div className="mt-2 lg:mt-4">
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
  );
}

export default Bagwithcard;
