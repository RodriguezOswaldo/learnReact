import Nav from "./Nav";
// import katie from './katie.png';
// // import weeding from './wedding.png';
// // import bike from './bike.png';
// import star from './star.png';

export default function Card(props){
    return(
        <div className="card">
            <img className="cardPhoto" src={props.img}></img>
            <div className="cardStats">
                <img className="cardStar" src={props.star} alt=""/>
                <span>{props.span1}</span>
                <span className="gray">{props.span2}</span>
                <span className="gray">{props.span3}</span>
            </div>
            <p className="cardMessage">{props.msg}</p>
            <p><span className="bold">{props.price}</span> / person</p>
        </div>
    );
}