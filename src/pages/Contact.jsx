import { useState } from "react";

function Contact() {

    const [submitted, setSubmitted] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();

        setSubmitted(true);
    }

    return (
        <main className="contact-page">

            {/* Hero */}

            <section className="contact-page__hero">

                <div className="container">

                    <p className="contact-page__eyebrow">
                        GET IN TOUCH
                    </p>

                    <h1>
                        Let's talk about
                        <span> your journey.</span>
                    </h1>

                    <p className="contact-page__intro">
                        Have a question, need some help or simply
                        want to say hello? We'd love to hear from you.
                    </p>

                </div>

            </section>


            {/* Contact */}

            <section className="contact">

                <div className="container">

                    <div className="contact__layout">

                        {/* Contact Information */}

                        <aside className="contact__info">

                            <p className="contact__label">
                                CONTACT ROAMLY
                            </p>

                            <h2>
                                We're here to
                                <span> help.</span>
                            </h2>

                            <p className="contact__description">
                                Whether you're planning your first
                                adventure or your next one, our team
                                is ready to help.
                            </p>


                            <div className="contact__details">

                                <div className="contact__detail">

                                    <span>Email</span>

                                    <a href="mailto:hello@roamly.com">
                                        hello@roamly.com
                                    </a>

                                </div>


                                <div className="contact__detail">

                                    <span>Phone</span>

                                    <a href="tel:+1234567890">
                                        +1 234 567 890
                                    </a>

                                </div>


                                <div className="contact__detail">

                                    <span>Office</span>

                                    <p>
                                        24 Adventure Street
                                        <br />
                                        London, United Kingdom
                                    </p>

                                </div>

                            </div>

                        </aside>


                        {/* Contact Form */}

                        <div className="contact__form-wrapper">

                            {submitted ? (

                                <div className="contact__success">

                                    <div className="contact__success-icon">
                                        ✓
                                    </div>

                                    <p className="contact__label">
                                        MESSAGE SENT
                                    </p>

                                    <h2>
                                        Thanks for
                                        <span> reaching out.</span>
                                    </h2>

                                    <p>
                                        We've received your message
                                        and will get back to you soon.
                                    </p>

                                    <button
                                        onClick={() =>
                                            setSubmitted(false)
                                        }
                                    >
                                        Send another message
                                    </button>

                                </div>

                            ) : (

                                <form
                                    className="contact__form"
                                    onSubmit={handleSubmit}
                                >

                                    <div className="contact__form-heading">

                                        <p>
                                            SEND US A MESSAGE
                                        </p>

                                        <h2>
                                            How can we
                                            <span> help?</span>
                                        </h2>

                                    </div>


                                    <div className="contact__fields">

                                        <div className="contact__field">

                                            <label htmlFor="contact-name">
                                                Full name
                                            </label>

                                            <input
                                                id="contact-name"
                                                type="text"
                                                placeholder="Your full name"
                                                required
                                            />

                                        </div>


                                        <div className="contact__field">

                                            <label htmlFor="contact-email">
                                                Email address
                                            </label>

                                            <input
                                                id="contact-email"
                                                type="email"
                                                placeholder="you@example.com"
                                                required
                                            />

                                        </div>


                                        <div className="contact__field contact__field--full">

                                            <label htmlFor="contact-subject">
                                                Subject
                                            </label>

                                            <input
                                                id="contact-subject"
                                                type="text"
                                                placeholder="What can we help with?"
                                                required
                                            />

                                        </div>


                                        <div className="contact__field contact__field--full">

                                            <label htmlFor="contact-message">
                                                Message
                                            </label>

                                            <textarea
                                                id="contact-message"
                                                rows="6"
                                                placeholder="Tell us a little more..."
                                                required
                                            />

                                        </div>

                                    </div>


                                    <button
                                        type="submit"
                                        className="contact__submit"
                                    >
                                        Send message
                                        <span>↗</span>
                                    </button>

                                </form>

                            )}

                        </div>

                    </div>

                </div>

            </section>


            {/* Bottom CTA */}

            <section className="contact-cta">

                <div className="container">

                    <div className="contact-cta__box">

                        <p>
                            STILL EXPLORING?
                        </p>

                        <h2>
                            Find your next
                            <span> adventure.</span>
                        </h2>

                        <a href="/trips">
                            Explore trips
                            <span>↗</span>
                        </a>

                    </div>

                </div>

            </section>

        </main>
    );
}

export default Contact;