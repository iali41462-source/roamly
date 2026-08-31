function TestimonialCard({
    image,
    name,
    location,
    review,
    rating = 5,
    featured = false
}) {
    return (
        <article
            className={`testimonial-card ${
                featured ? "testimonial-card--featured" : ""
            }`}
        >
            <div className="testimonial-card__top">

                <div className="testimonial-card__person">

                    <img
                        src={image}
                        alt={name}
                    />

                    <div>
                        <h3>{name}</h3>
                        <p>{location}</p>
                    </div>

                </div>

                <div className="testimonial-card__rating">
                    {"★".repeat(rating)}
                </div>

            </div>
            <blockquote>
                “{review}”
            </blockquote>

            <span className="testimonial-card__quote">
                “
            </span>
        </article>
    );
}

export default TestimonialCard;