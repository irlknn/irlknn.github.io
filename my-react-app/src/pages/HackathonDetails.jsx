import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Topbar from "../components/Topbar";
import '../style/hackathon.css';
import '../style/general.css';
import displayBanner from '../components/NotificationBanner';
import { getHackathonById } from '../databaseService';
import { UserContext } from "../UserContext";
import { useContext } from "react";

function HackathonDetails() {
    const { user } = useContext(UserContext);
    const { id } = useParams();

    const [hackathon, setHackathon] = useState(null);
    const [countdown, setCountdown] = useState({ days: '00', hours: '00', minutes: '00', seconds: '00' });

    const hackathonDate = new Date(hackathon.date.seconds * 1000);
    const formattedDate = hackathonDate.toLocaleDateString();

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getHackathonById(id);
                setHackathon(data);
                startCountdown(data.date, setCountdown);
            } catch (error) {
                alert('Error fetching hackathon data:', error);
            }
        }
        fetchData();
    }, [id]);

    const handleJoinClick = () => change(hackathon, user);

    if (!hackathon) return <h2>Loading...</h2>;

    return (
        <>
            <Topbar />
            <main>

                <div className="preview">
                    <div className="left-side">
                        <div className="image-container">
                            <img className="hackathon-image" src={`/images/image${hackathon.Hackathon_ID}.png`} alt=""></img>                    </div>
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
                        <p className="deadline">Deadline<br />{formattedDate}</p>
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

function change(hackathon, user) {
    const button = document.getElementById('join-button');
    let joinedHackathons = JSON.parse(localStorage.getItem('joinedHackathons')) || [];
    const alreadyJoined = joinedHackathons.some(h => h.id === hackathon.id);

    if (!user) {
        displayBanner('Please, log in to join the hackathon!');
        button.innerHTML = 'Please, log in';
        button.disabled = true;
        return;
    } else if (alreadyJoined) {
        displayBanner('You have already joined this hackathon!');
        button.innerHTML = 'You are already in line';
        button.disabled = true;
        return;
    } else {
        button.innerHTML = 'Please, wait';
        button.style.background = "rgb(103, 152, 151)";
        setTimeout(() => {
            button.innerHTML = 'Look in profile';
            button.style.background = "rgb(103, 135, 152)";
            button.disabled = true;
            button.style.cursor = "default";
        }, 780);
        joinedHackathons.push(hackathon);
        localStorage.setItem('joinedHackathons', JSON.stringify(joinedHackathons));
    }
}

function startCountdown(timestamp, setCountdown) {
    const targetDate = new Date(timestamp.seconds * 1000);

    const interval = setInterval(() => {
        const now = new Date();
        const distance = targetDate - now;

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
}

export default HackathonDetails;
