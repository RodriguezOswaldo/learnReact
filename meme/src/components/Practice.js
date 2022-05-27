import React from "react"

export default function Practice() {
    /**
     * Challenge: Replace the if/else below with a ternary
     * to determine the text that should display on the page
     */

    const [isGoingOut, setIsGoingOut] = React.useState(true)
    // const isGoingOut = true
    // I used to have answer as the output, but I changed it to run the code directly, instead of using variable
    let answer  = isGoingOut == true ? "yes" : "no"
    // if(isGoingOut === true) {
    //     answer = "Yes"
    // } else {
    //     answer = "No"
    // }

    function changeMind(){
        setIsGoingOut(prevState => !prevState)
    }
    return (
        <div className="wrapper">
            <div className="state">
                <h1 className="state--title">Do I feel like going out tonight?</h1>
                <div onClick={changeMind} className="state--value">
                    <h1>{isGoingOut ? "yes" : "no"}</h1>
                </div>
            </div>
        </div>

    )
}
