import Leaderboard from "../components/Leaderboard";
import Topbar from "../components/Topbar";

function Rating() {
    return (
        <>
            <Topbar />
            <h2>Leaderboard</h2>
            <section className="searchbar-section">
                <div>
                    <input placeholder="Enter participants details"></input>
                    <img alt="" className="search-icon" src="images/search.svg"></img>
                </div>
            </section>
            <Leaderboard />
        </>
    );
}

export default Rating;