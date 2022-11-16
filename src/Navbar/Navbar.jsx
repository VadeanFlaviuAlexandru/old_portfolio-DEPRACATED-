import "./Navbar.scss"
import { Link, useResolvedPath, useMatch } from 'react-router-dom'

export default function Navbar() {
    return <nav className="nav">
        <Link to="/" className="site-nav site-title">Home</Link>
        <ul className="site-nav-list">
            <li>
                <CustomLink className="site-nav site-about" to="/about">About</CustomLink>
            </li>
            <li>
                <CustomLink className="site-nav site-contact" to="/contact">Contact</CustomLink>
            </li>
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