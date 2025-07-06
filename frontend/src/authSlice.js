import { createSlice } from '@reduxjs/toolkit';
import { jwtDecode } from 'jwt-decode';

// Helper function to get initial auth state
const getInitialAuthState = () => {
  const token = localStorage.getItem('token');
  if (!token) return { user: null, token: null, isAuthenticated: false };

  try {
    const decoded = jwtDecode(token);
    const isExpired = decoded?.exp && decoded.exp * 1000 < Date.now();

    return {
      user: isExpired ? null : decoded,
      token: isExpired ? null : token,
      isAuthenticated: !isExpired,
    };
  } catch (error) {
    console.error('Failed to decode token:', error);
    return { user: null, token: null, isAuthenticated: false };
  }
};

const initialState = getInitialAuthState();

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      const { token, user } = action.payload;
      state.token = token;
      state.user = user;
      state.isAuthenticated = true;
      localStorage.setItem('token', token);
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem('token');
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;