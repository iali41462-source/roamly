import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


function Signup() {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirmation, setConfirmPassword] = useState("");

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);


    async function handleSubmit(event) {

        event.preventDefault();

        setError("");
        setLoading(true);


        // Name validation

        if (name.trim().length < 3) {

            setError(
                "Name must be at least 3 characters."
            );

            setLoading(false);
            return;
        }


        // Email validation

        if (!email.includes("@")) {

            setError(
                "Please enter a valid email address."
            );

            setLoading(false);
            return;
        }


        // Password validation

        if (password.length < 6) {

            setError(
                "Password must be at least 6 characters."
            );

            setLoading(false);
            return;
        }


        // Confirm password validation

        if (password !== password_confirmation) {

            setError(
                "Passwords do not match."
            );

            setLoading(false);
            return;
        }


        try {

            const response = await fetch(
                `${import.meta.env.VITE_API_URL}/api/register`,
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                    },

                    body: JSON.stringify({
                        name: name,
                        email: email,
                        password: password,
                        password_confirmation: password_confirmation,
                    }),
                }
            );


            const data = await response.json();


            // Laravel validation error

            if (!response.ok) {

                if (data.errors) {

                    const firstError =
                        Object.values(data.errors)[0]?.[0];

                    setError(
                        firstError ||
                        "Please check your information."
                    );

                } else {

                    setError(
                        data.message ||
                        "Registration failed."
                    );

                }

                setLoading(false);
                return;
            }


            // Registration successful

            // localStorage.setItem(
            //     "token",
            //     data.token
            // );

            // localStorage.setItem(
            //     "user",
            //     JSON.stringify(data.user)
            // );

            // localStorage.setItem(
            //     "isLoggedIn",
            //     "true"
            // );


            navigate("/");


        } catch (error) {

            setError(
                "Unable to connect to the server."
            );

        } finally {

            setLoading(false);

        }
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
                            value={password_confirmation}
                            onChange={(event) =>
                                setConfirmPassword(event.target.value)
                            }
                            required
                        />

                    </div>


                    <button
                        type="submit"
                        className="login-form__button"
                        disabled={loading}
                    >
                        {loading
                            ? "Creating account..."
                            : "Create account"}
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
