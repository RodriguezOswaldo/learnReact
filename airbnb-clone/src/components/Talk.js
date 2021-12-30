export default function Talk(props){
    console.log(props)
    return(
        <div>
            <div>this: {props.title}</div>
            {/*<div>this: {props.my_date}</div>*/}
            <a href={props.link}>link</a>
            <img src={props.img}></img>
            <p>{props.speaker} </p>
            <hr/>
        </div>

    );
}