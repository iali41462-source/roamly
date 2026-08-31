function ExperienceCard({ image, title, category, featured = false }) {
    return (
        <article
            className={`experience-card ${
                featured ? "experience-card--featured" : ""
            }`}
        >
            <img
                src={image}
                alt={title}
                className="experience-card__image"
            />

            <div className="experience-card__overlay"></div>

            <div className="experience-card__content">

                <p className="experience-card__category">
                    {category}
                </p>

                <h3 className="experience-card__title">
                    {title}
                </h3>

                <a
                    href="#explore"
                    className="experience-card__link"
                >
                    Discover
                    <span>↗</span>
                </a>

            </div>
        </article>
    );
}

export default ExperienceCard;