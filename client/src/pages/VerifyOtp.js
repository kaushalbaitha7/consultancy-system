import { useState } from "react";

import axios from "axios";

import { useLocation, useNavigate } from "react-router-dom";

import "../styles/auth.css";

function VerifyOtp() {

    const [otp, setOtp] = useState("");

    const location = useLocation();

    const navigate = useNavigate();

    const email = location.state?.email;

    const handleVerify = async (e) => {

        e.preventDefault();

        try {

            const res = await axios.post(
                "http://localhost:5000/api/auth/verify-otp",
                {
                    email,
                    otp
                }
            );

            alert(res.data.message);

            navigate("/");

        } catch (error) {

            alert(
                error.response?.data?.message ||
                "Verification Failed"
            );

        }

    };

    return (

        <div className="auth-container">

            <div className="auth-card">

                <h2>Verify OTP</h2>

                <p className="subtitle">
                    Enter OTP sent to your email
                </p>

                <form onSubmit={handleVerify}>

                    <input
                        type="text"
                        placeholder="Enter OTP"
                        value={otp}
                        onChange={(e) =>
                            setOtp(e.target.value)
                        }
                        required
                    />

                    <button type="submit">
                        Verify OTP
                    </button>

                </form>

            </div>

        </div>

    );

}

export default VerifyOtp;