import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Test from "./components/Test";
import katie from "./components/katie.png";
import star from "./components/star.png";
import weeding from "./components/wedding.png";
import bike from "./components/bike.png";
import Maps from "./components/Maps";
import speechBox from './components/SpeechBox';
import Talk from "./components/Talk";
import jokesData from "./components/jokesData"
import Joke from "./components/Joke";

export default function App() {
    //Speeches
    const speechElement = speechBox.map(speech => {
        return <Talk title={speech.title} speaker={speech.speaker}  img={speech.img} my_date={speech.my_date} link={speech.link}/>
    })
    //Jokes
    const jokeElements = jokesData.map(joke => {
        return <Joke setup={joke.setup} punchline={joke.punchline} />
    })
    return (
        <div className="App">
            <Nav/>
            {jokeElements}
            {speechElement}

            <Hero/>
            <div className="mainCard">
                <Card
                    img={katie}
                    star={star}
                    span1="5.0"
                    span2="6"
                    span3="USA"
                    msg="Life Lessons with Katie Zaferes"
                    price="From $136"
                />
                <Card
                    img={weeding}
                    star={star}
                    span1="5.0"
                    span2="30"
                    span3="USA"
                    msg="Learn from Wedding photography"
                    price="From $125"
                />
                <Card className="bike"
                      img={bike}
                      star={star}
                      span1="4.8"
                      span2="2"
                      span3="USA"
                      msg="Group Mountain Biking"
                      price="From $125"
                />
            </div>
        </div>
    );
}
