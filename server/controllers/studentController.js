const User = require("../models/User");



/* =========================
   SAVE PERSONAL DETAILS
========================= */

exports.updatePersonalDetails = async (req, res) => {

    try {

        const {
            userId,
            personalDetails
        } = req.body;



        if (!userId) {

            return res.status(400).json({

                success: false,

                message: "User ID Missing"

            });

        }



        const updatedUser =
        await User.findByIdAndUpdate(

            userId,

            {
                personalDetails
            },

            {
                new: true
            }

        );



        if (!updatedUser) {

            return res.status(404).json({

                success: false,

                message: "User Not Found"

            });

        }



        res.status(200).json({

            success: true,

            message:
            "Personal Details Saved Successfully",

            user: updatedUser

        });

    }

    catch (error) {

        console.log(error);



        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};





/* =========================
   GET PERSONAL DETAILS
========================= */

exports.getPersonalDetails = async (req, res) => {

    try {

        const { userId } = req.params;



        const user =
        await User.findById(userId);



        if (!user) {

            return res.status(404).json({

                success: false,

                message: "User Not Found"

            });

        }



        res.status(200).json({

            success: true,

            personalDetails:
            user.personalDetails || {}

        });

    }

    catch (error) {

        console.log(error);



        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

/* =========================
   SAVE EDUCATIONAL DETAILS
========================= */

exports.saveEducationalDetails =
async (req, res) => {

    try {

        const {

            userId,

            educationalDetails

        } = req.body;



        if (!userId) {

            return res.status(400).json({

                success: false,

                message: "User ID Missing"

            });

        }



        const updatedUser =
        await User.findByIdAndUpdate(

            userId,

            {

                educationalDetails

            },

            {

                new: true

            }

        );



        if (!updatedUser) {

            return res.status(404).json({

                success: false,

                message: "User Not Found"

            });

        }



        res.status(200).json({

            success: true,

            message:
            "Educational Details Saved Successfully",

            user: updatedUser

        });

    }

    catch (error) {

        console.log(error);



        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};





/* =========================
   GET EDUCATIONAL DETAILS
========================= */

exports.getEducationalDetails =
async (req, res) => {

    try {

        const { userId } =
        req.params;



        const user =
        await User.findById(userId);



        if (!user) {

            return res.status(404).json({

                success: false,

                message: "User Not Found"

            });

        }



        res.status(200).json({

            success: true,

            educationalDetails:
            user.educationalDetails || {}

        });

    }

    catch (error) {

        console.log(error);



        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};