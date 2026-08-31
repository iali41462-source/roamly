import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();

    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const [menuOpen, setMenuOpen] = useState(false);

const [profileOpen, setProfileOpen] = useState(false);




const userName =
    localStorage.getItem("userName");

const userEmail =
    localStorage.getItem("userEmail");



    return (
      <nav className="navbar">
        <div className="container navbar__inner">
          <a href="/" className="navbar__logo">
            Roamly
          </a>

          <div
            className={`navbar__links ${menuOpen ? "navbar__links--open" : ""}`}
          >
            <a href="#top" onClick={() => setMenuOpen(false)}>
              Home
            </a>

            <a href="#destinations" onClick={() => setMenuOpen(false)}>
              Destinations
            </a>

            <a href="#experiences" onClick={() => setMenuOpen(false)}>
              Experiences
            </a>

            <a href="#trips" onClick={() => setMenuOpen(false)}>
              Trips
            </a>

            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>

          </div>

          {/* <a
                    href="#destinations"
                    className="navbar__button"
                >
                    Explore
                </a> */}

{isLoggedIn ? (

    <div className="navbar__profile">

        <button
            className="navbar__profile-button"
            onClick={() =>
                setProfileOpen(!profileOpen)
            }
        >

            <span className="navbar__profile-icon">
                👤
            </span>

            <span className="navbar__profile-name">
                {userName}
            </span>

            <span className="navbar__profile-arrow">
                {profileOpen ? "↑" : "↓"}
            </span>

        </button>


        {profileOpen && (

            <div className="navbar__profile-dropdown">

                <div className="navbar__profile-info">

                    <div className="navbar__profile-avatar">
                        {userName.charAt(0).toUpperCase()}
                    </div>

                    <div>

                        <strong>
                            {userName}
                        </strong>

                        <span>
                            {userEmail}
                        </span>

                    </div>

                </div>


                <div className="navbar__profile-divider"></div>


                <Link
                    to="/my-bookings"
                    onClick={() =>
                        setProfileOpen(false)
                    }
                >
                    My Bookings
                    <span>↗</span>
                </Link>


                <button
                    className="navbar__profile-logout"
                    onClick={() => {

                        localStorage.removeItem(
                            "isLoggedIn"
                        );

                        localStorage.removeItem(
                            "userEmail"
                        );

                        localStorage.removeItem(
                            "userName"
                        );
                        localStorage.removeItem(
                            "userPassword"
                        );

                        setProfileOpen(false);

                        navigate("/");

                    }}
                >
                    Logout
                </button>

            </div>

        )}

    </div>

) : (

    <Link
        to="/login"
        className="navbar__button"
    >
        Login
    </Link>

)}

          <button
            className={`navbar__menu ${menuOpen ? "navbar__menu--open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
    );
}

export default Navbar;