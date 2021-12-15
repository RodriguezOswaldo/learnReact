function Header(){
    return(
        <header>
            <nav>
                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" width="40px" />
            </nav>
        </header>
    );
}
function Footer(){
    return(
        <footer>
            <small>© 2021 Rodríguez development. All rights reserved.</small>
        </footer>
    )
}
function MainContent(){
    return(
        <div>
            <h2> Why is Own learning React</h2>
            <ol>
                <li>Cause I need it for a job</li>
                <li>Cause I don't know many JS libraries</li>
                <li>because the market is hot!!</li>
            </ol>
        </div>
    );
}

function YouGotItOwn(){
    return(
        <div>
            <Header/>
            <MainContent/>
            <Footer/>
        </div>
    );
}

export default YouGotItOwn;