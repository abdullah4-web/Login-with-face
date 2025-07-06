import React, { useState, useEffect } from 'react';
import { FiEye, FiEyeOff, FiCopy, FiEdit, FiCheck, FiUser, FiMail, FiKey, FiLock } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { toast } from 'react-toastify';

const Profile = () => {
  const initialUser = useSelector((state) => state.auth.user) || {};
  const htoken = useSelector((state) => state.auth.user.token);
  const [editMode, setEditMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    avatar: '',
    huggingfaceToken: '',
    facebookPageId: '',
    facebookAccessToken: '',
    linkedinAccessToken: '',
    openAiSecretKey: '',
  });
  const [showTokens, setShowTokens] = useState({
    huggingface: false,
    facebook: false,
    linkedin: false,
    openai: false
  });

  // Initialize form data when user data loads or changes
  useEffect(() => {
    setFormData({
      name: initialUser.name || '',
      email: initialUser.email || '',
      password: '',
      avatar: initialUser.avatar || '',
      huggingfaceToken: initialUser.huggingfaceToken || '',
      facebookPageId: initialUser.facebookPageId || '',
      facebookAccessToken: initialUser.facebookAccessToken || '',
      linkedinAccessToken: initialUser.linkedinAccessToken || '',
      openAiSecretKey: initialUser.openAiSecretKey || '',
    });
  }, [initialUser]);

  const toggleTokenVisibility = (token) => {
    setShowTokens(prev => ({ ...prev, [token]: !prev[token] }));
  };

  const copyToClipboard = (text) => {
    if (text) {
      navigator.clipboard.writeText(text);
      toast.success('Copied to clipboard!');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    try {
      setIsLoading(true);
      
      // Prepare the data to send (exclude empty password unless changed)
      const dataToSend = { ...formData };
      if (!dataToSend.password) {
        delete dataToSend.password;
      }

      const response = await axios.put('https://ai-agent-fb-and-linkedin-backend.vercel.app/api/users/update', dataToSend, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${htoken}`
        }
      });

      if (response.data.success) {
        toast.success('Profile updated successfully!');
        setEditMode(false);
        // Here you might want to update the Redux store with the new user data
      } else {
        throw new Error(response.data.message || 'Failed to update profile');
      }
    } catch (error) {
      console.error('Update error:', error);
      toast.error(error.response?.data?.message || error.message || 'Failed to update profile');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    setFormData({
      name: initialUser.name || '',
      email: initialUser.email || '',
      password: '',
      avatar: initialUser.avatar || '',
      huggingfaceToken: initialUser.huggingfaceToken || '',
      facebookPageId: initialUser.facebookPageId || '',
      facebookAccessToken: initialUser.facebookAccessToken || '',
      linkedinAccessToken: initialUser.linkedinAccessToken || '',
      openAiSecretKey: initialUser.openAiSecretKey || '',
    });
    setEditMode(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white dark:bg-gray-800 shadow-md dark:shadow-gray-700/50 rounded-lg overflow-hidden transition-colors duration-300">
          {/* Profile Header */}
          <div className="bg-indigo-600 dark:bg-indigo-800 px-6 py-8 text-center transition-colors duration-300">
            <div className="relative mx-auto h-32 w-32 rounded-full border-4 border-white dark:border-gray-200 shadow-lg">
              {editMode ? (
                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-full flex items-center justify-center">
                  <label className="cursor-pointer text-white p-2 bg-indigo-600 rounded-full hover:bg-indigo-700 transition-colors">
                    <FiEdit className="h-5 w-5" />
                    <input 
                      type="file" 
                      className="hidden" 
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files[0];
                        if (file) {
                          const reader = new FileReader();
                          reader.onload = (event) => {
                            setFormData(prev => ({ ...prev, avatar: event.target.result }));
                          };
                          reader.readAsDataURL(file);
                        }
                      }}
                    />
                  </label>
                </div>
              ) : null}
              <img 
                src={formData.avatar || 'https://via.placeholder.com/150'} 
                alt={formData.name} 
                className="h-full w-full object-cover rounded-full"
              />
            </div>
            <h1 className="mt-4 text-2xl font-bold text-white">
              {editMode ? (
                <div className="flex justify-center">
                  <div className="relative w-64">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiUser className="text-indigo-200" />
                    </div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-indigo-600 text-white text-center border-b border-indigo-300 focus:outline-none focus:border-white pl-8 w-full"
                    />
                  </div>
                </div>
              ) : (
                formData.name || 'No name provided'
              )}
            </h1>
            <p className="text-indigo-200 mt-2">
              {editMode ? (
                <div className="flex justify-center">
                  <div className="relative w-64">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiMail className="text-indigo-200" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-indigo-600 text-indigo-200 text-center border-b border-indigo-300 focus:outline-none focus:border-white pl-8 w-full"
                    />
                  </div>
                </div>
              ) : (
                formData.email || 'No email provided'
              )}
            </p>
          </div>

          {/* Profile Details */}
          <div className="px-6 py-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                <FiKey className="inline mr-2" />
                API Credentials
              </h2>
              <div className="flex space-x-2">
                {editMode ? (
                  <>
                    <button
                      onClick={handleCancel}
                      className="px-4 py-2 rounded-md flex items-center bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-white transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSave}
                      disabled={isLoading}
                      className={`px-4 py-2 rounded-md flex items-center transition-colors ${
                        isLoading ? 'bg-gray-400' : 'bg-green-600 hover:bg-green-700'
                      } text-white`}
                    >
                      {isLoading ? (
                        'Saving...'
                      ) : (
                        <>
                          <FiCheck className="mr-2" /> Save
                        </>
                      )}
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => setEditMode(true)}
                    className="px-4 py-2 rounded-md flex items-center bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-white transition-colors"
                  >
                    <FiEdit className="mr-2" /> Edit
                  </button>
                )}
              </div>
            </div>

            {/* Password Field (only in edit mode) */}
            {editMode && (
              <div className="mb-6 border border-gray-200 dark:border-gray-700 rounded-lg p-4 transition-colors duration-300">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  <FiLock className="inline mr-2" />
                  New Password (leave blank to keep current)
                </label>
                <div className="flex items-center">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="flex-1 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900 dark:text-white transition-colors duration-300"
                    placeholder="Enter new password"
                  />
                  <button
                    onClick={() => setShowPassword(!showPassword)}
                    className="ml-2 p-2 text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
                  >
                    {showPassword ? <FiEyeOff /> : <FiEye />}
                  </button>
                </div>
              </div>
            )}

            {/* Token Fields - Two Column Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <TokenField 
                label="HuggingFace Token"
                value={formData.huggingfaceToken}
                name="huggingfaceToken"
                show={showTokens.huggingface}
                editMode={editMode}
                onToggle={() => toggleTokenVisibility('huggingface')}
                onCopy={copyToClipboard}
                onChange={handleInputChange}
                icon={<FiKey />}
              />

              <TokenField 
                label="Facebook Page ID"
                value={formData.facebookPageId}
                name="facebookPageId"
                show={true}
                editMode={editMode}
                onCopy={copyToClipboard}
                onChange={handleInputChange}
                icon={<FiKey />}
              />

              <TokenField 
                label="Facebook Access Token"
                value={formData.facebookAccessToken}
                name="facebookAccessToken"
                show={showTokens.facebook}
                editMode={editMode}
                onToggle={() => toggleTokenVisibility('facebook')}
                onCopy={copyToClipboard}
                onChange={handleInputChange}
                icon={<FiKey />}
              />

              <TokenField 
                label="LinkedIn Access Token"
                value={formData.linkedinAccessToken}
                name="linkedinAccessToken"
                show={showTokens.linkedin}
                editMode={editMode}
                onToggle={() => toggleTokenVisibility('linkedin')}
                onCopy={copyToClipboard}
                onChange={handleInputChange}
                icon={<FiKey />}
              />

              <TokenField 
                label="OpenAI Secret Key"
                value={formData.openAiSecretKey}
                name="openAiSecretKey"
                show={showTokens.openai}
                editMode={editMode}
                onToggle={() => toggleTokenVisibility('openai')}
                onCopy={copyToClipboard}
                onChange={handleInputChange}
                icon={<FiKey />}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TokenField = ({ label, value = '', name, show, editMode, onToggle, onCopy, onChange, icon }) => {
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 transition-colors duration-300">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
        {icon && <span className="inline-block mr-2">{icon}</span>}
        {label}
      </label>
      <div className="flex items-center">
        {editMode ? (
          <input
            type={show ? "text" : "password"}
            name={name}
            value={value}
            onChange={onChange}
            className="flex-1 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900 dark:text-white transition-colors duration-300"
          />
        ) : (
          <div className="flex-1 bg-gray-100 dark:bg-gray-700 rounded-md px-3 py-2 overflow-x-auto text-gray-900 dark:text-white transition-colors duration-300">
            {show ? value || 'Not set' : '•'.repeat(value ? (value.length > 10 ? 10 : value.length) : 6)}
          </div>
        )}
        <div className="flex ml-2 space-x-1">
          {onToggle && (
            <button
              onClick={onToggle}
              className="p-2 text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
              aria-label={show ? "Hide token" : "Show token"}
            >
              {show ? <FiEyeOff /> : <FiEye />}
            </button>
          )}
          <button
            onClick={() => onCopy(value)}
            className={`p-2 rounded-full transition-colors duration-300 ${
              value 
                ? 'text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                : 'text-gray-400 dark:text-gray-500 cursor-not-allowed'
            }`}
            disabled={!value}
          >
            <FiCopy />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;