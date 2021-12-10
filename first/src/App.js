import logo from './logo.svg';
import './App.css';
function tryThis(){
    return(
        <div className="tryThis">
            <h3  className="text-3xl font-bold ">Hello from the App file!</h3>
            <ul>
                <li>Continue in numeral 11</li>
                <li>cd project</li>
                <li>npm start</li>
            </ul>
        </div>

    );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


export default tryThis;
