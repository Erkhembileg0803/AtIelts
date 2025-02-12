import '../styles/PlayPage/level.css';

export default function Level(props) {
    const levels = [];
    const numberMapping = [
        'zero', 'one', 'two', 'three', 'four', 
        'five', 'six', 'seven', 'eight', 'nine', 
        'ten', 'eleven', 'twelve'
    ];

    for (let i = 0; i <= props.length; i++) {
        const levelName = numberMapping[i].charAt(0).toUpperCase().split('') + numberMapping[i].split('').splice(1).join('') || i;  
        i < props.length ?
        levels.push(<LevelButton id={`Level${levelName}`} key={`${props.skill}-${levelName}`} />) :
        levels.push(<LevelButton id={`Finish`} key={`${props.skill}-Level${levelName}`} />)

    }
    

    return <div className="skill">
        {levels}
    </div>;
}

function LevelButton(props) {
    return (
        <div className="btnContainer" id={props.id}>
            <div className="outer"></div>
            <div className="inner"></div>
            <div className="plate"></div>
        </div>
    );
}
