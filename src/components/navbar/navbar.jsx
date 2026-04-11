import React, { useState } from 'react';
import resume from '../../assets/Akshay_Shaji_Resume_v3.pdf';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: 'Home', href: '#' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' }
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-slate-900/95 border-b border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo Section */}
                    <div className="flex-shrink-0 flex items-center gap-2">
                        <div className="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center transform rotate-3 hover:rotate-0 transition-all duration-300 shadow-lg shadow-violet-500/30">
                            <span className="text-white font-bold text-xl">A</span>
                        </div>
                        <span className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-300 bg-clip-text text-transparent hover:from-violet-300 hover:to-fuchsia-200 transition-all duration-300 cursor-pointer tracking-tight">
                            Akshay Shaji
                        </span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-1">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="relative px-4 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white transition-all duration-300 group overflow-hidden"
                                >
                                    <span className="relative z-10">{item.name}</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-fuchsia-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-violet-500 to-fuchsia-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                                </a>
                            ))}
                            <a
                                href={resume}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-4 px-5 py-2 bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium rounded-full shadow-lg shadow-violet-600/30 hover:shadow-violet-600/50 transition-all duration-300 transform hover:-translate-y-0.5"
                            >
                                Resume
                            </a>
                        </div>
                    </div>

                    {/* Mobile Menu Button (Hamburger) */}
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none transition-colors duration-200"
                        >
                            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-900 border-b border-slate-800">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="text-slate-300 hover:text-white hover:bg-slate-800 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                        >
                            {item.name}
                        </a>
                    ))}
                    <a
                        href={resume}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-violet-600 hover:bg-violet-500 text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 mt-4 mx-3 text-center"
                    >
                        Resume
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
