import '../styles/playpage.css'
import MenuButton from '../components/Menubutton'
import Logo from '../assets/logo.png'
import Level from '../components/level'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
export default function Islands(){
    const containerRef = useRef(null);
    const [isMouseDown, setIsMouseDown] = useState(false);
    const [startX, setStartX] = useState(0)
    const [scrollLeft, setScrollLeft] = useState(0)

 const HandleMouseDown =(e) => {
    setIsMouseDown(true);
    setStartX(e.pageX - - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft)
 }
   
 const HandleMouseLeave =(e) => {
    setIsMouseDown(false)
 }
   
 const HandleMouseUp =(e) => {
    setIsMouseDown(false)
 }
   
 const HandleMouseMove =(e) => {
    if(!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x-startX)*2;
    containerRef.current.scrollLeft = scrollLeft - walk;
 }
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
                <span  className='logo'><Link to='/'><img src={Logo} alt=""/>ATIELTS</Link></span>
                <div className="skillsContainer"ref={containerRef}
                onMouseDown={HandleMouseDown}
                onMouseLeave={HandleMouseLeave}
                onMouseUp={HandleMouseUp}
                onMouseMove={HandleMouseMove}  
                >
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



