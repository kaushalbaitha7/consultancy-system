import { useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";

import axios from "axios";

import "../styles/form.css";

function PersonalDetails() {

    const user =
    JSON.parse(
        localStorage.getItem("user")
    );


    const navigate = useNavigate();
    
    const [error, setError] =
    useState("");

    const [success, setSuccess] =
    useState("");

    const [previewMode, setPreviewMode] =
    useState(false);



    const [formData, setFormData] =
    useState({

        neetRollNo: "",

        neetApplicationNo: "",

        allIndiaRank: "",

        candidateName: "",

        fatherName: "",

        motherName: "",

        dob: "",

        category: "",

        disabledQuota: "",

        neetMobile: "",

        alternativeMobile: "",

        neetEmail: "",

        identificationMark: "",

        domicileState: "",

        nriQuota: "",

        nationality: "",

        religion: "",

        aadharNumber: "",

        motherTongue: ""

    });



    /* =========================
       FETCH SAVED DATA
    ========================= */

    useEffect(() => {

        const fetchData = async () => {

            try {

                const res =
                await axios.get(

                    `https://gyanguru-backend.onrender.com/api/student/personal-details/${user._id}`

                );



                if (
                    res.data.personalDetails
                ) {

                    setFormData(
                        res.data.personalDetails
                    );



                    const hasData =
                    Object.values(
                        res.data.personalDetails
                    ).some(
                        value => value !== ""
                    );



                    if (hasData) {

                        setPreviewMode(true);

                    }

                }

            }

            catch (error) {

                console.log(error);

            }

        };



        fetchData();

    }, [user._id]);



    /* =========================
       HANDLE CHANGE
    ========================= */

    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]:
            e.target.value

        });

    };



    /* =========================
       SAVE DETAILS
    ========================= */

    const handleSubmit =
    async (e) => {

        e.preventDefault();



        const emptyField =
        Object.values(formData)
        .some(value => value === "");



        if (emptyField) {

            setError(
                "All fields are mandatory. Please fill all details carefully."
            );

            setSuccess("");

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

            return;

        }



        try {

            const res =
            await axios.post(

                "https://gyanguru-backend.onrender.com/api/student/personal-details",

                {

                    userId: user._id,

                    personalDetails:
                    formData

                }

            );



            console.log(res.data);



            setError("");



            setSuccess(
                "Personal Details Saved Successfully"
            );



            setPreviewMode(true);

        }

        catch (error) {

            console.log(error);

            setError(
                "Something went wrong"
            );

        }

    };



    return (

        <div className="form-page">

            <div className="form-header">

                <h1>
                    Personal Details
                </h1>

                <p>
                    Fill all mandatory NEET UG
                    counselling details carefully.
                </p>

            </div>



            {
                error && (

                    <div className="form-error">

                        {error}

                    </div>

                )
            }



            {
                success && (

                    <div className="form-success">

                        {success}

                    </div>

                )
            }



            {
                previewMode ? (

                    <div className="preview-card">

                        <h2>
                            Application Preview
                        </h2>



                        <div className="preview-grid">

                            <div>
                                <strong>
                                    Candidate Name
                                </strong>

                                <p>
                                    {formData.candidateName}
                                </p>
                            </div>



                            <div>
                                <strong>
                                    NEET Roll Number
                                </strong>

                                <p>
                                    {formData.neetRollNo}
                                </p>
                            </div>



                            <div>
                                <strong>
                                    NEET Application Number
                                </strong>

                                <p>
                                    {formData.neetApplicationNo}
                                </p>
                            </div>



                            <div>
                                <strong>
                                    All India Rank
                                </strong>

                                <p>
                                    {formData.allIndiaRank}
                                </p>
                            </div>



                            <div>
                                <strong>
                                    Category
                                </strong>

                                <p>
                                    {formData.category}
                                </p>
                            </div>



                            <div>
                                <strong>
                                    Nationality
                                </strong>

                                <p>
                                    {formData.nationality}
                                </p>
                            </div>



                            <div>
                                <strong>
                                    Religion
                                </strong>

                                <p>
                                    {formData.religion}
                                </p>
                            </div>

                        </div>



                        <button

                            className="edit-btn"

                            onClick={() =>
                                setPreviewMode(false)
                            }

                        >

                            Edit Details

                        </button>

                        <button
                           className="home-btn"
                           onClick={() => navigate("/dashboard")}
                        >
                            Go To Dashboard
                        </button>

                    </div>

                ) : (

                    <form
                        className="main-form"
                        onSubmit={handleSubmit}
                    >

                        <div className="form-grid">



                            <div className="form-group">

                                <label>
                                    NEET Roll Number
                                </label>

                                <input
                                    type="text"
                                    name="neetRollNo"
                                    value={formData.neetRollNo}
                                    onChange={handleChange}
                                    placeholder="Enter NEET Roll Number"
                                />

                            </div>



                            <div className="form-group">

                                <label>
                                    NEET Application Number
                                </label>

                                <input
                                    type="text"
                                    name="neetApplicationNo"
                                    value={formData.neetApplicationNo}
                                    onChange={handleChange}
                                    placeholder="Enter Application Number"
                                />

                            </div>



                            <div className="form-group">

                                <label>
                                    All India Rank
                                </label>

                                <input
                                    type="text"
                                    name="allIndiaRank"
                                    value={formData.allIndiaRank}
                                    onChange={handleChange}
                                    placeholder="Enter AIR Rank"
                                />

                            </div>



                            <div className="form-group">

                                <label>
                                    Candidate Name
                                </label>

                                <input
                                    type="text"
                                    name="candidateName"
                                    value={formData.candidateName}
                                    onChange={handleChange}
                                    placeholder="Enter Candidate Name"
                                />

                            </div>



                            <div className="form-group">

                                <label>
                                    Father's Name
                                </label>

                                <input
                                    type="text"
                                    name="fatherName"
                                    value={formData.fatherName}
                                    onChange={handleChange}
                                    placeholder="Enter Father's Name"
                                />

                            </div>



                            <div className="form-group">

                                <label>
                                    Mother's Name
                                </label>

                                <input
                                    type="text"
                                    name="motherName"
                                    value={formData.motherName}
                                    onChange={handleChange}
                                    placeholder="Enter Mother's Name"
                                />

                            </div>



                            <div className="form-group">

                                <label>
                                    Date of Birth
                                </label>

                                <input
                                    type="date"
                                    name="dob"
                                    value={formData.dob}
                                    onChange={handleChange}
                                />

                            </div>



                            <div className="form-group">

                                <label>
                                    Category
                                </label>

                                <select
                                    name="category"
                                    value={formData.category}
                                    onChange={handleChange}
                                >

                                    <option value="">
                                        Select Category
                                    </option>

                                    <option value="General">
                                        General
                                    </option>

                                    <option value="OBC">
                                        OBC
                                    </option>

                                    <option value="SC">
                                        SC
                                    </option>

                                    <option value="ST">
                                        ST
                                    </option>

                                    <option value="EWS">
                                        EWS
                                    </option>

                                </select>

                            </div>



                            <div className="form-group">

                                <label>
                                    Disabled Quota
                                </label>

                                <select
                                    name="disabledQuota"
                                    value={formData.disabledQuota}
                                    onChange={handleChange}
                                >

                                    <option value="">
                                        Select Option
                                    </option>

                                    <option value="Yes">
                                        Yes
                                    </option>

                                    <option value="No">
                                        No
                                    </option>

                                </select>

                            </div>



                            <div className="form-group">

                                <label>
                                    NEET Registered Mobile Number
                                </label>

                                <input
                                    type="text"
                                    name="neetMobile"
                                    value={formData.neetMobile}
                                    onChange={handleChange}
                                    placeholder="Enter Mobile Number"
                                />

                            </div>



                            <div className="form-group">

                                <label>
                                    Alternative Mobile Number
                                </label>

                                <input
                                    type="text"
                                    name="alternativeMobile"
                                    value={formData.alternativeMobile}
                                    onChange={handleChange}
                                    placeholder="Enter Parent Mobile"
                                />

                            </div>



                            <div className="form-group">

                                <label>
                                    NEET Registered Email ID
                                </label>

                                <input
                                    type="email"
                                    name="neetEmail"
                                    value={formData.neetEmail}
                                    onChange={handleChange}
                                    placeholder="Enter Email"
                                />

                            </div>



                            <div className="form-group">

                                <label>
                                    Mark of Identification
                                </label>

                                <input
                                    type="text"
                                    name="identificationMark"
                                    value={formData.identificationMark}
                                    onChange={handleChange}
                                    placeholder="Enter Identification Mark"
                                />

                            </div>



                            <div className="form-group">

                                <label>
                                    Domicile State
                                </label>

                                <input
                                    type="text"
                                    name="domicileState"
                                    value={formData.domicileState}
                                    onChange={handleChange}
                                    placeholder="Enter State"
                                />

                            </div>



                            <div className="form-group">

                                <label>
                                    NRI Quota
                                </label>

                                <select
                                    name="nriQuota"
                                    value={formData.nriQuota}
                                    onChange={handleChange}
                                >

                                    <option value="">
                                        Select Option
                                    </option>

                                    <option value="Yes">
                                        Yes
                                    </option>

                                    <option value="No">
                                        No
                                    </option>

                                </select>

                            </div>



                            <div className="form-group">

                                <label>
                                    Nationality
                                </label>

                                <select
                                    name="nationality"
                                    value={formData.nationality}
                                    onChange={handleChange}
                                >

                                    <option value="">
                                        Select Nationality
                                    </option>

                                    <option value="Indian">
                                        Indian
                                    </option>

                                    <option value="Others">
                                        Others
                                    </option>

                                </select>

                            </div>



                            <div className="form-group">

                                <label>
                                    Religion
                                </label>

                                <select
                                    name="religion"
                                    value={formData.religion}
                                    onChange={handleChange}
                                >

                                    <option value="">
                                        Select Religion
                                    </option>

                                    <option value="Hindu">
                                        Hindu
                                    </option>

                                    <option value="Muslim">
                                        Muslim
                                    </option>

                                    <option value="Sikh">
                                        Sikh
                                    </option>

                                    <option value="Christian">
                                        Christian
                                    </option>

                                    <option value="Buddhism">
                                        Buddhism
                                    </option>

                                    <option value="Other">
                                        Other
                                    </option>

                                </select>

                            </div>



                            <div className="form-group">

                                <label>
                                    Aadhar Number
                                </label>

                                <input
                                    type="text"
                                    name="aadharNumber"
                                    value={formData.aadharNumber}
                                    onChange={handleChange}
                                    placeholder="Enter Aadhar Number"
                                />

                            </div>



                            <div className="form-group">

                                <label>
                                    Mother Tongue
                                </label>

                                <input
                                    type="text"
                                    name="motherTongue"
                                    value={formData.motherTongue}
                                    onChange={handleChange}
                                    placeholder="Enter Mother Tongue"
                                />

                            </div>

                        </div>



                        <button
                            className="save-btn"
                            type="submit"
                        >

                            Save Personal Details

                        </button>

                    </form>

                )
            }

        </div>

    );

}

export default PersonalDetails;