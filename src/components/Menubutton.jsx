import '../styles/menubutton.css'
export default function MenuButton(props){
    const abbr = props.abbr.charAt(0).toUpperCase() + props.abbr.split('').splice(1).join('');
    
    return <div className="menubutton">
        <div className="abbr">
            {abbr}
        </div>
        <div className="rect">
        <i className={props.logo}></i>
        </div>
    </div>
}