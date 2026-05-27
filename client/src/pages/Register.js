import { useState } from "react";

import axios from "axios";

import { Link, useNavigate } from "react-router-dom";

import "../styles/auth.css";

import logo from "../assets/logo.png";

function Register() {

    const navigate = useNavigate();

    const [fullName, setFullName] =
    useState("");

    const [email, setEmail] =
    useState("");

    const [phone, setPhone] =
    useState("");

    const [password, setPassword] =
    useState("");

    const [loading, setLoading] =
    useState(false);

    const [success, setSuccess] =
    useState("");

    const [error, setError] =
    useState("");



    const handleRegister =
    async (e) => {

        e.preventDefault();

        setLoading(true);

        setError("");



        try {

            const res =
            await axios.post(

                "https://gyanguru-backend.onrender.com/api/auth/register",

                {

                    fullName,

                    email,

                    phone,

                    password

                }

            );



            console.log(res.data);



            /* SUCCESS */

            setSuccess(

                "Registration Successful! Redirecting to Login..."

            );



            /* AUTO REDIRECT */

            setTimeout(() => {

                navigate("/");

            }, 1800);

        }

        catch (error) {

            console.log(error);



            setError(

                error.response?.data?.message ||

                "Registration Failed"

            );

        }

        finally {

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



            {/* REGISTER CARD */}

            <div className="auth-card">

                <h2>Student Registration</h2>



                <p className="subtitle">

                    Create Your NEET UG 2026 Account

                </p>



                {/* SUCCESS */}

                {

                    success && (

                        <div className="success-toast">

                            {success}

                        </div>

                    )

                }



                {/* ERROR */}

                {

                    error && (

                        <div className="error-toast">

                            {error}

                        </div>

                    )

                }



                <form onSubmit={handleRegister}>



                    <input

                        type="text"

                        placeholder="Enter Full Name"

                        value={fullName}

                        onChange={(e) =>

                            setFullName(e.target.value)

                        }

                        required

                    />



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

                        type="text"

                        placeholder="Enter Mobile Number"

                        value={phone}

                        onChange={(e) =>

                            setPhone(e.target.value)

                        }

                        required

                    />



                    <input

                        type="password"

                        placeholder="Create Password"

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

                                : "Create Account"

                        }

                    </button>

                </form>



                <div className="divider">

                    OR

                </div>



                <p className="register-text">

                    Already Registered?



                    <Link to="/">

                        Login Here

                    </Link>

                </p>

            </div>

        </div>

    );

}

export default Register;