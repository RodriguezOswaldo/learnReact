export default function Card(props) {
    return (
        <div className="Card">
            <div className="cardContainer">
                <div className="imageContainer">
                    <img className="image" src={props.items.imageUrl} alt=""/>
                </div>
                <div className="contentContainer">
                    <div className="title">
                        <p className="location"><i className=" icon fa fa-space-shuttle"></i> {props.items.location}</p>
                        <a className="Link" target="_blank" href={props.items.googleMapsUrl}>View On Google Maps</a>
                    </div>
                    <h1 className="city">{props.items.title}</h1>
                    <p className="bold">{props.items.startDate} - {props.items.endDate}</p>
                    <p>{props.items.description}</p>
                </div>
            </div>
            <hr/>
        </div>
    )
}