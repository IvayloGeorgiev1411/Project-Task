import { Post, PostsGrid } from "../../common/types";
import SmallPost from "../SmallPost/SmallPost";
import './Posts.css'

export const Posts: React.FC<PostsGrid> = ({posts, filterQuery}) => {
    return (
        <div id="posts-section">
            {posts
                .filter((post: Post) => {
                    if (filterQuery === '') return true;
                    return post.userId.toString() === filterQuery;
                })
                .sort((a: Post, b: Post) => b.id - a.id)
                .slice(0, Math.min(posts.length, 20))
                .map((post: Post) => {
                    return <SmallPost key={post.id} id={post.id} title={post.title} body={post.body} />
                })}
        </div>
    )
}