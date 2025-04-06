import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Competition from "./Competition";
import PersonAcount from "./PersonAccount";

import Rating from "./Rating";
import Footer from "./components/Footer";
// import Layout from "./components/Layout";
import HackathonDetails from "./HackathonDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/competition" element={<Competition />} />
        <Route path="/rating" element={<Rating />} />
        <Route path="/hackathon/:id" element={<HackathonDetails />} />
        <Route path="/personAccount" element={<PersonAcount />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
