import { useState } from "react";
import TripCard from "../components/TripCard";

const trips = [
    {
        id: 1,
        name: "Mediterranean Escape",
        location: "Italy & Greece",
        category: "Europe",
        duration: "8 Days",
        price: "$1,890",
        image:
            "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=1200&q=85",
    },

    {
        id: 2,
        name: "Island Dream",
        location: "Bali, Indonesia",
        category: "Islands",
        duration: "7 Days",
        price: "$1,490",
        image:
            "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=85",
    },

    {
        id: 3,
        name: "Alpine Adventure",
        location: "Swiss Alps",
        category: "Mountains",
        duration: "6 Days",
        price: "$1,750",
        image:
            "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=1200&q=85",
    },

    {
        id: 4,
        name: "Japanese Discovery",
        location: "Kyoto & Tokyo",
        category: "Asia",
        duration: "10 Days",
        price: "$2,250",
        image:
            "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=85",
    },

    {
        id: 5,
        name: "Tropical Escape",
        location: "Maldives",
        category: "Islands",
        duration: "5 Days",
        price: "$1,680",
        image:
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85",
    },

    {
        id: 6,
        name: "Wild Patagonia",
        location: "Argentina",
        category: "Americas",
        duration: "9 Days",
        price: "$2,100",
        image:
            "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1200&q=85",
    },
];

function Trips() {

    const [activeCategory, setActiveCategory] = useState("All");

    const filteredTrips =
        activeCategory === "All"
            ? trips
            : trips.filter(
                  (trip) => trip.category === activeCategory
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

                            <strong>24+</strong>

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


                    {/* Trip Cards */}

                    <div className="trips-list__grid">

                        {filteredTrips.map((trip) => (

                            <TripCard
                                key={trip.id}
                                tripId={trip.id}
                                image={trip.image}
                                title={trip.name}
                                location={trip.location}
                                duration={trip.duration}
                                price={trip.price}
                                
                            />
                            

                        ))}

                    </div>

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