import DestinationCard from "./DestinationCard";

const destinations = [
    {
        id: 1,
        name: "Bali",
        country: "Indonesia",
        description: "Tropical landscapes, quiet beaches and unforgettable sunsets.",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 2,
        name: "Swiss Alps",
        country: "Switzerland",
        description: "Snow-covered peaks, peaceful valleys and breathtaking views.",
        image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 3,
        name: "Santorini",
        country: "Greece",
        description: "Whitewashed villages, blue seas and unforgettable island moments.",
        image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=900&q=85"
    }
];

function Destinations() {
    return (
        <section className="destinations" id="destinations">

            <div className="container">

                <div className="destinations__header">

                    <div>
                        <p className="destinations__eyebrow">
                            POPULAR DESTINATIONS
                        </p>

                        <h2>
                            Places worth
                            <span> remembering.</span>
                        </h2>
                    </div>

                    <p className="destinations__intro">
                        From peaceful islands to dramatic mountain
                        landscapes, discover places that make every
                        journey unforgettable.
                    </p>

                </div>

                <div className="destinations__grid">

                    {destinations.map((destination) => (
                        <DestinationCard
                            key={destination.id}
                            image={destination.image}
                            name={destination.name}
                            country={destination.country}
                            description={destination.description}
                        />
                    ))}

                </div>

            </div>

        </section>
    );
}

export default Destinations;