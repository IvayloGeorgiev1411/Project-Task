import { useEffect, useState } from "react"
import { getPosts } from "../../services/services";
import './HomePage.css'
import { Post } from "../../common/types";
import { Posts } from "../../components/Posts/Posts";
import NoResultFound from "../../components/NoResultFound/NoResultFound";
import Loading from "../../components/Loading/Loading";


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

    const handleFilterData = (e: React.ChangeEvent<HTMLInputElement>): void => {
        if (isNaN(Number(e.target.value))) {
            alert('User ID could only be a number');
            setFilterQuery('');
        } else {
            setFilterQuery(e.target.value);
        }
    }

    useEffect(() => {
        handleGetPosts();
    }, []);

    if (loading) {
        return <Loading />
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
                    onChange={handleFilterData}
                    placeholder="Enter a user ID..." />
            </div>

            {posts.filter((post: Post) => {
                if (filterQuery === '') return true;
                return post.userId.toString() === filterQuery;
            }).length > 0 ?
                (
                    <Posts posts={posts} filterQuery={filterQuery} />
                ) : (
                    <NoResultFound />
                )
            }
        </div>
    )
}

