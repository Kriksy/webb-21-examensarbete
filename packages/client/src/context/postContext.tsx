import React, { useState, useEffect } from "react";
import { IPost } from "@snoutbook/shared";
import { useUser } from "./userContext";

interface PostContextType {
  posts: IPost[];
  postsPendingApproval: IPost[];
  postsApproved: IPost[];
  postsByUser: IPost[];
  favoritePosts: IPost[];
  fetchPosts: () => void;
  likePost: (id: string) => void;
}

export const PostContext = React.createContext<PostContextType>({
  posts: [],
  postsPendingApproval: [],
  postsApproved: [],
  postsByUser: [],
  favoritePosts: [],
  fetchPosts: () => { },
  likePost: (id: string) => { },
});

interface PostContextProviderProps {
  children: React.ReactNode;
}

export const usePosts = () => React.useContext(PostContext);

const defaultPostList: IPost[] = []

export const PostContextProvider = ({ children }: PostContextProviderProps) => {
  const [posts, setPosts] = useState<IPost[]>(defaultPostList);
  const [postsByUser, setPostsByUser] = useState<IPost[]>(defaultPostList);
  const [favoritePosts, setFavoritePosts] = useState<IPost[]>(defaultPostList);
  const [postsPendingApproval, setPostsPendingApproval] = useState<IPost[]>(defaultPostList);
  const [postsApproved, setPostsApproved] = useState<IPost[]>(defaultPostList);

  const { user } = useUser()


  function likePost(id: string) {}

  useEffect(() => {
    if (user.role === "admin") {
      setPostsPendingApproval([...posts.filter(v => v.pendingApproval)])
    } else {
      setPostsPendingApproval([...posts.filter(v => v.pendingApproval && v.user?.username === user.username )])
    }
  }, [posts]);

  useEffect(() => {
    setPostsApproved([...posts.filter(v => v.approved)])
  }, [posts]);

  useEffect(() => {
    setPostsByUser([...posts.filter(v => v.user?.username === user.username )])
  }, [posts]);

  useEffect(() => {
    setFavoritePosts([...posts.filter(v => v.likedBy.includes(user.id) )])
  }, [posts]);

  function fetchPosts() {
    const url = `${process.env.REACT_APP_API_URL}/api/posts?`  + new URLSearchParams({})
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

  function refresh() {
    fetchPosts()
  }

  return (<PostContext.Provider value={{
    posts,
    postsPendingApproval,
    postsApproved,
    postsByUser,
    favoritePosts,
    fetchPosts,
    likePost
  }}>
    {children}
  </PostContext.Provider>
  );
};
