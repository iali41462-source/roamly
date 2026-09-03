import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";


function TripDetails() {

    const navigate = useNavigate();

    const { tripId } = useParams();

    const [trip, setTrip] = useState(null);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");


    useEffect(() => {

        async function fetchTrip() {

            try {

                const response = await fetch(
                    `${import.meta.env.VITE_API_URL}/api/trips/${tripId}`,
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
                        "Unable to load trip."
                    );

                    return;
                }


                setTrip(data.data);

            } catch (error) {

                setError(
                    "Unable to connect to the server."
                );

            } finally {

                setLoading(false);
            }
        }


        fetchTrip();

    }, [tripId]);


    // Loading

    if (loading) {

        return (

            <main className="trip-details-not-found">

                <div className="container">

                    <h1>
                        Loading trip...
                    </h1>

                </div>

            </main>
        );
    }


    // Error / Trip not found

    if (error || !trip) {

        return (

            <main className="trip-details-not-found">

                <div className="container">

                    <h1>
                        Trip not found
                    </h1>

                    <p>
                        {error ||
                            "Sorry, we couldn't find this journey."}
                    </p>

                </div>

            </main>
        );
    }


    return (

        <main className="trip-details">


            {/* Hero */}

            <section className="trip-details__hero">

                <img
                    src={trip.image}
                    alt={trip.title}
                />

                <div className="trip-details__hero-overlay"></div>

                <div className="container">

                    <div className="trip-details__hero-content">

                        <p className="trip-details__eyebrow">
                            {trip.location}
                        </p>

                        <h1>
                            {trip.title}
                        </h1>

                        <p className="trip-details__hero-description">
                            {trip.description}
                        </p>

                    </div>

                </div>

            </section>


            {/* Trip Info */}

            <section className="trip-details__info">

                <div className="container">

                    <div className="trip-details__info-grid">


                        <div>

                            <span>
                                Duration
                            </span>

                            <strong>
                                {trip.duration}
                            </strong>

                        </div>


                        <div>

                            <span>
                                Starting from
                            </span>

                            <strong>
                                ${Number(trip.price).toLocaleString()}
                            </strong>

                        </div>


                        <div>

                            <span>
                                Experience
                            </span>

                            <strong>
                                Curated journey
                            </strong>

                        </div>


                        <button
                            onClick={() => {

                                const token =
                                    localStorage.getItem("token");


                                if (token) {

                                    navigate(
                                        `/booking/${tripId}`
                                    );

                                } else {

                                    navigate("/login");

                                }

                            }}
                        >

                            Book this trip

                            <span>
                                ↗
                            </span>

                        </button>


                    </div>

                </div>

            </section>


            {/* Itinerary */}

            <section className="trip-details__itinerary">

                <div className="container">


                    <div className="trip-details__section-heading">

                        <div>

                            <p>
                                YOUR JOURNEY
                            </p>

                            <h2>

                                Your journey.

                                <span>
                                    Endless memories.
                                </span>

                            </h2>

                        </div>


                        <p>

                            Every day is thoughtfully planned
                            while leaving enough room for you
                            to explore at your own pace.

                        </p>

                    </div>


                    <div className="trip-details__days">


                        <div className="trip-details__day">

                            <div className="trip-details__day-number">
                                01
                            </div>

                            <div className="trip-details__day-content">

                                <h3>
                                    Welcome to your destination
                                </h3>

                                <p>
                                    Arrive at your destination,
                                    settle into your accommodation
                                    and begin your journey.
                                </p>

                            </div>

                        </div>


                        <div className="trip-details__day">

                            <div className="trip-details__day-number">
                                02
                            </div>

                            <div className="trip-details__day-content">

                                <h3>
                                    Discover the destination
                                </h3>

                                <p>
                                    Explore the most beautiful
                                    landmarks, local culture and
                                    unforgettable places.
                                </p>

                            </div>

                        </div>


                        <div className="trip-details__day">

                            <div className="trip-details__day-number">
                                03
                            </div>

                            <div className="trip-details__day-content">

                                <h3>
                                    Local experiences
                                </h3>

                                <p>
                                    Enjoy carefully selected local
                                    experiences and discover the
                                    destination from a different perspective.
                                </p>

                            </div>

                        </div>


                        <div className="trip-details__day">

                            <div className="trip-details__day-number">
                                04
                            </div>

                            <div className="trip-details__day-content">

                                <h3>
                                    Explore and relax
                                </h3>

                                <p>
                                    Spend the day exploring hidden
                                    corners, beautiful views and
                                    local restaurants.
                                </p>

                            </div>

                        </div>


                        <div className="trip-details__day">

                            <div className="trip-details__day-number">
                                05
                            </div>

                            <div className="trip-details__day-content">

                                <h3>
                                    Unforgettable moments
                                </h3>

                                <p>
                                    Continue your adventure with
                                    memorable activities and unique
                                    experiences.
                                </p>

                            </div>

                        </div>


                        <div className="trip-details__day">

                            <div className="trip-details__day-number">
                                06
                            </div>

                            <div className="trip-details__day-content">

                                <h3>
                                    Until next time
                                </h3>

                                <p>
                                    Enjoy your final moments before
                                    heading home with memories to
                                    last a lifetime.
                                </p>

                            </div>

                        </div>


                    </div>

                </div>

            </section>


            {/* Included */}

            <section className="trip-details__included">

                <div className="container">

                    <div className="trip-details__included-box">


                        <div>

                            <p>
                                WHAT'S INCLUDED
                            </p>

                            <h2>

                                Everything you need

                                <span>
                                    for the journey.
                                </span>

                            </h2>

                        </div>


                        <div className="trip-details__included-list">

                            <span>
                                ✓ Accommodation
                            </span>

                            <span>
                                ✓ Local experiences
                            </span>

                            <span>
                                ✓ Selected transfers
                            </span>

                            <span>
                                ✓ Trip support
                            </span>

                            <span>
                                ✓ Curated itinerary
                            </span>

                            <span>
                                ✓ Destination guidance
                            </span>

                        </div>


                    </div>

                </div>

            </section>


        </main>
    );
}


export default TripDetails;