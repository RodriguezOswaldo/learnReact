import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Card from "./components/Card";
// import Test from "./components/Test";
// import katie from "../public/katie.png";
// import star from "./star.png";
// import weeding from "../public/wedding.png";
// import bike from "../public/bike.png";
// import Maps from "./components/Maps";
// import speechBox from './components/SpeechBox';
// import Talk from "./components/Talk";
// import jokesData from "./components/jokesData"
// import Joke from "./components/Joke";
import data from "./data";

export default function App() {

    const cards = data.map(items => {
        return <Card
            key={items.id}
            item={items}
            // I an using item={items} || {...items} if I use the second, I would need to delete the item in the Card Component
        />
    })
    //Jokes
    // const jokeElements = jokesData.map(joke => {
    //     return <Joke setup={joke.setup} punchline={joke.punchline} />
    // })
    return (
        <div className="App">
            <Nav/>
            {/*{jokeElements}*/}
            <Hero/>
            <div className="cardList">
                {cards}
            </div>
        </div>
    );
}
