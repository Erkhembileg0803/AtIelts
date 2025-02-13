import '../styles/PlayPage/playpage.css'
import MenuButton from '../components/Menubutton'
import Level from '../components/level'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
export default function Islands(){
const containerRef = useRef(null);
const [isMouseDown, setIsMouseDown] = useState(false);
const [startX, setStartX] = useState(0);
const [scrollLeft, setScrollLeft] = useState(0);
const animationRef = useRef(null); // Stores animation frame ID

const HandleMouseDown = (e) => {
    setIsMouseDown(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);

};

const HandleMouseLeave = () => {
    setIsMouseDown(false);
    cancelAnimationFrame(animationRef.current); // Stop animation
};

const HandleMouseUp = () => {
    setIsMouseDown(false);
    cancelAnimationFrame(animationRef.current); 
};

const HandleMouseMove = (e) => {
    if (!isMouseDown) return;

    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;


    cancelAnimationFrame(animationRef.current);

 
    animationRef.current = requestAnimationFrame(() => {
        containerRef.current.scrollLeft = scrollLeft - walk;
    });
};

useEffect(() => {
    const container = containerRef.current;

    const handleWheel = (e) => {
        if (e.deltaY !== 0) {
            e.preventDefault();
            cancelAnimationFrame(animationRef.current);

            animationRef.current = requestAnimationFrame(() => {
                container.scrollLeft += e.deltaY;
            });
        }
    };

    container.addEventListener('wheel', handleWheel);
    return () => {
        container.removeEventListener('wheel', handleWheel);
        cancelAnimationFrame(animationRef.current);
    };
}, []);

const levelsUnlocked = {
    isListening: true,
    isReading: false,
    isWriting: false,
}
    return <>
    
        <div className="playpage">
                <span  className='logo'><Link to='/'>ATIELTS</Link></span>
                <div className="skillsContainer"ref={containerRef}
                onMouseDown={HandleMouseDown}
                onMouseLeave={HandleMouseLeave}
                onMouseUp={HandleMouseUp}
                onMouseMove={HandleMouseMove}  
                >
                    <Level length="9" skill="Listening"isOpen={levelsUnlocked.isListening}/>
                    <Level length="11" skill="Reading"isOpen={levelsUnlocked.isReading}/>
                    <Level length="10" skill="Writing"isOpen={levelsUnlocked.isWriting}/>
                </div>
                <nav>
                    <MenuButton abbr="character"logo='fas fa-user-alt'/>
                    <MenuButton abbr="badges"logo='fas fa-medal'/>
                    <MenuButton abbr="forum" logo='fas fa-user-friends'/>
                    <MenuButton abbr="practice Test Library"logo="fa fa-book"/>
                    <MenuButton abbr="home"logo="fa fa-home" link='/'/>
                </nav>
        </div>
    </>
}



