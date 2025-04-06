import { Link } from "react-router-dom";

function Card({ popular }) {

    const cards = [{
        "id": 1,
        "name": "WcHacks",
        "date": "May 13 2025 19:00:00",
        "theme": "Robotic Process Automation",
        "location": "University of Waterloo, Waterloo, ON",
        "prize": "1000",
        "description": "Hack the North is Canada's biggest hackathon, happening at the University of Waterloo. For 36 hours, 1000 students from around the world will come together to learn something new, create projects, and share them with the world. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "rules": "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        "id": 2,
        "name": "One Trillion Agents Hackaton",
        "date": "April 20 2025 23:59:59",
        "theme": "Web, gaming",
        "location": "University of Toronto, Toronto, ON",
        "prize": "10,000",
        "description": "One Trillion Agents Hackaton is a hackathon that brings together 300 students from across North America to create innovative projects in 36 hours. Whether you're a beginner or a seasoned hacker, we welcome you to join us for a weekend of learning and fun.",
        "rules": "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        "id": 3,
        "name": "Predictive AI In Healthcare with FHIR®",
        "date": "March 30 2025 23:59:59",
        "theme": "Machine Learning/AI",
        "prize": "no prize",
        "location": "Western University, London, ON",
        "description": "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "rules": "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        "id": 4,
        "name": "Azure AI Developer Hackathon",
        "date": "May 28 2025 19:00:00",
        "theme": "Machine Learning/AI",
        "location": "Online",
        "prize": "500",
        "description": "Hack the North is Canada's biggest hackathon, happening at the University of Waterloo. For 36 hours, 1000 students from around the world will come together to learn something new, create projects, and share them with the world.",
        "rules": "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        "id": 5,
        "name": "Code fest",
        "date": "April 25 2025 10:00:00",
        "theme": "Databases, Web",
        "location": "Online",
        "prize": "3500",
        "description": "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "rules": "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        "id": 6,
        "name": "Nova Hacks III",
        "date": "May 19 2025 19:00:00",
        "theme": "Blockchain, Fintech",
        "prize": "no prize",
        "location": "University of Waterloo, Waterloo, ON",
        "description": "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "rules": "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }];
    const displayedCards = popular ? cards.slice(0, 3) : cards;

    return (
        <>
            <div className="card-grid">
                {displayedCards.map((card) =>
                    <div className="card" key={card.id}>
                        <div className="image-content">
                            <span className="overlay"></span>
                            <img alt="description" src={"images/image" + card.id + ".png"} className="card-img"></img>
                        </div>
                        <div className="card-content">
                            <h3 className="name">{card.name}</h3>
                            <p className="theme">{card.theme}</p>
                            <p className="date">{card.date}</p>
                            <p className="rules">{card.rules}</p>
                            <Link to={`/hackathon/${card.id}`}>
                                <button className="button">View more</button>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}


export default Card;