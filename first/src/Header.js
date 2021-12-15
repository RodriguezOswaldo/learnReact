export default function Header(){
    return(
        <header>
            <nav className="navigation">
                <div className="imageContainer">
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" className="image"  />
                </div>
                <ul>
                    <li className="list active">
                        <a href="#">
                            <span className="icon"><ion-icon name="planet-outline"></ion-icon></span>
                            <span className="text">Home</span>
                        </a>
                    </li>
                    <li className="list">
                        <a href="#">
                            <span className="icon"><ion-icon name="person-circle-outline"></ion-icon></span>
                            <span className="text">Profile</span>
                        </a>
                    </li>
                    <li className="list">
                        <a href="#">
                            <span className="icon"><ion-icon name="logo-snapchat"></ion-icon></span>
                            <span className="text">Message</span>
                        </a>
                    </li>
                    <li className="list">
                        <a href="#">
                            <span className="icon"><ion-icon name="camera-outline"></ion-icon></span>
                            <span className="text">Photos</span>
                        </a>
                    </li>
                    <li className="list">
                        <a href="#">
                            <span className="icon"><ion-icon name="cog-outline"></ion-icon></span>
                            <span className="text">Settings</span>
                        </a>
                    </li>
                    <div className="indicator"></div>
                </ul>
            </nav>
        </header>
    );
}