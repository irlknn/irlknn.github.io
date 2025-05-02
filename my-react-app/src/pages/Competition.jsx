import '../style/competition.css';
import Topbar from '../components/Topbar';
import Card from '../components/Card';
import { useState, useEffect } from 'react';
import { getHackathons } from '../databaseService';

import CheckBox from '../components/CheckBox';


// const hackathons = [{
//     "id": 1,
//     "name": "WcHacks",
//     "date": "May 13 2025 19:00:00",
//     "theme": "Artificial Intelligence",
//     "location": "University of Waterloo, Waterloo, ON",
//     "prize": "1000",
//     "description": "Hack the North is Canada's biggest hackathon, happening at the University of Waterloo. For 36 hours, 1000 students from around the world will come together to learn something new, create projects, and share them with the world. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//     "rules": "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
// },
// {
//     "id": 2,
//     "name": "One Trillion Agents Hackaton",
//     "date": "April 20 2025 23:59:59",
//     "theme": "Gaming",
//     "location": "University of Toronto, Toronto, ON",
//     "prize": "10,000",
//     "description": "One Trillion Agents Hackaton is a hackathon that brings together 300 students from across North America to create innovative projects in 36 hours. Whether you're a beginner or a seasoned hacker, we welcome you to join us for a weekend of learning and fun.",
//     "rules": "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
// },
// {
//     "id": 3,
//     "name": "Predictive AI In Healthcare with FHIR®",
//     "date": "March 30 2025 23:59:59",
//     "theme": "Web Development",
//     "prize": "no prize",
//     "location": "Western University, London, ON",
//     "description": "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//     "rules": "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
// },
// {
//     "id": 4,
//     "name": "Azure AI Developer Hackathon",
//     "date": "May 28 2025 19:00:00",
//     "theme": "Artificial Intelligence",
//     "location": "Online",
//     "prize": "500",
//     "description": "Hack the North is Canada's biggest hackathon, happening at the University of Waterloo. For 36 hours, 1000 students from around the world will come together to learn something new, create projects, and share them with the world.",
//     "rules": "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
// },
// {
//     "id": 5,
//     "name": "Code fest",
//     "date": "April 25 2025 10:00:00",
//     "theme": "Databases",
//     "location": "Online",
//     "prize": "3500",
//     "description": "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//     "rules": "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
// },
// {
//     "id": 6,
//     "name": "Nova Hacks III",
//     "date": "May 19 2025 19:00:00",
//     "theme": "Blockchain",
//     "prize": "no prize",
//     "location": "University of Waterloo, Waterloo, ON",
//     "description": "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//     "rules": "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
// }];

function Competition() {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [filteredHackathons, setFilteredHackathons] = useState([]);

    const openNav = () => setIsSidebarOpen(true);
    const closeNav = () => setIsSidebarOpen(false);

    const handleFilter = (filters) => {
        setSelectedFilters(filters); // Update
    };

    const applyFilters = () => {
        if (selectedFilters.length === 0) {
            setFilteredHackathons(hackathons); // Show all hackathons
        }
        else {
            const filtered = hackathons.filter((hackathon) =>
                selectedFilters.some((filter) => hackathon.theme.includes(filter))
            );
            setFilteredHackathons(filtered); // Update
        }
        closeNav();
    };

    const [hackathons, setHackathons] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getHackathons();
                setHackathons(data);
                console.log("Hackathons: ", hackathons);
            } catch (error) {
                console.error('Error fetching hackathons:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    useEffect(() => {
        setFilteredHackathons(hackathons); 
    }, [hackathons]);

    console.log("Filtered Hackathons: ", filteredHackathons);

    if (loading) return <p>Loading...</p>;

    return (
        <>
            <Topbar />
            <h1>Hackathons</h1>

            <div className="main-top">
                <div className="filter" onClick={openNav}>
                    <img alt=" " src="https://static.thenounproject.com/png/4800805-200.png" />
                    Filters
                </div>
                <input type="text" placeholder="Search" className="search"></input>
                <div className="dropdown">
                    <p className="sort-details">sort by &#8595;</p>
                    <div className="dropdown-content">
                        <p>By 1</p>
                        <p>By 2</p>
                        <p>By 3</p>
                        <p>By 4</p>
                    </div>
                </div>
            </div>

            <main>
                <div className={`sidenav ${isSidebarOpen ? 'open' : ''}`}>
                    <button className="closebtn" onClick={closeNav}>&times;</button>
                    <form>
                        <h2>Filter by categories</h2>
                        <CheckBox handleFilter={handleFilter} />
                    </form>
                    <button class="searchbtn" onClick={applyFilters}>Search</button>
                </div>

                <div className="card-grid">
                    {filteredHackathons.map((hackathon) => (
                        <Card key={hackathon?.Hackathon_ID} hackathon={hackathon} />
                    ))}
                </div>

            </main>
        </>
    );
}

export default Competition;
