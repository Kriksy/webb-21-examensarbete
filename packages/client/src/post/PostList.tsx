import './styles/post.css';
import PostCard from "./components/PostCard"
import { IPost, IUser } from "@snoutbook/shared"
import { useAppContext } from '../context/appContext';

export interface PostListProps {
    posts: IPost[],
    role: IUser["role"]
}

export default function PostList({ posts }: PostListProps) {
    const { user } = useAppContext()
    const data = posts 
    return (
        <div>
            {
             posts && posts.map((post) => PostCard({ post, role: user.role }))
            }
        </div >
    )
}