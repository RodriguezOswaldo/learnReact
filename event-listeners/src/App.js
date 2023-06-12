import logo from './logo.svg';
import './App.css';

function App() {
  function handleClick() {
    console.log("I was clicked!")
  }
  function handleOnMouseOver() {
    console.log("mouseOver")

  }
  return (
    <div className="container">
      <img onMouseOver={handleOnMouseOver} alt="random 200px large" src="https://picsum.photos/640/360" />
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default App;
