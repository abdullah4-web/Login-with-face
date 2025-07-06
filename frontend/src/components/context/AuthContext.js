// AuthContext.js
import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const initializeAuth = () => {
      const storedToken = localStorage.getItem('token');
      if (storedToken) {
        try {
          const decoded = jwtDecode(storedToken);
          setUser(decoded);
          setToken(storedToken);
        } catch (error) {
          console.error('Invalid token:', error);
          logout();
        }
      }
      setIsLoading(false);
    };

    initializeAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const login = async (email, password) => {
    try {
      const response = await mockLogin(email, password);
      const { token } = response;
      const decoded = jwtDecode(token);
      localStorage.setItem('token', token);
      setToken(token);
      setUser(decoded);
      return decoded;
    } catch (error) {
      throw new Error(error.message || 'Login failed');
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
    navigate('/signin');
  };

  const signup = async (name, email, password) => {
    try {
      const response = await mockSignup(name, email, password);
      const { token } = response;
      const decoded = jwtDecode(token);
      localStorage.setItem('token', token);
      setToken(token);
      setUser(decoded);
      return decoded;
    } catch (error) {
      throw new Error(error.message || 'Registration failed');
    }
  };

  const value = {
    user,
    token,
    isLoading,
    login,
    logout,
    signup,
    isAuthenticated: !!user,
  };

  return (
    <AuthContext.Provider value={value}>
      {!isLoading && children}
    </AuthContext.Provider>
  );
};

// Export the context consumer hook
export const useAuth = () => {
  return useContext(AuthContext);
};

// Mock functions (replace with real API calls)
const mockLogin = (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email && password) {
        resolve({
          token: 'mock.jwt.token', // Replace with a real JWT token
        });
      } else {
        reject(new Error('Invalid credentials'));
      }
    }, 1000);
  });
};

const mockSignup = (name, email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (name && email && password) {
        resolve({
          token: 'mock.jwt.token', // Replace with a real JWT token
        });
      } else {
        reject(new Error('Registration failed'));
      }
    }, 1000);
  });
};

export default AuthContext;
