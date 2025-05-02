import { Timestamp } from "firebase/firestore";
import { Link } from "react-router-dom";

function Card({ hackathon }) {

    if (!hackathon) {
        return null;
    }

    const formatDate = (dateString) => {
        if (!Timestamp) return "unknown date";
        if (Timestamp.seconds) {
            return new Date(dateString.seconds * 1000).toLocaleDateString();
        }
        return Timestamp;
    }

    return (
        <div className="card">
            <div className="image-content">
                <span className="overlay"></span>
                <img
                    alt="description"
                    src={"images/image" + hackathon.Hackathon_ID + ".png"}
                    className="card-img"
                />
            </div>
            <div className="card-content">
                <h3 className="name">{hackathon.name}</h3>
                <p className="theme">{hackathon.theme}</p>
                <p className="date">{formatDate(hackathon.date)}</p>
                <p className="rules">{hackathon.rules}</p>
                <Link to={`/hackathon/${hackathon.Hackathon_ID}`}>
                    <button className="button">View more</button>
                </Link>
            </div>
        </div>
    );
}

export default Card;
