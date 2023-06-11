import React from "react"

export default function Meme() {
    return (
        <main>
            <form className="form">
                <input placeholder="Top Text" type="text"
                    className="form--input" />
                <input placeholder="Bottom Text" type="text"
                    className="form--input" />
                <button className="form--button"> Get a new meme image 🖼</button>
            </form>
        </main>
    )
}