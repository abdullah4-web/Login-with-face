// components/PrivateRoute.js
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    if (!isAuthenticated) {
      toast.warn('You must be signed in to access this page.', {
        position: 'top-right',
        autoClose: 3000,
      });
    }
  }, [isAuthenticated]);

  return isAuthenticated ? children : <Navigate to="/signin" replace />;
};

export default PrivateRoute;
