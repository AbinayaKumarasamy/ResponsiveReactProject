import React from 'react';
import { FaBook, FaBrain, FaCalendarAlt, FaChartLine, FaCloud, FaCogs, FaComments, FaGamepad, FaGraduationCap, FaJournalWhills, FaMobileAlt, FaRegCheckSquare, FaRoute, FaStream, FaSync, FaTasks, FaUserFriends, FaUsers, FaVrCardboard } from 'react-icons/fa';

const features = [
    { name: "Learning Path", icon: <FaCalendarAlt /> },
    { name: "To-Do's", icon: <FaTasks /> },
    { name: "SOPs and Books", icon: <FaBook /> },
    { name: "AI/ML Powered Course Recommendations", icon: <FaBrain /> },
    { name: "Courses with AR/VR Experiences", icon: <FaVrCardboard /> },
    { name: "SCORM Compliance", icon: <FaRegCheckSquare /> },
    { name: "Competency Management & Mapping", icon: <FaCogs /> },
    { name: "Interactive Feed", icon: <FaComments /> },
    { name: "Multiple Learning Modes", icon: <FaGraduationCap /> },
    { name: "Mentoring", icon: <FaUserFriends /> },
    { name: "Streamlined Course Management", icon: <FaStream /> },
    { name: "User Management", icon: <FaUsers /> },
    { name: "Gamification", icon: <FaGamepad /> },
    { name: "eLearning Mobile App", icon: <FaMobileAlt /> },
    { name: "Events", icon: <FaCalendarAlt /> },
    { name: "Learning Bytes", icon: <FaCalendarAlt /> },
    { name: "Tracking & Reporting", icon: <FaChartLine /> },
    { name: "Flexible Cloud Hosting", icon: <FaCloud /> },
    { name: "Learning Journey", icon: <FaRoute /> },
    { name: "Integration with Learning Content", icon: <FaSync /> },
    { name: "Learning Journal", icon: <FaJournalWhills /> },
];

const Solution = () => {
    return (
        <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center p-10">
            <h1 className="text-3xl font-bold text-center mb-8">Explore the complete learning management software</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 sm:px-8 lg:px-16">
                {features.map((feature, index) => (
                    <div key={index} className="bg-white shadow-md rounded-lg p-4 flex items-center">
                        <div className="text-3xl mr-4">{feature.icon}</div>
                        <div className="flex-1">{feature.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Solution;