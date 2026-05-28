import { Link } from "react-router-dom";
import "../styles/dashboard.css";

import logo from "../assets/logo.png";

function Dashboard() {

    const user =
        JSON.parse(
            localStorage.getItem("user")
        );

    return (

        <>
        
        <div className="dashboard-container">

            {/* SIDEBAR */}

            <div className="sidebar">

                <div>

                    <div className="sidebar-logo">

                        <img
                            src={logo}
                            alt="logo"
                        />

                        <div>

                            <h2>
                                GyanGuru
                            </h2>

                            <p>
                                Admission Portal
                            </p>

                        </div>

                    </div>

                    <ul>

                        <Link
                           to="/dashboard"
                         className="menu-link"
    >
                         <li className="active-menu">
                           Dashboard
                     </li>
                     </Link>

                          <Link
                           to="/personal-details"
                         className="menu-link"
    >
        <li>
            Personal Details
        </li>
    </Link>

    <Link
    to="/educational-details"
    className="menu-link"
>

    <li>

        Educational Details

    </li>

</Link>

    <Link
    to="/address-details"
    className="menu-link"
>

    <li>

        Address Details

    </li>

</Link>

    <li>
        Bank Details
    </li>

    <li>
        Counselling Preferences
    </li>

    <li>
        Documents Upload
    </li>

    <li>
        Downloads
    </li>

    <li>
        Support
    </li>

</ul>

                </div>

                <button
                    className="logout-btn"
                    onClick={() => {

                        localStorage.clear();

                        window.location.href = "/";

                    }}
                >
                    Logout
                </button>

            </div>



            {/* MAIN CONTENT */}

            <div className="main-content">

                {/* TOPBAR */}

                <div className="topbar">

                    <div>

                        <h1>
                            Welcome,
                            {
                                user?.fullName
                            }
                        </h1>

                        <p>
                            NEET UG Counselling Dashboard
                        </p>

                    </div>

                </div>



                {/* NOTICE BANNER */}

                <div className="notice-banner">

                    <img
                        src="https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1200"
                        alt="banner"
                    />

                    <div className="notice-content">

                        <h2>
                            MCC Round 1 Started
                        </h2>

                        <p>
                            Choice filling is now active
                            for NEET UG counselling.
                        </p>

                    </div>

                </div>



                {/* STATUS CARDS */}

                <div className="cards-grid">

                    <div className="dashboard-card">

                        <h3>
                            Counselling Status
                        </h3>

                        <p>
                            MCC Round 1 Active
                        </p>

                    </div>

                    <div className="dashboard-card">

                        <h3>
                            Application Status
                        </h3>

                        <p>
                            Documents Pending
                        </p>

                    </div>

                    <div className="dashboard-card">

                        <h3>
                            Download Forms
                        </h3>

                        <p>
                            6 Forms Available
                        </p>

                    </div>

                </div>



                {/* STATE CARDS */}

                <div className="section-box">

                    <div className="section-header">

                        <h2>
                            State Wise Colleges
                        </h2>

                    </div>

                    <div className="states-grid">

                        <div className="state-card">
                            Karnataka
                        </div>

                        <div className="state-card">
                            Maharashtra
                        </div>

                        <div className="state-card">
                            Uttar Pradesh
                        </div>

                        <div className="state-card">
                            Tamil Nadu
                        </div>

                        <div className="state-card">
                            Rajasthan
                        </div>

                        <div className="state-card">
                            Bihar
                        </div>

                    </div>

                </div>



                {/* APPLICATION TRACKER */}

                <div className="section-box">

                    <div className="section-header">

                        <h2>
                            Application Tracker
                        </h2>

                    </div>

                    <div className="tracker">

                        <div className="tracker-step active">

                            <span>
                                1
                            </span>

                            <p>
                                Registered
                            </p>

                        </div>

                        <div className="tracker-line"></div>

                        <div className="tracker-step active">

                            <span>
                                2
                            </span>

                            <p>
                                Documents Uploaded
                            </p>

                        </div>

                        <div className="tracker-line"></div>

                        <div className="tracker-step">

                            <span>
                                3
                            </span>

                            <p>
                                Counselling Applied
                            </p>

                        </div>

                        <div className="tracker-line"></div>

                        <div className="tracker-step">

                            <span>
                                4
                            </span>

                            <p>
                                Allotment
                            </p>

                        </div>

                    </div>

                </div>



                {/* SUPPORT BOX */}

                <div className="support-box">

                    <h2>
                        Need Support?
                    </h2>

                    <p>
                        Contact our counselling
                        support team anytime.
                    </p>

                    <div className="support-buttons">

                        <button>
                            WhatsApp
                        </button>

                        <button>
                            Call Support
                        </button>

                        <button>
                            Telegram
                        </button>

                    </div>

                </div>

            </div>

        </div>



        {/* PREMIUM FOOTER */}

        <footer className="dashboard-footer">

            <p>
                © 2026 GyanGuru Consultancy |
                All Rights Reserved
            </p>

        </footer>

        </>

    );

}

export default Dashboard;