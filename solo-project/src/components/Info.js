import Own from './Own.jpg';

export default function Info() {
    return (
        <section>
            <div className="InfoCard">
                <img src={Own} alt="Own's photo"></img>
                <h3>Own Rodriguez</h3>
                <p className="CareerName">Full-Stack Developer</p>
                <a href="#">oswaldorodriguez.website</a>

                <div className="Buttons">
                    <button><span></span>Email</button>
                    <button><span></span>LinkedIn</button>
                </div>
            </div>

        </section>
    );
}