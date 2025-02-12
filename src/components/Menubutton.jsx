import '../styles/PlayPage/menubutton.css'
import { Link } from 'react-router-dom';
export default function MenuButton(props){
    const abbr = props.abbr.charAt(0).toUpperCase() + props.abbr.split('').splice(1).join('');
    console.log(abbr)
    return <Link to={`${props.link}`} className="menubutton">
        <div className="abbr">
            {abbr}
        </div>
        <div className="rect">
        <i className={props.logo}></i>
        </div>
    </Link>
}