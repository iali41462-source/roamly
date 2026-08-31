import ExperienceCard from "./ExperienceCard";

const experiences = [
    {
        id: 1,
        title: "Mountain Adventures",
        category: "ADVENTURE",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1400&q=85",
        featured: true
    },
    {
        id: 2,
        title: "Island Escapes",
        category: "RELAXATION",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=85",
        featured: false
    },
    {
        id: 3,
        title: "Wild Journeys",
        category: "EXPLORATION",
        image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1000&q=85",
        featured: false
    }
];

function Experiences() {
    return (
        <section className="experiences" id="experiences">

            <div className="container">

                <div className="experiences__header">

                    <div>
                        <p className="experiences__eyebrow">
                            TRAVEL EXPERIENCES
                        </p>

                        <h2>
                            Go beyond
                            <span> simply visiting.</span>
                        </h2>
                    </div>

                    <p className="experiences__intro">
                        Travel is more than reaching a destination.
                        Find experiences that turn every journey
                        into a story worth telling.
                    </p>

                </div>

                <div className="experiences__grid">

                    {experiences.map((experience) => (
                        <ExperienceCard
                            key={experience.id}
                            image={experience.image}
                            title={experience.title}
                            category={experience.category}
                            featured={experience.featured}
                        />
                    ))}

                </div>

            </div>

        </section>
    );
}

export default Experiences;