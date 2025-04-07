import Card from "./components/Card";
import Leaderboard from "./components/Leaderboard";
import Topbar from "./components/Topbar";

function Home() {
    return (
        <>
            <Topbar />
            < section className="about-us" >
                <div className="info">
                    <h1>About us</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, dolorum. Minus nostrum, deleniti harum
                        provident similique tempore non eum exercitationem, eaque accusantium itaque nam quae in aliquam quia facilis
                        molestias.</p>
                </div>
                <div className="image">
                    <img alt=" " src="https://live.staticflickr.com/124/337160380_f5681cab06_w.jpg"></img>
                </div>
            </section >
            <h2>Popular Hackathons</h2>
            <div className="card-grid">
                {popularHackathons.map((hackathon) => (
                    <Card key={hackathon?.id} hackathon={hackathon} />
                ))}
            </div>
            <h2>Leaderboard</h2>
            <Leaderboard />
        </>
    );
}

const popularHackathons = [{
    "id": 1,
    "name": "WcHacks",
    "date": "May 13 2025 19:00:00",
    "theme": "Artificial Intelligence",
    "location": "University of Waterloo, Waterloo, ON",
    "prize": "1000",
    "description": "Hack the North is Canada's biggest hackathon, happening at the University of Waterloo. For 36 hours, 1000 students from around the world will come together to learn something new, create projects, and share them with the world. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "rules": "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
},
{
    "id": 5,
    "name": "Code fest",
    "date": "April 25 2025 10:00:00",
    "theme": "Databases",
    "location": "Online",
    "prize": "3500",
    "description": "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "rules": "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
},
{
    "id": 6,
    "name": "Nova Hacks III",
    "date": "May 19 2025 19:00:00",
    "theme": "Blockchain",
    "prize": "no prize",
    "location": "University of Waterloo, Waterloo, ON",
    "description": "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "rules": "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
}];


export default Home;