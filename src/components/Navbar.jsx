import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isActive = (path) => location.pathname === path;

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 right-0 left-0 z-50 flex justify-between items-center px-8 md:px-12 py-6 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-md border-b border-gray-100' : 'bg-transparent'
                }`}
        >
            <Link
                to="/"
                className="text-2xl font-bold tracking-tight cursor-pointer text-black hover:text-gray-700 transition-colors"
            >
                TIXX
            </Link>
            <div className="flex space-x-8 text-sm font-semibold tracking-wide">
                {['AGENCY', 'SERVICE', 'CONTACT'].map((item) => {
                    const path = `/${item.toLowerCase()}`;
                    return (
                        <Link
                            key={item}
                            to={path}
                            className={`transition-colors duration-300 uppercase relative group ${isActive(path) ? 'text-black' : 'text-gray-500 hover:text-black'
                                }`}
                        >
                            {item}
                            {isActive(path) && (
                                <motion.div
                                    layoutId="underline"
                                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent"
                                />
                            )}
                        </Link>
                    )
                })}
            </div>
        </motion.nav>
    );
};

export default Navbar;
