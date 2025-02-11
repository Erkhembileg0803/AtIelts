import '../styles/level.css'
export default function Level(){
    return <div className="skill">
        <LevelButton/>
        <LevelButton/>
        <LevelButton/>
        <LevelButton/>
        <LevelButton/>
        <LevelButton/>
        <LevelButton/>
        <LevelButton/>
        <LevelButton/>
        <LevelButton/>
        <LevelButton/>
        <LevelButton/>
        <LevelButton/>
        <LevelButton/>
        <LevelButton/>
        <LevelButton/>
        <LevelButton/>
        <LevelButton/>
    </div>
}
function LevelButton(){
    return <div className="btnContainer">
        <div className="outer"></div>
        <div className="inner"></div>
        <div className="plate"></div>
    </div>
}