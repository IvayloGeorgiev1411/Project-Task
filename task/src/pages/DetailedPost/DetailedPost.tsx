/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Post } from "../../common/types";
import { getPost } from "../../services/services";
import './DetailedPost.css'

export const DetailedPost: React.FC = () => {

    const { id } = useParams<{ id: string }>();

    const [postData, setPostData] = useState<Post>();
    const [loading, setLoading] = useState<boolean>(false);

    const handleGetPost = async (): Promise<void> => {
        try {
            setLoading(true);
            const data = await getPost(id);
            setPostData(data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        handleGetPost();
    }, [])

    if (loading) {
        return (
            <div className="loading-div">
                <h2>Loading...</h2>
            </div>
        )
    }

    return (
        <div className="detailed-page">
            <img
                className="detailed-img"
                src="https://img.freepik.com/premium-vector/grey-gradient-abstract-background-gray-background_322958-2628.jpg"
                alt="Post Picture" />

            <div className="post-text">
                <h4>{postData?.title}</h4>
                <p>{postData?.body}</p>

                <h5>Author: User {postData?.userId}</h5>
            </div>
        </div>
    )
}