import '../styles/header.css'
import { BrowserRouter, Routes, Route , Link} from "react-router-dom";
import { useState } from 'react';
import LoginSignUp from '../pages/Login-SignUp'
import App from '../App'
function Header(){
    return <header>
     <ResponsiveDropdown/>
    <a href="#"class="logo">
         <img src="Photos/lightlogo.png" alt=""/>
         <h1>AtIelts</h1>
    </a>
    <ul class="links">
              <li class="link">Practice Test Library
                   <i class="fa fa-angle-down" ></i>
                   <ul class="hoverDropdown">
                        <li>IELTS Reading Tests</li>
                        <li>IELTS Listening Tests</li>
                        <li>IELTS Writing Tests</li>
                        <li>IELTS Speaking Tests</li>
                   </ul>
              </li>
              <li class="link">
                <Link to="/roadmap" >RoadMap</Link>
                </li>
              <li class="link">Chatroom</li>
    </ul>
    <div class="account">
     <div class="background-switcher"id="backgroundBtn">
          <i class="fa fa-moon-o"></i>
     </div>
     <span id="logIn">
          Login
     </span>
     <div id="signUp" className='signUp'>
          SignUp
     </div>
     <div class="dashboard">

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
                    <li className="dropdown" id="practicetestDropdown" onClick={togglePracticeTestDropdown}>
                        Practice Test Library
                        <i className={`fa fa-angle-${practiceTestDropdownOpen ? 'up' : 'down'}`} id="practicetestarrow"></i>
                    </li>
                    {practiceTestDropdownOpen && (
                        <ul className="dropdown-content" id="practicetestDropdownList">
                            <li>IELTS Reading Practice Tests</li>
                            <li>IELTS Listening Practice Tests</li>
                            <li>IELTS Writing Practice Tests</li>
                            <li>IELTS Speaking Practice Tests</li>
                        </ul>
                    )}
                    <li className="dropdown" id="examDateDropdown">
                        Begin Here!
                    </li>
                    <li>Forum</li>
                </ul>
            )}
        </div>
        
    );
}
export default Header;