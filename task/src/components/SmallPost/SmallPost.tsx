import { noAvailablePicture } from '../../common/common';
import './SmallPost.css';


interface SmallPostProps {
    title: string,
    body: string,
}

const SmallPost: React.FC<SmallPostProps> = ({ title, body }) => {


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
                <button>Read More &#10132;</button>
            </div>
        </div>
    )
}
export default SmallPost