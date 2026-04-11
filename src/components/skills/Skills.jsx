import React, { useState } from 'react';

const Skills = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = ['All', 'Frontend', 'Backend', 'Database', 'Automation & Tools'];

    const skillsData = [
        // Frontend
        { name: 'React.js', category: 'Frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Next.js', category: 'Frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', darkBg: true },
        { name: 'Redux Toolkit', category: 'Frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
        { name: 'JavaScript', category: 'Frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'HTML5', category: 'Frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS3', category: 'Frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'TailwindCSS', category: 'Frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },

        // Backend
        { name: 'Node.js', category: 'Backend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'Express.js', category: 'Backend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', darkBg: true },
        { name: 'Socket.IO', category: 'Backend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg', darkBg: true },
        { name: 'JWT', category: 'Backend', icon: 'https://jwt.io/img/pic_logo.svg' },

        // Database
        { name: 'Firebase Firestore', category: 'Database', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
        { name: 'MongoDB', category: 'Database', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
        { name: 'Mongoose', category: 'Database', icon: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongoose/mongoose.png' },
        { name: 'MongoDB Atlas', category: 'Database', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },

        // Tools & AI
        { name: 'Git', category: 'Automation & Tools', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'GitHub', category: 'Automation & Tools', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', darkBg: true },
        { name: 'Postman', category: 'Automation & Tools', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
        { name: 'Zapier', category: 'Automation & Tools', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/zapier/zapier-original.svg' },
        { name: 'n8n', category: 'Automation & Tools', icon: 'https://n8n.io/favicon.ico' }
    ];

    const filteredSkills = activeCategory === 'All'
        ? skillsData
        : skillsData.filter(skill => skill.category === activeCategory);

    return (
        <section id="skills" className="relative w-full py-20 bg-[#0a0a0a] text-slate-300 overflow-hidden">
            {/* Background elements */}
            <div className="absolute left-0 bottom-0 w-1/2 h-1/2 bg-gradient-to-tr from-violet-900/5 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <div className="text-center mb-12 reveal-on-scroll opacity-0">
                    <h2 className="text-sm font-bold tracking-widest text-fuchsia-500 uppercase mb-2">Expertise</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Skills</h3>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        A comprehensive toolkit of technologies and frameworks I use to build scalable, resilient, and modern software solutions.
                    </p>
                    <div className="w-16 h-1 bg-violet-500 mx-auto mt-6 rounded-full" />
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12 reveal-on-scroll opacity-0" style={{ animationDelay: '0.1s' }}>
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${activeCategory === category
                                ? 'bg-violet-600 text-white shadow-lg shadow-violet-600/25 scale-105'
                                : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white border border-slate-700'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Skills Grid - Horizontal Scroll on Mobile, Grid on Desktop */}
                <div className="flex overflow-x-auto pb-6 -mx-4 px-4 snap-x gap-4 sm:grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 sm:gap-6 sm:overflow-visible sm:pb-0 sm:mx-0 sm:px-0 scrollbar-hide">
                    {filteredSkills.map((skill, index) => (
                        <div
                            key={index}
                            className="min-w-[140px] sm:min-w-0 snap-center group relative bg-slate-900/50 border border-slate-800 p-6 rounded-xl flex flex-col items-center justify-center gap-4 hover:border-violet-500/50 hover:bg-slate-800/80 transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className={`w-16 h-16 rounded-full flex items-center justify-center p-3 mb-2 transition-transform duration-500 group-hover:scale-110 ${skill.darkBg ? 'bg-white/90' : 'bg-slate-800/50'}`}>
                                <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
                            </div>
                            <h4 className="text-white font-medium text-center whitespace-nowrap">{skill.name}</h4>

                            {/* Hover Progress Bar Effect (Decorative) */}
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-xl" />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Skills;
