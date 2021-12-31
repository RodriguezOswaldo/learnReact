import './App.css';
import Card from "./components/Card";
import data from "./data";
import Nav from "./components/Nav";
import Footer from "./components/Footer";


function App() {
    const cities = data.map(item => {
        return <Card
            key={item.id}
            items={item}
        />
    })
    return (
        <div className="App">
            <Nav/>
            {cities}
            <hr/>
            <Footer/>
        </div>

    );
}

export default App;
