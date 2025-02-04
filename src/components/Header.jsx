import '../styles/header.css'
import { BrowserRouter, Routes, Route , Link} from "react-router-dom";
import { useState } from 'react';
import LoginSignUp from '../pages/Login-SignUp'
import App from '../App'
function Header(){
    return <header>
     <ResponsiveDropdown/>
    <Link to="/" className="logo">
         <img src={require('../assets/logo.png')} alt=""/>
         <h1>AtIelts</h1>
    </Link>
    <ul className="links">
             <li className="link"><Link to='/'>Home</Link></li>
              <li className="link">
                <Link to="/roadmap" >RoadMap</Link>
                </li>
              <li className="link">Forum</li>
              <li className="link">Practice Library
                   <i className="fa fa-angle-down" ></i>
                   <ul className="hoverDropdown">
                        <li>IELTS Reading Tests</li>
                        <li>IELTS Listening Tests</li>
                        <li>IELTS Writing Tests</li>
                        <li>IELTS Speaking Tests</li>
                   </ul>
              </li>
    </ul>
    <div className="account">
     <span id="logIn">
          Login
     </span>
     <div id="signUp" className='signUp'>
          SignUp
     </div>
     <div className="dashboard">

     </div>
     </div>
</header>
}

function ResponsiveDropdown() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [practiceTestDropdownOpen, setPracticeTestDropdownOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const togglePracticeTestDropdown = () => {
        setPracticeTestDropdownOpen(!practiceTestDropdownOpen);
    };

    return (
        <div className="menuheader">
            <i className="fa fa-bars" id="menuBtn" onClick={toggleMenu}></i>
            {menuOpen && (
                <ul className="menu" id="menu">
                    <Link to='/'>Home</Link>
                    <Link to='/' className="dropdown" id="practicetestDropdown" onClick={togglePracticeTestDropdown}>
                        Practice Test Library
                        <i className={`fa fa-angle-${practiceTestDropdownOpen ? 'up' : 'down'}`} id="practicetestarrow"></i>
                    </Link>
                    {practiceTestDropdownOpen && (
                        <ul className="dropdown-content" id="practicetestDropdownList">
                            <Link to='/'>IELTS Reading Practice Tests</Link>
                            <Link to='/'>IELTS Listening Practice Tests</Link>
                            <Link to='/'>IELTS Writing Practice Tests</Link>
                            <Link to='/'>IELTS Speaking Practice Tests</Link>
                        </ul>
                    )}
                    <Link to="/RoadMap" className="dropdown" id="examDateDropdown">
                        RoadMap
                    </Link>
                    <Link to='/'>Forum</Link>
                </ul>
            )}
        </div>
        
    );
}
export default Header;