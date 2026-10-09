import { useState } from "react";
import { Link } from "react-router-dom";

function ForgotPassword() {

    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);


    async function handleSubmit(event) {

        event.preventDefault();

        setMessage("");
        setError("");
        setLoading(true);


        try {

            const response = await fetch(
                `${import.meta.env.VITE_API_URL}/api/forgot-password`,
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                    },

                    body: JSON.stringify({
                        email: email,
                    }),
                }
            );


            const data = await response.json();


            if (!response.ok) {

                setError(
                    data.message ||
                    "Unable to send password reset link."
                );

                setLoading(false);
                return;
            }


            setMessage(
                data.message ||
                "Password reset link has been sent to your email."
            );

        } catch (error) {

            setError("Unable to connect to the server.");

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

                    <p>RESET PASSWORD</p>

                    <h1>
                        Forgot your
                        <span> password?</span>
                    </h1>

                    <p>
                        Enter your email address and we'll send you
                        a link to reset your password.
                    </p>

                </div>

            </div>


            <div className="login-page__card">

                <div className="login-page__header">

                    <Link
                        to="/login"
                        className="login__back"
                    >
                        ← Back to login
                    </Link>

                    <h2>Reset password</h2>

                    <p>
                        Enter your registered email address
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


                    {message && (
                        <p className="login-form__success">
                            {message}
                        </p>
                    )}


                    <div className="login-form__group">

                        <label htmlFor="forgot-email">
                            Email address
                        </label>

                        <input
                            id="forgot-email"
                            type="email"
                            placeholder="you@example.com"
                            value={email}
                            onChange={(event) =>
                                setEmail(event.target.value)
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
                            ? "Sending..."
                            : "Send reset link"}
                    </button>

                </form>


                <p className="login-page__signup">

                    Remember your password?

                    <Link to="/login">
                        {" "}Sign in
                    </Link>

                </p>

            </div>

        </main>
    );
}

export default ForgotPassword;