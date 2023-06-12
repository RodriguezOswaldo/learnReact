import React from 'react';
import './App.css';

function Arrays() {
    const [things, setThings] = React.useState(["thing 1"])

    function addItem() {
        const newThingText = `Thing ${things.length + 1}`
        setThings(prevState => [...prevState, newThingText])
    }
    const thingsElements = things.map(thing => <p key={thing} > {thing}</p>)
    return (
        <div className='Arrays'>
            <div className="container">
                <h1>Arrays</h1>
                <button onClick={addItem}>Add Item from Array</button>
                {thingsElements}
            </div>
        </div>


    );
}

export default Arrays;