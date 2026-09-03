import { useEffect, useState } from "react";
import TripCard from "../components/TripCard";


function Trips() {

    const [trips, setTrips] = useState([]);

    const [activeCategory, setActiveCategory] =
        useState("All");

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");


    // Get trips from Laravel

    useEffect(() => {

        async function fetchTrips() {

            try {

                const response = await fetch(
                    `${import.meta.env.VITE_API_URL}/api/trips`,
                    {
                        headers: {
                            "Accept": "application/json",
                        },
                    }
                );


                const data = await response.json();
                


                if (!response.ok) {

                    setError(
                        data.message ||
                        "Unable to load trips."
                    );

                    return;
                }


                setTrips(data.data);


            } catch (error) {

                setError(
                    "Unable to connect to the server."
                );

            } finally {

                setLoading(false);

            }
        }


        fetchTrips();

    }, []);


    // Filter trips

    const filteredTrips =
        activeCategory === "All"
            ? trips
            : trips.filter(
                (trip) =>
                    trip.location === activeCategory
            );


    return (
        <main className="trips-page">


            {/* Hero */}

            <section className="trips-page__hero">

                <div className="container">

                    <div className="trips-page__hero-content">

                        <div>

                            <p className="trips-page__eyebrow">
                                CURATED JOURNEYS
                            </p>

                            <h1>
                                Trips worth
                                <span> taking.</span>
                            </h1>

                            <p className="trips-page__intro">
                                Thoughtfully designed journeys for
                                people who want to see more,
                                experience more and remember more.
                            </p>

                        </div>


                        <div className="trips-page__hero-stat">

                            <strong>
                                {trips.length}+
                            </strong>

                            <span>
                                curated journeys
                                <br />
                                around the world
                            </span>

                        </div>

                    </div>

                </div>

            </section>


            {/* Trips */}

            <section className="trips-list">

                <div className="container">

                    <div className="trips-list__header">

                        <div>

                            <p className="trips-list__eyebrow">
                                FIND YOUR JOURNEY
                            </p>

                            <h2>
                                Where will you
                                <span> go?</span>
                            </h2>

                        </div>

                        <p>
                            Choose a journey that matches your
                            curiosity, your pace and your idea
                            of adventure.
                        </p>

                    </div>


                    {/* Filters */}

                    <div className="trips-filter">

                        {[
                            "All",
                            "Europe",
                            "Asia",
                            "Americas",
                            "Islands",
                            "Mountains",
                        ].map((category) => (

                            <button
                                key={category}
                                className={
                                    activeCategory === category
                                        ? "trips-filter__button trips-filter__button--active"
                                        : "trips-filter__button"
                                }
                                onClick={() =>
                                    setActiveCategory(category)
                                }
                            >
                                {category}
                            </button>

                        ))}

                    </div>


                    {/* Loading */}

                    {loading && (

                        <p>
                            Loading trips...
                        </p>

                    )}


                    {/* Error */}

                    {!loading && error && (

                        <p className="login-form__error">
                            {error}
                        </p>

                    )}


                    {/* Trip Cards */}

                    {!loading && !error && (

                        <div className="trips-list__grid">

                            {filteredTrips.map((trip) => (

                                <TripCard
                                    key={trip.id}
                                    tripId={trip.id}
                                    image={trip.image}
                                    title={trip.title}
                                    location={trip.location}
                                    duration={trip.duration}
                                    price={trip.price}
                                />

                            ))}

                        </div>

                    )}

                </div>

            </section>


            {/* CTA */}

            <section className="trips-cta">

                <div className="container">

                    <div className="trips-cta__box">

                        <div>

                            <p className="trips-cta__eyebrow">
                                DON'T KNOW WHERE TO START?
                            </p>

                            <h2>
                                Let the journey
                                <span> find you.</span>
                            </h2>

                        </div>

                        <button className="trips-cta__button">
                            Explore destinations
                            <span>↗</span>
                        </button>

                    </div>

                </div>

            </section>

        </main>
    );
}


export default Trips;