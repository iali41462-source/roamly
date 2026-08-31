import TestimonialCard from "./TestimonialCard";

const testimonials = [
    {
        id: 1,
        name: "Sophie Martin",
        location: "Paris, France",
        review:
            "Roamly completely changed the way I travel. Every detail felt thoughtful, personal and effortless.",
        image:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=85",
        rating: 5,
        featured: true
    },
    {
        id: 2,
        name: "Daniel Brooks",
        location: "London, UK",
        review:
            "The perfect balance between planning and freedom. We discovered places we would never have found ourselves.",
        image:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=85",
        rating: 5,
        featured: false
    },
    {
        id: 3,
        name: "Maya Chen",
        location: "Singapore",
        review:
            "Beautiful destinations, great experiences and absolutely no stress. Roamly made our trip memorable.",
        image:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=85",
        rating: 5,
        featured: false
    }
];

function Testimonials() {
    return (
        <section className="testimonials">

            <div className="container">

                <div className="testimonials__header">

                    <div>
                        <p className="testimonials__eyebrow">
                            TRAVELER STORIES
                        </p>

                        <h2>
                            Loved by
                            <span> curious travelers.</span>
                        </h2>
                    </div>

                    <p className="testimonials__intro">
                        Real journeys. Real experiences. See why
                        travelers choose Roamly when they want
                        something more than an ordinary trip.
                    </p>

                </div>

                <div className="testimonials__grid">

                    {testimonials.map((testimonial) => (
                        <TestimonialCard
                            key={testimonial.id}
                            image={testimonial.image}
                            name={testimonial.name}
                            location={testimonial.location}
                            review={testimonial.review}
                            rating={testimonial.rating}
                            featured={testimonial.featured}
                        />
                    ))}

                </div>

            </div>

        </section>
    );
}

export default Testimonials;