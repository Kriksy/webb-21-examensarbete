import React, { useState, useEffect } from "react";
import { IUser } from "@snoutbook/shared";
import api from "../api"

interface UserContextType {
    user: any;
    token: string,
    saveToken: (token: string) => void;
    loggedIn: boolean;
    saveUser: (user: IUser) => void;
    logout: () => void;
    login: (token: string) => void;
}

export const UserContext = React.createContext<UserContextType>({
    user: {},
    loggedIn: false,
    saveUser: (user: IUser) => {

    },
    logout: () => {

    },
    login: (token: string) => {

    },
    token: "",
    saveToken: (token: string) => {

    }
});

interface UserContextProviderProps {
    children: React.ReactNode;
}

export const useUser = () => React.useContext(UserContext);

const defaultInitUser = { id: "", username: "", avatar: "1", role: "standard" } as IUser

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
    const [user, setUser] = useState<IUser>(defaultInitUser);
    const [token, setToken] = useState("");


    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        if (loggedIn) {
            api.getMe().then(function (res) {
                setUser({
                    ...res.data
                } as IUser)
            }).catch(err => {
                console.log(err)
            })
        }
    }, [loggedIn]);

    useEffect(() => {
        setLoggedIn(loggedIn);
    }, [loggedIn]);

    function saveUser(user: IUser) {
        setUser(user)
    }

    function saveToken(token: string) {
        setToken(token)
        localStorage.setItem("user", token);
    }

    function getToken() {
        localStorage.getItem("user");
    }

    function login(token: string) {
        localStorage.setItem("user", token);
        setLoggedIn(true);
    }

    function logout() {
        localStorage.setItem("user", "");
        setLoggedIn(false);
        setUser(defaultInitUser)
    }

    return (
        <UserContext.Provider value={{ user, saveUser, login, logout, loggedIn, token, saveToken }}>
            {children}
        </UserContext.Provider>);
};
