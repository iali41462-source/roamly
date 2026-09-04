import TripCard from "./TripCard";

const trips = [
    {
        id: 5,
        title: "Swiss Alpine Escape",
        location: "Switzerland",
        duration: "7 Days",
        price: "$1,890",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1400&q=85",
        featured: true
    },
    {
        id: 6,
        title: "Bali Discovery",
        location: "Indonesia",
        duration: "5 Days",
        price: "$1,240",
        image: "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?auto=format&fit=crop&w=1000&q=85",
        featured: false
    },
    {
        id: 7,
        title: "Greek Island Escape",
        location: "Greece",
        duration: "6 Days",
        price: "$1,560",
        image: "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?auto=format&fit=crop&w=1000&q=85",
        featured: false
    }
];

function FeaturedTrips() {
    return (
        <section className="featured-trips" id="trips">

            <div className="container">

                <div className="featured-trips__header">

                    <div>
                        <p className="featured-trips__eyebrow">
                            FEATURED TRIPS
                        </p>

                        <h2>
                            Journeys made
                            <span> for you.</span>
                        </h2>
                    </div>

                    <p className="featured-trips__intro">
                        Carefully selected journeys designed to
                        help you experience more, discover deeper,
                        and travel without the ordinary.
                    </p>

                </div>

                <div className="featured-trips__grid">

                    {trips.map((trip) => (
                        <TripCard
                            key={trip.id}
                            tripId={trip.id}
                            image={trip.image}
                            title={trip.title}
                            location={trip.location}
                            duration={trip.duration}
                            price={trip.price}
                            featured={trip.featured}
                        />
                    ))}

                </div>

            </div>

        </section>
    );
}

export default FeaturedTrips;