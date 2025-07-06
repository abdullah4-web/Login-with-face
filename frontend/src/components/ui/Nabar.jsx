import { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'react-feather';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../authSlice'; // adjust the path as needed

const Navbar = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedMode = localStorage.getItem('darkMode');
      // Default to true if no preference is saved
      return savedMode ? JSON.parse(savedMode) : true;
    }
    return true; // Default to true for server-side rendering
  });
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md dark:shadow-gray-800/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <svg
                className="h-8 w-8 text-indigo-600 dark:text-indigo-400"
                viewBox="0 0 32 32"
                fill="currentColor"
              >
                <path d="M16 2L4 10v12l12 8 12-8V10L16 2zm0 2.8L25 10v9.2l-9 6-9-6V10l9-7.2zM16 16l-4-2v4l4 2 4-2v-4l-4 2z" />
              </svg>
              <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">
                SocialPilot
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 px-3 py-2 font-medium"
            >
              Home
            </Link>
            <Link
              to="/create"
              className="text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 px-3 py-2 font-medium"
            >
              Create
            </Link>
            <Link
              to="/profile"
              className="text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 px-3 py-2 font-medium"
            >
              Profile
            </Link>
            <Link
              to="/posts"
              className="text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 px-3 py-2 font-medium"
            >
              Posts
            </Link>
            <Link
              to="/about"
              className="text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 px-3 py-2 font-medium"
            >
              About
            </Link>
          </div>

          {/* Right side - Auth + Dark Mode Toggle */}
          <div className="flex items-center space-x-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>

            {/* Auth Buttons - Desktop */}
            <div className="hidden md:flex items-center space-x-4">
              {isAuthenticated ? (
                <button
                  onClick={handleLogout}
                  className="text-red-600 hover:text-red-800 px-3 py-2 font-medium"
                >
                  Logout
                </button>
              ) : (
                <>
                  <Link
                    to="/signin"
                    className="text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 px-3 py-2 font-medium"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/signup"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md font-medium transition-colors"
                  >
                    Get Started
                  </Link>
                </>
              )}
            </div>


            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-white dark:bg-gray-900`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            Home
          </Link>
          <Link
            to="/create"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            Create Post
          </Link>
          <Link
            to="/profile"
            className="text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 px-3 py-2 font-medium"
          >
            Profile
          </Link>
          <Link
            to="/posts"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            Posts
          </Link>
          <Link
            to="/about"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            About
          </Link>
          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              className="text-red-600 hover:text-red-800 px-3 py-2 font-medium"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/signin"
                className="text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 px-3 py-2 font-medium"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md font-medium transition-colors"
              >
                Get Started
              </Link>
            </>
          )}

        </div>
      </div>
    </nav>
  );
};

export default Navbar;