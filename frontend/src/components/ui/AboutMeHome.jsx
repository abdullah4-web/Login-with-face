import React from 'react'

const AboutMeHome = () => {
    return (
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl -z-10"></div>

            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl">
                {[...Array(30)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full animate-float"
                        style={{
                            background: `hsla(${Math.random() * 360}, 80%, 70%, 0.7)`,
                            width: `${Math.random() * 8 + 2}px`,
                            height: `${Math.random() * 8 + 2}px`,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDuration: `${Math.random() * 20 + 10}s`,
                            animationDelay: `${Math.random() * 5}s`,
                            filter: 'blur(1px)'
                        }}
                    />
                ))}
            </div>

            <div className="text-center mb-16">
                <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
                    About <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Me</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-12 bg-white dark:bg-gray-800/50 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700">
                {/* Developer Photo with Glow Effect */}
                <div className="lg:w-1/3 flex justify-center relative group">
                    <div className="absolute -inset-2 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-2xl opacity-75 blur-lg group-hover:opacity-100 transition-all duration-500"></div>

                    <div className="relative w-64 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800 transform transition-all duration-500 group-hover:scale-105 z-10">
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-500 opacity-10 animate-gradient-shift"></div>
                        <img
                            src="https://abdullahshahportfolio.netlify.app/static/media/new.edd91da745edbd514c82.png"
                            alt="Developer"
                            className="w-full h-full object-cover relative z-10"
                        />
                    </div>

                    {/* Social Media Links */}
                    <div className="absolute -bottom-6 left-0 right-0 flex justify-center gap-4 z-20">
                        {[
                            { name: 'GitHub', icon: 'github', color: 'gray-800', hover: 'gray-700' },
                            { name: 'LinkedIn', icon: 'linkedin', color: 'blue-600', hover: 'blue-500' },
                            { name: 'Twitter', icon: 'twitter', color: 'sky-500', hover: 'sky-400' },
                            { name: 'Instagram', icon: 'instagram', color: 'pink-600', hover: 'pink-500' },
                            { name: 'Facebook', icon: 'facebook', color: 'blue-700', hover: 'blue-600' }
                        ].map((social, index) => (
                            <a
                                key={social.name}
                                href="#"
                                className={`w-12 h-12 rounded-full bg-${social.color} text-white flex items-center justify-center 
                                transform transition-all duration-300 hover:bg-${social.hover} hover:scale-110 hover:shadow-lg
                                shadow-md hover:shadow-xl`}
                                aria-label={social.name}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    {social.icon === 'github' && (
                                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                    )}
                                    {social.icon === 'linkedin' && (
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    )}
                                    {social.icon === 'twitter' && (
                                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                    )}
                                    {social.icon === 'instagram' && (
                                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.023.047 1.351.058 3.807.058h.468c2.456 0 2.784-.011 3.807-.058.975-.045 1.504-.207 1.857-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.047-1.023.058-1.351.058-3.807v-.468c0-2.456-.011-2.784-.058-3.807-.045-.975-.207-1.504-.344-1.857a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                                    )}
                                    {social.icon === 'facebook' && (
                                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                    )}
                                </svg>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Developer Bio */}
                <div className="lg:w-2/3 space-y-8">
                    <div>
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                            Full Stack Developer at <span className="text-indigo-600 dark:text-indigo-400">Jovera Group</span>
                        </h3>
                        <p className="text-xl text-purple-600 dark:text-purple-400 font-medium">
                            Abu Dhabi, UAE | MERN | SaaS | ERP | CRM | HRM | MVP
                        </p>
                    </div>

                    <div className="space-y-6">
                        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                            I specialize in <span className="font-semibold text-indigo-600 dark:text-indigo-400">SaaS (Software as a Service)</span> development, offering end-to-end expertise in designing, building, deploying, and maintaining scalable, secure, and high-performance web-based platforms.
                        </p>
                        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                            With <span className="font-semibold">few years of hands-on experience</span>, I have successfully delivered robust software solutions for startups, SMEs, and enterprises across multiple industries and domains.
                        </p>
                        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                            My goal is not just to build software but to deliver <span className="font-semibold">business-driven, reliable, and future-ready systems</span> that solve real problems.
                        </p>

                    </div>

                    <div className="flex flex-wrap gap-3">
                        {['React.js', 'Node.js', 'MongoDB', 'Express.js', 'AWS', 'Firebase', 'TypeScript', 'GraphQL', 'Docker', 'Kubernetes'].map((tech, index) => (
                            <span
                                key={tech}
                                className={`px-4 py-2 rounded-full text-sm font-medium 
                                ${index % 6 === 0 ? 'bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200' : ''}
                                ${index % 6 === 1 ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200' : ''}
                                ${index % 6 === 2 ? 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200' : ''}
                                ${index % 6 === 3 ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' : ''}
                                ${index % 6 === 4 ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200' : ''}
                                ${index % 6 === 5 ? 'bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200' : ''}
                                transform transition-all duration-300 hover:scale-105 hover:shadow-md`}
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMeHome