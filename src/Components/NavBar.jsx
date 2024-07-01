import React, { useState } from 'react';
import { IoIosSearch } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "../assets/Logo.png";

const NavBar = () => {
    const [open, setOpen] = useState(false);

    const menuClicked = () => {
        console.log("clicked");
        setOpen(!open);
    };
    return (
        <div className="flex justify-between items-center px-4 py-2">
            <div className="flex items-center justify-between w-full md:w-auto sm:w-auto">
                <img src={Logo} alt='logo' className='w-[10rem] h-[8rem]' />
                <div className='sm:hidden md:hidden'>
                    <button onClick={menuClicked}>
                        <RxHamburgerMenu size={24} />
                    </button>
                </div>
            </div>
            <div className={`sm:flex sm:items-center w-full sm:w-auto ${open ? "block" : "hidden"}`}>
                <div className="flex flex-col sm:flex-row sm:space-x-8 justify-end items-center w-full sm:w-auto">
                    <a href="#" className="px-4 py-2 text-gray-900 hover:text-blue-500">Features</a>
                    <div className="relative group">
                        <button className="px-4 py-2 text-gray-900 hover:text-blue-500">
                            Solutions
                        </button>
                        <div className="hidden group-hover:block absolute bg-white shadow-lg mt-1 rounded-md">
                            <a href="#" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Option 1</a>
                            <a href="#" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Option 2</a>
                            <a href="#" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Option 3</a>
                        </div>
                    </div>
                    <div className="relative group">
                        <button className="px-4 py-2 text-gray-900 hover:text-blue-500">
                            Resources
                        </button>
                        <div className="hidden group-hover:block absolute bg-white shadow-lg mt-1 rounded-md">
                            <a href="#" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Option 1</a>
                            <a href="#" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Option 2</a>
                            <a href="#" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Option 3</a>
                        </div>
                    </div>
                    <div className="relative group">
                        <button className="px-4 py-2 text-gray-900 hover:text-blue-500">
                            Industry
                        </button>
                        <div className="hidden group-hover:block absolute bg-white shadow-lg mt-1 rounded-md">
                            <a href="#" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Option 1</a>
                            <a href="#" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Option 2</a>
                            <a href="#" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Option 3</a>
                        </div>
                    </div>
                    <a href="#" className="px-4 py-2 text-gray-900 hover:text-blue-500">Pricing</a>
                    <div className="relative group">
                        <button className="px-4 py-2 text-gray-900 hover:text-blue-500">
                            Company
                        </button>
                        <div className="hidden group-hover:block absolute bg-white shadow-lg mt-1 rounded-md">
                            <a href="#" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Option 1</a>
                            <a href="#" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Option 2</a>
                            <a href="#" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Option 3</a>
                        </div>
                    </div>
                    <a href="#" className="px-4 py-2 text-gray-900 hover:text-blue-500">Contact Us</a>
                    <IoIosSearch className="mt-2 sm:mt-0 sm:ml-4" />
                    <button type="submit" className='rounded-md bg-blue-500 p-3 sm:ml-4 mt-2 sm:mt-0'>REQUEST A DEMO</button>
                </div>
            </div>
        </div>
    );
};
export default NavBar;
