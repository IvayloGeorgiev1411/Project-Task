import { NavLink } from "react-router-dom"
import './Header.css'

export const Header: React.FC = () => {
    
    return (
        <div id="header">
            <h2>Posts Website</h2>
            <nav id="nav-section">
                <NavLink to="/" className="nav-link">Home</NavLink>
                <NavLink to="/create" className="nav-link">Create</NavLink>
            </nav>
        </div>
    )
}