import { Link } from "react-router-dom";
function TripCard({
    tripId,
    image,
    title,
    location,
    duration,
    price,
    featured = false
    
}) {
    return (
      <article className={`trip-card ${featured ? "trip-card--featured" : ""}`}>
        <div className="trip-card__image">
          <img src={image} alt={title} />
        </div>

        <div className="trip-card__content">
          <div className="trip-card__info">
            <p className="trip-card__location">{location}</p>

            <h3 className="trip-card__title">{title}</h3>
          </div>

          <div className="trip-card__details">
            <span>{duration}</span>

            <span className="trip-card__price">{price}</span>
          </div>

          <Link to={`/trips/${tripId}`} className="trip-card__link">
            View trip
            <span>↗</span>
          </Link>
        </div>
      </article>
    );
}

export default TripCard;