import { noAvailablePicture } from '../../common/common';
import './SmallPost.css';


interface SmallPostProps {
    title: string,
    body: string,
}

const SmallPost: React.FC<SmallPostProps> = ({title, body}) => {
    return (
        <div className='small-post-body'>

            <img className='image-section' 
            src={noAvailablePicture} 
            alt="No Picture Available" />

            <div className='text-section'>
                <h4>{title}</h4>
                <p>{body}</p>
            </div>
            
        </div>
    )
}
export default SmallPost