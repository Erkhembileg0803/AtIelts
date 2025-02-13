import '../styles/PlayPage/level.css';

export default function Level(props) {

    const isOpen = props.isOpen;
    const levels = [];
    const numberMapping = [
        'zero', 'one', 'two', 'three', 'four', 
        'five', 'six', 'seven', 'eight', 'nine', 
        'ten', 'eleven', 'twelve'
    ];

    for (let i = 0; i <= props.length; i++) {
        const levelName = numberMapping[i].charAt(0).toUpperCase().split('') + numberMapping[i].split('').splice(1).join('') || i;  
        i < props.length ?
        levels.push(<LevelButton id={`Level${levelName}`} key={`${props.skill}-${levelName}`} isOpen={isOpen}/>) :
        levels.push(<LevelButton id={`Finish`} key={`${props.skill}-Level${levelName}`} isOpen={isOpen}/>)
    }
    

    return <div className={isOpen ? "skill open" : "skill closed"}>
        {levels}
    </div>;
}

function LevelButton(props) {
    const isOpen = props.isOpen;
    return (
        <div className={isOpen ? "btnContainer" : "btnContainer closedbtn"} id={props.id}>
            <div className="outer"></div>
            <div className="inner"></div>
            <div className="plate"></div>
        </div>
    );
}
