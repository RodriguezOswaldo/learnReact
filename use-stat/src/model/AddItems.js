import React from "react";

export default function AddItems(){

    const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"])

    function addItem(){

    }
    const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
    return(
        <div className="AddItems">
            <button>Add Item</button>
            {thingsElements}
        </div>
    )
}