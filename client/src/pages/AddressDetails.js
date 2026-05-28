import {

    useState,

    useEffect,

    useCallback

} from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

import "../styles/educational.css";



function AddressDetails() {

    const navigate = useNavigate();



    const user =
    JSON.parse(localStorage.getItem("user"));



    const [previewMode, setPreviewMode] =
    useState(false);



    const [manualEdit, setManualEdit] =
    useState(false);



    const [error, setError] =
    useState("");



    const [formData, setFormData] =
    useState({

        sameAddress: true,



        permanent: {

            houseNo: "",

            streetColony: "",

            landmark: "",

            policeStation: "",

            villageTownCity: "",

            district: "",

            country: "",

            state: "",

            pinCode: ""

        },



        current: {

            houseNo: "",

            streetColony: "",

            landmark: "",

            policeStation: "",

            villageTownCity: "",

            district: "",

            country: "",

            state: "",

            pinCode: ""

        }

    });





    /* =========================
       FETCH ADDRESS DETAILS
    ========================= */

    const fetchAddressDetails =
    useCallback(async () => {

        try {

            const res =
            await axios.get(

                `https://gyanguru-backend.onrender.com/api/student/address-details/${user._id}`

            );



            if (

                res.data.addressDetails

            ) {

                setFormData((prev) => ({

                    ...prev,

                    ...res.data.addressDetails

                }));



                if (

                    res.data.addressDetails?.permanent?.houseNo

                    &&

                    !manualEdit

                ) {

                    setPreviewMode(true);

                }

            }

        }

        catch (error) {

            console.log(error);

        }

    }, [user, manualEdit]);





    useEffect(() => {

        fetchAddressDetails();

    }, [fetchAddressDetails]);





    /* =========================
       HANDLE CHANGE
    ========================= */

    const handleChange = (

        section,

        field,

        value

    ) => {

        setFormData((prev) => ({

            ...prev,

            [section]: {

                ...prev[section],

                [field]: value

            }

        }));

    };





    /* =========================
       VALIDATION
    ========================= */

    const validateForm = () => {

        const p =
        formData.permanent;



        if (

            !p.houseNo?.trim() ||

            !p.streetColony?.trim() ||

            !p.landmark?.trim() ||

            !p.policeStation?.trim() ||

            !p.villageTownCity?.trim() ||

            !p.district?.trim() ||

            !p.country?.trim() ||

            !p.state?.trim() ||

            !p.pinCode?.trim()

        ) {

            setError(

                "Please fill all permanent address fields"

            );



            return false;

        }



        if (!formData.sameAddress) {

            const c =
            formData.current;



            if (

                !c.houseNo?.trim() ||

                !c.streetColony?.trim() ||

                !c.landmark?.trim() ||

                !c.policeStation?.trim() ||

                !c.villageTownCity?.trim() ||

                !c.district?.trim() ||

                !c.country?.trim() ||

                !c.state?.trim() ||

                !c.pinCode?.trim()

            ) {

                setError(

                    "Please fill all current address fields"

                );



                return false;

            }

        }



        setError("");



        return true;

    };





    /* =========================
       SAVE ADDRESS DETAILS
    ========================= */

    const handleSubmit =
    async (e) => {

        e.preventDefault();



        if (!validateForm()) {

            return;

        }



        try {

            await axios.post(

                "https://gyanguru-backend.onrender.com/api/student/address-details",

                {

                    userId: user._id,

                    addressDetails:
                    formData

                }

            );



            setError("");



            setManualEdit(false);



            setPreviewMode(true);

        }

        catch (error) {

            console.log(error);

        }

    };





    return (

<div className="form-page">

<div className="form-header">

<h1>

Address Details

</h1>



<p>

Fill your permanent and temporary address carefully.

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

!previewMode ? (

<form

className="main-form"

onSubmit={handleSubmit}

>



{/* =========================
   PERMANENT ADDRESS
========================= */}

<div className="section-title">

Permanent Address

</div>



<div className="form-grid">

{

[

"houseNo",

"streetColony",

"landmark",

"policeStation",

"villageTownCity",

"district",

"pinCode"

]

.map((field) => (

<div

className="form-group"

key={field}

>

<label>

{field}

</label>



<input

type="text"

value={

formData.permanent[field]

}

onChange={(e) =>

handleChange(

"permanent",

field,

e.target.value

)

}

/>

</div>

))

}



<div className="form-group">

<label>

Country

</label>



<select

value={formData.permanent.country}

onChange={(e) =>

handleChange(

"permanent",

"country",

e.target.value

)

}

>

<option value="">

Select Country

</option>

<option>

India

</option>

<option>

Others

</option>

</select>

</div>



<div className="form-group">

<label>

State

</label>



<select

value={formData.permanent.state}

onChange={(e) =>

handleChange(

"permanent",

"state",

e.target.value

)

}

>

<option value="">

Select State

</option>

<option>Karnataka</option>

<option>Maharashtra</option>

<option>Bihar</option>

<option>West Bengal</option>

<option>Delhi</option>

<option>Tamil Nadu</option>

<option>Kerala</option>

<option>Telangana</option>

<option>Andhra Pradesh</option>

<option>Punjab</option>

<option>Rajasthan</option>

<option>Gujarat</option>

<option>Odisha</option>

</select>

</div>

</div>





{/* =========================
   SAME ADDRESS CHECKBOX
========================= */}

<div className="same-address-card">

<input

type="checkbox"

checked={formData.sameAddress}

onChange={(e) => {

    setFormData((prev) => ({

        ...prev,

        sameAddress:
        e.target.checked

    }));

}}

/>



<span>

Current / Temporary Address Same As Permanent

</span>

</div>





{/* =========================
   CURRENT ADDRESS
========================= */}

{

!formData.sameAddress && (

<>

<div className="section-title">

Current / Temporary Address

</div>



<div className="form-grid">

{

[

"houseNo",

"streetColony",

"landmark",

"policeStation",

"villageTownCity",

"district",

"pinCode"

]

.map((field) => (

<div

className="form-group"

key={field}

>

<label>

{field}

</label>



<input

type="text"

value={

formData.current[field]

}

onChange={(e) =>

handleChange(

"current",

field,

e.target.value

)

}

/>

</div>

))

}



<div className="form-group">

<label>

Country

</label>



<select

value={formData.current.country}

onChange={(e) =>

handleChange(

"current",

"country",

e.target.value

)

}

>

<option value="">

Select Country

</option>

<option>

India

</option>

<option>

Others

</option>

</select>

</div>



<div className="form-group">

<label>

State

</label>



<select

value={formData.current.state}

onChange={(e) =>

handleChange(

"current",

"state",

e.target.value

)

}

>

<option value="">

Select State

</option>

<option>Karnataka</option>

<option>Maharashtra</option>

<option>Bihar</option>

<option>West Bengal</option>

<option>Delhi</option>

<option>Tamil Nadu</option>

<option>Kerala</option>

<option>Telangana</option>

<option>Andhra Pradesh</option>

<option>Punjab</option>

<option>Rajasthan</option>

<option>Gujarat</option>

<option>Odisha</option>

</select>

</div>

</div>

</>

)

}





<button

type="submit"

className="save-btn"

>

Save Address Details

</button>

</form>

) : (

<div className="preview-card">

<h2>

Address Details Preview

</h2>



<div className="preview-section">

<h3>

Permanent Address

</h3>



<div className="preview-grid">

{

Object.entries(

formData.permanent

)

.map(([key, value]) => (

<div key={key}>

<span>

{key}

</span>



<p>

{value}

</p>

</div>

))

}

</div>

</div>





{

!formData.sameAddress && (

<div className="preview-section">

<h3>

Current Address

</h3>



<div className="preview-grid">

{

Object.entries(

formData.current

)

.map(([key, value]) => (

<div key={key}>

<span>

{key}

</span>



<p>

{value}

</p>

</div>

))

}

</div>

</div>

)

}





<div className="preview-actions">

<button

type="button"

className="edit-btn"

onClick={() => {

    setManualEdit(true);

    setPreviewMode(false);

}}

>

Edit Details

</button>



<button

type="button"

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



export default AddressDetails;