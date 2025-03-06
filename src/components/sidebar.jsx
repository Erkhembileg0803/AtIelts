import '../styles/sidebar.scss'
import { Link } from 'react-router-dom'
export default function SideBar(){
    return <nav className="sidebar">
        <div className="profile"></div>
        <Link to='/'>Home</Link>
        <Link to='/'>Tests</Link>
        <Link to='/'>Forum</Link>
        <Link to='/'>Library</Link>
    </nav>
} 