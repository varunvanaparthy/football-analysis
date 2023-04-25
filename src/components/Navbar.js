import { Link, useMatch, useResolvedPath } from "react-router-dom";

import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
        <Link to="/" className = "title">FOOTBALL ANALYSIS</Link>
        <ul>
            <CustomLink to="/" className="menuOption">HOME</CustomLink>
            <CustomLink to="/db-design" className="menuOption">DATABASE DESIGN</CustomLink> 
            <CustomLink to="/sc-design" className="menuOption">SCHEMA DESIGN</CustomLink>  
            <CustomLink to="/mappings" className="menuOption">MAPPINGS</CustomLink>    
            <CustomLink to="/workflows" className="menuOption">WORKFLOWS</CustomLink>  
            <CustomLink to="/reports" className="menuOption">REPORTS</CustomLink> 
        </ul>
    </nav>
    )
}

function CustomLink({ to, children, ...props}) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch( {path : resolvedPath.pathname, end: true})
    return  (
        <li className = {isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}

export default Navbar;
