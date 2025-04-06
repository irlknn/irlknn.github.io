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
            <Card popular={true}></Card>
            <h2>Leaderboard</h2>
            <Leaderboard />
        </>
    );
}

// createRoot(document.getElementById('root')).render(
//     <StrictMode>
//         <Topbar />
//         <Home />
//         <h2>Popular Hackathons</h2>
//         <Card popular={true}></Card>
//         <h2>Leaderboard</h2>
//         <Leaderboard />
//         <Footer />
//     </StrictMode>
// )


export default Home;