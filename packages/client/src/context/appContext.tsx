import React, { useState, useEffect } from "react";
import { IUser, IPost } from "@snoutbook/shared";
import api from "../api"

interface AppContextType {
  // User
  user: any;
  token: string,
  saveToken: (token: string) => void;
  loggedIn: boolean;
  saveUser: (user: IUser) => void;
  logout: () => void;
  login: (token: string) => void;

  // Posts
  posts: IPost[];
  postsPendingApproval: IPost[];
  postsApproved: IPost[];
  postsByUser: IPost[];
  favoritePosts: IPost[];
  fetchPosts: () => void;
  likePost: (id: string) => void;
}

export const AppContext = React.createContext<AppContextType>({
  user: {},
  loggedIn: false,
  saveUser: (user: IUser) => { },
  logout: () => { },
  login: (token: string) => { },
  token: "",
  saveToken: (token: string) => { },

  posts: [],
  postsPendingApproval: [],
  postsApproved: [],
  postsByUser: [],
  favoritePosts: [],
  fetchPosts: () => { },
  likePost: (id: string) => { },
});

interface AppContextProviderProps {
  children: React.ReactNode;
}

export const useAppContext = () => React.useContext(AppContext);

const defaultInitUser: IUser = { id: "", username: "", avatar: "1", role: "standard" }
const defaultPostList: IPost[] = []

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  // UserContext
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
        console.error(err)
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

  function login(token: string) {
    localStorage.setItem("user", token);
    setLoggedIn(true);
  }

  function logout() {
    localStorage.setItem("user", "");
    setLoggedIn(false);
    setUser(defaultInitUser)
  }


  // PostContext
  const [posts, setPosts] = useState<IPost[]>(defaultPostList);
  const [postsByUser, setPostsByUser] = useState<IPost[]>(defaultPostList);
  const [favoritePosts, setFavoritePosts] = useState<IPost[]>(defaultPostList);
  const [postsPendingApproval, setPostsPendingApproval] = useState<IPost[]>(defaultPostList);
  const [postsApproved, setPostsApproved] = useState<IPost[]>(defaultPostList);

  function likePost(id: string) { }

  useEffect(() => {
    if (user.role === "admin") {
      setPostsPendingApproval([...posts.filter(v => v.pendingApproval)])
    } else {
      setPostsPendingApproval([...posts.filter(v => v.pendingApproval && v.user?.username === user.username)])
    }
  }, [posts, user.role, user.username]);

  useEffect(() => {
    setPostsApproved([...posts.filter(v => v.approved)])
  }, [posts]);

  useEffect(() => {
    setPostsByUser([...posts.filter(v => v.user?.username === user.username)])
  }, [posts, user.username]);

  useEffect(() => {
    setFavoritePosts([...posts.filter(v => v.likedBy.includes(user.id as string))])
  }, [posts, user.id]);

  function fetchPosts() {
    const url = `${process.env.REACT_APP_API_URL}/api/posts?` + new URLSearchParams({})
    fetch(url, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
      },
    }).then(res => {
      return res.json()
    }).then(res => {
      setPosts([...res.data as IPost[]])
    }).catch(error => {
      console.log(`failed to retrieve posts, got error: ${error}`)
    });
  }

  return (<AppContext.Provider value={{
    user, saveUser, login, logout, loggedIn, token, saveToken,
    posts,
    postsPendingApproval,
    postsApproved,
    postsByUser,
    favoritePosts,
    fetchPosts,
    likePost
  }}>
    {children}
  </AppContext.Provider>
  );
};
