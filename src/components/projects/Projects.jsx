import React, { useState } from 'react';
import shopAI from '../../assets/shopAI.png';
import connectHub from '../../assets/connecthub.png';
import pharmPal from '../../assets/pharmpal.png';
import hacaLanding from '../../assets/hacaLanding.jpeg';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            id: 1,
            title: "ShopAI – AI-Powered E-Commerce App",
            shortDescription: "Full-stack e-commerce platform with AI-powered chatbot and semantic search.",
            fullDescription: "Built a full-stack e-commerce platform featuring an AI-powered chatbot and semantic search that converts natural language into structured database queries. Implemented secure PhonePe payments, scalable global state management with Redux Toolkit, and secure JWT-based authentication.",
            image: shopAI,
            tags: ["MERN Stack", "GenAI", "Redux", "PhonePe"],
            frontendCode: "https://github.com/akshays821/e-commerce-app-frontend",
            backendCode: "https://github.com/akshays821/e-commerce-app-backend",
            liveLink: "https://ecommerce-frontend-pi-plum.vercel.app/"
        },
        {
            id: 2,
            title: "connectHUB – Social Media App",
            shortDescription: "Social media platform with real-time messaging and notifications.",
            fullDescription: "Developed a social media platform with authentication, post creation, profile management, and media uploads. Features real-time messaging and notifications utilizing Socket.IO, secured with JWT-based authentication.",
            image: connectHub,
            tags: ["React", "Node.js", "Socket.IO", "MongoDB"],
            frontendCode: "https://github.com/akshays821/connecthub-frontend",
            backendCode: "https://github.com/akshays821/connecthub-backend",
            liveLink: "https://connecthub-frontend-five.vercel.app/home"
        },
        {
            id: 3,
            title: "PharmPal – AI Health Assistant",
            shortDescription: "AI-powered assistant for medication understanding and usage instructions.",
            fullDescription: "Built an AI-powered assistant to help users better understand medications and usage instructions. Leverages AI to provide clear, accessible health information.",
            image: pharmPal,
            tags: ["AI", "HealthTech", "Web App"],
            // No source code links for PharmPal
            liveLink: "https://pharm-pal.lovable.app/"
        },
        {
            id: 4,
            title: "Haca Landing Page",
            shortDescription: "Responsive landing page based on Haris&Co. Figma design.",
            fullDescription: "This is a React JS application built with Vite and Tailwind CSS, referring the figma design of Haris&Co. landing page. Optimized for both small screens and big screens.",
            image: hacaLanding,
            tags: ["React JS", "Vite", "Tailwind CSS"],
            frontendCode: "https://github.com/akshays821/Haca-Landiing-Page",
            liveLink: "https://haca-landing-page.vercel.app/"
        }
    ];

    const openModal = (project) => {
        setSelectedProject(project);
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    };

    const closeModal = () => {
        setSelectedProject(null);
        document.body.style.overflow = 'unset';
    };

    return (
        <section id="projects" className="relative w-full py-20 bg-[#0a0a0a] text-slate-300 overflow-hidden">
            {/* Background elements */}
            <div className="absolute right-0 top-1/4 w-1/3 h-1/2 bg-linear-to-l from-purple-900/10 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <div className="text-center mb-16 animate-fade-in-up">
                    <h2 className="text-sm font-bold tracking-widest text-violet-500 uppercase mb-2">My Work</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h3>
                    <div className="w-16 h-1 bg-violet-500 mx-auto mt-6 rounded-full" />
                </div>

                {/* Projects Content */}
                <div className="space-y-16">
                    {/* Featured Project - ShopAI */}
                    {projects.filter(p => p.id === 1).map(project => (
                        <div key={project.id} className="space-y-4">
                            <h4 className="text-xl font-semibold text-violet-400 flex items-center gap-2">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                                Spotlight Project
                            </h4>
                            <div
                                onClick={() => openModal(project)}
                                className="group relative bg-slate-900 rounded-2xl overflow-hidden border border-violet-500/30 hover:border-violet-500/60 shadow-2xl shadow-violet-900/20 hover:shadow-violet-900/40 transition-all duration-300 cursor-pointer grid grid-cols-1 lg:grid-cols-5"
                            >
                                {/* Image Section - Spans 3 cols */}
                                <div className="lg:col-span-3 h-64 lg:h-96 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-violet-900/10 group-hover:bg-transparent transition-colors duration-300 z-10" />
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>

                                {/* Content Section - Spans 2 cols */}
                                <div className="lg:col-span-2 p-8 lg:p-10 flex flex-col justify-center bg-slate-900/90 backdrop-blur-sm">
                                    <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-violet-400 transition-colors">{project.title}</h3>
                                    <p className="text-slate-400 text-lg mb-6 leading-relaxed hidden sm:block">
                                        {project.fullDescription.substring(0, 150)}...
                                    </p>
                                    <p className="text-slate-400 text-base mb-6 sm:hidden">
                                        {project.shortDescription}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.tags.map((tag, idx) => (
                                            <span key={idx} className="bg-violet-950/50 text-violet-200 px-3 py-1.5 rounded-lg text-sm border border-violet-900/50">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center gap-2 text-violet-400 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                                        View Details <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Other Projects Grid */}
                    <div className="space-y-4">
                        <h4 className="text-xl font-semibold text-slate-400">More Projects</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {projects.filter(p => p.id !== 1).map((project) => (
                                <div
                                    key={project.id}
                                    onClick={() => openModal(project)}
                                    className="group relative bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-slate-600 transition-all duration-300 cursor-pointer shadow-lg hover:-translate-y-2"
                                >
                                    {/* Image Overlay Gradient */}
                                    <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-transparent to-transparent opacity-80 z-10" />

                                    {/* Image */}
                                    <div className="h-48 overflow-hidden">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="relative z-20 p-6">
                                        <h4 className="text-xl font-bold text-white mb-2 group-hover:text-violet-400 transition-colors">{project.title}</h4>
                                        <p className="text-slate-400 text-sm mb-4 line-clamp-2">{project.shortDescription}</p>

                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.slice(0, 3).map((tag, idx) => (
                                                <span key={idx} className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded border border-slate-700">
                                                    {tag}
                                                </span>
                                            ))}
                                            {project.tags.length > 3 && (
                                                <span className="text-xs text-slate-500 px-1 py-1">+{project.tags.length - 3}</span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Project Modal */}
            {selectedProject && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
                    <div
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
                        onClick={closeModal}
                    ></div>

                    <div className="relative bg-slate-900 w-full max-w-3xl rounded-2xl border border-slate-700 shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-fade-in-up">

                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-red-500/80 text-white rounded-full transition-colors backdrop-blur-md"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>

                        {/* Modal Image */}
                        <div className="h-64 sm:h-80 w-full relative shrink-0">
                            <img
                                src={selectedProject.image}
                                alt={selectedProject.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-slate-900 to-transparent"></div>
                        </div>

                        {/* Modal Content */}
                        <div className="p-8 overflow-y-auto">
                            <h3 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h3>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {selectedProject.tags.map((tag, idx) => (
                                    <span key={idx} className="text-xs bg-violet-900/30 text-violet-300 px-3 py-1 rounded-full border border-violet-800/50">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="mb-8">
                                <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3">About Project</h4>
                                <p className="text-slate-300 leading-relaxed text-lg">
                                    {selectedProject.fullDescription}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-4 pt-6 border-t border-slate-800">
                                {selectedProject.frontendCode && (
                                    <a
                                        href={selectedProject.frontendCode}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium transition-colors"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                        Frontend Code
                                    </a>
                                )}
                                {selectedProject.backendCode && (
                                    <a
                                        href={selectedProject.backendCode}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium transition-colors"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                        Backend Code
                                    </a>
                                )}
                                {selectedProject.liveLink && (
                                    <a
                                        href={selectedProject.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-6 py-3 bg-violet-600 hover:bg-violet-500 text-white rounded-lg font-medium transition-colors shadow-lg shadow-violet-900/20"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Projects;
