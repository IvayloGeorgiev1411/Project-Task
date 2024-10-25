import { useState } from 'react';
import './CreatePost.css';
import { newPost } from '../../common/types';
import { createPost } from '../../services/services';


export const CreatePost = () => {

    const [post, setPost] = useState<newPost>({
        title: '',
        body: '',
        userId: '',
    });

    const handleCreatePost = async (): Promise<void> => {

        if(post.title === '' || post.body === '' || post.userId === '') {
            throw new Error('All fields are required');
        }

        if(isNaN(Number(post.userId))) {
            throw new Error('User ID must be a number');
        }

        try {
            const data = await createPost(post);
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div id="create-page">
            <h1>Create Post</h1>
            <hr />

            <div id="create-input">
                <div className='input-field'>
                    <label htmlFor="create-author">Author:</label>
                    <input 
                    type="text" 
                    placeholder="User ID..." 
                    id="create-author"
                    onChange={(e) => setPost({...post, userId: e.target.value })}/>
                </div>
                <div className='input-field'>
                    <label htmlFor="create-title">Title:</label>
                    <input 
                    type="text" 
                    placeholder="Title..." 
                    id="create-title" 
                    onChange={(e) => setPost({...post, title: e.target.value })}/>
                </div>
                <div className='input-field'>
                    <label htmlFor="create-content">Content:</label>
                    <textarea 
                    id="create-content" 
                    placeholder="Content..." 
                    onChange={(e) => setPost({...post, body: e.target.value })}/>
                </div>
            </div>

            <button id='create-button' onClick={handleCreatePost}>Create Post</button>
        </div>
    )
}