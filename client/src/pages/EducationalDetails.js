import { useEffect, useState } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

import "../styles/educational.css";

function EducationalDetails() {

    const navigate = useNavigate();

    const user =
    JSON.parse(localStorage.getItem("user"));



    const [previewMode, setPreviewMode] =
    useState(false);



    const [success, setSuccess] =
    useState("");



    const [error, setError] =
    useState("");



    const [fieldErrors, setFieldErrors] =
    useState({});



    const [formData, setFormData] =
    useState({

        tenth: {

            seatNo: "",

            percentage: "",

            schoolName: "",

            schoolAddress: "",

            board: "",

            collegeType: "",

            passedYear: ""

        },



        twelfth: {

            seatNo: "",

            percentage: "",



            pcbMarks: {

                physics: "",

                chemistry: "",

                biology: "",

                pcbPercentage: ""

            },



            schoolName: "",

            schoolAddress: "",

            board: "",

            collegeType: "",

            passedYear: ""

        }

    });



    useEffect(() => {

        fetchEducationalDetails();

    }, []);





    const fetchEducationalDetails =
    async () => {

        try {

            const res =
            await axios.get(

                `https://gyanguru-backend.onrender.com/api/student/educational-details/${user._id}`

            );



            if (

                res.data.educationalDetails

            ) {

                setFormData(

                    res.data.educationalDetails

                );



                const data =
                res.data.educationalDetails;



                const isComplete =

                    data?.tenth?.seatNo?.trim() &&

                    data?.tenth?.percentage?.trim() &&

                    data?.tenth?.schoolName?.trim() &&

                    data?.tenth?.schoolAddress?.trim() &&

                    data?.tenth?.board?.trim() &&

                    data?.tenth?.collegeType?.trim() &&

                    data?.tenth?.passedYear?.trim() &&



                    data?.twelfth?.seatNo?.trim() &&

                    data?.twelfth?.percentage?.trim() &&

                    data?.twelfth?.pcbMarks?.physics?.trim() &&

                    data?.twelfth?.pcbMarks?.chemistry?.trim() &&

                    data?.twelfth?.pcbMarks?.biology?.trim() &&

                    data?.twelfth?.pcbMarks?.pcbPercentage?.trim() &&

                    data?.twelfth?.schoolName?.trim() &&

                    data?.twelfth?.schoolAddress?.trim() &&

                    data?.twelfth?.board?.trim() &&

                    data?.twelfth?.collegeType?.trim() &&

                    data?.twelfth?.passedYear?.trim();



                if (isComplete) {

                    setPreviewMode(true);

                }

            }

        }

        catch (error) {

            console.log(error);

        }

    };





    const handleChange = (

        section,

        field,

        value

    ) => {

        setFormData({

            ...formData,

            [section]: {

                ...formData[section],

                [field]: value

            }

        });

    };





    const handlePCBChange = (

        field,

        value

    ) => {

        setFormData({

            ...formData,

            twelfth: {

                ...formData.twelfth,

                pcbMarks: {

                    ...formData.twelfth.pcbMarks,

                    [field]: value

                }

            }

        });

    };





    const validateForm = () => {

        let errors = {};



        if (!formData.tenth.seatNo.trim()) {

            errors.tenthSeatNo =
            "10th Seat Number is required";

        }



        if (!formData.tenth.percentage.trim()) {

            errors.tenthPercentage =
            "10th Percentage is required";

        }



        if (!formData.tenth.schoolName.trim()) {

            errors.tenthSchoolName =
            "10th School Name is required";

        }



        if (!formData.tenth.schoolAddress.trim()) {

            errors.tenthSchoolAddress =
            "10th School Address is required";

        }



        if (!formData.tenth.board.trim()) {

            errors.tenthBoard =
            "10th Board is required";

        }



        if (!formData.tenth.collegeType.trim()) {

            errors.tenthCollegeType =
            "10th College Type is required";

        }



        if (!formData.tenth.passedYear.trim()) {

            errors.tenthPassedYear =
            "10th Passed Year is required";

        }



        if (!formData.twelfth.seatNo.trim()) {

            errors.twelfthSeatNo =
            "12th Seat Number is required";

        }



        if (!formData.twelfth.percentage.trim()) {

            errors.twelfthPercentage =
            "12th Percentage is required";

        }



        if (

            !formData.twelfth.pcbMarks.physics.trim()

        ) {

            errors.physics =
            "Physics Marks required";

        }



        if (

            !formData.twelfth.pcbMarks.chemistry.trim()

        ) {

            errors.chemistry =
            "Chemistry Marks required";

        }



        if (

            !formData.twelfth.pcbMarks.biology.trim()

        ) {

            errors.biology =
            "Biology Marks required";

        }



        if (

            !formData.twelfth.pcbMarks.pcbPercentage.trim()

        ) {

            errors.pcbPercentage =
            "PCB Percentage required";

        }



        if (!formData.twelfth.schoolName.trim()) {

            errors.twelfthSchoolName =
            "12th School Name is required";

        }



        if (!formData.twelfth.schoolAddress.trim()) {

            errors.twelfthSchoolAddress =
            "12th School Address is required";

        }



        if (!formData.twelfth.board.trim()) {

            errors.twelfthBoard =
            "12th Board is required";

        }



        if (!formData.twelfth.collegeType.trim()) {

            errors.twelfthCollegeType =
            "12th College Type is required";

        }



        if (!formData.twelfth.passedYear.trim()) {

            errors.twelfthPassedYear =
            "12th Passed Year is required";

        }



        setFieldErrors(errors);



        return Object.keys(errors)
        .length === 0;

    };





    const handleSubmit =
    async (e) => {

        e.preventDefault();



        if (!validateForm()) {

            setError(

                "Please fill all mandatory fields."

            );

            return;

        }



        try {

            const res =
            await axios.post(

                "https://gyanguru-backend.onrender.com/api/student/educational-details",

                {

                    userId: user._id,

                    educationalDetails:
                    formData

                }

            );



            console.log(res.data);



            setSuccess(

                "Educational Details Saved Successfully"

            );



            setError("");



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

                    Educational Details

                </h1>



                <p>

                    Fill all academic details carefully.

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

                    <div className="success-message">

                        {success}

                    </div>

                )

            }



            {

                !previewMode ? (

                    <form

                        className="main-form"

                        onSubmit={handleSubmit}

                    >



                        {/* 10TH SECTION */}



                        <div className="section-title">

                            10th / SSC Details

                        </div>



                        <div className="form-grid">



                            <div className="form-group">

                                <label>

                                    Seat No

                                </label>

                                <input

                                    type="text"

                                    value={formData.tenth.seatNo}

                                    onChange={(e) =>

                                        handleChange(

                                            "tenth",

                                            "seatNo",

                                            e.target.value

                                        )

                                    }

                                />

                                {

                                    fieldErrors.tenthSeatNo &&

                                    <span className="field-error">

                                        {

                                            fieldErrors.tenthSeatNo

                                        }

                                    </span>

                                }

                            </div>



                            <div className="form-group">

                                <label>

                                    Percentage

                                </label>

                                <input

                                    type="text"

                                    value={formData.tenth.percentage}

                                    onChange={(e) =>

                                        handleChange(

                                            "tenth",

                                            "percentage",

                                            e.target.value

                                        )

                                    }

                                />

                            </div>



                            <div className="form-group">

                                <label>

                                    School Name

                                </label>

                                <input

                                    type="text"

                                    value={formData.tenth.schoolName}

                                    onChange={(e) =>

                                        handleChange(

                                            "tenth",

                                            "schoolName",

                                            e.target.value

                                        )

                                    }

                                />

                            </div>



                            <div className="form-group">

                                <label>

                                    School Address

                                </label>

                                <input

                                    type="text"

                                    value={formData.tenth.schoolAddress}

                                    onChange={(e) =>

                                        handleChange(

                                            "tenth",

                                            "schoolAddress",

                                            e.target.value

                                        )

                                    }

                                />

                            </div>



                            <div className="form-group">

                                <label>

                                    Board

                                </label>

                                <input

                                    type="text"

                                    value={formData.tenth.board}

                                    onChange={(e) =>

                                        handleChange(

                                            "tenth",

                                            "board",

                                            e.target.value

                                        )

                                    }

                                />

                            </div>



                            <div className="form-group">

                                <label>

                                    College Type

                                </label>

                                <select

                                    value={formData.tenth.collegeType}

                                    onChange={(e) =>

                                        handleChange(

                                            "tenth",

                                            "collegeType",

                                            e.target.value

                                        )

                                    }

                                >

                                    <option value="">

                                        Select

                                    </option>

                                    <option>

                                        Government

                                    </option>

                                    <option>

                                        Private

                                    </option>

                                </select>

                            </div>



                            <div className="form-group">

                                <label>

                                    Passed Year

                                </label>

                                <input

                                    type="text"

                                    value={formData.tenth.passedYear}

                                    onChange={(e) =>

                                        handleChange(

                                            "tenth",

                                            "passedYear",

                                            e.target.value

                                        )

                                    }

                                />

                            </div>

                        </div>



                        {/* 12TH SECTION */}



                        <div className="section-title">

                            12th / PUC Details

                        </div>



                        <div className="form-grid">



                            <div className="form-group">

                                <label>

                                    Seat No

                                </label>

                                <input

                                    type="text"

                                    value={formData.twelfth.seatNo}

                                    onChange={(e) =>

                                        handleChange(

                                            "twelfth",

                                            "seatNo",

                                            e.target.value

                                        )

                                    }

                                />

                            </div>



                            <div className="form-group">

                                <label>

                                    Percentage

                                </label>

                                <input

                                    type="text"

                                    value={formData.twelfth.percentage}

                                    onChange={(e) =>

                                        handleChange(

                                            "twelfth",

                                            "percentage",

                                            e.target.value

                                        )

                                    }

                                />

                            </div>

                        </div>



                        {/* PCB TABLE */}



                        <div className="pcb-section">

                            <h3>

                                PCB Marks Details

                            </h3>



                            <div className="pcb-table">

                                <div className="pcb-row">

                                    <span>

                                        Physics

                                    </span>



                                    <input

                                        type="text"

                                        value={formData.twelfth.pcbMarks.physics}

                                        onChange={(e) =>

                                            handlePCBChange(

                                                "physics",

                                                e.target.value

                                            )

                                        }

                                    />

                                </div>



                                <div className="pcb-row">

                                    <span>

                                        Chemistry

                                    </span>



                                    <input

                                        type="text"

                                        value={formData.twelfth.pcbMarks.chemistry}

                                        onChange={(e) =>

                                            handlePCBChange(

                                                "chemistry",

                                                e.target.value

                                            )

                                        }

                                    />

                                </div>



                                <div className="pcb-row">

                                    <span>

                                        Biology

                                    </span>



                                    <input

                                        type="text"

                                        value={formData.twelfth.pcbMarks.biology}

                                        onChange={(e) =>

                                            handlePCBChange(

                                                "biology",

                                                e.target.value

                                            )

                                        }

                                    />

                                </div>



                                <div className="pcb-row">

                                    <span>

                                        PCB Percentage

                                    </span>



                                    <input

                                        type="text"

                                        value={formData.twelfth.pcbMarks.pcbPercentage}

                                        onChange={(e) =>

                                            handlePCBChange(

                                                "pcbPercentage",

                                                e.target.value

                                            )

                                        }

                                    />

                                </div>

                            </div>

                        </div>



                        <div className="form-grid">



                            <div className="form-group">

                                <label>

                                    School Name

                                </label>

                                <input

                                    type="text"

                                    value={formData.twelfth.schoolName}

                                    onChange={(e) =>

                                        handleChange(

                                            "twelfth",

                                            "schoolName",

                                            e.target.value

                                        )

                                    }

                                />

                            </div>



                            <div className="form-group">

                                <label>

                                    School Address

                                </label>

                                <input

                                    type="text"

                                    value={formData.twelfth.schoolAddress}

                                    onChange={(e) =>

                                        handleChange(

                                            "twelfth",

                                            "schoolAddress",

                                            e.target.value

                                        )

                                    }

                                />

                            </div>



                            <div className="form-group">

                                <label>

                                    Board

                                </label>

                                <input

                                    type="text"

                                    value={formData.twelfth.board}

                                    onChange={(e) =>

                                        handleChange(

                                            "twelfth",

                                            "board",

                                            e.target.value

                                        )

                                    }

                                />

                            </div>



                            <div className="form-group">

                                <label>

                                    College Type

                                </label>

                                <select

                                    value={formData.twelfth.collegeType}

                                    onChange={(e) =>

                                        handleChange(

                                            "twelfth",

                                            "collegeType",

                                            e.target.value

                                        )

                                    }

                                >

                                    <option value="">

                                        Select

                                    </option>

                                    <option>

                                        Government

                                    </option>

                                    <option>

                                        Private

                                    </option>

                                </select>

                            </div>



                            <div className="form-group">

                                <label>

                                    Passed Year

                                </label>

                                <input

                                    type="text"

                                    value={formData.twelfth.passedYear}

                                    onChange={(e) =>

                                        handleChange(

                                            "twelfth",

                                            "passedYear",

                                            e.target.value

                                        )

                                    }

                                />

                            </div>

                        </div>



                        <button

                            type="submit"

                            className="save-btn"

                        >

                            Save Educational Details

                        </button>

                    </form>

                ) : (

                    <div className="preview-card">

                        <h2>

                            Educational Details Saved

                        </h2>



                        <div className="preview-actions">

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

                                onClick={() =>

                                    navigate("/dashboard")

                                }

                            >

                                Go To Dashboard

                            </button>

                        </div>

                    </div>

                )

            }

        </div>

    );

}

export default EducationalDetails;