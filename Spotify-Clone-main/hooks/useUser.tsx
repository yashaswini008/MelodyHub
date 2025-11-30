"use client";

import React, { createContext, useContext } from "react";

type UserContextType = {
  accessToken: string | null;
  user: any;          // 👈 loosen type
  userDetails: any;   // 👈 loosen type
  isLoading: boolean;
  subscription: any;  // already any
};

export const UserContext = createContext<UserContextType>({
  accessToken: null,
  user: null,
  userDetails: null,
  isLoading: false,
  subscription: null,
});

export interface Props {
  children: React.ReactNode;
}

export const MyUserContextProvider = ({ children }: Props) => {
  const value: UserContextType = {
    accessToken: null,
    user: null,
    userDetails: null,
    isLoading: false,
    subscription: null,
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
