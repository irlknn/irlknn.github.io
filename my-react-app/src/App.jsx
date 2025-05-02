import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Competition from "./pages/Competition";
import PersonAcount from "./pages/PersonAccount";

import Rating from "./pages/Rating";
import Footer from "./components/Footer";
import HackathonDetails from "./pages/HackathonDetails";
import LoginSignup from "./LoginSignup/LoginSignup";
import Test from "./Test";
import { UserProvider } from "./UserContext";
// import { LoginSignup } from "./LoginSignup/LoginSignup";

// import { useEffect, useState } from "react";

function App() {
  // const [backendData, setBackendData] = useState("");

  // useEffect(() => {
  //   fetch('/api')
  //     .then(response => response.json())
  //     .then(data => setBackendData(data))
  // }, []);

  return (
    <BrowserRouter>
      {/* {(typeof backendData.text !== 'undefined') ? <h1>{backendData.text}</h1> : <h1>Loading...</h1>} */}
      <UserProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/competition" element={<Competition />} />
          <Route path="/rating" element={<Rating />} />
          <Route path="/hackathon/:id" element={<HackathonDetails />} />
          <Route path="/personAccount" element={<PersonAcount />} />
          <Route path="/LoginSignup" element={<LoginSignup />} />
          <Route path="/Test" element={<Test />} />
        </Routes>
      </UserProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
