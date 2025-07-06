import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { FiArrowRight, FiBookOpen, FiShare2, FiLayers } from 'react-icons/fi';

const HeroHome = () => {
    return (
        <>
            <header className="hero py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="hero-content flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-1/2 space-y-6">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                            InstaContent AI<br />
                            <span className="text-indigo-600 dark:text-indigo-400"> PostCraft AI</span>
                        </h1>

                        <p className="subtext text-xl text-gray-600 dark:text-gray-300">
                            Posts ready to publish on Facebook and LinkedIn in seconds with AI
                            <span className="font-semibold text-indigo-600 dark:text-indigo-400"> OpenAI</span>,
                            <span className="font-semibold text-blue-600 dark:text-blue-400"> Gemini</span> &amp;
                            <span className="font-semibold text-yellow-600 dark:text-yellow-400"> Hugging Face</span>.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="cta-primary px-8 py-4 text-lg font-semibold rounded-lg transition-all hover:shadow-lg bg-indigo-600 hover:bg-indigo-700 text-white dark:bg-indigo-700 dark:hover:bg-indigo-600">
                                Try It Now <FiArrowRight className="inline ml-2" />
                            </button>

                            <div className="typing-animation bg-gray-100 dark:bg-gray-700 rounded-lg p-4 flex items-center">
                                <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mr-3">
                                    <div className="w-6 h-6 rounded-full bg-indigo-600 dark:bg-indigo-400 animate-pulse"></div>
                                </div>
                                <TypeAnimation
                                    sequence={[
                                        'Blog post about AI trends...',
                                        2000,
                                        'LinkedIn article draft...',
                                        2000,
                                        'Marketing copy for product...',
                                        2000
                                    ]}
                                    wrapper="span"
                                    speed={50}
                                    repeat={Infinity}
                                    className="text-gray-700 dark:text-gray-300 font-medium"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="hero-illustration w-full lg:w-1/2 relative px-4 sm:px-6 lg:px-0 mb-12 lg:mb-0">
                        <div className="relative w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[500px]">
                            {/* Background layers */}
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 dark:from-indigo-700 dark:to-purple-800 rounded-3xl shadow-2xl transform rotate-1"></div>
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-500 dark:from-indigo-600 dark:to-purple-700 rounded-3xl shadow-xl transform -rotate-1"></div>

                            {/* Content layer */}
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-300 to-purple-400 dark:from-indigo-500 dark:to-purple-600 rounded-3xl flex items-center justify-center p-4 sm:p-6 md:p-8">
                                <div className="text-center max-w-full sm:max-w-xl">
                                    {/* Main Heading */}
                                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 tracking-tight leading-snug">
                                        PostPilot AI
                                    </h1>

                                    {/* Sub Heading */}
                                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white mb-4 sm:mb-6 leading-snug">
                                        AI-powered social media automation
                                    </h2>

                                    {/* Description */}
                                    <p className="text-base sm:text-lg md:text-xl text-white/90 text-justify leading-relaxed hyphens-auto">
                                        Generate impactful, ready-to-publish content with AI and post directly to Facebook and LinkedIn — all from one
                                        streamlined dashboard. Whether you're a marketer, entrepreneur, or small business, PostPilot AI helps you stay
                                        consistent, save time, and grow your digital presence with ease.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </header>
        </>
    )
}

export default HeroHome
