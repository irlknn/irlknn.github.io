import React, { useState, useEffect } from "react";
import AccountTopbar from "../components/AcountTopbar";
import "../style/account_topbar.css";
import "../style/account.css";
import { Link } from "react-router-dom";

function PersonAccount() {
    const [activeTab, setActiveTab] = useState("active");
    const [joinedHackathons, setJoinedHackathons] = useState([]);

    useEffect(() => {
        // loading joined hackathons
        const storedHackathons = JSON.parse(localStorage.getItem("joinedHackathons")) || [];
        setJoinedHackathons(storedHackathons);

        // loading active tab
        const savedTab = localStorage.getItem("activeTab") || "Active";
        setActiveTab(savedTab);

    }, []);

    // saving active tab
    useEffect(() => {
        localStorage.setItem("activeTab", activeTab);
    }, [activeTab]);

    // CHANGE
    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    const removeHackathon = (id) => {
        const updatedHackathons = joinedHackathons.filter(hackathon => hackathon.id !== id);
        localStorage.setItem("joinedHackathons", JSON.stringify(updatedHackathons));
        setJoinedHackathons(updatedHackathons);
    };

    const displayBanner = (id) => {
        const banner = document.getElementById('banner');
        banner.innerHTML = `
            <p>Are you sure?</p>
            <button class="yes-button">Yes</button>
            <button class="no-button">No</button>
        `;

        banner.style.display = 'block';

        document.querySelector('.yes-button').addEventListener('click', () => {
            banner.style.display = 'none';
            removeHackathon(id);
        });
        document.querySelector('.no-button').addEventListener('click', () => {
            banner.style.display = 'none';// removeHackathon(id)
        });

    }

    // додати витягування з БД інформацію про користувача

    return (
        <>
            <AccountTopbar />

            <div className="account-bg">
                <div className="inner-info">
                    <img alt="" src="/images/account-pic.png" className="account-pic" />
                    <p className="account-nic">irlknn</p>
                </div>
            </div>

            <section className="applications">
                <div className="tab">
                    <button onClick={() => handleTabClick("Active")}
                        className={`tablinks ${activeTab === "Active" ? "active" : ""}`}
                    >
                        Active
                    </button>

                    <button onClick={() => handleTabClick("In_process")}
                        className={`tablinks ${activeTab === "In_process" ? "active" : ""}`}
                    >
                        In process
                    </button>
                    <button onClick={() => handleTabClick("Completed")}
                        className={`tablinks ${activeTab === "Completed" ? "active" : ""}`}
                    >
                        Completed
                    </button>
                </div>

                <div id="Active" className="tabcontent" style={{ display: activeTab === "Active" ? "block" : "none" }}>
                    <div className="no-content">
                        <img src="https://i.pinimg.com/736x/54/9c/10/549c10713685a3162b9f71387c7f1914.jpg" className="no-content" alt=""></img>
                        <h3>No active hackathons</h3>
                        <h3>Look for some here &#8595;</h3>
                        <button className="button">
                            <Link to="/competition">More hackathons</Link>
                        </button>

                    </div>
                </div>

                <div
                    id="In_process"
                    className="tabcontent"
                    style={{ display: activeTab === "In_process" ? "block" : "none" }}
                >
                    <div className="content-wrapper">
                        <div className="banner" id="banner"></div>
                        {joinedHackathons.length > 0 ? (
                            <div className="card-grid">
                                {joinedHackathons.map((hackathon) => (
                                    <div className="card" key={hackathon.id}>
                                        <div className="image-content">
                                            <span className="overlay"></span>
                                            <img src={`images/image${hackathon.id}.png`} className="card-img" alt={`Hackathon ${hackathon.id}`} />
                                        </div>
                                        <div className="card-content">
                                            <h2 className="name">{hackathon.name}</h2>
                                            <p className="rules">You are in line to be confirmed</p>
                                            {/* <button className="button" onClick={() => removeHackathon(hackathon.id)}> */}
                                            <button className="button" onClick={() => displayBanner(hackathon.id)}>
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        ) : (
                            <div className="no-content">
                                <img
                                    src="https://i.pinimg.com/736x/54/9c/10/549c10713685a3162b9f71387c7f1914.jpg"
                                    className="no-content"
                                    alt="No joined hackathons"
                                />
                                <h3>No joined hackathons</h3>
                                <h3>Look for some here ↓</h3>
                                <button className="button">
                                    <Link to="/competition">More hackathons</Link>
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                <div
                    id="Completed"
                    className="tabcontent"
                    style={{ display: activeTab === "Completed" ? "block" : "none" }}
                >
                    <div className="card-grid">
                        <div className="card">
                            <div className="image-content">
                                <span className="overlay"></span>
                                <img src="/images/image7.png" className="card-img" alt="" />
                            </div>
                            <div className="card-content">
                                <h2 className="name">Cat Hacks</h2>

                                <p className="name">Cat Hacks</p>
                                <p className="date">Hackathon ended 18.12.2024</p>
                                <p className="status">3 place</p>
                                <p className="rules">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac turpis sit amet sapien posuere
                                    porttitor.
                                    Quisque ultrices at magna ut pharetra. Morbi porttitor sodales dolor, id feugiat purus dignissim.
                                </p>
                                <button className="button">More</button>
                            </div>
                        </div>
                    </div>

                </div>
            </section >


        </>
    );
}

export default PersonAccount;