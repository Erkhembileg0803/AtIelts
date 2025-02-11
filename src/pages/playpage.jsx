import '../styles/playpage.css'
import MenuButton from '../components/Menubutton'
import Logo from '../assets/logo.png'

export default function Islands(){
    return <>
        <div className="playpage">
                <img src={Logo} alt="" className='logo'/>
                <div className="islandContainer">
  
                </div>
                <nav>
                    <MenuButton abbr="Profile"/>
                    <MenuButton abbr="Profile"/>
                    <MenuButton abbr="Profile"/>
                    <MenuButton abbr="Profile"/>
                    <MenuButton abbr="Profile"/>
                    <MenuButton abbr="Profile"/>
                    <MenuButton abbr="Profile"/>
                </nav>
        </div>
    </>
}