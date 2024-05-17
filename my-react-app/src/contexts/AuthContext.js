// src/contexts/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const fetchUser = async () => {
    // Ensure getCurrentUser is defined and valid
    const user = await getCurrentUser();
    setCurrentUser(user);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

const getCurrentUser = async () => {
  // Simulate an API call to get the current user
  return { name: 'John Doe' };
};
