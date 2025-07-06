import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-100 dark:bg-gray-900 py-12 mt-16 border-t border-gray-200 dark:border-gray-800">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                        {/* Footer left - Branding and social links */}
                        <div className="flex flex-col items-center md:items-start space-y-4">
                            <div className="flex items-center space-x-2">
                                <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <span className="text-xl font-bold text-gray-900 dark:text-white">SocialPilot</span>
                            </div>
                            <p className="text-gray-600 dark:text-gray-400 text-center md:text-left max-w-md">
                                Building digital experiences that matter with clean, efficient code and modern technologies.
                            </p>
                            <div className="flex space-x-4">
                                {['github', 'linkedin', 'twitter', 'instagram'].map((social) => (
                                    <a
                                        key={social}
                                        href="#"
                                        className="text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                                        aria-label={social}
                                    >
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path fillRule="evenodd" clipRule="evenodd" d={`M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z`} />
                                        </svg>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Footer middle - Quick links */}
                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase">
                                    Navigation
                                </h3>
                                <div className="mt-4 space-y-2">
                                    {['Home', 'Projects', 'Services', 'About', 'Contact'].map((link) => (
                                        <a
                                            key={link}
                                            href="#"
                                            className="text-gray-600 hover:text-indigo-600 dark:hover:text-indigo-400 dark:text-gray-400 block text-sm transition-colors duration-300"
                                        >
                                            {link}
                                        </a>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase">
                                    Legal
                                </h3>
                                <div className="mt-4 space-y-2">
                                    {['Privacy Policy', 'Terms of Use', 'Cookie Policy'].map((link) => (
                                        <a
                                            key={link}
                                            href="#"
                                            className="text-gray-600 hover:text-indigo-600 dark:hover:text-indigo-400 dark:text-gray-400 block text-sm transition-colors duration-300"
                                        >
                                            {link}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Footer right - Contact info */}
                        <div className="space-y-4">
                            <h3 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase">
                                Get in touch
                            </h3>
                            <div className="mt-4 space-y-2">
                                <div className="flex items-start space-x-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                    </svg>
                                    <span className="text-gray-600 dark:text-gray-400">sadiquiabdullah4@gmail.com</span>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-gray-600 dark:text-gray-400">Abu Dhabi, UAE</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-500 dark:text-gray-400 text-sm">
                            &copy; {new Date().getFullYear()} SocialPoilt. All rights reserved.
                        </p>
                        <div className="mt-4 md:mt-0 flex space-x-6">
                            <a href="#" className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 text-sm">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 text-sm">
                                Terms of Service
                            </a>
                            <a href="#" className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 text-sm">
                                Cookies
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
