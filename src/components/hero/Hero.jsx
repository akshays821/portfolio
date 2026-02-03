import React from 'react';
import profileImage from '../../assets/Akshayshaji.webp';
import resume from '../../assets/akshayshaji.pdf';

const Hero = () => {
    return (
        <section id="home" className="relative w-full min-h-screen flex items-center bg-[#0a0a0a] text-white overflow-hidden pt-16">
            {/* Background Gradients/Shapes - Dark & Neon */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#0a0a0a] to-[#0a0a0a] z-0" />

            {/* 3D Abstract Elements / Glowing Orbs - Toned Down */}
            <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-violet-900/10 blur-[120px] animate-pulse z-0" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-slate-900/20 blur-[120px] animate-pulse delay-700 z-0" />

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-0 mix-blend-overlay"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">

                    {/* Left Content */}
                    <div className="flex-1 text-center md:text-left space-y-8 animate-fade-in-up">
                        <div className="relative">
                            {/* Floating Code Snippet - Decorational */}
                            {/* Floating Code Snippet - Decorational */}
                            <div className="absolute top-2 right-0 bg-slate-900/80 backdrop-blur-md border border-slate-700/50 p-3 md:p-4 rounded-lg shadow-2xl transform rotate-3 animate-float opacity-60 hover:opacity-100 transition-opacity duration-300 z-0 scale-75 md:scale-100 origin-top-right">
                                <div className="flex gap-1.5 mb-2">
                                    <div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-red-500" />
                                    <div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-yellow-500" />
                                    <div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-green-500" />
                                </div>
                                <code className="text-[8px] md:text-[10px] text-violet-300 font-mono">
                                    <span className="text-pink-400">const</span> developer = <span className="text-yellow-300">{"{"}</span><br />
                                    &nbsp;&nbsp;name: <span className="text-green-300">'Akshay Shaji'</span>,<br />
                                    &nbsp;&nbsp;skills: [<span className="text-green-300">'MERN'</span>, <span className="text-green-300">'AI'</span>]<br />
                                    <span className="text-yellow-300">{"}"}</span>;
                                </code>
                            </div>

                            <div className="space-y-4 relative z-10">
                                <h2 className="text-xl md:text-2xl font-semibold text-violet-400 tracking-wide uppercase">
                                    Hello, I'm
                                </h2>
                                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                                    Akshay Shaji
                                </h1>
                                <div className="text-xl md:text-2xl font-medium text-slate-300 h-auto">
                                    Full Stack Developer <span className="text-slate-600 mx-2">|</span>
                                    <span className="text-violet-400 font-bold whitespace-nowrap">
                                        MERN Stack • Automation • AI
                                    </span>
                                </div>
                            </div>
                        </div>

                        <p className="text-lg text-slate-400 max-w-2xl leading-relaxed mx-auto md:mx-0 border-l-4 border-slate-800 pl-4">
                            Building end-to-end web applications with AI-assisted workflows and solid core fundamentals.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start pt-4">
                            <a
                                href="#projects"
                                className="group relative px-8 py-3.5 bg-violet-600 hover:bg-violet-500 text-white rounded-full font-semibold shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transition-all duration-300 transform hover:-translate-y-1 text-center flex items-center justify-center gap-2 overflow-hidden"
                            >
                                <span className="relative z-10">View Projects</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-fuchsia-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                            <a
                                href={resume}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-3.5 bg-transparent border border-slate-700 text-slate-300 hover:text-white hover:border-fuchsia-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] rounded-full font-semibold transition-all duration-300 text-center flex items-center justify-center gap-2"
                            >
                                Download Resume
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Right Image/Illustration */}
                    <div className="flex-1 flex justify-center md:justify-end relative mt-10 md:mt-0">
                        <div className="relative w-80 h-80 md:w-[500px] md:h-[500px]">
                            {/* Decorative rings - Neon Style */}
                            <div className="absolute inset-0 border border-slate-700 rounded-full animate-[spin_30s_linear_infinite]" />
                            <div className="absolute inset-4 border border-dashed border-slate-800 rounded-full animate-[spin_20s_linear_infinite_reverse]" />
                            <div className="absolute inset-0 border-2 border-transparent border-t-fuchsia-500/30 border-r-violet-500/30 rounded-full animate-[spin_15s_linear_infinite]" />

                            {/* Image Container */}
                            <div className="absolute inset-10 rounded-full overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] bg-slate-900 border-4 border-slate-800/50 flex items-center justify-center group z-10 backdrop-blur-sm">
                                <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                                    <img
                                        src={profileImage}
                                        alt="Akshay Shaji"
                                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transform transition-all duration-500 group-hover:scale-110"
                                    />
                                    {/* Overlay gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity duration-300"></div>
                                </div>
                            </div>

                            {/* Float Elements (Icons) */}
                            {/* React - Top Left */}
                            <div className="hidden md:block absolute top-8 left-8 bg-slate-800/80 backdrop-blur-md p-3.5 rounded-2xl border border-slate-700 shadow-xl animate-bounce duration-[3000ms] z-20 hover:scale-110 transition-transform cursor-pointer">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="w-9 h-9" alt="React" />
                            </div>

                            {/* Angular - Top Right */}
                            <div className="hidden md:block absolute top-8 right-8 bg-slate-800/80 backdrop-blur-md p-3.5 rounded-2xl border border-slate-700 shadow-xl animate-bounce duration-[4000ms] delay-700 z-20 hover:scale-110 transition-transform cursor-pointer">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" className="w-9 h-9" alt="Angular" />
                            </div>

                            {/* Node.js - Bottom Right */}
                            <div className="hidden md:block absolute bottom-8 right-8 bg-slate-800/80 backdrop-blur-md p-3.5 rounded-2xl border border-slate-700 shadow-xl animate-bounce duration-[3500ms] delay-500 z-20 hover:scale-110 transition-transform cursor-pointer">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" className="w-9 h-9" alt="NodeJS" />
                            </div>

                            {/* MongoDB - Bottom Left */}
                            <div className="hidden md:block absolute bottom-8 left-8 bg-slate-800/80 backdrop-blur-md p-3.5 rounded-2xl border border-slate-700 shadow-xl animate-bounce duration-[4500ms] delay-200 z-20 hover:scale-110 transition-transform cursor-pointer">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" className="w-9 h-9" alt="MongoDB" />
                            </div>

                            {/* HTML5 - Bottom Center */}
                            <div className="hidden md:block absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-slate-800/80 backdrop-blur-md p-3 rounded-2xl border border-slate-700 shadow-xl animate-bounce duration-[5000ms] delay-300 z-20 hover:scale-110 transition-transform cursor-pointer">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className="w-8 h-8" alt="HTML5" />
                            </div>

                            {/* CSS3 - Top Center */}
                            <div className="hidden md:block absolute -top-10 left-1/2 transform -translate-x-1/2 bg-slate-800/80 backdrop-blur-md p-3 rounded-2xl border border-slate-700 shadow-xl animate-bounce duration-[5500ms] delay-100 z-20 hover:scale-110 transition-transform cursor-pointer">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className="w-8 h-8" alt="CSS3" />
                            </div>

                            {/* JavaScript - Right Center */}
                            <div className="hidden md:block absolute top-1/2 -right-10 transform -translate-y-1/2 bg-slate-800/80 backdrop-blur-md p-3 rounded-2xl border border-slate-700 shadow-xl animate-bounce duration-[4200ms] delay-[150ms] z-20 hover:scale-110 transition-transform cursor-pointer">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="w-8 h-8" alt="JavaScript" />
                            </div>

                            {/* n8n - Left Center */}
                            <div className="hidden md:block absolute top-1/2 -left-10 transform -translate-y-1/2 bg-slate-800/80 backdrop-blur-md p-3 rounded-2xl border border-slate-700 shadow-xl animate-bounce duration-[3800ms] delay-[400ms] z-20 hover:scale-110 transition-transform cursor-pointer">
                                <img src="https://n8n.io/favicon.ico" className="w-8 h-8" alt="n8n" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <style jsx global>{`
                @keyframes fade-in-up {
                    0% { opacity: 0; transform: translateY(20px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-up {
                    animation: fade-in-up 0.8s ease-out forwards;
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0) rotate(-6deg); }
                    50% { transform: translateY(-10px) rotate(-6deg); }
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
};

export default Hero;
