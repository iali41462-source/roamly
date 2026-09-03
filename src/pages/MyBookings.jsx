import { useEffect, useState } from "react";

function MyBookings() {

    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        async function fetchBookings() {

            const token = localStorage.getItem("token");

            if (!token) {
                setError("Please login to view your bookings.");
                setLoading(false);
                return;
            }

            try {

                const response = await fetch(
                    `${import.meta.env.VITE_API_URL}/api/bookings`,
                    {
                        headers: {
                            "Accept": "application/json",
                            "Authorization": `Bearer ${token}`,
                        },
                    }
                );

                const data = await response.json();

                if (!response.ok) {
                    setError(
                        data.message ||
                        "Unable to load bookings."
                    );
                    return;
                }

                setBookings(data.data);

            } catch (error) {

                setError(
                    "Unable to connect to the server."
                );

            } finally {

                setLoading(false);

            }
        }

        fetchBookings();

    }, []);


    if (loading) {
        return (
            <main className="my-bookings-page">
                <div className="my-bookings-page__content">
                    <p>Loading your bookings...</p>
                </div>
            </main>
        );
    }


    if (error) {
        return (
            <main className="my-bookings-page">
                <div className="my-bookings-page__content">
                    <p className="my-bookings-page__error">
                        {error}
                    </p>
                </div>
            </main>
        );
    }


    return (
        <main className="my-bookings-page">

            <div className="my-bookings-page__content">

                <div className="my-bookings-page__header">

                    <p>YOUR JOURNEY</p>

                    <h1>My Bookings</h1>

                    <span>
                        View and manage your upcoming trips.
                    </span>

                </div>


                {bookings.length === 0 ? (

                    <div className="my-bookings-page__empty">

                        <h2>No bookings yet</h2>

                        <p>
                            You haven't booked any trips yet.
                            Start exploring and plan your next adventure.
                        </p>

                    </div>

                ) : (

                    <div className="my-bookings-list">

                        {bookings.map((booking) => (

                            <article
                                className="my-booking-card"
                                key={booking.id}
                            >

                                <div className="my-booking-card__image">

                                    <img
                                        src={booking.trip?.image}
                                        alt={booking.trip?.title}
                                    />

                                </div>


                                <div className="my-booking-card__content">

                                    <div className="my-booking-card__top">

                                        <div>

                                            <h2>
                                                {booking.trip?.title}
                                            </h2>

                                            <p>
                                                {booking.trip?.destination?.name ||
                                                    booking.trip?.location}
                                            </p>

                                        </div>


                                        <span
                                            className={`my-booking-card__status my-booking-card__status--${booking.status}`}
                                        >
                                            {booking.status}
                                        </span>

                                    </div>


                                    <div className="my-booking-card__details">

                                        <div>
                                            <span>Travel date</span>
                                            <strong>
                                                {booking.travel_date}
                                            </strong>
                                        </div>

                                        <div>
                                            <span>Travelers</span>
                                            <strong>
                                                {booking.travelers}
                                            </strong>
                                        </div>

                                        <div>
                                            <span>Duration</span>
                                            <strong>
                                                {booking.trip?.duration}
                                            </strong>
                                        </div>

                                        <div>
                                            <span>Price</span>
                                            <strong>
                                                ${Number(
                                                    booking.trip?.price || 0
                                                ).toLocaleString()}
                                            </strong>
                                        </div>

                                    </div>


                                    {booking.message && (
                                        <div className="my-booking-card__message">

                                            <span>Your message</span>

                                            <p>
                                                {booking.message}
                                            </p>

                                        </div>
                                    )}

                                </div>

                            </article>

                        ))}

                    </div>

                )}

            </div>

        </main>
    );
}

export default MyBookings;