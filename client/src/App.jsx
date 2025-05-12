import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Competition from "./pages/Competition";
import PersonAccount from "./pages/PersonAccount";
import HostAccount from "./pages/HostAccount";
import PrivateRoute from "./LoginSignup/PrivateRoute";

import Unauthorized from "./LoginSignup/Unauthorized";
import Rating from "./pages/Rating";
import Footer from "./components/Footer";
import HackathonDetails from "./pages/HackathonDetails";
import LoginSignup from "./LoginSignup/LoginSignup";
import Test from "./Test";
import { UserProvider } from "./UserContext";

function App() {

  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/competition" element={<Competition />} />
          <Route path="/rating" element={<Rating />} />
          <Route path="/hackathon/:id" element={<HackathonDetails />} />
          <Route path="/HostAccount" element={<HostAccount />} />
          <Route path="/LoginSignup" element={<LoginSignup />} />
          <Route path="/Test" element={<Test />} />
          <Route path="/user/:uid" element={
            <PrivateRoute>
              <PersonAccount />
            </PrivateRoute>
          }/>
          <Route path="/unauthorized" element={<Unauthorized />} />
        </Routes>
      </UserProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
