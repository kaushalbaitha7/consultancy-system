import { useNavigate } from "react-router-dom";

import { useState } from "react";

import axios from "axios";

import { Link } from "react-router-dom";

import "../styles/auth.css";

function Register() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({

        fullName: "",
        email: "",
        phone: "",
        password: ""

    });

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    };

    const handleRegister = async (e) => {

        e.preventDefault();

        try {

            // REGISTER USER
            const res = await axios.post(
                "https://gyanguru-backend.onrender.com/api/auth/register",
                formData
            );

            console.log(res.data);

            // SEND OTP
            await axios.post(
                "https://gyanguru-backend.onrender.com/api/auth/send-otp",
                {
                    email: formData.email
                }
            );

            alert("OTP Sent Successfully");

            // REDIRECT TO VERIFY PAGE
           navigate("/");

        } catch (error) {

            alert(
                error.response?.data?.message ||
                "Registration Failed"
            );

        }

    };

    return (

        <div className="auth-container">

            <div className="auth-card">

                <h2>Create Account</h2>

                <p className="subtitle">
                    NEET UG Student Registration
                </p>

                <form onSubmit={handleRegister}>

                    <input
                        type="text"
                        placeholder="Full Name"
                        name="fullName"
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="text"
                        placeholder="Phone Number"
                        name="phone"
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="password"
                        placeholder="Create Password"
                        name="password"
                        onChange={handleChange}
                        required
                    />

                    <button type="submit">
                        Register
                    </button>

                </form>

                <p className="register-text">

                    Already Registered?

                    <Link to="/">
                        Login
                    </Link>

                </p>

            </div>

        </div>

    );

}

export default Register;