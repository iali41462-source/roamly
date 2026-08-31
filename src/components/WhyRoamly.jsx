const reasons = [
    {
        id: 1,
        number: "01",
        title: "Curated Journeys",
        description:
            "Every journey is carefully selected to give you meaningful experiences, not ordinary tourist stops."
    },
    {
        id: 2,
        number: "02",
        title: "Local Experiences",
        description:
            "Discover the places, people, food and moments that make every destination truly special."
    },
    {
        id: 3,
        number: "03",
        title: "Simple Planning",
        description:
            "Everything you need for your journey, brought together in one simple and effortless experience."
    },
    {
        id: 4,
        number: "04",
        title: "Travel Confidently",
        description:
            "Travel with confidence knowing your journey has been thoughtfully planned from beginning to end."
    }
];

function WhyRoamly() {
    return (
        <section className="why-roamly">

            <div className="container">

                <div className="why-roamly__header">

                    <div>
                        <p className="why-roamly__eyebrow">
                            WHY ROAMLY
                        </p>

                        <h2>
                            Travel better.
                            <span> Travel differently.</span>
                        </h2>
                    </div>

                    <p className="why-roamly__intro">
                        We believe the best journeys are not simply
                        about where you go, but about what you discover
                        along the way.
                    </p>

                </div>

                <div className="why-roamly__grid">

                    {reasons.map((reason) => (
                        <article
                            className="reason-card"
                            key={reason.id}
                        >

                            <span className="reason-card__number">
                                {reason.number}
                            </span>

                            <div className="reason-card__content">

                                <h3>
                                    {reason.title}
                                </h3>

                                <p>
                                    {reason.description}
                                </p>

                            </div>

                            <span className="reason-card__arrow">
                                ↗
                            </span>

                        </article>
                    ))}

                </div>

            </div>

        </section>
    );
}

export default WhyRoamly;