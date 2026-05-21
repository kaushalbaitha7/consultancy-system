import { useNavigate } from "react-router-dom";

import { useState } from "react";

import axios from "axios";

import { Link } from "react-router-dom";

import "../styles/auth.css";

import logo from "../assets/logo.png";

function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);

    const handleLogin = async (e) => {

        e.preventDefault();

        setLoading(true);

        try {

            const res = await axios.post(

                "https://gyanguru-backend.onrender.com/api/auth/login",

                {
                    email,
                    password
                }

            );

            console.log(res.data);

            // SAVE TOKEN
            localStorage.setItem(

                "token",

                res.data.token

            );

            // SAVE USER
            localStorage.setItem(

                "user",

                JSON.stringify(res.data.user)

            );

            alert("Login Successful");

            navigate("/dashboard");

        } catch (error) {

            console.log(error);

            alert(

                error.response?.data?.message ||

                "Login Failed"

            );

        } finally {

            setLoading(false);

        }

    };

    return (

        <div className="auth-container">

            {/* TOP BRANDING */}

            <div className="top-branding">

                <img
                    src={logo}
                    alt="logo"
                    className="main-logo"
                />

                <h1 className="brand-title">
                    GyanGuru Admission Portal
                </h1>

                <p className="brand-subtitle">
                    Educational Consultancy
                </p>

            </div>



            {/* LOGIN CARD */}

            <div className="auth-card">

                <h2>NEET UG 2026</h2>

                <p className="subtitle">
                    Student Login Portal
                </p>

                <form onSubmit={handleLogin}>

                    <input
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) =>
                            setEmail(e.target.value)
                        }
                        required
                    />

                    <input
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) =>
                            setPassword(e.target.value)
                        }
                        required
                    />

                    <button
                        type="submit"
                        disabled={loading}
                    >

                        {
                            loading
                                ? "Please Wait..."
                                : "Login"
                        }

                    </button>

                </form>

                <div className="divider">
                    OR
                </div>

                <p className="register-text">

                    New Student?

                    <Link to="/register">
                        Create Account
                    </Link>

                </p>

            </div>

        </div>

    );

}

export default Login;