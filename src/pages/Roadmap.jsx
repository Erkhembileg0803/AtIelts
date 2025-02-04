import '../styles/Roadmap.css'
import Header from '../components/Header'
import Footer from '../components/Footer';
function RoadMap(){
    return <div className="RoadMap">
        <Header/>
            <div className="map">
                <FirstLine/>

            </div>
            <Footer/>
        </div>
}
export default RoadMap;

function FirstLine(){
    const firstline = []
    function generateButtons(){
        for(let i = 1; i <= 8; i++ ){
            firstline.push(
                <div className="levelstand">
                <div className="outer">{i}</div>
                <div className="inner"></div>
                <div className="plate"></div>
                </div>
            )
        }
    }
    generateButtons()
    return <> 
    <div className="firstline">
    {firstline}
    </div>
    </>
}

function Button(props){
 
    return <div className="levelstand">
        <div className="outer"></div>
        <div className="inner"></div>
        <div className="plate"></div>
    </div>
}
