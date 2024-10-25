import { ContainerProps } from '../../common/types'
import './Container.css'

const Container: React.FC<ContainerProps> = ({ children }) => {
    return (
        <div id="container">
            {children}
        </div>
            
        
    )
}

export default Container