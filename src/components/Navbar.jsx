import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


function Navbar() {

    const navigate = useNavigate();

    const isLoggedIn =
        localStorage.getItem("token") !== null;

    const [menuOpen, setMenuOpen] = useState(false);

    const [profileOpen, setProfileOpen] = useState(false);


    // Get logged-in user



const userName = localStorage.getItem("userName") || "User";

const userEmail = localStorage.getItem("userEmail") || "email";


    // Logout

    async function handleLogout() {

        const token =
            localStorage.getItem("token");


        try {

            if (token) {

                await fetch(
                    "http://127.0.0.1:8000/api/logout",
                    {
                        method: "POST",

                        headers: {
                            "Accept": "application/json",
                            "Authorization": `Bearer ${token}`,
                        },
                    }
                );

            }

        } catch (error) {

            console.error(
                "Logout request failed:",
                error
            );

        } finally {

            // Remove authentication data

            localStorage.removeItem("token");
            localStorage.removeItem("userName");
            localStorage.removeItem("userEmail");
            localStorage.removeItem("isLoggedIn");


            setProfileOpen(false);

            navigate("/");

        }
    }


    return (
        <nav className="navbar">

            <div className="container navbar__inner">

                <Link
                    to="/"
                    className="navbar__logo"
                >
                    Roamly
                </Link>


                <div
                    className={`navbar__links ${
                        menuOpen
                            ? "navbar__links--open"
                            : ""
                    }`}
                >

                    <Link
                        to="/"
                        onClick={() =>
                            setMenuOpen(false)
                        }
                    >
                        Home
                    </Link>

                    <a
                        href="#destinations"
                        onClick={() =>
                            setMenuOpen(false)
                        }
                    >
                        Destinations
                    </a>

                    <a
                        href="#experiences"
                        onClick={() =>
                            setMenuOpen(false)
                        }
                    >
                        Experiences
                    </a>

                    <a
                        href="#trips"
                        onClick={() =>
                            setMenuOpen(false)
                        }
                    >
                        Trips
                    </a>

                    <a
                        href="#about"
                        onClick={() =>
                            setMenuOpen(false)
                        }
                    >
                        About
                    </a>

                </div>


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
                                        {userName
                                            .charAt(0)
                                            .toUpperCase()}
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
                                    onClick={handleLogout}
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
                    className={`navbar__menu ${
                        menuOpen
                            ? "navbar__menu--open"
                            : ""
                    }`}
                    onClick={() =>
                        setMenuOpen(!menuOpen)
                    }
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
