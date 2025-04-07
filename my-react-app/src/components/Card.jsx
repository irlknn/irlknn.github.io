import { Link } from "react-router-dom";

function Card({ hackathon }) {

    if (!hackathon) {
        return null; // Return nothing if hackathon is undefined
    }

    return (
        <div className="card">
            <div className="image-content">
                <span className="overlay"></span>
                <img
                    alt="description"
                    src={"images/image" + hackathon.id + ".png"}
                    className="card-img"
                />
            </div>
            <div className="card-content">
                <h3 className="name">{hackathon.name}</h3>
                <p className="theme">{hackathon.theme}</p>
                <p className="date">{hackathon.date}</p>
                <p className="rules">{hackathon.rules}</p>
                <Link to={`/hackathon/${hackathon.id}`}>
                    <button className="button">View more</button>
                </Link>
            </div>
        </div>
    );
}

export default Card;
