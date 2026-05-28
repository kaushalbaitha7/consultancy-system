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





const fetchAddressDetails =
useCallback(async () => {

    try {

        const res =
        await axios.get(

            `https://gyanguru-backend.onrender.com/api/student/address-details/${user._id}`

        );



        if (res.data.addressDetails) {

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





const validateForm = () => {

    const permanent =
    formData.permanent;



    if (

        !permanent.houseNo ||

        !permanent.streetColony ||

        !permanent.landmark ||

        !permanent.policeStation ||

        !permanent.villageTownCity ||

        !permanent.district ||

        !permanent.country ||

        !permanent.state ||

        !permanent.pinCode

    ) {

        setError(

            "Please fill all permanent address fields"

        );



        return false;

    }



    if (!formData.sameAddress) {

        const current =
        formData.current;



        if (

            !current.houseNo ||

            !current.streetColony ||

            !current.landmark ||

            !current.policeStation ||

            !current.villageTownCity ||

            !current.district ||

            !current.country ||

            !current.state ||

            !current.pinCode

        ) {

            setError(

                "Please fill all current address fields"

            );



            return false;

        }

    }



    return true;

};





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

Fill address carefully.

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

Select

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

</select>

</div>

</div>



<div className="same-address-card">

<input

type="checkbox"

checked={formData.sameAddress}

onChange={(e) =>

setFormData({

...formData,

sameAddress:
e.target.checked

})

}

/>



Current & Temporary Address Same As Permanent

</div>



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

<span>{key}</span>

<p>{value}</p>

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

<span>{key}</span>

<p>{value}</p>

</div>

))

}

</div>

</div>

)

}



<div className="preview-actions">

<button

className="edit-btn"

onClick={() => {

setManualEdit(true);

setPreviewMode(false);

}}

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



export default AddressDetails;