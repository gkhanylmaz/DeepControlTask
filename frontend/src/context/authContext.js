import React, { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService';

const AuthContext = createContext({});

export function AuthWrapper({ children }) {
  const [error, setError] = useState(null);
  const [user, setUser] = useState(localStorage.getItem('user'));
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const login = async (values) => {
    try {
      setLoading(true);
      const { data } = await authService.login(values);

      if (data?.user) {
        localStorage.setItem('user', data?.user);
        setUser(data?.user);
        navigate('/');
      }
    } catch (error) {
      console.log(error.response);
      setError(error?.response?.data);
    } finally {
      setLoading(false);
    }
  };

  const register = async (values) => {
    try {
      setLoading(true);
      await authService.register(values);
      navigate('/login');
    } catch (error) {
      setError(error?.response?.data);
    } finally {
      setLoading(false);
    }
  };

  const logout = async (values) => {
    try {
      localStorage.removeItem('user');
      setUser(null);
      navigate('/login');
    } catch (error) {
      setError(error?.response?.data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        login,
        register,
        logout,
        loading,
        error,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
