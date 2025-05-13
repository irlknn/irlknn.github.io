import '../style/competition.css';
import Topbar from '../components/Topbar';
import Card from '../components/Card';
import { useState, useEffect } from 'react';
import { getHackathons } from '../databaseService';
import Loading from '../components/Loading';
import CheckBox from '../components/CheckBox';
import Footer from '../components/Footer';

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
    }, [hackathons]);

    useEffect(() => {
        setFilteredHackathons(hackathons); 
    }, [hackathons]);

    console.log("Filtered Hackathons: ", filteredHackathons);

    if (loading) return <Loading />;

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
                        <Card key={hackathon?.id} hackathon={hackathon} />
                    ))}
                </div>

            </main>
            <Footer />
        </>
    );
}

export default Competition;
