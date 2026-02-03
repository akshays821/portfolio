import React, { useState, useRef } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSending, setIsSending] = useState(false);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSending(true);

        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form.current,
                {
                    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
                }
            )
            .then(
                () => {
                    toast.success("Message sent successfully!");
                    setFormData({ name: '', email: '', message: '' });
                    setIsSending(false);
                },
                (error) => {
                    console.error('EmailJS Error:', error.text);
                    toast.error("Failed to send: " + error.text);
                    setIsSending(false);
                },
            );
    };





    const contactLinks = [
        {
            name: "Email",
            value: "akshayshaji821@gmail.com",
            link: "mailto:akshayshaji821@gmail.com",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            )
        },
        {
            name: "Phone",
            value: "+91 7909138117",
            link: "tel:+917909138117",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            )
        },
        {
            name: "WhatsApp",
            value: "Chat on WhatsApp",
            link: "https://wa.me/917909138117",
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" /></svg>
            )
        },
        {
            name: "LinkedIn",
            value: "Akshay Shaji",
            link: "https://www.linkedin.com/in/akshay-shaji-418385361/",
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
            )
        },
        {
            name: "GitHub",
            value: "akshays821",
            link: "https://github.com/akshays821",
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
            )
        }
    ];

    return (
        <section id="contact" className="relative w-full py-20 bg-slate-900 text-slate-300 overflow-hidden">
            <Toaster position="bottom-right" reverseOrder={false} />
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay pointer-events-none" />
            <div className="absolute bottom-[-100px] left-[-100px] w-80 h-80 bg-violet-600/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <div className="text-center mb-16 animate-fade-in-up">
                    <h2 className="text-sm font-bold tracking-widest text-fuchsia-500 uppercase mb-2">Get In Touch</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Contact Me</h3>
                    <p className="text-slate-400 max-w-xl mx-auto">
                        Feel free to reach out for collaborations, job opportunities, or just to say hi!
                    </p>
                    <div className="w-16 h-1 bg-violet-500 mx-auto mt-6 rounded-full" />
                </div>

                <div className="flex flex-col items-center justify-center">

                    {/* Contact Links Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
                        {contactLinks.map((contact, index) => (
                            <a
                                key={index}
                                href={contact.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative bg-slate-800/50 hover:bg-slate-800 border border-slate-700 hover:border-violet-500/50 p-6 rounded-2xl flex items-center gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-900/20"
                            >
                                <div className="p-3 bg-slate-900 rounded-xl text-fuchsia-500 group-hover:text-white group-hover:bg-violet-600 transition-colors duration-300">
                                    {contact.icon}
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm text-slate-400 group-hover:text-violet-300 font-medium tracking-wide uppercase mb-0.5">{contact.name}</span>
                                    <span className="text-white font-semibold group-hover:text-white truncate max-w-[200px] sm:max-w-none">{contact.value}</span>
                                </div>
                            </a>
                        ))}
                    </div>

                    {/* Placeholder for Form (Future) */}
                    {/* Contact Form */}
                    <div className="mt-16 w-full max-w-3xl bg-slate-800/30 p-8 rounded-2xl border border-slate-700/50 backdrop-blur-sm animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        <h4 className="text-2xl font-bold text-white mb-8 text-center">Send Me a Message</h4>
                        <form ref={form} className="space-y-6" onSubmit={sendEmail}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="user_name" className="text-sm font-medium text-slate-400">Name</label>
                                    <input
                                        type="text"
                                        name="user_name"
                                        id="user_name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors"
                                        placeholder="Your Name"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="user_email" className="text-sm font-medium text-slate-400">Email</label>
                                    <input
                                        type="email"
                                        name="user_email"
                                        id="user_email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors"
                                        placeholder="your@email.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-slate-400">Message</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors resize-none"
                                    placeholder="Your message here..."
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSending}
                                value="Send"
                                className={`w-full md:w-auto px-8 py-3 bg-gradient-to-r from-violet-600 to-fuchsia-500 hover:from-violet-500 hover:to-fuchsia-400 text-white font-semibold rounded-lg shadow-lg shadow-violet-600/20 transform hover:-translate-y-0.5 transition-all duration-200 ${isSending ? 'opacity-70 cursor-not-allowed' : ''}`}
                            >
                                {isSending ? 'Sending...' : 'Connect with me'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
