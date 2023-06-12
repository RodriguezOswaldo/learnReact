import React from "react"
import memesData from "/Users/ownos/Programming/learnReact/meme/src/memesData.js"

export default function Meme() {
    function getMemeImage() {
        const memesArrays = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArrays.length)
        const url = memesArrays[randomNumber].url
        console.log(url)
    }
    return (
        <main>
            <form className="form">
                <input placeholder="Top Text" type="text"
                    className="form--input" />
                <input placeholder="Bottom Text" type="text"
                    className="form--input" />
                <button onClick={getMemeImage} className="form--button"> Get a new meme image 🖼</button>
            </form>
        </main>
    )
}