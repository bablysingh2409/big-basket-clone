"use client"
import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false); 
  useEffect(() => {
    const loggedIn = localStorage.getItem('isLogin') === 'true';
    setIsLogin(loggedIn);
  }, []);

  const login = () => {
    setIsLogin(true);
    localStorage.setItem('isLogin', 'true');
  };

  const logout = () => {
    setIsLogin(false);
    localStorage.setItem('isLogin', 'false');
  };

  return (
  <AuthContext.Provider value={{ isLogin, login, logout }}>
    {children}
  </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);