import '../styles/header.css'
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';


export default function Header(){
     const [menu, setMenu] = useState(false);
     function toggleMenu() {
          setMenu(!menu);
     }
     return <header>
          <div className="responsivemenu"style={{
               height: menu ? "230px" : "0px", opacity: menu ? "1" : '0',
          }}>
          {menu && <Links/>}
          </div>
          <div className="responsivebtn"><i class="fa fa-bars"onClick={toggleMenu}></i></div>
          <Link to='/'className="logo">
               <img src={Logo} alt="" />
               ATIELTS
          </Link>
          <div className="links">
               <div>
               <Links/>
               </div>
               <span>
                    Sign In
               </span>
          </div>
     </header>
}
function Links(props){
     return <>
     <Link to='/'className='Home'>
     <i class="fa fa-home"></i>
     Home
     </Link> 
     <Link to='/play' className='RoadmapLink'>
     <i class='fas fa-gamepad'></i>
     LevelUP!</Link> 
     <Link className='LibraryLink'>Library
     <i class="fa fa-arrow-up"></i>
     </Link> 
     <Link>Forum</Link> 
     </>
}
