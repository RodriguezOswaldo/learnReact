export default function Test(){
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay

    if (hours < 12) {
        timeOfDay = "morning"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
    } else {
        timeOfDay = "night"
    }
    return(
        <div className="footer">

            <h1>Good {timeOfDay}, bud!</h1>
        </div>
    );
}