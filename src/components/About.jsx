function About() {
    return (
        <section className="about" id="about">

            <div className="container">

                <div className="about__grid">

                    <div className="about__image">

                        <img
                            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=85"
                            alt="Travelers exploring a beautiful destination"
                        />

                        <div className="about__badge">
                            <strong>10+</strong>
                            <span>Years of<br />exploration</span>
                        </div>

                    </div>

                    <div className="about__content">

                        <p className="about__eyebrow">
                            ABOUT ROAMLY
                        </p>

                        <h2>
                            We believe
                            <span> travel should feel different.</span>
                        </h2>

                        <p className="about__description">
                            Roamly was created for curious travelers who
                            want to experience more than the usual tourist
                            path. We bring together inspiring destinations,
                            meaningful experiences and thoughtfully designed
                            journeys in one place.
                        </p>

                        <p className="about__description">
                            From quiet mountain escapes to unforgettable
                            island adventures, our goal is simple — help
                            you discover places that stay with you long
                            after the journey ends.
                        </p>

                        <a
                            href="#experiences"
                            className="about__button"
                        >
                            Explore experiences
                            <span>↗</span>
                        </a>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default About;