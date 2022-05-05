import memesData from "../memesData";

export default function Meme() {

    function greeting(name){
        const date = new Date();
        const hours = date.getHours()

        let timeOfDay
        if (hours >= 4 && hours ){
            timeOfDay = "morning"
        } else if(hours >= 12 && hours){
            timeOfDay = "afternoon"
        } else if(hours >= 17 && hours){
            timeOfDay = "evening"
        }else{
            timeOfDay = "night"
        }
        return `Good ${timeOfDay}, ${name}`
    }

    greeting("Oswaldo");

    let url

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        url = memesArray[randomNumber].url
        console.log(url)
    }

    return (
        <main>
            <div className="form">
                <input
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
        </main>
    )
}