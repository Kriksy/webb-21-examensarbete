import React, { useState, useEffect } from "react";

export interface IUser {
  id: string;
}

interface UserContextType {
  user: any;
  loggedIn: boolean;
  setUser: React.Dispatch<React.SetStateAction<IUser>>
  logout: () => void;
  login: () => void;
}

export const UserContext = React.createContext<UserContextType | null>(null);

interface UserContextProviderProps {
  children: React.ReactNode;
}

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState({
    id: "",
  });

  const [loggedIn, setLoggedIn] = useState(false);

  //   useEffect(() => {
  //     // api.getMe().then(function (resp) {
  //     //     const { user } = resp
  //     //     setUser({
  //     //         ...user
  //     //     })
  //     // }).catch(err => {
  //     //     console.log(err)
  //     // })
  //   }, []);

  useEffect(() => {
    setLoggedIn(loggedIn);
  }, [loggedIn]);

  function login() {
    setLoggedIn(true);
  }

  function logout() {
    localStorage.setItem("user", "");
    setLoggedIn(false);
  }

  return <UserContext.Provider value={{ user, setUser, login, logout, loggedIn }}>{children}</UserContext.Provider>;
};
