import React from 'react'
import desk from '../assets/desk.jpeg'

const Card = () => {
  return (
    <div >
        <div className="p-4 bg-white dark:bg-gray-800">
  <div className="flex flex-col lg:flex-row justify-between items-center">
    <div className="p-3">
      <p className="font-bold text-5xl text-gray-900 dark:text-white">
        Future-proof Your Digital Learning Assets
      </p>
      <p className="text-3xl font-medium mt-2 text-gray-700 dark:text-gray-400">
        Course Creation & Legacy Content Modernization
      </p>
    </div>
    <div className="mt-4 lg:mt-0 lg:ml-auto lg:mr-0">
      <button 
  type="button" 
  className="p-4 text-sm font-medium text-green-900 bg-white rounded-lg border-2 border-green-600 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
>
  Learn More
</button>

    </div>
  </div>
  <div className="p-3">
    <p className="text-xl font-medium mt-2 text-gray-700 dark:text-gray-400">
      Build courses from scratch, give old learning materials a facelift, and get expert advice for a winning learning strategy.
    </p>
  </div>
</div>


<div className="p-3 flex flex-wrap justify-between gap-4">
  <div className="max-w-sm w-full sm:w-auto bg-white border border-gray-200 rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
      <img className="rounded-t-3xl" src={desk} alt="Technology acquisitions 2021" />
    </a>
    <div className="p-5">
      <a href="#">
      <h2 className="mb-2 text-xl tracking-tight text-gray-900 dark:text-white bg-green-300 w-56 rounded-lg">
      AR/VR Experiences Videos
        </h2>
        <h5 className="mb-2 text-xl tracking-tight text-gray-900 dark:text-white">
        Ensure ISO 27001/ISMS Awareness Across Your Organization
        </h5>
      </a>
      
    </div>
  </div>
  <div className="max-w-sm w-full sm:w-auto bg-white border border-gray-200 rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
      <img className="rounded-t-3xl" src={desk} alt="Technology acquisitions 2021" />
    </a>
    <div className="p-5">
      <a href="#">
      <h2 className="mb-2 text-xl tracking-tight text-gray-900 dark:text-white bg-violet-400 w-44 rounded-lg">
      2D Explainer Videos
        </h2>
        <h5 className="mb-2 text-xl  tracking-tight text-gray-900 dark:text-white">
        Overcome Cognitive Barriers & Redefine Training With AR/VR Experiences
        </h5>
      </a>
      
      
    </div>
  </div>
  <div className="max-w-sm w-full sm:w-auto bg-white border border-gray-200 rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
      <img className="rounded-t-3xl" src={desk} alt="Technology acquisitions 2021" />
    </a>
    <div className="p-5">
      <a href="#">
      <h2 className="mb-2 text-xl tracking-tight text-gray-900 dark:text-white bg-rose-200  w-64 rounded-lg">
      Mandatory Training Videos
        </h2>
        <h5 className="mb-2 text-xl  tracking-tight text-gray-900 dark:text-white">
        Boost Efficiency through Performance-Based Learning In Aviation
        </h5>
      </a>
     
      
    </div>
  </div>
</div>

</div>

   
  )
}

export default Card