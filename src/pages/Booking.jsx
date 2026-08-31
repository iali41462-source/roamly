import { useState } from "react";
import { useParams } from "react-router-dom";

const trips = [
    {
        id: 1,
        title: "Mediterranean Escape",
        location: "Italy & Greece",
        duration: "8 Days",
        price: "$1,890",
    },
    {
        id: 2,
        title: "Island Dream",
        location: "Bali, Indonesia",
        duration: "7 Days",
        price: "$1,490",
    },
    {
        id: 3,
        title: "Alpine Adventure",
        location: "Swiss Alps",
        duration: "6 Days",
        price: "$1,750",
    },
];

function Booking() {

    const { tripId } = useParams();

    const trip = trips.find(
        (item) => item.id === Number(tripId)
    );

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        date: "",
        travelers: "1",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);

    function handleChange(event) {

        const { name, value } = event.target;

        setFormData((previous) => ({
            ...previous,
            [name]: value,
        }));
    }
function handleSubmit(event) {

    event.preventDefault();

    const booking = {
        id: Date.now(),

        tripId: trip.id,
        tripTitle: trip.title,
        location: trip.location,
        duration: trip.duration,
        price: trip.price,

        name: formData.name,
        email: formData.email,
        date: formData.date,
        travelers: formData.travelers,
        message: formData.message,
    };

    const existingBookings =
        JSON.parse(localStorage.getItem("bookings")) || [];

    localStorage.setItem(
        "bookings",
        JSON.stringify([
            ...existingBookings,
            booking
        ])
    );

    setSubmitted(true);
}


    if (!trip) {
        return (
            <main className="booking-not-found">

                <div className="container">

                    <h1>Trip not found</h1>

                    <p>
                        Sorry, we couldn't find this trip.
                    </p>

                </div>

            </main>
        );
    }

    return (
        <main className="booking-page">

            <section className="booking-page__hero">

                <div className="container">

                    <p className="booking-page__eyebrow">
                        START YOUR JOURNEY
                    </p>

                    <h1>
                        Book your
                        <span> adventure.</span>
                    </h1>

                    <p>
                        You're one step closer to an
                        unforgettable journey.
                    </p>

                </div>

            </section>


            <section className="booking">

                <div className="container">

                    <div className="booking__layout">

                        {/* Trip Summary */}

                        <aside className="booking__summary">

                            <p className="booking__summary-label">
                                YOUR TRIP
                            </p>

                            <h2>
                                {trip.title}
                            </h2>

                            <p className="booking__location">
                                {trip.location}
                            </p>

                            <div className="booking__summary-details">

                                <div>
                                    <span>Duration</span>
                                    <strong>
                                        {trip.duration}
                                    </strong>
                                </div>

                                <div>
                                    <span>Starting from</span>
                                    <strong>
                                        {trip.price}
                                    </strong>
                                </div>

                            </div>

                        </aside>


                        {/* Booking Form */}

                        <div className="booking__form-wrapper">

                            {submitted ? (

                                <div className="booking__success">

                                    <div className="booking__success-icon">
                                        ✓
                                    </div>

                                    <p className="booking__summary-label">
                                        BOOKING REQUEST SENT
                                    </p>

                                    <h2>
                                        Your journey
                                        <span> starts here.</span>
                                    </h2>

                                    <p>
                                        Thank you, {formData.name}.
                                        We've received your booking
                                        request for {trip.title}.
                                    </p>

                                    <button
                                        onClick={() =>
                                            setSubmitted(false)
                                        }
                                    >
                                        Edit booking
                                    </button>

                                </div>

                            ) : (

                                <form
                                    className="booking__form"
                                    onSubmit={handleSubmit}
                                >

                                    <div className="booking__form-heading">

                                        <p>
                                            TRAVEL DETAILS
                                        </p>

                                        <h2>
                                            Tell us about
                                            <span> your trip.</span>
                                        </h2>

                                    </div>


                                    <div className="booking__fields">

                                        <div className="booking__field">

                                            <label htmlFor="name">
                                                Full name
                                            </label>

                                            <input
                                                id="name"
                                                name="name"
                                                type="text"
                                                placeholder="Your full name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                            />

                                        </div>


                                        <div className="booking__field">

                                            <label htmlFor="email">
                                                Email address
                                            </label>

                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                placeholder="you@example.com"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />

                                        </div>


                                        <div className="booking__field">

                                            <label htmlFor="date">
                                                Travel date
                                            </label>

                                            <input
                                                id="date"
                                                name="date"
                                                type="date"
                                                value={formData.date}
                                                onChange={handleChange}
                                                required
                                            />

                                        </div>


                                        <div className="booking__field">

                                            <label htmlFor="travelers">
                                                Travelers
                                            </label>

                                            <select
                                                id="travelers"
                                                name="travelers"
                                                value={formData.travelers}
                                                onChange={handleChange}
                                            >
                                                <option value="1">
                                                    1 traveler
                                                </option>

                                                <option value="2">
                                                    2 travelers
                                                </option>

                                                <option value="3">
                                                    3 travelers
                                                </option>

                                                <option value="4">
                                                    4 travelers
                                                </option>

                                                <option value="5">
                                                    5 travelers
                                                </option>

                                                <option value="6+">
                                                    6+ travelers
                                                </option>
                                            </select>

                                        </div>


                                        <div className="booking__field booking__field--full">

                                            <label htmlFor="message">
                                                Special requests
                                            </label>

                                            <textarea
                                                id="message"
                                                name="message"
                                                rows="5"
                                                placeholder="Anything you'd like us to know?"
                                                value={formData.message}
                                                onChange={handleChange}
                                            />

                                        </div>

                                    </div>


                                    <button
                                        type="submit"
                                        className="booking__submit"
                                    >
                                        Send booking request
                                        <span>↗</span>
                                    </button>

                                </form>

                            )}

                        </div>

                    </div>

                </div>

            </section>

        </main>
    );
}

export default Booking;
