import { useEffect, useState } from "react"
import { getPosts } from "../../services/services";
import './HomePage.css'
import SmallPost from "../../components/SmallPost/SmallPost";
import { Post } from "../../common/types";


export const HomePage: React.FC = () => {

    const [posts, setPosts] = useState<Post[]>([]);

    const [filterQuery, setFilterQuery] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const handleGetPosts = async (): Promise<void> => {
        try {
            setLoading(true);
            const data = await getPosts();
            setPosts(data);

        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        handleGetPosts();
    }, []);

    if (loading) {
        return (
            <div className="loading-div">
                <h2>Loading...</h2>
            </div>
        )
    }

    return (
        <div id="homepage-div">

            <div id="heading-filter">
                <h3>Our latest posts</h3>
                <input
                    type="text"
                    name="filter-user"
                    id="filter-user"
                    value={filterQuery}
                    onChange={(e) => setFilterQuery(e.target.value)}
                    placeholder="Enter a user ID..." />
            </div>

            <div id="posts-section">
                {posts.length > 0 ? (posts
                    .filter((post: Post) => {
                        if (filterQuery === '') return true;
                        return post.userId.toString() === filterQuery;
                    })
                    .sort((a: Post, b: Post) => b.id - a.id)
                    .slice(0, Math.min(posts.length - 1, 20))
                    .map((post: Post) => {
                        return <SmallPost key={post.id} id={post.id} title={post.title} body={post.body} />
                    })) : (
                    <h3>No results found</h3>
                )}
            </div>
        </div>
    )
}