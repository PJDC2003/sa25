import { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { AuthContext } from '../hooks/AuthContext';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const { isAuthenticated } = useContext(AuthContext); // authentication status

    const handleNav = () => {
        setNav(!nav);
    };

    const navItems = [
        { id: 1, text: 'Line-up', path: '/line-up' },
        { id: 2, text: 'Companies', path: '/companies' },
        { id: 3, text: 'Speakers', path: '/speakers' },
        { id: 4, text: 'Prizes', path: '/prizes' },
        { id: 5, text: 'And More', path: '/and-more' },
        { id: 6, text: isAuthenticated ? 'Login' : 'Sign Up', path: isAuthenticated ? '/login' : '/sign-up' },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full flex justify-between items-center py-2 h-16 px-8 text-white z-40 bg-lightgrey">
            {/* AEROTEC + SA + DATE */}
            <div className="static z-50 flex items-center h-8 my-2">
                <a target="_blank" rel="noopener noreferrer" href="https://aerotec.pt" className="drop-shadow-xl">
                    <img src="./src/assets/img/logos/institutional/AEROTEC_short.png" alt="Aerotec" className="max-h-8" />
                </a>
                <div className="w-0 h-8 border border-gray-500 mr-2 ml-2 sm:mr-2 sm:ml-4"></div>
                <a href="/" className="drop-shadow-xl">
                    <img src="./src/assets/img/logos/institutional/SA_short.png" alt="Semana Aeroespacial" className="max-h-12" />
                </a>
                <div className="ml-2 sm:ml-4 mr-2 sm:w-50 py-auto">
                    <p className="font-semibold text-xs">February 17th to 21st @Técnico</p>
                    <p className="text-xs">IST - Alameda</p>
                </div>
            </div>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex gap-6">
                {navItems.map((item) => (
                    <li key={item.id} className="cursor-pointer font-bold text-sm transition-colors duration-300 hover:text-primary_light uppercase">
                        <NavLink to={item.path} className={({ isActive }) => (isActive ? 'text-primary_light' : '')} end>
                            {item.text}
                        </NavLink>
                    </li>
                ))}
            </ul>

            {/* Mobile Navigation Icon */}
            <div onClick={handleNav} className="block lg:hidden z-50">
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>

            {/* Mobile Navigation Menu */}
            <ul className={`fixed lg:hidden z-30 top-0 left-0 w-full h-auto bg-lightgrey transition-transform duration-500 ${nav ? 'translate-y-0' : 'translate-y-[-100%]'} `}>
                {/* Mobile Navigation Items */}
                <li className="h-16 border-b border-white"></li>
                {navItems.map((item) => (
                    <li key={item.id} className="p-4 font-bold text-sm text-center transition-colors duration-300 hover:text-primary_light uppercase cursor-pointer">
                        <NavLink to={item.path} className={({ isActive }) => (isActive ? 'text-primary_light' : '')} end>
                            {item.text}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
