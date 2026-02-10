import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

    const isActive = (path: string) => location.pathname === path;

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [mobileMenuOpen]);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`fixed top-0 right-0 left-0 z-50 flex justify-between items-center px-6 md:px-12 py-5 md:py-6 transition-all duration-300 ${scrolled || mobileMenuOpen ? 'bg-background/80 backdrop-blur-md border-b border-gray-100' : 'bg-transparent'
                    }`}
            >
                <Link
                    to="/"
                    className="text-2xl font-black tracking-tight cursor-pointer text-black hover:text-gray-700 transition-colors z-50 relative"
                    onClick={() => setMobileMenuOpen(false)}
                >
                    TIXX Connect
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 text-sm font-semibold tracking-wide items-center">
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
                    <a
                        href="https://tixx.im"
                        target="_blank"
                        rel="noreferrer"
                        className="ml-4 px-5 py-2 border border-black rounded-full hover:bg-black hover:text-white transition-all text-xs font-bold flex items-center"
                    >
                        TIXX APP ↗
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden z-50 relative p-2"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <div className="w-6 flex flex-col items-end gap-1.5">
                        <motion.span
                            animate={{ rotate: mobileMenuOpen ? 45 : 0, y: mobileMenuOpen ? 8 : 0 }}
                            className="block w-6 h-0.5 bg-black"
                        />
                        <motion.span
                            animate={{ opacity: mobileMenuOpen ? 0 : 1 }}
                            className="block w-4 h-0.5 bg-black"
                        />
                        <motion.span
                            animate={{ rotate: mobileMenuOpen ? -45 : 0, y: mobileMenuOpen ? -8 : 0, width: mobileMenuOpen ? 24 : 16 }}
                            className="block w-4 h-0.5 bg-black"
                        />
                    </div>
                </button>
            </motion.nav >

            {/* Mobile Fullscreen Menu */}
            <AnimatePresence>
                {
                    mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 z-40 bg-white pt-32 px-6 md:hidden"
                        >
                            <div className="flex flex-col gap-8 text-3xl font-bold">
                                {['AGENCY', 'SERVICE', 'CONTACT'].map((item, i) => (
                                    <motion.div
                                        key={item}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                    >
                                        <Link
                                            to={`/${item.toLowerCase()}`}
                                            className="block border-b border-gray-100 pb-4"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            <span className={`flex items-center justify-between ${isActive(`/${item.toLowerCase()}`) ? 'text-accent' : 'text-black'}`}>
                                                {item}
                                                {isActive(`/${item.toLowerCase()}`) && <span className="text-sm bg-black text-white px-2 py-1 rounded-full">Active</span>}
                                            </span>
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )
                }
            </AnimatePresence >
        </>
    );
};

export default Navbar;
