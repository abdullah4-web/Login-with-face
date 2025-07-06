import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai';
import { Sun, Moon } from 'react-feather';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useDispatch } from 'react-redux';
import Webcam from 'react-webcam';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const SignUp = () => {
  const navigate = useNavigate();
  const webcamRef = useRef(null);

  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [successModalOpen, setSuccessModalOpen] = useState(false);

  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedMode = localStorage.getItem('darkMode');
      return savedMode ? JSON.parse(savedMode) : window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const dataURLtoFile = (dataurl, filename) => {
    const arr = dataurl.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) u8arr[n] = bstr.charCodeAt(n);
    return new File([u8arr], filename, { type: mime });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!username) {
      setError('Please enter your name');
      return;
    }

    const imageSrc = webcamRef.current.getScreenshot();
    if (!imageSrc) {
      setError('Unable to capture image from webcam');
      return;
    }

    try {
      setIsLoading(true);

      const formData = new FormData();
      formData.append('username', username);
      const imageFile = dataURLtoFile(imageSrc, 'capture.jpg');
      formData.append('image', imageFile);

      const response = await fetch('http://127.0.0.1:5000/register', {
        method: 'POST',
        body: formData
      });

      const result = await response.json();

      if (response.ok) {
        setSuccessModalOpen(true);
      } else {
        throw new Error(result.message || 'Registration failed');
      }
    } catch (err) {
      console.error('Error:', err);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const closeSuccessModal = () => {
    setSuccessModalOpen(false);
    navigate('/signin');
  };

  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <div className="min-h-screen flex items-center justify-center px-4 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
        <div className="w-full max-w-md bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-xl dark:shadow-gray-700/50">
          
          {/* Dark Mode Toggle */}
          <div className="flex justify-end mb-4">
            <button onClick={toggleDarkMode} className="text-gray-600 dark:text-gray-300">
              {darkMode ? <Sun /> : <Moon />}
            </button>
          </div>

          <h2 className="text-center text-2xl font-bold text-gray-800 dark:text-white mb-6">
            Face Unlock Using Python and React
          </h2>

          {error && (
            <div className="mb-4 p-3 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-100 rounded">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Webcam */}
            <div className="flex justify-center">
              <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                videoConstraints={{ width: 300, height: 300, facingMode: 'user' }}
                className="rounded-full border-4 border-indigo-500 w-40 h-40 sm:w-48 sm:h-48 object-cover"
              />
            </div>

            {/* Name */}
            <div>
              <label className="block text-gray-700 dark:text-gray-200 mb-1">Full Name</label>
              <div className="relative">
                <AiOutlineUser className="absolute left-3 top-3 text-gray-400 dark:text-gray-500" />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="w-full pl-10 pr-4 py-2 rounded-lg border dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter your name"
                />
              </div>
            </div>

            {/* Submit */}
            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 bg-indigo-600 text-white rounded-lg font-medium text-md hover:bg-indigo-700 transition-colors duration-200"
              >
                {isLoading ? 'Registering...' : 'Register with Face'}
              </button>
            </div>
          </form>

          <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
            Already have an account?{' '}
            <Link to="/signin" className="text-indigo-600 dark:text-indigo-400 hover:underline">
              Sign in
            </Link>
          </div>
        </div>

        {/* Success Modal */}
        <Modal
          isOpen={successModalOpen}
          onRequestClose={closeSuccessModal}
          className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-sm mx-auto mt-32 shadow-lg"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
        >
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Registration Successful!</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">You can now sign in with your face.</p>
          <button
            onClick={closeSuccessModal}
            className="w-full py-2 px-4 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition duration-200"
          >
            Go to Sign In
          </button>
        </Modal>
      </div>
    </GoogleOAuthProvider>
  );
};

export default SignUp;
