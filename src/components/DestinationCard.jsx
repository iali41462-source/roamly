import { Link } from "react-router-dom";
function DestinationCard({ image, name, country, slug, description }) {
    
    return (
       
        <article className="destination-card">

            <div className="destination-card__image">
                <img
                    src={image}
                    alt={`${name}, ${country}`}
                />
            </div>

            <div className="destination-card__content">

                <div>
                    <h3>{name}</h3>
                    <p className="destination-card__country">
                        {country}
                    </p>
                </div>

                <p className="destination-card__description">
                    {description}
                </p>

                <a
                    href="#explore"
                    className="destination-card__link"
                >
                    
                    <Link
    to={`/destinations/${slug}`}
    className="destination-card__link"
>
    Explore↗
</Link>
                    
                </a>

            </div>

        </article>
    );
}

export default DestinationCard;