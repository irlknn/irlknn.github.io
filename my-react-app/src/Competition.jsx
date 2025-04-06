import './style/competition.css';
import Topbar from './components/Topbar';
import Card from './components/Card';
import { useState } from 'react';

function Competition() {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const openNav = () => setIsSidebarOpen(true);
    const closeNav = () => setIsSidebarOpen(false);

    return (
        <>
            <Topbar />
            <h1>Hackathons</h1>

            <div className="main-top">
                <div className="filter" onClick={openNav}><img alt=" " src="https://static.thenounproject.com/png/4800805-200.png"></img>Filters</div>
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
                        <label>
                            <input type="checkbox"></input>
                            Artificial Intelligence
                        </label>
                        <label>
                            <input type="checkbox"></input>
                            Web Development
                        </label>
                        <label>
                            <input type="checkbox"></input>
                            Blockchain
                        </label>
                        <label>
                            <input type="checkbox"></input>
                            Databases
                        </label>
                        <label>
                            <input type="checkbox"></input>
                            Gaming
                        </label>
                    </form>
                    <button class="searchbtn" onClick={closeNav}>Search</button>
                </div>

                <Card popular={false}></Card>
            </main>
        </>
    );
}

export default Competition;
// // import sidenav_competition from './sidenav_competition.css';
// // import './style/hachathon-card.css';
// import './style/competition.css';
// import Topbar from './components/Topbar';
// import Card from './components/Card';
// import { useState } from 'react';

// function Competition() {

//     const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//     const openNav = () => setIsSidebarOpen(true);
//     const closeNav = () => setIsSidebarOpen(false);

//     return (
//         <>
//             <Topbar />
//             <h1>Hackathons</h1>
//             <div className="main-top">
//                 <div className="filter" onClick={openNav}><img alt=" " src="https://static.thenounproject.com/png/4800805-200.png"></img>Filters</div>
//                 <input type="text" placeholder="Search" className="search"></input>
//                 <div className="dropdown">
//                     <p className="sort-details">sort by &#8595;</p>
//                     <div className="dropdown-content">
//                         <a href="#">By 1</a>
//                         <a href="#">By 2</a>
//                         <a href="#">By 3</a>
//                         <a href="#">By 4</a>
//                     </div>
//                 </div>
//             </div>


//             <div className={`sidenav ${isSidebarOpen ? 'open' : ''}`}>
//                 <a className="closebtn" onClick={closeNav}>&times;</a>
//                 <form>
//                     <h2>Filter by categories</h2>
//                     <label>
//                         <input type="checkbox"></input>
//                         Artificial Intelligence
//                     </label>
//                     <label>
//                         <input type="checkbox"></input>
//                         Web Development
//                     </label>
//                     <label>
//                         <input type="checkbox"></input>
//                         Blockchain
//                     </label>
//                     <label>
//                         <input type="checkbox"></input>
//                         Databases
//                     </label>
//                     <label>
//                         <input type="checkbox"></input>
//                         Gaming
//                     </label>
//                 </form>
//                 <button class="searchbtn" onClick={closeNav}>Search</button>
//             </div>

//             <Card popular={false}></Card>
//         </>
//     );
// }


// export default Competition;