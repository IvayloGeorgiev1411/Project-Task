import { NavigateFunction, useNavigate } from 'react-router-dom';
import { noAvailablePicture } from '../../common/common';
import './SmallPost.css';
import { SmallPostProps } from '../../common/types';


const SmallPost: React.FC<SmallPostProps> = ({ id, title, body }) => {

    const navigate: NavigateFunction = useNavigate();

    return (
        <div className='small-post-body'>

            <img className='image-section'
                src={noAvailablePicture}
                alt="No Picture Available" />

            <div className='text-section'>
                <div className='title-section'>
                    <h4>{title}</h4>
                </div>
                <div className='content-section'>
                    <p>{body}</p>
                </div>
            </div>

            <div className='button-section'>
                <button onClick={() => navigate(`/post/${id}`)}>Read More &#10132;</button>
            </div>
        </div>
    )
}
export default SmallPost