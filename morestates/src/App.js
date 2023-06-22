import React from 'react'
import './App.css';

function App() {

  const [result, setResult] = React.useState(0)

  function add() {
    setResult(result + 1)
  }
  function remove() {
    setResult(result - 1)
  }
  return (
    <div className="counter">
      <button onClick={remove} className="counter--minus">-</button>
      <div className="counter--count">
        <h1>{result}</h1>
      </div>
      <button onClick={add} className="counter--plus">+</button>

    </div>

  );
}

export default App;
