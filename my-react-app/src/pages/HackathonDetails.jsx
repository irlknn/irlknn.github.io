import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Topbar from "../components/Topbar";
import '../style/hackathon.css';
import '../style/general.css';
import displayBanner from '../components/Banner';

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

function HackathonDetails() {
    const { id } = useParams();
    const [hackathon, setHackathon] = useState(null);
    const [countdown, setCountdown] = useState({ days: '00', hours: '00', minutes: '00', seconds: '00' });

    useEffect(() => {
        const found = cards.find(h => h.id === parseInt(id));
        setHackathon(found);

        if (found) {
            const interval = setInterval(() => {
                const now = new Date();
                const hackathonDate = new Date(found.date);
                const distance = hackathonDate - now;

                if (distance < 0) {
                    clearInterval(interval);
                    setCountdown({ days: '00', hours: '00', minutes: '00', seconds: '00' });
                } else {
                    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                    setCountdown({ days, hours, minutes, seconds });
                }
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [id]);

    if (!hackathon) return <h2>Hackathon not found</h2>;

    const handleJoinClick = () => change(parseInt(id));

    return (
        <>
            <Topbar />
            <main>

                <div className="preview">
                    <div className="left-side">
                        <div className="image-container">
                            <img className="hackathon-image" src={`/images/image${hackathon.id}.png`} alt=""></img>                    </div>
                        <h1 className="title">{hackathon.name}</h1>

                        <div className="countdown-box">
                            <div className="countdown"><h3>{countdown.days}</h3><p>Days</p></div>
                            <div className="countdown"><h3>{countdown.hours}</h3><p>Hours</p></div>
                            <div className="countdown"><h3>{countdown.minutes}</h3><p>Minutes</p></div>
                            <div className="countdown"><h3>{countdown.seconds}</h3><p>Seconds</p></div>
                        </div>

                        <button className="join-button" id="join-button" onClick={handleJoinClick}>Join hackathon</button>
                    </div>

                    <div className="right-side">
                        <p className="deadline">Deadline<br></br>{hackathon.date}</p>
                        <hr></hr>
                        <p className="location"><img alt="" src="https://www.svgrepo.com/show/77412/location-point.svg"></img>${hackathon.location}</p>
                        <p className="prize">&#36; {hackathon.prize}</p>
                        <hr></hr>
                        <p className="theme">{hackathon.theme}</p>
                    </div>
                </div>

                <section className="second-section">
                    <p className="description">{hackathon.description}</p>
                    <hr></hr>
                    <p className="rules">{hackathon.rules}</p>
                </section>
                
                <div className='banner' id='banner'></div>
            </main>

        </>
    );
}

function change(hackathonId) {
    const button = document.getElementById('join-button');
    button.innerHTML = 'Please, wait';
    button.style.background = "rgb(103, 152, 151)";
    setTimeout(() => {
        button.innerHTML = 'Look in profile';
        button.style.background = "rgb(103, 135, 152)";
        button.disabled = true;
        button.style.cursor = "default";
    }, 780);

    const hackathon = cards.find(h => h.id === hackathonId);

    if (!hackathon) {
        displayBanner('Hackathon not found </3');
        return;
    }

    let joinedHackathons = JSON.parse(localStorage.getItem('joinedHackathons')) || [];

    const alreadyJoined = joinedHackathons.some(h => h.id === hackathonId);
    if (alreadyJoined) {
        displayBanner('You have already joined this hackathon!');
        return;
    }

    joinedHackathons.push(hackathon);
    localStorage.setItem('joinedHackathons', JSON.stringify(joinedHackathons));
}

export default HackathonDetails;
