import React from 'react';

const About = () => {
    const education = [
        {
            role: "MERN Full Stack Development with AI",
            company: "Tech School HACA",
            period: "Completed",
            description: "Intensive coursework covering React.js, Node.js, Express.js, MongoDB, and AI-assisted development workflows."
        },
        {
            role: "Higher Secondary Education (+2)",
            company: "Board of Public Examinations, Kerala",
            period: "Completed"
        }
    ];

    const skills = [
        "React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "Firebase Firestore", "Redux Toolkit",
        "HTML5", "CSS3", "JavaScript (ES6+)", "Tailwind CSS", "Socket.IO", "Git", "RESTful APIs", "JWT", "Postman", "AI-Assisted Dev", "Workflow Automation"
    ];

    return (
        <section id="about" className="relative w-full py-20 bg-slate-900/50 text-slate-300 overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-violet-900/10 to-transparent pointer-events-none" />
            <div className="absolute -left-20 top-20 w-72 h-72 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <div className="text-center mb-16 reveal-on-scroll opacity-0">
                    <h2 className="text-sm font-bold tracking-widest text-fuchsia-500 uppercase mb-2">My Story</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-white">About Me</h3>
                    <div className="w-16 h-1 bg-violet-500 mx-auto mt-4 rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">

                    {/* Left Column: Bio & Personal Info */}
                    <div className="space-y-8 reveal-on-scroll opacity-0">
                        <div className="bg-slate-800/80 p-8 rounded-2xl border border-slate-700/50 shadow-xl hover:shadow-violet-500/10 transition-all duration-300">
                            <h4 className="text-2xl font-semibold text-white mb-4">
                                Hello, I'm <span className="text-violet-400">Akshay Shaji</span>
                            </h4>
                            <p className="text-lg font-medium text-slate-200 mb-2">
                                Freelance Full-Stack Developer
                            </p>
                            <p className="text-sm text-slate-400 mb-6 flex items-center gap-2">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                Kozhikode, Kerala
                            </p>

                            <p className="leading-relaxed text-slate-300 mb-4">
                                Freelance Full-Stack Developer with real-world experience delivering end-to-end web applications for clients, specializing in MongoDB, Express.js, Node.js, React.js, Next.js, and Firebase.
                                I use a strongly AI-assisted development workflow to architect solutions, debug efficiently, and iterate faster from concept to production.
                            </p>

                            <p className="leading-relaxed text-slate-300 mb-6 border-l-4 border-violet-500 pl-4 bg-slate-800/30 py-2 rounded-r-lg">
                                <span className="text-violet-400 font-semibold">Beyond coding,</span> I leverage AI tools to build basic implementation of <strong>automation workflows</strong> using n8n and Zapier, bridging the gap between development and efficiency.
                            </p>


                        </div>


                    </div>

                    {/* Right Column: Experience & Skills */}
                    <div className="space-y-8 reveal-on-scroll opacity-0" style={{ animationDelay: '0.2s' }}>
                        {/* Skills */}
                        <div className="mb-10">
                            <h4 className="text-2xl font-semibold text-white mb-6">Technical Arsenal</h4>
                            <div className="flex flex-wrap gap-3">
                                {skills.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="group relative px-4 py-2 bg-slate-800 rounded-lg text-slate-300 font-medium border border-slate-700 hover:border-violet-500/50 hover:text-violet-400 hover:bg-slate-800/80 transition-all duration-300 cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Education & Training */}
                        <div>
                            <h4 className="text-2xl font-semibold text-white mb-6">Education & Training</h4>
                            <div className="space-y-6">
                                {education.map((edu, index) => (
                                    <div key={index} className="relative pl-8 border-l border-slate-700 hover:border-violet-500 transition-colors duration-300 group">
                                        <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-slate-600 group-hover:bg-violet-500 transition-colors duration-300" />
                                        <h5 className="text-lg font-semibold text-white group-hover:text-violet-400 transition-colors duration-200">
                                            {edu.role}
                                        </h5>
                                        <span className="text-sm font-medium text-slate-400 block mb-2">{edu.company}</span>
                                        <p className="text-slate-400 text-sm leading-relaxed">
                                            {edu.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
