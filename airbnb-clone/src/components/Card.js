export default function Card(props){
    /* * <Card id={
    * items.id}
    * title={items.title}
    * price={items.price}
    * coverImg={items.coverImg}
                     * statsRat={items.stats.rating}
                     * statsRev={items.stats.reviewCount}
                     description={items.description}
                     * location={items.location}
                     * openSpots={items.openSpots}* */
    let badgeText
     if (props.openSpots === 0){
         badgeText = "SOLD OUT"
     } else if(props.location === "Online"){
         badgeText = "ONLINE"
     }
    return(
        <section className="card">
            {badgeText && <div className="cardBadge">{badgeText}</div>}
            <img className="cardPhoto" src={props.coverImg}></img>
            <div className="cardStats gray">
                <img className="cardStar" src={props.star} alt="red start for rate"/>
                <span> {props.statsRat}  </span>
                <span>({props.statsRev}) •  </span>
                <span> {props.location}</span>
            </div>
            <p className="cardMessage">{props.title}</p>
            <p className="price"><span className="bold"> From ${props.price}</span> / person</p>
        </section>
    );
}