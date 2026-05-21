import "../styles/dashboard.css";

function Dashboard() {

    const user =
        JSON.parse(localStorage.getItem("user"));

    return (

        <div className="dashboard-container">

            {/* SIDEBAR */}

            <div className="sidebar">

                <div className="sidebar-top">

                    <h2>GyanGuru</h2>

                    <p>Admission Portal</p>

                </div>

                <ul>

                    <li>Dashboard</li>

                    <li>Personal Details</li>

                    <li>Applications</li>

                    <li>Allotment Status</li>

                    <li>Documents</li>

                    <li>Notifications</li>

                </ul>

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

                    <h1>
                        Welcome,
                        {user?.fullName || "Student"}
                    </h1>

                </div>



                {/* CARDS */}

                <div className="cards-grid">

                    <div className="dashboard-card">

                        <h3>Application Status</h3>

                        <p>Pending</p>

                    </div>

                    <div className="dashboard-card">

                        <h3>Allotment Status</h3>

                        <p>Not Released</p>

                    </div>

                    <div className="dashboard-card">

                        <h3>Documents</h3>

                        <p>Incomplete</p>

                    </div>

                    <div className="dashboard-card">

                        <h3>NEET Counseling</h3>

                        <p>Round 1 Active</p>

                    </div>

                </div>



                {/* PROFILE SECTION */}

                <div className="profile-box">

                    <h2>Personal Information</h2>

                    <div className="profile-grid">

                        <div>

                            <label>Full Name</label>

                            <input
                                value={
                                    user?.fullName || ""
                                }
                                readOnly
                            />

                        </div>

                        <div>

                            <label>Email</label>

                            <input
                                value={
                                    user?.email || ""
                                }
                                readOnly
                            />

                        </div>

                        <div>

                            <label>Phone</label>

                            <input
                                value={
                                    user?.phone || ""
                                }
                                readOnly
                            />

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Dashboard;