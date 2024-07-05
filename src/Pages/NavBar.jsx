import React, { useEffect, useState } from 'react';
import { IoIosSearch, IoMdClose, IoMdArrowDropdown } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from 'react-router-dom';
import Logo from "../assets/Logo.png";

const NavBar = () => {
    const [open, setOpen] = useState(false);
    const [isMobileOrTablet, setIsMobileOrTablet] = useState(window.innerWidth <= 1024);
    const [dropdownOpen, setDropdownOpen] = useState({
        solutions: false,
        resources: false,
        industry: false,
        company: false
    });

    const menuClicked = () => {
        setOpen(!open);
    };

    const handleResize = () => {
        setIsMobileOrTablet(window.innerWidth <= 1024);
    };

    const toggleDropdown = (dropdown) => {
        setDropdownOpen(prevState => ({
            ...prevState,
            [dropdown]: !prevState[dropdown]
        }));
    };

    const handleMouseEnter = (dropdown) => {
        setDropdownOpen(prevState => ({
            ...prevState,
            [dropdown]: true
        }));
    };

    const handleMouseLeave = (dropdown) => {
        setDropdownOpen(prevState => ({
            ...prevState,
            [dropdown]: false
        }));
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-[7rem] bg-white z-30 flex items-center">
            <div className="max-w-screen-xl mx-auto flex justify-between items-center w-full px-4">
                <Link to="/" className="flex-shrink-0">
                    <img src={Logo} alt='logo' className='w-[10rem] h-[8rem] object-contain' />
                </Link>
                {/* RxHamburgerMenu for tablets and below */}
                <div className='lg:hidden flex'>
                    <button onClick={menuClicked} aria-label="Toggle menu" className="ml-auto">
                        {open ? <IoMdClose size={24} /> : <RxHamburgerMenu size={24} />}
                    </button>
                </div>
                {/* Desktop navigation menu */}
                <div className="hidden lg:flex lg:items-center lg:space-x-4 w-full justify-end">
                    <Link to="/Features" className="px-2 py-2 text-gray-900 hover:text-blue-500">Features</Link>
                    <div className="relative group" onMouseEnter={() => handleMouseEnter('solutions')} onMouseLeave={() => handleMouseLeave('solutions')}>
                        <button 
                            className="px-2 py-2 text-gray-900 hover:text-blue-500 flex items-center"
                            onClick={() => toggleDropdown('solutions')}
                        >
                            Solutions <IoMdArrowDropdown className="ml-1" />
                        </button>
                        {dropdownOpen.solutions && (
                            <div className="absolute bg-white shadow-lg mt-1 rounded-md z-10">
                                <a href="#" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Option 1</a>
                                <a href="#" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Option 2</a>
                                <a href="#" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Option 3</a>
                            </div>
                        )}
                    </div>
                    <div className="relative group" onMouseEnter={() => handleMouseEnter('resources')} onMouseLeave={() => handleMouseLeave('resources')}>
                        <button 
                            className="px-2 py-2 text-gray-900 hover:text-blue-500 flex items-center"
                            onClick={() => toggleDropdown('resources')}
                        >
                            Resources <IoMdArrowDropdown className="ml-1" />
                        </button>
                        {dropdownOpen.resources && (
                            <div className="absolute bg-white shadow-lg mt-1 rounded-md z-10">
                                <Link to="/Casestudy" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Case Studies</Link>
                                <Link to="/Blog" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Blogs</Link>
                                <Link to="/Help" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Help</Link>
                                <Link to="/Usecase" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Use Case</Link>
                                <a href="#" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Videos</a>
                                <a href="#" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Downloads</a>
                                <Link to="/ReleaseNotes" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Release Notes</Link>
                            </div>
                        )}
                    </div>
                    <div className="relative group" onMouseEnter={() => handleMouseEnter('industry')} onMouseLeave={() => handleMouseLeave('industry')}>
                        <button 
                            className="px-2 py-2 text-gray-900 hover:text-blue-500 flex items-center"
                            onClick={() => toggleDropdown('industry')}
                        >
                            Industry <IoMdArrowDropdown className="ml-1" />
                        </button>
                        {dropdownOpen.industry && (
                            <div className="absolute bg-white shadow-lg mt-1 rounded-md z-10">
                                <a href="#" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Retail</a>
                                <a href="#" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Manufacturing</a>
                                <a href="#" className="block px-4 py-2 text-gray-900 hover:text-blue-500">HealthCare</a>
                                <a href="#" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Insurance</a>
                                <a href="#" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Franchise</a>
                                <a href="#" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Aviation</a>
                                <a href="#" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Non Profit</a>
                                <a href="#" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Construction</a>
                                <a href="#" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Maritime</a>
                                <a href="#" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Energy</a>
                                <a href="#" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Telecom</a>
                                <a href="#" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Automotive</a>
                            </div>
                        )}
                    </div>
                    <Link to="/Pricing" className="px-2 py-2 text-gray-900 hover:text-blue-500">Pricing</Link>
                    <div className="relative group" onMouseEnter={() => handleMouseEnter('company')} onMouseLeave={() => handleMouseLeave('company')}>
                        <button 
                            className="px-2 py-2 text-gray-900 hover:text-blue-500 flex items-center"
                            onClick={() => toggleDropdown('company')}
                        >
                            Company <IoMdArrowDropdown className="ml-1" />
                        </button>
                        {dropdownOpen.company && (
                            <div className="absolute bg-white shadow-lg mt-1 rounded-md z-10">
                                <Link to="/Partners" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Partners</Link>
                                <a href="#" className="block px-4 py-2 text-gray-900 hover:text-blue-500">About Us</a>
                            </div>
                        )}
                    </div>
                    <Link to="/ContactUs" className="px-2 py-2 text-gray-900 hover:text-blue-500">Contact Us</Link>
                    <IoIosSearch className="mt-2 lg:mt-0 lg:ml-2" />
                    <button type="submit" className='rounded-md bg-blue-500 p-3 lg:ml-2 mt-2 lg:mt-0'>REQUEST A DEMO</button>
                </div>
            </div>
            {/* Tablet and Mobile Menu */}
            {(open || isMobileOrTablet) && (
                <div className={`lg:hidden fixed top-0 left-0 w-full h-full bg-white z-40 ${open ? 'flex' : 'hidden'} flex-col items-center justify-center`}>
                    <button onClick={menuClicked} className="absolute top-4 right-4" aria-label="Close menu">
                        <IoMdClose size={24} />
                    </button>
                    <Link to="/Features" className="px-4 py-2 text-gray-900 hover:text-blue-500 text-lg">Features</Link>
                    <div className="relative group">
                        <button 
                            className="px-4 py-2 text-gray-900 hover:text-blue-500 text-lg flex items-center"
                            onClick={() => toggleDropdown('solutions')}
                        >
                            Solutions <IoMdArrowDropdown className="ml-1" />
                        </button>
                        {dropdownOpen.solutions && (
                            <div className="bg-white shadow-lg mt-1 rounded-md z-10">
                                <a href="#" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Option 1</a>
                                <a href="#" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Option 2</a>
                                <a href="#" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Option 3</a>
                            </div>
                        )}
                    </div>
                    <div className="relative group">
                        <button 
                            className="px-4 py-2 text-gray-900 hover:text-blue-500 text-lg flex items-center"
                            onClick={() => toggleDropdown('resources')}
                        >
                            Resources <IoMdArrowDropdown className="ml-1" />
                        </button>
                        {dropdownOpen.resources && (
                            <div className="bg-white shadow-lg mt-1 rounded-md z-10">
                                <Link to="/Casestudy" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Case Studies</Link>
                                <Link to="/Blog" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Blogs</Link>
                                <Link to="/Help" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Help</Link>
                                <Link to="/Usecase" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Use Case</Link>
                                <a href="#" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Videos</a>
                                <a href="#" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Downloads</a>
                                <Link to="/ReleaseNotes" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Release Notes</Link>
                            </div>
                        )}
                    </div>
                    <div className="relative group">
                        <button 
                            className="px-4 py-2 text-gray-900 hover:text-blue-500 text-lg flex items-center"
                            onClick={() => toggleDropdown('industry')}
                        >
                            Industry <IoMdArrowDropdown className="ml-1" />
                        </button>
                        {dropdownOpen.industry && (
                            <div className="bg-white shadow-lg mt-1 rounded-md z-10">
                                <a href="#" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Retail</a>
                                <a href="#" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Manufacturing</a>
                                <a href="#" className="block px-4 py-2 text-gray-900 hover:text-blue-500">HealthCare</a>
                                <a href="#" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Insurance</a>
                                <a href="#" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Franchise</a>
                                <a href="#" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Aviation</a>
                                <a href="#" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Non Profit</a>
                                <a href="#" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Construction</a>
                                <a href="#" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Maritime</a>
                                <a href="#" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Energy</a>
                                <a href="#" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Telecom</a>
                                <a href="#" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Automotive</a>
                            </div>
                        )}
                    </div>
                    <Link to="/Pricing" className="px-4 py-2 text-gray-900 hover:text-blue-500 text-lg">Pricing</Link>
                    <div className="relative group">
                        <button 
                            className="px-4 py-2 text-gray-900 hover:text-blue-500 text-lg flex items-center"
                            onClick={() => toggleDropdown('company')}
                        >
                            Company <IoMdArrowDropdown className="ml-1" />
                        </button>
                        {dropdownOpen.company && (
                            <div className="bg-white shadow-lg mt-1 rounded-md z-10">
                                <Link to="/Partners" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Partners</Link>
                                <a href="#" className="block px-4 py-2 text-gray-900 hover:text-blue-500">About Us</a>
                            </div>
                        )}
                    </div>
                    <a href="#" className="px-4 py-2 text-gray-900 hover:text-blue-500 text-lg">Contact Us</a>
                    <button type="submit" className='rounded-md bg-blue-500 p-3 mt-4'>REQUEST A DEMO</button>
                </div>
            )}
        </div>
    );
};

export default NavBar;
