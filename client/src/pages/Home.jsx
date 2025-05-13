import Card from "../components/Card";
import Leaderboard from "../components/Leaderboard";
import Topbar from "../components/Topbar";
import { useEffect, useState } from "react";
import { getHackathons } from "../databaseService";
import Loading from "../components/Loading";
import Footer from "../components/Footer";

function Home() {
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

    if (loading) return <Loading />;
    
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
                {hackathons.slice(0, 3).map((hackathon) => (
                    <Card key={hackathon?.hackathon_ID} hackathon={hackathon} />
                ))}
            </div>
            <h2>Leaderboard</h2>
            <Leaderboard />
            <Footer />
        </>
    );
}

export default Home;