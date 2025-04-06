import { Link } from "react-router-dom";

function Topbar() {
    return (
        <>
            <header>
                <nav className="nav-menu">
                    <div className="home">
                        <Link to="/">
                            <img alt="description" src="https://live.staticflickr.com/124/337160380_f5681cab06_w.jpg"></img>
                                Home
                        </Link>
                    </div>

                    <ul className="nav-list">
                        <li className="list-item">
                            <Link to="/competition">
                                Hackathons
                            </Link>
                        </li>

                        <li className="list-item">
                            <Link to="/personAccount">
                                My account
                            </Link>
                        </li>

                        <li className="list-item">
                            <Link to="/rating">
                                Rating
                            </Link>
                        </li>

                    </ul>
                </nav>
            </header>
        </>
    );

}

export default Topbar;