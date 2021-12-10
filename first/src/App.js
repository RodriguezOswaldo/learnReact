import logo from './logo.svg';
import './App.css';

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

function tryThis(){
  return(
      <div className="tryThis">
        <h1  class="text-3xl font-bold text-clifford">Hello from the App file!</h1>
          <ul>
              <li class="text-3xl font-bold text-clifford">try this!</li>
              <li class="text-3xl font-bold text-clifford">try this x2!</li>
          </ul>
      </div>

  );
}

export default tryThis;
