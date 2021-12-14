import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SecondPart from './OtherApp';
import reportWebVitals from './reportWebVitals';
import Nav from "./Nav";
import Page from "./Page";
import YouGotItOwn from "./Why";

//     const test = (
//         <div>
//             <h2>my test from the page</h2>
//         </div>
//     )


ReactDOM.render(
  <React.StrictMode>
      <Nav/>
      <YouGotItOwn/>
      <SecondPart/>
        <App />

      <Page />
  </React.StrictMode>
    // test
    ,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
