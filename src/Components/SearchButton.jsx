import React from 'react';
import { FaArrowRight, FaSearch } from 'react-icons/fa';
import 'tailwindcss/tailwind.css';

const SearchBar = () => {
  return (
    <div className="fixed top-10 right-10 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg bg-white shadow-lg rounded-lg p-4">
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Search ..."
          className="w-full p-4 pl-10 border rounded-full shadow focus:outline-none focus:ring"
        />
        <div
          className="absolute top-0 left-0 flex items-center justify-center h-full w-10 text-gray-500 cursor-pointer"
        >
          <FaSearch />
        </div>
        <button
          type="submit"
          className="absolute right-0 top-0 h-full px-4 bg-teal-500 rounded-r-full text-white flex items-center justify-center"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;