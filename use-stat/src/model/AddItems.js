import React from "react";

export default function AddItems(){
    /**
     * Challenge: Convert the code below to use an array
     * held in state instead of a local variable. Initialize
     * the state array with the same 2 items below
     *
     * Don't worry about fixing `addItem` quite yet.
     */
    const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"])

    function addItem(){
        setThingsArray(prevThingsArray =>{
            return [...prevThingsArray, `Thing${prevThingsArray.length + 1}`]
        } )
    }
    const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
    return(
        <div className="AddItems">
            <button>Add Item</button>
            {thingsElements}
        </div>
    )
}