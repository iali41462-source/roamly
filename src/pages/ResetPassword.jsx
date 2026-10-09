import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

function ResetPassword() {

    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const token = searchParams.get("token");
    const email = searchParams.get("email");

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [error, setError] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);


    async function handleSubmit(event) {

        event.preventDefault();

        setError("");
        setMessage("");


        // Password validation

        if (password.length < 6) {
            setError("Password must be at least 6 characters.");
            return;
        }


        // Confirm password validation

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }


        try {

            setLoading(true);


            const response = await fetch(
                `${import.meta.env.VITE_API_URL}/api/reset-password`,
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                    },

                    body: JSON.stringify({
                        token: token,
                        email: email,
                        password: password,
                        password_confirmation: confirmPassword,
                    }),
                }
            );


            const data = await response.json();


            if (!response.ok) {

                setError(
                    data.message ||
                    "Unable to reset password."
                );

                return;
            }


            setMessage(
                data.message ||
                "Password has been reset successfully."
            );


            setTimeout(() => {
                navigate("/login");
            }, 2000);


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

                    <p>NEW PASSWORD</p>

                    <h1>
                        Create a new
                        <span> password.</span>
                    </h1>

                    <p>
                        Choose a new password for your Roamly
                        account and continue your journey.
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
                        Enter your new password below
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

                        <label htmlFor="reset-password">
                            New password
                        </label>

                        <input
                            id="reset-password"
                            type="password"
                            placeholder="Enter new password"
                            value={password}
                            onChange={(event) =>
                                setPassword(event.target.value)
                            }
                            required
                        />

                    </div>


                    <div className="login-form__group">

                        <label htmlFor="reset-confirm-password">
                            Confirm password
                        </label>

                        <input
                            id="reset-confirm-password"
                            type="password"
                            placeholder="Confirm new password"
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
                        disabled={loading}
                    >
                        {loading
                            ? "Resetting..."
                            : "Reset password"}
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

export default ResetPassword;