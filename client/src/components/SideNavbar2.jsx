import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const SideNavbar = () => {
    useEffect(() => {
        const handleScroll = () => {
            const elementVisible = 150;
            const elementInvisible = -150;

            // Animations for elements with entry classes
            const animateEntries = (selector, animationClass) => {
                document.querySelectorAll(selector).forEach((element) => {
                    const windowHeight = window.innerHeight;
                    const elementTop = element.getBoundingClientRect().top;
                    if (elementTop < windowHeight - elementVisible) {
                        element.classList.add(animationClass);
                        element.classList.remove('invisible');
                    }
                    if (elementTop > windowHeight - elementInvisible) {
                        element.classList.remove(animationClass);
                        element.classList.add('invisible');
                    }
                });
            };

            animateEntries('.animated_entry_left', 'fadeInLeft');
            animateEntries('.animated_entry_right', 'fadeInRight');
            animateEntries('.animated_entry_up', 'fadeInUp');
            animateEntries('.animated_entry_down', 'fadeInDown');
            animateEntries('.animated_fade', 'fadeIn');

            // Navbar active link handling
            const sections = document.querySelectorAll('.section');
            const navLinks = document.querySelectorAll('.menu .lat-nav a');
            let current = '';

            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                if (window.scrollY >= sectionTop - window.innerHeight * 0.7) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach((link) => {
                link.classList.remove('lat-nav-link-selected');
                if (link.classList.contains(current)) {
                    link.classList.add('lat-nav-link-selected');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed top-1/2 left-0 transform -translate-y-1/2 z-20 bg-red-500 p-2.5">
            <nav className="flex flex-col items-start">
                <div className="flex items-center mb-5">
                    <NavLink to="#top" className="w-8 h-8 bg-gray-400 rounded-full transition-transform duration-100 ease-in-out hover:bg-white hover:scale-110"></NavLink>
                    <span className="ml-2 px-2 rounded-lg bg-white text-blue-500 font-bold opacity-0 transition-opacity duration-1000 ease-in-out group-hover:opacity-100 group-hover:flex">INÍCIO</span>
                </div>
                <div className="flex items-center mb-5">
                    <NavLink to="#activities" className="w-8 h-8 bg-gray-400 rounded-full transition-transform duration-100 ease-in-out hover:bg-white hover:scale-110"></NavLink>
                    <span className="ml-2 px-2 rounded-lg bg-white text-blue-500 font-bold opacity-0 transition-opacity duration-1000 ease-in-out group-hover:opacity-100 group-hover:flex">ATIVIDADES</span>
                </div>
                <div className="flex items-center mb-5">
                    <NavLink to="#team" className="w-8 h-8 bg-gray-400 rounded-full transition-transform duration-100 ease-in-out hover:bg-white hover:scale-110"></NavLink>
                    <span className="ml-2 px-2 rounded-lg bg-white text-blue-500 font-bold opacity-0 transition-opacity duration-1000 ease-in-out group-hover:opacity-100 group-hover:flex">EQUIPA</span>
                </div>
            </nav>
        </div>
    );
};

export default SideNavbar;
