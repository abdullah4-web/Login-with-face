import React from 'react'
import { FiArrowRight, FiBookOpen, FiShare2, FiLayers } from 'react-icons/fi';

const FeatureHome = () => {
  return (
   <>
    <section className="features py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
           <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
             Powerful <span className="text-indigo-600 dark:text-indigo-400">AI Content Creation</span>
           </h2>
   
           <div className="feature-cards grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="feature-card bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700 hover:border-indigo-100 dark:hover:border-indigo-900">
               <div className="icon ai-icon w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-2xl flex items-center justify-center mb-6">
                 <FiBookOpen className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
               </div>
               <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">AI-Powered Generation</h3>
               <p className="text-gray-600 dark:text-gray-300">
                 Choose from top AI models including OpenAI GPT-4, Google Gemini, and
                 Hugging Face APIs. Generate content that matches your brand voice.
               </p>
             </div>
   
             <div className="feature-card bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700 hover:border-blue-100 dark:hover:border-blue-900">
               <div className="icon publish-icon w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-2xl flex items-center justify-center mb-6">
                 <FiShare2 className="w-8 h-8 text-blue-600 dark:text-blue-400" />
               </div>
               <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Multi-Platform Publishing</h3>
               <p className="text-gray-600 dark:text-gray-300">
                 Post directly to Facebook, LinkedIn, or publish within our platform with
                 one click. Schedule posts for optimal engagement times.
               </p>
             </div>
   
             <div className="feature-card bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700 hover:border-purple-100 dark:hover:border-purple-900">
               <div className="icon dashboard-icon w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-2xl flex items-center justify-center mb-6">
                 <FiLayers className="w-8 h-8 text-purple-600 dark:text-purple-400" />
               </div>
               <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Personalized Dashboard</h3>
               <p className="text-gray-600 dark:text-gray-300">
                 Manage all your content, drafts, and profile in one beautiful workspace.
                 Track performance metrics and optimize your strategy.
               </p>
             </div>
           </div>
         </section>
   </>
  )
}

export default FeatureHome
