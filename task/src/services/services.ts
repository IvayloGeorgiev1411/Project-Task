import { newPost } from "../common/types";

export const getPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return response.json();
}

export const createPost = async (post: newPost) => {
    const newPost = {...post, userId: Number(post.userId)};
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(newPost),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
    return response.json();
}

export const getPost = async (id: string | undefined) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return response.json();
}