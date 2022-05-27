import memesData from "../memesData";
import React from "react";
export default function Meme() {
    const [memeImage, setMemeImage] = React.useState("")

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


    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
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
            <img src={memeImage} alt="" className="meme--img"/>
        </main>
    )
}