import Own from './Own.jpg';
import About from "./About";
import Interest from "./Interest";
import Footer from "./Footer";

export default function Info() {
    return (
        <section>
            <div className="InfoCard">
                <img src={Own} alt="Own's"></img>
                <h3>Own Rodríguez</h3>
                <p className="CareerName">Full-Stack Developer</p>
                <a href="https://portfolio-oswald.netlify.app/"><small>oswaldorodriguez.website</small></a>
                <div className="Buttons">
                    <button><ion-icon name="mail"></ion-icon> Email</button>
                </div>
                <div className="Content">
                    <About />
                    <Interest />
                </div>

                <Footer />
            </div>

        </section>
    );
}