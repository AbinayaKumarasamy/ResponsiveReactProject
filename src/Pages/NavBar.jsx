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
        <div className="fixed top-0 left-0 w-full h-[5rem] bg-white z-30 flex items-center">
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
                <div className="hidden lg:flex lg:items-center lg:space-x-4 w-full justify-end items-center">
                    <Link to="/Features" className="px-2 py-2 text-gray-900 hover:text-blue-500">Features</Link>
                    <div className="relative group" onMouseEnter={() => handleMouseEnter('solutions')} onMouseLeave={() => handleMouseLeave('solutions')}>
                        <button 
                            className="px-2 py-2 text-gray-900 hover:text-blue-500 flex items-center"
                            onClick={() => toggleDropdown('solutions')}
                        >
                            Solutions <IoMdArrowDropdown className="ml-1" />
                        </button>
                        {dropdownOpen.solutions && (
                            <div className="absolute bg-white shadow-lg mt-1 rounded-md z-10 whitespace-nowrap">
                                <Link to="/Learningmanagementsystem" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Learning Management System</Link>
                                <Link to="/LmsMobileAppSolution" className="block px-4 py-2 text-gray-900 hover:text-blue-500">LMS Mobile App</Link>
                                <Link to="/Learninganddevelopmentplatform" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Learning and Development Platform</Link>
                                <Link to="/Learningexperienceplatform" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Learning Experience Platform</Link>
                                <Link to="/Peopledevelpmentplatform" className="block px-4 py-2 text-gray-900 hover:text-blue-500">People Development Platform</Link>
                                <Link to="/Corporatetrainingplatform" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Corporate Training Platform </Link>
                                <Link to="/TrainingManagementSystem" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Training Management System</Link>
                                <Link to="/Contentcreationservices" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Content Creation Services</Link>
                                <Link to="/Performancereviewsystem" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Performance Review System</Link>
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
                            <div className="absolute bg-white shadow-lg mt-1 rounded-md z-10 whitespace-nowrap">
                                <Link to="/Casestudy" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Case Studies</Link>
                                <Link to="/Blog" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Blogs</Link>
                                <Link to="/Help" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Help</Link>
                                <Link to="/Usecase" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Use Case</Link>
                                <Link to="/Videos" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Videos</Link>
                                <Link to="/Download" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Downloads</Link>
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
                            <div className="absolute bg-white shadow-lg mt-1 rounded-md z-10 whitespace-nowrap">
                                <Link to="/Industry" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Retail</Link>
                                <Link to="/Industry"className="block px-4 py-2 text-gray-900 hover:text-blue-500">Manufacturing</Link>
                                <Link to="/Industry" className="block px-4 py-2 text-gray-900 hover:text-blue-500">HealthCare</Link>
                                <Link to="/Industry" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Insurance</Link>
                                <Link to="/Industry" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Franchise</Link>
                                <Link to="/Industry" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Aviation</Link>
                                <Link to="/Industry" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Non Profit</Link>
                                <Link to="/Industry" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Construction</Link>
                                <Link to="/Industry" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Maritime</Link>
                                <Link to="/Industry" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Energy</Link>
                                <Link to="/Industry" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Telecom</Link>
                                <Link to="/Industry" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Automotive</Link>
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
                            <div className="absolute bg-white shadow-lg mt-1 rounded-md z-10 whitespace-nowrap">
                                <Link to="/Partners" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Partners</Link>
                                <Link to="/Aboutus" className="block px-4 py-2 text-gray-900 hover:text-blue-500">About Us</Link>
                            </div>
                        )}
                    </div>
                    <div className='flex items-center space-x-2'>
                        <button className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300">
                            <IoIosSearch size={24} />
                        </button>
                        <Link to="/RequestDemo">
                            <button className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300">
                                Request Demo
                            </button>
                        </Link>
                    </div>
                </div>
                {/* Mobile navigation menu */}
                <div className={`lg:hidden ${open ? 'block' : 'hidden'} fixed inset-0 bg-black bg-opacity-75 z-20`}>
                    <div className="fixed top-0 right-0 w-64 bg-white h-full z-30 overflow-y-auto">
                        <button onClick={menuClicked} aria-label="Close menu" className="ml-auto p-4">
                            <IoMdClose size={24} />
                        </button>
                        <nav className="flex flex-col space-y-4 px-4 py-8">
                            <Link to="/Features" className="px-4 py-2 text-gray-900 hover:text-blue-500">Features</Link>
                            <div>
                                <button
                                    className="px-4 py-2 text-gray-900 hover:text-blue-500 flex items-center"
                                    onClick={() => toggleDropdown('solutions')}
                                >
                                    Solutions <IoMdArrowDropdown className="ml-1" />
                                </button>
                                {dropdownOpen.solutions && (
                                    <div className="ml-4">
                                        <Link to="/Corporatetrainingplatform" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Learning Management System</Link>
                                        <Link to="/Corporatetrainingplatform" className="block px-4 py-2 text-gray-900 hover:text-blue-500">LMS Mobile App</Link>
                                        <Link to="/Corporatetrainingplatform" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Learning and Development Platform</Link>
                                        <Link to="/Corporatetrainingplatform" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Learning Experience Platform</Link>
                                        <Link to="/Peopledevelpmentplatform" className="block px-4 py-2 text-gray-900 hover:text-blue-500">People Development Platform</Link>
                                        <Link to="/Corporatetrainingplatform" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Corporate Training Platform </Link>
                                        <Link to="/Contentcreationservices" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Content Creation Services</Link>
                                        <Link to="/Performancereviewsystem" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Performance Review System</Link>
                                    </div>
                                )}
                            </div>
                            <div>
                                <button
                                    className="px-4 py-2 text-gray-900 hover:text-blue-500 flex items-center"
                                    onClick={() => toggleDropdown('resources')}
                                >
                                    Resources <IoMdArrowDropdown className="ml-1" />
                                </button>
                                {dropdownOpen.resources && (
                                    <div className="ml-4">
                                        <Link to="/Casestudy" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Case Studies</Link>
                                        <Link to="/Blog" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Blogs</Link>
                                        <Link to="/Help" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Help</Link>
                                        <Link to="/Usecase" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Use Case</Link>
                                        <Link to="/Videos" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Videos</Link>
                                        <Link to="/Download" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Downloads</Link>
                                        <Link to="/ReleaseNotes" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Release Notes</Link>
                                    </div>
                                )}
                            </div>
                            <div>
                                <button
                                    className="px-4 py-2 text-gray-900 hover:text-blue-500 flex items-center"
                                    onClick={() => toggleDropdown('industry')}
                                >
                                    Industry <IoMdArrowDropdown className="ml-1" />
                                </button>
                                {dropdownOpen.industry && (
                                    <div className="ml-4">
                                        <Link to="/Industry" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Retail</Link>
                                        <Link to="/Industry" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Manufacturing</Link>
                                        <Link to="/Industry" className="block px-4 py-2 text-gray-900 hover:text-blue-500">HealthCare</Link>
                                        <Link to="/Industry" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Insurance</Link>
                                        <Link to="/Industry" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Franchise</Link>
                                        <Link to="/Industry" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Aviation</Link>
                                        <Link to="/Industry" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Non Profit</Link>
                                        <Link to="/Industry" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Construction</Link>
                                        <Link to="/Industry" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Maritime</Link>
                                        <Link to="/Industry" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Energy</Link>
                                        <Link to="/Industry" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Telecom</Link>
                                        <Link to="/Industry" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Automotive</Link>
                                    </div>
                                )}
                            </div>
                            <Link to="/Pricing" className="px-4 py-2 text-gray-900 hover:text-blue-500">Pricing</Link>
                            <div>
                                <button
                                    className="px-4 py-2 text-gray-900 hover:text-blue-500 flex items-center"
                                    onClick={() => toggleDropdown('company')}
                                >
                                    Company <IoMdArrowDropdown className="ml-1" />
                                </button>
                                {dropdownOpen.company && (
                                    <div className="ml-4">
                                        <Link to="/Partners" className="block px-4 py-2 text-gray-900 hover:text-blue-500">Partners</Link>
                                <Link to="/Aboutus" className="block px-4 py-2 text-gray-900 hover:text-blue-500">About Us</Link>
                            </div>
                                )}
                            </div>
                            <div className='flex items-center space-x-2'>
                                <button className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300">
                                    <IoIosSearch size={24} />
                                </button>
                                <Link to="/RequestDemo">
                                    <button className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300">
                                        Request Demo
                                    </button>
                                </Link>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;