import { useEffect, useState } from "react"
import { getPosts } from "../../services/services";
import './HomePage.css'
import SmallPost from "../../components/SmallPost/SmallPost";

interface Post {
    userId: number,
    id: number,
    title: string,
    body: string,
}

export const HomePage: React.FC = () => {

    const [posts, setPosts] = useState<Post[]>([]);

    const handleGetPosts = async (): Promise<void> => {
        try {
            const data = await getPosts();
            setPosts(data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        handleGetPosts();
    }, [posts])

    return (
        <div id="homepage-div">

            <h3>Out latest posts</h3>

            <div id="posts-section">
                {posts
                .sort((a: Post, b: Post) => b.id - a.id)
                .slice(0, Math.min(posts.length - 1, 20))
                .map((post: Post) => {
                    return <SmallPost key={post.id} title={post.title} body={post.body} />
                })}
            </div>
        </div>
    )
}