import React from 'react'
import { FiArrowRight, FiBookOpen, FiShare2, FiLayers } from 'react-icons/fi';

const PopularPostHome = () => {
  return (
    <>
     <section className="popular-posts py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gray-50 dark:bg-gray-700 rounded-3xl mb-20">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
          Popular <span className="text-indigo-600 dark:text-indigo-400">AI-Generated Posts</span>
        </h2>

        <div className="post-grid grid grid-cols-1 md:grid-cols-3 gap-8">
          <article className="post-card bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className="h-48 bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-700 dark:to-purple-800"></div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">The Future of AI in Content Marketing</h3>
              <p className="excerpt text-gray-600 dark:text-gray-300 mb-6">
                Discover how AI is revolutionizing content creation and what it means
                for marketers in 2024. Learn about the latest tools and strategies...
              </p>
              <button className="read-more text-indigo-600 dark:text-indigo-400 font-semibold flex items-center hover:text-indigo-800 dark:hover:text-indigo-300">
                Read More <FiArrowRight className="ml-2" />
              </button>
            </div>
          </article>

          <article className="post-card bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className="h-48 bg-gradient-to-r from-blue-500 to-cyan-600 dark:from-blue-700 dark:to-cyan-800"></div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">10 Ways to Boost Your LinkedIn Engagement</h3>
              <p className="excerpt text-gray-600 dark:text-gray-300 mb-6">
                AI-generated strategies to increase your professional visibility and
                network growth. Actionable tips you can implement today...
              </p>
              <button className="read-more text-indigo-600 dark:text-indigo-400 font-semibold flex items-center hover:text-indigo-800 dark:hover:text-indigo-300">
                Read More <FiArrowRight className="ml-2" />
              </button>
            </div>
          </article>

          <article className="post-card bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className="h-48 bg-gradient-to-r from-purple-500 to-pink-600 dark:from-purple-700 dark:to-pink-800"></div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Understanding Large Language Models</h3>
              <p className="excerpt text-gray-600 dark:text-gray-300 mb-6">
                A beginner's guide to how GPT-4, Gemini and other LLMs work behind the
                scenes. Understand the technology powering your content...
              </p>
              <button className="read-more text-indigo-600 dark:text-indigo-400 font-semibold flex items-center hover:text-indigo-800 dark:hover:text-indigo-300">
                Read More <FiArrowRight className="ml-2" />
              </button>
            </div>
          </article>
        </div>
      </section>
    </>
  )
}

export default PopularPostHome
