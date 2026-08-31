import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const trips = [
    {
        id: 1,
        title: "Mediterranean Escape",
        location: "Italy & Greece",
        duration: "8 Days",
        price: "$1,890",
        image:
            "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=1800&q=85",

        description:
            "A beautiful journey through the Mediterranean, combining historic cities, coastal villages, incredible food and unforgettable views.",

        itinerary: [
            {
                day: "01",
                title: "Welcome to Rome",
                description:
                    "Arrive in Rome, settle into your hotel and spend the evening exploring the historic city center.",
            },
            {
                day: "02",
                title: "Discover Ancient Rome",
                description:
                    "Explore the Colosseum, Roman Forum and some of Rome's most iconic landmarks.",
            },
            {
                day: "03",
                title: "Rome to Amalfi",
                description:
                    "Travel south toward the Amalfi Coast and enjoy spectacular coastal scenery along the way.",
            },
            {
                day: "04",
                title: "Amalfi Coast",
                description:
                    "Spend the day discovering charming coastal towns, local restaurants and beautiful viewpoints.",
            },
            {
                day: "05",
                title: "Into Greece",
                description:
                    "Continue your Mediterranean adventure and arrive in Greece.",
            },
            {
                day: "06",
                title: "Explore Santorini",
                description:
                    "Discover Santorini's famous villages, blue-domed buildings and incredible sunset views.",
            },
            {
                day: "07",
                title: "Island Day",
                description:
                    "Enjoy a relaxed day exploring beaches, local cafés and hidden corners of the island.",
            },
            {
                day: "08",
                title: "Until Next Time",
                description:
                    "Enjoy your final Mediterranean morning before heading home with memories to last a lifetime.",
            },
        ],
    },

    {
        id: 2,
        title: "Island Dream",
        location: "Bali, Indonesia",
        duration: "7 Days",
        price: "$1,490",
        image:
            "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1800&q=85",

        description:
            "A tropical escape through Bali's beaches, temples, rice terraces and peaceful island landscapes.",

        itinerary: [
            {
                day: "01",
                title: "Welcome to Bali",
                description:
                    "Arrive in Bali and settle into your beautiful tropical surroundings.",
            },
            {
                day: "02",
                title: "Ubud Discovery",
                description:
                    "Explore Ubud's culture, markets and famous rice terraces.",
            },
            {
                day: "03",
                title: "Temple Journey",
                description:
                    "Visit some of Bali's most beautiful temples and sacred landscapes.",
            },
            {
                day: "04",
                title: "Beach Escape",
                description:
                    "Relax by the ocean and enjoy Bali's incredible coastline.",
            },
            {
                day: "05",
                title: "Island Adventure",
                description:
                    "Spend the day exploring hidden beaches and tropical scenery.",
            },
            {
                day: "06",
                title: "Slow Bali",
                description:
                    "Enjoy a relaxed day with local food, cafés and beautiful surroundings.",
            },
            {
                day: "07",
                title: "Goodbye Bali",
                description:
                    "Enjoy your final morning before heading home.",
            },
        ],
    },

    {
        id: 3,
        title: "Alpine Adventure",
        location: "Swiss Alps",
        duration: "6 Days",
        price: "$1,750",
        image:
            "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=1800&q=85",

        description:
            "Experience dramatic mountain landscapes, charming alpine villages and unforgettable adventures in Switzerland.",

        itinerary: [
            {
                day: "01",
                title: "Arrive in Switzerland",
                description:
                    "Arrive and settle into your alpine accommodation.",
            },
            {
                day: "02",
                title: "Mountain Village",
                description:
                    "Explore a beautiful Swiss mountain village surrounded by spectacular scenery.",
            },
            {
                day: "03",
                title: "Alpine Adventure",
                description:
                    "Enjoy a full day surrounded by the Swiss Alps.",
            },
            {
                day: "04",
                title: "Lake & Mountains",
                description:
                    "Discover crystal-clear lakes and breathtaking mountain views.",
            },
            {
                day: "05",
                title: "Scenic Journey",
                description:
                    "Take a scenic journey through some of Switzerland's most beautiful landscapes.",
            },
            {
                day: "06",
                title: "Until Next Time",
                description:
                    "Enjoy your final morning before departing Switzerland.",
            },
        ],
    },
];

function TripDetails() {

    const navigate = useNavigate();

    const { tripId } = useParams();

    const trip = trips.find(
        (item) => item.id === Number(tripId)
    );

    if (!trip) {
        return (
            <main className="trip-details-not-found">

                <div className="container">

                    <h1>
                        Trip not found
                    </h1>

                    <p>
                        Sorry, we couldn't find this journey.
                    </p>

                </div>

            </main>
        );
    }

    return (
      <main className="trip-details">
        {/* Hero */}

        <section className="trip-details__hero">
          <img src={trip.image} alt={trip.title} />

          <div className="trip-details__hero-overlay"></div>

          <div className="container">
            <div className="trip-details__hero-content">
              <p className="trip-details__eyebrow">{trip.location}</p>

              <h1>{trip.title}</h1>

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
                <span>Duration</span>
                <strong>{trip.duration}</strong>
              </div>

              <div>
                <span>Starting from</span>
                <strong>{trip.price}</strong>
              </div>

              <div>
                <span>Experience</span>
                <strong>Curated journey</strong>
              </div>

              <button
                onClick={() => {
                  const isLoggedIn = localStorage.getItem("isLoggedIn");

                  if (isLoggedIn === "true") {
                    navigate(`/booking/${tripId}`);
                  } else {
                    navigate("/login");
                  }
                }}
              >
                Book this trip
                <span>↗</span>
              </button>
            </div>
          </div>
        </section>

        {/* Itinerary */}

        <section className="trip-details__itinerary">
          <div className="container">
            <div className="trip-details__section-heading">
              <div>
                <p>YOUR JOURNEY</p>

                <h2>
                  Eight days.
                  <span> Endless memories.</span>
                </h2>
              </div>

              <p>
                Every day is thoughtfully planned while leaving enough room for
                you to explore at your own pace.
              </p>
            </div>

            <div className="trip-details__days">
              {trip.itinerary.map((item) => (
                <div className="trip-details__day" key={item.day}>
                  <div className="trip-details__day-number">{item.day}</div>

                  <div className="trip-details__day-content">
                    <h3>{item.title}</h3>

                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Included */}

        <section className="trip-details__included">
          <div className="container">
            <div className="trip-details__included-box">
              <div>
                <p>WHAT'S INCLUDED</p>

                <h2>
                  Everything you need
                  <span> for the journey.</span>
                </h2>
              </div>

              <div className="trip-details__included-list">
                <span>✓ Accommodation</span>
                <span>✓ Local experiences</span>
                <span>✓ Selected transfers</span>
                <span>✓ Trip support</span>
                <span>✓ Curated itinerary</span>
                <span>✓ Destination guidance</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
}

export default TripDetails;
