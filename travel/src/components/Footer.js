export default function Footer(){
    //getting year
    var date = new Date().getFullYear();
    console.log(date);


    return(
        <footer className="footer">
            <p>&copy;{date} | <a href="https://github.com/RodriguezOswaldo">Oswaldo Rodriguez</a> |
                South Carolina </p>
        </footer>
    )
}