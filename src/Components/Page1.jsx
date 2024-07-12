import React from 'react';
import { BsDot } from "react-icons/bs";
import { IoMdVideocam } from "react-icons/io";
import pic from "../assets/pic1.jpg";
const Page1 = () => {
  return (
    <div className='mt-[6rem] relative mx-4 md:mx-8 lg:px-[4rem]'>
      <div className='flex flex-col md:flex-row justify-between items-center'>
        <div className='text-center md:text-left'>
          <div className='text-4xl md:text-6xl font-bold'>Your Lightning Fast Delivery Partner</div>
          <div className='py-4 md:py-9 w-full md:w-[50rem]'>
            <p>A sample serves as a representative example or a specimen that showcases the qualities or characteristics of a larger group or category.</p>
          </div>
          <div className='flex flex-col md:flex-row text-blue-500 items-center md:space-x-2'>
            <span className='flex items-center'>
              Organize Learning Content <BsDot />
            </span>
            <span className='flex items-center'>
              Track Process <BsDot />
            </span>
            <span className='flex items-center'>
              Grow Your People
            </span>
          </div>
          <div className='flex flex-col md:flex-row gap-4 mt-4'>
            <button type="submit" className='rounded-md bg-blue-500 p-3'>
              REQUEST A DEMO
            </button>
            <button className="flex items-center px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">
              <IoMdVideocam className="mr-2" /> Watch Video
            </button>
          </div>
        </div>
        <div className='py-2 md:py-2 px-10 md:px-20'>
          <img src={pic} alt="Sample Image" className="rounded-md w-full md:w-[25rem]" />
        </div>
      </div>
      <div className='mt-8 flex text-white justify-center w-full'>
        <div className='shadow-inner rounded-lg bg-blue-400 w-full lg:w-[70rem] lg:h-[30rem] h-auto p-10 lg:p-20'>
          <div className='text-2xl lg:text-4xl font-bold mt-2 lg:mt-4 text-center'>
            AI LMS for Effective Learning and Skill Development
          </div>
          <div className='mt-2 lg:mt-4 p-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam est totam minima ad reiciendis enim natus. Nostrum, labore esse! Explicabo excepturi necessitatibus dignissimos quasi repudiandae, qui animi, aut, voluptatibus velit distinctio obcaecati? Iure velit commodi amet tempore nisi consequatur, libero tempora corrupti, consequuntur nemo ex rerum, possimus quia laudantium consectetur accusantium illo eligendi fugit esse? Illum illo explicabo nisi adipisci consequatur natus animi reiciendis deleniti. Ducimus magni nobis eum delectus? Voluptate dolorem beatae eveniet ducimus ut tenetur quis voluptates molestias, odit numquam dicta fugit ipsam iusto porro modi id accusantium labore, commodi atque sequi, recusandae minima quod nam veniam! Nam.
            Travel is the movement of people between distant geographical locations. </div>
          <div className='p-3'>Travel can be done by foot, bicycle, automobile, train, boat, bus, airplane, ship, or other means, with or without luggage, and can be one way or round trip. Travel can also include relatively short stays between successive movements, as in the case of tourism.
          </div>
        </div>
      </div>
    </div>
  );
}
export default Page1;