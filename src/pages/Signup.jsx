import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    function handleSubmit(event) {

        event.preventDefault();
        setError("");

        // Name validation
        if (name.trim().length < 3) 
            { setError("Name must be at least 3 characters.");
                 return; }
          // Email validation

        if (!email.includes("@")) {
            setError("Please enter a valid email address.");
            return;
        }
        
                // Password validation

        if (password.length < 6) {
            setError("Password must be at least 6 characters.");
            return;
        }
        

        if (password !== confirmPassword) {
            ("Passwords do not match.");
            return;
        }

        localStorage.setItem("userName", name);
        localStorage.setItem("userEmail", email);
        localStorage.setItem("userPassword", password);

        navigate("/login");
    }

    return (
        <main className="login-page">

            <div className="login-page__content">

                <div className="login-page__brand">
                    <span>Roamly</span>
                </div>

                <div className="login-page__heading">

                    <p>JOIN ROAMLY</p>

                    <h1>
                        Your next adventure
                        <span> starts here.</span>
                    </h1>

                    <p>
                        Create your account and start discovering
                        beautiful places and unforgettable experiences.
                    </p>

                </div>

            </div>


            <div className="login-page__card">

                <div className="login-page__header">

                    <Link
                        to="/"
                        className="login__back"
                    >
                        ← Back to Roamly
                    </Link>

                    <h2>Create account</h2>

                    <p>
                        Start your journey with Roamly
                    </p>

                </div>


                <form
                    className="login-form"
                    onSubmit={handleSubmit}
                >
                     {error && (
                        <p className="login-form__error">
                            {error}
                        </p>
                    )}

                    <div className="login-form__group">

                        <label htmlFor="name">
                            Full name
                        </label>

                        <input
                            id="name"
                            type="text"
                            placeholder="Your full name"
                            value={name}
                            onChange={(event) =>
                                setName(event.target.value)
                            }
                            required
                        />

                    </div>

                    <div className="login-form__group">

                        <label htmlFor="signup-email">
                            Email address
                        </label>

                        <input
                            id="signup-email"
                            type="email"
                            placeholder="you@example.com"
                            value={email}
                            onChange={(event) =>
                                setEmail(event.target.value)
                            }
                            required
                        />

                    </div>


                    <div className="login-form__group">

                        <label htmlFor="signup-password">
                            Password
                        </label>

                        <input
                            id="signup-password"
                            type="password"
                            placeholder="Create a password"
                            value={password}
                            onChange={(event) =>
                                setPassword(event.target.value)
                            }
                            required
                        />

                    </div>


                    <div className="login-form__group">

                        <label htmlFor="confirm-password">
                            Confirm password
                        </label>

                        <input
                            id="confirm-password"
                            type="password"
                            placeholder="Confirm your password"
                            value={confirmPassword}
                            onChange={(event) =>
                                setConfirmPassword(event.target.value)
                            }
                            required
                        />

                    </div>


                    <button
                        type="submit"
                        className="login-form__button"
                    >
                        Create account
                    </button>

                </form>


                <p className="login-page__signup">

                    Already have an account?

                    <Link to="/login">
                        {" "}Sign in
                    </Link>

                </p>

            </div>

        </main>
    );
}

export default Signup;