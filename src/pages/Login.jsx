import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);


    async function handleSubmit(event) {

        event.preventDefault();

        setError("");
        setLoading(true);


        // Email validation

        if (!email.includes("@")) {
            setError("Please enter a valid email address.");
            setLoading(false);
            return;
        }


        // Password validation

        if (password.length < 6) {
            setError("Password must be at least 6 characters.");
            setLoading(false);
            return;
        }


        try {

            const response = await fetch(
                "http://127.0.0.1:8000/api/login",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                    },

                    body: JSON.stringify({
                        email: email,
                        password: password,
                    }),
                }
            );


            const data = await response.json();


            // Laravel validation / login error

            if (!response.ok) {

                setError(
                    data.message ||
                    "Invalid email or password."
                );

                setLoading(false);
                return;
            }


            // Login successful

            localStorage.setItem(
                "token",
                data.token
            );

            localStorage.setItem(
                "user",
                JSON.stringify(data.user)
            );

            localStorage.setItem(
                "isLoggedIn",
                "true"
            );


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

                    <p>WELCOME BACK</p>

                    <h1>
                        Your next adventure
                        <span> starts here.</span>
                    </h1>

                    <p>
                        Sign in to continue exploring beautiful places
                        and unforgettable experiences.
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

                    <h2>Welcome back</h2>

                    <p>
                        Sign in to your Roamly account
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

                        <label htmlFor="email">
                            Email address
                        </label>

                        <input
                            id="email"
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

                        <label htmlFor="password">
                            Password
                        </label>

                        <input
                            id="password"
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(event) =>
                                setPassword(event.target.value)
                            }
                            required
                        />

                    </div>


                    <div className="login-form__options">

                        <label className="login-form__remember">

                            <input type="checkbox" />

                            <span>
                                Remember me
                            </span>

                        </label>

                        <a href="#forgot">
                            Forgot password?
                        </a>

                    </div>


                    <button
                        type="submit"
                        className="login-form__button"
                        disabled={loading}
                    >
                        {loading ? "Signing in..." : "Sign in"}
                    </button>

                </form>


                <p className="login-page__signup">

                    Don't have an account?

                    <Link to="/signup">
                        {" "}Create account
                    </Link>

                </p>

            </div>

        </main>
    );
}


export default Login;
