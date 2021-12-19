import Facebook from './Facebook.png';
import Github from './GitHub.png';
import Instagram from './Instagram.png';
import Twitter from './Twitter.png';


export default function Footer() {
    return (
        <div className="Icons">
            <a href="#"><img src={Facebook}></img></a>
            <a href="#"><img src={Github}></img></a>
            <a href="#"><img src={Instagram}></img></a>
            <a href="#"><img src={Twitter}></img></a>
        </div>
    );
}