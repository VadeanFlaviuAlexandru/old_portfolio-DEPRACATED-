import "./Navbar.scss"
import { Link, useResolvedPath, useMatch } from 'react-router-dom'
import DarkMode from '../Components/DarkMode/DarkMode.js';
import pdf from './Resume.pdf'


export default function Navbar() {
    return <nav className="nav">
        <Link to="/" title="To home page" className="site-nav site-title">Home</Link>
        <ul className="site-nav-list">
            <CustomLink title="To about page" className="site-nav site-about" to="/about">About</CustomLink>
            <CustomLink title="To contact page" className="site-nav site-contact" to="/contact">Contact</CustomLink>
            <a title="To CV page" href={pdf} target="_blank" className="site-nav site-cv" rel="noopener noreferrer">CV</a>
            <DarkMode title="Change site's theme" className="site-nav"/>
        </ul>
    </nav>
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}