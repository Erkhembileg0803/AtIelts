import '../styles/playpage.css'
import MenuButton from '../components/Menubutton'
import Logo from '../assets/logo.png'
import Level from '../components/level'
import { useEffect, useRef } from 'react'
export default function Islands(){
    const containerRef = useRef(null);
    useEffect(() => {
        const container = containerRef.current;
        const handleWheel = (e) => {
            if(e.deltaY !== 0){
                container.scrollLeft += e.deltaY;
                e.preventDefault();
            }
        }
        container.addEventListener('wheel',handleWheel);
        return () => {
            container.removeEventListener('wheel', handleWheel);
        }
    }, [])
   

    return <>
    
        <div className="playpage">
                <img src={Logo} alt="" className='logo'/>
                <div className="skillsContainer"ref={containerRef}>
                    <Level length="9" skill="Listening"/>
                    <Level length="11" skill="Reading"/>
                    <Level length="10" skill="Writing"/>
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



