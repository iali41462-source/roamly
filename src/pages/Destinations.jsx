import { useState } from "react";
import DestinationCard from "../components/DestinationCard";
import destinations from "../data/destinations";




function Destinations() {
    
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredDestinations =
        activeCategory === "All"
            ? destinations
            : destinations.filter(
                  (destination) =>
                      destination.category === activeCategory
              );
              
    return (
        
        <div className="destinations-page">

            <section className="destinations-page__hero">

                <div className="container">

                    <div className="destinations-page__hero-content">

                        <p className="destinations-page__eyebrow">
                            EXPLORE THE WORLD
                        </p>

                        <h1>
                            Find your next
                            <span> destination.</span>
                        </h1>

                        <p className="destinations-page__intro">
                            From peaceful escapes to unforgettable adventures,
                            discover places that are worth the journey.
                        </p>

                    </div>

                    <div className="destinations-page__hero-image">

                        <img
                            src="https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1800&q=85"
                            alt="Beautiful mountain landscape"
                        />

                        <div className="destinations-page__hero-badge">
                            <span>120+</span>
                            <p>
                                places waiting
                                <br />
                                to be discovered
                            </p>
                        </div>

                    </div>

                </div>

            </section>
            <section className="destinations-list">

    <div className="container">

        <div className="destinations-list__header">

            <div>
                <p className="destinations-list__eyebrow">
                    PLACES TO GO
                </p>

                <h2>
                    Somewhere
                    <span> worth going.</span>
                </h2>
            </div>

            <p className="destinations-list__intro">
                Explore destinations selected for their character,
                beauty and unforgettable experiences.
            </p>

        </div>
        <div className="destinations-filter">

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
                    ? "destinations-filter__button destinations-filter__button--active"
                    : "destinations-filter__button"
            }
            onClick={() => setActiveCategory(category)}
        >
            {category}
        </button>
    ))}

</div>

        <div className="destinations-list__grid">

            {filteredDestinations.map((destination) => (
                <DestinationCard
                    key={destination.id}
                    id={destination.id}
                    image={destination.image}
                    country={destination.country}
                    name={destination.name}
                    slug={destination.slug}
                    description={destination.description}
                />
            ))}

        </div>

    </div>

</section>

        </div>
    );
}

export default Destinations;