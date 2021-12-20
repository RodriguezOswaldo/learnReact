import Nav from "./Nav";
import katie from './katie.png';
import weeding from './wedding.png';
import bike from './bike.png';
import star from './star.png';

export default function Card(props){
    const title = "test from JS!";
    return(
        <div className="card">
            <img className="cardPhoto" src={katie}></img>
            <div className="cardStats">
                <img className="cardStar" src={star} alt=""/>
                <span>5.0</span>
                <span className="gray">(6) •  </span>
                <span className="gray">USA - {title}</span>
            </div>
            <p className="cardMessage">Life Lessons with Katie Zaferes</p>
            <p><span className="bold">From $136</span> / person</p>
            <img src={weeding}></img>
            <img src={bike}></img>
        </div>
    );
}