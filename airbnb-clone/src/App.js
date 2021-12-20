import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Test from "./components/Test";

export default function App() {
  return (
    <div className="App">
        <Nav/>
        <Hero/>
        <Card/>
        <Test/>
    </div>
  );
}
