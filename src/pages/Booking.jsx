import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function Booking() {

    const { tripId } = useParams();


    const [trip, setTrip] = useState(null);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    const [submitted, setSubmitted] = useState(false);


    const [formData, setFormData] = useState({
        name: "",
        email: "",
        date: "",
        travelers: "1",
        message: "",
    });


    // Fetch Trip

    useEffect(() => {

        async function fetchTrip() {

            try {

                const response = await fetch(
                    `http://127.0.0.1:8000/api/trips/${tripId}`,
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


    // Handle Input Changes

    function handleChange(event) {

        const { name, value } = event.target;


        setFormData((previous) => ({
            ...previous,
            [name]: value,
        }));
    }


    // Submit Booking

    async function handleSubmit(event) {

        event.preventDefault();

        setError("");


        const token =
            localStorage.getItem("token");


        if (!token) {

            setError(
                "Please login before booking a trip."
            );

            return;
        }


        try {

            const response = await fetch(
                "http://127.0.0.1:8000/api/bookings",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                        "Authorization": `Bearer ${token}`,
                    },

                    body: JSON.stringify({

                        trip_id: Number(tripId),

                        travel_date: formData.date,

                        travelers: Number(
                            formData.travelers
                        ),

                        message: formData.message,
                    }),
                }
            );


            const data = await response.json();


            if (!response.ok) {

                if (data.errors) {

                    const firstError =
                        Object.values(data.errors)[0]?.[0];


                    setError(
                        firstError ||
                        "Please check your booking details."
                    );

                } else {

                    setError(
                        data.message ||
                        "Booking failed."
                    );
                }

                return;
            }


            setSubmitted(true);


        } catch (error) {

            setError(
                "Unable to connect to the server."
            );
        }
    }


    // Loading

    if (loading) {

        return (

            <main className="booking-not-found">

                <div className="container">

                    <h1>
                        Loading trip...
                    </h1>

                </div>

            </main>
        );
    }


    // Trip Not Found

    if (error && !trip) {

        return (

            <main className="booking-not-found">

                <div className="container">

                    <h1>
                        Trip not found
                    </h1>

                    <p>
                        {error}
                    </p>

                </div>

            </main>
        );
    }


    if (!trip) {

        return (

            <main className="booking-not-found">

                <div className="container">

                    <h1>
                        Trip not found
                    </h1>

                    <p>
                        Sorry, we couldn't find this trip.
                    </p>

                </div>

            </main>
        );
    }


    return (

        <main className="booking-page">


            {/* Hero */}

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
                                        ${Number(
                                            trip.price
                                        ).toLocaleString()}
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

                                        <span>
                                            starts here.
                                        </span>

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


                                    {/* Backend Error */}

                                    {error && (

                                        <p className="booking__error">
                                            {error}
                                        </p>

                                    )}


                                    <div className="booking__form-heading">

                                        <p>
                                            TRAVEL DETAILS
                                        </p>

                                        <h2>

                                            Tell us about

                                            <span>
                                                your trip.
                                            </span>

                                        </h2>

                                    </div>


                                    <div className="booking__fields">


                                        {/* Name */}

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


                                        {/* Email */}

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


                                        {/* Travel Date */}

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


                                        {/* Travelers */}

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

                                                <option value="6">
                                                    6 travelers
                                                </option>

                                                <option value="7">
                                                    7 travelers
                                                </option>

                                                <option value="8">
                                                    8 travelers
                                                </option>

                                                <option value="9">
                                                    9 travelers
                                                </option>

                                                <option value="10">
                                                    10 travelers
                                                </option>

                                                <option value="11">
                                                    11 travelers
                                                </option>

                                                <option value="12">
                                                    12 travelers
                                                </option>

                                                <option value="13">
                                                    13 travelers
                                                </option>

                                                <option value="14">
                                                    14 travelers
                                                </option>

                                                <option value="15">
                                                    15 travelers
                                                </option>

                                                <option value="16">
                                                    16 travelers
                                                </option>

                                                <option value="17">
                                                    17 travelers
                                                </option>

                                                <option value="18">
                                                    18 travelers
                                                </option>

                                                <option value="19">
                                                    19 travelers
                                                </option>

                                                <option value="20">
                                                    20 travelers
                                                </option>

                                            </select>

                                        </div>


                                        {/* Message */}

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

                                        <span>
                                            ↗
                                        </span>

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