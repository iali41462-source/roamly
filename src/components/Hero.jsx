import { Link} from "react-router-dom";
function Hero() {
    return (
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__content">
            <p className="hero__eyebrow">DISCOVER YOUR NEXT ADVENTURE</p>

            <h1 className="hero__title">
              Explore the world
              <span> beyond the ordinary.</span>
            </h1>

            <p className="hero__description">
              Discover breathtaking destinations, unique experiences, and
              unforgettable journeys made for curious travelers.
            </p>

            <div className="hero__actions">
              <a href="#destinations" className="hero__button">
                Explore destinations
              </a>
              <Link to="/trips" className="hero__secondary">
                Trips
                <span>↗</span>
              </Link>
            </div>
          </div>

          <div className="hero__visual">
            <img
              src="https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=1200&q=85"
              alt="Beautiful mountain landscape"
            />

            <div className="hero__badge">
              <span className="hero__badge-number">120+</span>
              <span className="hero__badge-text">destinations</span>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Hero;