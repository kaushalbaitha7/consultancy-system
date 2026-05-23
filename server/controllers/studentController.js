const User =
require("../models/User");



/* =========================
   SAVE PERSONAL DETAILS
========================= */

exports.updatePersonalDetails =
async (req, res) => {

    try {

        const {

            userId,

            personalDetails

        } = req.body;



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



        res.json({

            success: true,

            message:
            "Personal Details Saved",

            user: updatedUser

        });

    }

    catch (error) {

        res.status(500).json({

            success:false,

            message:error.message

        });

    }

};



/* =========================
   GET PERSONAL DETAILS
========================= */

exports.getPersonalDetails =
async (req, res) => {

    try {

        const { userId } =
        req.params;



        const user =
        await User.findById(userId);



        res.json({

            success:true,

            personalDetails:
            user.personalDetails

        });

    }

    catch (error) {

        res.status(500).json({

            success:false,

            message:error.message

        });

    }

};