import React from 'react';

const Experience = () => {
    return (
        <section id="experience" className="relative w-full py-20 bg-[#0a0a0a] text-slate-300 overflow-hidden">
            {/* Background elements */}
            <div className="absolute left-0 top-1/3 w-1/3 h-1/2 bg-linear-to-r from-violet-900/10 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-16 reveal-on-scroll opacity-0">
                    <h2 className="text-sm font-bold tracking-widest text-violet-500 uppercase mb-2">Professional Journey</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Experience</h3>
                    <div className="w-16 h-1 bg-violet-500 mx-auto mt-6 rounded-full" />
                </div>

                {/* Experience Card */}
                <div className="max-w-4xl mx-auto">
                    <div className="relative group bg-slate-900/80 rounded-2xl p-6 md:p-10 border border-violet-500/20 hover:border-violet-500/50 shadow-xl shadow-violet-900/10 hover:shadow-violet-900/20 transition-all duration-300">
                        
                        {/* Glow effect on hover */}
                        <div className="absolute inset-0 bg-linear-to-b from-violet-600/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-8 relative z-10">
                            <div>
                                <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-violet-400 transition-colors">Freelance Full-Stack Developer</h4>
                                <div className="flex flex-wrap items-center gap-2 text-lg font-medium text-violet-300">
                                    <a href="https://www.futurinx.com/" target="_blank" rel="noopener noreferrer" className="hover:text-violet-100 hover:underline transition-colors shrink-0">
                                        Agency: Futurinx
                                    </a>
                                    <span className="text-slate-600 hidden sm:inline">|</span>
                                    <span className="text-slate-400 text-base">Open to new opportunities</span>
                                </div>
                            </div>
                            <div className="inline-flex items-center px-4 py-2 rounded-full bg-violet-950/40 border border-violet-800/60 shadow-inner shrink-0 self-start">
                                <span className="w-2 h-2 rounded-full bg-violet-400 mr-2 animate-pulse" />
                                <span className="text-sm font-semibold text-violet-200">April 2026 – Present</span>
                            </div>
                        </div>

                        <div className="relative z-10 text-slate-300 leading-relaxed sm:text-lg">
                            <ul className="space-y-5 md:space-y-4">
                                <li className="flex items-start gap-4">
                                    <svg className="w-5 h-5 md:w-6 md:h-6 text-violet-500 shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    <p className="text-base"><strong className="text-slate-200 font-semibold block sm:inline">Full-Stack Delivery: </strong>Contracted via Futurinx to build production-ready software, including migrating a legacy platform for international client Fly Green Exports into a dynamic Next.js App.</p>
                                </li>
                                <li className="flex items-start gap-4">
                                    <svg className="w-5 h-5 md:w-6 md:h-6 text-violet-500 shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    <p className="text-base"><strong className="text-slate-200 font-semibold block sm:inline">Custom UI & Dashboards: </strong>Designed and implemented complex UI systems (e.g., Neumorphism) to create highly intuitive inventory and banner management workflows for clients.</p>
                                </li>
                                <li className="flex items-start gap-4">
                                    <svg className="w-5 h-5 md:w-6 md:h-6 text-violet-500 shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    <p className="text-base"><strong className="text-slate-200 font-semibold block sm:inline">Modern Tech Stack: </strong>Levraged Next.js, React, Tailwind CSS, and Firebase to develop robust, scalable, and performant web content.</p>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
