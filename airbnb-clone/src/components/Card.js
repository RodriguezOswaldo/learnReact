export default function Card(props) {
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <section className="card">
            {badgeText && <div className="cardBadge">{badgeText}</div>}
            <img className="cardPhoto" src={props.item.coverImg}></img>
            <div className="cardStats gray">
                <img className="cardStar" src={props.item.star} alt="red start for rate"/>
                <span> {props.item.stats.rating}  </span>
                <span>({props.item.stats.reviewCount}) •  </span>
                <span> {props.item.location}</span>
            </div>
            <p className="cardMessage">{props.item.title}</p>
            <p className="price"><span className="bold"> From ${props.item.price}</span> / person</p>
        </section>
    );
}