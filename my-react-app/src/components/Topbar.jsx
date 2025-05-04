import { Link } from "react-router-dom";
import React from "react";
import { UserContext } from "../UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function Topbar() {
  const { user } = useContext(UserContext);

  // function handleLogout() {
  //   auth.signOut().then(() => { setUser(null); })
  //     .catch((error) => {
  //       console.error("Error signing out: ", error);
  //     });
  // }

  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     // User is signed in
  //     console.log("User ID:", user.uid);
  //     console.log("Email:", user.email);
  //     console.log("Display Name:", user.displayName);
  //     console.log("Photo URL:", user.photoURL);
  //   } else {
  //     console.log("No user is currently signed in.");
  //   }
  // });
  const navigate = useNavigate();
  const handleNavigate = () => {
    if (user) {
      navigate(`/user/${user.uid}`);
    } else {
      navigate("/LoginSignup");
    }
  };

  return (
    <>
      <header>
        <nav className="nav-menu">
          <div className="home">
            <Link to="/">
              <img alt="description" src="https://live.staticflickr.com/124/337160380_f5681cab06_w.jpg"></img>
              Home
            </Link>
          </div>

          <ul className="nav-list">
            <li className="list-item">
              <Link to="/competition">
                Hackathons
              </Link>
            </li>

            {user ? (

              <li className="list-item">
                <p onClick={handleNavigate}>
                  My account
                </p>
              </li>
            ) : (
              <li className="list-item">
                <Link to="/LoginSignup">
                  Sign up
                </Link>
              </li>
            )}


            <li className="list-item">
              <Link to="/rating">
                Rating
              </Link>
            </li>

          </ul>
        </nav>
      </header>

    </>
  );

}

export default Topbar;