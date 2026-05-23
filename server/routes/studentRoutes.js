const express = require("express");

const router = express.Router();

const {
    updatePersonalDetails,
    getPersonalDetails
} = require("../controllers/studentController");



/* =========================
   SAVE PERSONAL DETAILS
========================= */

router.post(
    "/personal-details",
    updatePersonalDetails
);



/* =========================
   FETCH PERSONAL DETAILS
========================= */

router.get(
    "/personal-details/:userId",
    getPersonalDetails
);



module.exports = router;