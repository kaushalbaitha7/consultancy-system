const express =
require("express");

const router =
express.Router();



const {

    updatePersonalDetails,

    getPersonalDetails

}

= require(
"../controllers/studentController"
);



/* SAVE */

router.post(

    "/personal-details",

    updatePersonalDetails

);



/* FETCH */

router.get(

    "/personal-details/:userId",

    getPersonalDetails

);



module.exports = router;