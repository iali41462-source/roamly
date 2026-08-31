import { Link } from "react-router-dom";

function MyBookings() {

    const bookings =
        JSON.parse(localStorage.getItem("bookings")) || [];

    return (
        <main className="my-bookings-page">

            {/* Hero */}

            <section className="my-bookings__hero">

                <div className="container">

                    <p className="my-bookings__eyebrow">
                        YOUR JOURNEYS
                    </p>

                    <h1>
                        My
                        <span> bookings.</span>
                    </h1>

                    <p>
                        Keep track of the journeys you've
                        planned with Roamly.
                    </p>

                </div>

            </section>


            {/* Bookings */}

            <section className="my-bookings">

                <div className="container">

                    {bookings.length === 0 ? (

                        <div className="my-bookings__empty">

                            <div className="my-bookings__empty-icon">
                                ✦
                            </div>

                            <p className="my-bookings__label">
                                NO BOOKINGS YET
                            </p>

                            <h2>
                                Your next adventure
                                <span> is waiting.</span>
                            </h2>

                            <p>
                                You haven't booked a trip yet.
                                Explore our curated journeys and
                                find somewhere worth going.
                            </p>

                            <Link
                                to="/trips"
                                className="my-bookings__button"
                            >
                                Explore trips
                                <span>↗</span>
                            </Link>

                        </div>

                    ) : (

                        <div className="my-bookings__list">

                            <div className="my-bookings__header">

                                <div>

                                    <p className="my-bookings__label">
                                        YOUR BOOKINGS
                                    </p>

                                    <h2>
                                        Ready to
                                        <span> explore.</span>
                                    </h2>

                                </div>

                                <span className="my-bookings__count">
                                    {bookings.length}{" "}
                                    {bookings.length === 1
                                        ? "booking"
                                        : "bookings"}
                                </span>

                            </div>


                            {bookings.map((booking) => (

                                <article
                                    className="my-booking-card"
                                    key={booking.id}
                                >

                                    <div className="my-booking-card__main">

                                        <p className="my-booking-card__label">
                                            {booking.location}
                                        </p>

                                        <h3>
                                            {booking.tripTitle}
                                        </h3>

                                        <p>
                                            {booking.duration}
                                            {" · "}
                                            {booking.price}
                                        </p>

                                    </div>


                                    <div className="my-booking-card__details">

                                        <div>

                                            <span>
                                                Travel date
                                            </span>

                                            <strong>
                                                {booking.date}
                                            </strong>

                                        </div>


                                        <div>

                                            <span>
                                                Travelers
                                            </span>

                                            <strong>
                                                {booking.travelers}
                                            </strong>

                                        </div>


                                        <div>

                                            <span>
                                                Guest
                                            </span>

                                            <strong>
                                                {booking.name}
                                            </strong>

                                        </div>

                                    </div>

                                </article>

                            ))}

                        </div>

                    )}

                </div>

            </section>

        </main>
    );
}

export default MyBookings;
