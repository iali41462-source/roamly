import { Link } from "react-router-dom";
function Footer() {
    return (
        <footer className="footer">

            <div className="container">

                <div className="footer__top">

                    <div className="footer__brand">

                        <a
                            href="#top"
                            className="footer__logo"
                        >
                            Roamly<span>.</span>
                        </a>

                        <p>
                            Discover meaningful journeys,
                            unforgettable places, and stories
                            worth bringing home.
                        </p>

                    </div>

                    <div className="footer__links">

                        <div className="footer__column">

                            <h3>Explore</h3>

                            <Link to="/destinations">
                                Destinations
                            </Link>

                            <Link to="/#experiences">
                                Experiences
                            </Link>

                            <Link to="/trips">
                                Featured Trips
                            </Link>


                        </div>

                        <div className="footer__column">

                            <h3>Company</h3>

                            <Link to="/#about">
                                About Roamly
                            </Link>

                            <Link to="/#stories">
                                Traveler Stories
                            </Link>

                            <Link to="/#contact">
                                Contact
                            </Link>

                        </div>

                        <div className="footer__column">

                            <h3>Follow</h3>

                            <a href="#instagram">
                                Instagram
                            </a>

                            <a href="#facebook">
                                Facebook
                            </a>

                            <a href="#youtube">
                                YouTube
                            </a>

                        </div>

                    </div>

                </div>

                <div className="footer__bottom">

                    <p>
                        © 2026 Roamly. All rights reserved.
                    </p>

                    <div className="footer__legal">

                        <a href="#privacy">
                            Privacy
                        </a>

                        <a href="#terms">
                            Terms
                        </a>

                    </div>

                </div>

            </div>

        </footer>
    );
}

export default Footer;