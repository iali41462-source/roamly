import { Link, useParams } from "react-router-dom";
import destinations from "../data/destinations";


function DestinationDetails() {

    const { destinationId } = useParams();

    const destination = destinations.find(
        (item) => item.slug === destinationId
    );

    if (!destination) {
        return (
            

            <main className="destination-details">
                <section className="destination-details__not-found">
                    <div className="container">
                        <p>DESTINATION NOT FOUND</p>

                        <h1>
                            We couldn't find that place.
                        </h1>

                        <Link to="/destinations">
                            ← Back to destinations
                        </Link>
                    </div>
                </section>
            </main>
        );
    }

    return (
        <>
       
        
        <main className="destination-details">

            {/* Hero */}

            <section className="destination-details__hero">

                <div className="container">

                    <Link
                        to="/destinations"
                        className="destination-details__back"
                    >
                        ← All destinations
                    </Link>

                    <div className="destination-details__hero-content">

                        <div className="destination-details__hero-text">

                            <p className="destination-details__eyebrow">
                                {destination.category}
                            </p>

                            <h1>
                                {destination.name}
                            </h1>

                            <p className="destination-details__location">
                                {destination.country}
                            </p>

                            <p className="destination-details__description">
                                {destination.description}
                            </p>

                        </div>

                        <div className="destination-details__hero-image">

                            <img
                                src={destination.image}
                                alt={destination.name}
                            />

                            <div className="destination-details__image-label">
                                <span>ROAMLY</span>
                                <p>
                                    Worth the journey.
                                </p>
                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* Experience */}

            <section className="destination-details__experience">

                <div className="container">

                    <div className="destination-details__experience-grid">

                        <div className="destination-details__experience-heading">

                            <p className="destination-details__eyebrow">
                                THE EXPERIENCE
                            </p>

                            <h2>
                                Go somewhere
                                <span> unforgettable.</span>
                            </h2>

                        </div>

                        <div className="destination-details__experience-text">

                            <p>
                                Every destination has its own rhythm,
                                character and stories waiting to be
                                discovered.
                            </p>

                            <p>
                                Take your time, explore beyond the
                                obvious and make the journey part of
                                the experience.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* Highlights */}

            <section className="destination-details__highlights">

                <div className="container">

                    <div className="destination-details__highlights-header">

                        <div>
                            <p className="destination-details__eyebrow">
                                HIGHLIGHTS
                            </p>

                            <h2>
                                Why go here?
                            </h2>
                        </div>

                        <p>
                            A few reasons to put {destination.name}
                            on your travel list.
                        </p>

                    </div>


                    <div className="destination-details__highlight-grid">

                        <article className="destination-details__highlight-card">
                            <span>01</span>
                            <h3>Beautiful landscapes</h3>
                            <p>
                                Discover scenery that makes every
                                moment worth remembering.
                            </p>
                        </article>

                        <article className="destination-details__highlight-card">
                            <span>02</span>
                            <h3>Local character</h3>
                            <p>
                                Experience the culture, atmosphere
                                and personality of the place.
                            </p>
                        </article>

                        <article className="destination-details__highlight-card">
                            <span>03</span>
                            <h3>Moments to remember</h3>
                            <p>
                                Turn a simple trip into a story
                                you'll want to tell again.
                            </p>
                        </article>

                    </div>

                </div>

            </section>


            {/* CTA */}

            <section className="destination-details__cta">

                <div className="container">

                    <div className="destination-details__cta-box">

                        <div>
                            <p className="destination-details__eyebrow">
                                READY TO ROAM?
                            </p>

                            <h2>
                                Your next adventure
                                <span> starts here.</span>
                            </h2>
                        </div>

                        <Link
                            to="/destinations"
                            className="destination-details__cta-button"
                        >
                            Explore more
                            <span>↗</span>
                        </Link>

                    </div>

                </div>

            </section>

        </main>
        </>
    );
   
}

export default DestinationDetails;
