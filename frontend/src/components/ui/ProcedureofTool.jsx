import React from 'react'

const ProcedureofTool = () => {
  return (
    <>
         <div className="bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white dark:bg-gray-800 shadow-xl rounded-lg overflow-hidden">
            <div className="p-2">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                How to Use This Tool
              </h2>

              <div className="space-y-8">
                {/* Step 1 */}
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 font-bold text-xl">
                      1
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Account Setup
                    </h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400">
                      <li>Sign in or create a new account</li>
                      <li>Complete your profile with required information</li>
                      <li>Add at least one AI model API key (OpenAI, Gemini, etc.)</li>
                      <li>Connect your social media accounts (LinkedIn, Facebook)</li>
                    </ul>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 font-bold text-xl">
                      2
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Content Generation
                    </h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400">
                      <li>Enter your content prompt in the text area</li>
                      <li>Select your preferred AI model</li>
                      <li>Choose the social media platforms for posting</li>
                      <li>Click "Generate Content" button</li>
                    </ul>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 font-bold text-xl">
                      3
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Review & Post
                    </h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400">
                      <li>Review the generated content</li>
                      <li>Edit if needed or regenerate with different parameters</li>
                      <li>Click "Copy to Clipboard" to save for later</li>
                      <li>Click "Post to Selected Platforms" when ready</li>
                      <li>Confirm the posting in the popup dialog</li>
                    </ul>
                  </div>
                </div>

                {/* Tips Section */}
                <div className="mt-10 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-2">
                    Pro Tips
                  </h3>
                  <ul className="list-disc pl-5 space-y-1 text-blue-700 dark:text-blue-300">
                    <li>Be specific with your prompts for better results</li>
                    <li>Different AI models may perform better for different content types</li>
                    <li>Review generated content before posting</li>
                    <li>Save successful prompts for future use</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 dark:bg-gray-900 py-12 px-1 sm:px-6 lg:px-3">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white dark:bg-gray-800 shadow-xl rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Facebook Integration Requirements
              </h2>

              <div className="space-y-8">
                <div className="prose dark:prose-invert max-w-none">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Required Facebook Permissions
                  </h3>

                  <p className="mb-4">
                    To enable full posting capabilities to Facebook Pages, your app will need the following permissions:
                  </p>

                  <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-6">
                    <h4 className="font-medium text-red-900 dark:text-white mb-2">Essential Permissions:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li className="text-red-600"><code>pages_manage_engagement</code> - Manage engagement on the Page</li>
                      <li className="text-red-600"><code>pages_manage_posts</code> - Create, edit, and delete posts</li>
                      <li className="text-red-600"><code>pages_read_engagement</code> - Read Page engagement data</li>
                      <li className="text-red-600"><code>pages_read_user_engagement</code> - Read user engagement data</li>
                      <li className="text-red-600"><code>publish_video</code> - Required for video content publishing</li>
                    </ul>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Page Access Requirements
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="border border-green-200 dark:border-green-800 rounded-lg p-4 bg-green-50 dark:bg-green-900/20">
                      <h4 className="font-medium text-green-800 dark:text-green-200 mb-2">Page Owner/Admin</h4>
                      <p className="text-green-700 dark:text-green-300">
                        If your users own/manage the Page, they must be able to perform:
                      </p>
                      <ul className="list-disc pl-5 mt-2 text-green-700 dark:text-green-300">
                        <li>CREATE_CONTENT</li>
                        <li>MANAGE</li>
                        <li>MODERATE</li>
                      </ul>
                    </div>

                    <div className="border border-blue-200 dark:border-blue-800 rounded-lg p-4 bg-blue-50 dark:bg-blue-900/20">
                      <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-2">Non-Page Owners</h4>
                      <p className="text-blue-700 dark:text-blue-300">
                        For users who don't own the Page, you'll need:
                      </p>
                      <ul className="list-disc pl-5 mt-2 text-blue-700 dark:text-blue-300">
                        <li>User access token</li>
                        <li>Page Public Content Access feature</li>
                        <li>Additional review from Facebook</li>
                      </ul>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Implementation Steps
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 mt-1">
                        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 text-sm font-bold">
                          1
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white">Facebook Developer Setup</h4>
                        <p className="text-gray-600 dark:text-gray-400 mt-1">
                          Create an app in Facebook Developer Portal and configure OAuth settings
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 mt-1">
                        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 text-sm font-bold">
                          2
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white">Permission Review</h4>
                        <p className="text-gray-600 dark:text-gray-400 mt-1">
                          Submit your app for review to request advanced permissions
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 mt-1">
                        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 text-sm font-bold">
                          3
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white">Token Management</h4>
                        <p className="text-gray-600 dark:text-gray-400 mt-1">
                          Implement token exchange and storage with proper security measures
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                    <h4 className="font-medium text-yellow-800 dark:text-yellow-200 mb-2">Important Notes</h4>
                    <ul className="list-disc pl-5 space-y-1 text-yellow-700 dark:text-yellow-300">
                      <li>Some permissions require Business Verification</li>
                      <li>Page access tokens are page-specific and user-specific</li>
                      <li>Tokens expire and need refresh mechanisms</li>
                      <li>Consider implementing webhooks for post status updates</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProcedureofTool
