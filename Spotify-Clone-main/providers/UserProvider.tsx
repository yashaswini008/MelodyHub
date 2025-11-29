"use client";

import React, { createContext, useContext } from "react";

interface UserContextType {
  isLoading: boolean;
  user: null;
  subscription: null;
}

const UserContext = createContext<UserContextType>({
  isLoading: false,
  user: null,
  subscription: null,
});

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  // For demo: no Supabase auth, just provide a dummy user context
  return (
    <UserContext.Provider
      value={{
        isLoading: false,
        user: null,
        subscription: null,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
