import { Link } from "react-router-dom";

function About() {
    return (
        <main className="about-page">

            {/* Hero */}

            <section className="about-page__hero">

                <div className="container">

                    <p className="about-page__eyebrow">
                        ABOUT ROAMLY
                    </p>

                    <h1>
                        Travel more.
                        <span> Feel more.</span>
                    </h1>

                    <p className="about-page__intro">
                        We create thoughtful journeys for people who
                        want to discover the world, experience new
                        cultures and collect memories that last.
                    </p>

                </div>

            </section>


            {/* Story */}

            <section className="about-story">

                <div className="container">

                    <div className="about-story__layout">

                        <div className="about-story__heading">

                            <p className="about-page__label">
                                OUR STORY
                            </p>

                            <h2>
                                Travel should feel
                                <span> meaningful.</span>
                            </h2>

                        </div>


                        <div className="about-story__content">

                            <p>
                                Roamly was created with a simple idea:
                                travel should be about more than
                                checking places off a list.
                            </p>

                            <p>
                                We believe the best journeys give you
                                a chance to slow down, experience
                                somewhere new and create memories
                                you'll carry with you long after
                                you've returned home.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* Why Roamly */}

            <section className="about-values">

                <div className="container">

                    <div className="about-values__header">

                        <p className="about-page__label">
                            WHY ROAMLY
                        </p>

                        <h2>
                            Made for people who
                            <span> love to explore.</span>
                        </h2>

                    </div>


                    <div className="about-values__grid">

                        <article className="about-value">

                            <span className="about-value__number">
                                01
                            </span>

                            <h3>
                                Thoughtful journeys
                            </h3>

                            <p>
                                Every trip is carefully designed
                                around meaningful experiences,
                                not just destinations.
                            </p>

                        </article>


                        <article className="about-value">

                            <span className="about-value__number">
                                02
                            </span>

                            <h3>
                                Real experiences
                            </h3>

                            <p>
                                Discover places through local
                                culture, unforgettable moments
                                and authentic experiences.
                            </p>

                        </article>


                        <article className="about-value">

                            <span className="about-value__number">
                                03
                            </span>

                            <h3>
                                Travel your way
                            </h3>

                            <p>
                                Choose journeys that match your
                                pace, interests and idea of a
                                perfect adventure.
                            </p>

                        </article>

                    </div>

                </div>

            </section>


            {/* Stats */}

            <section className="about-stats">

                <div className="container">

                    <div className="about-stats__grid">

                        <div>
                            <strong>120+</strong>
                            <span>Destinations</span>
                        </div>

                        <div>
                            <strong>24+</strong>
                            <span>Curated trips</span>
                        </div>

                        <div>
                            <strong>15K+</strong>
                            <span>Happy travelers</span>
                        </div>

                        <div>
                            <strong>40+</strong>
                            <span>Countries</span>
                        </div>

                    </div>

                </div>

            </section>


            {/* CTA */}

            <section className="about-cta">

                <div className="container">

                    <div className="about-cta__box">

                        <div>

                            <p className="about-page__label">
                                READY TO EXPLORE?
                            </p>

                            <h2>
                                Your next journey
                                <span> is waiting.</span>
                            </h2>

                        </div>

                        <Link
                            to="/trips"
                            className="about-cta__button"
                        >
                            Explore trips
                            <span>↗</span>
                        </Link>

                    </div>

                </div>

            </section>

        </main>
    );
}

export default About;