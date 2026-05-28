const express = require("express");

const router = express.Router();



/* =========================
   CONTROLLERS
========================= */

const {

    updatePersonalDetails,

    getPersonalDetails,

    saveEducationalDetails,

    getEducationalDetails,

    saveAddressDetails,
    
    getAddressDetails

} = require("../controllers/studentController");



/* =========================
   PERSONAL DETAILS
========================= */

/* SAVE PERSONAL DETAILS */

router.post(

    "/personal-details",

    updatePersonalDetails

);



/* FETCH PERSONAL DETAILS */

router.get(

    "/personal-details/:userId",

    getPersonalDetails

);




/* =========================
   EDUCATIONAL DETAILS
========================= */

/* SAVE EDUCATIONAL DETAILS */

router.post(

    "/educational-details",

    saveEducationalDetails

);



/* FETCH EDUCATIONAL DETAILS */

router.get(

    "/educational-details/:userId",

    getEducationalDetails

);

/* =========================
   ADDRESS DETAILS
========================= */

router.post(

    "/address-details",

    saveAddressDetails

);



router.get(

    "/address-details/:userId",

    getAddressDetails

);


/* =========================
   EXPORT ROUTER
========================= */

module.exports = router;