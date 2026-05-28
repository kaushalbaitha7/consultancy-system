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



            if (res.data.addressDetails) {

                setFormData({

                    sameAddress:
                    res.data.addressDetails?.sameAddress ?? true,



                    permanent: {

                        houseNo:
                        res.data.addressDetails?.permanent?.houseNo || "",

                        streetColony:
                        res.data.addressDetails?.permanent?.streetColony || "",

                        landmark:
                        res.data.addressDetails?.permanent?.landmark || "",

                        policeStation:
                        res.data.addressDetails?.permanent?.policeStation || "",

                        villageTownCity:
                        res.data.addressDetails?.permanent?.villageTownCity || "",

                        district:
                        res.data.addressDetails?.permanent?.district || "",

                        country:
                        res.data.addressDetails?.permanent?.country || "",

                        state:
                        res.data.addressDetails?.permanent?.state || "",

                        pinCode:
                        res.data.addressDetails?.permanent?.pinCode || ""

                    },



                    current: {

                        houseNo:
                        res.data.addressDetails?.current?.houseNo || "",

                        streetColony:
                        res.data.addressDetails?.current?.streetColony || "",

                        landmark:
                        res.data.addressDetails?.current?.landmark || "",

                        policeStation:
                        res.data.addressDetails?.current?.policeStation || "",

                        villageTownCity:
                        res.data.addressDetails?.current?.villageTownCity || "",

                        district:
                        res.data.addressDetails?.current?.district || "",

                        country:
                        res.data.addressDetails?.current?.country || "",

                        state:
                        res.data.addressDetails?.current?.state || "",

                        pinCode:
                        res.data.addressDetails?.current?.pinCode || ""

                    }

                });



                if (

                    res.data.addressDetails?.permanent?.houseNo

                ) {

                    setPreviewMode(true);

                }

            }

        }

        catch (error) {

            console.log(error);

        }

    }, [user?._id]);





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

                [field]: value || ""

            }

        }));

    };





    /* =========================
       VALIDATE FORM
    ========================= */

    const validateForm = () => {

        const p =
        formData.permanent;



        if (

            !p.houseNo.trim() ||

            !p.streetColony.trim() ||

            !p.landmark.trim() ||

            !p.policeStation.trim() ||

            !p.villageTownCity.trim() ||

            !p.district.trim() ||

            !p.country.trim() ||

            !p.state.trim() ||

            !p.pinCode.trim()

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

                !c.houseNo.trim() ||

                !c.streetColony.trim() ||

                !c.landmark.trim() ||

                !c.policeStation.trim() ||

                !c.villageTownCity.trim() ||

                !c.district.trim() ||

                !c.country.trim() ||

                !c.state.trim() ||

                !c.pinCode.trim()

            ) {

                setError(

                    "Please fill all temporary address fields"

                );



                return false;

            }

        }



        setError("");



        return true;

    };





    /* =========================
       SAVE DETAILS
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

["houseNo", "House No / Flat No"],

["streetColony", "Street / Colony"],

["landmark", "Landmark"],

["policeStation", "Police Station"],

["villageTownCity", "Village / Town / City"],

["district", "District"],

["pinCode", "Pin Code"]

]

.map(([field, label]) => (

<div

className="form-group"

key={field}

>

<label>

{label}

</label>



<input

type="text"

value={

formData.permanent[field] || ""

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

value={formData.permanent.country || ""}

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

value={formData.permanent.state || ""}

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

["houseNo", "House No / Flat No"],

["streetColony", "Street / Colony"],

["landmark", "Landmark"],

["policeStation", "Police Station"],

["villageTownCity", "Village / Town / City"],

["district", "District"],

["pinCode", "Pin Code"]

]

.map(([field, label]) => (

<div

className="form-group"

key={field}

>

<label>

{label}

</label>



<input

type="text"

value={

formData.current[field] || ""

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

value={formData.current.country || ""}

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

value={formData.current.state || ""}

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

<h2 className="preview-title">
Address Details Preview
</h2>



{/* =========================
   PERMANENT ADDRESS
========================= */}

<div className="preview-section">

<h3 className="preview-subtitle">
Permanent Address
</h3>



<div className="preview-grid">

<div className="preview-item">
<label>House No / Flat No</label>
<p>{formData.permanent.houseNo}</p>
</div>

<div className="preview-item">
<label>Street / Colony</label>
<p>{formData.permanent.streetColony}</p>
</div>

<div className="preview-item">
<label>Landmark</label>
<p>{formData.permanent.landmark}</p>
</div>

<div className="preview-item">
<label>Police Station</label>
<p>{formData.permanent.policeStation}</p>
</div>

<div className="preview-item">
<label>Village / Town / City</label>
<p>{formData.permanent.villageTownCity}</p>
</div>

<div className="preview-item">
<label>District</label>
<p>{formData.permanent.district}</p>
</div>

<div className="preview-item">
<label>State</label>
<p>{formData.permanent.state}</p>
</div>

<div className="preview-item">
<label>Country</label>
<p>{formData.permanent.country}</p>
</div>

<div className="preview-item">
<label>Pin Code</label>
<p>{formData.permanent.pinCode}</p>
</div>

</div>

</div>



{/* =========================
   CURRENT ADDRESS
========================= */}

{
!formData.sameAddress && (

<div className="preview-section">

<h3 className="preview-subtitle">
Current / Temporary Address
</h3>



<div className="preview-grid">

<div className="preview-item">
<label>House No / Flat No</label>
<p>{formData.current.houseNo}</p>
</div>

<div className="preview-item">
<label>Street / Colony</label>
<p>{formData.current.streetColony}</p>
</div>

<div className="preview-item">
<label>Landmark</label>
<p>{formData.current.landmark}</p>
</div>

<div className="preview-item">
<label>Police Station</label>
<p>{formData.current.policeStation}</p>
</div>

<div className="preview-item">
<label>Village / Town / City</label>
<p>{formData.current.villageTownCity}</p>
</div>

<div className="preview-item">
<label>District</label>
<p>{formData.current.district}</p>
</div>

<div className="preview-item">
<label>State</label>
<p>{formData.current.state}</p>
</div>

<div className="preview-item">
<label>Country</label>
<p>{formData.current.country}</p>
</div>

<div className="preview-item">
<label>Pin Code</label>
<p>{formData.current.pinCode}</p>
</div>

</div>

</div>

)
}



<div className="preview-actions">

<button
type="button"
className="edit-btn"
onClick={() =>
setPreviewMode(false)
}
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